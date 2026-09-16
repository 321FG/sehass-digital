import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { ProcessStep } from "@/data/what-we-build";

export function ProcessSteps({
  eyebrow,
  heading,
  supporting,
  steps,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  supporting?: string;
  steps: ProcessStep[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="md" aria-labelledby={`proc-${eyebrow}`}>
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id={`proc-${eyebrow}`}
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

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-3 border-t border-border-strong pt-5"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.summary}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
