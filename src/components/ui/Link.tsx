import NextLink from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NextLinkProps = ComponentProps<typeof NextLink>;

export type LinkProps = NextLinkProps & {
  variant?: "default" | "muted" | "accent";
  underline?: boolean;
};

const variantMap = {
  default: "text-foreground hover:text-accent",
  muted: "text-muted-foreground hover:text-foreground",
  accent: "text-accent hover:text-accent-hover",
} as const;

export function Link({
  variant = "default",
  underline = false,
  className,
  ...props
}: LinkProps) {
  return (
    <NextLink
      className={cn(
        "inline-flex items-center gap-1 transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        variantMap[variant],
        underline && "underline underline-offset-4 decoration-2",
        className,
      )}
      {...props}
    />
  );
}
