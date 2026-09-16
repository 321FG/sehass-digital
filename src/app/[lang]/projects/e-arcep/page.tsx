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
    title: dict.projects.earcep.metaTitle,
    description: dict.projects.earcep.metaDescription,
    alternates: {
      canonical: `/${lang}/projects/e-arcep`,
      languages: {
        en: "/en/projects/e-arcep",
        fr: "/fr/projects/e-arcep",
        "x-default": "/en/projects/e-arcep",
      },
    },
    openGraph: {
      title: dict.projects.earcep.metaTitle,
      description: dict.projects.earcep.metaDescription,
      type: "website",
    },
  };
}

export default async function EArcepProjectPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ProjectCaseStudy project={getProjectBySlug(lang, "e-arcep")} />;
}
