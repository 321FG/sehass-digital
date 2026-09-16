import type { Metadata } from "next";
import { SolutionDetailHero } from "@/components/sections/solutions/SolutionDetailHero";
import { ProblemBuiltSection } from "@/components/sections/solutions/ProblemBuiltSection";
import { FeatureBlock } from "@/components/sections/solutions/FeatureBlock";
import { CategoryList } from "@/components/sections/solutions/CategoryList";
import { AppAvailability } from "@/components/sections/solutions/AppAvailability";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getMbipaContent, getSolutionBySlug } from "@/data/solutions";
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
    title: dict.solutions.detail.mbipa.metaTitle,
    description: dict.solutions.detail.mbipa.metaDescription,
    alternates: {
      canonical: `/${lang}/solutions/mbipa`,
      languages: {
        en: "/en/solutions/mbipa",
        fr: "/fr/solutions/mbipa",
        "x-default": "/en/solutions/mbipa",
      },
    },
    openGraph: {
      title: dict.solutions.detail.mbipa.metaTitle,
      description: dict.solutions.detail.mbipa.metaDescription,
      type: "website",
    },
  };
}

export default async function MbipaPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const summary = getSolutionBySlug(lang, "mbipa");
  const { hero, problem, built, features, builtBy, availability, closing } =
    getMbipaContent(lang);

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
        primaryCTA={{ label: dict.solutions.detail.startProject, href: `/${lang}/contact` }}
        secondaryCTA={{ label: dict.solutions.detail.getInTouch, href: `/${lang}/contact` }}
        externalLinks={summary.externalLinks}
      />

      <ProblemBuiltSection problem={problem} built={built} tone="surface" />

      {features.items.map((feature, i) => (
        <FeatureBlock
          key={feature.title}
          index={i + 1}
          label={i === 0 ? features.heading : undefined}
          title={feature.title}
          body={feature.body}
          note={feature.note}
          images={feature.images}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? "default" : "surface"}
        />
      ))}

      <CategoryList
        eyebrow={builtBy.heading}
        heading={dict.solutions.detail.mbipa.builtByHeading}
        body={builtBy.body}
        categories={builtBy.categories}
        tone="default"
      />

      <AppAvailability
        heading={availability.heading}
        body={availability.body}
        links={summary.externalLinks ?? []}
      />

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta}
      />
    </>
  );
}
