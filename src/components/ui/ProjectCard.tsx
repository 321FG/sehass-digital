import Image from "next/image";
import NextLink from "next/link";
import type { Project } from "@/data/projects";
import { localizeCategoryTag } from "@/data/projects";
import { getLocale } from "@/app/[lang]/dictionaries";

/**
 * Shared project card — used in /projects grid, on the homepage, and on
 * every What We Build page. Editorial layout: no wrapping container,
 * screenshot rests on soft ground, typography flows below.
 */
export async function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const lang = await getLocale();
  const { card, href } = project;
  const numberLabel =
    index !== undefined ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <li>
      <NextLink
        href={href}
        className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-surface">
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] md:p-10 lg:p-12"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {numberLabel ? (
            <span className="tabular-nums">{numberLabel}</span>
          ) : null}
          <span>{card.category}</span>
        </div>

        <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground md:text-2xl">
          <span className="decoration-foreground/30 underline-offset-[6px] group-hover:underline">
            {card.title}
          </span>
        </h3>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {card.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {card.categoryTags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden className="text-muted-foreground/40">
                  /
                </span>
              ) : null}
              <span>{localizeCategoryTag(lang, tag)}</span>
            </span>
          ))}
        </div>
      </NextLink>
    </li>
  );
}
