"use client";

import NextLink from "next/link";
import { cn } from "@/lib/utils";

export type CartButtonProps = {
  count?: number;
  href?: string;
  label?: string;
  className?: string;
};

/**
 * Cart / e-Sehass entry point.
 * The real cart state comes from the e-Sehass Marketplace project later;
 * for now this is a purely visual, count-driven indicator.
 */
export function CartButton({
  count = 0,
  href = "/e-sehass",
  label = "e-Sehass",
  className,
}: CartButtonProps) {
  const hasItems = count > 0;
  return (
    <NextLink
      href={href}
      aria-label={
        hasItems ? `${label} cart, ${count} item${count === 1 ? "" : "s"}` : `${label} cart`
      }
      className={cn(
        "relative inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background pl-3 pr-4",
        "text-sm font-medium text-foreground",
        "transition-colors duration-150",
        "hover:border-border-strong hover:bg-surface",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="h-4.5 w-4.5"
        width={18}
        height={18}
      >
        <path
          d="M3 4h2.4l2.1 11.2a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.5L21 8H6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.4" fill="currentColor" />
        <circle cx="17" cy="20" r="1.4" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">{label}</span>
      {hasItems ? (
        <span
          aria-hidden
          className="absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold leading-none text-accent-foreground shadow-(--shadow-sm)"
        >
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </NextLink>
  );
}
