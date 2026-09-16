import type { Metadata } from "next";
import { IndustryDetailHero } from "@/components/sections/industries/IndustryDetailHero";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { FeaturedSolutionSection } from "@/components/sections/industries/FeaturedSolutionSection";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getIndustryBySlug, getIndustryContent } from "@/data/industries";
import { getSolutionBySlug } from "@/data/solutions";
import { EditorialBandSection } from "@/components/ui/EditorialImage";
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
    title: dict.industries.detail.business.metaTitle,
    description: dict.industries.detail.business.metaDescription,
    alternates: {
      canonical: `/${lang}/industries/business`,
      languages: {
        en: "/en/industries/business",
        fr: "/fr/industries/business",
        "x-default": "/en/industries/business",
      },
    },
    openGraph: {
      title: dict.industries.detail.business.metaTitle,
      description: dict.industries.detail.business.metaDescription,
      type: "website",
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const industry = getIndustryBySlug(lang, "business");
  const { hero, useCases, approach, featuredSolution, closing } =
    getIndustryContent(lang, "business");
  const solution = getSolutionBySlug(lang, "amal-ai");

  return (
    <>
      <IndustryDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        icon={industry.icon}
        editorial={editorial.dataCenterAdmin}
      />

      <PillarsSection
        eyebrow={useCases.heading}
        heading={dict.industries.detail.useCases}
        supporting={useCases.supporting}
        items={useCases.items}
        columns="auto"
        tone="surface"
      />

      <EditorialBandSection asset={editorial.systemsIntegration} />

      <ProcessSteps
        eyebrow={approach.heading}
        heading={dict.industries.detail.problemsWeCanHelpSolve}
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
