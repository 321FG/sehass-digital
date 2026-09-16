import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

const emailLinkClass =
  "text-foreground underline underline-offset-4 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        en: "/en/privacy",
        fr: "/fr/privacy",
        "x-default": "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage() {
  const dict = await getDictionary();
  const t = dict.privacy;
  const email = siteConfig.contact.email;
  const emailHref = `mailto:${email}`;

  return (
    <>
      <Section id="main" tone="default" spacing="lg">
        <Container size="md">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {t.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
              {t.heading}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.intro}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {t.lastUpdatedLabel} {t.lastUpdatedDate}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container size="md">
          <div className="flex flex-col gap-12">
            <section aria-labelledby="p-who" className="flex flex-col gap-3">
              <h2
                id="p-who"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.who.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.who.before}
                <a href={emailHref} className={emailLinkClass}>
                  {email}
                </a>
                {t.who.after}
              </p>
            </section>

            <section aria-labelledby="p-form" className="flex flex-col gap-3">
              <h2
                id="p-form"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.form.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.form.intro}
              </p>
              <ul className="ml-5 list-disc space-y-1 text-base leading-relaxed text-muted-foreground">
                {t.form.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.form.useDisclaimer}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.form.endpointNote}
              </p>
            </section>

            <section aria-labelledby="p-email" className="flex flex-col gap-3">
              <h2
                id="p-email"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.emailWhatsapp.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.emailWhatsapp.body}
              </p>
            </section>

            <section aria-labelledby="p-cookies" className="flex flex-col gap-3">
              <h2
                id="p-cookies"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.cookies.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.cookies.body}
              </p>
            </section>

            <section
              aria-labelledby="p-third-parties"
              className="flex flex-col gap-3"
            >
              <h2
                id="p-third-parties"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.thirdParties.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.thirdParties.body1}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.thirdParties.body2}
              </p>
            </section>

            <section aria-labelledby="p-rights" className="flex flex-col gap-3">
              <h2
                id="p-rights"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.rights.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.rights.before}
                <a href={emailHref} className={emailLinkClass}>
                  {email}
                </a>
                {t.rights.middle}
                {t.rights.after}
              </p>
            </section>

            <section aria-labelledby="p-changes" className="flex flex-col gap-3">
              <h2
                id="p-changes"
                className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                {t.changes.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.changes.body}
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
