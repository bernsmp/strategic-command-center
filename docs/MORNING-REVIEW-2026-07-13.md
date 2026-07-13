# Morning Review: overnight build, 2026-07-13

Everything committed and pushed (origin/main at `8e98ce0`). Local server: `npx next start -p 3777` (was left running). Nothing links to the new pages from the nav; they're for your eyes first.

## What to look at, in order

1. **The scroll world: `http://localhost:3777/world`**
   One continuous camera flight through the Billion Dollar Mind, scrubbed by scroll. Five scenes: the Approach (dark facade, golden doorway), the Seven Rooms hall, Room 01 (the Hidden Asset gallery: a toy truck, ledgers, a compass under museum spotlights), Room 05 (the Backend vault: golden circuits around a glowing core), and the Last Door finale with the CTA into the Library. Scroll up and it plays in reverse; that's by design.

2. **Hero candidates: `http://localhost:3777/hero-preview`**
   Three genuinely different Compass-HQ-style loops, black and gold, no text baked in:
   - 01 THE CUTAWAY: dollhouse cross-section, figures walking the lit rooms (closest to what Michelle loved)
   - 02 THE HALL: eye-level doorway hall with walking silhouettes
   - 03 THE MAP: top-down seven-room constellation (Michelle's "you are here" park map in motion)

3. **Everything from earlier still stands:** the coaches, rooms lexicon, threshold (`/ch/3`), Ticket Check gate.

## Honest notes and flags

- **Scroll world is 5 scenes, not 9.** Seam quality over scene count (the skill's own warning). Rooms 2, 3, 4, 6 don't have scenes yet; adding a room = one more leg chained from the previous leg's last frame, roughly 30 min each including re-roll budget.
- **Architecture A (continuous forward take)** per the skill: a grounded walkthrough must never reverse camera at a seam. Verified all four seams headless: pre/post frames are near-identical, zero console errors, blob seeking works.
- **Desktop-first.** The skill's mobile encodes are an opt-in beta and you were asleep; the engine's phone hardening is on (posters, seek coalescing), so phones degrade gracefully rather than breaking. Real mobile encodes are a 20-minute follow-up if wanted.
- **Seedance's NSFW filter fought us:** leg 2 (the archive room) took 5 total attempts across two prompt versions; hero 3 got refused twice and was rendered on kling3_0 instead (slight render-character difference from the other two heroes; it's a candidate page, so judge it on its own).
- **The world page theme:** the engine's route rail and nav pills run light glassmorphism over the dark scene. It reads fine but isn't pure Shadow Architect; theming polish is a follow-up if the direction survives.
- **Session-bound background tasks got reaped mid-chain overnight** (the exact trap the pipeline doctrine warns about). Recovered by adopting the in-flight Higgsfield jobs and relaunching with nohup; no work lost, some credits burned on orphaned jobs.
- **Credits:** started at 1,102. Generation spend: 4 stills + 3 hero videos (plus 2 NSFW retries and 1 kling render) + 5 legs (plus 4 failed/orphaned attempts). Check `higgsfield account` if you want the exact number.

## Decisions waiting on you

1. Does the scroll world become the Portal (home), stay a standalone experience, or hold for the Mike/Michelle call?
2. Which hero (if any) goes on the floor plan or Portal? 01 Cutaway / 02 Hall / 03 Map.
3. Rooms 2, 3, 4, 6 scenes: generate now (~2 hours of chained legs) or after the call blesses the lexicon?
4. Everything already flagged in tasks/todo.md: Ch4 coach name, master coach name, gate capture backend (GATE_WEBHOOK_URL), CRM.

## Where things live

- Legs + posters: `public/videos/world/` (site) and raw sources in the session scratchpad
- Heroes + posters: `public/videos/hero/`
- Scrub engine (source-stamped copy): `public/world/scrub-engine.js`
- Seam QA captures: scratchpad `qa-seam*-pre/post.png`, beauty shots `qa-scene*.png`
