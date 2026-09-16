import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FacebookFollow } from "@/components/sections/insights/FacebookFollow";
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
    title: dict.insights.metaTitle,
    description: dict.insights.metaDescription,
    alternates: {
      canonical: `/${lang}/insights`,
      languages: {
        en: "/en/insights",
        fr: "/fr/insights",
        "x-default": "/en/insights",
      },
    },
    openGraph: {
      title: dict.insights.metaTitle,
      description: dict.insights.metaDescription,
      type: "website",
    },
  };
}

export default async function InsightsPage() {
  const dict = await getDictionary();
  const t = dict.insights;
  return (
    <>
      <Section id="main" tone="default" spacing="lg">
        <Container size="lg">
          <div className="flex max-w-3xl flex-col gap-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {t.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t.heading}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.subheading}
            </p>
          </div>
        </Container>
      </Section>

      <FacebookFollow dict={t.facebook} />
    </>
  );
}
