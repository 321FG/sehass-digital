import NextLink from "next/link";
import { cn } from "@/lib/utils";
import type { Industry } from "@/types";

export type IndustryCardProps = {
  industry: Industry;
  className?: string;
};

export function IndustryCard({ industry, className }: IndustryCardProps) {
  const content = (
    <article
      className={cn(
        "group flex h-full items-start gap-4 rounded-xl border border-border bg-background p-5",
        "transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-border-strong hover:bg-surface",
        className,
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground group-hover:bg-accent-soft group-hover:text-accent transition-colors">
        {industry.icon ?? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
            <path
              d="M4 20V10l8-5 8 5v10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M10 20v-6h4v6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold tracking-tight text-foreground">
          {industry.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {industry.summary}
        </p>
      </div>
    </article>
  );

  return industry.href ? (
    <NextLink
      href={industry.href}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
    >
      {content}
    </NextLink>
  ) : (
    content
  );
}
