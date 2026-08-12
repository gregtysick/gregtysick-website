# Staging Setup — gregtysick.com Story Site

## Purpose
Create a safe browser-accessible staging environment for the `story-site-prototype` branch without touching the production `gregtysick.com` document root.

## Chosen staging hostname
`staging.gregtysick.com`

Reason: `gregtysick.com` is the recommended canonical full personal site. `greg.tysick.com` can remain the compact profile/link-card identity surface.

## Required cPanel setup
1. In Namecheap cPanel, create the domain/subdomain `staging.gregtysick.com`.
2. Do **not** share the production document root.
3. Set the document root exactly to:
   `/home/beaufgfv/staging.gregtysick.com`
4. Confirm DNS/AutoSSL resolves HTTPS for `staging.gregtysick.com`.
5. In cPanel Git Version Control, create a separate staging checkout/clone of:
   `https://github.com/gregtysick/gregtysick-website.git`
6. Set the checked-out branch to:
   `story-site-prototype`
7. Pull/update the branch.
8. Deploy HEAD. The branch-specific `.cpanel.yml` copies only `site/*` into `/home/beaufgfv/staging.gregtysick.com/`.
9. Verify the staging URL loads on desktop and mobile.
10. Confirm production `gregtysick.com` remains unchanged.

## Safety boundary
- Production branch: `main`
- Prototype branch: `story-site-prototype`
- Production document root: `/home/beaufgfv/gregtysick.com/`
- Staging document root: `/home/beaufgfv/staging.gregtysick.com/`

Do not deploy `story-site-prototype` from the production cPanel repository checkout.
Do not merge PR #1 or modify production DNS/document roots as part of staging setup.

## Verification report
Return:
- staging hostname and document root;
- DNS/SSL status;
- cPanel repository path;
- checked-out branch;
- deployed commit SHA;
- desktop/mobile load result;
- explicit confirmation that production remains unchanged.
