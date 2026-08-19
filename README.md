# gregtysick-website

Canonical repository for Greg Tysick's personal website.

## Current architecture

The project is one integrated website, not separate animated and static sites.

- **Production:** `https://gregtysick.com` — branch `main`; do not modify/deploy without explicit production approval.
- **Staging/review:** `https://staging.gregtysick.com` — branch `site-integration`.
- **Compact profile site:** `https://greg.tysick.com` — separate existing site and not replaced by staging work in this branch.

## Staging site structure

`site-integration` is the active development branch.

- `/` — animated Journey homepage (`From Ledgers to Agents`)
- `/experience/` — conventional/static professional experience layer
- `/projects/` — conventional/static projects layer
- `/writing/` — conventional/static writing layer
- `/about/` — conventional/static about layer
- LinkedIn — external professional profile
- GitHub — external project/profile evidence
- Contact — direct contact action (a dedicated static contact page may be added during cleanup)

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

## Staging deployment

The `site-integration` branch `.cpanel.yml` deploys `site/*` to:

`/home/beaufgfv/staging.gregtysick.com/`

The cPanel staging checkout must be the Greg-owned repository and checked out to `site-integration` before deploying HEAD.

Production `main` and `/home/beaufgfv/gregtysick.com/` are outside the staging deployment boundary.

See `docs/staging-setup.md` for the staging procedure.

## Current execution priority

1. Keep the complete rough integrated structure working on staging.
2. Replace remaining placeholder traveler/demo assets with the approved Practical Engineer Beaver assets.
3. Develop/tune Greg-specific scenery, movement, scale, grounding, pacing and mobile composition.
4. Preserve the conventional pages and navigation while visual work proceeds.
5. Refine content after the visual experience is convincing.

## Repository cleanup boundary

Historical prototypes, placeholder Cartographer assets, legacy `/details/` material and unused source files should be reviewed before deletion. Do not remove anything merely because it appears old until its replacement is confirmed in `site-integration` and the prior production sites are safely archived in the Managed Folder.
