"use client";

import { motion } from "framer-motion";
import { Search, Filter, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PromptCard, { PromptGrid } from "@/components/PromptCard";
import { principles } from "@/lib/principles";

// Sample prompt data - would come from a database in production
const samplePrompts = [
  {
    id: 1,
    title: "Hidden Asset Discovery Audit",
    category: "DIAGNOSIS",
    principle: "PERCEPTUAL ASYMMETRY",
    isGeniusExtraction: true,
    prompt: `Analyze my business through Jay Abraham's "Hidden Asset" lens. I'll describe my business, and you'll identify at least 5 overlooked assets I'm not leveraging.

For each hidden asset, tell me:
1. What it is and why it qualifies as an asset
2. The current "leak" - how value is being lost
3. One specific monetization strategy with a 90-day action plan
4. The potential revenue impact (conservative estimate)

My business: [DESCRIBE YOUR BUSINESS]`,
    description:
      "Uncover the assets hiding in plain sight. Based on Jay's methodology of finding value others miss.",
    tags: ["assets", "leverage", "opportunity"],
    jayiUrl: "https://jayi.app/prompt/hidden-asset",
  },
  {
    id: 2,
    title: "Three Ways Growth Calculator",
    category: "STRATEGY",
    principle: "VALUE MULTIPLICATION",
    prompt: `Using Jay Abraham's "Three Ways to Grow a Business" framework, calculate my growth potential.

Current metrics:
- Number of customers: [X]
- Average transaction value: $[Y]
- Purchase frequency per year: [Z]

Show me:
1. If I increase each by just 10%, what's my total revenue growth?
2. Which of the three levers has the biggest opportunity in my business?
3. Three specific tactics for the highest-potential lever
4. A 90-day implementation roadmap`,
    description:
      "The compound math that turned this simple framework into $75B in client results.",
    tags: ["growth", "math", "leverage"],
  },
  {
    id: 3,
    title: "Partnership Preeminence Script",
    category: "EXECUTION",
    principle: "INFINITE LEVERAGE",
    isGeniusExtraction: true,
    prompt: `Write a partnership proposal using Jay Abraham's "Preeminence" philosophy.

I want to approach [COMPANY/PERSON] for a strategic partnership.

My offer: [WHAT I BRING]
What I want: [DESIRED OUTCOME]

Create:
1. An opening that demonstrates I've done my homework on THEIR business
2. A value proposition framed around THEIR success (not mine)
3. A risk-reversal that makes saying "yes" the obvious choice
4. A specific next step that's low-commitment but high-momentum`,
    description:
      "The approach that turns cold outreach into warm welcomes. Lead with their success.",
    tags: ["partnerships", "preeminence", "outreach"],
    jayiUrl: "https://jayi.app/prompt/partnership",
  },
  {
    id: 4,
    title: "Constraint Inversion Matrix",
    category: "REFRAME",
    principle: "CONSTRAINT INVERSION",
    isGeniusExtraction: true,
    prompt: `Apply Jay Abraham's Constraint Inversion principle to my biggest limitation.

My constraint: [DESCRIBE THE LIMITATION]

Walk me through:
1. What assumptions am I making about this constraint?
2. Who has turned a similar constraint into an advantage?
3. What would my business look like if this constraint was actually my greatest asset?
4. Three unconventional strategies to leverage this "weakness"
5. The first counterintuitive move I should make tomorrow`,
    description:
      "The seventh principle: Learn to love what you've been trained to hate.",
    tags: ["constraints", "reframe", "innovation"],
  },
  {
    id: 5,
    title: "Super-Synthesis Question Generator",
    category: "THINKING",
    principle: "SUPER-SYNTHESIS",
    prompt: `Generate breakthrough questions using Jay Abraham's cross-industry synthesis method.

My industry: [YOUR INDUSTRY]
My specific challenge: [THE PROBLEM]

Do this:
1. Identify 3 unrelated industries that have solved a similar fundamental problem
2. For each industry, extract the underlying principle (not the tactic)
3. Show me how to adapt each principle to my specific context
4. Create a synthesis that combines elements from all three
5. Give me the one question I should be asking that no one in my industry is asking`,
    description:
      "See patterns across 1,000+ industries. Find answers where no one else is looking.",
    tags: ["synthesis", "innovation", "questions"],
  },
  {
    id: 6,
    title: "Irreplaceability Audit",
    category: "POSITIONING",
    principle: "IRREPLACEABILITY",
    prompt: `Evaluate and strengthen my market position using Jay's Irreplaceability framework.

My business: [DESCRIBE BRIEFLY]
My main competitors: [LIST 2-3]

Analyze:
1. On what dimensions am I currently replaceable?
2. What would need to be true for a customer to have NO alternative to me?
3. The "only I can" statement I could truthfully make
4. Three investments I could make to widen the irreplaceability moat
5. The risk if I stay replaceable vs. the opportunity if I become irreplaceable`,
    description:
      "Move from commodity to category of one. Create the moat that can't be crossed.",
    tags: ["positioning", "differentiation", "moat"],
  },
];

const categories = [
  "ALL",
  "DIAGNOSIS",
  "STRATEGY",
  "EXECUTION",
  "REFRAME",
  "THINKING",
  "POSITIONING",
];

const principleFilters = [
  "ALL PRINCIPLES",
  "PERCEPTUAL ASYMMETRY",
  "IRREPLACEABILITY",
  "SUPER-SYNTHESIS",
  "INFINITE LEVERAGE",
  "VALUE MULTIPLICATION",
  "GUARANTEED UPSIDE",
  "CONSTRAINT INVERSION",
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedPrinciple, setSelectedPrinciple] = useState("ALL PRINCIPLES");
  const [showGeniusOnly, setShowGeniusOnly] = useState(false);

  const filteredPrompts = samplePrompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || prompt.category === selectedCategory;
    const matchesPrinciple =
      selectedPrinciple === "ALL PRINCIPLES" ||
      prompt.principle === selectedPrinciple;
    const matchesGenius = !showGeniusOnly || prompt.isGeniusExtraction;

    return matchesSearch && matchesCategory && matchesPrinciple && matchesGenius;
  });

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-teal tracking-[0.3em]">
              THE LIBRARY
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-monument)] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              PROMPT
              <br />
              <span className="text-slate">REPOSITORY</span>
            </h1>
            <p className="mt-6 text-slate max-w-2xl text-lg">
              Genius Extractions™ and strategic prompts built from 500 million
              words of Jay Abraham's thinking. Each one designed to shift how
              you see your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 7 Principles Section */}
      <section className="py-12 px-6 border-y border-white/5 bg-gradient-to-b from-teal/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-teal" />
              <span className="text-xs font-mono text-teal tracking-[0.3em]">
                THE SEVEN ORGANIZING PRINCIPLES
              </span>
            </div>
            <p className="text-slate">
              Deep-dive into each principle with dedicated prompts, stories, and frameworks.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.slice(0, 4).map((principle, index) => (
              <motion.div
                key={principle.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={`/library/${principle.slug}`}
                  className="oracle-card p-5 rounded-xl block group hover:border-teal/30 transition-colors h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full border border-teal/30 bg-teal/5 flex items-center justify-center font-mono text-sm text-teal">
                      {principle.number}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                  <h3 className="font-medium text-paper mb-2 group-hover:text-teal transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-slate line-clamp-2">
                    {principle.corePrinciple}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {principles.slice(4).map((principle, index) => (
              <motion.div
                key={principle.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 4) }}
              >
                <Link
                  href={`/library/${principle.slug}`}
                  className="oracle-card p-5 rounded-xl block group hover:border-teal/30 transition-colors h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full border border-teal/30 bg-teal/5 flex items-center justify-center font-mono text-sm text-teal">
                      {principle.number}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                  <h3 className="font-medium text-paper mb-2 group-hover:text-teal transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-slate line-clamp-2">
                    {principle.corePrinciple}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters section */}
      <section className="sticky top-16 z-40 border-y border-white/5 bg-void/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded text-paper placeholder:text-slate/50 focus:outline-none focus:border-teal/50 font-mono text-sm"
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-4 h-4 text-slate flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-teal/20 text-teal border border-teal/30"
                      : "text-slate border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Genius Extraction toggle */}
            <button
              onClick={() => setShowGeniusOnly(!showGeniusOnly)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider rounded whitespace-nowrap transition-colors ${
                showGeniusOnly
                  ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30"
                  : "text-slate border border-white/10 hover:border-white/20"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              GENIUS ONLY
            </button>
          </div>

          {/* Principle filter */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-mono text-slate/50 flex-shrink-0">
              PRINCIPLE:
            </span>
            {principleFilters.map((principle) => (
              <button
                key={principle}
                onClick={() => setSelectedPrinciple(principle)}
                className={`px-2.5 py-1 text-[10px] font-mono tracking-wider rounded whitespace-nowrap transition-colors ${
                  selectedPrinciple === principle
                    ? "bg-white/10 text-paper"
                    : "text-slate/60 hover:text-slate"
                }`}
              >
                {principle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-6 text-sm font-mono text-slate">
            <span className="text-teal">{filteredPrompts.length}</span>{" "}
            {filteredPrompts.length === 1 ? "prompt" : "prompts"} found
          </div>

          <PromptGrid>
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                title={prompt.title}
                category={prompt.category}
                principle={prompt.principle}
                prompt={prompt.prompt}
                description={prompt.description}
                tags={prompt.tags}
                isGeniusExtraction={prompt.isGeniusExtraction}
                jayiUrl={prompt.jayiUrl}
              />
            ))}
          </PromptGrid>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate">No prompts match your filters.</div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("ALL");
                  setSelectedPrinciple("ALL PRINCIPLES");
                  setShowGeniusOnly(false);
                }}
                className="mt-4 text-teal text-sm font-mono hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
