import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { AboutValue } from "@/data/about";

export function AboutValues({
  eyebrow,
  heading,
  values,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  values: AboutValue[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-values">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="about-values"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
