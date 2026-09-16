import type { HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoProps = HTMLAttributes<HTMLSpanElement> & {
  /** Inverts colors for placement on dark/brand surfaces. */
  inverted?: boolean;
};

export function Logo({ inverted = false, className, ...props }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-base font-semibold tracking-tight",
        inverted ? "text-on-brand" : "text-foreground",
        className,
      )}
      aria-label="Sehass Digital"
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "relative inline-block h-7 w-7 shrink-0 overflow-hidden rounded-md bg-brand",
          inverted
            ? "ring-1 ring-white/20"
            : "ring-1 ring-black/5 shadow-(--shadow-sm)",
        )}
      >
        <Image
          src="/brand/Sehass Digital.jpeg"
          alt=""
          fill
          sizes="28px"
          className="object-cover"
          priority
        />
      </span>
      <span className="inline-flex items-baseline gap-1.5">
        <span>Sehass</span>
        <span
          className={cn(
            "font-normal",
            inverted ? "text-on-brand-muted" : "text-muted-foreground",
          )}
        >
          Digital
        </span>
      </span>
    </span>
  );
}
