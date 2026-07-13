"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { recordEvent, saveTicket } from "@/lib/gate";

type ProofType = "amazon-order" | "deferred";

interface TicketCheckProps {
  open: boolean;
  onClose: () => void;
  onUnlock?: () => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function CornerAccents() {
  return (
    <>
      <div className="absolute left-0 top-0 h-px w-6 bg-white/40" />
      <div className="absolute left-0 top-0 h-6 w-px bg-white/40" />
      <div className="absolute right-0 top-0 h-px w-6 bg-white/40" />
      <div className="absolute right-0 top-0 h-6 w-px bg-white/40" />
      <div className="absolute bottom-0 left-0 h-px w-6 bg-white/40" />
      <div className="absolute bottom-0 left-0 h-6 w-px bg-white/40" />
      <div className="absolute bottom-0 right-0 h-px w-6 bg-white/40" />
      <div className="absolute bottom-0 right-0 h-6 w-px bg-white/40" />
    </>
  );
}

export default function TicketCheck({ open, onClose, onUnlock }: TicketCheckProps) {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [proofType, setProofType] = useState<ProofType>("deferred");
  const [orderNumber, setOrderNumber] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const requestController = useRef<AbortController | null>(null);

  const closeWithoutUnlock = useCallback(() => {
    requestController.current?.abort();
    requestController.current = null;
    setSubmitting(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    setError("");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeWithoutUnlock();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeWithoutUnlock, open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();
    const normalizedOrderNumber = orderNumber.trim();

    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (proofType === "amazon-order" && !normalizedOrderNumber) {
      setError("Enter your Amazon order number.");
      return;
    }

    setSubmitting(true);
    setError("");
    const controller = new AbortController();
    requestController.current = controller;

    try {
      const response = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          proofType,
          ...(proofType === "amazon-order"
            ? { orderNumber: normalizedOrderNumber }
            : {}),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`gate returned ${response.status}`);
      }

      saveTicket(normalizedEmail);
      recordEvent("unlock");
      onUnlock?.();
      onClose();
    } catch {
      if (!controller.signal.aborted) {
        setError("Could not record your ticket. Try again.");
      }
    } finally {
      if (requestController.current === controller) {
        requestController.current = null;
      }
      setSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeWithoutUnlock();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ticket-check-heading"
            className="relative w-full max-w-xl border border-white/10 bg-black p-6 sm:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <CornerAccents />

            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-white/40">
              TICKET CHECK
            </p>
            <h2
              id="ticket-check-heading"
              className="mb-4 font-mono text-2xl tracking-wide text-white sm:text-3xl"
            >
              The book is your ticket
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              Every coach in this place came out of the book you&apos;re holding. Show your ticket once and every room on this device stays open.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label
                htmlFor="ticket-email"
                className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/40"
              >
                YOUR EMAIL
              </label>
              <input
                id="ticket-email"
                type="email"
                required
                autoFocus
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mb-6 w-full border border-white/10 bg-transparent px-4 py-3 font-mono text-sm text-white transition-colors placeholder:text-white/30 focus:border-white/30 focus:outline-none"
              />

              <fieldset>
                <legend className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white/40">
                  YOUR TICKET
                </legend>
                <div className="space-y-3">
                  <label
                    className={`block cursor-pointer border p-4 transition-colors ${
                      proofType === "amazon-order"
                        ? "border-white/40 bg-white/5"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="proof-type"
                        value="amazon-order"
                        checked={proofType === "amazon-order"}
                        onChange={() => setProofType("amazon-order")}
                        className="sr-only"
                      />
                      <span className="flex h-3 w-3 items-center justify-center border border-white/40">
                        {proofType === "amazon-order" ? (
                          <span className="h-1.5 w-1.5 bg-white" />
                        ) : null}
                      </span>
                      <span className="font-mono text-xs tracking-wider text-white/70">
                        AMAZON ORDER NUMBER
                      </span>
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="113-1234567-1234567"
                      value={orderNumber}
                      onFocus={() => setProofType("amazon-order")}
                      onChange={(event) => setOrderNumber(event.target.value)}
                      className="mt-3 w-full border border-white/10 bg-transparent px-3 py-2 font-mono text-xs text-white transition-colors placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                    />
                  </label>

                  <label
                    className={`block cursor-pointer border p-4 transition-colors ${
                      proofType === "deferred"
                        ? "border-white/40 bg-white/5"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="proof-type"
                        value="deferred"
                        checked={proofType === "deferred"}
                        onChange={() => setProofType("deferred")}
                        className="sr-only"
                      />
                      <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center border border-white/40">
                        {proofType === "deferred" ? (
                          <span className="h-1.5 w-1.5 bg-white" />
                        ) : null}
                      </span>
                      <span>
                        <span className="block font-mono text-xs tracking-wider text-white/70">
                          I&apos;LL SHOW MY RECEIPT LATER
                        </span>
                        <span className="mt-1 block text-xs text-white/40">
                          We&apos;ll take your word tonight. Keep the receipt.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </fieldset>

              {error ? (
                <p role="alert" className="mt-4 font-mono text-xs text-white/60">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full bg-white px-5 py-3 font-mono text-xs tracking-[0.2em] text-black transition-colors hover:bg-white/90 disabled:cursor-wait disabled:opacity-60"
              >
                OPEN THE ROOMS
              </button>
              <p className="mt-4 text-center font-mono text-[10px] text-white/30">
                Free with the book. Your email is how the rooms remember you.
              </p>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
