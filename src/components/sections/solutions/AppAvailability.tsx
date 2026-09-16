import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ExternalLinks } from "@/components/sections/solutions/ExternalLinks";
import type { ExternalLink } from "@/data/solutions";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function AppAvailability({
  heading,
  body,
  links,
}: {
  heading: string;
  body: string;
  links: ExternalLink[];
}) {
  const dict = await getDictionary();
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="avail-heading">
      <Container size="md">
        <div className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-surface-elevated p-8 md:items-center md:p-12 md:text-center lg:p-16">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {dict.solutions.availabilityEyebrow}
          </span>
          <h2
            id="avail-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
          <ExternalLinks links={links} variant="mixed" />
        </div>
      </Container>
    </Section>
  );
}
