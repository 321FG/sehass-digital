import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getProjects } from "@/data/projects";
import type { ProjectCategoryTag } from "@/data/projects";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

/**
 * Relevant work on What We Build pages. Renders real project cards.
 * Optionally filters by `tag`, falling back to all projects when the
 * filter would leave fewer than two cards (so the grid never looks
 * broken on a specific capability page).
 */
export async function RelevantWork({
  tag,
  heading,
}: {
  tag?: ProjectCategoryTag;
  heading?: string;
}) {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const projects = getProjects(lang);
  const filtered = tag
    ? projects.filter((p) => p.card.categoryTags.includes(tag))
    : projects;
  const visible = filtered.length >= 2 ? filtered : projects;
  const resolvedHeading = heading ?? dict.sections.selectedWork;

  return (
    <Section tone="default" spacing="lg" aria-labelledby="relevant-work-heading">
      <Container size="lg">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {dict.sections.relevantWork}
            </span>
            <h2
              id="relevant-work-heading"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {resolvedHeading}
            </h2>
          </div>
          <NextLink
            href={`/${lang}/projects`}
            className="inline-flex items-center gap-2 self-start rounded-sm text-sm font-medium text-foreground transition-colors duration-150 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:self-auto"
          >
            {dict.sections.viewAllProjects}
            <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NextLink>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
