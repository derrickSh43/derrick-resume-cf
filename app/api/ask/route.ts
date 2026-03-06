import { answerQuestion, validateQuestion } from "@/lib/ask";
import { checkRateLimit, getCached, setCached } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 5;

function clientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local-session";
}

export async function POST(request: NextRequest) {
  const key = clientKey(request);
  const limit = checkRateLimit(key);
  if (!limit.ok) {
    return NextResponse.json({ error: limit.message }, { status: limit.status });
  }

  let payload: { question?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const question = payload.question ?? "";
  const validationError = validateQuestion(question);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const cacheKey = question.trim().toLowerCase();
  const cached = getCached(cacheKey);
  if (cached) {
    return NextResponse.json(cached);
  }

  const response = await Promise.race([
    Promise.resolve(answerQuestion(question)),
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 3000))
  ]).catch(() => null);

  if (!response) {
    return NextResponse.json({ error: "The grounded assistant timed out. Please try again." }, { status: 504 });
  }

  setCached(cacheKey, response);
  return NextResponse.json(response);
}
