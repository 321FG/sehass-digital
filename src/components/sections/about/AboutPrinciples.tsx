import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { AboutPrinciple } from "@/data/about";

export function AboutPrinciples({
  eyebrow,
  heading,
  principles,
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  principles: AboutPrinciple[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-principles">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="about-principles"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <li
              key={p.number}
              className="flex flex-col gap-3 border-t border-border-strong pt-6"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {p.number}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {p.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
