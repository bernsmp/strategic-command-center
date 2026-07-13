import { NextRequest, NextResponse } from "next/server";
import { principles } from "@/lib/principles";

// Stable QR-code targets for the printed book: /ch/1 through /ch/7.
// The book prints these once; whatever the backend becomes, these URLs keep working.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> }
) {
  const { number } = await params;
  const chapter = principles.find((p) => p.number === Number(number));
  const target = chapter ? `/library/${chapter.slug}` : "/library";
  return NextResponse.redirect(new URL(target, request.url), 308);
}
