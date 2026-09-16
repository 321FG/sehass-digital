import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import { ExternalLinks } from "@/components/sections/solutions/ExternalLinks";
import { cn } from "@/lib/utils";
import type { SolutionSummary } from "@/data/solutions";
import { getDictionary } from "@/app/[lang]/dictionaries";

const ctaClass = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-base font-medium text-brand-foreground",
  "shadow-(--shadow-sm) transition-colors duration-150",
  "hover:bg-brand-hover active:translate-y-px",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export async function SolutionSummaryPanel({
  solution,
  index,
}: {
  solution: SolutionSummary;
  index: number;
}) {
  const dict = await getDictionary();
  const reverse = index % 2 === 1;
  return (
    <article
      className={cn(
        "grid gap-8 rounded-3xl border border-border bg-surface-elevated p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 lg:p-14",
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center gap-6",
          reverse ? "lg:order-2" : "",
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {solution.kind === "project" ? dict.solutions.ongoingProject : solution.category}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {solution.name}
          </h2>
          <p className="text-base font-medium text-foreground/80 md:text-lg">
            {solution.subtitle}
          </p>
        </div>

        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {solution.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {solution.featureHighlights.map((f) => (
            <li
              key={f}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
            >
              {f}
            </li>
          ))}
        </ul>

        {solution.platforms && solution.platforms.length > 0 ? (
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {dict.solutions.platforms} &middot;{" "}
            <span className="text-foreground/80">
              {solution.platforms.join(" · ")}
            </span>
          </p>
        ) : null}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <NextLink href={solution.href} className={ctaClass}>
            {solution.ctaLabel}
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
          {solution.externalLinks && solution.externalLinks.length > 0 ? (
            <ExternalLinks links={solution.externalLinks} variant="outline" />
          ) : null}
        </div>
      </div>

      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-surface p-6 md:p-10",
          reverse ? "lg:order-1" : "",
        )}
      >
        <PhoneFrame
          src={solution.heroImage.src}
          alt={solution.heroImage.alt}
          className="max-w-64 md:max-w-72"
        />
      </div>
    </article>
  );
}

export function SolutionsList({
  solutions,
  heading,
  eyebrow,
  kind,
}: {
  solutions: SolutionSummary[];
  heading: string;
  eyebrow: string;
  kind: "solution" | "project";
}) {
  const filtered = solutions.filter((s) => s.kind === kind);
  if (filtered.length === 0) return null;
  return (
    <Section
      tone={kind === "solution" ? "surface" : "default"}
      spacing="lg"
      aria-labelledby={`sol-list-${kind}`}
    >
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id={`sol-list-${kind}`}
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
        </div>
        <ul className="flex flex-col gap-6">
          {filtered.map((s, i) => (
            <li key={s.slug}>
              <SolutionSummaryPanel solution={s} index={i} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
