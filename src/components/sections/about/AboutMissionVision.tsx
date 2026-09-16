import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function AboutMissionVision({
  mission,
  vision,
  tone = "surface",
}: {
  mission: { eyebrow: string; statement: string; body: string };
  vision: { eyebrow: string; statement: string; body: string };
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-mv">
      <Container size="lg">
        <h2 id="about-mv" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          <article className="flex flex-col gap-5 bg-background p-8 md:p-12 lg:p-16">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {mission.eyebrow}
            </span>
            <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl">
              {mission.statement}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {mission.body}
            </p>
          </article>
          <article className="flex flex-col gap-5 bg-background p-8 md:p-12 lg:p-16">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {vision.eyebrow}
            </span>
            <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl">
              {vision.statement}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {vision.body}
            </p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
