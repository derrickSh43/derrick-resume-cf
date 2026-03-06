"use client";

import { FormEvent, useState } from "react";

type AskPayload = {
  answer: string;
  inference?: string;
  citations: Array<{
    source: string;
    snippet: string;
    topic: string;
  }>;
};

const prompts = [
  "How does Derrick approach model security?",
  "What has he built related to AI governance?",
  "Which projects show Kubernetes security or platform depth?",
  "What themes from the book relate to AI controls?"
];

export function AskClient() {
  const [question, setQuestion] = useState(prompts[0]);
  const [response, setResponse] = useState<AskPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      if (!res.ok) {
        setResponse(null);
        setError(data.error ?? "Request failed.");
        return;
      }
      setResponse(data);
    } catch {
      setResponse(null);
      setError("The Ask endpoint is unavailable right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="card rounded-[2rem] p-6 md:p-8">
        <p className="eyebrow mb-4">Ask Derrick</p>
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="type-ui block text-sm text-white/80" htmlFor="question">
            Questions are grounded only in approved source materials.
          </label>
          <textarea
            id="question"
            className="min-h-40 w-full rounded-3xl border border-white/10 bg-[#081322] px-5 py-4 text-base text-white outline-none ring-0 placeholder:text-white/35"
            value={question}
            maxLength={500}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={loading}
              className="type-ui rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-[var(--accent-strong)] disabled:opacity-60"
            >
              {loading ? "Searching approved sources..." : "Ask"}
            </button>
            <span className="type-ui text-sm text-[var(--muted)]">500 character input cap. Cached and rate-limited server-side.</span>
          </div>
        </form>
        {error ? <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-100/5 p-4 text-sm text-[var(--warn)]">{error}</p> : null}
      </div>

      <div className="space-y-4">
        <div className="card rounded-[2rem] p-6">
          <p className="eyebrow mb-4">Suggested Questions</p>
          <div className="space-y-3">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setQuestion(prompt)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm leading-6 text-white/80 transition hover:border-[var(--accent)]/40 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
        {response ? (
          <div className="card rounded-[2rem] p-6">
            <p className="eyebrow mb-4">Grounded Answer</p>
            <p className="text-base leading-8 text-white/90">{response.answer}</p>
            {response.inference ? <p className="mt-4 text-sm leading-6 text-[var(--warn)]">{response.inference}</p> : null}
            <div className="mt-6 space-y-3">
              {response.citations.map((citation, index) => (
                <div key={`${citation.source}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">{citation.source}</p>
                  <p className="mt-2 text-sm text-white/70">{citation.topic}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">"{citation.snippet}"</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
