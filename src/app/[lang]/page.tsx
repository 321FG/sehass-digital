import type { Metadata } from "next";
import { AISection } from "@/components/sections/AISection";
import { Capabilities } from "@/components/sections/Capabilities";
import { FeaturedSolution } from "@/components/sections/FeaturedSolution";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { MarketplaceTeaser } from "@/components/sections/MarketplaceTeaser";
import { Proof } from "@/components/sections/Proof";
import { WhySehass } from "@/components/sections/WhySehass";
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
    title: dict.metadata.homeTitle,
    description: dict.metadata.homeDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/en",
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedSolution />
      <AISection />
      <Proof />
      <Industries />
      <EditorialBandSection asset={editorial.digitalTransformation} />
      <WhySehass />
      <MarketplaceTeaser />
      <FinalCTA />
    </>
  );
}

