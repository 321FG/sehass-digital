import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { CapabilityItem } from "@/data/what-we-build";

export function CapabilitiesGrid({
  eyebrow,
  heading,
  supporting,
  items,
}: {
  eyebrow: string;
  heading: string;
  supporting?: string;
  items: CapabilityItem[];
}) {
  return (
    <Section tone="surface" spacing="md" aria-labelledby={`grid-${eyebrow}`}>
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id={`grid-${eyebrow}`}
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          {supporting ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {supporting}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 bg-surface-elevated p-7 md:p-8"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
