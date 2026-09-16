import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getResponsiblePrinciples } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIResponsible() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.responsible;
  const principles = getResponsiblePrinciples(lang);
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-responsible">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            {t.eyebrow}
          </span>
          <h2
            id="ai-responsible"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-2 bg-surface-elevated p-6"
            >
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
