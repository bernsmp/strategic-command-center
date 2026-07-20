# Phase 2 Plan: Billion Dollar Mind Site

*From Max, 2026-07-13. Phase 1 (router + seven complete rooms + gate) is built and clickable. This is what comes next, in dependency order. The three call-decision markers were resolved or narrowed on the 2026-07-13 three-way call; decisions are inline below. Full verified extraction: `docs/CALL-EXTRACT-2026-07-13.md`.*

## Track 1: Capture goes real (first, it blocks everything)

- CRM: **Go High Level. DECIDED (Michelle Abraham, 2026-07-13 call): "we can use go high level, I think, for this."** Soft-worded; treat as settled unless Max hears otherwise. Her proven Abraham.com flow is the template: 23-email sequence, per-chapter forms, PDF with the prompt + UTM code at the end that launches JI. Live on Abraham.com as of Jul 13; worked on every test.
- Entry gate nuance from the call: email capture stays non-negotiable, but strict proof-of-purchase is now an open question (Michelle: do we just let anyone holding the book through the QR codes?). Registration framing borrows Jay's standard line: "I'm investing in you... the only thing I'm asking for in return is some contact information."
- Connect it: set the gate's webhook, redeploy, send a test unlock, confirm the contact lands in the CRM. The gate already records unlock, copy, and gate-open events; until the webhook is set, production captures nothing.
- Point Mike's GoDaddy domain at the Vercel build once capture is verified.

## Track 2: The three paths finished (Michelle's curriculum layer)

- Path 1, straight to coach: live now in every room.
- Path 2, guided worksheets per room: blocked on Michelle's precondition, the end-of-chapter objective written down per chapter before the QR experiences are finalized. Each exercise gets a definition at the top plus a skip-ahead branch for people who already know the material.
- Path 3, the routing quiz: assessment questions hand-crafted, not AI boilerplate (Michelle's requirement), routing each reader to beginner, advanced, or quick-start.
- Room order: **free navigation. DECIDED (2026-07-13 call).** No sequential gating was proposed by anyone; the world is one continuous scroll through all rooms. Add Michelle's entry choice button, the Radiant Reflections pattern: "Self-explore" or "Take a guided tour." Reader's choice, never forced order.

## Track 3: The world layer proper

- **Coach avatars.** Design the visual identity for the seven Billion Dollar Coaches plus Jay as master coach. Michelle's principle: the avatar is what connects the imagineering to the human. **DECIDED (Michelle Abraham, on the 2026-07-13 three-way call, per Max): Jay's stylized likeness is approved.** Direction: Jay in a different color jacket per coach, locked black-and-gold treatment. Reference material exists (the jay-mirror repo carries a Jay image pack from April). Generate per-coach avatars for room heroes, coach cards, and the floor plan.
- Bless or retire /world as the site's front door; wire the winning hero video from /hero-preview into the Portal.
- New from the 2026-07-13 call: carry the cover's gold into the interior rooms (they predate the facade design) and make room-entry transitions slower and more dramatic. Both are pre-deploy scope for the Jay demo. Also: make the live "you are here" map bigger; glossary pop-up is a nice-to-have, explicitly not critical (Michelle).
- Jay audio: a short (~2 min) recorded intro per chapter. Michelle on the call: "Oh, he'll do it." Capture method: catch him on a phone while showing him the site; that gets the authentic Jay.
- Attractions and showrooms: content experiences organized as attractions, tools grouped into showrooms per room, per Michelle's federated model. Spec sources: the Roger Rabbit user-journey doc and the Compass HQ curriculum (Max owes Michelle both).
- Session export productized: every coach already ends a session with a markdown summary; make it a one-click download so readers leave each room with something in their hands.

## Track 4: The Last Door (monetization)

- **NARROWED, NOT CLOSED (2026-07-13 call): it's a routed menu, not one destination; the single lead offer is still open** (Max on the call: "we just got to decide where we're pushing people to... I know we don't know that yet"). Michelle's candidate set: (1) the How-To virtual mentorship on the proven consulting framework, the most built option; (2) a direct relationship with Jay, the "ready to work with Jay, go talk to Rob" route; (3) the Mastermind group. Near-ready inventory: the 25-day second book challenge (Paul built most of it) and two more augmented products in mapping. Funnel mechanic: soft pitch roughly every 10 emails.
- Build it as the room behind the sealed door at the end of the hall, fed by the captured email list.
- Clone-agnostic like everything else: the door routes to whatever platform survives, the printed book never knows the difference.

## Track 5: Print alignment

- Generate the final per-chapter QR codes once chapter objectives lock (Michelle's rule: the deliverable is defined before the codes are built).
- The AI-agnostic second manuscript continues in parallel so the printed pages never name a platform.

## Sequence logic

Capture first, because every later track feeds on the email list. Curriculum and world run in parallel because they have different owners (Michelle's pen, Max's build). The Last Door starts the day the decision lands. Print goes last because it is the one irreversible step.

## Timeline

Wrap target from the Mike call: everything by end of month, August 1.

New near-term milestone (2026-07-13 call): Max deploys the updated site THIS WEEK so Mike or Michelle can demo V1 to Jay; Mike sees Jay later this week and may walk him through it. Pre-deploy scope: interior gold + entry transitions (Track 3).
