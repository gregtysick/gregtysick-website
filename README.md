# gregtysick-website

Canonical repository for Greg Tysick's personal website.

## Current architecture

The project is one integrated website, not separate animated and static sites.

- **Production:** `https://gregtysick.com` — branch `main`, integrated Journey and professional pages.
- **Staging/review:** `https://staging.gregtysick.com` — branch `staging`.
- **Compact profile site:** `https://greg.tysick.com` — separate business-card repository `gregtysick/greg.tysick-website`.

## Site structure

`main` serves production; `staging` is the review and development branch.

- `/` — animated Journey homepage (`From Ledgers to Agents`)
- `/experience/` — conventional/static professional experience layer
- `/projects/` — conventional/static projects layer
- `/writing/` — conventional/static writing layer
- `/about/` — conventional/static about layer
- LinkedIn — external professional profile
- GitHub — external project/profile evidence
- `/contact/` — dedicated static contact page and direct email action

The persistent navigation is intentionally visible above the Journey so visitors can leave the animation immediately and reach factual professional information.

Core rule:

> The journey explains the arc. The conventional pages prove it.

## Public deployable surface

Only `site/` is deployed.

- `site/index.html` — Journey engine/homepage and persistent navigation
- `site/map.config.js` — Greg-specific six-chapter Journey configuration
- `site/assets/` — public Journey/static-site assets
- `site/experience/`, `site/projects/`, `site/writing/`, `site/about/` — conventional pages
- `site/styles/` — shared conventional-page styling

## Deployment

`main/.cpanel.yml` targets `/home/beautifulgrowth/gregtysick.com/`; `staging/.cpanel.yml` targets `/home/beautifulgrowth/staging.gregtysick.com/`. Publish only the intended branch to its matching domain. The registered cPanel staging Git checkout was stale on 2026-11-09 despite a success response. Verify the checkout SHA before any Git-based deployment; use a fresh checkout and cPanel File Manager upload when it does not advance. See `docs/deployment.md` and `docs/staging-setup.md`.

## Follow-on work

Continue visual polish, content refinement, accessibility checks, and verified staging previews in the `staging` branch before any future production release.

## Repository cleanup boundary

Historical prototypes, placeholder Cartographer assets, legacy `/details/` material and unused source files should be reviewed before deletion. Do not remove anything merely because it appears old until its replacement is confirmed in `staging` and the prior production sites are safely archived in the Managed Folder.
