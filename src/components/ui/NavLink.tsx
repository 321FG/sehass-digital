"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NextLinkProps = ComponentProps<typeof NextLink>;

export type NavLinkProps = NextLinkProps & {
  exact?: boolean;
};

export function NavLink({
  exact = false,
  className,
  href,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : href.pathname ?? "";
  const isActive = exact
    ? pathname === hrefStr
    : hrefStr !== "/" && pathname.startsWith(hrefStr);

  return (
    <NextLink
      href={href}
      aria-current={isActive ? "page" : undefined}
      data-active={isActive || undefined}
      className={cn(
        "relative inline-flex items-center h-11 px-3 text-sm font-medium",
        "text-muted-foreground hover:text-foreground",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        "data-active:text-foreground",
        "data-active:after:content-[''] data-active:after:absolute data-active:after:left-3 data-active:after:right-3 data-active:after:-bottom-px data-active:after:h-0.5 data-active:after:bg-accent data-active:after:rounded-full",
        className,
      )}
      {...props}
    />
  );
}
