# Codex Handoff — Greg Tysick Website: Staging Parity and Continued Work
**Prepared:** 2026-11-10
**Status:** Active work instruction; supersedes older *pre-launch* instructions. Start with verification, not deployment.
**Goal:** Make staging match the working production Beaver/Journey behavior while preserving all newer staging changes, then validate the staging environment and leave production untouched.

## Required orientation
The canonical personal managed folder is:
D:\Dropbox\Obsidian\ExecFunc\Greg Tysick

Read, in order:
1. `AGENTS.md`, `managed-folder.config.md`, `_operations/current-state.md`.
2. `Projects/gregtysick.com - Personal Site/README.md` and relevant files under `Project/`.
3. `_scribe/handoffs/2026-11-09 - GregTysick Two-Site Launch Handoff.md` **(current)**.
4. `_scribe/journals/2026-11-09 - GregTysick Two-Site Production Launch.md` **(actual deployed record)**.
5. `_scribe/journals/2026-08-26 - Beaver Engineering Pause Checkpoint.md` (historical asset investigation and dirty VPS working tree).
6. This handoff. Inspect `docs/MVP-LAUNCH-2026-11-09.md` with caution: parts predate the completed production launch.
7. GitHub issue #3 at https://github.com/gregtysick/gregtysick-website/issues/3 (historical issue; update its assessment, do not blindly execute its original pre-launch instructions).

## Important correction: both public sites have ALREADY launched
On **2026-11-09**, Greg explicitly approved and completed the two-site release. Do not redo this cutover.
- **https://gregtysick.com/**: animated Journey + professional pages, repository `gregtysick/gregtysick-website`, production `main` release `7f2a5f223a6be9b69ae1c3798422b74d7a9ebeb3`. Launch journal verified 32/32 deployed files over HTTPS and Beaver with visible feet.
- **https://greg.tysick.com/**: separate compact business card, repository `gregtysick/greg.tysick-website`, `main` release `5e0384d095142d5d399b2fae0b22b005a66f1fe8`. Launch journal verified 6/6 files.
- **https://staging.gregtysick.com/**: non-indexed Journey preview. Accepted launch baseline was `f8a987fb51b7a1d294211829549a35e023e3aee7`. There have been **additional staging commits** since that accepted baseline.

Greg subsequently directed that the eventual business-card destination should become `gregtysick.com/contact`, with a future redirect from `greg.tysick.com` **only once he approves that transition**. Do not change the separate business-card domain or redirect now.

## New defect report, 2026-11-10
Greg reports: **The Beaver has full legs while idling on the live production Journey, but the staging Journey still shows a legless upper body when stopped/bobbing.** Walking frames have legs.

Important verified technical facts from GitHub on 2026-11-10:
- `site/assets/beaver-idle.png` has **the identical Git blob SHA** on `main` and `staging`: `75628ad871ae7babec7804edd81c7a27513f59be`.
- `site/map.config.js` is also identical on both branches: blob `c4007b77eb1e330bbb9bb25ccd8dd7405073c3fc`. Idle and walking height are 0.85 and both use no y-offset.
- The **entire page body and JavaScript module of `site/index.html` are identical** between current `main` and `staging`; differences are in the HTML head (production SEO/canonical metadata).
- The two branches are **diverged**, not safely fast-forwardable. As checked 2026-11-10: `main` head `7f2a5f2`; `staging` head approximately `9c15653`. Staging has 3 additional commits after the common release ancestor, covering contact-card development and a contact vCard; main has one production-only release commit. Recheck live refs before taking action.
- Therefore **do not assume the current checked-in idle graphic or engine is wrong**. The actual cause may be a different/stale deployed file, browser cache/service-worker/cache headers, or a rendering/state difference. This is a hypothesis, not a diagnosis.

### First priority — prove exactly why staging differs
1. Use real browser/devtools and a command-line HTTP fetch to inspect BOTH `https://gregtysick.com/` and `https://staging.gregtysick.com/` on the same viewport, at equivalent journey positions and stopped/moving states. Record screenshots.
2. Fetch and SHA-256 compare the **actual served** `/assets/beaver-idle.png`, `/assets/beaver-walk-a.png`, `/assets/beaver-walk-b.png`, `/map.config.js`, and homepage HTML/JS; compare each to GitHub source and the 2026-11-09 release manifest. Test with cache disabled and a hard reload.
3. Inspect loaded WebGL textures and which image is selected for the stopped state (including six chapter-specific stop poses). Determine whether only a particular chapter or all stops are affected.
4. Check image alpha bounding boxes / bottom padding and display scale only **after** ruling out stale deployment/cache. Preserve the working full-body Beaver from production. No new character generation.
5. If a bug is real, make the smallest verified fix on `staging`, without overwriting new Contact page changes.
6. Demonstrate stopped/forward/reverse/waypoint/loop and mobile. Record definitive screenshots, test details and SHA evidence.

## Deployment caution: stale cPanel checkout
The November 9 journal proves the cPanel-registered staging Git checkout remained at **19e2eb8** even when its update API said success. Production and staging were deployed using **fresh exact-commit checkouts + cPanel Fileman upload + SHA-256 verification**.
- **DO NOT run the old staging deploy script's copy stage from the stale registered checkout.** It can overwrite new deployed content with old files.
- The original dirty VPS worktree `/home/greg/repos/gregtysick-website` contains preserved August Beaver/engine work and **must not be reset, cleaned, or overwritten**. Inspect, reconcile and preserve deliberately.
- Production cPanel document root was verified as `/home/beautifulgrowth/gregtysick.com/`; staging as `/home/beautifulgrowth/staging.gregtysick.com/`. Keep environments isolated.
- Production backups from Nov 9: `/home/beautifulgrowth/backup-gregtysick-com-20261109-pre-mvp/` and `/home/beautifulgrowth/backup-greg-tysick-com-20261109-pre-card/`.
- Prefer repairing and verifying the staging deploy mechanism, or repeat the exact-commit deployment method already proven in the launch journal. Do not mix assets from different commits.

## Current positioning/site decisions to preserve
- Navigation: **Journey, Experience, Projects, Writing, Contact**.
- About is accessible secondarily; LinkedIn and GitHub professional profile links live in Contact.
- Journey: *From Ledgers to Agents*, ending with **Modern Workflows**; keep the `operating-system` anchor working.
- Experience: six populated chapters. **Models** emphasizes systems, dashboards, KPIs, measurements and programmatic decisions (avoid Python/tool lists and unnecessary trading emphasis).
- Final chapter focuses on modernization, AI-native business transition, modern workflow architecture, agents and forward-deployed operations; avoid repetitive "AI" slogans.
- Projects can remain high-level cards; Greg will review project details later.
- Writing can remain Articles + Case Studies, both "Coming soon." No Notes section.
- The newly developed `/contact/` card on **staging** is active work and must not be dropped when reconciling branches. It includes a `site/contact/greg-tysick.vcf`; inspect staging HEAD before edits.
- Greg accepts the current map/art as a first-draft MVP. **Do not** start another logo/world-art redesign or publish additional features without direction.
- Keep staging `noindex,nofollow` and production indexable.

## Execution scope
1. Analyze staging-vs-production discrepancy and repair it if needed, preferring a deployment/cache fix when evidence supports that.
2. Verify current staging GitHub changes; review contact-card UX and working links only as needed for regressions, not a new scope expansion.
3. Deploy **only staging** from an exact verified SHA when required; test desktop, mobile, reduced motion, keyboard, and all routes, record errors and final file hashes.
4. Leave **both production sites unchanged**. Do not merge divergent branches or re-run production launch.
5. Journal results and precise next steps in the EXISTING Greg Tysick Managed Folder (use `_scribe/journals/` and project records). Record current git refs, actual live asset hashes, screenshots, environment details and decisions. Do not create a duplicate managed folder.
6. Once complete, report: root cause (or clearly marked unresolved uncertainty), the change applied, tested staging URL, deployed SHA, production untouched, and any outstanding user approval.

## Definition of done
- The stopped Beaver looks and behaves correctly on **staging**, matching or exceeding production.
- Staging's new contact page and all existing MVP pages survive intact.
- Every tested staging file matches a known Git commit; no stale cPanel checkout involved.
- Desktop/mobile and all chapter transitions pass smoke tests.
- The current Managed Folder contains a concise journal/handoff; report to Greg with evidence.

**Mode:** bounded goal execution. Work autonomously on staging, but stop for genuine access or approval blockers. Never destroy uncommitted local/VPS changes, move production refs, alter DNS, or make production deployments without explicit new approval.
