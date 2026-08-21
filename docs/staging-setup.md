# Staging Setup — gregtysick.com Integrated Site

## Purpose
Maintain a safe browser-accessible staging environment for the integrated `staging` branch without touching the production `gregtysick.com` document root.

## Staging hostname
`staging.gregtysick.com`

`gregtysick.com` remains the intended canonical full personal site. `greg.tysick.com` can remain the compact profile/link-card identity surface.

## Required cPanel setup
1. In Namecheap cPanel, confirm the domain/subdomain `staging.gregtysick.com` exists.
2. Do **not** share the production document root.
3. Set the document root exactly to:
   `/home/beautifulgrowth/staging.gregtysick.com`
4. Confirm DNS/AutoSSL resolves HTTPS for `staging.gregtysick.com`.
5. In cPanel Git Version Control, use a separate staging checkout/clone of:
   `https://github.com/gregtysick/gregtysick-website.git`
6. Set the checked-out branch to:
   `staging`
7. Pull/update the branch.
8. Deploy HEAD. `.cpanel.yml` copies only `site/*` into `/home/beautifulgrowth/staging.gregtysick.com/`.
9. Verify the Journey homepage and persistent navigation load on desktop and mobile.
10. Confirm production `gregtysick.com` remains unchanged.

## Safety boundary
- Production branch: `main`
- Integrated staging branch: `staging`
- Production document root: `/home/beautifulgrowth/gregtysick.com/`
- Staging document root: `/home/beautifulgrowth/staging.gregtysick.com/`

Do not deploy `staging` from the production cPanel repository checkout.
Do not merge to `main`, modify production DNS, or change production document roots as part of staging work.

## Current deployment intent
The staging branch is the active visual-development surface. The Journey root, Experience, Projects, Writing and About routes should be reviewed there before any production decision.

## Verification report
Return:
- staging hostname and document root;
- DNS/SSL status;
- cPanel repository path;
- checked-out branch;
- deployed commit SHA;
- desktop/mobile load result;
- explicit confirmation that production remains unchanged.
