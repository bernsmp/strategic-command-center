"use client";

// The Step Inside doorway: one continuous camera flight through the Billion
// Dollar Mind. Scroll drives the camera (architecture A: forward take, no cuts).
// Engine: public/world/scrub-engine.js (scroll-world skill, framework-agnostic).
// Rendered at both / (homepage — first thing visitors see) and /world (the
// shareable link + nav target). The book-cover Portal lives at /portal.

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    mountScrollWorld?: (container: HTMLElement, config: object) => void;
  }
}

const GOLD = "#C9A227";

const WORLD_CONFIG = {
  brand: { name: "INSIDE THE BILLION DOLLAR MIND", href: "/" },
  diveScroll: 1.4,
  connScroll: 0.9,
  crossfade: 0.08,
  hint: "scroll to step inside",
  nav: true,
  atmosphere: true,
  sections: [
    {
      id: "approach",
      label: "The Approach",
      still: "/videos/world/leg0-poster.jpg",
      clip: "/videos/world/leg0.mp4",
      clipMobile: "/videos/world/leg0-m.mp4",
      accent: GOLD,
      scroll: 1.5,
      linger: 0.35,
      eyebrow: "INSIDE THE BILLION DOLLAR MIND",
      title: "Step inside.",
      body: "Fifty years of strategic genius, decoded into a place you can walk.",
      tags: ["500M words", "Seven rooms"],
    },
    {
      id: "hall",
      label: "The Seven Rooms",
      still: "/videos/world/leg1-poster.jpg",
      clip: "/videos/world/leg1.mp4",
      clipMobile: "/videos/world/leg1-m.mp4",
      accent: GOLD,
      scroll: 1.4,
      linger: 0.3,
      eyebrow: "THE FLOOR PLAN",
      title: "One room per chapter.",
      body: "Each room trains a way of seeing that was running in Jay the whole time.",
      tags: ["Seven coaches", "One mind"],
    },
    {
      id: "room1",
      label: "Room 01",
      still: "/videos/world/leg2-poster.jpg",
      clip: "/videos/world/leg2.mp4",
      clipMobile: "/videos/world/leg2-m.mp4",
      accent: GOLD,
      scroll: 1.6,
      linger: 0.45,
      eyebrow: "ROOM 01 · PERCEPTUAL ASYMMETRY",
      title: "See what you walk past.",
      body: "The Hidden Asset Auditor finds the value proximity has hidden from you.",
      tags: ["The Hidden Asset Auditor"],
    },
    {
      id: "room3",
      label: "Room 03",
      still: "/videos/world/leg-r03-poster.jpg",
      clip: "/videos/world/leg-r03.mp4",
      clipMobile: "/videos/world/leg-r03-m.mp4",
      accent: GOLD,
      scroll: 1.6,
      linger: 0.45,
      eyebrow: "ROOM 03 · SUPER-SYNTHESIS",
      title: "Answers from other worlds.",
      body: "The Emissary from Other Worlds finds your solution in an industry you've never looked at.",
      tags: ["The Emissary from Other Worlds"],
    },
    {
      id: "room5",
      label: "Room 05",
      still: "/videos/world/leg3-poster.jpg",
      clip: "/videos/world/leg3.mp4",
      clipMobile: "/videos/world/leg3-m.mp4",
      accent: GOLD,
      scroll: 1.6,
      linger: 0.45,
      eyebrow: "ROOM 05 · VALUE MULTIPLICATION",
      title: "The engine behind the counter.",
      body: "The Backend Architect multiplies what every customer you already have is worth.",
      tags: ["The Backend Architect"],
    },
    {
      id: "room6",
      label: "Room 06",
      still: "/videos/world/leg-r06-poster.jpg",
      clip: "/videos/world/leg-r06.mp4",
      clipMobile: "/videos/world/leg-r06-m.mp4",
      accent: GOLD,
      scroll: 1.6,
      linger: 0.45,
      eyebrow: "ROOM 06 · GUARANTEED UPSIDE",
      title: "Take away the reason to say no.",
      body: "The Risk Reversal Engineer moves the risk off your buyer and watches the frozen start to move.",
      tags: ["The Risk Reversal Engineer"],
    },
    {
      id: "last-door",
      label: "The Last Door",
      still: "/videos/world/leg4-poster.jpg",
      clip: "/videos/world/leg4.mp4",
      clipMobile: "/videos/world/leg4-m.mp4",
      accent: GOLD,
      scroll: 1.8,
      linger: 0.5,
      eyebrow: "THE LAST DOOR",
      title: "Every room points here.",
      body: "What comes after the book. It opens when you have walked the rooms.",
      cta: {
        primary: { label: "ENTER THE SEVEN ROOMS", href: "/library" },
        secondary: { label: "BACK TO THE PORTAL", href: "/portal" },
      },
    },
  ],
  connectors: [] as (string | null)[],
};

export default function StepInside() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  const tryMount = () => {
    if (mountedRef.current) return;
    if (containerRef.current && window.mountScrollWorld) {
      mountedRef.current = true;
      window.mountScrollWorld(containerRef.current, WORLD_CONFIG);
    }
  };

  useEffect(() => {
    // Script may already be cached/loaded on client-side navigation.
    tryMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="/world/scrub-engine.js" strategy="afterInteractive" onLoad={tryMount} />
      {/* Dark-theme overrides: the engine hardcodes light-glass pills and
          ink-filled buttons that assume a light page. Scoped at .sw-root
          specificity so they beat the injected engine styles. */}
      <style>{`
        .sw-root .sw-nav{background:color-mix(in srgb,#000 62%,transparent);border-color:rgba(255,255,255,0.12);}
        .sw-root .sw-nav__item.is-active{color:#000;}
        .sw-root .sw-btn--primary{background:var(--sw-accent);color:#000;}
        .sw-root .sw-topcta{background:var(--sw-accent);color:#000;}
        .sw-root .sw-route__label{background:color-mix(in srgb,#000 72%,transparent);color:var(--sw-ink);border-color:rgba(255,255,255,0.14);}
        .sw-root .sw-copy__tags li{background:color-mix(in srgb,var(--sw-accent) 16%,#000);color:color-mix(in srgb,var(--sw-accent) 78%,#fff);border-color:color-mix(in srgb,var(--sw-accent) 40%,transparent);}
        .sw-root .sw-brand__mark{background:url('/images/decoding-genius-logo.png') center/contain no-repeat;border-radius:0;box-shadow:none;width:30px;height:34px;}
        .sw-root .sw-brand__name{font-family:var(--font-jetbrains),monospace;font-size:.78rem;letter-spacing:.18em;}
        .sw-root .sw-btn{font-family:var(--font-jetbrains),monospace;letter-spacing:.1em;font-size:.85rem;}
        .sw-root .sw-copy__eyebrow{font-family:var(--font-jetbrains),monospace;letter-spacing:.25em;}
      `}</style>
      <div
        ref={containerRef}
        style={
          {
            "--sw-bg": "#000000",
            "--sw-ink": "#F5F5F5",
            "--sw-ink-soft": "rgba(245,245,245,0.55)",
            "--sw-accent": GOLD,
            "--sw-font-display": "var(--font-jetbrains), monospace",
            "--sw-font-body": "var(--font-inter), sans-serif",
          } as React.CSSProperties
        }
      />
    </>
  );
}
