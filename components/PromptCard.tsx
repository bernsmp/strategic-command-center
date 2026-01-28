"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Copy, ExternalLink, Sparkles, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useState } from "react";

// Action Terminal icons for different AI platforms
const AILogos = {
  jayi: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  claude: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chatgpt: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

interface ActionTerminalProps {
  platform: "jayi" | "claude" | "chatgpt";
  label: string;
  url?: string;
  prompt: string;
}

function ActionTerminal({ platform, label, url, prompt }: ActionTerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (url) {
      window.open(url, "_blank");
    } else {
      try {
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const Logo = AILogos[platform];

  return (
    <motion.button
      type="button"
      className={`action-terminal group relative ${copied ? "!border-teal !text-teal !bg-teal/10" : ""}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-teal" />
          <span>COPIED!</span>
        </>
      ) : (
        <>
          <Logo />
          <span>{label}</span>
          {url ? (
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          ) : (
            <Copy className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          )}
        </>
      )}
    </motion.button>
  );
}

interface PromptCardProps {
  title: string;
  category: string;
  principle?: string;
  prompt: string;
  description?: string;
  tags?: string[];
  isGeniusExtraction?: boolean;
  jayiUrl?: string;
}

export default function PromptCard({
  title,
  category,
  principle,
  prompt,
  description,
  tags = [],
  isGeniusExtraction = false,
  jayiUrl,
}: PromptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="oracle-card rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      layout
    >
      {/* Header */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Category & Principle badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider text-teal border border-teal/30 rounded bg-teal/5">
                {category}
              </span>
              {principle && (
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider text-slate border border-white/10 rounded">
                  {principle}
                </span>
              )}
              {isGeniusExtraction && (
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider text-yellow-500 border border-yellow-500/30 rounded bg-yellow-500/5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  GENIUS EXTRACTION™
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-medium text-paper text-lg leading-tight">
              {title}
            </h3>

            {/* Description */}
            {description && (
              <p className="mt-2 text-sm text-slate line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Prompt preview / full */}
      <div className="p-5 bg-white/[0.01]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono text-slate tracking-wider">
            PROMPT
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono text-teal tracking-wider border border-teal/30 rounded hover:bg-teal/10 transition-colors"
          >
            {isExpanded ? (
              <>
                COLLAPSE
                <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                EXPAND
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`font-mono text-sm text-slate/90 leading-relaxed whitespace-pre-wrap ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {prompt}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-slate/60 tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Terminals */}
      <div className="p-5 border-t border-white/5 bg-white/[0.015]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-mono text-slate tracking-wider">
            ACTION TERMINALS
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <ActionTerminal
            platform="jayi"
            label="JAY-I"
            url={jayiUrl}
            prompt={prompt}
          />
          <ActionTerminal
            platform="claude"
            label="CLAUDE"
            prompt={prompt}
          />
          <ActionTerminal
            platform="chatgpt"
            label="CHATGPT"
            prompt={prompt}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Grid wrapper for prompt cards
export function PromptGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
