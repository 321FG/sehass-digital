import type { Metadata } from "next";
import { ProjectCaseStudy } from "@/components/sections/projects/ProjectCaseStudy";
import { getProjectBySlug } from "@/data/projects";
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
    title: dict.projects.amal.metaTitle,
    description: dict.projects.amal.metaDescription,
    alternates: {
      canonical: `/${lang}/projects/amal-ai`,
      languages: {
        en: "/en/projects/amal-ai",
        fr: "/fr/projects/amal-ai",
        "x-default": "/en/projects/amal-ai",
      },
    },
    openGraph: {
      title: dict.projects.amal.metaTitle,
      description: dict.projects.amal.metaDescription,
      type: "website",
    },
  };
}

export default async function AmalProjectPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ProjectCaseStudy project={getProjectBySlug(lang, "amal-ai")} />;
}
