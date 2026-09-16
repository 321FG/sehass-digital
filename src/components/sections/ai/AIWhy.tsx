import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getWhyPrinciples } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIWhy() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.why;
  const principles = getWhyPrinciples(lang);
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-why">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-why"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col gap-3 border-t border-border-strong pt-5"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
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
