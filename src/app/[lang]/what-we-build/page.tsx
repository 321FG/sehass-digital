import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/wwb/ApproachSection";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { OverviewCapabilities } from "@/components/sections/wwb/OverviewCapabilities";
import { OverviewHero } from "@/components/sections/wwb/OverviewHero";
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
    title: dict.wwb.overview.metaTitle,
    description: dict.wwb.overview.metaDescription,
    alternates: {
      canonical: `/${lang}/what-we-build`,
      languages: {
        en: "/en/what-we-build",
        fr: "/fr/what-we-build",
        "x-default": "/en/what-we-build",
      },
    },
    openGraph: {
      title: dict.wwb.overview.metaTitle,
      description: dict.wwb.overview.metaDescription,
      type: "website",
    },
  };
}

export default async function WhatWeBuildPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <OverviewHero />
      <EditorialBandSection asset={editorial.codeCloseUp} tone="surface" />
      <OverviewCapabilities />
      <ApproachSection />
      <ClosingCTA
        heading={dict.sections.haveProblemHeading}
        supporting={dict.sections.letsBuildBody}
        cta={dict.sections.startProject}
        secondary={{ label: dict.sections.talkToSehass, href: `/${lang}/about` }}
      />
    </>
  );
}
