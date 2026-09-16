import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.eSehass.meta.title,
    description: dict.eSehass.meta.description,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${lang}/e-sehass`,
      languages: {
        en: "/en/e-sehass",
        fr: "/fr/e-sehass",
        "x-default": "/en/e-sehass",
      },
    },
  };
}

export default async function ESehassPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { hero, next } = dict.eSehass;
  return (
    <>
      <Section id="main" tone="default" spacing="lg">
        <Container size="lg">
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {hero.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.bodyOne}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.bodyTwo}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg" aria-labelledby="e-sehass-next">
        <Container size="lg">
          <div className="flex flex-col gap-8 rounded-3xl border border-border bg-surface-elevated p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
            <div className="flex max-w-xl flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {next.eyebrow}
              </span>
              <h2
                id="e-sehass-next"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {next.heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {next.body}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTA href={`/${lang}/solutions`} variant="primary" size="lg">
                {next.primaryCta}
              </CTA>
              <CTA
                href={`/${lang}/contact`}
                variant="outline"
                size="lg"
                withArrow={false}
              >
                {next.secondaryCta}
              </CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
