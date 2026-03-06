import { Citation } from "@/lib/site-data";

export function CitationList({ citations }: { citations: Citation[] }) {
  return (
    <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
      {citations.map((citation, index) => (
        <div key={`${citation.sourceId}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="type-ui text-xs uppercase tracking-[0.16em] text-[var(--accent)]">{citation.label}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">"{citation.snippet}"</p>
        </div>
      ))}
    </div>
  );
}
