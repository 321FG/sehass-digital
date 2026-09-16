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
    title: dict.industries.detail.government.metaTitle,
    description: dict.industries.detail.government.metaDescription,
    alternates: {
      canonical: `/${lang}/industries/government-ngos`,
      languages: {
        en: "/en/industries/government-ngos",
        fr: "/fr/industries/government-ngos",
        "x-default": "/en/industries/government-ngos",
      },
    },
    openGraph: {
      title: dict.industries.detail.government.metaTitle,
      description: dict.industries.detail.government.metaDescription,
      type: "website",
    },
  };
}

export default async function GovernmentNgosPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const industry = getIndustryBySlug(lang, "government-ngos");
  const { hero, useCases, approach, featuredSolution, closing } =
    getIndustryContent(lang, "government-ngos");
  const solution = getSolutionBySlug(lang, "e-arcep");

  return (
    <>
      <IndustryDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        icon={industry.icon}
        editorial={editorial.digitalTransformation}
      />

      <PillarsSection
        eyebrow={useCases.heading}
        heading={dict.industries.detail.useCases}
        supporting={useCases.supporting}
        items={useCases.items}
        columns="auto"
        tone="surface"
      />

      <EditorialBandSection asset={editorial.digitalCommunity} />

      {featuredSolution ? (
        <FeaturedSolutionSection
          eyebrow={featuredSolution.eyebrow}
          heading={featuredSolution.heading}
          body={featuredSolution.body}
          solution={solution}
          tone="default"
        />
      ) : null}

      <ProcessSteps
        eyebrow={approach.heading}
        heading={dict.industries.detail.whyConversational}
        supporting={approach.supporting}
        steps={approach.steps}
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
