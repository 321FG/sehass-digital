import Image from "next/image";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4", className)}
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

const outline = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-background px-5 text-sm font-medium text-foreground",
  "transition-colors duration-150 hover:bg-surface hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

/**
 * "Real work" section for the About page. Reuses project card data from
 * `src/data/projects.ts` but with an About-page-specific intro so it does
 * not duplicate the projects index heading.
 */
export function AboutRealWork({
  eyebrow,
  heading,
  supporting,
  projects,
  cta,
}: {
  eyebrow: string;
  heading: string;
  supporting: string;
  projects: readonly Project[];
  cta: { label: string; href: string };
}) {
  return (
    <Section tone="default" spacing="lg" aria-labelledby="about-real-work">
      <Container size="lg">
        <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="about-real-work"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {supporting}
            </p>
            <div>
              <NextLink href={cta.href} className={outline}>
                {cta.label}
                <ArrowRight />
              </NextLink>
            </div>
          </div>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="h-full">
              <NextLink
                href={p.href}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated",
                  "transition-colors duration-150 hover:border-foreground/30",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                <div className="relative aspect-9/16 w-full overflow-hidden bg-surface">
                  <Image
                    src={p.card.image.src}
                    alt={p.card.image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-6 md:p-8"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 border-t border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {p.card.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {p.card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.card.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-foreground">
                    {p.card.ctaLabel}
                    <ArrowRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </NextLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
