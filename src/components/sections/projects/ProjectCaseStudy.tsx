import { AppAvailability } from "@/components/sections/solutions/AppAvailability";
import { CategoryList } from "@/components/sections/solutions/CategoryList";
import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { ProcessSteps } from "@/components/sections/wwb/ProcessSteps";
import { ProjectFeatureList } from "@/components/sections/projects/ProjectFeatureList";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery";
import { ProjectHero } from "@/components/sections/projects/ProjectHero";
import { ProjectStatusSection } from "@/components/sections/projects/ProjectStatusSection";
import { ProjectStorySection } from "@/components/sections/projects/ProjectStorySection";
import { RelatedContent } from "@/components/sections/projects/RelatedContent";
import type { Project } from "@/data/projects";
import { getDictionary } from "@/app/[lang]/dictionaries";

/**
 * Reusable case-study layout. Renders the sections a project has data for
 * and quietly omits any optional block whose data is not provided.
 */
export async function ProjectCaseStudy({ project }: { project: Project }) {
  const dict = await getDictionary();
  return (
    <>
      <ProjectHero project={project} />

      <ProjectStorySection
        eyebrow={dict.projects.challenge}
        heading={project.challenge.heading}
        body={project.challenge.body}
        note={project.challenge.note}
        tone="surface"
        id="challenge"
      />

      <ProjectStorySection
        eyebrow={dict.projects.approach}
        heading={project.approach.heading}
        body={project.approach.body}
        tone="default"
        id="approach"
      />

      <ProjectFeatureList
        eyebrow={dict.projects.whatWeBuilt}
        heading={project.whatWeBuilt.heading}
        body={project.whatWeBuilt.body}
        features={project.whatWeBuilt.features}
        tone="surface"
      />

      {project.workflow ? (
        <ProcessSteps
          eyebrow={project.workflow.eyebrow}
          heading={project.workflow.heading}
          supporting={project.workflow.body}
          steps={project.workflow.steps}
          tone="default"
        />
      ) : null}

      {project.gallery ? (
        <ProjectGallery
          eyebrow={project.gallery.eyebrow}
          heading={project.gallery.heading}
          body={project.gallery.body}
          images={project.gallery.images}
          tone={project.workflow ? "surface" : "default"}
        />
      ) : null}

      <CategoryList
        eyebrow={project.technology.eyebrow}
        heading={project.technology.heading}
        body={project.technology.body}
        categories={project.technology.categories}
        tone="default"
      />

      <ProjectStatusSection
        heading={project.status.heading}
        body={project.status.body}
        label={project.status.label}
        tone={project.status.tone}
      />

      {project.availability ? (
        <AppAvailability
          heading={project.availability.heading}
          body={project.availability.body}
          links={[...project.availability.links]}
        />
      ) : null}

      <RelatedContent related={project.related} />

      <ClosingCTA
        heading={project.closing.heading}
        supporting={project.closing.supporting}
        cta={project.closing.cta}
      />
    </>
  );
}
