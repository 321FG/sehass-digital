import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { AboutAiExample } from "@/data/about";

const linkClass = cn(
  "group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6",
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

export function AboutAiApproach({
  eyebrow,
  heading,
  paragraphs,
  examples,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  examples: AboutAiExample[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-ai">
      <Container size="lg">
        <div className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="about-ai"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {examples.map((ex) => (
            <li key={ex.name}>
              <NextLink href={ex.href} className={linkClass}>
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Real example
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {ex.name}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {ex.role}
                </span>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View project <ArrowRight />
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
