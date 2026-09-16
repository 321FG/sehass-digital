import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/sections/solutions/StatusBadge";
import type { ProjectStatus } from "@/data/projects";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function ProjectStatusSection({
  heading,
  body,
  label,
  tone,
}: {
  heading: string;
  body: string;
  label: string;
  tone: ProjectStatus;
}) {
  const dict = await getDictionary();
  return (
    <Section tone="default" spacing="md" aria-labelledby="ps-heading">
      <Container size="lg">
        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-surface-elevated p-8 md:p-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-5 lg:max-w-md">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {dict.projects.status}
            </span>
            <h2
              id="ps-heading"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {heading}
            </h2>
            <div>
              <StatusBadge status={tone} label={label} />
            </div>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
