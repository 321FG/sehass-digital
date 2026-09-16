import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Two-column editorial narrative block. Left column shows the eyebrow +
 * heading; right column shows body paragraphs and optional children (e.g.
 * a pull quote, CTA, or supplementary content).
 */
export function AboutNarrative({
  eyebrow,
  heading,
  paragraphs,
  tone = "default",
  children,
  id,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  tone?: "default" | "surface";
  children?: ReactNode;
  id?: string;
}) {
  const anchorId = id ?? `about-${eyebrow.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <Section tone={tone} spacing="lg" aria-labelledby={anchorId}>
      <Container size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id={anchorId}
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {p}
              </p>
            ))}
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}
