import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function WhySehass() {
  const dict = await getDictionary();
  const t = dict.home.whySehass;
  return (
    <Section tone="default" spacing="lg" aria-labelledby="why-heading">
      <Container size="lg">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="why-heading"
              className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {t.heading}
            </h2>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {t.items.map((r) => (
              <li
                key={r.id}
                className="flex flex-col gap-3 bg-surface-elevated p-7 md:p-8"
              >
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {r.label}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {r.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
