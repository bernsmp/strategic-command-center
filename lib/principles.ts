// The 7 Organizing Principles from Inside the Billion Dollar Mind
// Each chapter has a named Billion Dollar Coach (working names locked in
// BOOK-BACKEND-PLAN-v2-2026-07-06.md and pitched to Mike on the 2026-07-07 call).

export interface Coach {
  name: string;
  role: string;
}

export interface Principle {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  coach: Coach;
  // One-line teaser shown on the floor plan while the room is under
  // construction (progressive revelation: locked rooms show what's at the end).
  roomTeaser: string;
  jayQuote: string;
  corePrinciple: string;
  whatJaySees: string;
  keyInsight: string;
  stories: {
    title: string;
    hook: string;
    story: string;
    lesson: string;
  }[];
  threeChecks: {
    area: string;
    question: string;
  }[];
  howAiFitsIn: string;
  prompt: {
    title: string;
    description: string;
    content: string;
    isGeniusExtraction: boolean;
  };
}

// The master coach is Jay Abraham himself (decided 2026-07-13; replaces the
// "Resident Strategist" working name).
export const masterCoach = {
  name: "Jay Abraham",
  isWorkingName: false,
  description:
    "The master coach. Your standing advisor across all seven principles. Bring the decision you're staring at this quarter and Jay routes you to whichever principle bears on it.",
  prompt: {
    title: "Jay Abraham, Master Coach",
    description:
      "The master coach. Start here if you're new, or bring a live decision and let Jay route you to the right principle.",
    isGeniusExtraction: true,
    content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are Jay Abraham, the master coach of Inside the Billion Dollar Mind. You have sat in a thousand business rooms across a hundred industries. You deal only in real numbers. You put my outcome ahead of being liked. Whenever you use a term from the book, you define it inside my own situation in one clause before moving on. Your reflex question is always: who has already solved this problem in another industry?

YOUR FIRST MOVE (do this before anything else):
Ask me which of these four describes me best, and set your vocabulary accordingly:
1. This book is my first exposure to Jay Abraham's thinking
2. I know some of the terms but have never applied them
3. I have studied Jay's work for years
4. I'm working on a team or on someone else's business

YOUR SECOND MOVE:
Ask me two or three sharp questions about my actual business. Then name one specific thing I have not seen about it, using the book's own language. Earn trust by demonstration, not introduction.

HOW YOU WORK:
- When I bring you a live decision, route it: name which of the seven principles bears on it (Perceptual Asymmetry, Irreplaceability, Super-Synthesis, Infinite Leverage, Value Multiplication, Guaranteed Upside, Constraint Inversion) and work it through that lens with my real numbers.
- Open topics by showing the principle from three or four different business-type angles and let me pick my lane. Then work only my lane.
- Never lecture when you can ask the question that makes the room go quiet.
- When I say "wrap up," produce a clean markdown summary of the session: what we found, what I decided, and my next three moves, so I can save it.

Start now with your first move.`,
  },
};

export const principles: Principle[] = [
  {
    slug: "perceptual-asymmetry",
    number: 1,
    title: "Perceptual Asymmetry",
    subtitle: "THE ROOT OF BREAKTHROUGH THINKING",
    coach: {
      name: "The Hidden Asset Auditor",
      role: "Sees the value you walk past every day",
    },
    roomTeaser: "Where you see what you've been walking past.",
    jayQuote: "You can't see what you're standing too close to.",
    corePrinciple: "The owner is always too close to see the real problem—and the real opportunity.",
    whatJaySees: `When Jay walks into a business, he does something most consultants don't. He ignores the problem.

The owner spends twenty minutes unloading everything that's broken—leads dried up, cash flow's a mess, some competitor eating their lunch.

Instead of immediately shouting out an answer, he gets curious. He collects context. He asks questions they probably haven't been asked before.

Jay assumes the stated problem is never the real problem, because in almost every situation, the owner is too close to see it.`,
    keyInsight: "Your greatest assets fade into the background. Your biggest opportunities become 'just the way things are.' The thing you know best becomes the thing you can't see clearly.",
    stories: [
      {
        title: "The $1 Million Truck",
        hook: "One truck. One restaurant. One million dollar contract.",
        story: `A roofing company with thirty years of solid reputation had a dozen trucks sitting behind a chain-link fence every weekend. Nicely decaled, company logo, phone number in big graphics. They just sat there. Invisible.

Jay asked one question: "What happens to your trucks on weekends?"

His solution was simple. Hire two kids to drive the trucks on weekends to shopping centers, beaches—anywhere with high foot traffic. Cost: $1,200 for a weekend. Profit on one roofing job: $15,000.

Before they even implemented the full strategy, a single truck parked at a restaurant caught an HOA board member's eye.

He called that afternoon. One million dollar HOA contract.`,
        lesson: "Thirty years in business. Ten thousand times walking past those trucks without seeing them. The million-dollar contract was always there—she just couldn't see it until someone else did.",
      },
      {
        title: "The $500 Million Reframe",
        hook: "They thought they had a marketing problem. Jay saw a completely different business.",
        story: `A small gold brokerage in Minneapolis was doing about $300,000 in revenue. Gold newsletters were exploding, and they had no idea how to reach buyers.

But Jay didn't see a brokerage with a marketing problem.

He saw a media company that didn't know it was a media company.

A subscriber base that could be monetized multiple ways. Inserts. Renewals. Backend offers. The brokerage was the least interesting thing they owned.

Within a couple of years, that $300,000 company grew to $500 million.`,
        lesson: "They knew they needed marketing help. They had no idea they were sitting on a completely different business entirely.",
      },
    ],
    threeChecks: [
      {
        area: "Your Calendar",
        question: "What are you spending time on that's worth $50/hour when you're capable of $1,000/hour work? What tasks have you kept because they've always been yours?",
      },
      {
        area: "Your Assets",
        question: "What do you own, control, or have access to that sits idle? Equipment. Lists. Relationships. Knowledge. Expertise you stopped charging for years ago.",
      },
      {
        area: "Your Constraints",
        question: "What have you accepted as permanent that might just be habit? 'Our margins are too thin.' 'That's not how our customers buy.' 'We tried that.' Jay leans in when he hears these.",
      },
    ],
    howAiFitsIn: `Most people use AI backwards. They ask for answers and get generic responses. Surface-level advice and the same stuff sitting on business bookshelves since 2003.

The value isn't in answers. The value is in questions.

Jay doesn't tell clients what to do. He asks questions that make invisible opportunities visible. He forces them to see what they'd stopped seeing.

AI hasn't gotten used to your business. It doesn't know "that's how we've always done it." It has no emotional attachment to your current way of operating. It can look at your situation the way you'd look at someone else's.`,
    prompt: {
      title: "The Hidden Asset Auditor",
      description: "Your Chapter 1 coach. Sees your business the way Jay would: spotting the hidden assets and blind spots that proximity has made invisible.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Hidden Asset Auditor, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Perceptual Asymmetry: the owner is always too close to see the real problem, and the real opportunity. Thirty years of walking past the same trucks without seeing the million-dollar contract parked behind the fence.

You talk to me like a seasoned advisor who has sat across from a thousand business owners, not like a textbook. You deal in my real numbers. Whenever you use a term from the book, define it inside my situation in one clause.

YOUR JOB IS NOT TO SOLVE MY STATED PROBLEM. Your job is to:
1. Question my assumptions: what am I treating as fixed that might be flexible?
2. Find my hidden assets: what do I own, control, or have access to that sits idle? Equipment, lists, relationships, knowledge, expertise I stopped charging for.
3. Name my blind spots: what have I stopped seeing because it's "just how we do things"?

HOW YOU OPEN:
Show me the principle from four angles in two sentences each (a service business, a product business, a solo expert, a team running someone else's business) and ask which is closest to my world. Then work only my lane.

RULES:
- Ask before you tell. Your best move is the question I haven't been asked before, the one that makes the room go quiet.
- Every hidden asset you find gets: what it is, the current leak, one specific monetization move, and a conservative 90-day revenue estimate.
- No generic advice. If a sentence could appear in any business book, cut it.
- When I say "wrap up," produce a markdown summary of the session: assets found, the one blind spot that matters most, and my next three moves, so I can save it.

Start now: ask me the four-angle question, then have me describe my business in 2-3 paragraphs (what I sell, who I serve, what I believe is holding me back).`,
    },
  },
  {
    slug: "irreplaceability",
    number: 2,
    title: "Irreplaceability",
    subtitle: "BECOME THE ONLY LOGICAL CHOICE",
    coach: {
      name: "The Preeminence Architect",
      role: "Positions you as the only real choice in your market",
    },
    roomTeaser: "Where comparison stops being possible.",
    jayQuote: "It's not about being louder. It's about being indispensable. It's about becoming the only logical choice in your market.",
    corePrinciple: "Position your business so they can only choose you.",
    whatJaySees: `Most business owners hear about a competitor's move and immediately ask how to fight back. Match the price. Sharpen the pitch. Outspend the sign.

Jay never asks those questions. He asks one that sounds almost naive: "Why are we fighting on their terms?"

Normal thinking asks: given that we're being compared, how do we compare favorably? Jay asks: why are we being compared at all? What would make comparison impossible?

Not better. Not different. Incomparable.

In his words: "The goal isn't to win the game. The goal is to be playing a different game entirely." A game where you're the only player.`,
    keyInsight: "When you're one of many, you're a commodity, and nobody compares commodities on quality, trust, or who cares more. They compare on price. A Category of One flips that: when someone shops around for what you do, you become the only viable choice. Not the best option. The only option that makes sense.",
    stories: [
      {
        title: "The Counter the Discount Couldn't Reach",
        hook: "The category lived at twenty dollars. The competitor went to twelve.",
        story: `One January morning, a competitor down the highway dropped one of the store's highest-volume cigarette brands far below the usual retail price. The category normally lived around twenty dollars. The numbers coming back were closer to twelve or fifteen, and that kind of spread moves people down the highway.

The obvious move was to match. The owner didn't have to, because for years he had been building things around that counter that never showed up on a price sign. A coupon program with point-back tracking, so he knew which partner business sent which customer. Host-beneficiary deals with other businesses on the highway. Special pricing for longtime customers. Surprise packs on older inventory.

By the time the discount landed, his customers were not comparing two numbers on two signs. They were standing inside a relationship built one coupon, one case price, one small promise at a time.

The discount had nowhere clean to land.`,
        lesson: "He didn't need to win the price sign. He needed to make the price sign matter less.",
      },
      {
        title: "The Agency That Refused to Pitch",
        hook: "Every other agency brought their best work. The underdog brought a diagnosis.",
        story: `An underdog agency walked into a marketing RFP where every competitor was about to present a hundred-page deck and a reel of award-winning campaigns.

They opened with a reframe: "What you're about to see is completely different from what you're expecting. We're not going to show you our best creative work. Because we don't think your problem is a creative problem."

Then they named what they believed the client's actual problem was.

Every agency that walked in with a beautiful campaign reel had just stepped on a landmine. They looked like vendors showing off how great they were. The underdog looked like the only one who understood what the client needed.

They won the business as a massive underdog, because they showed up as a fiduciary: diagnosing, not pitching.`,
        lesson: "Vendors get compared and swapped on spreadsheet logic. A partner who is visibly more committed to the outcome than to looking impressive doesn't get compared at all.",
      },
    ],
    threeChecks: [
      {
        area: "The Comparison Test",
        question: "Can a reasonable prospect line you up side-by-side with two competitors and feel like they're comparing similar things? If yes, you're still in the commodity bucket, no matter how good you are.",
      },
      {
        area: "The Explanation Test",
        question: "Do you have a speech you give when people ask what you do differently? If yes, it's not clear enough. True category-of-one positioning is obvious without a TED Talk.",
      },
      {
        area: "The Switching Test",
        question: "Would a happy customer leave you for someone 20% cheaper who claims to do basically the same thing? If yes, you're respected, maybe even liked, but replaceable when the budget gets tight.",
      },
    ],
    howAiFitsIn: `You've done it a hundred times. You look at someone else's business, a competitor, a friend's company, a brand you buy from, and you immediately spot what they're missing. The obvious price increase. The category they should own instead of the one they're stuck in.

Everyone can diagnose the plays from the bleachers. But when it's your business, you're playing the game. And nobody coaches themselves to a championship.

Bring your blind-spot notes from Room 1, plus what clients or customers say is different about working with you. This room's coach looks at your business from the outside and shows you where the things you're investing in are keeping you comparable, instead of making you irreplaceable.`,
    prompt: {
      title: "The Preeminence Architect",
      description: "Your Chapter 2 coach. Moves you from commodity to category of one, so the competitor's $200K sign stops mattering.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Preeminence Architect, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Irreplaceability: position the business so the customer can only choose you. Not louder. Indispensable. When the competitor across the street installs the $200,000 sign, you are the reason matching it would be the wrong move.

You talk to me like a seasoned advisor, not a textbook. You deal in my real numbers and my real competitors. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Show me what irreplaceability looks like from four angles in two sentences each (a local service business, an online product business, a solo expert selling knowledge, a company selling to other businesses) and ask which is closest to my world. Then work only my lane.

YOUR DIAGNOSTIC SEQUENCE:
1. On what dimensions am I currently replaceable? Be blunt.
2. What would need to be true for my customer to have NO acceptable alternative?
3. The "only I can" statement I could truthfully make today, and the stronger one I could earn in 12 months.
4. Three specific investments that widen the moat, ranked by cost against effect.
5. The real price of staying replaceable, in my numbers.

RULES:
- Preeminence means acting as my client's fiduciary: their result ahead of my convenience. Every recommendation you make must pass that test for MY customers too.
- Ask before you tell. One question at a time when you need information.
- No generic positioning advice. If it could apply to any business, sharpen it until it can't.
- When I say "wrap up," produce a markdown summary of the session: where I'm replaceable, my "only I can" statement, and my next three moves, so I can save it.

Start now: ask me the four-angle question, then have me describe my business and my 2-3 main competitors.`,
    },
  },
  {
    slug: "super-synthesis",
    number: 3,
    title: "Super-Synthesis",
    subtitle: "CROSS-INDUSTRY PATTERN RECOGNITION",
    coach: {
      name: "The Emissary from Other Worlds",
      role: "Brings you answers from industries you've never looked at",
    },
    roomTeaser: "Where your problem turns out to be already solved.",
    jayQuote: "The answer to your problem has already been solved—in an industry you've never looked at.",
    corePrinciple: "Borrow proven solutions from unrelated industries and synthesize them into combinations competitors can't reverse-engineer.",
    whatJaySees: `At the peak of his consulting career, Jay was working with 10 to 12 different industries simultaneously. Not one at a time. All at the same time. In any given month he might advise an ice cream distributor in the morning, a software company after lunch, and a real estate developer before dinner. Everyone told him to specialize. He didn't, because the ideas that worked in ice cream were invisible to the people in software, and what was standard practice in publishing was unheard of in manufacturing.

In his words: "Most people think the advantage is seeing something others miss. That's where the story begins. The real magic is when you take what already works or is considered standard procedure in one arena and transplant it into another where it looks like genius."

The strategist who only works with software companies sees software problems and software solutions. The consultant who only serves law firms thinks in law firm terms. They swim in the same idea pool as everyone else in their space, drawing from the same limited set of solutions. When one of them has a breakthrough, a competitor copies it in six months. Jay was an emissary instead: someone who moved between worlds, carrying ideas from one place to another. When he walked into a software company, he brought lessons from ice cream distribution, retail operations, and direct mail. Industries where the problem had already been solved.

You don't need twelve industries to get this advantage. You need one question, asked before you try to solve anything: who else has this exact problem in a completely different industry, and how did they solve it? Exact problem means specific. Not "how do I get more customers," but "how do I get customers who pay premium prices for something they can't evaluate before buying." That one has been solved in wine, art, and luxury goods. Completely different means fields you've been dismissing as not relevant. The answer is usually sitting there, already proven, waiting to be imported.`,
    keyInsight: "A competitor can see your results. They can even see what you're doing differently. What they can't see is where the idea came from. Borrow from worlds your industry never studies, and your advantage becomes untraceable.",
    stories: [
      {
        title: "The Wall Street Furniture Store",
        hook: "A furniture store in Omaha, run like a trading desk.",
        story: `Nebraska Furniture Mart sells the same couches, tables, and lamps as every big-box competitor. Same SKUs. Same suppliers. Same showroom smell.

Years before anyone talked about real-time anything, they built a system that scraped every competitor's prices, every day. At midnight, electronic price tags across the stores updated automatically, always matching or beating the market. They called it "mark to market."

That's stock trading language, not furniture language. They imported it from Wall Street and installed it where nobody had seen it before.

Berkshire Hathaway bought a majority stake in 1983 because the numbers were staggering. The flagship store reportedly does more business per square foot than almost any furniture retailer in America.`,
        lesson: "They didn't invent a new product. They imported a concept from a completely different world and installed it where nobody had seen it, and nobody in retail could decode it.",
      },
      {
        title: "The Drill Bit Hughes Never Sold",
        hook: "Howard Hughes Sr. built his fortune on a drill bit nobody could buy.",
        story: `In the early 1900s, oil drilling stopped where hard rock started. Bits ground down or broke, and fortunes evaporated against stone.

Hughes designed a rotary drill bit with rolling cutters that punched through rock that stopped everyone else, and filed the patent in 1909. Drillers needed it. Hughes never sold a single one.

Leasing was already standard practice for tractors, industrial machinery, and railroad cars. Nobody in oil thought that way. Hughes did: not for sale, leased per project. The driller pays, the bit works, the driller hands it back. Next project, he pays again.

Every well drilled with his technology paid Hughes over and over, for decades. The royalties flowed in faster than his famous son could spend them.`,
        lesson: "Hughes didn't invent leasing. He imported it. The fortune came from one question: who already solved this in a different context?",
      },
    ],
    threeChecks: [
      {
        area: "Your Idea Diet",
        question: "Where did your last three breakthroughs come from? If they all trace back to your own industry's books, conferences, and peers, you're rearranging the same pieces as everyone you compete with.",
      },
      {
        area: "Your Problem Statement",
        question: "Can you state your biggest problem precisely enough to search other worlds with it? 'More customers' is a wish. 'Premium prices for a product buyers can't evaluate beforehand' is a problem wine, art, and luxury goods already solved.",
      },
      {
        area: "Your Borrowed Edge",
        question: "Name one mechanism in your business that a competitor couldn't trace to its source. If everything you run can be decoded by someone who only knows your industry, all of it can be copied.",
      },
    ],
    howAiFitsIn: `Your competitors are stuck in the same bubble you are. They read the same books, attend the same conferences, follow the same thought leaders. If the answer were inside your industry, someone would have found it by now.

The breakthrough is outside. In an industry you've never studied. In a solution that's been working for decades, somewhere else.

Jay's edge came from his calendar: ten industries at once made the cross-industry collisions inevitable. You don't have that calendar. AI is the emissary you don't have time to be. Give this coach your industry and your sharpest problem statement, and it goes looking in the worlds you've been dismissing as not relevant.`,
    prompt: {
      title: "The Emissary from Other Worlds",
      description: "Your Chapter 3 coach. Your problem is already solved in an industry you've never looked at. This coach goes and gets the answer.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Emissary from Other Worlds, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Super-Synthesis: borrow proven solutions from unrelated industries and synthesize them into combinations competitors can't reverse-engineer. Jay's edge never came from knowing one industry deeply. It came from seeing patterns across a thousand of them.

You talk to me like a well-traveled advisor who has watched the same problem get solved fifty different ways, not like a textbook. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Ask me for my industry and the specific challenge I'm staring at. If I'm vague, sharpen it with one question before you travel.

YOUR DIAGNOSTIC SEQUENCE:
1. Name 3 unrelated industries that solved my underlying problem (name the actual mechanism, not the industry cliche).
2. For each, extract the principle underneath the tactic. The tactic rarely transfers; the principle almost always does.
3. Translate each principle into my specific context, with my constraints.
4. Build the synthesis: one combined play that borrows from all three, that nobody in my industry is running.
5. Hand me the one question I should be asking that no one in my industry is asking.

RULES:
- Never bring me an idea from inside my own industry. That is the one place you're forbidden to look.
- Real examples over hypotheticals wherever you can.
- Rank what you bring back by how hard it is for my competitors to copy.
- When I say "wrap up," produce a markdown summary of the session: the three borrowed principles, the synthesis play, and my next three moves, so I can save it.

Start now: ask me for my industry and my specific challenge.`,
    },
  },
  {
    slug: "infinite-leverage",
    number: 4,
    title: "Infinite Leverage",
    subtitle: "EFFORT THAT COMPOUNDS INSTEAD OF ADDS",
    coach: {
      name: "The Leverage Multiplier",
      role: "Turns effort that adds into effort that compounds",
    },
    roomTeaser: "Where effort starts compounding instead of adding.",
    jayQuote: "Why do something once when you can do it once and benefit forever?",
    corePrinciple: "Structure your business so effort compounds rather than adds.",
    whatJaySees: `Most business owners ask: how can I get more customers? Jay asks: how do I make the customers I already have worth ten times more? One question leads to addition. The other leads to multiplication.

The pattern repeats everywhere. You think: create more content, post more, publish more. Jay thinks: make one piece work ten different ways. You think: find more partners, pitch more people. Jay thinks: structure one partnership for multiple revenue streams.

The math is the whole argument. Ten hours of work is ten units of output. Ten hours building a system that runs ten times is a hundred. The same system licensed to ten partners is a thousand. The work doesn't scale. The leverage scales.

Jay has a phrase for it: "Small hinges swing big doors."`,
    keyInsight: "There are only so many hours in your day and only so many customers you can personally serve. At some point the only way to grow by addition is to work more. Addition has a ceiling. Multiplication has none.",
    stories: [
      {
        title: "One Million Dollars for 48 Hours of Work",
        hook: "Two hours of work a month. A $35,000 to $50,000 check.",
        story: `Jay's Japanese partner runs a subscription business: 4,000 members at $100 per month. The partner handles everything. Translation, hosting, marketing, customer service, payment processing.

Jay's role: approve content. Two hours per month.

Jay's share: 20% of gross, between $35,000 and $50,000 per month. The deal has run for over two years. Roughly $1 million for 48 hours of work.

Why only 20% when Jay created all the content? "Because the other guy does all the work," Jay said. "I want to get paid while someone else runs a business in Japan using my stuff. Twenty percent of something is infinitely better than one hundred percent of nothing."

If the partner makes nothing, Jay makes nothing. If the partner grows, Jay's check grows with it. Zero risk. Zero operational burden. The intellectual property stays his.`,
        lesson: "Most people would have tried to build a business in Japan. Jay found someone who'd already built one and plugged in.",
      },
      {
        title: "The Consultant Who Stopped Trading Hours for Dollars",
        hook: "Same diagnostic. Same methodology. Three new revenue streams.",
        story: `A strategy consultant came to one of Jay's workshops charging $8,500 per engagement, working with 15 to 20 clients a year, maxed out around $170,000. She had spent six years refining a diagnostic for operational bottlenecks. It worked reliably. And she delivered it the same way every time: show up, run the diagnostic, write the report, present findings. One client, one fee, repeat.

Jay asked her one question: "Who else needs this diagnostic but can't afford you?"

She'd never thought about it. Her clients were mid-sized manufacturers, but the diagnostic would work for smaller operations too. They just couldn't pay $8,500.

So she licensed the framework to three business coaches who served smaller manufacturers, at $2,000 per client they ran through the system, with referrals flowing back when clients outgrew the coaches.

Within 18 months, the licensing generated more than her direct consulting. And she was working fewer hours.`,
        lesson: "She didn't build anything new. She found a different way to deliver what clients already paid her for.",
      },
    ],
    threeChecks: [
      {
        area: "What You've Already Built",
        question: "What have you created that you're only using once? The workshop you delivered three times and filed away. The framework you explain on every call. The process that exists only in your head. You've already done the work; the question is whether you're getting paid once or repeatedly.",
      },
      {
        area: "Who Has Your Customers",
        question: "Who already has your ideal customers' attention but doesn't compete with you? You probably know. You've had the coffee and exchanged the cards. Most people don't get stuck on the who. They get stuck on the how.",
      },
      {
        area: "The Small Hinge",
        question: "What's the one structural change that makes everything else move? More outreach and more hours feel like progress. The hinge is different: a revenue share instead of a fee, a license instead of a delivery, one asset doing double duty.",
      },
    ],
    howAiFitsIn: `AI can look at your business the way a $250K-a-year consultant would. Fresh eyes. No assumptions. No emotional attachment to how things currently work. But you can't expect even that consultant to find your leverage without the full picture.

So give this coach context first: what you do, who you serve, what you've built, what you've tried, what hasn't worked. Then run the leverage questions against your real numbers.

And when you get an answer, don't accept it. Challenge it: what's wrong with this approach, what am I missing, why would this fail? Jay treats the first response as the opening of a negotiation, not the closing of a conversation. Do the same here. Depth creates insight. Breadth creates another document you'll never open again.`,
    prompt: {
      title: "The Leverage Multiplier",
      description: "Your Chapter 4 coach. Addition has a ceiling. This coach finds where your effort can compound: geometry instead of arithmetic.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Leverage Multiplier, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Infinite Leverage: structure the business so effort compounds rather than adds. Working harder is arithmetic. You deal in geometry: the same effort routed through structures that multiply. More customers, higher value per transaction, more transactions per customer, stacked, is Jay's canonical example, because 10% on each lever is not 30% growth, it's compounding.

You talk to me like an advisor who has watched owners work twice as hard for 10% more, not like a textbook. You deal in my real numbers. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Show me compounding-vs-adding from four angles in two sentences each (a service business trading hours for dollars, a product business pouring everything into acquisition, a solo expert doing everything manually, a team drowning in repeated work) and ask which is closest to my world. Then work only my lane.

YOUR DIAGNOSTIC SEQUENCE:
1. Where is my effort purely additive right now? Name the ceiling in my numbers.
2. Which of the three levers (customer count, transaction value, purchase frequency) is most neglected in my business, and what does 10% on each compound to?
3. What am I doing repeatedly that could be built once and benefit forever?
4. What partnership or asset could multiply my reach without multiplying my hours?
5. Design the leverage structure: the specific system where this quarter's effort still pays me next year.

RULES:
- Every recommendation must name what compounds, and over what period. If it only adds, say so and discard it.
- Use my real numbers for every projection. Conservative estimates only.
- Ask before you tell. One question at a time when you need information.
- When I say "wrap up," produce a markdown summary of the session: my biggest additive trap, the lever to pull first, and my next three moves, so I can save it.

Start now: ask me the four-angle question, then have me describe my business and my current numbers (customers, average transaction, purchase frequency).`,
    },
  },
  {
    slug: "value-multiplication",
    number: 5,
    title: "Value Multiplication",
    subtitle: "THE CUSTOMERS YOU ALREADY HAVE",
    coach: {
      name: "The Backend Architect",
      role: "Multiplies what every customer is worth to you",
    },
    roomTeaser: "Where the customers you have become worth ten times more.",
    jayQuote: "The customers you already have are worth ten times what you're getting from them.",
    corePrinciple: "The people already inside the door are the real opportunity.",
    whatJaySees: `In 2010, a cycling coach named Dave Brailsford took over British Cycling, a program so used to losing that one major bike manufacturer reportedly refused to sell it equipment. His philosophy had a name: the aggregation of marginal gains. Find a hundred things you can improve by one percent and let the compound effect do the work. He optimized the riders' pillows, the massage gel, the truck that carried the bikes. Within a few years, British riders were dominating Olympic cycling. Brailsford won by measuring what every other coach had decided wasn't worth measuring. Most people read that as a sports story. Jay lives it as business philosophy.

Most people think about business as a series of transactions. Jay thinks about it as a portfolio of relationships. Transactions end. Relationships compound.

Most businesses design their revenue model around the first transaction. Get someone in the door, close the sale, scramble for the next customer. Every dollar of growth requires a fresh dollar of acquisition. You're always hunting. Always filling the pipeline. Always wondering if next month will be feast or famine.

Jay designs businesses with backend architecture instead: map the full sequence of what a customer could buy from you over years, then build everything else to feed that sequence. Every single decision changes when you know what a customer is worth over time.

Right now, most of your customers buy once or twice and drift away. Not because they're unhappy. Because nobody gave them a reason to stay. You didn't do anything wrong. You just didn't do anything at all. That's the quiet leak this room teaches you to see: the relationships you already paid to create, sitting there waiting to compound.`,
    keyInsight: "Right now, most of your customers buy once or twice and drift away. Not because they're unhappy. Because nobody gave them a reason to stay. You didn't do anything wrong. You just didn't do anything at all.",
    stories: [
      {
        title: "The 13X Customer",
        hook: "Same store. Same staff. Thirteen times the revenue.",
        story: `A retail vape section was doing $60,000 a month. Roughly a year later it was doing $780,000. Same location. Same square footage. Same manager who'd been there three years.

The first instinct was external: something viral, a competitor closing. The data said otherwise. The real shift was what each customer was worth. Buying more. Coming back more often. Bringing their friends.

The engine was a referral program: a $20 account credit for creating a profile, plus 1% back to the referrer every time that customer purchased, reinforced by automatic text sequences. Jay's additions: verification so the credit couldn't be gamed, contests with prizes worth talking about, and a push to make winners public so the referral value felt real.

Customers stopped being just customers. They had skin in the game. The store had accidentally built a retention mechanism that had nothing to do with its products.`,
        lesson: "The growth didn't come from more customers. It came from finally asking what the existing ones were worth.",
      },
      {
        title: "Icy Hot and the Math Nobody Does",
        hook: "Jay gave away the entire front-end and built a brand on the back.",
        story: `Early in his career, Jay was young, broke, and marketing Icy Hot, the muscle pain reliever. No budget. No relationships. "I was a hungry animal," Jay said. "I was on the phone, sending stuff out, all day long. I didn't care about the size of the deal. All I cared about was building critical mass as quickly as I could."

He contacted every radio station, television station, and publication with an audience that might use the product. Not the big ones first. All of them. The offers were aggressive. Sometimes he gave away the entire front-end revenue just to get distribution, or lost money on the first transaction.

It worked because of math most owners never calculate: the Allowable Acquisition Cost. If a customer spends $10,000 with you over five years at a 40% margin, their lifetime value is $4,000 in profit. You know your ceiling. You're not guessing.

Icy Hot became a brand generating tens of millions in backend revenue.`,
        lesson: "Competitors measuring first-purchase profit called it insane. Measured across five years, it was the smartest investment he could have made.",
      },
    ],
    threeChecks: [
      {
        area: "After the First Sale",
        question: "What do your customers need after the first engagement? A tree trimmer's clients only called when branches got unruly. Jay moved them to automatic quarterly service: 70% converted within three months, profit quadrupled, and the advertising budget disappeared.",
      },
      {
        area: "Alongside the First Sale",
        question: "What does the customer already in front of you need right now that you're not offering? A Texas doctor put signs in his waiting room, restrooms, and payment counter: flu shots, $19 today. One in three patients said yes. $5,000 a month without a single new patient.",
      },
      {
        area: "The Asset Collecting Dust",
        question: "What would people pay for that's sitting idle in your business? A newsletter publisher lost money on every mailing until Jay showed him the subscribers were the asset. Four investment companies paid hundreds of thousands to reach them.",
      },
    ],
    howAiFitsIn: `Most business owners know their acquisition cost down to the penny. What a click costs, what a lead costs, what a conversion costs. Ask what a customer is worth over five years and you get a blank stare.

That blind spot is expensive. If you don't know what a customer is actually worth, you can't calculate what you can afford to spend to acquire one. You can't design a backend. You're guessing.

AI can calculate it in minutes, but you have to give it your actual numbers, not your assumptions. Tell this coach about your five best customers: what they bought first, what they bought after, how long they've stayed, what they've asked for that you don't offer. Context is the difference between advice you file away and insight you can act on.`,
    prompt: {
      title: "The Backend Architect",
      description: "Your Chapter 5 coach. You've been told growth means more customers. This coach multiplies the value of the ones already inside the door.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Backend Architect, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Value Multiplication: the customers you already have are worth ten times what you're getting from them. Owners chant acquisition, acquisition, acquisition and never notice the people already inside the door. A 13x revenue jump rarely comes from new faces. It comes from what each existing customer buys, how often they come back, and who they bring.

You talk to me like an advisor who has seen the backend outearn the storefront a hundred times, not like a textbook. You deal in my real numbers. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Show me backend value from four angles in two sentences each (a retail or e-commerce business, a service business, a solo expert with an audience, a B2B company with a client roster) and ask which is closest to my world. Then work only my lane.

YOUR DIAGNOSTIC SEQUENCE:
1. What is a customer actually worth to me today (first purchase, repeat purchases, referrals), and what am I measuring instead?
2. Where is my backend leak: what do my customers buy AFTER the first sale, from someone else, that I could be providing?
3. What would my numbers look like if average customer value doubled with zero new customers? Show the math.
4. Design my backend: the follow-on offer, the re-engagement rhythm, and the referral mechanism, in that order.
5. The first $100 experiment I can run this week to prove the backend exists.

RULES:
- Never propose acquisition spend until the backend math is on the table.
- Use my real numbers. If I don't know a number, make finding it my first assignment.
- Ask before you tell. One question at a time when you need information.
- When I say "wrap up," produce a markdown summary of the session: my true customer value, the biggest backend leak, and my next three moves, so I can save it.

Start now: ask me the four-angle question, then have me describe my business and what I currently think a customer is worth.`,
    },
  },
  {
    slug: "guaranteed-upside",
    number: 6,
    title: "Guaranteed Upside",
    subtitle: "TAKE AWAY THE REASON TO SAY NO",
    coach: {
      name: "The Risk Reversal Engineer",
      role: "Structures offers your customer can't rationally refuse",
    },
    roomTeaser: "Where risk stops being the reason.",
    jayQuote: "When you take away the risk, you take away the reason to say no.",
    corePrinciple: "Structure offers so the customer has nothing to lose and everything to gain.",
    whatJaySees: `In 1670, Blaise Pascal posed history's most famous wager. His argument wasn't about probability. It was about structure. Design the bet correctly and you cannot lose. The downside is trivial. The upside is infinite. The rational move is obvious regardless of the odds.

Most people read Pascal's Wager as philosophy. Jay lives it as deal design.

Watch Jay respond to a nervous founder describing a new market, a new product, an untested partnership, and you notice something strange. He doesn't manage risk or tolerate it. He engineers it out.

In his words: "Most people think risk is the price of growth. I think risk is a design flaw. If you're carrying risk, it means you haven't structured the deal correctly."`,
    keyInsight: "Most people face major decisions as binary gambles: launch or don't, invest or hold back. That framing is the trap. Stop asking whether the idea is worth the risk. Start asking how to structure it so the worst outcome is still a win.",
    stories: [
      {
        title: "$376,000 Worth of Patience",
        hook: "The bottleneck was one programmer. The workaround was two kiosks.",
        story: `A European food company owned forty-five locations selling Hawaiian poke bowls. Some stores thrived, others scraped by, and nobody could say why, because every price change and every experiment had to crawl through the one programmer who controlled the kiosk ordering system. Requests took months. By the time a test was approved, the season had changed.

"They were hemorrhaging money," Jay said. "Every month they waited to test something it was costing them roughly $47,000 they weren't capturing. And they'd been waiting for eight months. Which is $376,000 worth of patience."

Jay's suggestion: why be hostage to your tech company just because they're slow? Set up a separate kiosk in two or three stores. Let someone else program it. Run tests independently for two months. Then force the main system to implement the winners.

Within weeks they were testing price points, bundles, and promotions that would have taken six months through the official channel.`,
        lesson: "The instinct is to fight the bottleneck: push the vendor, force the issue. Jay's move is different. The wall has edges. Walk around it.",
      },
      {
        title: "We Goofed",
        hook: "A two-word headline cleared $400,000 of dead inventory in a weekend.",
        story: `A clothing retailer was sitting on $150,000 wholesale worth of conservative men's suits. Fashion had shifted. Nobody wanted them. The inventory was dead weight heading for a write-off.

Jay wrote a two-word headline: "We Goofed."

The ad told the truth. The retailer had over-purchased. He was embarrassed. He knew the clothes were out of style. But for men who preferred traditional cuts, and there were plenty, this was the deal of a decade. Below-wholesale pricing. First come, first served.

The ad ran for two days. They sold everything but five garments. $400,000 in retail value, cleared in a weekend.

Nothing about the financial risk changed. Jay changed how the retailer talked about it. Instead of hiding the mistake, he made it the selling proposition.`,
        lesson: "The worst outcome, public embarrassment, became the mechanism for the best outcome. Sometimes the only guarantee you can offer is the truth.",
      },
    ],
    threeChecks: [
      {
        area: "The Untested Assumption",
        question: "What are you assuming about your next initiative that you could test with a conversation instead of an investment? 'Customers need to see the finished product' usually means 'I haven't asked them yet.'",
      },
      {
        area: "The Pre-Sell",
        question: "What could you pre-sell before you build? Ask the people who would actually have to buy the thing. If they lean in, you have validation before the build. If they say no, you learned for free.",
      },
      {
        area: "The Small Experiment",
        question: "What full-scale commitment are you agonizing over that could be a two-week pilot instead? The poke bowl company skipped the full overhaul. Two test kiosks, two stores, two months gave them everything they needed.",
      },
    ],
    howAiFitsIn: `You already know what you should test. Raise the prices. Launch the service. Approach the partner. You've been thinking about it for weeks, and you haven't done it because the downside feels heavier than the upside.

That's where this coach earns its keep. Point it at the specific thing you're afraid of. Not "I want to grow my business." Specific: "I've been wanting to raise my prices by 30% but I'm afraid I'll lose my three best customers." The more specific the fear, the sharper the response.

Then have it decompose the risk. What are you actually afraid of? Losing revenue, losing relationships, looking foolish? Each fear is a separate assumption, and each assumption can be tested independently. The goal is to turn one scary bet into three small experiments.`,
    prompt: {
      title: "The Risk Reversal Engineer",
      description: "Your Chapter 6 coach. Eight months of polishing the deck is not strategy, it's fear. This coach engineers the offer so risk stops being the reason.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Risk Reversal Engineer, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Guaranteed Upside: structure the offer so the customer has nothing to lose and everything to gain. When you take away the risk, you take away the reason to say no. And you know the risk runs both directions: the owner who sits on an idea for eight months, polishing the deck for the forty-seventh time, is stalled by the same fear their customer feels at the buy button.

You talk to me like an engineer of deals, not a motivational speaker. You deal in my real offer and my real objections. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Show me risk reversal from four angles in two sentences each (a high-ticket service, a physical product, a subscription or software offer, a professional selling their own expertise) and ask which is closest to my world. Then work only my lane.

YOUR DIAGNOSTIC SEQUENCE:
1. List every risk my customer perceives, real or imagined. The imagined ones count double.
2. For each risk: absorb it, eliminate it, or pay them for taking it. Pick the mechanism.
3. Engineer the guarantee structure that makes yes the only rational answer, and price the worst case for me honestly.
4. Name the psychological shift this creates in the buyer, and in me.
5. Script how I present it without sounding desperate: confident words, exact phrasing.

RULES:
- Every guarantee you propose must include the math of the downside: what it costs me if 5%, 15%, 30% of buyers invoke it.
- If my product can't honestly support a strong guarantee, say so and tell me what to fix first.
- Ask before you tell. One question at a time when you need information.
- When I say "wrap up," produce a markdown summary of the session: the risks we found, the guarantee we engineered, and my next three moves, so I can save it.

Start now: ask me the four-angle question, then have me describe my offer and the 2-3 objections I hear most.`,
    },
  },
  {
    slug: "constraint-inversion",
    number: 7,
    title: "Constraint Inversion",
    subtitle: "LOVE WHAT YOU'VE BEEN TRAINED TO HATE",
    coach: {
      name: "The Constraint Inverter",
      role: "Turns your biggest limitation into your unfair advantage",
    },
    roomTeaser: "Where the thing you apologize for becomes the moat.",
    jayQuote: "Your biggest constraint isn't holding you back. Your perception of it is.",
    corePrinciple: "Transform limitations into your greatest competitive advantages.",
    whatJaySees: `Most consultants hear about constraints and start problem-solving. Limited budget? Find efficiencies. Small market? Expand your reach. Perfectly reasonable. Also completely predictable.

Jay doesn't immediately try to remove a limitation. He examines it. Turns it over like an artifact from an archaeological dig. Then he asks the question that changes everything: "What does this constraint make possible that wouldn't be possible without it?"

A small market means you can know every customer personally. A limited budget means every dollar has to prove itself. Geographic isolation means you've built logistics your competitors never needed to develop.

Every constraint creates a corresponding capability. Jay builds the strategy around what the constraint made possible.`,
    keyInsight: "Your business has constraints you've accepted as permanent. Things you apologize for, mention with a slight wince. But the thing that feels like a limitation might be the source of an advantage nobody can replicate. Most operators stare at their constraint for years and see only the wall. Jay walks in and sees the door embedded in it.",
    stories: [
      {
        title: "The Manufacturer Who Stopped Apologizing",
        hook: "Too small to compete on price. Too small to copy.",
        story: `A small manufacturer came to Jay frustrated. They couldn't compete with the big players on price. No production volume, no economies of scale, permanently higher per-unit costs. Every advisor had the same answer: grow, get bigger, and until then, accept smaller margins.

Jay asked a different question: "What can you do because you're small that they can't do because they're big?"

The list wrote itself. Custom runs of 25 to 50 units while the big players enforced strict minimums. Two-week turnarounds against standard eight-week lead times. Specs changeable at 3pm on Thursday with the order still shipping Friday. Every customer known by name instead of account number.

"So you're not a small version of them," Jay said. "You're something different entirely. You're the only option for customers who need custom, fast, and flexible."

Within a year the manufacturer had restructured his entire positioning around speed, customization, and personal service, charging a premium for capabilities the big players couldn't match even if they wanted to.`,
        lesson: "He'd been apologizing for his size. His size was the entire value proposition. The constraint was the strategy.",
      },
      {
        title: "The Dry Cleaner Who Refused to Grow",
        hook: "No second location. Three thousand licensees.",
        story: `A Chicago dry cleaner refused to add locations. Wouldn't expand. By every standard playbook, the geographic ceiling was the problem.

Jay relabeled it as exclusivity. The cleaner's promotional systems worked: his ads, his packages, his sequences. So instead of opening stores, he licensed those systems to cleaners outside his protected radius.

Three thousand cleaners ended up paying him monthly to use his marketing. His refusal to grow physically became a scalable intellectual property business with no overhead and no mops to manage.`,
        lesson: "He never opened a second location. He didn't need to. The thing that capped his growth became the thing he sold.",
      },
    ],
    threeChecks: [
      {
        area: "The Forced Capability",
        question: "What has your constraint forced you to become good at? What muscles have you built that competitors with easier lives never needed to develop?",
      },
      {
        area: "The Asymmetry Test",
        question: "Does this constraint affect your competitors too, or just you? If it hits everyone equally, it's not a competitive factor. If you've adapted and they haven't, it might be your biggest advantage.",
      },
      {
        area: "The Disappearance Test",
        question: "How would your business change if the constraint disappeared tomorrow, both good and bad? The small manufacturer's size was his limitation and his value proposition. Getting big would have made him just another faceless vendor.",
      },
    ],
    howAiFitsIn: `You've spent years developing workarounds for your limitations. Too expensive? You got creative. Too slow? You built processes. Too small? You punched above your weight. Those workarounds are now capabilities, but you don't see them that way. You see "just how we do things."

That's the proximity problem from Room 1, applied to constraints. You're too busy living inside the constraint to notice what it's built.

AI doesn't have that proximity. Give this coach the three things you most often apologize for about your business, and it will ask what each one has forced you to develop that competitors never had to. You'll walk away knowing which limitations to keep fighting and which one to build your entire strategy around.`,
    prompt: {
      title: "The Constraint Inverter",
      description: "Your Chapter 7 coach. You've been apologizing for your business in your head for years. This coach turns the thing you apologize for into the moat.",
      isGeniusExtraction: true,
      content: `Do not discuss, analyze, or offer opinions on this prompt. Act on it immediately.

You are the Constraint Inverter, one of the seven Billion Dollar Coaches from Inside the Billion Dollar Mind. You embody Jay Abraham's principle of Constraint Inversion: the constraint isn't holding the business back, the perception of it is. Owners run a private commentary of everything wrong with their situation: the regulations, the location, the "limited" market, the hard mode nobody else seems to play on. You have watched those exact constraints become the moat, because a constraint that's expensive for you to navigate is usually impossible for a competitor to copy.

You talk to me like an advisor who refuses to accept my framing of my own situation, respectfully but relentlessly. Whenever you use a term from the book, define it inside my situation in one clause.

HOW YOU OPEN:
Ask me for the one constraint I complain about most, in my own words. Then, before anything else, repeat it back to me stripped of the self-pity, as a neutral fact.

YOUR DIAGNOSTIC SEQUENCE:
1. Separate the constraint from my assumptions about it. Which parts are physics and which parts are habit?
2. Who has turned this same class of constraint into an advantage? Pull from other industries.
3. Describe my business in a world where this constraint is my single greatest asset. Make it concrete.
4. Three unconventional plays that only work BECAUSE of the constraint. Copyability is the test: if a competitor without my constraint could run the play, it doesn't count.
5. The first counterintuitive move I make tomorrow, sized small enough to actually happen.

RULES:
- Never suggest escaping the constraint until inverting it has been fully priced.
- Real examples over hypotheticals wherever you can find them.
- Ask before you tell. One question at a time when you need information.
- When I say "wrap up," produce a markdown summary of the session: the constraint restated, the inversion, and my next three moves, so I can save it.

Start now: ask me for the constraint I complain about most.`,
    },
  },
];

export function getPrincipleBySlug(slug: string): Principle | undefined {
  return principles.find((p) => p.slug === slug);
}

export function getAllPrincipleSlugs(): string[] {
  return principles.map((p) => p.slug);
}
