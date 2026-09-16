import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Enumerates real, non-placeholder routes in the site. Excludes:
 *   - /e-sehass (upcoming, deliberately noindex)
 *   - /design-system (internal reference)
 *   - /privacy (indexable but minimal — included at low priority)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/what-we-build", priority: 0.9 },
    { path: "/what-we-build/software", priority: 0.7 },
    { path: "/what-we-build/ai", priority: 0.7 },
    { path: "/what-we-build/digital-products", priority: 0.7 },
    { path: "/what-we-build/digital-transformation", priority: 0.7 },
    { path: "/ai", priority: 0.9 },
    { path: "/solutions", priority: 0.9 },
    { path: "/solutions/mbipa", priority: 0.8 },
    { path: "/solutions/amal-ai", priority: 0.8 },
    { path: "/solutions/e-arcep", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/industries/healthcare", priority: 0.7 },
    { path: "/industries/education", priority: 0.7 },
    { path: "/industries/business", priority: 0.7 },
    { path: "/industries/government-ngos", priority: 0.7 },
    { path: "/industries/commerce", priority: 0.7 },
    { path: "/projects", priority: 0.8 },
    { path: "/projects/mbipa", priority: 0.7 },
    { path: "/projects/amal-ai", priority: 0.7 },
    { path: "/projects/e-arcep", priority: 0.7 },
    { path: "/about", priority: 0.8 },
    { path: "/insights", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
  ] as const;

  return routes.flatMap((r) =>
    locales.map((locale) => {
      const suffix = r.path === "/" ? "" : r.path;
      const languages = Object.fromEntries(
        locales.map((alt) => [alt, `${base}/${alt}${suffix}`]),
      );
      languages["x-default"] = `${base}/${defaultLocale}${suffix}`;
      return {
        url: `${base}/${locale}${suffix}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: r.priority,
        alternates: { languages },
      };
    }),
  );
}
