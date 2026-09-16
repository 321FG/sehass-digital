import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SolutionSummaryPanel } from "@/components/sections/solutions/SolutionSummary";
import type { SolutionSummary } from "@/data/solutions";

export function FeaturedSolutionSection({
  eyebrow,
  heading,
  body,
  solution,
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  solution: SolutionSummary;
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="featured-solution">
      <Container size="lg">
        <div className="mb-10 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="featured-solution"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>
        <SolutionSummaryPanel solution={solution} index={0} />
      </Container>
    </Section>
  );
}
