import type { Metadata } from "next";
import { pageOgSite } from "@/lib/metadata";
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
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
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
    openGraph: {
      ...pageOgSite(lang),
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
      type: "website",
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: dict.metadata.homeDescription,
        email: siteConfig.contact.email,
        logo: `${siteConfig.url}/icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: dict.metadata.homeDescription,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: ["en", "fr"],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <FeaturedSolution />
      </Reveal>
      <Reveal>
        <AISection />
      </Reveal>
      <Reveal>
        <Proof />
      </Reveal>
      <Reveal>
        <Industries />
      </Reveal>
      <Reveal>
        <EditorialBandSection asset={editorial.digitalTransformation} />
      </Reveal>
      <Reveal>
        <WhySehass />
      </Reveal>
      <MarketplaceTeaser />
      <FinalCTA />
    </>
  );
}

