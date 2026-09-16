import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function ProblemBuiltSection({
  problem,
  built,
  tone = "surface",
}: {
  problem: { heading: string; body: string };
  built: { heading: string; body: string };
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="pb-heading">
      <Container size="lg">
        <h2 id="pb-heading" className="sr-only">
          Problem and what we built
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {[problem, built].map((block, i) => (
            <div
              key={block.heading}
              className="flex flex-col gap-5 border-t border-border-strong pt-8"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {block.heading}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
