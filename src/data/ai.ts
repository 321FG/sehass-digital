/**
 * Sprint 9 — AI capability page content.
 *
 * Copy is intentionally capability-focused rather than project-specific.
 * MBIPA, Amal AI and e-ARCEP are covered on their dedicated project pages
 * and are *not* referenced here.
 */

export type Capability = {
  title: string;
  summary: string;
};

export const aiCapabilities: Capability[] = [
  {
    title: "AI Applications",
    summary:
      "Purpose-built applications that use AI to create intelligent user experiences.",
  },
  {
    title: "AI Agents",
    summary:
      "AI systems designed to reason through tasks, use tools and support workflows.",
  },
  {
    title: "Conversational AI",
    summary:
      "Intelligent conversational experiences across appropriate digital channels.",
  },
  {
    title: "Generative AI",
    summary:
      "Applications that generate, summarize, transform or work with content.",
  },
  {
    title: "Document Intelligence",
    summary:
      "Extract, classify, summarize and work with information contained in documents.",
  },
  {
    title: "Knowledge & Search",
    summary:
      "Help users find, understand and interact with organizational knowledge.",
  },
  {
    title: "Workflow Automation",
    summary:
      "Use AI to reduce repetitive work and connect intelligence to business processes.",
  },
  {
    title: "Decision Support",
    summary:
      "Turn complex information into useful insights that support human decisions.",
  },
];

export type Step = {
  number: string;
  title: string;
  summary?: string;
};

export const decisionProcess: Step[] = [
  { number: "01", title: "Understand", summary: "Clarify the problem, the users and the workflow." },
  { number: "02", title: "Identify opportunity", summary: "Find where intelligence can create meaningful value." },
  { number: "03", title: "Choose the right approach", summary: "Match the problem to the appropriate technique." },
  { number: "04", title: "Build", summary: "Develop the solution around real users and constraints." },
  { number: "05", title: "Integrate", summary: "Connect the system to the workflows around it." },
  { number: "06", title: "Improve", summary: "Evaluate outcomes and refine over time." },
];

export const developmentProcess: Step[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the problem, users, workflow and desired outcome.",
  },
  {
    number: "02",
    title: "Assess",
    summary: "Determine whether AI is appropriate and what kind of approach makes sense.",
  },
  {
    number: "03",
    title: "Design",
    summary: "Design the AI experience, architecture and interaction model.",
  },
  {
    number: "04",
    title: "Build",
    summary: "Develop the application, intelligence layer and supporting systems.",
  },
  {
    number: "05",
    title: "Integrate",
    summary: "Connect the solution to the workflows, tools and systems it needs.",
  },
  {
    number: "06",
    title: "Improve",
    summary: "Evaluate performance, learn from usage and continuously improve the system.",
  },
];

export type ResponsiblePrinciple = {
  title: string;
  summary: string;
};

export const responsiblePrinciples: ResponsiblePrinciple[] = [
  { title: "Privacy", summary: "Handle personal and organizational information with care and restraint." },
  { title: "Security", summary: "Design AI systems with the same security discipline as any critical software." },
  { title: "Human oversight", summary: "Keep people in the loop for decisions that matter." },
  { title: "Transparency", summary: "Make it clear when AI is involved and how it is being used." },
  { title: "Access controls", summary: "Ensure AI only works with information the user is allowed to see." },
  { title: "Evaluation", summary: "Test AI systems against the outcomes they are meant to support." },
  { title: "Monitoring", summary: "Observe behavior in production and respond to issues quickly." },
  { title: "Clear boundaries", summary: "Design each system with an explicit scope and known limits." },
];

export type WhyPrinciple = {
  title: string;
  summary: string;
};

export const whyPrinciples: WhyPrinciple[] = [
  { title: "Problem-first", summary: "We start with the problem, not the model." },
  { title: "Product-minded", summary: "AI should be part of a useful product or workflow." },
  { title: "Engineering-driven", summary: "Reliable AI requires thoughtful systems, integration and evaluation." },
  { title: "Human-centered", summary: "People remain at the center of important technology decisions." },
];

export type UseCaseGroup = {
  audience: string;
  items: string[];
};

export const useCaseGroups: UseCaseGroup[] = [
  {
    audience: "Businesses",
    items: [
      "Workflow automation",
      "Knowledge assistants",
      "Customer experiences",
      "Document processing",
    ],
  },
  {
    audience: "Organizations",
    items: [
      "Information management",
      "Internal AI assistants",
      "Process automation",
      "Decision support",
    ],
  },
  {
    audience: "Public institutions",
    items: [
      "Citizen information",
      "Guided digital services",
      "Workflow assistance",
      "Information access",
    ],
  },
  {
    audience: "Startups & products",
    items: [
      "AI-powered features",
      "Intelligent search",
      "Conversational interfaces",
      "AI product architecture",
    ],
  },
];

export type EngagementLevel = {
  label: string;
  summary: string;
};

export const engagementLevels: EngagementLevel[] = [
  { label: "Explore", summary: "Understand whether AI can create value." },
  { label: "Prototype", summary: "Test an idea quickly." },
  { label: "Build", summary: "Develop a production-ready AI capability." },
  { label: "Integrate", summary: "Connect AI to existing systems and workflows." },
  { label: "Improve", summary: "Evaluate and continuously refine." },
];

export const conversationalAreas = [
  "Customer support",
  "Internal assistance",
  "Information access",
  "Guided workflows",
  "Citizen interactions",
  "Knowledge assistants",
  "Service navigation",
];

export const generativeUses = [
  "Generate content",
  "Summarize information",
  "Transform information",
  "Extract meaning",
  "Answer questions",
  "Draft documents",
  "Assist knowledge workers",
];

// --- French translations ---------------------------------------------------

import type { Locale } from "@/i18n/config";

export const aiCapabilitiesFr: Capability[] = [
  {
    title: "Applications d\u2019IA",
    summary:
      "Des applications sur mesure qui utilisent l\u2019IA pour cr\u00e9er des exp\u00e9riences utilisateur intelligentes.",
  },
  {
    title: "Agents d\u2019IA",
    summary:
      "Des syst\u00e8mes d\u2019IA con\u00e7us pour raisonner sur des t\u00e2ches, utiliser des outils et soutenir les flux de travail.",
  },
  {
    title: "IA conversationnelle",
    summary:
      "Des exp\u00e9riences conversationnelles intelligentes d\u00e9ploy\u00e9es sur les canaux num\u00e9riques adapt\u00e9s.",
  },
  {
    title: "IA g\u00e9n\u00e9rative",
    summary:
      "Des applications qui g\u00e9n\u00e8rent, r\u00e9sument, transforment ou exploitent du contenu.",
  },
  {
    title: "Intelligence documentaire",
    summary:
      "Extraire, classer, r\u00e9sumer et exploiter l\u2019information contenue dans les documents.",
  },
  {
    title: "Connaissance et recherche",
    summary:
      "Aider les utilisateurs \u00e0 trouver, comprendre et interagir avec la connaissance de l\u2019organisation.",
  },
  {
    title: "Automatisation des flux",
    summary:
      "Utiliser l\u2019IA pour r\u00e9duire les t\u00e2ches r\u00e9p\u00e9titives et connecter l\u2019intelligence aux processus m\u00e9tier.",
  },
  {
    title: "Aide \u00e0 la d\u00e9cision",
    summary:
      "Transformer l\u2019information complexe en insights utiles qui soutiennent les d\u00e9cisions humaines.",
  },
];

export const decisionProcessFr: Step[] = [
  { number: "01", title: "Comprendre", summary: "Clarifier le probl\u00e8me, les utilisateurs et le flux de travail." },
  { number: "02", title: "Identifier l\u2019opportunit\u00e9", summary: "Trouver o\u00f9 l\u2019intelligence peut cr\u00e9er une valeur r\u00e9elle." },
  { number: "03", title: "Choisir la bonne approche", summary: "Adapter la technique au probl\u00e8me pos\u00e9." },
  { number: "04", title: "Construire", summary: "D\u00e9velopper la solution autour des utilisateurs et des contraintes r\u00e9elles." },
  { number: "05", title: "Int\u00e9grer", summary: "Connecter le syst\u00e8me aux flux de travail qui l\u2019entourent." },
  { number: "06", title: "Am\u00e9liorer", summary: "\u00c9valuer les r\u00e9sultats et affiner dans la dur\u00e9e." },
];

export const developmentProcessFr: Step[] = [
  { number: "01", title: "D\u00e9couvrir", summary: "Comprendre le probl\u00e8me, les utilisateurs, le flux de travail et le r\u00e9sultat attendu." },
  { number: "02", title: "\u00c9valuer", summary: "D\u00e9terminer si l\u2019IA est pertinente et quelle approche a du sens." },
  { number: "03", title: "Concevoir", summary: "Concevoir l\u2019exp\u00e9rience, l\u2019architecture et le mod\u00e8le d\u2019interaction." },
  { number: "04", title: "Construire", summary: "D\u00e9velopper l\u2019application, la couche d\u2019intelligence et les syst\u00e8mes de support." },
  { number: "05", title: "Int\u00e9grer", summary: "Connecter la solution aux flux, outils et syst\u00e8mes n\u00e9cessaires." },
  { number: "06", title: "Am\u00e9liorer", summary: "\u00c9valuer la performance, apprendre de l\u2019usage et faire progresser le syst\u00e8me." },
];

export const responsiblePrinciplesFr: ResponsiblePrinciple[] = [
  { title: "Confidentialit\u00e9", summary: "Traiter l\u2019information personnelle et organisationnelle avec soin et retenue." },
  { title: "S\u00e9curit\u00e9", summary: "Concevoir les syst\u00e8mes d\u2019IA avec la m\u00eame rigueur qu\u2019un logiciel critique." },
  { title: "Supervision humaine", summary: "Garder l\u2019humain dans la boucle pour les d\u00e9cisions qui comptent." },
  { title: "Transparence", summary: "Rendre clair quand l\u2019IA est impliqu\u00e9e et comment elle est utilis\u00e9e." },
  { title: "Contr\u00f4les d\u2019acc\u00e8s", summary: "Faire en sorte que l\u2019IA ne travaille qu\u2019avec l\u2019information autoris\u00e9e." },
  { title: "\u00c9valuation", summary: "Tester les syst\u00e8mes d\u2019IA face aux r\u00e9sultats qu\u2019ils sont cens\u00e9s soutenir." },
  { title: "Surveillance", summary: "Observer le comportement en production et r\u00e9agir vite aux probl\u00e8mes." },
  { title: "Fronti\u00e8res claires", summary: "Concevoir chaque syst\u00e8me avec un p\u00e9rim\u00e8tre explicite et des limites connues." },
];

export const whyPrinciplesFr: WhyPrinciple[] = [
  { title: "Probl\u00e8me d\u2019abord", summary: "On commence par le probl\u00e8me, pas par le mod\u00e8le." },
  { title: "Vision produit", summary: "L\u2019IA doit s\u2019int\u00e9grer \u00e0 un produit ou un flux utile." },
  { title: "Discipline d\u2019ing\u00e9nierie", summary: "Une IA fiable exige des syst\u00e8mes, une int\u00e9gration et une \u00e9valuation r\u00e9fl\u00e9chis." },
  { title: "Centr\u00e9 sur l\u2019humain", summary: "Les personnes restent au c\u0153ur des d\u00e9cisions technologiques importantes." },
];

export const useCaseGroupsFr: UseCaseGroup[] = [
  {
    audience: "Entreprises",
    items: [
      "Automatisation des flux",
      "Assistants de connaissance",
      "Exp\u00e9riences client",
      "Traitement documentaire",
    ],
  },
  {
    audience: "Organisations",
    items: [
      "Gestion de l\u2019information",
      "Assistants IA internes",
      "Automatisation de processus",
      "Aide \u00e0 la d\u00e9cision",
    ],
  },
  {
    audience: "Institutions publiques",
    items: [
      "Information aux citoyens",
      "Services num\u00e9riques guid\u00e9s",
      "Assistance aux flux de travail",
      "Acc\u00e8s \u00e0 l\u2019information",
    ],
  },
  {
    audience: "Startups et produits",
    items: [
      "Fonctionnalit\u00e9s propuls\u00e9es par l\u2019IA",
      "Recherche intelligente",
      "Interfaces conversationnelles",
      "Architecture de produit IA",
    ],
  },
];

export const engagementLevelsFr: EngagementLevel[] = [
  { label: "Explorer", summary: "Comprendre si l\u2019IA peut cr\u00e9er de la valeur." },
  { label: "Prototyper", summary: "Tester une id\u00e9e rapidement." },
  { label: "Construire", summary: "D\u00e9velopper une capacit\u00e9 d\u2019IA pr\u00eate pour la production." },
  { label: "Int\u00e9grer", summary: "Connecter l\u2019IA aux syst\u00e8mes et flux existants." },
  { label: "Am\u00e9liorer", summary: "\u00c9valuer et affiner en continu." },
];

export const conversationalAreasFr = [
  "Support client",
  "Assistance interne",
  "Acc\u00e8s \u00e0 l\u2019information",
  "Parcours guid\u00e9s",
  "Interactions avec les citoyens",
  "Assistants de connaissance",
  "Navigation dans les services",
];

export const generativeUsesFr = [
  "G\u00e9n\u00e9rer du contenu",
  "R\u00e9sumer l\u2019information",
  "Transformer l\u2019information",
  "Extraire du sens",
  "R\u00e9pondre \u00e0 des questions",
  "R\u00e9diger des documents",
  "Assister les travailleurs du savoir",
];

// --- Bilingual getters -----------------------------------------------------

export function getAiCapabilities(lang: Locale): Capability[] {
  return lang === "fr" ? aiCapabilitiesFr : aiCapabilities;
}
export function getDecisionProcess(lang: Locale): Step[] {
  return lang === "fr" ? decisionProcessFr : decisionProcess;
}
export function getDevelopmentProcess(lang: Locale): Step[] {
  return lang === "fr" ? developmentProcessFr : developmentProcess;
}
export function getResponsiblePrinciples(lang: Locale): ResponsiblePrinciple[] {
  return lang === "fr" ? responsiblePrinciplesFr : responsiblePrinciples;
}
export function getWhyPrinciples(lang: Locale): WhyPrinciple[] {
  return lang === "fr" ? whyPrinciplesFr : whyPrinciples;
}
export function getUseCaseGroups(lang: Locale): UseCaseGroup[] {
  return lang === "fr" ? useCaseGroupsFr : useCaseGroups;
}
export function getEngagementLevels(lang: Locale): EngagementLevel[] {
  return lang === "fr" ? engagementLevelsFr : engagementLevels;
}
export function getConversationalAreas(lang: Locale): readonly string[] {
  return lang === "fr" ? conversationalAreasFr : conversationalAreas;
}
export function getGenerativeUses(lang: Locale): readonly string[] {
  return lang === "fr" ? generativeUsesFr : generativeUses;
}
