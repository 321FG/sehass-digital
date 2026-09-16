import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/lib/variants";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/app/[lang]/dictionaries";

const eyebrowClass =
  "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground";

export async function ContactHero() {
  const dict = await getDictionary();
  const t = dict.contact.hero;
  const whatsappHref = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefill,
  )}`;

  return (
    <Section id="main" spacing="lg" aria-labelledby="contact-hero-heading">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className={eyebrowClass}>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            {t.eyebrow}
          </span>
          <h1
            id="contact-hero-heading"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t.heading}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.body}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#project-form"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-6 text-base",
              )}
            >
              {t.ctaPrimary}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 text-base",
              )}
            >
              {t.ctaWhatsApp}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
