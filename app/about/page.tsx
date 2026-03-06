import { CitationList } from "@/components/citation-list";
import { Section } from "@/components/section";
import { aboutSections } from "@/lib/site-data";

export const metadata = {
  title: "About | Derrick Weil"
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Technical background shaped by infrastructure, controls, and operational failure modes"
      description="This page stays close to the source evidence and avoids inventing a broader narrative than the materials support."
    >
      <div className="space-y-6">
        {aboutSections.map((section) => (
          <article key={section.title} className="card rounded-[2rem] p-6 md:p-8">
            <h3 className="text-2xl">{section.title}</h3>
            <div className="prose-copy mt-4 text-base">
              <p>{section.body}</p>
            </div>
            <CitationList citations={section.citations} />
          </article>
        ))}
      </div>
    </Section>
  );
}
