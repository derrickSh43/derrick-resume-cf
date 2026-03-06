import { corpus } from "@/lib/site-data";

export type AskResponse = {
  answer: string;
  inference?: string;
  citations: Array<{
    source: string;
    snippet: string;
    topic: string;
  }>;
};

const MAX_INPUT_CHARS = 500;
const MAX_OUTPUT_CHARS = 900;
const BLOCKED_PATTERNS = [
  /ignore (all|previous|prior) instructions/i,
  /system prompt/i,
  /developer message/i,
  /hidden instructions/i,
  /reveal .*key/i,
  /browse the web/i,
  /pretend derrick/i,
  /make up/i,
  /invent/i
];

const stopWords = new Set([
  "a",
  "about",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "does",
  "for",
  "from",
  "has",
  "he",
  "how",
  "i",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "what",
  "which",
  "with"
]);

function tokenize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token && !stopWords.has(token));
}

export function validateQuestion(question: string) {
  const trimmed = question.trim();

  if (!trimmed) {
    return "Ask a question about Derrick's experience, projects, writing, or technical approach.";
  }

  if (trimmed.length > MAX_INPUT_CHARS) {
    return `Questions are capped at ${MAX_INPUT_CHARS} characters.`;
  }

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(trimmed)) {
      return "I can only answer from Derrick's approved source materials and can't help with prompt extraction, instruction bypass, or fabricated claims.";
    }
  }

  return null;
}

export function answerQuestion(question: string): AskResponse {
  const tokens = tokenize(question);

  const ranked = corpus
    .map((chunk) => {
      const haystack = `${chunk.topic} ${chunk.tags.join(" ")} ${chunk.summary} ${chunk.evidence}`.toLowerCase();
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { chunk, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  if (ranked.length === 0) {
    return {
      answer: "I don't have enough evidence in Derrick's approved source materials to answer that confidently.",
      citations: []
    };
  }

  const top = ranked.slice(0, 3).map(({ chunk }) => chunk);
  const answer = top.map((chunk) => chunk.summary).join(" ").slice(0, MAX_OUTPUT_CHARS);
  const inference =
    ranked.length > 1
      ? "Inference: this answer combines multiple approved excerpts rather than quoting a single statement."
      : undefined;

  return {
    answer,
    inference,
    citations: top.map((chunk) => ({
      source: chunk.source,
      snippet: chunk.evidence,
      topic: chunk.topic
    }))
  };
}
