import type { Metadata } from "next";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { getProjects } from "@/data/projects";
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
    title: dict.projects.metaTitle,
    description: dict.projects.metaDescription,
    alternates: {
      canonical: `/${lang}/projects`,
      languages: {
        en: "/en/projects",
        fr: "/fr/projects",
        "x-default": "/en/projects",
      },
    },
    openGraph: {
      title: dict.projects.metaTitle,
      description: dict.projects.metaDescription,
      type: "website",
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={getProjects(lang)} />
      <ClosingCTA
        heading={dict.sections.haveProblemHeading}
        supporting={dict.sections.letsBuildBody}
        cta={dict.sections.startProject}
      />
    </>
  );
}
