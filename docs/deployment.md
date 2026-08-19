# Deployment Notes

## Public surface

Only files under `site/` are deployable.

## Branch/domain boundaries

### Production

- Domain: `https://gregtysick.com`
- Branch: `main`
- Document root: `/home/beaufgfv/gregtysick.com/`
- Do not merge/deploy production without explicit production approval.

### Staging

- Domain: `https://staging.gregtysick.com`
- Branch: `site-integration`
- Document root: `/home/beaufgfv/staging.gregtysick.com/`
- This is the active review/development surface for the integrated Journey + conventional professional site.

### Separate compact profile

`https://greg.tysick.com` remains a separate compact profile/business-card site. It is not the deployment target of this repository branch.

## Staging deploy flow

1. In cPanel Git Version Control, use a separate checkout of `gregtysick/gregtysick-website` for staging.
2. Verify that checkout is on `site-integration`.
3. Pull/update from the GitHub remote.
4. Confirm the intended remote HEAD SHA.
5. Deploy HEAD. The branch `.cpanel.yml` copies `site/*` to `/home/beaufgfv/staging.gregtysick.com/`.
6. Verify `/` opens into the animated Journey and that the persistent navigation reaches Experience, Projects, Writing, About, LinkedIn, GitHub and Contact.
7. Smoke-test desktop and phone.
8. Explicitly confirm production `gregtysick.com` remains unchanged.

## Safety/recovery rule

Before aggressive repository cleanup or any future production cutover, confirm current snapshots of both existing public sites (`gregtysick.com` and `greg.tysick.com`) are archived in the Greg Tysick Personal Site Managed Folder under `Previous Site Versions`.

Do not publish repository documentation outside `site/`.
