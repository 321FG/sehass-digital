import type { Metadata } from "next";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { IndustryOverviewGrid } from "@/components/sections/industries/IndustryOverviewGrid";
import { CrossIndustrySection } from "@/components/sections/industries/CrossIndustrySection";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getIndustries, getCrossIndustryRows } from "@/data/industries";
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
    title: dict.industries.metaTitle,
    description: dict.industries.metaDescription,
    alternates: {
      canonical: `/${lang}/industries`,
      languages: {
        en: "/en/industries",
        fr: "/fr/industries",
        "x-default": "/en/industries",
      },
    },
    openGraph: {
      title: dict.industries.metaTitle,
      description: dict.industries.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <IndustriesHero />
      <EditorialBandSection asset={editorial.humanSmartphone} tone="surface" />
      <IndustryOverviewGrid industries={getIndustries(lang)} />
      <CrossIndustrySection rows={getCrossIndustryRows(lang)} />
      <ClosingCTA
        heading={dict.sections.haveProblemHeading}
        supporting={dict.sections.letsBuildBody}
        cta={dict.sections.startProject}
      />
    </>
  );
}
