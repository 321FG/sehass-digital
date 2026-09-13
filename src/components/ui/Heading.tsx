import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4";

type HeadingProps<E extends ElementType = "h2"> = {
  as?: E;
  level?: HeadingLevel;
  eyebrow?: ReactNode;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

const levelMap: Record<HeadingLevel, string> = {
  display:
    "font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]",
  h1: "font-display text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.08]",
  h2: "font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.15]",
  h3: "font-display text-xl md:text-2xl font-semibold tracking-[-0.015em] leading-[1.25]",
  h4: "font-display text-lg font-semibold tracking-tight leading-[1.3]",
};

const defaultTagMap: Record<HeadingLevel, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

export function Heading<E extends ElementType = "h2">({
  as,
  level = "h2",
  eyebrow,
  children,
  className,
  ...rest
}: HeadingProps<E>) {
  const Tag = (as ?? defaultTagMap[level]) as ElementType;
  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-eyebrow">
          <span aria-hidden className="h-px w-6 bg-eyebrow" />
          {eyebrow}
        </span>
      ) : null}
      <Tag className={cn(levelMap[level], "text-foreground", className)} {...rest}>
        {children}
      </Tag>
    </div>
  );
}
