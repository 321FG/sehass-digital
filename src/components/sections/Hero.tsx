import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { InterfaceMock } from "@/components/ui/InterfaceMock";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function Hero() {
  const dict = await getDictionary();
  const lang = await getLocale();
  const t = dict.home.hero;
  return (
    <Section id="main" tone="default" spacing="lg" className="relative">
      <Container size="lg">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="motion-fade-up inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {t.eyebrow}
            </span>

            <h1 className="motion-fade-up font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl [animation-delay:80ms]">
              {t.heading}
            </h1>

            <p className="motion-fade-up max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg [animation-delay:160ms]">
              {t.subheading}
            </p>

            <div className="motion-fade-up flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center [animation-delay:240ms]">
              <CTA href={`/${lang}/contact`} variant="primary" size="lg">
                {t.ctaPrimary}
              </CTA>
              <CTA
                href={`/${lang}/what-we-build`}
                variant="outline"
                size="lg"
                withArrow={false}
              >
                {t.ctaSecondary}
              </CTA>
            </div>
          </div>

          <div className="motion-fade-up relative [animation-delay:200ms]">
            <InterfaceMock />
          </div>
        </div>
      </Container>
    </Section>
  );
}
