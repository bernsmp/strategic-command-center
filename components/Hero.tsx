"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal, Zap, Brain, Clock } from "lucide-react";
import { Book3D } from "./Book3D";
import Link from "next/link";

// Animated counter for stats
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      delay: 0.5,
    });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// Typing effect for text reveal
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="text-teal animate-pulse">▊</span>}
    </span>
  );
}

// Realization card component
function RealizationCard({
  number,
  title,
  description,
  icon: Icon,
  delay,
}: {
  number: number;
  title: string;
  description: string;
  icon: typeof Terminal;
  delay: number;
}) {
  return (
    <motion.div
      className="oracle-card p-6 rounded-lg relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-2 right-2 w-8 h-[1px] bg-teal opacity-50" />
        <div className="absolute top-2 right-2 w-[1px] h-8 bg-teal opacity-50" />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center group-hover:border-teal/50 transition-colors">
            <Icon className="w-5 h-5 text-slate group-hover:text-teal transition-colors" />
          </div>
        </div>
        <div className="flex-1">
          <div className="font-mono text-xs text-teal mb-2 tracking-widest">
            REALIZATION #{number}
          </div>
          <h3 className="text-lg font-medium text-paper mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-slate leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [isScanning, setIsScanning] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start scanning effect after a short delay
    const timer = setTimeout(() => setIsScanning(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const realizations = [
    {
      number: 1,
      title: "Learning to Think Better is the Ultimate Leverage",
      description:
        "It's not about one strategy. It's about upgrading your operating system for recognizing and creating value.",
      icon: Brain,
    },
    {
      number: 2,
      title: "AI Can Reveal the Unconscious Architecture of Genius",
      description:
        "Extract patterns the genius himself never articulated—the cognitive sequences running automatically.",
      icon: Zap,
    },
    {
      number: 3,
      title: "We're Running Out of Time to Capture This",
      description:
        "When genius is gone, the thinking architecture dies with it. Unless we make it immortal—and accessible.",
      icon: Clock,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-teal/5 via-transparent to-transparent opacity-50" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Book cover with scan effect */}
          <motion.div
            ref={bookRef}
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center">
            <div className="relative">
              {/* 3D Book */}
              <Book3D
                coverImage="/images/book-cover.png"
                size="xl"
                showScanEffect={isScanning}
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-white/5 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-28 h-28 border border-teal/20 rounded-lg -z-10" />

              {/* Ambient glow behind book */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] -z-10 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(13,115,119,0.15) 0%, transparent 60%)",
                  filter: "blur(40px)",
                }}
              />
            </div>

            {/* Stats bar */}
            <motion.div
              className="mt-10 flex justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-monument)] text-paper">
                  <AnimatedNumber value={500} suffix="M" />
                </div>
                <div className="text-xs text-slate font-mono tracking-wider">
                  WORDS ANALYZED
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-monument)] text-paper">
                  $<AnimatedNumber value={75} suffix="B" />
                </div>
                <div className="text-xs text-slate font-mono tracking-wider">
                  CLIENT PROFITS
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-monument)] text-paper">
                  <AnimatedNumber value={7} />
                </div>
                <div className="text-xs text-slate font-mono tracking-wider">
                  PRINCIPLES
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* System status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-mono text-teal tracking-wider">
                SYSTEM ONLINE
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="mb-6">
              <span className="block text-sm font-mono text-slate tracking-[0.3em] mb-3">
                STRATEGIC COMMAND CENTER
              </span>
              <span className="block font-[family-name:var(--font-monument)] text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
                <TypewriterText text="DECODE" delay={600} />
                <br />
                <span className="text-slate">STRATEGIC</span>
                <br />
                GENIUS
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              className="text-lg text-slate max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Install Jay Abraham's strategic operating system. Access{" "}
              <span className="text-paper">Genius Extractions™</span>—insights
              impossible to find anywhere else, extracted from 500 million words
              and 50 years of breakthrough thinking.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Link
                href="/library"
                className="px-6 py-3 bg-paper text-void font-medium rounded hover:bg-paper/90 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                Access The Library
              </Link>
              <Link
                href="/library"
                className="px-6 py-3 border border-white/20 text-paper font-medium rounded hover:border-teal/50 hover:bg-teal/5 transition-colors"
              >
                Explore Prompts
              </Link>
            </motion.div>

            {/* Terminal preview */}
            <motion.div
              className="oracle-card p-4 rounded-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs font-mono text-slate">
                  jay-i.terminal
                </span>
              </div>
              <div className="font-mono text-sm">
                <span className="text-teal">$</span>{" "}
                <span className="text-slate">
                  Loading strategic pattern recognition...
                </span>
                <br />
                <span className="text-teal">$</span>{" "}
                <span className="text-paper">
                  Ready to decode your business through Jay's lens
                  <span className="text-teal animate-pulse">▊</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Three Realizations Section */}
        <div className="mt-32">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-teal tracking-[0.3em]">
              THE FOUNDATION
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-monument)] text-3xl sm:text-4xl tracking-tight">
              THREE REALIZATIONS
              <br />
              <span className="text-slate">THAT CHANGED EVERYTHING</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {realizations.map((r, i) => (
              <RealizationCard key={r.number} {...r} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
