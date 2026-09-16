import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

/**
 * Ecosystem credibility. Presented as "Microsoft Partner" only —
 * no claims of Solutions Partner, Gold Partner, Azure Partner,
 * AI Partner, Certified, or specific competencies.
 */
export async function AIEcosystem() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.ecosystem;
  return (
    <Section tone="surface" spacing="md" aria-labelledby="ai-ecosystem">
      <Container size="lg">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="ai-ecosystem"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {t.heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.body}
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div className="rounded-2xl border border-border bg-background p-5 shadow-(--shadow-sm) md:p-6">
              <Image
                src="/brand/microsoft-partner.jpeg"
                alt="Microsoft Partner Center"
                width={246}
                height={46}
                className="h-10 w-auto md:h-11"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
