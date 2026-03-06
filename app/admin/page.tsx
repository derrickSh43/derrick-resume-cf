import { Section } from "@/components/section";
import { adminNotes, chatbotNotes, sourceMap } from "@/lib/site-data";

export const metadata = {
  title: "Admin Notes | Derrick Weil"
};

export default function AdminPage() {
  return (
    <>
      <Section eyebrow="Content Map" title="Source materials used and excluded">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card rounded-[2rem] p-6">
            <h3 className="text-2xl">Used</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)]">
              {sourceMap.used.map((source) => (
                <div key={source.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">{source.id}</p>
                  <p className="mt-2 text-white/80">{source.path}</p>
                  <p className="mt-2">{source.topics.join(", ")}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="card rounded-[2rem] p-6">
            <h3 className="text-2xl">Excluded or de-prioritized</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)]">
              {sourceMap.excluded.map((source) => (
                <div key={source.source} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-white/80">{source.source}</p>
                  <p className="mt-2">{source.reason}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>
      <Section eyebrow="Chatbot" title="Grounded assistant architecture">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card rounded-[2rem] p-6">
            <h3 className="text-2xl">Retrieval flow</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{chatbotNotes.retrieval}</p>
          </article>
          <article className="card rounded-[2rem] p-6">
            <h3 className="text-2xl">Protections</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{chatbotNotes.controls}</p>
          </article>
        </div>
      </Section>
      <Section eyebrow="Maintenance" title="Admin notes">
        <div className="card rounded-[2rem] p-6">
          <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
            {adminNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
