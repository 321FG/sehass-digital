import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { getDictionary } from "@/app/[lang]/dictionaries";

const relatedLinkClass = cn(
  "group flex flex-col gap-3 rounded-2xl border border-border bg-background p-6",
  "transition-colors duration-150 hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function ArrowRight() {
  return (
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
  );
}

export async function RelatedContent({ related }: { related: Project["related"] }) {
  const dict = await getDictionary();
  const r = dict.projects.related;
  const { solution, industry, capabilities } = related;
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="related-heading">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {r.eyebrow}
          </span>
          <h2
            id="related-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {r.heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solution ? (
            <NextLink href={solution.href} className={relatedLinkClass}>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {solution.kind === "project" ? r.project : r.solution}
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                {solution.label}
              </span>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
                {r.view} <ArrowRight />
              </span>
            </NextLink>
          ) : null}

          <NextLink href={industry.href} className={relatedLinkClass}>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {r.industry}
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              {industry.label}
            </span>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
              {r.view} <ArrowRight />
            </span>
          </NextLink>

          <div className={cn(relatedLinkClass, "hover:border-border")}>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {r.capabilities}
            </span>
            <ul className="flex flex-col gap-2">
              {capabilities.map((cap) => (
                <li key={cap.href}>
                  <NextLink
                    href={cap.href}
                    className={cn(
                      "inline-flex items-center gap-2 text-base font-medium text-foreground",
                      "transition-colors duration-150 hover:text-foreground/70",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
                    )}
                  >
                    {cap.label}
                    <ArrowRight />
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
