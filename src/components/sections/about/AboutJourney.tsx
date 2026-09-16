import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { AboutJourneyStep } from "@/data/about";

/**
 * Vertical numbered journey for the "Built here first" positioning.
 * Renders on a brand-toned surface so the local -> global progression
 * lands with the required weight without adding gradients or motion.
 */
export function AboutJourney({
  eyebrow,
  lead,
  accent,
  body,
  steps,
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  body: string;
  steps: AboutJourneyStep[];
}) {
  return (
    <Section tone="brand" spacing="xl" aria-labelledby="about-journey">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="flex flex-col gap-8 text-on-brand">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-on-brand-muted">
              <span aria-hidden className="h-px w-6 bg-white/25" />
              {eyebrow}
            </span>
            <h2
              id="about-journey"
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
            >
              <span className="block">{lead}</span>
              <span className="block text-on-brand-muted">{accent}</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-on-brand-muted md:text-lg">
              {body}
            </p>
          </div>

          <ol className="relative flex flex-col gap-8">
            {steps.map((step, i) => (
              <li key={step.label} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 font-mono text-xs tabular-nums text-on-brand">
                    0{i + 1}
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="mt-2 w-px flex-1 bg-white/20"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 pb-4 text-on-brand">
                  <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                    {step.label}
                  </span>
                  <span className="max-w-md text-sm leading-relaxed text-on-brand-muted md:text-base">
                    {step.detail}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
