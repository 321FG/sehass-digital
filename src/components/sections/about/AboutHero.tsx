import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

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

function ArrowRight() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
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

export function AboutHero({
  eyebrow,
  title,
  supporting,
  positioning,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  supporting: string;
  positioning: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-8">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {supporting}
          </p>

          <p className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">
            <span aria-hidden className="mr-3 inline-block h-px w-6 -translate-y-1 bg-foreground/40 align-middle" />
            {positioning}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NextLink href={primaryCta.href} className={primary}>
              {primaryCta.label}
              <ArrowRight />
            </NextLink>
            <NextLink href={secondaryCta.href} className={outline}>
              {secondaryCta.label}
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
