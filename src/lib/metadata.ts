import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

/**
 * Next.js replaces (not merges) a page's openGraph object over the
 * layout's, so siteName/locale must be repeated per page. Spread this
 * into each page's openGraph to keep social metadata complete.
 * og:url falls back to the page's canonical when omitted.
 */
export function pageOgSite(lang: Locale): Partial<Metadata["openGraph"]> {
  return {
    siteName: siteConfig.name,
    locale: lang === "fr" ? "fr_FR" : "en_US",
    alternateLocale: lang === "fr" ? "en_US" : "fr_FR",
  };
}

export function pageTwitter(
  title: string,
  description: string,
): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
  };
}
