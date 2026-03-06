import { checkRateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 5;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return `contact:${forwarded?.split(",")[0]?.trim() || "local-session"}`;
}

export async function POST(request: NextRequest) {
  const limit = checkRateLimit(clientKey(request));
  if (!limit.ok) {
    return NextResponse.json({ error: limit.message }, { status: limit.status });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const honeypot = String(payload.company ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ message: "Submission received." });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (message.length > 1200) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  console.info("Contact inquiry received", {
    name,
    email,
    messagePreview: message.slice(0, 200)
  });

  return NextResponse.json({
    message: "Inquiry accepted. Wire this endpoint to email or CRM delivery before production use."
  });
}
