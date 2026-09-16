import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/sections/wwb/CapabilitiesGrid";
import { CapabilityHero } from "@/components/sections/wwb/CapabilityHero";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { RelevantWork } from "@/components/sections/wwb/RelevantWork";
import { getCapability, getTransformationAreas } from "@/data/what-we-build";
import { EditorialBandSection } from "@/components/ui/EditorialImage";
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
    title: dict.wwb.digitalTransformation.metaTitle,
    description: dict.wwb.digitalTransformation.metaDescription,
    alternates: {
      canonical: `/${lang}/what-we-build/digital-transformation`,
      languages: {
        en: "/en/what-we-build/digital-transformation",
        fr: "/fr/what-we-build/digital-transformation",
        "x-default": "/en/what-we-build/digital-transformation",
      },
    },
    openGraph: {
      title: dict.wwb.digitalTransformation.metaTitle,
      description: dict.wwb.digitalTransformation.metaDescription,
      type: "website",
    },
  };
}

export default async function DigitalTransformationPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const capability = getCapability(lang, "digital-transformation");
  if (!capability) notFound();
  return (
    <>
      <CapabilityHero
        capability={capability}
        editorial={editorial.dataCenterTechnician}
      />
      <CapabilitiesGrid
        eyebrow={dict.wwb.overview.eyebrow}
        heading={dict.wwb.digitalTransformation.capabilitiesHeading}
        items={capability.items}
      />
      <ProcessSteps
        eyebrow={capability.process.eyebrow}
        heading={capability.process.heading}
        steps={capability.process.steps}
        tone="surface"
      />
      <PillarsSection
        eyebrow={dict.wwb.digitalTransformation.pillarsEyebrow}
        heading={dict.wwb.digitalTransformation.pillarsHeading}
        items={getTransformationAreas(lang)}
        columns={5}
        tone="default"
      />
      <EditorialBandSection asset={editorial.cloudNetwork} tone="surface" />
      <RelevantWork
        heading={dict.wwb.digitalTransformation.relevantWorkHeading}
      />
      <ClosingCTA
        heading={capability.closing.heading}
        cta={capability.closing.cta}
        secondary={{
          label: dict.wwb.digitalTransformation.closingSecondary,
          href: `/${lang}/contact`,
        }}
        href={`/${lang}/about`}
      />
    </>
  );
}
