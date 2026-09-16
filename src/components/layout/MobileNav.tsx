"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { LocaleInlineSwitcher } from "@/components/ui/LocaleSwitcher";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { primaryNav, siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type Props = { dict: Dictionary; lang: Locale };

// `mounted` is true only in the browser — needed to gate createPortal(document.body).
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function MobileNav({ dict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const pathname = usePathname();
  const panelId = useId();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const isPhone = window.matchMedia("(max-width: 639px)").matches;
    const previousOverflow = document.body.style.overflow;
    if (isPhone) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground xl:hidden",
          "transition-colors duration-150 hover:bg-surface hover:border-border-strong",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {mounted && open
        ? createPortal(
            <>
              <button
                type="button"
                aria-label={dict.nav.closeMenu}
                onClick={close}
                className="fixed inset-0 top-16 z-30 hidden bg-foreground/20 backdrop-blur-sm sm:block xl:hidden"
              />
              <div
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label={dict.nav.ariaPrimary}
                className={cn(
                  "fixed z-40 flex flex-col overflow-y-auto bg-background xl:hidden",
                  "inset-x-0 top-16 bottom-0 border-t border-border",
                  "sm:inset-x-auto sm:left-auto sm:right-4 sm:top-18 sm:bottom-auto",
                  "sm:w-[min(22rem,calc(100vw-2rem))] sm:max-h-[calc(100dvh-5.5rem)]",
                  "sm:rounded-2xl sm:border sm:border-border sm:shadow-xl",
                )}
              >
                <nav
                  aria-label={dict.nav.ariaPrimary}
                  className="flex flex-col gap-1 px-6 py-6 md:px-8 sm:px-4 sm:py-3"
                >
                  {primaryNav.map((item) => {
                    const localizedHref = `/${lang}${item.href}`;
                    const isActive = pathname?.startsWith(localizedHref);
                    return (
                      <NextLink
                        key={item.href}
                        href={localizedHref}
                        aria-current={isActive ? "page" : undefined}
                        onClick={close}
                        className={cn(
                          "flex min-h-12 items-center rounded-lg px-3 text-base font-medium sm:min-h-10 sm:text-sm",
                          "transition-colors duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          isActive
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-surface hover:text-foreground",
                        )}
                      >
                        {dict.nav[item.key]}
                      </NextLink>
                    );
                  })}
                </nav>
                <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6 md:px-8 sm:px-4 sm:py-3">
                  <div className="flex flex-col gap-2 sm:hidden">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {dict.nav.switchLanguage}
                    </span>
                    <LocaleInlineSwitcher lang={lang} label={dict.languageSwitcher.label} />
                  </div>
                  {siteConfig.marketplace.enabled ? (
                    <NextLink
                      href={`/${lang}${siteConfig.marketplace.href}`}
                      onClick={close}
                      className={cn(
                        "flex min-h-12 items-center justify-between rounded-lg border border-border bg-surface px-4 sm:min-h-10",
                        "text-sm font-medium text-foreground",
                        "transition-colors duration-150 hover:border-border-strong",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                    >
                      <span>{dict.nav.visitMarketplace}</span>
                      <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                        <path
                          d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </NextLink>
                  ) : null}
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
