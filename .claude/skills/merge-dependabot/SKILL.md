# Merge Dependabot PR

Find the latest open Dependabot PR for this repository, check it out, run `npm install` and `npm run build`, and merge it if the build succeeds.

## Steps

1. Find open Dependabot PRs:
```bash
gh pr list --author "app/dependabot" --state open --json number,title,headRefName
```

2. If multiple PRs exist, ask the user which one to merge.

3. Check out the PR branch:
```bash
gh pr checkout <number>
```

4. Install dependencies and build:
```bash
npm install
npm run build
```

5. If the build succeeds:
   - Merge the PR and return to master:
   ```bash
   gh pr merge <number> --merge --delete-branch
   git checkout master
   git pull
   ```

6. If the build fails:
   - Show the build output
   - Do NOT merge
   - Return to master:
   ```bash
   git checkout master
   ```