import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { getCapabilities } from "@/data/what-we-build";
import { getLocale } from "@/app/[lang]/dictionaries";

export async function OverviewCapabilities() {
  const lang = await getLocale();
  const capabilities = getCapabilities(lang);
  return (
    <Section
      tone="surface"
      spacing="lg"
      aria-labelledby="overview-capabilities"
    >
      <Container size="lg">
        <h2 id="overview-capabilities" className="sr-only">
          Capabilities
        </h2>
        <ul className="flex flex-col gap-6">
          {capabilities.map((c, i) => (
            <li key={c.slug}>
              <article className="grid gap-8 rounded-3xl border border-border bg-surface-elevated p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-14">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {c.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {c.name}
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    {c.overviewSummary}
                  </p>
                  <div className="mt-2">
                    <CTA href={c.href} variant="primary" size="md">
                      {c.overviewCTA}
                    </CTA>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {c.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
