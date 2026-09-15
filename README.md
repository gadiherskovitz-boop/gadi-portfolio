# Gadi Herskovitz — Portfolio

A minimal personal site for job applications. Static HTML, CSS, and vanilla JS. No build step.

Live (once GitHub Pages is enabled): [https://gadiherskovitz-boop.github.io/gadi-portfolio/](https://gadiherskovitz-boop.github.io/gadi-portfolio/)

## Preview locally

Any static file server from this folder works. Examples:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx --yes serve .
```

Then open [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser. Project data is loaded from `data/projects.js` (a script tag), so it does not depend on `fetch` and works over `file://`.

There is no `npm run build`. The site is already the deployable artifact.

## Project data

Projects live in:

- `data/projects.js` — loaded by the page
- `data/projects.json` — same content, easier to edit / generate from

Fields: `id`, `title`, `description`, `tools[]`, `images[]`, `placeholder` (boolean).

Images are relative paths from the site root (e.g. `assets/call-brief-1.svg`). Set `placeholder: true` on dummy entries. The flag is in the data for swapping later; it is not shown on the page (keeps the site job-application-ready).

## GitHub Pages

This is a **project site**. The public URL path is `/gadi-portfolio/`.

All asset URLs in the HTML are **relative** (`./css/styles.css`, `./assets/...`), so no `base` tag and no extra `basePath` config are required. The same files work at the repo root on GitHub Pages and on localhost.

### First-time setup

1. Push this folder to `main` on [gadiherskovitz-boop/gadi-portfolio](https://github.com/gadiherskovitz-boop/gadi-portfolio).
2. Repo **Settings → Pages**:
   - Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy-pages.yml` deploys on every push to `main` (and can be run manually).
4. Wait for the Actions run to finish, then visit  
   `https://gadiherskovitz-boop.github.io/gadi-portfolio/`

If the workflow is skipped or Pages still shows “not published,” confirm Pages source is GitHub Actions (not “Deploy from a branch”).
