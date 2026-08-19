# Repository Agent Instructions

This repository is the canonical code repository for Greg Tysick's personal website.

## Branch and deployment boundaries

- `main` = current production `gregtysick.com`. Do not modify, merge into, or deploy production without explicit production approval.
- `site-integration` = active staging/development branch for `staging.gregtysick.com`.
- `site/` is the only public deployable surface.
- The separate existing `greg.tysick.com` compact profile site is not replaced by this branch.

## Locked site architecture

The site is one integrated experience:

1. `/` opens directly into the animated Journey.
2. Persistent navigation is visible immediately above the Journey.
3. Conventional/static pages provide factual detail at `/experience/`, `/projects/`, `/writing/`, and `/about/`.
4. LinkedIn and GitHub are external evidence/profile destinations.
5. Contact must remain immediately accessible.

Core rule: **The journey explains the arc. The conventional pages prove it.**

Do not restart discovery or split the animation and professional pages into competing sites.

## Current execution priority

Work visual-first on `site-integration`:

- approved Practical Engineer Beaver identity;
- Greg-specific six-chapter scenery;
- movement, grounding, scale, pacing, camera and mobile composition;
- keep navigation/static pages functional while visual work proceeds;
- content polish follows after the rough integrated visual experience works.

## Cleanup rules

- Before deleting historical/prototype material, prove it is unused and that its replacement is present on `site-integration`.
- `site/details/`, old Cartographer fox/vehicle/demo assets, and unused source files are cleanup candidates, not automatic deletions.
- Preserve source/raw graphics outside the deployable surface when practical; keep only optimized public assets in `site/assets/`.
- Do not remove the production-site recovery path. Confirm current copies of both `gregtysick.com` and `greg.tysick.com` are archived in the Managed Folder before aggressive cleanup.

## Staging publish

The `site-integration` `.cpanel.yml` deploys `site/*` to `/home/beaufgfv/staging.gregtysick.com/`.

Before deployment, verify the cPanel checkout is this repository on branch `site-integration`, pull the current remote HEAD, deploy HEAD, smoke-test desktop/mobile, and explicitly confirm `gregtysick.com` production was untouched.
