import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import { StatusBadge } from "@/components/sections/solutions/StatusBadge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

const backLinkClass = cn(
  "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
  "transition-colors duration-150 hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
);

export async function ProjectHero({ project }: { project: Project }) {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const { hero, card } = project;
  return (
    <Section id="main" tone="default" spacing="lg">
      <Container size="lg">
        <div className="mb-10">
          <NextLink href={`/${lang}/projects`} className={backLinkClass}>
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M15.5 10h-11m0 0 4.5-4.5M4.5 10 9 14.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {dict.projects.backToProjects}
          </NextLink>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span aria-hidden className="h-px w-6 bg-border-strong" />
                {hero.eyebrow}
              </span>
              <StatusBadge status={card.status} label={card.statusLabel} />
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.supporting}
            </p>

            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {dict.projects.category} &middot;{" "}
              <span className="text-foreground/80">{card.category}</span>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <PhoneFrame
              src={hero.image.src}
              alt={hero.image.alt}
              priority
              className="max-w-72 md:max-w-80"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
