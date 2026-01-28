"use client";

import { motion } from "framer-motion";
import { GraduationCap, Eye, Bot } from "lucide-react";

const levels = [
  {
    level: 1,
    title: "Learn to Think Like Jay",
    subtitle: "INSTALL THE OPERATING SYSTEM",
    description:
      "Develop the human pattern recognition that lets you see opportunities everywhere. Install the seven organizing principles that create exponential results. Train your mind to identify hidden assets, partnerships, and growth paths that others miss.",
    icon: GraduationCap,
    emphasis: "This is the foundation—you can't skip it.",
  },
  {
    level: 2,
    title: "Understand the Architecture",
    subtitle: "SEE THE INVISIBLE STRUCTURE",
    description:
      "Go deeper than the strategies to learn the unconscious patterns, the cognitive sequences, the trigger moments that generate breakthrough insights. See the invisible structure underneath Jay's genius—both the high-level organizing principles and the real-time activation patterns.",
    icon: Eye,
    emphasis: "The cognitive architecture that generates breakthroughs.",
  },
  {
    level: 3,
    title: "Amplify with Your AI Co-Pilot",
    subtitle: "24/7 STRATEGIC THINKING PARTNER",
    description:
      "After compiling and analyzing 500 million words of Jay's thinking, we built something unprecedented: an AI trained exclusively on Jay's life work. It's designed to be your 24/7 strategic thinking partner—helping you apply what you learn to your specific business challenges.",
    icon: Bot,
    emphasis: "Implement breakthrough thinking in real-time.",
  },
];

export default function TransformationLevels() {
  return (
    <section className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/5 to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-teal tracking-[0.3em]">
            THE TRANSFORMATION
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-monument)] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            THREE LEVELS
            <br />
            <span className="text-slate">OF STRATEGIC EVOLUTION</span>
          </h2>
          <p className="mt-6 text-slate max-w-2xl mx-auto">
            We're not replacing human genius. We're democratizing access to it
            and giving you tools to amplify your own thinking to levels
            previously reserved for people who could afford $250K in consulting.
          </p>
        </motion.div>

        {/* Levels grid */}
        <div className="space-y-8">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              className="oracle-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-[200px_1fr] items-stretch">
                {/* Level indicator */}
                <div className="p-8 lg:p-10 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full border border-teal/30 flex items-center justify-center mb-4 bg-teal/5">
                    <item.icon className="w-7 h-7 text-teal" />
                  </div>
                  <div className="font-[family-name:var(--font-monument)] text-4xl text-paper">
                    {item.level}
                  </div>
                  <div className="font-mono text-[10px] text-slate tracking-[0.2em] mt-1">
                    LEVEL
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="font-mono text-xs text-teal tracking-[0.2em] mb-2">
                    {item.subtitle}
                  </div>
                  <h3 className="font-[family-name:var(--font-monument)] text-2xl lg:text-3xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm text-paper/80 italic border-l-2 border-teal/30 pl-4">
                    {item.emphasis}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-teal text-paper font-medium rounded hover:bg-teal-dark transition-colors">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 border border-white/20 text-paper font-medium rounded hover:border-teal/50 transition-colors">
              Explore Genius Extractions™
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
