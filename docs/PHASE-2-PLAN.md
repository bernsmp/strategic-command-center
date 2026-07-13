# Phase 2 Plan: Billion Dollar Mind Site

*From Max, 2026-07-13. Phase 1 (router + seven complete rooms + gate) is built and clickable. This is what comes next, in dependency order. Three items wait on decisions from the three-way call, marked below.*

## Track 1: Capture goes real (first, it blocks everything)

- Pick the CRM **(call decision)**. Go High Level was floated; not settled.
- Connect it: set the gate's webhook, redeploy, send a test unlock, confirm the contact lands in the CRM. The gate already records unlock, copy, and gate-open events; until the webhook is set, production captures nothing.
- Point Mike's GoDaddy domain at the Vercel build once capture is verified.

## Track 2: The three paths finished (Michelle's curriculum layer)

- Path 1, straight to coach: live now in every room.
- Path 2, guided worksheets per room: blocked on Michelle's precondition, the end-of-chapter objective written down per chapter before the QR experiences are finalized. Each exercise gets a definition at the top plus a skip-ahead branch for people who already know the material.
- Path 3, the routing quiz: assessment questions hand-crafted, not AI boilerplate (Michelle's requirement), routing each reader to beginner, advanced, or quick-start.
- Room order **(call decision)**: free navigation between rooms, or gated progression.

## Track 3: The world layer proper

- Bless or retire /world as the site's front door; wire the winning hero video from /hero-preview into the Portal.
- Attractions and showrooms: content experiences organized as attractions, tools grouped into showrooms per room, per Michelle's federated model. Spec sources: the Roger Rabbit user-journey doc and the Compass HQ curriculum (Max owes Michelle both).
- Session export productized: every coach already ends a session with a markdown summary; make it a one-click download so readers leave each room with something in their hands.

## Track 4: The Last Door (monetization)

- Decide what's behind it **(call decision)**: clone subscription, Michelle's existing challenges, consulting, or a call with Jay.
- Build it as the room behind the sealed door at the end of the hall, fed by the captured email list.
- Clone-agnostic like everything else: the door routes to whatever platform survives, the printed book never knows the difference.

## Track 5: Print alignment

- Generate the final per-chapter QR codes once chapter objectives lock (Michelle's rule: the deliverable is defined before the codes are built).
- The AI-agnostic second manuscript continues in parallel so the printed pages never name a platform.

## Sequence logic

Capture first, because every later track feeds on the email list. Curriculum and world run in parallel because they have different owners (Michelle's pen, Max's build). The Last Door starts the day the decision lands. Print goes last because it is the one irreversible step.

## Timeline

Wrap target from the Mike call: everything by end of month, August 1.
