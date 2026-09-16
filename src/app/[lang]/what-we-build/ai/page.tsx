import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/sections/wwb/CapabilitiesGrid";
import { CapabilityHero } from "@/components/sections/wwb/CapabilityHero";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { PullQuote } from "@/components/sections/wwb/PullQuote";
import { RelevantWork } from "@/components/sections/wwb/RelevantWork";
import { getAiUseCases, getCapability } from "@/data/what-we-build";
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
    title: dict.wwb.ai.metaTitle,
    description: dict.wwb.ai.metaDescription,
    alternates: {
      canonical: `/${lang}/what-we-build/ai`,
      languages: {
        en: "/en/what-we-build/ai",
        fr: "/fr/what-we-build/ai",
        "x-default": "/en/what-we-build/ai",
      },
    },
    openGraph: {
      title: dict.wwb.ai.metaTitle,
      description: dict.wwb.ai.metaDescription,
      type: "website",
    },
  };
}

export default async function AIPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const capability = getCapability(lang, "ai");
  if (!capability) notFound();
  return (
    <>
      <CapabilityHero
        capability={capability}
        editorial={editorial.aiCollaboration}
      />
      <CapabilitiesGrid
        eyebrow={dict.wwb.overview.eyebrow}
        heading={dict.wwb.ai.capabilitiesHeading}
        items={capability.items}
      />
      <ProcessSteps
        eyebrow={dict.wwb.ai.processEyebrow}
        heading={capability.process.heading}
        steps={capability.process.steps}
        tone="surface"
      />
      <PillarsSection
        eyebrow={dict.wwb.ai.pillarsEyebrow}
        heading={dict.wwb.ai.pillarsHeading}
        supporting={dict.wwb.ai.pillarsSupporting}
        items={getAiUseCases(lang)}
        columns="auto"
        tone="default"
      />
      <PullQuote quote={dict.wwb.ai.pullQuote} />
      <RelevantWork tag="AI" heading={dict.wwb.ai.relevantWorkHeading} />
      <ClosingCTA
        heading={capability.closing.heading}
        cta={capability.closing.cta}
        secondary={{ label: dict.sections.talkToSehass, href: `/${lang}/about` }}
      />
    </>
  );
}
