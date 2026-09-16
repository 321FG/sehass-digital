import { CTA } from "@/components/ui/CTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type HeroDict = Dictionary["ai"]["hero"];

/**
 * Abstract system diagram: Input → Intelligence → Action.
 * Typography and lines only — no illustration, no stock photography.
 */
function SystemDiagram({ t }: { t: HeroDict }) {
  const layers = [
    { label: t.layers.input.label, detail: t.layers.input.detail },
    { label: t.layers.intelligence.label, detail: t.layers.intelligence.detail },
    { label: t.layers.action.label, detail: t.layers.action.detail },
  ];

  return (
    <div
      role="img"
      aria-label={t.diagramAlt}
      className="relative w-full rounded-3xl border border-border bg-surface-elevated p-6 md:p-8"
    >
      <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {t.system}
      </div>

      <div className="mt-8 flex flex-col gap-3 md:gap-4">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex flex-col gap-3">
            <div className="flex items-stretch gap-4">
              <div className="flex w-12 flex-none flex-col items-center gap-1 text-muted-foreground">
                <span className="font-mono text-[10px] tabular-nums">
                  0{i + 1}
                </span>
                <span
                  aria-hidden
                  className="h-full w-px flex-1 bg-border-strong"
                />
              </div>
              <div className="flex-1 rounded-xl border border-border bg-background p-4 md:p-5">
                <div className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {layer.label}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {layer.detail}
                </div>
              </div>
            </div>
            {i < layers.length - 1 ? (
              <div className="ml-12 flex items-center gap-2 text-muted-foreground">
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                >
                  <path
                    d="M8 3v10m0 0-3-3m3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                  {t.flowsInto}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function AIHero() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.hero;
  return (
    <Section id="main" tone="default" spacing="lg" aria-labelledby="ai-hero">
      <Container size="lg">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {t.eyebrow}
            </span>
            <h1
              id="ai-hero"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {t.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.body}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CTA href={`/${lang}/contact`} variant="primary" size="lg">
                {t.primaryCta}
              </CTA>
              <CTA
                href={`/${lang}/what-we-build`}
                variant="outline"
                size="lg"
                withArrow={false}
              >
                {t.secondaryCta}
              </CTA>
            </div>
          </div>
          <div className="relative">
            <SystemDiagram t={t} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
