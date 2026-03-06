import Link from "next/link";
import { CitationList } from "@/components/citation-list";
import { Section } from "@/components/section";
import { flagshipProjects, supportingProjects } from "@/lib/site-data";

function ProjectCard({
  title,
  category,
  summary,
  problem,
  built,
  relevance,
  technologies,
  repo,
  citations
}: (typeof flagshipProjects)[number]) {
  return (
    <article className="card rounded-[2rem] p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow mb-3">{category}</p>
          <h3 className="text-3xl leading-tight">{title}</h3>
        </div>
        {repo ? (
          <Link href={repo} className="type-ui rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">
            Repo
          </Link>
        ) : null}
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Summary</p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{summary}</p>
        </div>
        <div>
          <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Problem</p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{problem}</p>
        </div>
        <div>
          <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">What Derrick Built</p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{built}</p>
        </div>
        <div>
          <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">Why It Matters</p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{relevance}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((item) => (
          <span key={item} className="type-ui rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/70">
            {item}
          </span>
        ))}
      </div>
      <CitationList citations={citations} />
    </article>
  );
}

export const metadata = {
  title: "Projects | Derrick Weil"
};

export default function ProjectsPage() {
  return (
    <>
      <Section
        eyebrow="Projects"
        title="Curated to reinforce governed AI systems, platform engineering, and secure automation"
        description="Not every repo earns the same weight. These projects were selected because the source descriptions most directly support AI security, AI infrastructure, AI governance, and consulting credibility."
      >
        <div className="space-y-6">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Supporting Work"
        title="Additional infrastructure projects"
        description="Included for breadth, but positioned below the flagship work because they contribute less directly to the target AI security and governance narrative."
      >
        <div className="space-y-6">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Section>
    </>
  );
}
