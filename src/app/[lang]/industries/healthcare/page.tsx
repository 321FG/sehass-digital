import type { Metadata } from "next";
import { IndustryDetailHero } from "@/components/sections/industries/IndustryDetailHero";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { FeaturedSolutionSection } from "@/components/sections/industries/FeaturedSolutionSection";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getIndustryBySlug, getIndustryContent } from "@/data/industries";
import { getSolutionBySlug } from "@/data/solutions";
import { editorial } from "@/data/editorial";
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
    title: dict.industries.detail.healthcare.metaTitle,
    description: dict.industries.detail.healthcare.metaDescription,
    alternates: {
      canonical: `/${lang}/industries/healthcare`,
      languages: {
        en: "/en/industries/healthcare",
        fr: "/fr/industries/healthcare",
        "x-default": "/en/industries/healthcare",
      },
    },
    openGraph: {
      title: dict.industries.detail.healthcare.metaTitle,
      description: dict.industries.detail.healthcare.metaDescription,
      type: "website",
    },
  };
}

export default async function HealthcarePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const industry = getIndustryBySlug(lang, "healthcare");
  const { hero, useCases, approach, featuredSolution, closing } =
    getIndustryContent(lang, "healthcare");
  const solution = getSolutionBySlug(lang, "mbipa");

  return (
    <>
      <IndustryDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        icon={industry.icon}
        editorial={editorial.healthcareConsult}
      />

      <PillarsSection
        eyebrow={useCases.heading}
        heading={dict.industries.detail.whereTechCanHelp}
        supporting={useCases.supporting}
        items={useCases.items}
        columns="auto"
        tone="surface"
      />

      {useCases.note ? (
        <Section tone="surface" spacing="sm" aria-labelledby="hc-note">
          <Container size="md">
            <p
              id="hc-note"
              className="rounded-xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-muted-foreground"
            >
              {useCases.note}
            </p>
          </Container>
        </Section>
      ) : null}

      <ProcessSteps
        eyebrow={approach.heading}
        heading={dict.industries.detail.howWeApproachIt}
        supporting={approach.supporting}
        steps={approach.steps}
        tone="default"
      />

      {featuredSolution ? (
        <FeaturedSolutionSection
          eyebrow={featuredSolution.eyebrow}
          heading={featuredSolution.heading}
          body={featuredSolution.body}
          solution={solution}
          tone="surface"
        />
      ) : null}

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta}
      />
    </>
  );
}
