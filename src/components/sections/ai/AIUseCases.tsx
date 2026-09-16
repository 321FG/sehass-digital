import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getUseCaseGroups } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIUseCases() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.useCases;
  const groups = getUseCaseGroups(lang);
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-usecases">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-usecases"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article
              key={group.audience}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                {group.audience}
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 flex-none rounded-full bg-border-strong"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
