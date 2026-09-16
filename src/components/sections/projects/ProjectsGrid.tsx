import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function ProjectsGrid({
  projects,
}: {
  projects: readonly Project[];
}) {
  const dict = await getDictionary();
  const { eyebrow, heading, body } = dict.projects.grid;
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="projects-grid">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="projects-grid"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
