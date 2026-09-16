import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { CapabilityVisual } from "@/components/sections/wwb/CapabilityVisual";
import { EditorialHeroCard } from "@/components/ui/EditorialImage";
import type { EditorialAsset } from "@/data/editorial";
import type { Capability } from "@/data/what-we-build";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function CapabilityHero({
  capability,
  editorial,
}: {
  capability: Capability;
  editorial?: EditorialAsset;
}) {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              {capability.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {capability.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {capability.summary}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CTA href={`/${lang}/contact`} variant="primary" size="lg">
                {dict.sections.startProject}
              </CTA>
              <CTA
                href={`/${lang}/projects`}
                variant="outline"
                size="lg"
                withArrow={false}
              >
                {dict.sections.viewProjects}
              </CTA>
            </div>
          </div>
          <div className="relative">
            {editorial ? (
              <EditorialHeroCard asset={editorial} priority />
            ) : (
              <CapabilityVisual variant={capability.visualVariant} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
