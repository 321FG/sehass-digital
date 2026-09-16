import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Full-width editorial pull quote — used for the "start here" statement
 * and the "Built in the Central African Republic / Designed for the
 * world" positioning.
 */
export function AboutPullStatement({
  eyebrow,
  lead,
  accent,
  body,
  tone = "brand",
}: {
  eyebrow?: string;
  lead: string;
  accent: string;
  body?: string;
  tone?: "brand" | "default" | "surface";
}) {
  const isBrand = tone === "brand";
  return (
    <Section
      tone={tone}
      spacing="lg"
      aria-labelledby="about-statement-heading"
    >
      <Container size="md">
        <div
          className={`flex flex-col gap-8 ${
            isBrand ? "text-on-brand" : "text-foreground"
          }`}
        >
          {eyebrow ? (
            <span
              className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] ${
                isBrand ? "text-on-brand-muted" : "text-muted-foreground"
              }`}
            >
              <span
                aria-hidden
                className={`h-px w-6 ${
                  isBrand ? "bg-white/25" : "bg-border-strong"
                }`}
              />
              {eyebrow}
            </span>
          ) : null}
          <h2
            id="about-statement-heading"
            className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl ${
              isBrand ? "text-on-brand" : "text-foreground"
            }`}
          >
            <span className="block">{lead}</span>
            <span
              className={`block ${
                isBrand ? "text-on-brand-muted" : "text-muted-foreground"
              }`}
            >
              {accent}
            </span>
          </h2>
          {body ? (
            <p
              className={`max-w-2xl text-base leading-relaxed md:text-lg ${
                isBrand ? "text-on-brand-muted" : "text-muted-foreground"
              }`}
            >
              {body}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
