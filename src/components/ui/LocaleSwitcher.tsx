"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import {
  localeCookieName,
  localeLabels,
  locales,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

type Props = {
  lang: Locale;
  label: string;
  className?: string;
  placement?: "top" | "bottom";
};

function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  return segments.join("/") || `/${target}`;
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4", className)}
    >
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.75 10h14.5M10 2.75c2 2 3 4.5 3 7.25s-1 5.25-3 7.25c-2-2-3-4.5-3-7.25s1-5.25 3-7.25Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      fill="none"
      className={cn("h-3 w-3", className)}
    >
      <path
        d="m3 4.5 3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlagFR({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 12"
      className={cn("h-3.5 w-auto rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]", className)}
    >
      <rect width="6" height="12" fill="#0055A4" />
      <rect x="6" width="6" height="12" fill="#FFFFFF" />
      <rect x="12" width="6" height="12" fill="#EF4135" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  const stripes = Array.from({ length: 13 }, (_, i) => (
    <rect
      key={i}
      x="0"
      y={(i * 100) / 13}
      width="190"
      height={100 / 13}
      fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
    />
  ));
  return (
    <svg
      aria-hidden
      viewBox="0 0 190 100"
      preserveAspectRatio="xMidYMid meet"
      className={cn("h-3.5 w-auto rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]", className)}
    >
      {stripes}
      <rect x="0" y="0" width="76" height={(100 / 13) * 7} fill="#3C3B6E" />
    </svg>
  );
}

function FlagFor({ locale, className }: { locale: Locale; className?: string }) {
  return locale === "fr" ? <FlagFR className={className} /> : <FlagUS className={className} />;
}

export function LocaleInlineSwitcher({
  lang,
  label,
  className,
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname() || `/${lang}`;
  const [isPending, startTransition] = useTransition();

  const setLocale = (next: Locale) => {
    if (next === lang) return;
    const nextPath = swapLocaleInPath(pathname, next);
    startTransition(() => {
      document.cookie = `${localeCookieName}=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      router.push(nextPath);
    });
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("inline-flex rounded-md border border-border bg-background p-0.5", className)}
    >
      {locales.map((l) => {
        const isActive = l === lang;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={isActive}
            disabled={isPending}
            onClick={() => setLocale(l)}
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-sm px-3 text-sm",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "bg-brand text-brand-foreground"
                : "text-muted-foreground hover:bg-surface hover:text-foreground",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            )}
          >
            <FlagFor locale={l} />
            <span className="font-medium">{localeLabels[l]}</span>
          </button>
        );
      })}
    </div>
  );
}

export function LocaleSwitcher({ lang, label, className, placement = "bottom" }: Props) {
  const router = useRouter();
  const pathname = usePathname() || `/${lang}`;
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const setLocale = (next: Locale) => {
    setOpen(false);
    if (next === lang) return;
    const nextPath = swapLocaleInPath(pathname, next);
    startTransition(() => {
      document.cookie = `${localeCookieName}=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      router.push(nextPath);
    });
  };

  useEffect(() => {
    if (!open) return;
    for (const l of locales) {
      if (l === lang) continue;
      router.prefetch(swapLocaleInPath(pathname, l));
    }
    function onDown(e: MouseEvent | TouchEvent) {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, lang, pathname, router]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${localeLabels[lang]}`}
        disabled={isPending}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2 text-foreground",
          "transition-colors duration-150 hover:border-border-strong hover:bg-surface",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-60 disabled:cursor-not-allowed",
        )}
      >
        <GlobeIcon className="text-muted-foreground" />
        <FlagFor locale={lang} />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {lang}
        </span>
        <ChevronDown className={cn("text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute right-0 z-50 min-w-40 overflow-hidden rounded-md border border-border bg-background",
            "shadow-(--shadow-md)",
            placement === "top" ? "bottom-full mb-2" : "top-full mt-2",
          )}
        >
          {locales.map((l) => {
            const isActive = l === lang;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setLocale(l)}
                  className={cn(
                    "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm",
                    "transition-colors duration-150 hover:bg-surface",
                    "focus-visible:outline-none focus-visible:bg-surface",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <FlagFor locale={l} />
                  <span className="flex-1">{localeLabels[l]}</span>
                  {isActive ? (
                    <svg
                      aria-hidden
                      viewBox="0 0 12 12"
                      fill="none"
                      className="h-3 w-3 text-foreground"
                    >
                      <path
                        d="m2.5 6.5 2.5 2.5 4.5-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
