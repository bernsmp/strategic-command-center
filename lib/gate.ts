const TICKET_KEY = "bdm.ticket";

export const TICKET_UNLOCKED_EVENT = "bdm:ticket-unlocked";

type GateEventType = "unlock" | "copy" | "gate-open";

interface StoredTicket {
  email: string;
  ts: number;
}

export function hasTicket(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const value = window.localStorage.getItem(TICKET_KEY);
    if (!value) {
      return false;
    }

    const ticket = JSON.parse(value) as Partial<StoredTicket>;
    return typeof ticket.email === "string" && typeof ticket.ts === "number";
  } catch {
    return false;
  }
}

export function saveTicket(email: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const ticket: StoredTicket = {
      email,
      ts: Date.now(),
    };
    window.localStorage.setItem(TICKET_KEY, JSON.stringify(ticket));
  } catch (error) {
    console.error("[gate] could not save ticket locally", error);
  }

  window.dispatchEvent(new Event(TICKET_UNLOCKED_EVENT));
}

export function recordEvent(type: GateEventType, detail?: string): void {
  try {
    void fetch("/api/gate/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...(detail ? { detail } : {}) }),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Usage capture must never interrupt the reader.
  }
}
