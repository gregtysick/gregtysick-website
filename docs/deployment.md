# Deployment Notes

## Public surface

Only files under `site/` are deployable.

## Branch/domain boundaries

### Production

- Domain: `https://gregtysick.com`
- Branch: `main`
- Document root: `/home/beautifulgrowth/gregtysick.com/`
- Do not merge/deploy production without explicit production approval.

### Staging

- Domain: `https://staging.gregtysick.com`
- Branch: `staging`
- Document root: `/home/beautifulgrowth/staging.gregtysick.com/`
- This is the active review/development surface for the integrated Journey + conventional professional site.

### Separate compact profile

`https://greg.tysick.com` remains a separate compact profile/business-card site. It is not the deployment target of this repository branch.

## Production release

On 2026-11-09 Greg approved replacing the former business-card homepage on `gregtysick.com` with the verified staging MVP. The independent compact card is served by `greg.tysick.com` from `gregtysick/greg.tysick-website`. The production document root was confirmed through cPanel as `/home/beautifulgrowth/gregtysick.com/`. Its pre-release contents were copied to `/home/beautifulgrowth/backup-gregtysick-com-20261109-pre-mvp/`. The business-card domain has a separate backup at `/home/beautifulgrowth/backup-greg-tysick-com-20261109-pre-card/`.

The cPanel Git update API returned success without advancing its staging checkout on this date. Never copy from that checkout solely on API success. Verify the exact commit, or upload the `site/` files from a fresh checkout of the intended release commit and compare them over HTTPS. Preserve hidden validation files and existing unrelated files unless separately approved for deletion.

## Staging deploy flow

1. In cPanel Git Version Control, use a separate checkout of `gregtysick/gregtysick-website` for staging.
2. Verify that checkout is on `staging`.
3. Pull/update from the GitHub remote.
4. Confirm the intended remote HEAD SHA.
5. Deploy HEAD only after confirming the checkout SHA. The branch `.cpanel.yml` copies `site/*` to `/home/beautifulgrowth/staging.gregtysick.com/`. If the checkout is stale, use a fresh checkout and verified direct upload.
6. Verify `/` opens into the animated Journey and that the persistent navigation reaches Experience, Projects, Writing, About, LinkedIn, GitHub and Contact.
7. Smoke-test desktop and phone.
8. Explicitly confirm production `gregtysick.com` remains unchanged.

## Safety/recovery rule

Before repository cleanup or a future production cutover, verify current backups of both public document roots and record their locations in the Greg Tysick Managed Folder. The 2026-11-09 server-side backups are recorded above and in the launch journal.

Do not publish repository documentation outside `site/`.
