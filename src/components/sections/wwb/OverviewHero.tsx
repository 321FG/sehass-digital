import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function OverviewHero() {
  const dict = await getDictionary();
  const { eyebrow, title, body } = dict.wwb.overview;
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="flex max-w-4xl flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
