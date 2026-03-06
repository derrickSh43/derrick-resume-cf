"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      setStatus(data.message ?? data.error ?? "Request completed.");
      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setStatus("Contact submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input
        name="name"
        required
        maxLength={80}
        placeholder="Name"
        className="w-full rounded-2xl border border-white/10 bg-[#081322] px-4 py-3 text-white outline-none"
      />
      <input
        name="email"
        type="email"
        required
        maxLength={120}
        placeholder="Email"
        className="w-full rounded-2xl border border-white/10 bg-[#081322] px-4 py-3 text-white outline-none"
      />
      <textarea
        name="message"
        required
        maxLength={1200}
        placeholder="Brief note"
        className="min-h-40 w-full rounded-2xl border border-white/10 bg-[#081322] px-4 py-3 text-white outline-none"
      />
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <button
        type="submit"
        disabled={loading}
        className="type-ui rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send inquiry"}
      </button>
      {status ? <p className="text-sm leading-6 text-[var(--muted)]">{status}</p> : null}
    </form>
  );
}
