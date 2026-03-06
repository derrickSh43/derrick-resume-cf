import Link from "next/link";
import { CitationList } from "@/components/citation-list";
import { Section } from "@/components/section";
import { flagshipProjects, profile, writingThemes } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div>
          <p className="eyebrow mb-5">AI Security • AI Infrastructure • AI Governance</p>
          <h1 className="max-w-4xl text-5xl leading-tight md:text-7xl">
            Derrick Weil builds AI systems that are designed to be operable, governable, and hard to break.
          </h1>
          <p className="prose-copy mt-6 max-w-3xl text-lg">{profile.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="type-ui rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f]">
              View Projects
            </Link>
            <Link href="/consulting" className="type-ui rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85">
              Consulting Focus
            </Link>
            <Link href="/ask" className="type-ui rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85">
              Ask Derrick
            </Link>
          </div>
        </div>
        <div className="card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow mb-4">Positioning</p>
          <div className="space-y-4">
            {profile.heroPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-base leading-7 text-white/85">{point}</p>
              </div>
            ))}
          </div>
          <p className="type-ui mt-6 text-sm text-[var(--muted)]">{profile.citizenship}</p>
        </div>
      </section>

      <Section
        eyebrow="Why This Site"
        title="A curated technical profile, not a generic portfolio"
        description={profile.intro}
      >
        <div className="card max-w-4xl rounded-[2rem] p-6 md:p-8">
          <CitationList citations={profile.citations} />
        </div>
      </Section>

      <Section
        eyebrow="Flagship Work"
        title="Projects that best support AI security, AI infrastructure, and AI governance positioning"
        description="The homepage only features projects with strong alignment to governed AI systems, secure automation, platform controls, and production operations."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {flagshipProjects.map((project) => (
            <article key={project.slug} className="card rounded-[2rem] p-6">
              <p className="eyebrow mb-3">{project.category}</p>
              <h3 className="text-2xl leading-tight">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-white/80">{project.relevance}</p>
              <Link href="/projects" className="type-ui mt-6 inline-flex text-sm font-semibold text-[var(--accent)]">
                See project detail
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Writing / Book"
        title="Governance-first ideas shaped by operations and failure analysis"
        description="The writing material is anchored in the Production-Grade AI Systems manuscript rather than generic AI commentary."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {writingThemes.map((theme) => (
            <article key={theme.title} className="card rounded-[2rem] p-6">
              <h3 className="text-2xl leading-tight">{theme.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{theme.summary}</p>
              <blockquote className="mt-6 border-l border-[var(--accent)] pl-4 text-sm leading-7 text-white/85">
                {theme.excerpt}
              </blockquote>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next Step"
        title="Need a serious operator for secure AI systems or governed platform work?"
        description="The site is structured for recruiters, engineering leaders, and consulting clients who need evidence of controls-oriented infrastructure depth."
      >
        <div className="card flex flex-col gap-4 rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-white/85">
            Review the curated projects, read the book themes, or use the grounded Ask page to inspect the source-backed evidence directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/resume" className="type-ui rounded-full border border-white/15 px-5 py-3 text-sm font-semibold">
              Resume
            </Link>
            <Link href="/contact" className="type-ui rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f]">
              Contact
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
