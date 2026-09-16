import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getAiCapabilities } from "@/data/ai";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AICapabilities() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.capabilities;
  const capabilities = getAiCapabilities(lang);
  return (
    <Section tone="default" spacing="md" aria-labelledby="ai-capabilities">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="ai-capabilities"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => (
            <article
              key={capability.title}
              className="flex flex-col gap-3 bg-surface-elevated p-6 md:p-7"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {capability.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
