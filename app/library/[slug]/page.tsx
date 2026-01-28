"use client";

import { motion } from "framer-motion";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Quote,
  Eye,
  Lightbulb,
  Target,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { getPrincipleBySlug, principles } from "@/lib/principles";

// Action Terminal for copying prompts
function ActionTerminal({
  platform,
  label,
  prompt,
}: {
  platform: string;
  label: string;
  prompt: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`action-terminal group ${
        copied ? "!border-teal !text-teal !bg-teal/10" : ""
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>COPIED!</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-current opacity-50" />
          <span>{label}</span>
          <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </>
      )}
    </button>
  );
}

// Story Card Component
function StoryCard({
  story,
  index,
}: {
  story: { title: string; hook: string; story: string; lesson: string };
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="oracle-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-teal" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-monument)] text-xl mb-1">
              {story.title}
            </h3>
            <p className="text-teal text-sm font-medium">{story.hook}</p>
          </div>
        </div>

        <div
          className={`text-slate leading-relaxed ${
            isExpanded ? "" : "line-clamp-4"
          }`}
        >
          {story.story.split("\n\n").map((para, i) => (
            <p key={i} className="mb-4">
              {para}
            </p>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-teal text-sm font-mono tracking-wider hover:underline mt-2"
        >
          {isExpanded ? "SHOW LESS" : "READ FULL STORY"}
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-teal/5 border-l-2 border-teal rounded-r"
          >
            <p className="text-sm font-mono text-teal tracking-wider mb-2">
              THE LESSON
            </p>
            <p className="text-paper leading-relaxed">{story.lesson}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function PrinciplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const principle = getPrincipleBySlug(slug);

  if (!principle) {
    notFound();
  }

  // Find prev/next principles
  const currentIndex = principles.findIndex((p) => p.slug === slug);
  const prevPrinciple = currentIndex > 0 ? principles[currentIndex - 1] : null;
  const nextPrinciple =
    currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(13,115,119,0.1) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link
              href="/library"
              className="inline-flex items-center gap-2 text-slate hover:text-paper transition-colors text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Library
            </Link>
          </motion.div>

          {/* Principle number badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-12 rounded-full border border-teal/30 bg-teal/5 flex items-center justify-center font-[family-name:var(--font-monument)] text-xl text-teal">
              {principle.number}
            </span>
            <span className="text-xs font-mono text-teal tracking-[0.3em]">
              PRINCIPLE {principle.number} OF 7
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs font-mono text-slate tracking-[0.2em] mb-3">
              {principle.subtitle}
            </p>
            <h1 className="font-[family-name:var(--font-monument)] text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
              {principle.title.toUpperCase()}
            </h1>
          </motion.div>

          {/* Jay Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative pl-6 border-l-2 border-teal/50 my-10"
          >
            <Quote className="absolute -left-3 -top-2 w-6 h-6 text-teal/30" />
            <p className="text-2xl sm:text-3xl text-paper font-light italic leading-relaxed">
              "{principle.jayQuote}"
            </p>
            <cite className="block mt-4 text-sm font-mono text-slate not-italic tracking-wider">
              — JAY ABRAHAM
            </cite>
          </motion.blockquote>

          {/* Core Principle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="oracle-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-teal" />
              <span className="text-xs font-mono text-teal tracking-wider">
                THE CORE PRINCIPLE
              </span>
            </div>
            <p className="text-xl text-paper leading-relaxed">
              {principle.corePrinciple}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Jay Sees Section */}
      {principle.whatJaySees && principle.whatJaySees !== "Coming soon..." && (
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Eye className="w-5 h-5 text-teal" />
                <h2 className="font-[family-name:var(--font-monument)] text-2xl">
                  WHAT JAY SEES
                </h2>
              </div>
              <div className="text-slate leading-relaxed space-y-6">
                {principle.whatJaySees.split("\n\n").map((para, i) => (
                  <p key={i} className="text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Insight */}
      {principle.keyInsight && principle.keyInsight !== "Coming soon..." && (
        <section className="py-16 px-6 bg-teal/5 border-y border-teal/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono text-teal tracking-[0.3em] mb-6">
                THE KEY INSIGHT
              </p>
              <p className="text-2xl sm:text-3xl text-paper leading-relaxed font-light">
                {principle.keyInsight}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Stories Section */}
      {principle.stories.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-mono text-teal tracking-[0.3em] mb-3">
                JAY IN ACTION
              </p>
              <h2 className="font-[family-name:var(--font-monument)] text-3xl">
                REAL STORIES, REAL RESULTS
              </h2>
            </motion.div>

            <div className="space-y-8">
              {principle.stories.map((story, index) => (
                <StoryCard key={story.title} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Three Checks Section */}
      {principle.threeChecks.length > 0 && (
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-mono text-teal tracking-[0.3em] mb-3">
                THINKING LIKE JAY
              </p>
              <h2 className="font-[family-name:var(--font-monument)] text-3xl">
                THREE PLACES JAY ALWAYS CHECKS
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {principle.threeChecks.map((check, index) => (
                <motion.div
                  key={check.area}
                  className="oracle-card p-6 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center font-mono text-sm text-teal flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-medium text-paper text-lg mb-2">
                        {check.area}
                      </h3>
                      <p className="text-slate leading-relaxed">
                        {check.question}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Prompt Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-teal/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono text-teal tracking-[0.3em] mb-3">
              PUT IT TO WORK
            </p>
            <h2 className="font-[family-name:var(--font-monument)] text-3xl sm:text-4xl">
              THE GENIUS EXTRACTION™
            </h2>
            <p className="mt-4 text-slate max-w-2xl mx-auto">
              {principle.prompt.description}
            </p>
          </motion.div>

          <motion.div
            className="oracle-card rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Prompt Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {principle.prompt.isGeniusExtraction && (
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-yellow-500 border border-yellow-500/30 rounded bg-yellow-500/5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    GENIUS EXTRACTION™
                  </span>
                )}
                <h3 className="font-medium text-paper">
                  {principle.prompt.title}
                </h3>
              </div>
            </div>

            {/* Prompt Content */}
            <div className="p-6 bg-white/[0.02]">
              <pre className="font-mono text-sm text-slate/90 whitespace-pre-wrap leading-relaxed">
                {principle.prompt.content}
              </pre>
            </div>

            {/* Action Terminals */}
            <div className="p-6 border-t border-white/5 bg-white/[0.015]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-slate tracking-wider">
                  ACTION TERMINALS
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionTerminal
                  platform="jayi"
                  label="JAY-I"
                  prompt={principle.prompt.content}
                />
                <ActionTerminal
                  platform="claude"
                  label="CLAUDE"
                  prompt={principle.prompt.content}
                />
                <ActionTerminal
                  platform="chatgpt"
                  label="CHATGPT"
                  prompt={principle.prompt.content}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation between principles */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {prevPrinciple ? (
              <Link
                href={`/library/${prevPrinciple.slug}`}
                className="group flex items-center gap-3 text-slate hover:text-paper transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-right">
                  <p className="text-xs font-mono text-slate/50">
                    PREVIOUS PRINCIPLE
                  </p>
                  <p className="font-medium">{prevPrinciple.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPrinciple ? (
              <Link
                href={`/library/${nextPrinciple.slug}`}
                className="group flex items-center gap-3 text-slate hover:text-paper transition-colors"
              >
                <div>
                  <p className="text-xs font-mono text-slate/50">
                    NEXT PRINCIPLE
                  </p>
                  <p className="font-medium">{nextPrinciple.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-monument)] text-2xl mb-4">
            READY TO SEE YOUR BUSINESS DIFFERENTLY?
          </h2>
          <p className="text-slate mb-8">
            Explore all seven principles and discover the opportunities hiding
            in plain sight.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/library"
              className="px-6 py-3 bg-paper text-void font-medium rounded hover:bg-paper/90 transition-colors flex items-center gap-2"
            >
              Explore All Principles
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/studio"
              className="px-6 py-3 border border-white/20 text-paper font-medium rounded hover:border-teal/50 hover:bg-teal/5 transition-colors"
            >
              Try Guided Workflows
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
