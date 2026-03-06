import { Section } from "@/components/section";
import { credentials, experience, skillGroups } from "@/lib/site-data";

export const metadata = {
  title: "Resume | Derrick Weil"
};

export default function ResumePage() {
  return (
    <>
      <Section
        eyebrow="Resume"
        title="Experience, credentials, and skills organized for quick technical review"
        description="This page favors scannable evidence over a dense chronological wall of text."
      >
        <div className="grid gap-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="card rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.company}</p>
                </div>
                <p className="type-ui rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--muted)]">{item.period}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="Focus areas">
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card rounded-[2rem] p-6">
              <h3 className="text-xl">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Credentials" title="Certifications">
        <div className="grid gap-6 md:grid-cols-2">
          {credentials.map((credential) => (
            <article key={credential.name} className="card rounded-[2rem] p-6">
              <h3 className="text-xl">{credential.name}</h3>
              <p className="type-ui mt-3 text-sm text-[var(--muted)]">{credential.period}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">{credential.source}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
