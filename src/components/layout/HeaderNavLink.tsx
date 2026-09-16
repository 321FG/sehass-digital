"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
  lang: Locale;
  exact?: boolean;
};

/**
 * Header-scoped nav link. Uses foreground (navy) for the active-state
 * underline instead of the accent (orange) used by the DS NavLink. This
 * keeps the homepage strictly on the navy / white / neutral palette.
 */
export function HeaderNavLink({
  exact = false,
  className,
  href,
  lang,
  ...props
}: Props) {
  const pathname = usePathname();
  const localizedHref = `/${lang}${href === "/" ? "" : href}`;
  const isActive = exact
    ? pathname === localizedHref
    : href !== "/" && pathname?.startsWith(localizedHref);

  return (
    <NextLink
      href={localizedHref}
      aria-current={isActive ? "page" : undefined}
      data-active={isActive || undefined}
      className={cn(
        "relative inline-flex h-11 items-center rounded-md px-2.5 text-sm font-medium",
        "text-muted-foreground transition-colors duration-150 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-active:text-foreground",
        "data-active:after:absolute data-active:after:-bottom-px data-active:after:left-2.5 data-active:after:right-2.5 data-active:after:h-0.5 data-active:after:rounded-full data-active:after:bg-foreground data-active:after:content-['']",
        className,
      )}
      {...props}
    />
  );
}
