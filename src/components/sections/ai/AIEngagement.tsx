import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getEngagementLevels } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIEngagement() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.engagement;
  const levels = getEngagementLevels(lang);
  return (
    <Section tone="surface" spacing="md" aria-labelledby="ai-engagement">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-engagement"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((level, i) => (
            <li
              key={level.label}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface-elevated p-5"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                {level.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {level.summary}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
