import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const cta = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-background px-5 text-sm font-medium text-foreground",
  "transition-colors duration-150 hover:bg-surface hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export function RestrainedInvite({
  eyebrow,
  heading,
  body,
  cta: ctaLabel,
  href,
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="restrained-invite">
      <Container size="md">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-surface-elevated p-8 md:p-12 lg:p-14">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="restrained-invite"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
          <NextLink href={href} className={cta}>
            {ctaLabel}
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
        </div>
      </Container>
    </Section>
  );
}
