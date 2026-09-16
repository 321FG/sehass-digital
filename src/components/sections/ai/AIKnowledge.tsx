import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type KnowledgeDict = Dictionary["ai"]["knowledge"];

function KnowledgeFlow({ t }: { t: KnowledgeDict }) {
  return (
    <div
      role="img"
      aria-label={t.flowAlt}
      className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch"
    >
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface-elevated p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {t.sourcesLabel}
        </div>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          {t.sources.map((s) => (
            <li key={s} className="border-t border-border pt-2 first:border-t-0 first:pt-0">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center py-2 text-muted-foreground lg:py-0">
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 rotate-90 lg:rotate-0" fill="none">
          <path
            d="M5 12h14m0 0-4-4m4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-brand p-5 text-brand-foreground">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-brand-muted">
          {t.intelligenceLabel}
        </div>
        <div className="font-display text-lg font-semibold tracking-tight text-on-brand">
          {t.intelligenceTitle}
        </div>
        <p className="text-sm leading-relaxed text-on-brand-muted">
          {t.intelligenceBody}
        </p>
      </div>

      <div className="flex items-center justify-center py-2 text-muted-foreground lg:py-0">
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 rotate-90 lg:rotate-0" fill="none">
          <path
            d="M5 12h14m0 0-4-4m4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface-elevated p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {t.outputsLabel}
        </div>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          {t.outputs.map((o) => (
            <li key={o} className="border-t border-border pt-2 first:border-t-0 first:pt-0">
              {o}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function AIKnowledge() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.knowledge;
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-knowledge">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-knowledge"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <div className="mt-12">
          <KnowledgeFlow t={t} />
        </div>
      </Container>
    </Section>
  );
}
