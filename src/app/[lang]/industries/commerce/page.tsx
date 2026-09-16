import type { Metadata } from "next";
import { IndustryDetailHero } from "@/components/sections/industries/IndustryDetailHero";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { RestrainedInvite } from "@/components/sections/industries/RestrainedInvite";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getIndustryBySlug, getIndustryContent } from "@/data/industries";
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
    title: dict.industries.detail.commerce.metaTitle,
    description: dict.industries.detail.commerce.metaDescription,
    alternates: {
      canonical: `/${lang}/industries/commerce`,
      languages: {
        en: "/en/industries/commerce",
        fr: "/fr/industries/commerce",
        "x-default": "/en/industries/commerce",
      },
    },
    openGraph: {
      title: dict.industries.detail.commerce.metaTitle,
      description: dict.industries.detail.commerce.metaDescription,
      type: "website",
    },
  };
}

export default async function CommercePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const industry = getIndustryBySlug(lang, "commerce");
  const { hero, useCases, approach, restrainedInvite, closing } =
    getIndustryContent(lang, "commerce");

  return (
    <>
      <IndustryDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        icon={industry.icon}
        editorial={editorial.commerceRestaurant}
      />

      <PillarsSection
        eyebrow={useCases.heading}
        heading={dict.industries.detail.useCases}
        supporting={useCases.supporting}
        items={useCases.items}
        columns="auto"
        tone="surface"
      />

      <ProcessSteps
        eyebrow={approach.heading}
        heading={dict.industries.detail.howWeApproachIt}
        supporting={approach.supporting}
        steps={approach.steps}
        tone="default"
      />

      {restrainedInvite ? (
        <RestrainedInvite
          eyebrow={restrainedInvite.eyebrow}
          heading={restrainedInvite.heading}
          body={restrainedInvite.body}
          cta={restrainedInvite.cta}
          href={restrainedInvite.href}
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
