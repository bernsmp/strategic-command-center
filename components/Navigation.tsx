"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "The Portal", description: "Home" },
  { href: "/library", label: "The Library", description: "Prompt Repository" },
  { href: "/studio", label: "The Studio", description: "Workflows" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/decoding-genius-logo.png"
                alt="Decoding Genius"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-mono text-[10px] text-white/40 tracking-[0.2em]">
                INSIDE THE
              </div>
              <div className="font-mono text-sm text-white/90 tracking-wide">
                BILLION DOLLAR MIND
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate hover:text-paper transition-colors relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-hover"
                />
              </Link>
            ))}
          </div>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://ai.abraham.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white/70 text-xs font-mono tracking-wider hover:border-white/40 hover:text-white transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
              ACCESS JAY-I
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate hover:text-paper transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-white font-mono text-sm tracking-wide">{link.label}</div>
              <div className="text-xs text-white/40">{link.description}</div>
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="https://ai.abraham.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white/70 text-xs font-mono tracking-wider hover:border-white/40 hover:text-white transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
              ACCESS JAY-I
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
