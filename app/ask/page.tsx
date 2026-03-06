import { AskClient } from "@/components/ask-client";
import { Section } from "@/components/section";

export const metadata = {
  title: "Ask Derrick | Grounded Assistant"
};

export default function AskPage() {
  return (
    <Section
      eyebrow="Ask"
      title="A grounded assistant over Derrick's approved materials"
      description="This assistant answers only from the local approved corpus used by the site. It cites source snippets, refuses unsupported claims, and does not browse arbitrary external sources."
    >
      <AskClient />
    </Section>
  );
}
