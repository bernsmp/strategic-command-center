"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal, Zap, Brain, Clock } from "lucide-react";
import { Book3D } from "./Book3D";
import Link from "next/link";
import Image from "next/image";

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
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="text-white/60 animate-pulse">▊</span>}
    </span>
  );
}

// Realization card component - Shadow Architect style
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
      className="relative border border-white/10 bg-black p-6 group hover:border-white/20 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Corner accents - 1px precision */}
      <div className="absolute top-0 left-0 w-3 h-px bg-white/40" />
      <div className="absolute top-0 left-0 w-px h-3 bg-white/40" />
      <div className="absolute top-0 right-0 w-3 h-px bg-white/40" />
      <div className="absolute top-0 right-0 w-px h-3 bg-white/40" />
      <div className="absolute bottom-0 left-0 w-3 h-px bg-white/40" />
      <div className="absolute bottom-0 left-0 w-px h-3 bg-white/40" />
      <div className="absolute bottom-0 right-0 w-3 h-px bg-white/40" />
      <div className="absolute bottom-0 right-0 w-px h-3 bg-white/40" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
            <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
          </div>
        </div>
        <div className="flex-1">
          <div className="font-mono text-[10px] text-white/50 mb-2 tracking-[0.2em]">
            REALIZATION #{number}
          </div>
          <h3 className="text-sm font-mono text-white/90 mb-2 leading-tight tracking-wide">
            {title}
          </h3>
          <p className="text-xs text-white/40 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [isScanning, setIsScanning] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)",
        }}
      />

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

                {/* Decorative elements - 1px lines */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-white/5 -z-10" />
                <div className="absolute -top-6 -left-6 w-28 h-28 border border-white/10 -z-10" />

                {/* Ambient glow behind book - white instead of teal */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] -z-10 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 60%)",
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
                  <div className="text-2xl font-mono font-light text-white">
                    <AnimatedNumber value={500} suffix="M" />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono tracking-wider">
                    WORDS ANALYZED
                  </div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-mono font-light text-white">
                    $<AnimatedNumber value={75} suffix="B" />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono tracking-wider">
                    CLIENT PROFITS
                  </div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-mono font-light text-white">
                    <AnimatedNumber value={7} />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono tracking-wider">
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
            {/* Logo and system status */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/images/decoding-genius-logo.png"
                  alt="Decoding Genius"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <span className="text-[10px] font-mono text-white/50 tracking-[0.2em]">
                  SYSTEM ONLINE
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <h1 className="mb-6">
              <span className="block text-[10px] font-mono text-white/40 tracking-[0.3em] mb-4">
                INSIDE THE BILLION DOLLAR MIND
              </span>
              <span className="block font-mono text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white">
                <TypewriterText text="DECODE" delay={600} />
                <br />
                <span className="text-white/30">STRATEGIC</span>
                <br />
                GENIUS
              </span>
            </h1>

            {/* 1px separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-24 h-px bg-white/30 mb-6 origin-left"
            />

            {/* Subheading */}
            <motion.p
              className="text-white/50 max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Install Jay Abraham's strategic operating system. Access{" "}
              <span className="text-white/80">Genius Extractions™</span>—insights
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
                className="px-6 py-3 bg-white text-black font-mono text-sm tracking-wide hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                ACCESS THE LIBRARY
              </Link>
              <Link
                href="/library"
                className="px-6 py-3 border border-white/20 text-white/70 font-mono text-sm tracking-wide hover:border-white/40 hover:text-white transition-colors"
              >
                EXPLORE PROMPTS
              </Link>
            </motion.div>

            {/* Terminal preview */}
            <motion.div
              className="border border-white/10 p-4 max-w-lg bg-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="ml-2 text-[10px] font-mono text-white/30 tracking-wider">
                  JAY-I.TERMINAL
                </span>
              </div>
              <div className="font-mono text-xs">
                <span className="text-white/40">$</span>{" "}
                <span className="text-white/50">
                  Loading strategic pattern recognition...
                </span>
                <br />
                <span className="text-white/40">$</span>{" "}
                <span className="text-white/70">
                  Ready to decode your business through Jay's lens
                  <span className="text-white/50 animate-pulse">▊</span>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em]">
                THE FOUNDATION
              </span>
              <div className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl tracking-wide text-white">
              THREE REALIZATIONS
            </h2>
            <p className="font-mono text-lg text-white/30 mt-1">
              THAT CHANGED EVERYTHING
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {realizations.map((r, i) => (
              <RealizationCard key={r.number} {...r} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
