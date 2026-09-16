import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { CapabilityItem } from "@/data/what-we-build";

export function PillarsSection({
  eyebrow,
  heading,
  supporting,
  items,
  columns = "auto",
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  supporting?: string;
  items: CapabilityItem[];
  columns?: "auto" | 4 | 5;
  tone?: "default" | "surface";
}) {
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 5
        ? "sm:grid-cols-2 lg:grid-cols-5"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section tone={tone} spacing="md" aria-labelledby={`pill-${eyebrow}`}>
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id={`pill-${eyebrow}`}
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          {supporting ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {supporting}
            </p>
          ) : null}
        </div>

        <ul className={`mt-12 grid gap-4 ${gridCols}`}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface-elevated p-6 md:p-7"
            >
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                {item.title}
              </h3>
              {item.summary ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
