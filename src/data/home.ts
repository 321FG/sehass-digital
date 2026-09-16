import type { Industry, NavItem } from "@/types";

export type Capability = {
  id: string;
  label: string;
  title: string;
  summary: string;
};

export const capabilities: Capability[] = [
  {
    id: "software",
    label: "Software",
    title: "Custom software",
    summary:
      "Applications, platforms and business systems designed around real workflows.",
  },
  {
    id: "ai",
    label: "AI",
    title: "Artificial intelligence",
    summary:
      "AI-powered applications, automation, agents and intelligent systems.",
  },
  {
    id: "digital-products",
    label: "Digital Products",
    title: "Digital products",
    summary:
      "SaaS, marketplaces, platforms and products built from the ground up.",
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    title: "Digital transformation",
    summary:
      "Cloud, automation, integrations and technology modernization for existing teams.",
  },
];

export type FeaturedProduct = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  href: string;
};

// Only Mbipa is a real Sehass product today. No stats, users, or outcomes are fabricated.
export const featuredProduct: FeaturedProduct = {
  slug: "mbipa",
  name: "Mbipa",
  category: "A product by Sehass Digital",
  tagline:
    "A digital platform being built by Sehass Digital to solve a real problem end-to-end.",
  href: "/solutions/mbipa",
};

export type AIHighlight = {
  id: string;
  label: string;
  title: string;
  summary: string;
};

export const aiHighlights: AIHighlight[] = [
  {
    id: "agents",
    label: "AI Agents",
    title: "Agents that work.",
    summary: "Automate tasks and workflows with agents scoped to real objectives.",
  },
  {
    id: "automation",
    label: "AI Automation",
    title: "Automation with judgement.",
    summary:
      "Turn repetitive processes into intelligent workflows that understand context.",
  },
  {
    id: "applications",
    label: "AI Applications",
    title: "Applications with intelligence.",
    summary:
      "Build products with intelligence at their core — not bolted on afterwards.",
  },
];

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Systems for clinics, providers and care coordination.",
  },
  {
    slug: "education",
    title: "Education",
    summary: "Platforms for institutions, learners and training organizations.",
  },
  {
    slug: "business",
    title: "Business",
    summary: "Operations, internal tools and line-of-business applications.",
  },
  {
    slug: "government",
    title: "Government & NGOs",
    summary: "Public-service platforms and non-profit operating systems.",
  },
  {
    slug: "commerce",
    title: "Commerce",
    summary: "Marketplaces, storefronts and commerce infrastructure.",
  },
];

export type Reason = {
  id: string;
  label: string;
  title: string;
  summary: string;
};

export const whySehass: Reason[] = [
  {
    id: "product-thinking",
    label: "01",
    title: "Product thinking",
    summary: "We start with the problem, the users, and the desired outcome.",
  },
  {
    id: "engineering-first",
    label: "02",
    title: "Engineering first",
    summary: "We build scalable and maintainable technology from day one.",
  },
  {
    id: "ai-native",
    label: "03",
    title: "AI-native",
    summary:
      "We identify where intelligent technology can create real value — and where it shouldn't.",
  },
  {
    id: "long-term-partnership",
    label: "04",
    title: "Long-term partnership",
    summary: "We don't disappear after launch. We stay for what comes next.",
  },
];

export const footerColumns: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "What we build",
    links: [
      { label: "Software", href: "/what-we-build#software" },
      { label: "AI", href: "/ai" },
      { label: "Digital Products", href: "/what-we-build#digital-products" },
      { label: "Digital Transformation", href: "/what-we-build#digital-transformation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "e-Sehass Marketplace", href: "/e-sehass" },
      { label: "Our Solutions", href: "/solutions" },
    ],
  },
];
