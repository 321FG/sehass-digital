import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { IndustryIcon } from "@/components/sections/industries/IndustryIcon";
import { cn } from "@/lib/utils";
import { getSolutionBySlug } from "@/data/solutions";
import type { IndustryOverview } from "@/data/industries";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

const linkClass = cn(
  "group relative flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface-elevated p-8 transition-colors duration-150",
  "hover:border-border-strong hover:bg-surface",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function IndustryCard({
  industry,
  dict,
  lang,
}: {
  industry: IndustryOverview;
  dict: Dictionary;
  lang: Locale;
}) {
  const solution =
    industry.feature?.kind === "solution"
      ? getSolutionBySlug(lang, industry.feature.solutionSlug)
      : undefined;

  return (
    <NextLink href={industry.href} className={linkClass}>
      <div className="flex items-center justify-between">
        <span
          aria-hidden
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-foreground/80"
        >
          <IndustryIcon name={industry.icon} className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {dict.industries.card.industry}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {industry.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {industry.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {industry.capabilities.map((c) => (
          <li
            key={c}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
          >
            {c}
          </li>
        ))}
      </ul>

      {solution ? (
        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-5">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {dict.industries.card.featuredSolution}
          </span>
          <span className="font-display text-base font-semibold text-foreground">
            {solution.name}
          </span>
        </div>
      ) : industry.feature?.kind === "upcoming" ? (
        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-5">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {dict.industries.card.featuredSolution}
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-display text-base font-semibold text-foreground">
              {industry.feature.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {industry.feature.note}
            </span>
          </div>
        </div>
      ) : null}

      <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground">
        {industry.ctaLabel}
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        >
          <path
            d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </NextLink>
  );
}

export async function IndustryOverviewGrid({
  industries,
}: {
  industries: IndustryOverview[];
}) {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="industry-grid">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {dict.industries.overview.eyebrow}
          </span>
          <h2
            id="industry-grid"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {dict.industries.overview.heading}
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug} className="flex">
              <IndustryCard industry={industry} dict={dict} lang={lang} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
