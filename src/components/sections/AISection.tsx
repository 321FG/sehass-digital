import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function AISection() {
  const dict = await getDictionary();
  const t = dict.home.ai;
  return (
    <Section tone="brand" spacing="lg" aria-labelledby="ai-heading">
      <Container size="lg">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-on-brand-muted">
              <span aria-hidden className="h-px w-6 bg-white/25" />
              {t.eyebrow}
            </span>
            <h2
              id="ai-heading"
              className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-on-brand md:text-4xl lg:text-5xl"
            >
              {t.heading}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-on-brand-muted md:text-lg">
              {t.subheading}
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {t.items.map((h, i) => (
              <li
                key={h.id}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/3 p-6 md:p-7"
              >
                <span className="font-mono text-xs tabular-nums text-on-brand-muted">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-on-brand-muted">
                    {h.label}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-on-brand md:text-2xl">
                    {h.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-on-brand-muted">
                    {h.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
