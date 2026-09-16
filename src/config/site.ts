import type { NavItem } from "@/types";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export const siteConfig = {
  name: "Sehass Digital",
  shortName: "Sehass",
  tagline: "Software, AI & digital products. Built in the Central African Republic. Designed for the world.",
  description:
    "Sehass Digital engineers software, artificial intelligence, and digital products \u2014 built in the Central African Republic and designed for the world.",
  url: "https://sehassdigital.com",
  marketplace: {
    name: "e-Sehass",
    href: "/e-sehass",
    enabled: false,
  },
  contact: {
    email: "info@sehassdigital.com",
    directEmail: "juliuss@sehassdigital.com",
    whatsapp: "+254708039772",
    whatsappUrl: "https://wa.me/254708039772",
    whatsappPrefill: "Hello Sehass Digital, I'd like to discuss a project.",
  },
} as const;

type NavKey = keyof Dictionary["nav"];

export type PrimaryNavItem = { key: NavKey; href: string };

export const primaryNav: PrimaryNavItem[] = [
  { key: "whatWeBuild", href: "/what-we-build" },
  { key: "ai", href: "/ai" },
  { key: "solutions", href: "/solutions" },
  { key: "industries", href: "/industries" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
];

/** Kept for backwards-compat with any code still importing the old shape. */
export function localizedPrimaryNav(dict: Dictionary): NavItem[] {
  return primaryNav.map((item) => ({
    href: item.href,
    label: dict.nav[item.key],
  }));
}
