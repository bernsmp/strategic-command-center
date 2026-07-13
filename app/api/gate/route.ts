import { NextRequest, NextResponse } from "next/server";
import {
  appendGateRecord,
  errorMessage,
  postGateWebhook,
} from "@/lib/gate-server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROOF_TYPES = new Set(["amazon-order", "deferred"]);

interface GatePayload {
  email?: unknown;
  proofType?: unknown;
  orderNumber?: unknown;
}

function invalid(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

export async function POST(request: NextRequest) {
  let payload: GatePayload;

  try {
    const rawPayload: unknown = await request.json();
    if (
      !rawPayload ||
      typeof rawPayload !== "object" ||
      Array.isArray(rawPayload)
    ) {
      return invalid("Invalid JSON payload.");
    }
    payload = rawPayload as GatePayload;
  } catch {
    return invalid("Invalid JSON payload.");
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const proofType =
    typeof payload.proofType === "string" ? payload.proofType : "";
  const orderNumber =
    typeof payload.orderNumber === "string" ? payload.orderNumber.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return invalid("A valid email is required.");
  }

  if (!PROOF_TYPES.has(proofType)) {
    return invalid("A valid proof type is required.");
  }

  if (proofType === "amazon-order" && !orderNumber) {
    return invalid("An Amazon order number is required.");
  }

  const record: Record<string, unknown> = {
    email,
    proofType,
    ...(proofType === "amazon-order" ? { orderNumber } : {}),
    ts: new Date().toISOString(),
    ua: request.headers.get("user-agent") ?? "",
  };

  const webhookUrl = process.env.GATE_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await postGateWebhook(webhookUrl, record);
      return NextResponse.json({ ok: true, stored: true });
    } catch (error) {
      console.error(`[gate] webhook failed: ${errorMessage(error)}`);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  try {
    await appendGateRecord("gate-submissions.jsonl", record);
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    console.error("[gate] capture backend not configured; submission not persisted");
    return NextResponse.json({ ok: true, stored: false });
  }
}
