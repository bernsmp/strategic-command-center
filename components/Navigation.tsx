"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
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
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md border-b border-white/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center group-hover:border-teal/50 transition-colors">
              <span className="font-[family-name:var(--font-monument)] text-sm">
                B$
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-mono text-xs text-slate tracking-wider">
                STRATEGIC
              </div>
              <div className="font-medium text-sm tracking-wide">
                COMMAND CENTER
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
            <button className="action-terminal">
              <span className="w-2 h-2 rounded-full bg-teal" />
              JAY-I
            </button>
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
        className="md:hidden absolute top-16 left-0 right-0 bg-void/95 backdrop-blur-lg border-b border-white/5"
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
              <div className="text-paper font-medium">{link.label}</div>
              <div className="text-xs text-slate">{link.description}</div>
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <button className="action-terminal w-full justify-center">
              <span className="w-2 h-2 rounded-full bg-teal" />
              ACCESS JAY-I
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
