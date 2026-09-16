import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const outline = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-background px-5 text-sm font-medium text-foreground",
  "transition-colors duration-150 hover:bg-surface hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

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

export function AboutCapabilities({
  eyebrow,
  heading,
  supporting,
  capabilities,
  cta,
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  supporting?: string;
  capabilities: { label: string }[];
  cta?: { label: string; href: string };
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-caps">
      <Container size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="about-caps"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {heading}
            </h2>
            {supporting ? (
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {supporting}
              </p>
            ) : null}
            {cta ? (
              <div className="pt-2">
                <NextLink href={cta.href} className={outline}>
                  {cta.label}
                  <ArrowRight />
                </NextLink>
              </div>
            ) : null}
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-3 bg-background p-5"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"
                />
                <span className="text-sm font-medium text-foreground md:text-base">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
