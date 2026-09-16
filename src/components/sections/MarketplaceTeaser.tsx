import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function MarketplaceTeaser() {
  const dict = await getDictionary();
  const t = dict.home.marketplace;
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="marketplace-heading">
      <Container size="lg">
        <div className="flex flex-col gap-8 rounded-3xl border border-border bg-surface-elevated p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12 lg:p-14">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="marketplace-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
            >
              {t.heading}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.subheading}
            </p>
          </div>

          <CTA
            href={siteConfig.marketplace.href}
            variant="outline"
            size="lg"
          >
            {t.cta}
          </CTA>
        </div>
      </Container>
    </Section>
  );
}
