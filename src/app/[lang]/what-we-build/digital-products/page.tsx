import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/sections/wwb/CapabilitiesGrid";
import { CapabilityHero } from "@/components/sections/wwb/CapabilityHero";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { RelevantWork } from "@/components/sections/wwb/RelevantWork";
import { getCapability, getProductPrinciples } from "@/data/what-we-build";
import { editorial } from "@/data/editorial";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.wwb.digitalProducts.metaTitle,
    description: dict.wwb.digitalProducts.metaDescription,
    alternates: {
      canonical: `/${lang}/what-we-build/digital-products`,
      languages: {
        en: "/en/what-we-build/digital-products",
        fr: "/fr/what-we-build/digital-products",
        "x-default": "/en/what-we-build/digital-products",
      },
    },
    openGraph: {
      title: dict.wwb.digitalProducts.metaTitle,
      description: dict.wwb.digitalProducts.metaDescription,
      type: "website",
    },
  };
}

export default async function DigitalProductsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const capability = getCapability(lang, "digital-products");
  if (!capability) notFound();
  return (
    <>
      <CapabilityHero
        capability={capability}
        editorial={editorial.humanSmartphone}
      />
      <CapabilitiesGrid
        eyebrow={dict.wwb.overview.eyebrow}
        heading={dict.wwb.digitalProducts.capabilitiesHeading}
        items={capability.items}
      />
      <ProcessSteps
        eyebrow={capability.process.eyebrow}
        heading={capability.process.heading}
        steps={capability.process.steps}
        tone="surface"
      />
      <PillarsSection
        eyebrow={dict.wwb.digitalProducts.pillarsEyebrow}
        heading={dict.wwb.digitalProducts.pillarsHeading}
        items={getProductPrinciples(lang)}
        columns={4}
        tone="default"
      />
      <RelevantWork
        tag="Digital Products"
        heading={dict.wwb.digitalProducts.relevantWorkHeading}
      />
      <ClosingCTA
        heading={capability.closing.heading}
        cta={capability.closing.cta}
        secondary={{ label: dict.sections.talkToSehass, href: `/${lang}/about` }}
      />
    </>
  );
}
