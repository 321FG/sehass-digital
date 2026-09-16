import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { QuickPaths } from "@/components/sections/contact/QuickPaths";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";
import { ContactForm } from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        en: "/en/contact",
        fr: "/fr/contact",
        "x-default": "/en/contact",
      },
    },
    openGraph: {
      title: dict.contact.metaTitle,
      description: dict.contact.metaDescription,
      type: "website",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <ContactHero />

      <Section spacing="md" aria-label="Contact and project form">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
            <ContactInfo />
            <ContactForm dict={dict.contact.form} lang={lang} />
          </div>
        </Container>
      </Section>

      <QuickPaths />
      <ContactFinalCTA />
    </>
  );
}
