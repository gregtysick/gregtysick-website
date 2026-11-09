# Greg Tysick website — MVP release gate
Date: 2026-11-09
Owner: Greg Tysick / Greg Tysick Managed Folder
Project: `Obsidian/ExecFunc/Greg Tysick/Projects/gregtysick.com - Personal Site`

## Intended end state
- `gregtysick.com`: animated *From Ledgers to Agents* Journey plus professional pages.
- `greg.tysick.com`: compact business-card page, sourced from the former main-domain site.
- `staging.gregtysick.com`: non-indexed preview environment.

## Completed on GitHub staging (not yet deployed by this session)
- Header reduced to Journey / Experience / Projects / Writing / Contact.
- LinkedIn and GitHub profile links now appear on Contact only; About remains available in conventional-page footers.
- Experience changed from empty `#chapters` + six placeholder anchor sections into six readable static chapters with working anchor IDs.
- Projects summaries retained, repetitive Coming Soon notices removed, and Analytics language made tool-neutral.
- Writing reduced to Articles and Case Studies, both Coming Soon. The Notes card was removed.
- Navigation fixes added to `site/styles/site.css` to keep five links accessible on mobile.
- HTML-only/no-JS home fallback improved.
- Journey and Experience now emphasize modern workflows, systems, dashboards, KPIs and business adoption instead of repetitive AI slogans. Existing deep-link anchors stay intact.
- On staging, `noindex,nofollow` remains intentionally intact.

## Pre-deploy safety: protect uncommitted work
1. **Do not reset/clean** the VPS checkout `/home/greg/repos/gregtysick-website`. The 2026-08-26 journal records uncommitted corrected Beaver idle/walk assets, six chapter evolution images and waypoint engine work. Inspect, preserve, reconcile, and only then commit or stash explicitly.
2. Inspect the cPanel checkout `/home/beautifulgrowth/gregtysick-website` for deliberately uncommitted server files before any update.
3. Inspect both old production document roots and save rollback copies. Do not delete `greg.tysick-website` or historical sites.

## Deploy updated staging
Use the existing documented Coach/Pilot deploy infrastructure. Existing script:
`/home/greg/.hermes/profiles/coach/scripts/cpanel-staging-deploy.py`
Call pattern:
`python3 cpanel-staging-deploy.py gregtysick-website site staging.gregtysick.com`
This is a reference for the existing authenticated operator only; tokens must not go into GitHub or Markdown.

Make sure the staging checkout is actually on `staging`; its `.cpanel.yml` deploy target is
`/home/beautifulgrowth/staging.gregtysick.com/`.
Confirm the live staging files match the expected GitHub commit SHA. GitHub push alone does **not** imply staging deployment.

## Staging acceptance tests
- Desktop and mobile: Journey loads and can scroll, swipe, drag, reverse, and loop; nav clickable; loading state clears; no JS console errors.
- Beaver: Greg confirms the stopped Beaver is cropped/legless while walking shows feet. Recover the corrected 2026-08-26 VPS worktree, reconcile it with new GitHub changes and visually verify. GitHub issue #3 is the MVP blocker.
- Experience: six populated chapters and direct anchors `/experience/#ledger`, `#practice`, `#network`, `#builder`, `#models`, `#operating-system` work.
- Projects displays six summaries; Writing explicitly says Coming Soon.
- About and Contact links work. Verify `hello@tysick.com` is deliverable; it is currently a mailto action, not a server-side contact form.
- Site responsive at 390px/768px/1440px, keyboard tab order readable; reduced motion and WebGL fallback usable.
- No broken image/asset requests and SSL works.

## Production release — STOP until staging acceptance and explicit approval
1. Confirm GitHub compare `main...staging` remains fast-forwardable; capture pre-release `main` SHA and site snapshots.
2. Promote approved content from `staging` to `main` with verified commit history.
3. **Critical:** `staging/.cpanel.yml` points at `/home/beautifulgrowth/staging.gregtysick.com/`. Before any production deployment, verify the *actual* production document root in cPanel, then set the production deployment configuration accordingly. The committed `main/.cpanel.yml` points to `/home/beaufgfv/gregtysick.com/` while the August 26 SOP lists `/home/beautifulgrowth/gregtysick.com/`. Never run staging's deployment recipe against production.
4. On production `main`, replace `<meta name="robots" content="noindex,nofollow" />` on each public page with appropriate index/follow. Add production canonical and social metadata, and remove any remaining “prototype/not production” labels.
5. Verify the cPanel **production checkout** is on `main`, update checkout only after examining uncommitted work, then explicitly deploy to the production document root.
6. Test homepage and five pages; validate production domains, www/HTTPS redirects, social links, favicon, email action, crawlability, and mobile.
7. Record deployed SHA and rollback point in Managed Folder and update ExecFunc Project Manager GT-SITE-001/TASK-GT-002.

## Separate card site
The compact card page in `gregtysick/greg.tysick-website/main` was committed earlier as
`5c67d3057406eb0a68ec789be715a84896f79dbb`.
It still requires a cPanel deployment to `/home/beaufgfv/greg.tysick.com/` and verification.

## V1 choices approved in the 2026-11-09 chat
- Keep Writing as Coming Soon for Articles and Case Studies only; remove Notes.
- Keep Projects as compact summaries for future one-by-one review.
- Remove LinkedIn and GitHub from top nav and standard footers. Keep those profile links on Contact only; keep About in the footer.
- Defer final watercolor world art and case studies if the existing Journey is visually acceptable.
- Improve Experience substantively before launch.

## 2026-11-09 second-pass acceptance and visual issue
Greg confirmed the Beaver loses its feet while idling/bobbing. The August 26 documentation already identified cropped Beaver 6 idle imagery, with corrected derivatives and six evolution assets preserved in the *uncommitted* VPS worktree. Resolve it through the existing engineering batch, do not blindly reset and redo. Engineering issue: https://github.com/gregtysick/gregtysick-website/issues/3

Editorial decisions: Models focuses on systems, dashboards, KPIs and programmatic decision-making; the final chapter is **Modern Workflows** (same `operating-system` anchor) and explains AI-native business adoption without repeated AI slogans. Writing is Articles + Case Studies only; LinkedIn/GitHub profile links live on Contact. This is an MVP, not authorization for a broad redesign or a new artwork campaign.

**Hosting-path discrepancy:** `main/.cpanel.yml` currently says `/home/beaufgfv/gregtysick.com/`; the Operating Library SOP says `/home/beautifulgrowth/gregtysick.com/`. These sources conflict. Resolve using current cPanel domain configuration before production action.

The updated content is in GitHub `staging` only. Neither staging nor production has been deployed through this chat.
