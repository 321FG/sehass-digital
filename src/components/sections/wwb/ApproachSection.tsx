import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getApproachSteps } from "@/data/what-we-build";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function ApproachSection() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const approachSteps = getApproachSteps(lang);
  return (
    <Section tone="default" spacing="lg" aria-labelledby="approach-heading">
      <Container size="lg">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {dict.wwb.overview.approachEyebrow}
            </span>
            <h2
              id="approach-heading"
              className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {dict.wwb.overview.approachHeading}
            </h2>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2">
            {approachSteps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-3 border-t border-border-strong pt-5"
              >
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
