import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutNarrative } from "@/components/sections/about/AboutNarrative";
import { AboutPullStatement } from "@/components/sections/about/AboutPullStatement";
import { AboutProducts } from "@/components/sections/about/AboutProducts";
import { AboutPrinciples } from "@/components/sections/about/AboutPrinciples";
import { AboutCapabilities } from "@/components/sections/about/AboutCapabilities";
import { AboutAiApproach } from "@/components/sections/about/AboutAiApproach";
import { AboutRealWork } from "@/components/sections/about/AboutRealWork";
import { AboutJourney } from "@/components/sections/about/AboutJourney";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutMissionVision } from "@/components/sections/about/AboutMissionVision";
import { AboutBrandMark } from "@/components/sections/about/AboutBrandMark";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getAboutContent } from "@/data/about";
import { getProjects } from "@/data/projects";
import { EditorialBandSection } from "@/components/ui/EditorialImage";
import { editorial } from "@/data/editorial";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const content = getAboutContent(lang);
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        en: "/en/about",
        fr: "/fr/about",
        "x-default": "/en/about",
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: "website",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const {
    hero,
    startingPoint,
    fromCarToWorld,
    whySehassExists,
    beliefs,
    smallByDesign,
    engineeringMindset,
    aiApproach,
    realWork,
    builtHereFirst,
    values,
    missionVision,
    brandMark,
    closing,
    ambitionEyebrow,
  } = getAboutContent(lang);

  return (
    <>
      <AboutHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        positioning={hero.positioning}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <EditorialBandSection asset={editorial.aiCollaboration} />

      <AboutNarrative
        eyebrow={startingPoint.eyebrow}
        heading={startingPoint.heading}
        paragraphs={startingPoint.body}
        tone="surface"
      />

      <AboutPullStatement
        eyebrow={ambitionEyebrow}
        lead={startingPoint.pullQuote.lead}
        accent={startingPoint.pullQuote.accent}
        tone="brand"
      />

      <AboutNarrative
        eyebrow={fromCarToWorld.eyebrow}
        heading={fromCarToWorld.heading}
        paragraphs={fromCarToWorld.body}
        tone="default"
      />

      <AboutProducts
        eyebrow={whySehassExists.eyebrow}
        heading={whySehassExists.heading}
        body={whySehassExists.body}
        products={whySehassExists.products}
        tone="surface"
      />

      <AboutPrinciples
        eyebrow={beliefs.eyebrow}
        heading={beliefs.heading}
        principles={beliefs.principles}
        tone="default"
      />

      <AboutNarrative
        eyebrow={smallByDesign.eyebrow}
        heading={smallByDesign.heading}
        paragraphs={smallByDesign.body}
        tone="surface"
      />

      <AboutCapabilities
        eyebrow={engineeringMindset.eyebrow}
        heading={engineeringMindset.heading}
        supporting={engineeringMindset.supporting}
        capabilities={engineeringMindset.capabilities}
        cta={engineeringMindset.cta}
        tone="default"
      />

      <AboutAiApproach
        eyebrow={aiApproach.eyebrow}
        heading={aiApproach.heading}
        paragraphs={aiApproach.body}
        examples={aiApproach.examples}
        tone="surface"
      />

      <AboutRealWork
        eyebrow={realWork.eyebrow}
        heading={realWork.heading}
        supporting={realWork.supporting}
        projects={getProjects(lang)}
        cta={realWork.cta}
      />

      <AboutJourney
        eyebrow={builtHereFirst.eyebrow}
        lead={builtHereFirst.lead}
        accent={builtHereFirst.accent}
        body={builtHereFirst.body}
        steps={builtHereFirst.steps}
      />

      <AboutValues
        eyebrow={values.eyebrow}
        heading={values.heading}
        values={values.items}
        tone="default"
      />

      <AboutMissionVision
        mission={missionVision.mission}
        vision={missionVision.vision}
        tone="surface"
      />

      <AboutBrandMark
        eyebrow={brandMark.eyebrow}
        heading={brandMark.heading}
        body={brandMark.body}
        image={brandMark.image}
      />

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta.label}
        href={closing.cta.href}
        secondary={closing.secondary}
      />
    </>
  );
}
