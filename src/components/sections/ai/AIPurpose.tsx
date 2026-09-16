import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDecisionProcess } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIPurpose() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const steps = getDecisionProcess(lang);
  const t = dict.ai.purpose;
  return (
    <Section tone="surface" spacing="md" aria-labelledby="ai-purpose">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-purpose"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-2 border-t border-border-strong pt-5"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {step.number}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                {step.title}
              </h3>
              {step.summary ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.summary}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
