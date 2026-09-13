import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "surface" | "muted" | "brand" | "inverted";
export type SectionSpacing = "sm" | "md" | "lg" | "xl";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  children?: ReactNode;
};

const toneMap: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-surface-foreground",
  muted: "bg-muted text-foreground",
  brand: "bg-brand text-brand-foreground dark",
  inverted: "bg-background text-foreground dark",
};

const spacingMap: Record<SectionSpacing, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-28 md:py-40",
};

export function Section({
  as: Tag = "section",
  tone = "default",
  spacing = "md",
  className,
  children,
  ...props
}: SectionProps) {
  const Component = Tag as ElementType;
  return (
    <Component
      className={cn(toneMap[tone], spacingMap[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
