import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type AgentsDict = Dictionary["ai"]["agents"];

function AgentArchitecture({ t }: { t: AgentsDict }) {
  const architecture = [
    { label: t.nodes.user.label, detail: t.nodes.user.detail },
    { label: t.nodes.agent.label, detail: t.nodes.agent.detail },
    { label: t.nodes.knowledge.label, detail: t.nodes.knowledge.detail },
    { label: t.nodes.action.label, detail: t.nodes.action.detail },
    { label: t.nodes.result.label, detail: t.nodes.result.detail },
  ];
  return (
    <div
      role="img"
      aria-label={t.archAlt}
      className="w-full rounded-3xl border border-border bg-surface-elevated p-6 md:p-8"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {t.archTitle}
      </div>
      <ol className="mt-6 flex flex-col gap-3">
        {architecture.map((node, i) => (
          <li key={node.label} className="flex flex-col gap-3">
            <div className="flex items-stretch gap-4">
              <div className="flex w-10 flex-none flex-col items-center gap-1 text-muted-foreground">
                <span className="font-mono text-[10px] tabular-nums">
                  0{i + 1}
                </span>
                <span
                  aria-hidden
                  className="h-full w-px flex-1 bg-border-strong"
                />
              </div>
              <div className="flex-1 rounded-xl border border-border bg-background p-4">
                <div className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {node.label}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {node.detail}
                </div>
              </div>
            </div>
            {i < architecture.length - 1 ? (
              <div
                aria-hidden
                className="ml-10 h-3 w-px bg-border-strong"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function AIAgents() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.agents;
  return (
    <Section tone="brand" spacing="lg" aria-labelledby="ai-agents">
      <Container size="lg">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-on-brand-muted">
              <span aria-hidden className="h-px w-6 bg-white/25" />
              {t.eyebrow}
            </span>
            <h2
              id="ai-agents"
              className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-on-brand md:text-4xl lg:text-5xl"
            >
              {t.heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-on-brand-muted md:text-lg">
              {t.body}
            </p>
            <div className="mt-2">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-on-brand-muted">
                {t.insistLabel}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.insist.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-on-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="not-prose">
            {/* Local light surface for the diagram inside the brand section. */}
            <div className="light rounded-3xl bg-background text-foreground">
              <AgentArchitecture t={t} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
