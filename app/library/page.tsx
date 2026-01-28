"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, ChevronRight, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { principles } from "@/lib/principles";

// Typewriter effect component
function TypewriterText({ text, delay = 0, speed = 30 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="text-white/60 animate-pulse">▊</span>}
    </span>
  );
}

// Scan line component for principle cards
function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
        boxShadow: "0 0 10px rgba(255,255,255,0.3)",
      }}
      initial={{ top: "0%", opacity: 0 }}
      animate={{
        top: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  );
}

// Principle Module Card - the core navigation
function PrincipleModule({ principle, index }: { principle: typeof principles[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
    >
      <Link
        href={`/library/${principle.slug}`}
        className="block relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main card */}
        <div className="relative border border-white/10 bg-black p-6 transition-all duration-300 group-hover:border-white/30 overflow-hidden">
          {/* Corner accents - 1px precision lines */}
          <div className="absolute top-0 left-0 w-4 h-px bg-white/40" />
          <div className="absolute top-0 left-0 w-px h-4 bg-white/40" />
          <div className="absolute top-0 right-0 w-4 h-px bg-white/40" />
          <div className="absolute top-0 right-0 w-px h-4 bg-white/40" />
          <div className="absolute bottom-0 left-0 w-4 h-px bg-white/40" />
          <div className="absolute bottom-0 left-0 w-px h-4 bg-white/40" />
          <div className="absolute bottom-0 right-0 w-4 h-px bg-white/40" />
          <div className="absolute bottom-0 right-0 w-px h-4 bg-white/40" />

          {/* Scan effect on hover */}
          {isHovered && <ScanLine />}

          {/* Soft glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Module number - large, architectural */}
          <div className="flex items-start justify-between mb-4">
            <div className="relative">
              <span className="font-mono text-5xl font-light text-white/20 leading-none">
                {String(principle.number).padStart(2, '0')}
              </span>
              {/* Glow effect on number */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  textShadow: isHovered
                    ? "0 0 30px rgba(255,255,255,0.3)"
                    : "none",
                }}
              />
            </div>
            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
          </div>

          {/* Module title */}
          <h3 className="font-mono text-sm tracking-[0.2em] text-white/90 uppercase mb-2 group-hover:text-white transition-colors">
            {principle.title}
          </h3>

          {/* 1px separator */}
          <div className="w-8 h-px bg-white/20 mb-3 group-hover:w-full group-hover:bg-white/30 transition-all duration-500" />

          {/* Core principle preview */}
          <p className="text-xs text-white/50 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
            {principle.corePrinciple}
          </p>

          {/* Status indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
            <span className="text-[10px] font-mono text-white/30 tracking-wider group-hover:text-white/50 transition-colors">
              {principle.stories.length > 0 ? "ACTIVE" : "LOADING"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Prompt card with Shadow Architect aesthetic
function PromptModule({
  title,
  principle,
  description,
  prompt,
  isGeniusExtraction,
  index
}: {
  title: string;
  principle: string;
  description: string;
  prompt: string;
  isGeniusExtraction?: boolean;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      className="relative border border-white/10 bg-black group hover:border-white/20 transition-colors"
    >
      {/* Genius Extraction indicator */}
      {isGeniusExtraction && (
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      )}

      {/* Header */}
      <div className="p-5 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Principle tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                {principle}
              </span>
              {isGeniusExtraction && (
                <span className="text-[10px] font-mono text-white/60 tracking-wider border border-white/20 px-1.5 py-0.5">
                  GENIUS EXTRACTION™
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="font-mono text-sm text-white/90 tracking-wide group-hover:text-white transition-colors">
              {title}
            </h4>

            {/* Description */}
            <p className="mt-2 text-xs text-white/40 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4 text-white/30" />
          </motion.div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 p-5">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-3 h-3 text-white/40" />
                <span className="text-[10px] font-mono text-white/40 tracking-wider">
                  PROMPT TRANSMISSION
                </span>
              </div>

              {/* Prompt content */}
              <div className="bg-white/5 border border-white/10 p-4 font-mono text-xs text-white/70 leading-relaxed whitespace-pre-wrap">
                {prompt}
              </div>

              {/* Copy button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="mt-4 flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    COPIED TO CLIPBOARD
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    COPY PROMPT
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Sample prompts data
const prompts = [
  {
    title: "Hidden Asset Discovery Audit",
    principle: "PERCEPTUAL ASYMMETRY",
    isGeniusExtraction: true,
    prompt: `Analyze my business through Jay Abraham's "Hidden Asset" lens. I'll describe my business, and you'll identify at least 5 overlooked assets I'm not leveraging.

For each hidden asset, tell me:
1. What it is and why it qualifies as an asset
2. The current "leak" - how value is being lost
3. One specific monetization strategy with a 90-day action plan
4. The potential revenue impact (conservative estimate)

My business: [DESCRIBE YOUR BUSINESS]`,
    description: "Uncover the assets hiding in plain sight. Based on Jay's methodology of finding value others miss.",
  },
  {
    title: "Three Ways Growth Calculator",
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
    description: "The compound math that turned this simple framework into $75B in client results.",
  },
  {
    title: "Partnership Preeminence Script",
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
    description: "The approach that turns cold outreach into warm welcomes. Lead with their success.",
  },
  {
    title: "Constraint Inversion Matrix",
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
    description: "The seventh principle: Learn to love what you've been trained to hate.",
  },
  {
    title: "Super-Synthesis Question Generator",
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
    description: "See patterns across 1,000+ industries. Find answers where no one else is looking.",
  },
  {
    title: "Irreplaceability Audit",
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
    description: "Move from commodity to category of one. Create the moat that can't be crossed.",
  },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrinciple, setSelectedPrinciple] = useState("ALL");

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrinciple =
      selectedPrinciple === "ALL" || prompt.principle === selectedPrinciple;
    return matchesSearch && matchesPrinciple;
  });

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* System status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <span className="text-xs font-mono text-white/50 tracking-[0.3em]">
              STRATEGIC OPERATING SYSTEM v1.0
            </span>
          </motion.div>

          {/* Main title with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
          >
            <TypewriterText text="THE LIBRARY" delay={300} speed={50} />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/40 max-w-2xl text-lg leading-relaxed"
          >
            Access the cognitive architecture extracted from{" "}
            <span className="text-white/70">500 million words</span> of Jay Abraham's thinking.
            Each module represents a distinct strategic capability.
          </motion.p>

          {/* 1px separator line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 h-px bg-gradient-to-r from-white/20 via-white/40 to-transparent origin-left"
          />
        </div>
      </section>

      {/* The 7 Principles - Main Modules */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs font-mono text-white/40 tracking-[0.3em]">
                CORE MODULES
              </span>
            </div>
            <h2 className="font-mono text-2xl text-white/90 tracking-wide">
              The Seven Organizing Principles
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Select a module to access its full strategic framework, case studies, and AI prompts.
            </p>
          </motion.div>

          {/* Principles grid - architectural layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.slice(0, 4).map((principle, index) => (
              <PrincipleModule key={principle.slug} principle={principle} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {principles.slice(4).map((principle, index) => (
              <PrincipleModule key={principle.slug} principle={principle} index={index + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Prompt Repository */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs font-mono text-white/40 tracking-[0.3em]">
                PROMPT ARCHIVE
              </span>
            </div>
            <h2 className="font-mono text-2xl text-white/90 tracking-wide">
              Strategic Transmissions
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Genius Extractions™ and tactical prompts. Each one designed to shift perception.
            </p>
          </motion.div>

          {/* Search and filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search transmissions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 font-mono text-sm transition-colors"
              />
            </div>

            {/* Principle filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {["ALL", ...principles.map(p => p.title.toUpperCase())].slice(0, 5).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedPrinciple(filter === "ALL" ? "ALL" : principles.find(p => p.title.toUpperCase() === filter)?.title.toUpperCase().replace(/ /g, " ") || filter)}
                  className={`px-3 py-2 text-[10px] font-mono tracking-wider whitespace-nowrap transition-all ${
                    (selectedPrinciple === "ALL" && filter === "ALL") ||
                    selectedPrinciple === filter
                      ? "text-white border border-white/30 bg-white/5"
                      : "text-white/40 border border-white/10 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 text-xs font-mono text-white/30">
            <span className="text-white/60">{filteredPrompts.length}</span> transmissions available
          </div>

          {/* Prompts list */}
          <div className="space-y-3">
            {filteredPrompts.map((prompt, index) => (
              <PromptModule
                key={prompt.title}
                {...prompt}
                index={index}
              />
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-20 border border-white/10">
              <div className="text-white/40 font-mono text-sm">No transmissions match your query.</div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPrinciple("ALL");
                }}
                className="mt-4 text-white/60 text-xs font-mono hover:text-white transition-colors"
              >
                [ CLEAR FILTERS ]
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </main>
  );
}
