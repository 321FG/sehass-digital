import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getProjects } from "@/data/projects";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function Proof() {
  const dict = await getDictionary();
  const lang = await getLocale();
  const t = dict.home.proof;
  const projects = getProjects(lang);
  return (
    <Section tone="default" spacing="lg" aria-labelledby="proof-heading">
      <Container size="lg">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.eyebrow}
            </span>
            <h2
              id="proof-heading"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {t.heading}
            </h2>
          </div>
          <NextLink
            href={`/${lang}/projects`}
            className="inline-flex items-center gap-2 self-start rounded-sm text-sm font-medium text-foreground transition-colors duration-150 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:self-auto"
          >
            {t.viewAll}
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
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

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
