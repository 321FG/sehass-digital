import type { Metadata } from "next";
import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { SolutionsList } from "@/components/sections/solutions/SolutionSummary";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getSolutions } from "@/data/solutions";
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
    title: dict.solutions.metaTitle,
    description: dict.solutions.metaDescription,
    alternates: {
      canonical: `/${lang}/solutions`,
      languages: {
        en: "/en/solutions",
        fr: "/fr/solutions",
        "x-default": "/en/solutions",
      },
    },
    openGraph: {
      title: dict.solutions.metaTitle,
      description: dict.solutions.metaDescription,
      type: "website",
    },
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const solutions = getSolutions(lang);
  return (
    <>
      <SolutionsHero />
      <SolutionsList
        solutions={solutions}
        eyebrow={dict.solutions.overviewLive.eyebrow}
        heading={dict.solutions.overviewLive.heading}
        kind="solution"
      />
      <SolutionsList
        solutions={solutions}
        eyebrow={dict.solutions.overviewProjects.eyebrow}
        heading={dict.solutions.overviewProjects.heading}
        kind="project"
      />
      <ClosingCTA
        heading={dict.sections.haveProblemHeading}
        supporting={dict.sections.letsBuildBody}
        cta={dict.sections.startProject}
      />
    </>
  );
}
