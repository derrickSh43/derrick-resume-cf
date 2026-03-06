import { CitationList } from "@/components/citation-list";
import { Section } from "@/components/section";
import { writingThemes } from "@/lib/site-data";

export const metadata = {
  title: "Writing and Book | Derrick Weil"
};

export default function WritingPage() {
  return (
    <Section
      eyebrow="Writing / Book"
      title="Production-grade AI thinking grounded in controls, failure, and operator reality"
      description="The manuscript is used here as a signal of technical judgment, not as a marketing artifact. Excerpts are intentionally short and focused on architecture-level principles."
    >
      <div className="grid gap-6">
        {writingThemes.map((theme) => (
          <article key={theme.title} className="card rounded-[2rem] p-6 md:p-8">
            <h3 className="text-3xl leading-tight">{theme.title}</h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{theme.summary}</p>
            <blockquote className="mt-6 max-w-4xl border-l border-[var(--accent)] pl-5 text-lg leading-8 text-white/85">
              {theme.excerpt}
            </blockquote>
            <CitationList citations={theme.citations} />
          </article>
        ))}
      </div>
    </Section>
  );
}
