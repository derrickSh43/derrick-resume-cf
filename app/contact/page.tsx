import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";

export const metadata = {
  title: "Contact | Derrick Weil"
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Direct and low-friction contact"
      description="A secure contact form can be wired later to email or CRM delivery. For this build, the site keeps the contact path simple and avoids exposing secrets."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl">Primary links</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>
              GitHub:{" "}
              <Link className="text-[var(--accent)]" href="https://github.com/derrickSh43">
                github.com/derrickSh43
              </Link>
            </p>
            <p>LinkedIn and email can be added from verified contact details before deployment.</p>
            <p>The current sources did not include a publish-ready public email address, so the site does not invent one.</p>
          </div>
        </article>
        <article className="card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl">Secure inquiry form</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            This form posts to a server-side route with validation, rate limiting, and a honeypot field. It currently logs the inquiry server-side so the delivery provider can be added later without exposing secrets.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </article>
      </div>
    </Section>
  );
}
