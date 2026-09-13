import NextLink from "next/link";
import { cn } from "@/lib/utils";
import type { Solution } from "@/types";

export type SolutionCardProps = {
  solution: Solution;
  className?: string;
};

export function SolutionCard({ solution, className }: SolutionCardProps) {
  const content = (
    <article
      className={cn(
        "group flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface-elevated p-6 md:p-7",
        "transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-accent/40 hover:shadow-(--shadow-md) hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground group-hover:bg-accent-soft group-hover:text-accent transition-colors">
        {solution.icon ?? (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path
              d="M4 7h16M4 12h16M4 17h10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {solution.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {solution.summary}
        </p>
      </div>
      {solution.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="none"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path
              d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </article>
  );

  return solution.href ? (
    <NextLink
      href={solution.href}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
    >
      {content}
    </NextLink>
  ) : (
    content
  );
}
