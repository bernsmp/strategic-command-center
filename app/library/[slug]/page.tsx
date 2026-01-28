"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { use, useRef, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  Lightbulb,
  Target,
  Copy,
  Check,
  ArrowRight,
  Terminal,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { getPrincipleBySlug, principles } from "@/lib/principles";

// Chapter-specific images mapping
const chapterImages: Record<string, { network?: string; spark?: string }> = {
  "perceptual-asymmetry": {
    network: "/images/ch1-network.png",
    spark: "/images/ch1-spark.png",
  },
};

// Electricity spark particle component
function ElectricitySpark({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${50 + (Math.random() - 0.5) * 60}%`,
        top: `${50 + (Math.random() - 0.5) * 60}%`,
        boxShadow: "0 0 6px 2px rgba(255,255,255,0.8), 0 0 12px 4px rgba(255,255,255,0.4)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1.5, 1, 0],
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2 + Math.random() * 3,
      }}
    />
  );
}

// Animated spark image with electricity effects
function AnimatedSparkImage({ src, className = "" }: { src: string; className?: string }) {
  const [sparks, setSparks] = useState<number[]>([]);

  useEffect(() => {
    // Generate random spark positions
    setSparks(Array.from({ length: 8 }, (_, i) => i));
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Core pulsing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* The spark image itself with subtle pulse */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          filter: [
            "brightness(1) drop-shadow(0 0 10px rgba(255,255,255,0.2))",
            "brightness(1.2) drop-shadow(0 0 30px rgba(255,255,255,0.5))",
            "brightness(1) drop-shadow(0 0 10px rgba(255,255,255,0.2))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src={src} alt="" fill className="object-contain" />
      </motion.div>

      {/* Electricity sparks emanating outward */}
      {sparks.map((_, i) => (
        <ElectricitySpark key={i} delay={i * 0.3} />
      ))}

      {/* Energy ring pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50%",
        }}
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{
          scale: [0.5, 1.5],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </div>
  );
}

// Animated network image with pulsing nodes and connection lines
function AnimatedNetworkImage({ src, opacity = 0.2 }: { src: string; opacity?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ y }}
    >
      {/* Base image with animated brightness */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          filter: [
            "brightness(1)",
            "brightness(1.3)",
            "brightness(1)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          style={{ opacity }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Scattered pulsing nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            boxShadow: "0 0 10px 3px rgba(255,255,255,0.3)",
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Traveling light along invisible connection lines */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{
          boxShadow: "0 0 8px 4px rgba(255,255,255,0.6)",
        }}
        animate={{
          x: ["10%", "90%"],
          y: ["30%", "70%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{
          boxShadow: "0 0 8px 4px rgba(255,255,255,0.6)",
        }}
        animate={{
          x: ["80%", "20%"],
          y: ["20%", "60%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

// Action Terminal for copying prompts - Shadow Architect style
function ActionTerminal({
  label,
  prompt,
}: {
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
      className={`flex items-center gap-2 px-4 py-2 border text-xs font-mono tracking-wider transition-all ${
        copied
          ? "border-white/40 text-white bg-white/10"
          : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          <span>COPIED</span>
        </>
      ) : (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
          <span>{label}</span>
          <Copy className="w-3 h-3 opacity-50" />
        </>
      )}
    </button>
  );
}

// Story Card Component - Shadow Architect style
function StoryCard({
  story,
  index,
  sparkImage,
}: {
  story: { title: string; hook: string; story: string; lesson: string };
  index: number;
  sparkImage?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative border border-white/10 bg-black overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-px bg-white/40" />
      <div className="absolute top-0 left-0 w-px h-6 bg-white/40" />
      <div className="absolute top-0 right-0 w-6 h-px bg-white/40" />
      <div className="absolute top-0 right-0 w-px h-6 bg-white/40" />
      <div className="absolute bottom-0 left-0 w-6 h-px bg-white/40" />
      <div className="absolute bottom-0 left-0 w-px h-6 bg-white/40" />
      <div className="absolute bottom-0 right-0 w-6 h-px bg-white/40" />
      <div className="absolute bottom-0 right-0 w-px h-6 bg-white/40" />

      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
            <Lightbulb className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <div>
            <h3 className="font-mono text-lg text-white tracking-wide mb-1">
              {story.title}
            </h3>
            <p className="text-white/50 text-sm font-mono">{story.hook}</p>
          </div>
        </div>

        <div
          className={`text-white/60 leading-relaxed ${
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
          className="text-white/70 text-xs font-mono tracking-wider hover:text-white transition-colors mt-2 flex items-center gap-2"
        >
          [ {isExpanded ? "COLLAPSE" : "READ FULL STORY"} ]
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 relative"
          >
            {/* Animated spark image for the lesson reveal */}
            {sparkImage && index === 0 && (
              <AnimatedSparkImage
                src={sparkImage}
                className="absolute -right-4 -top-4 w-32 h-32 opacity-50"
              />
            )}

            <div className="border-l border-white/30 pl-6">
              <p className="text-[10px] font-mono text-white/50 tracking-[0.2em] mb-3">
                THE LESSON
              </p>
              <p className="text-white/80 leading-relaxed">{story.lesson}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Parallax background image component
function ParallaxBackground({ src, opacity = 0.15 }: { src: string; opacity?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ y }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        style={{ opacity }}
      />
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
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

  // Get chapter-specific images
  const images = chapterImages[slug] || {};

  // Find prev/next principles
  const currentIndex = principles.findIndex((p) => p.slug === slug);
  const prevPrinciple = currentIndex > 0 ? principles[currentIndex - 1] : null;
  const nextPrinciple =
    currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section with Network Background */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated network background image */}
        {images.network && (
          <AnimatedNetworkImage src={images.network} opacity={0.2} />
        )}

        {/* Subtle radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-5xl mx-auto w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <Link
              href="/library"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-xs font-mono tracking-wider"
            >
              <ChevronLeft className="w-4 h-4" />
              BACK TO LIBRARY
            </Link>
          </motion.div>

          {/* Principle number - large architectural */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-end gap-6">
              <span className="font-mono text-[120px] sm:text-[180px] font-light text-white/10 leading-none">
                {String(principle.number).padStart(2, '0')}
              </span>
              <div className="pb-6">
                <span className="text-[10px] font-mono text-white/40 tracking-[0.3em]">
                  PRINCIPLE {principle.number} OF 7
                </span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[10px] font-mono text-white/40 tracking-[0.2em] mb-4">
              {principle.subtitle}
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-light mb-8">
              {principle.title.toUpperCase()}
            </h1>
          </motion.div>

          {/* 1px separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-px bg-white/30 mb-10 origin-left"
          />

          {/* Jay Quote - terminal style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="border border-white/10 p-8 relative">
              {/* Terminal header */}
              <div className="absolute -top-3 left-6 bg-black px-3">
                <span className="text-[10px] font-mono text-white/40 tracking-wider">
                  JAY ABRAHAM
                </span>
              </div>

              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed italic">
                "{principle.jayQuote}"
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Principle - Highlighted Section */}
      <section className="py-20 px-6 border-y border-white/10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-white/50" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 tracking-[0.2em] mb-4">
                THE CORE PRINCIPLE
              </p>
              <p className="text-2xl sm:text-3xl text-white font-light leading-relaxed">
                {principle.corePrinciple}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Jay Sees Section */}
      {principle.whatJaySees && principle.whatJaySees !== "Coming soon..." && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-white/30" />
                <Eye className="w-5 h-5 text-white/40" />
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">
                  DECODING THE GENIUS
                </span>
              </div>

              <div className="text-white/60 leading-relaxed space-y-6 max-w-3xl">
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

      {/* Key Insight - The Spark of Genius Section */}
      {principle.keyInsight && principle.keyInsight !== "Coming soon..." && (
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Animated spark image as background */}
          {images.spark && (
            <AnimatedSparkImage
              src={images.spark}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-40"
            />
          )}

          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <span className="text-[10px] font-mono text-white/50 tracking-[0.3em]">
                  THE KEY INSIGHT
                </span>
              </div>

              <p className="text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed font-light">
                {principle.keyInsight}
              </p>

              {/* Glow line */}
              <div className="mt-10 h-px bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Stories Section */}
      {principle.stories.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">
                  JAY IN ACTION
                </span>
              </div>
              <h2 className="font-mono text-2xl sm:text-3xl text-white tracking-wide">
                REAL STORIES, REAL RESULTS
              </h2>
            </motion.div>

            <div className="space-y-6">
              {principle.stories.map((story, index) => (
                <StoryCard
                  key={story.title}
                  story={story}
                  index={index}
                  sparkImage={images.spark}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Three Checks Section */}
      {principle.threeChecks.length > 0 && (
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">
                  THINKING LIKE JAY
                </span>
              </div>
              <h2 className="font-mono text-2xl sm:text-3xl text-white tracking-wide">
                THREE PLACES JAY ALWAYS CHECKS
              </h2>
            </motion.div>

            <div className="grid gap-4">
              {principle.threeChecks.map((check, index) => (
                <motion.div
                  key={check.area}
                  className="border border-white/10 p-6 relative group hover:border-white/20 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-px bg-white/40" />
                  <div className="absolute top-0 left-0 w-px h-3 bg-white/40" />

                  <div className="flex items-start gap-6">
                    <span className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-lg text-white/40 flex-shrink-0 group-hover:border-white/40 group-hover:text-white/60 transition-all">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-mono text-white text-lg tracking-wide mb-2">
                        {check.area}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
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

      {/* The Prompt Section - Genius Extraction */}
      <section className="py-24 px-6 relative">
        {/* Subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em]">
                PUT IT TO WORK
              </span>
              <div className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl text-white tracking-wide mb-4">
              THE GENIUS EXTRACTION™
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {principle.prompt.description}
            </p>
          </motion.div>

          <motion.div
            className="border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Prompt Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Terminal className="w-4 h-4 text-white/40" />
                {principle.prompt.isGeniusExtraction && (
                  <span className="px-3 py-1 text-[10px] font-mono tracking-wider text-white/70 border border-white/20 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    GENIUS EXTRACTION™
                  </span>
                )}
                <span className="font-mono text-sm text-white/80">
                  {principle.prompt.title}
                </span>
              </div>
            </div>

            {/* Prompt Content */}
            <div className="p-6 bg-white/[0.02]">
              <pre className="font-mono text-sm text-white/60 whitespace-pre-wrap leading-relaxed">
                {principle.prompt.content}
              </pre>
            </div>

            {/* Action Terminals */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-white/40 tracking-wider">
                  COPY TO:
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionTerminal
                  label="JAY-I"
                  prompt={principle.prompt.content}
                />
                <ActionTerminal
                  label="CLAUDE"
                  prompt={principle.prompt.content}
                />
                <ActionTerminal
                  label="CHATGPT"
                  prompt={principle.prompt.content}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation between principles */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {prevPrinciple ? (
              <Link
                href={`/library/${prevPrinciple.slug}`}
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-right">
                  <p className="text-[10px] font-mono text-white/30 tracking-wider">
                    PREVIOUS
                  </p>
                  <p className="font-mono text-sm">{prevPrinciple.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPrinciple ? (
              <Link
                href={`/library/${nextPrinciple.slug}`}
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-wider">
                    NEXT
                  </p>
                  <p className="font-mono text-sm">{nextPrinciple.title}</p>
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
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-mono text-xl sm:text-2xl text-white tracking-wide mb-4">
            READY TO SEE YOUR BUSINESS DIFFERENTLY?
          </h2>
          <p className="text-white/50 mb-10">
            Explore all seven principles and discover the opportunities hiding
            in plain sight.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/library"
              className="px-6 py-3 bg-white text-black font-mono text-sm tracking-wide hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              EXPLORE ALL PRINCIPLES
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://ai.abraham.com"
              target="_blank"
              className="px-6 py-3 border border-white/20 text-white/70 font-mono text-sm tracking-wide hover:border-white/40 hover:text-white transition-colors"
            >
              ACCESS JAY-I
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
