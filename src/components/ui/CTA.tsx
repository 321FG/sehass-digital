import NextLink from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants, type ButtonSize, type ButtonVariant } from "@/lib/variants";
import { cn } from "@/lib/utils";

type NextLinkProps = ComponentProps<typeof NextLink>;

export type CTAProps = NextLinkProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

export function CTA({
  variant = "accent",
  size = "lg",
  withArrow = true,
  className,
  children,
  ...props
}: CTAProps) {
  return (
    <NextLink
      // `group` establishes the hover scope the arrow's `group-hover:` relies on.
      className={cn("group", buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {withArrow ? (
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4 -mr-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </NextLink>
  );
}
