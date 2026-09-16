import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getGenerativeUses } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIGenerative() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.generative;
  const uses = getGenerativeUses(lang);
  return (
    <Section tone="surface" spacing="md" aria-labelledby="ai-generative">
      <Container size="lg">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <ul className="order-2 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:order-1">
            {uses.map((use) => (
              <li
                key={use}
                className="bg-surface-elevated px-5 py-4 text-sm text-foreground"
              >
                {use}
              </li>
            ))}
          </ul>
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="ai-generative"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {t.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.body}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
