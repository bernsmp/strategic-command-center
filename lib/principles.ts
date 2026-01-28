// The 7 Organizing Principles from Inside the Billion Dollar Mind

export interface Principle {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
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

export const principles: Principle[] = [
  {
    slug: "perceptual-asymmetry",
    number: 1,
    title: "Perceptual Asymmetry",
    subtitle: "THE ROOT OF BREAKTHROUGH THINKING",
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
      title: "The Perceptual Asymmetry Audit",
      description: "See your business the way Jay would see it—spotting the hidden assets and blind spots that proximity has made invisible.",
      isGeniusExtraction: true,
      content: `You are a strategic advisor trained in Jay Abraham's methodology of Perceptual Asymmetry—the principle that business owners are always too close to their own operations to see their biggest opportunities.

I'm going to describe my business. Your job is NOT to solve my stated problems. Your job is to:

1. **Question my assumptions** - What am I treating as fixed that might be flexible?
2. **Find my hidden assets** - What do I own, control, or have access to that I'm not leveraging?
3. **Identify my blind spots** - What have I stopped seeing because it's "just how we do things"?

Ask me the questions Jay would ask. The ones that make me pause. The ones I haven't been asked before.

After I describe my business, start with ONE powerful question—the kind that makes the room go quiet.

---

**My Business:**
[Describe your business in 2-3 paragraphs. Include: what you sell, who you serve, your main challenges, and what you believe is holding you back.]`,
    },
  },
  {
    slug: "irreplaceability",
    number: 2,
    title: "Irreplaceability",
    subtitle: "BECOME THE ONLY LOGICAL CHOICE",
    jayQuote: "It's not about being louder. It's about being indispensable. It's about becoming the only logical choice in your market.",
    corePrinciple: "Position your business so they can only choose you.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Irreplaceability Audit",
      description: "Evaluate and strengthen your market position using Jay's Irreplaceability framework.",
      isGeniusExtraction: true,
      content: `Evaluate and strengthen my market position using Jay Abraham's Irreplaceability framework.

My business: [DESCRIBE BRIEFLY]
My main competitors: [LIST 2-3]

Analyze:
1. On what dimensions am I currently replaceable?
2. What would need to be true for a customer to have NO alternative to me?
3. The "only I can" statement I could truthfully make
4. Three investments I could make to widen the irreplaceability moat
5. The risk if I stay replaceable vs. the opportunity if I become irreplaceable`,
    },
  },
  {
    slug: "super-synthesis",
    number: 3,
    title: "Super-Synthesis",
    subtitle: "CROSS-INDUSTRY PATTERN RECOGNITION",
    jayQuote: "The answer to your problem has already been solved—in an industry you've never looked at.",
    corePrinciple: "Find solutions by synthesizing patterns across unrelated industries.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Super-Synthesis Question Generator",
      description: "Generate breakthrough questions using Jay's cross-industry synthesis method.",
      isGeniusExtraction: true,
      content: `Generate breakthrough questions using Jay Abraham's cross-industry synthesis method.

My industry: [YOUR INDUSTRY]
My specific challenge: [THE PROBLEM]

Do this:
1. Identify 3 unrelated industries that have solved a similar fundamental problem
2. For each industry, extract the underlying principle (not the tactic)
3. Show me how to adapt each principle to my specific context
4. Create a synthesis that combines elements from all three
5. Give me the one question I should be asking that no one in my industry is asking`,
    },
  },
  {
    slug: "infinite-leverage",
    number: 4,
    title: "Infinite Leverage",
    subtitle: "MULTIPLY EVERY UNIT OF EFFORT",
    jayQuote: "Why do something once when you can do it once and benefit forever?",
    corePrinciple: "Design systems that multiply every unit of effort into multiple units of result.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Infinite Leverage Audit",
      description: "Identify and architect leverage points that multiply your results.",
      isGeniusExtraction: true,
      content: `Help me architect infinite leverage using Jay Abraham's methodology.

My business: [DESCRIBE]

Analyze:
1. What am I doing repeatedly that could be systematized once?
2. What partnerships could multiply my reach without multiplying my effort?
3. What one-time efforts could produce ongoing returns?
4. Where am I trading time for money when I could be trading systems for money?
5. Design my infinite leverage system—the structure that works while I sleep.`,
    },
  },
  {
    slug: "value-multiplication",
    number: 5,
    title: "Value Multiplication",
    subtitle: "THE THREE WAYS COMPOUND EFFECT",
    jayQuote: "There are only three ways to grow a business: more customers, higher transaction value, more frequent purchases. Master all three and the math becomes exponential.",
    corePrinciple: "Stack the three growth levers for compound results.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Three Ways Growth Calculator",
      description: "Calculate your compound growth potential using Jay's Three Ways framework.",
      isGeniusExtraction: false,
      content: `Using Jay Abraham's "Three Ways to Grow a Business" framework, calculate my growth potential.

Current metrics:
- Number of customers: [X]
- Average transaction value: $[Y]
- Purchase frequency per year: [Z]

Show me:
1. If I increase each by just 10%, what's my total revenue growth?
2. Which of the three levers has the biggest opportunity in my business?
3. Three specific tactics for the highest-potential lever
4. A 90-day implementation roadmap`,
    },
  },
  {
    slug: "guaranteed-upside",
    number: 6,
    title: "Guaranteed Upside",
    subtitle: "RISK REVERSAL & PREEMINENCE",
    jayQuote: "When you take away the risk, you take away the reason to say no.",
    corePrinciple: "Structure offers so the customer has nothing to lose and everything to gain.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Risk Reversal Architect",
      description: "Design irresistible offers using Jay's risk reversal methodology.",
      isGeniusExtraction: true,
      content: `Help me design a risk reversal strategy using Jay Abraham's methodology.

My offer: [DESCRIBE WHAT YOU SELL]
Current objections I hear: [LIST 2-3]

Create:
1. What specific risks does my customer perceive (real or imagined)?
2. How can I absorb or eliminate each risk?
3. A guarantee structure that makes saying "yes" the obvious choice
4. The psychological shift this creates in the buyer's mind
5. How to communicate this without sounding desperate`,
    },
  },
  {
    slug: "constraint-inversion",
    number: 7,
    title: "Constraint Inversion",
    subtitle: "LOVE WHAT YOU'VE BEEN TRAINED TO HATE",
    jayQuote: "Your biggest constraint isn't holding you back. Your perception of it is.",
    corePrinciple: "Transform limitations into your greatest competitive advantages.",
    whatJaySees: "Coming soon...",
    keyInsight: "Coming soon...",
    stories: [],
    threeChecks: [],
    howAiFitsIn: "Coming soon...",
    prompt: {
      title: "The Constraint Inversion Matrix",
      description: "Transform your biggest limitation into your greatest advantage.",
      isGeniusExtraction: true,
      content: `Apply Jay Abraham's Constraint Inversion principle to my biggest limitation.

My constraint: [DESCRIBE THE LIMITATION]

Walk me through:
1. What assumptions am I making about this constraint?
2. Who has turned a similar constraint into an advantage?
3. What would my business look like if this constraint was actually my greatest asset?
4. Three unconventional strategies to leverage this "weakness"
5. The first counterintuitive move I should make tomorrow`,
    },
  },
];

export function getPrincipleBySlug(slug: string): Principle | undefined {
  return principles.find((p) => p.slug === slug);
}

export function getAllPrincipleSlugs(): string[] {
  return principles.map((p) => p.slug);
}
