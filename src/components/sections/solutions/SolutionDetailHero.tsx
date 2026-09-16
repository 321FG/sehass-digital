import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import { StatusBadge } from "@/components/sections/solutions/StatusBadge";
import { ExternalLinks } from "@/components/sections/solutions/ExternalLinks";
import { cn } from "@/lib/utils";
import type { ExternalLink, SolutionStatus } from "@/data/solutions";
import { getDictionary } from "@/app/[lang]/dictionaries";

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

export async function SolutionDetailHero({
  eyebrow,
  title,
  supporting,
  status,
  statusLabel,
  platforms,
  image,
  primaryCTA,
  secondaryCTA,
  externalLinks,
}: {
  eyebrow: string;
  title: string;
  supporting: string;
  status: SolutionStatus;
  statusLabel: string;
  platforms?: string[];
  image: { src: string; alt: string };
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  externalLinks?: ExternalLink[];
}) {
  const dict = await getDictionary();
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <span aria-hidden className="h-px w-6 bg-border-strong" />
                {eyebrow}
              </span>
              <StatusBadge status={status} label={statusLabel} />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {supporting}
            </p>

            {platforms && platforms.length > 0 ? (
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {dict.solutions.platforms} &middot;{" "}
                <span className="text-foreground/80">
                  {platforms.join(" · ")}
                </span>
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <NextLink href={primaryCTA.href} className={primary}>
                {primaryCTA.label}
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
              {secondaryCTA ? (
                <NextLink href={secondaryCTA.href} className={outline}>
                  {secondaryCTA.label}
                </NextLink>
              ) : null}
            </div>

            {externalLinks && externalLinks.length > 0 ? (
              <div className="pt-2">
                <ExternalLinks links={externalLinks} variant="outline" />
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-center">
            <PhoneFrame
              src={image.src}
              alt={image.alt}
              priority
              className="max-w-72 md:max-w-80"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
