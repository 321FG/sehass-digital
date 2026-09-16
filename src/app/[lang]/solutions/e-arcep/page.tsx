import type { Metadata } from "next";
import { SolutionDetailHero } from "@/components/sections/solutions/SolutionDetailHero";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { CategoryList } from "@/components/sections/solutions/CategoryList";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getEArcepContent, getSolutionBySlug } from "@/data/solutions";
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
    title: dict.solutions.detail.earcep.metaTitle,
    description: dict.solutions.detail.earcep.metaDescription,
    alternates: {
      canonical: `/${lang}/solutions/e-arcep`,
      languages: {
        en: "/en/solutions/e-arcep",
        fr: "/fr/solutions/e-arcep",
        "x-default": "/en/solutions/e-arcep",
      },
    },
    openGraph: {
      title: dict.solutions.detail.earcep.metaTitle,
      description: dict.solutions.detail.earcep.metaDescription,
      type: "website",
    },
  };
}

export default async function EArcepPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const summary = getSolutionBySlug(lang, "e-arcep");
  const { hero, how, technology, closing } = getEArcepContent(lang);

  return (
    <>
      <SolutionDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        status={summary.status}
        statusLabel={summary.statusLabel}
        platforms={summary.platforms}
        image={hero.image}
        primaryCTA={{ label: closing.cta, href: `/${lang}/contact` }}
      />

      <ProcessSteps
        eyebrow={how.heading}
        heading={dict.solutions.detail.earcep.howHeading}
        supporting={how.body}
        steps={[...how.steps]}
        tone="surface"
      />

      <CategoryList
        eyebrow={technology.heading}
        heading={dict.solutions.detail.earcep.technologyHeading}
        body={technology.body}
        categories={technology.categories}
        tone="default"
      />

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta}
      />
    </>
  );
}
