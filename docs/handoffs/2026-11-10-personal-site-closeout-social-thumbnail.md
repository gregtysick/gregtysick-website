# GregTysick.com — November 10, 2026 closeout and Codex handoff

**All project records must be normal Markdown (.md). Never use Dropbox Paper (.paper).**
**Managed Folder:** D:\Dropbox\Obsidian\ExecFunc\Greg Tysick
**Local site repo:** D:\Dropbox\Repos\gregtysick-website
**Decision:** Greg is pausing the site project after the limited thumbnail task. Do NOT implement animation changes now.

## First: save the session in the Managed Folder

Create and verify these three actual .md files in the Managed Folder, preserving any existing human changes:

- _scribe/handoffs/2026-11-10 - Social Thumbnail Codex Release Handoff.md
- _scribe/journals/2026-11-10 - Personal Site LinkedIn and Animation Closeout.md
- Projects/gregtysick.com - Personal Site/Project/2026-11-10 - Journey Animation Refinement Backlog.md

The conversation produced a ZIP named GregTysick_2026-11-10_Site_Closeout_Markdown.zip containing prewritten full versions with exactly those relative paths. If available in Greg's Downloads folder, extract and use the full contents. If not available, create the three files based on all decisions and details below. No .paper files.

## Immediate Codex task: approved LinkedIn/social thumbnail

Greg's saved approved image is:
D:\Dropbox\Obsidian\ExecFunc\Greg Tysick\Projects\gregtysick.com - Personal Site\Assets\From Ledgers to Agents.png

Dropbox confirmed it exists on 2026-11-10 as a 3,428,831-byte PNG. Keep the original. Review aspect ratio, composition and legibility. Make an optimized social preview near 1200 × 627 without stretching or losing title text, and add it as a real public website asset under the repo's site/assets/. Do not embed an expiring Dropbox preview link.

Staging homepage source already received its updated metadata in commit f4d7e99298accf2cad3d49666fd7bca80baafc13 (also deployed to staging). Preserve the animated homepage itself. Current target:
- Browser title: From Ledgers to Agents | Greg Tysick
- Social title and LinkedIn Featured title: From Ledgers to Agents | My Journey in Systems & AI
- Social/Featured description: An interactive look at my journey from accounting and operations into systems building, automation, and practical AI—and the thinking that connects it all.
- Destination: https://gregtysick.com/

Add absolute og:image URL to the actual hosted website image, og:image:width/height/type and alt text, twitter:image and twitter:card=summary_large_image. For production the OG URL must be on https://gregtysick.com/assets/ and return 200. Use a working staging preview path before production promotion. Check social previews and image readability on small screens. Keep staging noindex,nofollow and production index,follow, canonical metadata. LinkedIn Post Inspector is https://www.linkedin.com/post-inspector/. The user controls their LinkedIn Featured edit.

Check current git status/branch and fetch origins before changing anything. The local repo is synced via Dropbox but GitHub main and staging diverge: do NOT force-push, reset or blindly fast-forward. Do staged source edits and test; commit/push staging first. Hosting uses Namecheap cPanel, and its registered Git checkout was stale. Use prior clean-exact-commit clone/direct cPanel deploy, not stale checkout. Only deploy production after Greg explicitly approves. Verify exact HTTPS image and metadata before claiming live.

## Contact card state at pause

Canonical NFC card URL: https://gregtysick.com/contact/ . The NFC sticker contains just that URL; a printed QR should carry the same canonical production URL.

The redesigned Contact is live and usable: actual professional photo, Greg Tysick / Systems · Operations · Automation, Save to Contacts (vCard), Email (hello@tysick.com), WhatsApp (https://wa.me/GregTysick), Share this card, Copy email, and profile links. Keep personal number and greg@tysick.com off the public card. Keep the native collapsed-by-default disclosure exactly labelled “On a computer? Open this card on your phone”; do NOT make the QR section permanently expanded.

At the Nov 10 source check:
- GitHub main release 448cda0b668389964cb1a58ed2fcdaf02997d615 has the redesigned Contact, but older two-line Find me online rows and older homepage social metadata.
- Staging contact icon/outline buttons at da79875960cdd7c9b679f76b1b53bf677ac11a62, and homepage positioning update at f4d7e99298accf2cad3d49666fd7bca80baafc13. Staging deployment journals confirm both were published to staging.
- Main and staging are divergent. Do not conflate “Contact is functional” with exact visual/metadata parity; promote differences only through a reviewed release.
- Pending future QA: hello@tysick.com deliverability, browser vCard imports, WhatsApp username privacy using another account, and possible legacy greg.tysick.com redirect after approval.

## Future Journey animation brainstorm — defer until next session

Greg considers the current six-stage animated site good enough now. On return he wants a fine-tooth-comb chapter-by-chapter review, richer scene detail and more usable navigation/interaction. Current Beaver mostly runs along the bottom. His inspiration featured movement/vehicles and he brainstormed a progression:

Running -> faster running -> jumping -> bicycle -> car -> airplane -> possibly a rocket finish.

These are unapproved conceptual options, NOT a prescribed animation storyboard. Review inspiration under Projects/gregtysick.com - Personal Site/Personal Website Inspiration/, existing art under Annimated site assets/, and source map.config.js plus site/assets/ (candidate plane.png and moto.png must be inspected, not assumed usable). Go scene-by-scene with Greg and consider story relevance, movement transitions, visual detail, camera/scroll/touch controls, orientation, keyboard access, reduced motion, mobile performance, links to Experience/Projects/Writing. Storyboard before implementing. Do not change the animation in this thumbnail task.

The user requested the current conversation be closed/archived once these notes and handoff are preserved. Do not silently create other scope.
