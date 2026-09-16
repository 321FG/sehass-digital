import type { Metadata } from "next";
import { SolutionDetailHero } from "@/components/sections/solutions/SolutionDetailHero";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProductShowcase } from "@/components/sections/solutions/ProductShowcase";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getAmalContent, getSolutionBySlug } from "@/data/solutions";
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
    title: dict.solutions.detail.amal.metaTitle,
    description: dict.solutions.detail.amal.metaDescription,
    alternates: {
      canonical: `/${lang}/solutions/amal-ai`,
      languages: {
        en: "/en/solutions/amal-ai",
        fr: "/fr/solutions/amal-ai",
        "x-default": "/en/solutions/amal-ai",
      },
    },
    openGraph: {
      title: dict.solutions.detail.amal.metaTitle,
      description: dict.solutions.detail.amal.metaDescription,
      type: "website",
    },
  };
}

export default async function AmalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const summary = getSolutionBySlug(lang, "amal-ai");
  const { hero, what, context, showcase, closing } = getAmalContent(lang);

  return (
    <>
      <SolutionDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        status={summary.status}
        statusLabel={summary.statusLabel}
        platforms={summary.platforms}
        image={hero.image}
        primaryCTA={{ label: dict.solutions.detail.startProject, href: `/${lang}/contact` }}
        secondaryCTA={{ label: dict.solutions.detail.getInTouch, href: `/${lang}/contact` }}
        externalLinks={summary.externalLinks}
      />

      <PillarsSection
        eyebrow={what.heading}
        heading={dict.solutions.detail.amal.whatHeading}
        supporting={what.body}
        items={what.features.map((f) => ({ title: f.title, summary: f.body }))}
        columns="auto"
        tone="surface"
      />

      <Section tone="default" spacing="lg" aria-labelledby="amal-context">
        <Container size="md">
          <div className="flex flex-col gap-5 border-t border-border-strong pt-8">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {dict.solutions.contextEyebrow}
            </span>
            <h2
              id="amal-context"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {context.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {context.body}
            </p>
          </div>
        </Container>
      </Section>

      <ProductShowcase
        eyebrow={showcase.heading}
        heading={dict.solutions.detail.amal.showcaseHeading}
        supporting={showcase.body}
        images={[...showcase.images]}
        tone="surface"
      />

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta}
      />
    </>
  );
}
