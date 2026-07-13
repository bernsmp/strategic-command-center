"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import TicketCheck from "@/components/TicketCheck";
import {
  hasTicket,
  recordEvent,
  TICKET_UNLOCKED_EVENT,
} from "@/lib/gate";

export function useTicket() {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(hasTicket());
    setMounted(true);

    const handleUnlock = () => setUnlocked(true);
    window.addEventListener(TICKET_UNLOCKED_EVENT, handleUnlock);
    return () => window.removeEventListener(TICKET_UNLOCKED_EVENT, handleUnlock);
  }, []);

  return { mounted, unlocked };
}

interface TicketGateContextValue {
  locked: boolean;
  openTicketCheck: (where: string) => void;
}

const TicketGateContext = createContext<TicketGateContextValue | null>(null);

export function TicketGateProvider({ children }: { children: ReactNode }) {
  const { mounted, unlocked } = useTicket();
  const [ticketCheckOpen, setTicketCheckOpen] = useState(false);
  const locked = !mounted || !unlocked;

  const closeTicketCheck = useCallback(() => setTicketCheckOpen(false), []);
  const openTicketCheck = useCallback((where: string) => {
    recordEvent("gate-open", where);
    setTicketCheckOpen(true);
  }, []);

  const value = useMemo(
    () => ({ locked, openTicketCheck }),
    [locked, openTicketCheck],
  );

  return (
    <TicketGateContext.Provider value={value}>
      {children}
      <TicketCheck
        open={ticketCheckOpen}
        onClose={closeTicketCheck}
        onUnlock={closeTicketCheck}
      />
    </TicketGateContext.Provider>
  );
}

interface GatedPromptProps {
  children: ReactNode;
  where: string;
  className?: string;
  contentClassName?: string;
  lockedClassName?: string;
}

export default function GatedPrompt({
  children,
  where,
  className = "",
  contentClassName = "",
  lockedClassName = "",
}: GatedPromptProps) {
  const gate = useContext(TicketGateContext);

  if (!gate) {
    throw new Error("GatedPrompt must be rendered inside TicketGateProvider.");
  }

  const { locked, openTicketCheck } = gate;

  return (
    <>
      <div className={`relative ${className} ${locked ? lockedClassName : ""}`}>
        <div
          className={`${contentClassName} ${
            locked ? "blur-sm select-none pointer-events-none" : ""
          }`}
          aria-hidden={locked}
        >
          {children}
        </div>
        {locked ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center px-3 py-2">
            <button
              type="button"
              onClick={() => openTicketCheck(where)}
              className="relative border border-white/20 bg-black/90 px-5 py-3 text-center transition-colors hover:border-white/40"
            >
              <span className="absolute left-0 top-0 h-px w-3 bg-white/50" />
              <span className="absolute left-0 top-0 h-3 w-px bg-white/50" />
              <span className="absolute bottom-0 right-0 h-px w-3 bg-white/50" />
              <span className="absolute bottom-0 right-0 h-3 w-px bg-white/50" />
              <span className="block font-mono text-[10px] tracking-[0.25em] text-white/80">
                TICKET CHECK
              </span>
              <span className="mt-1 block text-xs text-white/40">
                The coach is behind glass. Show your ticket.
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
