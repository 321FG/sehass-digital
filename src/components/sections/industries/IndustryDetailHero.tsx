import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryIcon } from "@/components/sections/industries/IndustryIcon";
import { EditorialHeroCard } from "@/components/ui/EditorialImage";
import { cn } from "@/lib/utils";
import type { EditorialAsset } from "@/data/editorial";
import type { IndustryIconName } from "@/data/industries";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

const primary = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-base font-medium text-brand-foreground",
  "shadow-(--shadow-sm) transition-colors duration-150",
  "hover:bg-brand-hover active:translate-y-px",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const outline = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border-strong bg-background px-6 text-base font-medium text-foreground",
  "transition-colors duration-150 hover:bg-surface hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export async function IndustryDetailHero({
  eyebrow,
  title,
  supporting,
  icon,
  editorial,
  primaryCTA,
  secondaryCTA,
}: {
  eyebrow: string;
  title: string;
  supporting: string;
  icon: IndustryIconName;
  editorial?: EditorialAsset;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}) {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const primaryCta = primaryCTA ?? {
    label: dict.industries.detail.startProject,
    href: `/${lang}/contact`,
  };
  const secondaryCta = secondaryCTA ?? {
    label: dict.industries.detail.exploreSolutions,
    href: `/${lang}/solutions`,
  };
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <span aria-hidden className="h-px w-6 bg-border-strong" />
                {eyebrow}
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {supporting}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <NextLink href={primaryCta.href} className={primary}>
                {primaryCta.label}
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NextLink>
              {secondaryCta ? (
                <NextLink href={secondaryCta.href} className={outline}>
                  {secondaryCta.label}
                </NextLink>
              ) : null}
            </div>
          </div>

          <div className="flex items-center justify-center">
            {editorial ? (
              <EditorialHeroCard asset={editorial} priority />
            ) : (
              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-border bg-surface-elevated">
                <div
                  aria-hidden
                  className="absolute inset-6 rounded-2xl border border-border"
                />
                <div
                  aria-hidden
                  className="absolute inset-12 rounded-xl border border-border"
                />
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-border-strong bg-background text-foreground">
                  <IndustryIcon name={icon} className="h-8 w-8" />
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
