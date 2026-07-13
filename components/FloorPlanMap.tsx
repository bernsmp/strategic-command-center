"use client";

// The floor plan made literal: the top-down map loop (hero3) with a label
// on each room. The camera in the clip is static, so labels are positioned
// overlays — and therefore links. Room-to-chapter assignment is a draft
// (hub-first, then clockwise); re-map freely once Michelle and Mike weigh in.

import Link from "next/link";
import { principles } from "@/lib/principles";

// Percent positions of each room in the 1276x720 frame, keyed by chapter number.
const ROOM_POSITIONS: Record<number, { x: number; y: number }> = {
  1: { x: 47.8, y: 45.1 }, // center octagon with the compass-rose floor: the hub
  2: { x: 22.7, y: 36.8 }, // left hall with the shelf rows
  3: { x: 42.7, y: 16.7 }, // top round chamber
  4: { x: 58.4, y: 16.7 }, // top-right octagon
  5: { x: 74.5, y: 45.1 }, // right spiral amphitheater
  6: { x: 58.4, y: 70.8 }, // lower-right diamond room
  7: { x: 28.6, y: 72.2 }, // lower-left square room
};

export default function FloorPlanMap() {
  return (
    <div className="relative border border-white/10 overflow-hidden group">
      {/* The living map */}
      <video
        src="/videos/hero/hero3.mp4"
        poster="/videos/hero/hero3-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="w-full block"
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-px bg-white/40" />
      <div className="absolute top-0 left-0 w-px h-4 bg-white/40" />
      <div className="absolute bottom-0 right-0 w-4 h-px bg-white/40" />
      <div className="absolute bottom-0 right-0 w-px h-4 bg-white/40" />

      {/* Room labels: positioned over the static camera frame, each a door */}
      {principles.map((p) => {
        const pos = ROOM_POSITIONS[p.number];
        if (!pos) return null;
        return (
          <Link
            key={p.slug}
            href={`/library/${p.slug}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 no-underline"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_rgba(201,162,39,0.8)] group-hover:animate-pulse" />
            <span className="hidden sm:flex flex-col items-center px-2.5 py-1.5 bg-black/70 backdrop-blur-sm border border-white/15 hover:border-[#C9A227]/60 transition-colors">
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/50">
                ROOM {String(p.number).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-white/90 uppercase whitespace-nowrap">
                {p.coach.name.replace(/^The /, "")}
              </span>
            </span>
          </Link>
        );
      })}

      {/* You are here */}
      <div className="absolute left-1/2 bottom-[4%] -translate-x-1/2 flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/60">
          YOU ARE HERE
        </span>
      </div>
    </div>
  );
}
