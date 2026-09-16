import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/sections/wwb/CapabilitiesGrid";
import { CapabilityHero } from "@/components/sections/wwb/CapabilityHero";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { RelevantWork } from "@/components/sections/wwb/RelevantWork";
import { TechnologySection } from "@/components/sections/wwb/TechnologySection";
import { EditorialBandSection } from "@/components/ui/EditorialImage";
import { editorial } from "@/data/editorial";
import { getCapability } from "@/data/what-we-build";
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
    title: dict.wwb.software.metaTitle,
    description: dict.wwb.software.metaDescription,
    alternates: {
      canonical: `/${lang}/what-we-build/software`,
      languages: {
        en: "/en/what-we-build/software",
        fr: "/fr/what-we-build/software",
        "x-default": "/en/what-we-build/software",
      },
    },
    openGraph: {
      title: dict.wwb.software.metaTitle,
      description: dict.wwb.software.metaDescription,
      type: "website",
    },
  };
}

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const capability = getCapability(lang, "software");
  if (!capability) notFound();
  return (
    <>
      <CapabilityHero
        capability={capability}
        editorial={editorial.softwareEngineer}
      />
      <CapabilitiesGrid
        eyebrow={dict.wwb.overview.eyebrow}
        heading={dict.wwb.software.capabilitiesHeading}
        items={capability.items}
      />
      <ProcessSteps
        eyebrow={capability.process.eyebrow}
        heading={capability.process.heading}
        steps={capability.process.steps}
      />
      <TechnologySection />
      <EditorialBandSection asset={editorial.codeCloseUp} tone="surface" />
      <RelevantWork tag="Software" heading={dict.wwb.software.relevantWorkHeading} />
      <ClosingCTA
        heading={capability.closing.heading}
        cta={capability.closing.cta}
        secondary={{ label: dict.sections.talkToSehass, href: `/${lang}/about` }}
      />
    </>
  );
}
