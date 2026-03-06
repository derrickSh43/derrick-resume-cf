import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Writing / Book", "/writing"],
  ["Resume", "/resume"],
  ["Consulting", "/consulting"],
  ["Ask", "/ask"],
  ["Contact", "/contact"]
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="type-ui text-sm font-semibold tracking-[0.22em] text-white/90 uppercase">
            Derrick Weil
          </Link>
          <nav className="type-ui flex flex-wrap gap-3 text-sm text-white/70">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/10 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>Grounded in provided materials: LinkedIn exports, curated repo list, and the Production-Grade AI Systems manuscript.</p>
          <p className="type-ui">Server-only Ask endpoint. No frontend secrets.</p>
        </div>
      </footer>
    </div>
  );
}
