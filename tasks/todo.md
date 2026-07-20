# Plan 2026-07-20: Post-call next steps (APPROVED; P0+P2 executed 2026-07-20)

## Review (2026-07-20 session)
**Done + verified in production (curl-checked):** P0 committed/pushed/deployed (mobile clips + preload fix live); P2 gold pass (Library + all room pages, #C9A227 facade gold), door-parting room-entry transitions with gold seam + room announcement, entry choice buttons (self-explore / guided tour) in Library hero, floor-plan map breakout to min(90vw,1400px). Two commits: 86e21b5, 7e2baa6. Screenshots verified via Playwright (library hero, map, doors mid-transition, settled room, story cards).
**~~Deliberately NOT done~~ → DONE later the same night (a4eddf4):** the 2 remaining world-scroll rooms shipped as `leg-r03` + `leg-r06`, generated via KIE (not Higgsfield, so no credit burn). World scroll is the full seven-stop chain. Verified 2026-07-20: assets present in `public/videos/world/` with mobile variants + posters.
**Still blocked on people:** GHL webhook URL (Michelle) for GATE_WEBHOOK_URL — production still captures nothing until set.
**No new deps, no env changes.**


State check: site deployed to Vercel Jul 14 (deploy-for-Jay-demo commitment met). Last commit Jul 13; uncommitted in tree: mobile video variants + scrub-engine preload fix (real perf work), plus the call extract doc. Aug 1 wrap target = 12 days out.

## P0 — Hygiene (today, no decisions needed)
- [ ] Commit + push the uncommitted work: mobile clips (`leg*-m.mp4`), preload fix, `app/world/page.tsx`, `docs/CALL-EXTRACT-2026-07-13.md`, PHASE-2-PLAN edits. Decide `_orig/` handling (probably gitignore, keep local).
- [ ] Redeploy so production gets the mobile/perf fix (Jay demo may happen on a phone).

## P1 — Track 1: capture goes real (blocks everything downstream)
- [ ] Get the GHL webhook URL (Michelle's GHL account — ask her, or Max has access?). Set `GATE_WEBHOOK_URL` on Vercel, redeploy, send a test unlock, confirm the contact lands in GHL. Until then production captures nothing.
- [ ] Once verified: point Mike's GoDaddy domain at the Vercel build.
- [ ] Gate copy: adopt Jay's "I'm investing in you" registration framing; keep email required, soften proof-of-purchase per the call.

## P2 — Pre-demo polish still owed from the call (none of it shipped yet)
- [ ] Interior gold pass across rooms (rooms predate the facade design)
- [ ] Slower, more dramatic room-entry transitions
- [ ] Entry choice button: "Self-explore" vs "Take a guided tour" (Radiant Reflections pattern)
- [ ] Bigger live "you are here" map
- [x] Build the 2 remaining world-scroll rooms — DONE (a4eddf4), 7 of 7 via KIE

## P3 — Coach avatars (likeness approved on the call)
- [x] Generate Jay-likeness avatars, one jacket color per coach, black+gold treatment — DONE (9923e33), room heroes + coach cards + floor plan

## P4 — Follow-ups to chase (people, not code)
- [ ] Did Mike demo V1 to Jay last week? (drives Jay audio capture window)
- [ ] Michelle's UTM→JI mechanics detail was due "by next week" = now. Nudge.
- [ ] Simmons voice note report to Michelle (Max's open To Do)
- [ ] Last Door single lead offer: still an open Max/Mike/Michelle decision — put it on the next call agenda; the routed-menu shell can be built meanwhile.

---

# Plan 2026-07-13: Write rooms 2-7 walkthrough content (PENDING MAX APPROVAL)

Goal: fill the five placeholder fields per room in `lib/principles.ts` for chapters 2-7 so every room is complete end to end like Room 1. The coach prompts are already done; this is the reading layer around them.

**Fields per room:** `whatJaySees` (how Jay works this discipline, ~4 short paragraphs), `keyInsight` (one distilled takeaway), `stories` x2 (title/hook/story/lesson, compressed retellings of the chapter's strongest stories), `threeChecks` x3 (diagnostic area + question), `howAiFitsIn` (bridge from the principle to the room's coach).

**Source of truth:** `Billion_dollar_mind/editing_closeout_2026-06-02/clean_candidates/` (newest local manuscript exports). Every story fact gets checked against `Billion_Dollar_Mind_Book/BOOK-AUDIT-REPORT-2026-07-05.md` Category E flags before it ships; flagged stories don't go on the site.

**Register template:** Room 1 (Perceptual Asymmetry). Short sentences, real numbers, no em dashes (write hook enforces), no AI tells.

**Order:** Room 3 first (it's the /ch/3 QR demo route), then 2, 4, 5, 6, 7.

**Per-room loop:**
- [x] R3.1 Read chapter clean candidate, shortlist stories, check audit flags, pick 2 clean ones (Nebraska Furniture Mart + Hughes drill bit; both pass audit story-ownership checks)
- [x] R3.2 Draft the five fields in Room 1 register
- [x] R3.3 Insert into lib/principles.ts, next build, served-page verify
- [x] R3.3b Codex QC (gpt-5.6-sol high, per Max): FIX FIRST verdict, 5 blockers; fact-precision + length fixes applied; two flags overruled as verbatim-source book voice ("Hughes didn't invent leasing. He imported it." / "Same SKUs..."). Re-built + re-verified.
- [x] R3.4 Max sign-off with congruence note ("same language as the book"): book-cadence pass applied to Room 3, then batch proceeded
- [x] R2, R4, R5, R6, R7 drafted book-language-first (Ch2: cigarette counter + underdog agency; Ch4: Japan deal + consultant licensing; Ch5: 13X counter + Icy Hot AAC; Ch6: poke-bowl $376K + We Goofed; Ch7: small manufacturer + Chicago dry cleaner). Forbidden per audit and skipped: Ch6 gas-station CONT-003, Ch7 reserve/methanol (Tim/legal gate), FedEx/Basch (Ch7 owns it, full version missing), Mike-as-consultant passages. All 7 rooms serve with zero "Coming soon".
- [x] Codex QC batch of rooms 2,4,5,6,7 (fresh session; NOTE `codex exec resume` rejects -s/-C, gotcha logged to skill): FIX FIRST, 10 findings, all fixed (3 nonverbatim Jay quotes repaired, invented Room 4 hook replaced, Room 7 capability-vs-event fixed, Room 6 pre-sell check re-anchored to chapter opening instead of the forbidden gas-station passage, Room 5 hedges + sign-count + winner-story status fixed, light length trims). Rebuilt + re-verified, all 7 rooms zero placeholders.
- [x] One-pager updated: all seven rooms complete; decisions list down to Last Door + CRM
- [ ] Regenerate the walkthrough Google Doc (md is 2 revisions ahead of the Doc; regen = NEW URL, blocked on Max confirming he still hasn't shared https://docs.google.com/document/d/15MG70f-fN_5BzJKuN73v-G7FSy_R9Kvc33r5P8Sd55o/edit)
- [ ] Regenerate the walkthrough Google Doc after sign-off (md already updated: Rooms 1+3 complete; NOTE regen = new URL, confirm Max hasn't shared the current one)

**Known constraints (from the 2026-07-05 book audit):**
- Ch6 gas-station $500M story: unresolved existing-vs-proposed contradiction (CONT-003, Mike must rule). Use other Ch6 stories.
- Ch3 has a Decoding-Genius/Emissary duplication regression in the June 2 export; pull story text carefully.
- FedEx full story belongs to Ch7 per the documented decision; if used, it goes in Room 7 only.
- Michelle's guided-path worksheets are separate work, blocked on her chapter-objective definitions. Room walkthroughs don't depend on them.

**Default assumptions (flag if wrong):** rooms retell the chapter's own anchor stories (recognition after the QR scan), matching the Room 1 pattern; Max is the only review gate, Mike and Michelle react to it live on the site.

---

# Overnight run 2026-07-13 (Max asleep; review in the morning)

Work order from Max: commit + push everything, generate a few Compass-HQ-style hero video versions for this site via Higgsfield, then build the scroll-world (per `/Users/maxb/Documents/skills/50 - Skill Systems/Creative Elements/skills/scroll-world/SKILL.md`) even if it doesn't get presented. Finish so it's reviewable in the morning.

- [x] O1. Commit pending changes, push main to origin, verify the push landed (git log origin/main)
- [x] O2. Higgsfield preflight: MCP balance + model pick; CLI presence for the scroll-world pipeline (fall back to MCP tools if CLI unauthenticated)
- [x] O3. Hero videos: 3 GENUINELY DIFFERENT scenes (locked style: deep black, grayscale + gold glow, NO text baked in), each a looping interior-of-the-mind video for the Portal/floor-plan hero. Save to public/videos/hero/ + posters
- [x] O4. Scroll world: 5 scenes (the Book in the void → Entrance Hall with seven doors → Room 01 Hidden Asset Auditor → Room 05 Backend Architect → The Last Door), 5 dive-in clips + 4 connectors with frame-identical seams, scrub engine at /world (standalone page; Portal untouched until blessed)
- [x] O5. Integrate, next build, verify routes + visual pass, screenshots for morning review
- [x] O6. Final commit + push; morning review note at docs/MORNING-REVIEW-2026-07-13.md; Builder Brain session capture

Decisions made without waking Max (flag for review): scroll world scoped to 5 scenes (seam quality over scene count, per the skill's own warning); it ships at /world as an experience preview, not replacing the Portal; hero style follows the locked jAI black+gold rules; if Higgsfield credits or model access block a step, the blocker gets documented in the morning note instead of a silent skip.

---

# Session 2026-07-13: Billion Dollar Coaches draft (for the Mike/Michelle three-way call)

Source of truth: `docs/SITE-BRIEF-from-calls-2026-07.md` (extracted from the Jul 7 Mike call + Jul 10 Michelle call) and `/Users/maxb/Desktop/Jay Article Writer/Billion_Dollar_Mind_Book/BOOK-BACKEND-PLAN-v2-2026-07-06.md` (locked decisions + coach name table).

Goal today: a tangible draft Michelle and Mike can react to. Clean router + seven coaches; world-building layer stays phase 2.

- [x] 1. `lib/principles.ts`: coach identity on each principle (v2 plan names), master coach (the Resident Strategist, working name), all prompts rewritten in the coach-persona format (act-immediately opener, persona, rules, four-mirror self-placement on the master, session-notes export behavior baked in)
- [x] 2. `components/Navigation.tsx`: ACCESS JAY-I demoted (nav CTA now MEET YOUR COACHES; JI remains one runtime option on prompt terminals)
- [x] 3. `app/library/page.tsx`: The Seven Billion Dollar Coaches section, coach names on cards, master coach block + Three Paths section (Path 1 ACTIVE, Path 2 IN PRODUCTION, Path 3 IN DESIGN)
- [x] 4. `app/library/[slug]/page.tsx`: coach identity chip in hero, choose-your-path trio (quick start / guided / bring a live decision), terminals reordered (Claude, ChatGPT, Jay-I), bottom CTA no longer pushes Jay-I
- [x] 5. `app/ch/[number]/route.ts`: QR-target 308 redirects (/ch/1 through /ch/7; unknown numbers fall back to /library)
- [x] 6. `components/Hero.tsx`: CTA copy Meet the Seven Coaches; terminal label neutralized
- [x] 7. Ch5 drift fixed: subtitle/quote/principle now match the manuscript (backend, "customers you already have are worth ten times"); prompt archive's Three Ways calculator re-tagged to Infinite Leverage
- [x] 8. Verified: `next build` passes; all routes curl-checked for new content; visual pass via Playwright screenshots (full-page blanks were whileInView animation artifacts, disproven with scrolled captures; grid, master coach, paths, coach block all render)
- [ ] 9. Commit (including last night's package rename left uncommitted) — pending Max's review of the draft

## Review (2026-07-13 session)

**Changes:** coach layer over the existing Library architecture; no new dependencies; no env vars; no backend yet (email gate + Path 3 quiz are the next engineering steps per the v2 plan build order).
**Verification:** build passed, routes curl-verified (coach names, redirect targets, zero ai.abraham.com pushes on home/chapter pages), scrolled-viewport screenshots confirmed all new sections render.
**Limitations:** chapters 2-7 still show LOADING (whatJaySees/stories/checks are content work from the manuscript); Studio page untouched (its fate is an open call); email gate not built; /studio still uses old branding.
**RESOLVED (Max, 2026-07-13):** Ch4 coach renamed "the Leverage Multiplier", named from the chapter (Infinite Leverage) per Max: name based on the chapter. The old working name ("Three Ways Multiplier") referenced a framework the chapter never teaches. Master coach name (Resident Strategist) is a working name, Michelle + Mike's call.

- [x] 10. Ticket Check gate (email + proof-of-purchase, locked v2-plan decision) — implemented by Codex from a frozen spec (codex-first), reviewed + verified by Claude. Gate modal, blurred prompt surfaces, /api/gate + /api/gate/event capture (GATE_WEBHOOK_URL seam, JSONL fallback locally, loud stored:false when no backend). Usage events (unlock / copy / gate-open) captured from day one. **Capture backend decision pending the call:** set GATE_WEBHOOK_URL (GHL/Kit/Supabase function) before real readers arrive; until then Vercel deploys capture nothing and say so in the logs.

**Visual direction note (Max, 2026-07-13):** Michelle loved the Compass HQ homepage hero: the looping video of the rooms with people walking around (`/Users/maxb/Desktop/mb-brain/3 - Products/compass-hq/public/videos/compass-hq-agency-alive.mp4` + poster). The book site equivalent: a looping "interior of the Billion Dollar Mind" video hero for the floor plan or Portal: seven lit rooms off a dark hall, figures moving, black + gold Decoding Genius treatment, no text baked in. Generate via Higgsfield/banana-squad once the rooms lexicon is blessed at the call. This also gives Michelle her amusement-park "you are here" map in motion.

Open items NOT for me to decide (flag at the call): final master coach name (Michelle + Mike's call), email gate build (locked decision, next engineering step), Path 3 quiz builder (Maven pattern), CRM choice.

---

# Strategic Command Center - Build Progress (January build, historical)

## Completed Tasks

- [x] **Task 1: Scaffold Next.js project** - Created Next.js 16 with App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React
- [x] **Task 2: Design system & global styles** - Oracle aesthetic with Pure Black, Paper White, Slate Gray, teal accents, scan animations
- [x] **Task 3: Hero section with Decoding Scan** - Full Hero component with animated scan line, typewriter effect, stats counter, Three Realizations cards
- [x] **Task 4: PromptCard with Action Terminals** - Expandable prompt card with Jay-i, Claude, ChatGPT action buttons, copy functionality
- [x] **Task 5: Navigation & layout** - Fixed navigation with mobile responsive menu, page structure for Portal/Library/Studio

---

## Site Architecture

### The Portal (Home) - `/`
- Hero section with book cover + decoding scan animation
- Three Realizations narrative cards
- Three Levels of Transformation section
- CTA buttons

### The Library (Prompt Repository) - `/library`
- Filterable bento-grid of prompts
- Search by keyword
- Filter by category (Diagnosis, Strategy, Execution, Reframe, Thinking, Positioning)
- Filter by principle (7 organizing principles)
- Toggle for "Genius Extractions™" only
- PromptCard component with Action Terminals

### The Studio (Workflows) - `/studio`
- Multi-step guided workflows (Strategic Stacking, Partnership Accelerator)
- Step-by-step sidebar navigation
- Prompt display with copy/open actions
- Progress tracking

---

## File Structure

```
billion-dollar-mind-book-site/
├── app/
│   ├── globals.css          # Oracle design system + animations
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   ├── library/
│   │   └── page.tsx         # Prompt Repository
│   └── studio/
│       └── page.tsx         # Guided Workflows
├── components/
│   ├── Hero.tsx             # Hero with scan effect
│   ├── Navigation.tsx       # Fixed nav
│   ├── PromptCard.tsx       # Card + Action Terminals
│   └── TransformationLevels.tsx
├── public/
│   └── images/
│       └── book-cover.png   # Book cover
├── tailwind.config.ts       # Oracle color palette
├── postcss.config.mjs
└── package.json
```

---

## Design Tokens

### Colors
- **void**: `#000000` (background)
- **paper**: `#F5F5F5` (primary text)
- **slate**: `#707070` (secondary text)
- **teal**: `#0D7377` (accent)

### Typography
- **Display**: Bebas Neue (wide-kerned, condensed)
- **Body**: Inter
- **Mono**: JetBrains Mono (terminal elements)

### Animations
- `scan-line`: Vertical teal scan sweep
- `decode`: Blur-to-sharp reveal
- `terminal-blink`: Cursor blink
- `fade-up`: Content reveal

---

## To Run

```bash
cd billion-dollar-mind-book-site
npm run dev
```

Open http://localhost:3000

---

## Review Summary

### Changes Made
- Full Next.js 16 project scaffold with App Router
- Custom Oracle design system with Tailwind v4
- Three complete pages (Home, Library, Studio)
- Reusable PromptCard component with Action Terminals
- Framer Motion animations throughout
- Mobile-responsive navigation
- Sample content based on book manuscript

### Dependencies Added
- next@16.1.5
- react@19.2.4
- tailwindcss@4.1.18
- @tailwindcss/postcss@4.1.18
- framer-motion@12.29.2
- lucide-react@0.563.0

### Environment Variables
None required for basic functionality

### Future Improvements
- [ ] Add actual book cover image to Hero
- [ ] Connect to prompt database
- [ ] Add Jay-i integration URLs
- [ ] Implement user authentication
- [ ] Add prompt favorites/saves
- [ ] Build more workflow paths

---

## Session 2026-07-13 (late): three-way call extracted, Phase 2 decisions slotted

- Pulled the Jul 13 Max+Mike+Michelle call from Granola via `granola-api`/`granola-pull` (MCP OAuth was expired; the Keychain-backed CLI worked). Filed to the Mike David client folder: `/Users/maxb/Desktop/mb-brain/1 - Clients/Mike David/07 - Source Material/transcripts/2026-07-13-max-mike-michelle-three-way.md`
- Wrote the verified extraction: `docs/CALL-EXTRACT-2026-07-13.md` (36 facts, 34 CONFIRMED, 2 minor UNCERTAIN; extraction-verify table included; known Granola diarization bleed between Mike/Michelle labels resolved by content)
- Updated `docs/PHASE-2-PLAN.md`: all three (call decision) markers resolved or narrowed. CRM = Go High Level (Michelle). Room order = free navigation + guided-tour choice button. Last Door = three-path menu (How-To / Jay via Rob / Mastermind), single lead offer still open. Added: entry-gate proof-of-purchase now an open question (email capture stays), Jay per-chapter audio approved in principle, gold + slower transitions as pre-deploy scope, deploy-this-week milestone for the Mike-to-Jay V1 demo.
- Notion: 2 To Dos created (deploy for Jay demo; Simmons voice note) + 1 Brain Data Decision entry, all linked to the Billion Dollar Mind Book project row.
- NOT done, blocked on Max: regenerating the Phase 2 Google Doc (regen creates a new URL; waiting on Max to confirm the current URL was never shared, per handoff). Avatars still parked pending "go avatars."

### Next work queue (from the call)
- [ ] Interior gold pass across rooms (they predate the facade design)
- [ ] Slower, more dramatic room-entry transitions
- [ ] Build the 2 remaining world-scroll rooms (5 of 7 built)
- [ ] Deploy for the Jay demo (this week; Notion To Do exists)
- [ ] Guided-tour vs self-explore choice button at entry
- [ ] Make the live "you are here" map bigger
- [x] Glossary → built as The Appendix page (/appendix), 2026-07-20: AI tool terms for non-technical readers + Jay's named ideas + seven rooms at a glance; linked from Library + room CTAs. Confirmed by Max as the thing he meant.
