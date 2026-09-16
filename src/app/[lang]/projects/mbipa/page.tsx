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
    title: dict.projects.mbipa.metaTitle,
    description: dict.projects.mbipa.metaDescription,
    alternates: {
      canonical: `/${lang}/projects/mbipa`,
      languages: {
        en: "/en/projects/mbipa",
        fr: "/fr/projects/mbipa",
        "x-default": "/en/projects/mbipa",
      },
    },
    openGraph: {
      title: dict.projects.mbipa.metaTitle,
      description: dict.projects.mbipa.metaDescription,
      type: "website",
    },
  };
}

export default async function MbipaProjectPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ProjectCaseStudy project={getProjectBySlug(lang, "mbipa")} />;
}
