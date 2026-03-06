"use client";

import { FormEvent, useState } from "react";

const contactEmail = "d.w.engineer@proton.me";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const honeypot = String(form.get("company") ?? "").trim();

    if (honeypot) {
      setStatus("Submission blocked.");
      return;
    }

    if (!name || !email || !message) {
      setStatus("Name, email, and message are required.");
      return;
    }

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus(`Opening your email client to send this message to ${contactEmail}.`);
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
        className="type-ui rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f] disabled:opacity-60"
      >
        Compose Email
      </button>
      {status ? <p className="text-sm leading-6 text-[var(--muted)]">{status}</p> : null}
    </form>
  );
}
