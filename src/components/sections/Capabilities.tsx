import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function Capabilities() {
  const dict = await getDictionary();
  const t = dict.home.capabilities;
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="what-we-build">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="what-we-build"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {t.items.map((c, i) => (
            <article
              key={c.id}
              className="flex flex-col gap-4 bg-surface-elevated p-8 md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {c.label}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {c.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {c.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
