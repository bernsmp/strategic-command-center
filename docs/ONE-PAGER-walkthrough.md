# Site Walkthrough: Why It's Built This Way

*For Mike and Michelle, from Max.*

**What this is:** the book's backend site is built and clickable. This page covers the architecture logic, what works today, and the four decisions I need from you two.

## The problem it solves

- The book names JI. JI runs on Delphi. Two Delphi deployments have already broken custom instances, and nobody can promise what the platform looks like in six months.
- The book is done and proofed. It was stuck waiting on a software decision we don't control.
- The fix: the printed QR codes and URL point at the site, never at software. Everything that can change (which AI, which clone platform, what we sell after the book) lives on the site and can be swapped without touching the book.
- While JI is healthy, the site routes readers to it. If it degrades or disappears, the same prompts run in Claude or free ChatGPT. The reader never notices.

## What's on the site

- Seven rooms, one per chapter, shown on a labeled floor-plan map at /library.
- Each room holds one of the seven Billion Dollar Coaches (the billion dollar naming is Mike's requirement). A coach is a long, engineered prompt in the newsletter style: paste it into any AI and it applies that chapter's thinking to the reader's actual business and numbers. Works in free ChatGPT, Claude, and JI.

| Chapter | Coach (working names) |
|---|---|
| 1 | The Hidden Asset Auditor |
| 2 | The Preeminence Architect |
| 3 | The Emissary from Other Worlds |
| 4 | The Leverage Multiplier |
| 5 | The Backend Architect |
| 6 | The Risk Reversal Engineer |
| 7 | The Constraint Inverter |

- The master coach is Jay Abraham himself. He routes people: his first question is where the reader stands, first exposure to Jay or twenty years in, and he adjusts from there. The guided vs. quick-start paths inside each room are Michelle's self-selection design.

## The gate

- The book is the ticket. A reader enters their email plus a receipt or Amazon order number once, and every room stays unlocked.
- Low friction by design. Building the email list is half the point of the site.

## What you can click today

- **/ch/3**: what a reader sees after scanning the chapter 3 QR code (a short crossing screen, then Room 3).
- **/library**: the floor plan with the seven numbered rooms.
- **Room 1**: the Hidden Asset Auditor, complete end to end.
- **The Ticket Check gate**: the email + proof-of-purchase unlock flow.
- **/world**: a continuous scroll-through walk of the whole place, from the entrance to a sealed door at the end of the hall. Built overnight as an experiment. It could become the site's front door or stay a demo; I want your read on it.
- **/hero-preview**: candidate looping video heroes for the homepage.

## Decisions I need from you two

1. **What's behind the Last Door.** The site points readers toward something after the book, and we haven't picked it: the clone, Michelle's existing challenges, consulting, or a call with Jay. This is the monetization conversation.
2. **Where captured emails live.** Go High Level was mentioned but not settled. Until a CRM is connected, the deployed site captures nothing.
3. **Rooms 2 through 7 content.** The coaches work; the full room walkthroughs are being written now from the manuscript.
