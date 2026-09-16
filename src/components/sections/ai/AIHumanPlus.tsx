import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIHumanPlus() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.human;
  return (
    <Section tone="surface" spacing="md" aria-labelledby="ai-human">
      <Container size="md">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-human"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>

          <div className="mt-6 rounded-3xl border border-border bg-surface-elevated p-6 md:p-10">
            <div
              role="img"
              aria-label={t.formulaAlt}
              className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center md:gap-6"
            >
              {[
                { label: t.expertise },
                { label: t.assistance },
                { label: t.workflows },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center justify-center gap-4 md:gap-6">
                  <div className="flex-1 rounded-xl border border-border bg-background px-5 py-4 text-center text-sm font-medium text-foreground md:min-w-40">
                    {item.label}
                  </div>
                  {i < 2 ? (
                    <span
                      aria-hidden
                      className="font-display text-2xl text-muted-foreground"
                    >
                      +
                    </span>
                  ) : null}
                </div>
              ))}
              <span
                aria-hidden
                className="hidden font-display text-2xl text-muted-foreground md:inline"
              >
                =
              </span>
              <div className="rounded-xl bg-brand px-5 py-4 text-center text-sm font-semibold text-on-brand md:min-w-48">
                {t.outcomes}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
