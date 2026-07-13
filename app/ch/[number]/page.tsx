"use client";

// The threshold. QR codes printed in the book land here (/ch/1 .. /ch/7).
// Crossing from the printed page into the world is the product's most
// important state change, so it gets an entrance, not a redirect.

import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { principles } from "@/lib/principles";

const ENTER_DELAY_MS = 3200;

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
        boxShadow: "0 0 14px rgba(255,255,255,0.4)",
      }}
      initial={{ top: "0%", opacity: 0 }}
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.2, ease: "easeInOut" }}
    />
  );
}

export default function ThresholdPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = use(params);
  const router = useRouter();
  const principle = principles.find((p) => p.number === Number(number));
  const target = principle ? `/library/${principle.slug}` : "/library";
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (!principle) {
      // Unknown chapter number: straight to the floor plan.
      router.replace("/library");
      return;
    }
    const timer = setTimeout(() => {
      setEntering(true);
      router.replace(target);
    }, ENTER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [router, target, principle]);

  if (!principle) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      <ScanLine />

      {/* Faint radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: entering ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[10px] font-mono text-white/40 tracking-[0.4em] mb-8"
        >
          THRESHOLD
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-white/60 font-mono text-sm tracking-wider mb-6"
        >
          You&apos;ve crossed over from Chapter {principle.number}.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="font-mono text-3xl sm:text-4xl font-light tracking-tight text-white mb-4"
        >
          ROOM {String(principle.number).padStart(2, "0")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-white/50 text-sm leading-relaxed mb-2"
        >
          {principle.roomTeaser}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="text-[10px] font-mono text-white/30 tracking-[0.2em] mb-10"
        >
          {principle.coach.name.toUpperCase()} IS WAITING
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <Link
            href={target}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 font-mono text-xs tracking-[0.2em] hover:border-white/50 hover:text-white transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.4)] animate-pulse" />
            ENTER THE ROOM
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
