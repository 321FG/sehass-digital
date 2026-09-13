import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Sehass Digital",
  shortName: "Sehass",
  tagline: "Software, AI & digital products, engineered from Africa.",
  description:
    "Sehass Digital engineers software, artificial intelligence, and digital products for African teams with global ambitions.",
  url: "https://sehassdigital.com",
  marketplace: {
    name: "e-Sehass",
    href: "/e-sehass",
    enabled: false,
  },
  contact: {
    email: "hello@sehassdigital.com",
  },
} as const;

export const primaryNav: NavItem[] = [
  { label: "What We Build", href: "/what-we-build" },
  { label: "AI", href: "/ai" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
