import { after, NextRequest, NextResponse } from "next/server";
import {
  appendGateRecord,
  errorMessage,
  postGateWebhook,
} from "@/lib/gate-server";

const EVENT_TYPES = new Set(["unlock", "copy", "gate-open"]);

interface EventPayload {
  type?: unknown;
  detail?: unknown;
}

export async function POST(request: NextRequest) {
  let payload: EventPayload;

  try {
    const rawPayload: unknown = await request.json();
    if (
      !rawPayload ||
      typeof rawPayload !== "object" ||
      Array.isArray(rawPayload)
    ) {
      console.error("[gate:event] invalid payload");
      return NextResponse.json({ ok: false });
    }
    payload = rawPayload as EventPayload;
  } catch (error) {
    console.error(`[gate:event] invalid JSON: ${errorMessage(error)}`);
    return NextResponse.json({ ok: false });
  }

  if (typeof payload.type !== "string" || !EVENT_TYPES.has(payload.type)) {
    console.error("[gate:event] invalid event type");
    return NextResponse.json({ ok: false });
  }

  if (payload.detail !== undefined && typeof payload.detail !== "string") {
    console.error("[gate:event] invalid event detail");
    return NextResponse.json({ ok: false });
  }

  const record: Record<string, unknown> = {
    kind: "event",
    type: payload.type,
    ...(payload.detail ? { detail: payload.detail } : {}),
    ts: new Date().toISOString(),
    ua: request.headers.get("user-agent") ?? "",
  };

  after(async () => {
    try {
      const webhookUrl = process.env.GATE_WEBHOOK_URL;
      if (webhookUrl) {
        await postGateWebhook(webhookUrl, record);
      } else {
        await appendGateRecord("gate-events.jsonl", record);
      }
    } catch (error) {
      console.error(`[gate:event] capture failed: ${errorMessage(error)}`);
    }
  });

  return NextResponse.json({ ok: true });
}
