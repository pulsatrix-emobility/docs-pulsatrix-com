# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm start          # start local dev server with hot reload
npm run build      # generate static output to build/
npm run serve      # serve the built output locally
npm run clear      # clear Docusaurus cache (use when build behaves unexpectedly)
```

No linting or test scripts are configured in this project.

## Architecture

This is a [Docusaurus 3](https://docusaurus.io/) static documentation site for the pulsatrix e-mobility EV charging system.

**Key configuration files:**
- `docusaurus.config.js` — site metadata, navbar, footer, presets, and the `redocusaurus` OpenAPI plugin config
- `sidebars.js` — manually maintained sidebar tree mapping doc IDs to the navigation structure

**Content (`docs/`)** is organized by product area — all doc files use `.mdx` format:
- `intro.mdx` — landing page doc
- `instructions/` — end-user guides (first steps, admin guide)
- `controller/` — Charging Controller docs, subdivided into REST/WebSocket API, MQTT API, and Solar Surplus Charging
- `controller/modbus/` — Modbus Server doc exists but is commented out in `sidebars.js`
- `backend/` — Backend API docs (`backend-api.mdx`)

When adding a new doc, register it in `sidebars.js` using its path relative to `docs/` without the `.mdx` extension as the `id` (e.g. `controller/mqtt-api/new-topic`).

**OpenAPI / Swagger:** The REST API is also rendered via `redocusaurus` from `static/openapi.yaml`, available at `/user-api/swagger/`. When updating the API docs, keep `static/openapi.yaml` and the corresponding Markdown under `docs/controller/rest-ws-api/` in sync.

**Custom UI (`src/`):**
- `src/pages/index.js` — homepage, uses `HomepageFeatures` component and a custom header with pulsatrix branding
- `src/components/HomepageFeatures/` — feature cards on the landing page
- `src/theme/NotFound/` — swizzled 404 page
- `src/css/custom.css` — global CSS overrides; Docusaurus uses CSS variables for theming (dark mode only — `disableSwitch: true`)

**Deployment:** Targets GitHub Pages at `pulsatrix-emobility.github.io`. The `static/CNAME` file sets the custom domain. `onBrokenLinks` is set to `'throw'`, so broken internal links will fail the build.

**Custom skills:** `.claude/skills/merge-dependabot.md` — skill for checking out, building, and merging Dependabot PRs. Invoke with `/merge-dependabot`.