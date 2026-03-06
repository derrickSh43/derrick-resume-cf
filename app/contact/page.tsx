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
      description="This page now includes a real public contact address and an email composition flow that does not require a mail backend."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl">Primary links</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>
              LinkedIn:{" "}
              <Link className="text-[var(--accent)]" href="https://www.linkedin.com/in/derrick-w-11726253/">
                linkedin.com/in/derrick-w-11726253
              </Link>
            </p>
            <p>The contact form below opens a pre-addressed email draft without exposing the address directly on the page.</p>
          </div>
        </article>
        <article className="card rounded-[2rem] p-6 md:p-8">
          <h3 className="text-2xl">Email inquiry form</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            This form composes a message to your Proton address in the visitor&apos;s email client. It avoids frontend secrets and works without wiring a transactional email provider.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </article>
      </div>
    </Section>
  );
}
