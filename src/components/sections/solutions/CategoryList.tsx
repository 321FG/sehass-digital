import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function CategoryList({
  eyebrow,
  heading,
  body,
  categories,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  categories: readonly string[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="md" aria-labelledby="cat-heading">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="cat-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          {body ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
          ) : null}
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border-strong bg-background px-4 py-2 text-sm text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
