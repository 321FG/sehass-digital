import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

/**
 * Two-column editorial story block: eyebrow on the left, prose on the right.
 * Used for Challenge / Approach / What we built intro sections.
 */
export function ProjectStorySection({
  eyebrow,
  heading,
  body,
  note,
  tone = "default",
  id,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  note?: string;
  tone?: "default" | "surface";
  id?: string;
}) {
  const anchorId = id ?? `story-${eyebrow.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <Section tone={tone} spacing="md" aria-labelledby={anchorId}>
      <Container size="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id={anchorId}
              className={cn(
                "font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl",
              )}
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
            {note ? (
              <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
