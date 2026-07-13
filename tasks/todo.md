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
**Flag for the Mike/Michelle call:** Ch4 coach is named "the Three Ways Multiplier" per the locked v2 table, but manuscript Ch4 is effort-compounding (no Three Ways in the chapter). Candidates if renamed: the Leverage Architect, the Compounding Engineer. Master coach name (Resident Strategist) is a working name, Michelle + Mike's call.

- [x] 10. Ticket Check gate (email + proof-of-purchase, locked v2-plan decision) — implemented by Codex from a frozen spec (codex-first), reviewed + verified by Claude. Gate modal, blurred prompt surfaces, /api/gate + /api/gate/event capture (GATE_WEBHOOK_URL seam, JSONL fallback locally, loud stored:false when no backend). Usage events (unlock / copy / gate-open) captured from day one. **Capture backend decision pending the call:** set GATE_WEBHOOK_URL (GHL/Kit/Supabase function) before real readers arrive; until then Vercel deploys capture nothing and say so in the logs.

**Visual direction note (Max, 2026-07-13):** Michelle loved the Compass HQ homepage hero: the looping video of the rooms with people walking around (`/Users/maxb/Desktop/mb-brain/3 - Products/compass-hq/public/videos/compass-hq-agency-alive.mp4` + poster). The book site equivalent: a looping "interior of the Billion Dollar Mind" video hero for the floor plan or Portal: seven lit rooms off a dark hall, figures moving, black + gold Decoding Genius treatment, no text baked in. Generate via Higgsfield/banana-squad once the rooms lexicon is blessed at the call. This also gives Michelle her amusement-park "you are here" map in motion.

Open items NOT for me to decide (flag at the call): Ch4 coach name ("Three Ways Multiplier" per locked v2 table, but Ch4 is effort-compounding, not Three Ways: candidates to rename), final master coach name (Michelle + Mike's call), email gate build (locked decision, next engineering step), Path 3 quiz builder (Maven pattern), CRM choice.

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
