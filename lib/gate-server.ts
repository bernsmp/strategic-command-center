import "server-only";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export async function postGateWebhook(
  url: string,
  record: Record<string, unknown>,
): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`webhook returned ${response.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function appendGateRecord(
  filename: string,
  record: Record<string, unknown>,
): Promise<void> {
  const directory = path.join(process.cwd(), ".data");
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, filename),
    `${JSON.stringify(record)}\n`,
    "utf8",
  );
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
