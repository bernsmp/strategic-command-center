"use client";

// The floor plan made literal: the top-down map loop (hero3) with a callout
// label for each room. Labels sit OUT in the black void with thin leader
// lines back to their rooms, so the artwork stays unobstructed. The camera
// in the clip is static, so the overlays hold position — and are links.
// Room-to-chapter assignment is a draft (hub = 01, then clockwise); re-map
// freely once Michelle and Mike weigh in.

import Link from "next/link";
import { principles } from "@/lib/principles";

const GOLD = "#C9A227";

// Percent positions in the 1276x720 frame: where the room is (dot) and
// where its label floats (out in empty black space).
const ROOMS: Record<number, { room: { x: number; y: number }; label: { x: number; y: number } }> = {
  1: { room: { x: 47.8, y: 45.1 }, label: { x: 47.8, y: 61 } },
  2: { room: { x: 22.7, y: 36.8 }, label: { x: 9, y: 30 } },
  3: { room: { x: 42.7, y: 16.7 }, label: { x: 33, y: 6 } },
  4: { room: { x: 58.4, y: 16.7 }, label: { x: 70, y: 6 } },
  5: { room: { x: 74.5, y: 45.1 }, label: { x: 88.5, y: 38 } },
  6: { room: { x: 58.4, y: 70.8 }, label: { x: 71, y: 86 } },
  7: { room: { x: 28.6, y: 72.2 }, label: { x: 14, y: 86 } },
};

export default function FloorPlanMap() {
  return (
    <div className="relative border border-white/10 overflow-hidden">
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
      <div className="absolute top-0 left-0 w-4 h-px bg-[#C9A227]/60" />
      <div className="absolute top-0 left-0 w-px h-4 bg-[#C9A227]/60" />
      <div className="absolute bottom-0 right-0 w-4 h-px bg-[#C9A227]/60" />
      <div className="absolute bottom-0 right-0 w-px h-4 bg-[#C9A227]/60" />

      {/* Leader lines: room dot to label, drawn in percent space */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {principles.map((p) => {
          const r = ROOMS[p.number];
          if (!r) return null;
          return (
            <line
              key={p.slug}
              x1={r.room.x}
              y1={r.room.y}
              x2={r.label.x}
              y2={r.label.y}
              stroke={GOLD}
              strokeOpacity={0.35}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Room dots (always) + floating labels (sm and up), both are doors */}
      {principles.map((p) => {
        const r = ROOMS[p.number];
        if (!r) return null;
        return (
          <span key={p.slug}>
            <Link
              href={`/library/${p.slug}`}
              aria-label={`Room ${p.number}: ${p.coach.name}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 block w-3 h-3"
              style={{ left: `${r.room.x}%`, top: `${r.room.y}%` }}
            >
              <span className="block w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_rgba(201,162,39,0.8)] hover:scale-150 transition-transform" />
            </Link>
            <Link
              href={`/library/${p.slug}`}
              aria-label={`Room ${p.number}: ${p.coach.name}`}
              className="hidden sm:flex absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-black/60 backdrop-blur-[2px] border border-white/10 hover:border-[#C9A227]/60 transition-colors no-underline"
              style={{ left: `${r.label.x}%`, top: `${r.label.y}%` }}
            >
              <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.25em] text-white/80">
                ROOM {String(p.number).padStart(2, "0")}
              </span>
            </Link>
          </span>
        );
      })}

      {/* You are here */}
      <div className="absolute left-1/2 bottom-[3%] -translate-x-1/2 flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse shadow-[0_0_8px_rgba(201,162,39,0.9)]" />
        <span className="font-mono text-[9px] lg:text-[10px] tracking-[0.3em] text-[#C9A227]/80">
          YOU ARE HERE
        </span>
      </div>
    </div>
  );
}
