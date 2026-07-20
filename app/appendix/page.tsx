"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { principles } from "@/lib/principles";

// The Appendix: every named idea in one quiet place. Written for the reader
// who hits an unfamiliar word in a room and wants a one-line answer, not a
// lecture. Michelle's glossary idea from the 2026-07-13 call, made a page.

const TOOL_TERMS: { term: string; def: string }[] = [
  {
    term: "Prompt",
    def: "A block of written instructions you paste into an AI tool. Each room gives you one. You never have to write or edit it, just copy and paste.",
  },
  {
    term: "Claude / ChatGPT",
    def: "The two most common AI assistants. Free accounts work for every coach in this place. If you have never used one, ChatGPT at chat.openai.com is the fastest start.",
  },
  {
    term: "Jay-I",
    def: "The official Jay Abraham AI platform. Every coach also runs there if you have access, but it is never required.",
  },
  {
    term: "Coach",
    def: "What a prompt becomes once you paste it in. Each chapter has one coach that trains that chapter's way of seeing, using your real business as the material.",
  },
  {
    term: "Genius Extraction™",
    def: "A prompt distilled from Jay's own documented thinking, not generic AI advice. The badge marks the ones built directly from his methods.",
  },
  {
    term: "Ticket Check",
    def: "The one-time email gate on the prompts. Your book is your ticket; the email is how your experience gets personalized.",
  },
  {
    term: "Session export",
    def: "At the end of a working session, every coach hands you a written summary you can download and keep. You leave each room with something in your hands.",
  },
];

const JAY_TERMS: { term: string; def: string }[] = [
  {
    term: "Hidden assets",
    def: "Value your business already owns but never noticed: relationships, data, skills, byproducts. Room 01's whole discipline is seeing them.",
  },
  {
    term: "Preeminence",
    def: "Becoming the only real choice in your market by serving clients better than anyone else would dare. The spine of Room 02.",
  },
  {
    term: "The emissary move",
    def: "Borrowing a proven solution from an unrelated industry and installing it in yours, where it looks like genius. Room 03.",
  },
  {
    term: "Leverage",
    def: "Effort that keeps paying after you stop pushing. Room 04 trains you to spot where one action multiplies.",
  },
  {
    term: "The backend",
    def: "Everything a customer could buy from you after the first sale. Room 05 argues it is worth more than the front door.",
  },
  {
    term: "Risk reversal",
    def: "Structuring an offer so the seller carries the risk instead of the buyer, which removes the reason to say no. Room 06.",
  },
  {
    term: "Constraint inversion",
    def: "Treating your biggest limitation as your unfair advantage in disguise. Room 07.",
  },
  {
    term: "The Last Door",
    def: "The sealed door at the end of the hall. It opens after the seven rooms; behind it is what comes after the book.",
  },
];

function TermList({ items }: { items: { term: string; def: string }[] }) {
  return (
    <dl className="space-y-6">
      {items.map((t) => (
        <div key={t.term} className="border-l border-[#C9A227]/40 pl-5">
          <dt className="font-mono text-sm text-white tracking-[0.1em] uppercase mb-1">
            {t.term}
          </dt>
          <dd className="text-sm text-white/65 leading-relaxed max-w-2xl">{t.def}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AppendixPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A227]/50" />
              <span className="text-xs font-mono text-[#C9A227]/80 tracking-[0.3em]">
                THE APPENDIX
              </span>
            </div>
            <h1 className="font-mono text-3xl sm:text-4xl text-white font-light tracking-tight mb-4">
              Every named idea, one quiet page.
            </h1>
            <p className="text-white/65 max-w-2xl leading-relaxed">
              Hit an unfamiliar word in a room? It&apos;s defined here in one or
              two lines. Nothing on this page is required reading.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-lg text-[#C9A227]/90 tracking-[0.15em] mb-8">
            THE TOOLS
          </h2>
          <TermList items={TOOL_TERMS} />
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-lg text-[#C9A227]/90 tracking-[0.15em] mb-8">
            JAY&apos;S IDEAS
          </h2>
          <TermList items={JAY_TERMS} />
        </div>
      </section>

      <section className="py-10 px-6 border-t border-white/10 mt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-lg text-[#C9A227]/90 tracking-[0.15em] mb-8">
            THE SEVEN ROOMS AT A GLANCE
          </h2>
          <div className="space-y-5">
            {principles.map((p) => (
              <Link
                key={p.slug}
                href={`/library/${p.slug}`}
                className="block border border-white/10 hover:border-[#C9A227]/40 transition-colors p-5"
              >
                <p className="font-mono text-[10px] text-[#C9A227]/80 tracking-[0.25em] mb-1">
                  ROOM {String(p.number).padStart(2, "0")} · {p.coach.name.toUpperCase()}
                </p>
                <p className="font-mono text-sm text-white tracking-wide mb-1">{p.title}</p>
                <p className="text-sm text-white/65 leading-relaxed max-w-2xl">
                  {p.corePrinciple}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <Link
          href="/library"
          className="inline-block px-6 py-3 border border-[#C9A227]/40 text-[#C9A227]/90 font-mono text-xs tracking-[0.2em] hover:bg-[#C9A227] hover:text-black transition-colors"
        >
          BACK TO THE FLOOR PLAN
        </Link>
      </section>
    </main>
  );
}
