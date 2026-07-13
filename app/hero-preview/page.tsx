"use client";

// Internal review page: three candidate hero videos for the Portal / floor plan
// (Compass-HQ-style "alive world" loops). Unlinked from nav on purpose.
// Delete this route once a direction is picked.

import Navigation from "@/components/Navigation";

const candidates = [
  {
    file: "/videos/hero/hero1.mp4",
    poster: "/videos/hero/hero1-poster.jpg",
    name: "01 · THE CUTAWAY",
    note: "Dollhouse cross-section of the Mind, rooms lit from within, figures walking. Closest to the Compass HQ hero Michelle loved.",
  },
  {
    file: "/videos/hero/hero2.mp4",
    poster: "/videos/hero/hero2-poster.jpg",
    name: "02 · THE HALL",
    note: "Eye-level view down the hall of seven doorways, figures walking toward the light. Matches the threshold and floor plan language.",
  },
  {
    file: "/videos/hero/hero3.mp4",
    poster: "/videos/hero/hero3-poster.jpg",
    name: "03 · THE MAP",
    note: "Top-down constellation of the seven rooms, lights moving along the corridors. Michelle's amusement-park 'you are here' map in motion.",
  },
];

export default function HeroPreviewPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-mono text-white/40 tracking-[0.3em]">
              INTERNAL REVIEW · NOT LINKED FROM NAV
            </span>
          </div>
          <h1 className="font-mono text-3xl text-white/90 tracking-wide mb-2">
            Hero Candidates
          </h1>
          <p className="text-sm text-white/40 mb-12 max-w-2xl">
            Three looping world-heroes for the Portal or the floor plan. All black and gold,
            no text baked in, figures for life. Pick one, or none.
          </p>

          <div className="space-y-12">
            {candidates.map((c) => (
              <div key={c.file} className="border border-white/10">
                <div className="p-4 border-b border-white/10 flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm text-white/90 tracking-[0.15em]">
                    {c.name}
                  </span>
                  <span className="text-xs text-white/40 text-right max-w-lg">{c.note}</span>
                </div>
                <video
                  src={c.file}
                  poster={c.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full block"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
