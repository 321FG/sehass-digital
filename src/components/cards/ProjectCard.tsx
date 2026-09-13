import NextLink from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const content = (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated",
        "transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-border-strong hover:shadow-(--shadow-md) hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-brand-soft to-muted" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.summary}
        </p>
      </div>
    </article>
  );

  return project.href ? (
    <NextLink
      href={project.href}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
    >
      {content}
    </NextLink>
  ) : (
    content
  );
}
