import Link from "next/link";
import { Section } from "@/components/section";
import { consultingLanes } from "@/lib/site-data";

export const metadata = {
  title: "Consulting | Derrick Weil"
};

export default function ConsultingPage() {
  return (
    <Section
      eyebrow="Consulting"
      title="Selective work around secure AI systems, governed platforms, and architecture controls"
      description="This page stays within what the source materials support: control-minded AI systems, secure platform design, cloud and Kubernetes hardening, and architecture reviews."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {consultingLanes.map((lane) => (
          <article key={lane.title} className="card rounded-[2rem] p-6 md:p-8">
            <h3 className="text-2xl">{lane.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{lane.description}</p>
          </article>
        ))}
      </div>
      <div className="card mt-8 rounded-[2rem] p-6 md:p-8">
        <h3 className="text-2xl">How the work is framed here</h3>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
          The positioning emphasizes architecture depth, policy and control design, retrieval integrity, secure infrastructure, and operator-facing resilience. It does not claim packaged products, pre-set pricing, or unsupported case studies.
        </p>
        <Link href="/contact" className="type-ui mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#07111f]">
          Start a conversation
        </Link>
      </div>
    </Section>
  );
}
