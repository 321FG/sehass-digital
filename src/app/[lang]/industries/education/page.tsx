import type { Metadata } from "next";
import { IndustryDetailHero } from "@/components/sections/industries/IndustryDetailHero";
import { PillarsSection } from "@/components/sections/wwb/PillarsSection";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { RestrainedInvite } from "@/components/sections/industries/RestrainedInvite";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getIndustryBySlug, getIndustryContent } from "@/data/industries";
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
    title: dict.industries.detail.education.metaTitle,
    description: dict.industries.detail.education.metaDescription,
    alternates: {
      canonical: `/${lang}/industries/education`,
      languages: {
        en: "/en/industries/education",
        fr: "/fr/industries/education",
        "x-default": "/en/industries/education",
      },
    },
    openGraph: {
      title: dict.industries.detail.education.metaTitle,
      description: dict.industries.detail.education.metaDescription,
      type: "website",
    },
  };
}

export default async function EducationPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const industry = getIndustryBySlug(lang, "education");
  const { hero, useCases, approach, restrainedInvite, closing } =
    getIndustryContent(lang, "education");

  return (
    <>
      <IndustryDetailHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        supporting={hero.supporting}
        icon={industry.icon}
        editorial={editorial.educationStudents}
      />

      <PillarsSection
        eyebrow={useCases.heading}
        heading={dict.industries.detail.useCasesBuild}
        supporting={useCases.supporting}
        items={useCases.items}
        columns="auto"
        tone="surface"
      />

      {useCases.note ? (
        <Section tone="surface" spacing="sm" aria-labelledby="edu-note">
          <Container size="md">
            <p
              id="edu-note"
              className="rounded-xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-muted-foreground"
            >
              {useCases.note}
            </p>
          </Container>
        </Section>
      ) : null}

      <ProcessSteps
        eyebrow={approach.heading}
        heading={dict.industries.detail.howWeApproachIt}
        supporting={approach.supporting}
        steps={approach.steps}
        tone="default"
      />

      {restrainedInvite ? (
        <RestrainedInvite
          eyebrow={restrainedInvite.eyebrow}
          heading={restrainedInvite.heading}
          body={restrainedInvite.body}
          cta={restrainedInvite.cta}
          href={restrainedInvite.href}
          tone="surface"
        />
      ) : null}

      <ClosingCTA
        heading={closing.heading}
        supporting={closing.supporting}
        cta={closing.cta}
      />
    </>
  );
}
