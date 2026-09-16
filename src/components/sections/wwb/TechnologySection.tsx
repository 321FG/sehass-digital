import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

/**
 * Software page — "Technology" section.
 * Restrained placeholder — Sehass has not published a confirmed public tech stack.
 * Do NOT list specific frameworks or vendors until verified.
 */
export async function TechnologySection() {
  const dict = await getDictionary();
  const t = dict.wwb.shared;
  return (
    <Section tone="default" spacing="md" aria-labelledby="technology-heading">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.technologyEyebrow}
          </span>
          <h2
            id="technology-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {t.technologyHeading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.technologyBody}
          </p>
        </div>

        {/* TODO: Add confirmed technology logos and capability matrix only after internal verification. */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.technologyColumns.map((label) => (
            <div
              key={label}
              className="flex flex-col gap-2 bg-surface-elevated p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </span>
              <span className="text-sm text-muted-foreground">
                {t.technologyDetailsSoon}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
