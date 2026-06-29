# Merge Dependabot PR

Find open Dependabot PRs for this repository, let the user choose which to merge (one specific PR or all at once), and merge only if the build succeeds.

## Steps

1. Find open Dependabot PRs:
```bash
gh pr list --author "app/dependabot" --state open --json number,title,headRefName
```

2. If only one PR exists, confirm with the user before proceeding.
   If multiple PRs exist, ask the user: **which one to merge, or all of them?**

3. **If merging a single PR:**
   - Check out the PR branch:
     ```bash
     gh pr checkout <number>
     ```
   - Install dependencies and build:
     ```bash
     npm install
     npm run build
     ```
   - If the build succeeds, merge and return to master:
     ```bash
     gh pr merge <number> --merge --delete-branch
     git checkout master
     git pull
     ```
   - If the build fails, show the output, do NOT merge, and return to master:
     ```bash
     git checkout master
     ```

4. **If merging all PRs:**

   **Strategy A — Combined branch (try first):**
   - Create a new branch off master:
     ```bash
     git checkout master
     git checkout -b dependabot-merge-all
     ```
   - Merge all Dependabot PR branches into it one by one:
     ```bash
     git merge origin/<headRefName>
     ```
     Repeat for each PR. If any merge conflict occurs, abort and fall back to Strategy B.
   - Install dependencies and build:
     ```bash
     npm install
     npm run build
     ```
   - If the build succeeds, push the combined branch and open a single PR, then merge it:
     ```bash
     git push -u origin dependabot-merge-all
     gh pr create --title "chore: merge all Dependabot updates" --body "Combined merge of all open Dependabot PRs." --base master
     gh pr merge --merge --delete-branch
     git checkout master
     git pull
     ```
     Then close the individual Dependabot PRs without merging:
     ```bash
     gh pr close <number> --comment "Merged via combined branch dependabot-merge-all."
     ```
   - If the build fails, clean up and fall back to Strategy B:
     ```bash
     git checkout master
     git branch -D dependabot-merge-all
     ```

   **Strategy B — Merge PRs one by one (fallback):**
   - For each PR in order (lowest number first):
     - Check it out, install, build.
     - If build succeeds: merge it, return to master, pull.
     - If build fails: show output, skip that PR, continue with the next.
   - Report which PRs were merged and which were skipped.
