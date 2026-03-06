import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="mb-8 max-w-3xl">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
        {description ? <p className="prose-copy mt-4 text-base">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
