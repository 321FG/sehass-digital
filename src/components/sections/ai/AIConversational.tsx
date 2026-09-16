import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getConversationalAreas } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIConversational() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.conversational;
  const areas = getConversationalAreas(lang);
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-conversational">
      <Container size="lg">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="ai-conversational"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {t.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.body}
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {areas.map((area) => (
              <li
                key={area}
                className="bg-surface-elevated px-5 py-4 text-sm text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
