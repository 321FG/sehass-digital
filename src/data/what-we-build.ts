import type { NavItem } from "@/types";
import type { Locale } from "@/i18n/config";

export type CapabilityItem = { title: string; summary: string };
export type ProcessStep = { number: string; title: string; summary: string };

export type VisualVariant =
  | "software"
  | "ai"
  | "products"
  | "transformation";

export type Capability = {
  slug: string;
  href: string;
  /** All-caps eyebrow used on detail hero (e.g. "SOFTWARE DEVELOPMENT"). */
  eyebrow: string;
  /** Human-readable name used in overview cards and nav. */
  name: string;
  /** Detail-page H1. */
  title: string;
  /** Detail-page supporting copy. */
  summary: string;
  /** Overview-page short copy (may equal summary). */
  overviewSummary: string;
  /** Overview card CTA label. */
  overviewCTA: string;
  /** 6 capability items shown on the detail page grid. */
  items: CapabilityItem[];
  /** How-we-build process steps (variable length across pages). */
  process: {
    eyebrow: string;
    heading: string;
    steps: ProcessStep[];
  };
  /** Page closing CTA in the brand-tone final section. */
  closing: {
    heading: string;
    cta: string;
  };
  /** Which decorative visual variant to render in the hero. */
  visualVariant: VisualVariant;
};

const softwareItems: CapabilityItem[] = [
  {
    title: "Web Applications",
    summary:
      "Web platforms and business applications built for reliability, speed and long-term maintainability.",
  },
  {
    title: "Mobile Applications",
    summary:
      "Native and cross-platform apps designed for real usage, not just app-store presence.",
  },
  {
    title: "Business Systems",
    summary:
      "Internal tools, admin dashboards and operational systems that fit how work actually happens.",
  },
  {
    title: "SaaS Platforms",
    summary:
      "Multi-tenant platforms engineered to scale from first customer to established product.",
  },
  {
    title: "APIs & Integrations",
    summary:
      "APIs, connectors and integration layers that let systems talk cleanly to each other.",
  },
  {
    title: "Custom Software",
    summary:
      "Purpose-built software for problems where off-the-shelf tools stop short.",
  },
];

const aiItems: CapabilityItem[] = [
  {
    title: "AI Applications",
    summary:
      "Products with intelligence at their core, not bolted on as an afterthought.",
  },
  {
    title: "AI Agents",
    summary:
      "Agents scoped to real objectives — able to take structured actions inside your systems.",
  },
  {
    title: "AI Automation",
    summary:
      "Automating repetitive work with systems that understand context and edge cases.",
  },
  {
    title: "Generative AI",
    summary:
      "Purposeful generative capabilities embedded where they create real value.",
  },
  {
    title: "Machine Learning",
    summary:
      "Models that learn from operational data to predict, classify or personalize.",
  },
  {
    title: "Data & Intelligence",
    summary:
      "Turning raw data into structured, queryable intelligence a team can act on.",
  },
];

const digitalProductsItems: CapabilityItem[] = [
  {
    title: "Product Strategy",
    summary:
      "Clarifying the problem, the audience and the shape of the product before code is written.",
  },
  {
    title: "UX/UI Design",
    summary:
      "Interfaces that are calm, considered and easy to use across the devices people actually use.",
  },
  {
    title: "Prototyping",
    summary:
      "Low-cost prototypes to test ideas and de-risk decisions before major investment.",
  },
  {
    title: "MVP Development",
    summary:
      "Building the smallest complete version of a product that can prove real usage.",
  },
  {
    title: "Product Engineering",
    summary:
      "Production engineering for products that need to run reliably in the real world.",
  },
  {
    title: "Product Optimization",
    summary:
      "Refining performance, usability and depth once the product is in real hands.",
  },
];

const digitalTransformationItems: CapabilityItem[] = [
  {
    title: "Digital Strategy",
    summary:
      "Clear direction for how technology should support the business over the next few years.",
  },
  {
    title: "Process Automation",
    summary:
      "Removing repetitive, error-prone steps from the way work moves through an organization.",
  },
  {
    title: "System Modernization",
    summary:
      "Bringing legacy systems into a state where they can be extended, not just maintained.",
  },
  {
    title: "Cloud Solutions",
    summary:
      "Right-sized cloud architectures that give the organization room to grow.",
  },
  {
    title: "Digital Workflows",
    summary:
      "End-to-end digital workflows that replace paper trails and ad-hoc spreadsheets.",
  },
  {
    title: "Technology Integration",
    summary:
      "Connecting the tools an organization already uses into a single, coherent system.",
  },
];

export const capabilities: Capability[] = [
  {
    slug: "software",
    href: "/what-we-build/software",
    eyebrow: "SOFTWARE DEVELOPMENT",
    name: "Software Development",
    title: "Software that works in the real world.",
    summary:
      "We design and engineer software systems that help organizations operate better, serve people, and build new digital experiences.",
    overviewSummary:
      "We design and build reliable software systems that turn complex business requirements into useful digital experiences.",
    overviewCTA: "Explore Software Development",
    items: softwareItems,
    process: {
      eyebrow: "HOW WE BUILD",
      heading: "A predictable path from problem to production.",
      steps: [
        { number: "01", title: "Discover", summary: "Understand the problem, the users and the constraints." },
        { number: "02", title: "Architect", summary: "Design an architecture that fits the problem — not the trend." },
        { number: "03", title: "Build", summary: "Engineer the system in focused, shippable increments." },
        { number: "04", title: "Test", summary: "Validate quality, correctness and edge cases before release." },
        { number: "05", title: "Deploy", summary: "Roll out reliably, with the right observability in place." },
        { number: "06", title: "Improve", summary: "Iterate based on real usage, not assumptions." },
      ],
    },
    closing: {
      heading: "Have a software problem worth solving?",
      cta: "Let's Build It",
    },
    visualVariant: "software",
  },
  {
    slug: "ai",
    href: "/what-we-build/ai",
    eyebrow: "AI & MACHINE LEARNING",
    name: "AI & Machine Learning",
    title: "AI built for real-world use.",
    summary:
      "We build practical AI systems that move beyond experimentation and help organizations automate, understand, predict, and create.",
    overviewSummary:
      "We build practical AI systems that help organizations automate work, understand information, and create better digital experiences.",
    overviewCTA: "Explore AI & Machine Learning",
    items: aiItems,
    process: {
      eyebrow: "FROM AI IDEA TO WORKING SYSTEM",
      heading: "From AI idea to working system.",
      steps: [
        { number: "01", title: "Identify", summary: "Find where AI can create meaningful value." },
        { number: "02", title: "Prepare", summary: "Structure data, workflows and system requirements." },
        { number: "03", title: "Build", summary: "Develop and integrate the AI capability." },
        { number: "04", title: "Deploy", summary: "Put the system into a usable production environment." },
        { number: "05", title: "Improve", summary: "Monitor, evaluate and continuously improve performance." },
      ],
    },
    closing: {
      heading: "Have a problem where AI could help?",
      cta: "Let's Build It",
    },
    visualVariant: "ai",
  },
  {
    slug: "digital-products",
    href: "/what-we-build/digital-products",
    eyebrow: "DIGITAL PRODUCTS",
    name: "Digital Products",
    title: "From ideas to products people can use.",
    summary:
      "We combine product thinking, design and engineering to turn ideas into useful digital products.",
    overviewSummary:
      "We turn ideas into digital products that people can actually use, from early concepts and prototypes to production-ready platforms.",
    overviewCTA: "Explore Digital Products",
    items: digitalProductsItems,
    process: {
      eyebrow: "PRODUCT LIFECYCLE",
      heading: "Build the right thing. Then build it well.",
      steps: [
        { number: "01", title: "Discover", summary: "Understand the audience, the problem and the opportunity." },
        { number: "02", title: "Define", summary: "Shape the product direction, scope and success criteria." },
        { number: "03", title: "Design", summary: "Design the experience users will actually live in." },
        { number: "04", title: "Prototype", summary: "Test the shape of the product before committing to build." },
        { number: "05", title: "Build", summary: "Engineer a production-ready version of the product." },
        { number: "06", title: "Launch", summary: "Ship to real users with a clear rollout plan." },
        { number: "07", title: "Improve", summary: "Refine based on how the product actually gets used." },
      ],
    },
    closing: {
      heading: "Have a product idea worth building?",
      cta: "Let's Build It",
    },
    visualVariant: "products",
  },
  {
    slug: "digital-transformation",
    href: "/what-we-build/digital-transformation",
    eyebrow: "DIGITAL TRANSFORMATION",
    name: "Digital Transformation",
    title: "Modern technology for organizations ready to move forward.",
    summary:
      "We help organizations improve how they work by modernizing systems, automating processes, and connecting technology around real operational needs.",
    overviewSummary:
      "We help organizations modernize processes, systems and experiences through practical technology.",
    overviewCTA: "Explore Digital Transformation",
    items: digitalTransformationItems,
    process: {
      eyebrow: "TRANSFORMATION FLOW",
      heading: "Transformation starts with understanding how work happens.",
      steps: [
        { number: "01", title: "Understand", summary: "Study how work moves through the organization today." },
        { number: "02", title: "Map", summary: "Map systems, processes and dependencies to a single view." },
        { number: "03", title: "Modernize", summary: "Bring legacy systems into a workable modern state." },
        { number: "04", title: "Integrate", summary: "Connect the tools that were previously working in isolation." },
        { number: "05", title: "Automate", summary: "Automate the repetitive parts of the workflow." },
        { number: "06", title: "Improve", summary: "Measure the results and continue evolving the system." },
      ],
    },
    closing: {
      heading: "Ready to modernize how your organization works?",
      cta: "Let's Talk",
    },
    visualVariant: "transformation",
  },
];

export const capabilityBySlug: Record<string, Capability> = Object.fromEntries(
  capabilities.map((c) => [c.slug, c]),
);

export const approachSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Understand the problem, people, constraints and desired outcome.",
  },
  {
    number: "02",
    title: "Design",
    summary: "Design the right experience, architecture and product direction.",
  },
  {
    number: "03",
    title: "Build",
    summary: "Engineer reliable technology with a focus on quality and scalability.",
  },
  {
    number: "04",
    title: "Improve",
    summary: "Measure, learn, iterate and continuously improve the solution.",
  },
];

/** AI page — "Where AI Can Help" use-case categories (not claims). */
export const aiUseCases: CapabilityItem[] = [
  {
    title: "Knowledge & Information",
    summary: "Making internal knowledge easier to search, retrieve and use.",
  },
  {
    title: "Customer Support",
    summary: "Assisting customer-facing teams with faster, more accurate responses.",
  },
  {
    title: "Document Intelligence",
    summary: "Extracting structure from unstructured documents at scale.",
  },
  {
    title: "Workflow Automation",
    summary: "Removing manual steps from processes where judgement is repeatable.",
  },
  {
    title: "Decision Support",
    summary: "Surfacing relevant context so people can make better decisions.",
  },
  {
    title: "Content & Communication",
    summary: "Drafting, translating and structuring content across channels.",
  },
];

/** Digital Products — product principles. */
export const productPrinciples: CapabilityItem[] = [
  { title: "Useful", summary: "Solve a real problem for the people who will use it." },
  { title: "Simple", summary: "Reduce complexity everywhere it can be reduced." },
  { title: "Scalable", summary: "Ready to grow with the product without being rebuilt." },
  { title: "Maintainable", summary: "Built so future teams can extend it with confidence." },
];

/** Digital Transformation — transformation areas. */
export const transformationAreas: CapabilityItem[] = [
  { title: "People", summary: "The teams and users who work inside the system every day." },
  { title: "Processes", summary: "The way work actually flows through the organization." },
  { title: "Systems", summary: "The applications and platforms that support the work." },
  { title: "Data", summary: "The information that decisions and operations depend on." },
  { title: "Technology", summary: "The underlying infrastructure the whole system runs on." },
];

/** Nav helper — used by future breadcrumb / related-links if needed. */
export const capabilityNav: NavItem[] = capabilities.map((c) => ({
  label: c.name,
  href: c.href,
}));

/* ---------------------------------------------------------------
 * French translations
 * ------------------------------------------------------------- */

const softwareItemsFr: CapabilityItem[] = [
  {
    title: "Applications web",
    summary:
      "Plateformes web et applications métiers construites pour la fiabilité, la performance et la maintenabilité à long terme.",
  },
  {
    title: "Applications mobiles",
    summary:
      "Applications natives et cross-platform conçues pour un usage réel, pas juste une présence sur les stores.",
  },
  {
    title: "Systèmes métiers",
    summary:
      "Outils internes, tableaux de bord et systèmes opérationnels qui épousent la façon dont le travail se fait vraiment.",
  },
  {
    title: "Plateformes SaaS",
    summary:
      "Plateformes multi-tenant conçues pour évoluer du premier client jusqu\u2019au produit établi.",
  },
  {
    title: "API & intégrations",
    summary:
      "API, connecteurs et couches d\u2019intégration qui permettent aux systèmes de dialoguer proprement.",
  },
  {
    title: "Logiciels sur mesure",
    summary:
      "Logiciels conçus spécifiquement pour les problèmes où les outils prêts à l\u2019emploi ne suffisent plus.",
  },
];

const aiItemsFr: CapabilityItem[] = [
  {
    title: "Applications IA",
    summary:
      "Des produits avec l\u2019intelligence au cœur, pas rajoutée après coup.",
  },
  {
    title: "Agents IA",
    summary:
      "Des agents cadrés autour d\u2019objectifs réels — capables d\u2019actions structurées dans vos systèmes.",
  },
  {
    title: "Automatisation IA",
    summary:
      "Automatiser les tâches répétitives avec des systèmes qui comprennent le contexte et les cas limites.",
  },
  {
    title: "IA générative",
    summary:
      "Des capacités génératives ciblées, intégrées là où elles créent de la vraie valeur.",
  },
  {
    title: "Apprentissage automatique",
    summary:
      "Des modèles qui apprennent des données opérationnelles pour prédire, classer ou personnaliser.",
  },
  {
    title: "Données & intelligence",
    summary:
      "Transformer les données brutes en intelligence structurée et exploitable par une équipe.",
  },
];

const digitalProductsItemsFr: CapabilityItem[] = [
  {
    title: "Stratégie produit",
    summary:
      "Clarifier le problème, l\u2019audience et la forme du produit avant d\u2019écrire une ligne de code.",
  },
  {
    title: "Design UX/UI",
    summary:
      "Des interfaces calmes, réfléchies et faciles à utiliser sur les appareils que les gens utilisent vraiment.",
  },
  {
    title: "Prototypage",
    summary:
      "Des prototypes économiques pour tester les idées et réduire les risques avant tout investissement majeur.",
  },
  {
    title: "Développement MVP",
    summary:
      "Construire la plus petite version complète d\u2019un produit capable de prouver un usage réel.",
  },
  {
    title: "Ingénierie produit",
    summary:
      "L\u2019ingénierie de production pour des produits qui doivent tourner de manière fiable dans le monde réel.",
  },
  {
    title: "Optimisation produit",
    summary:
      "Affiner la performance, l\u2019ergonomie et la profondeur une fois le produit entre de vraies mains.",
  },
];

const digitalTransformationItemsFr: CapabilityItem[] = [
  {
    title: "Stratégie numérique",
    summary:
      "Une direction claire pour la manière dont la technologie doit soutenir l\u2019entreprise dans les années qui viennent.",
  },
  {
    title: "Automatisation des processus",
    summary:
      "Supprimer les étapes répétitives et sources d\u2019erreurs dans la manière dont le travail circule dans l\u2019organisation.",
  },
  {
    title: "Modernisation des systèmes",
    summary:
      "Amener les systèmes hérités à un état où on peut les étendre, pas seulement les maintenir.",
  },
  {
    title: "Solutions cloud",
    summary:
      "Des architectures cloud bien dimensionnées qui laissent à l\u2019organisation la place de grandir.",
  },
  {
    title: "Flux de travail numériques",
    summary:
      "Des workflows numériques de bout en bout qui remplacent les traces papier et les tableurs improvisés.",
  },
  {
    title: "Intégration technologique",
    summary:
      "Connecter les outils qu\u2019une organisation utilise déjà pour en faire un système cohérent.",
  },
];

const capabilitiesFr: Capability[] = [
  {
    slug: "software",
    href: "/what-we-build/software",
    eyebrow: "DÉVELOPPEMENT LOGICIEL",
    name: "Développement logiciel",
    title: "Des logiciels qui fonctionnent dans le monde réel.",
    summary:
      "Nous concevons et développons des systèmes logiciels qui aident les organisations à mieux opérer, à servir les personnes et à construire de nouvelles expériences numériques.",
    overviewSummary:
      "Nous concevons et construisons des systèmes logiciels fiables qui transforment des exigences métier complexes en expériences numériques utiles.",
    overviewCTA: "Explorer le développement logiciel",
    items: softwareItemsFr,
    process: {
      eyebrow: "COMMENT NOUS CONSTRUISONS",
      heading: "Un chemin prévisible du problème à la production.",
      steps: [
        { number: "01", title: "Découvrir", summary: "Comprendre le problème, les utilisateurs et les contraintes." },
        { number: "02", title: "Architecturer", summary: "Concevoir une architecture qui épouse le problème — pas la mode." },
        { number: "03", title: "Construire", summary: "Développer le système en incréments focalisés et livrables." },
        { number: "04", title: "Tester", summary: "Valider la qualité, l\u2019exactitude et les cas limites avant la mise en production." },
        { number: "05", title: "Déployer", summary: "Déployer de manière fiable, avec la bonne observabilité en place." },
        { number: "06", title: "Améliorer", summary: "Itérer sur la base de l\u2019usage réel, pas des hypothèses." },
      ],
    },
    closing: {
      heading: "Vous avez un problème logiciel à résoudre ?",
      cta: "Construisons-le",
    },
    visualVariant: "software",
  },
  {
    slug: "ai",
    href: "/what-we-build/ai",
    eyebrow: "IA & APPRENTISSAGE AUTOMATIQUE",
    name: "IA & apprentissage automatique",
    title: "Une IA conçue pour un usage réel.",
    summary:
      "Nous construisons des systèmes d\u2019IA concrets qui dépassent l\u2019expérimentation et aident les organisations à automatiser, comprendre, prédire et créer.",
    overviewSummary:
      "Nous construisons des systèmes d\u2019IA concrets qui aident les organisations à automatiser le travail, comprendre l\u2019information et créer de meilleures expériences numériques.",
    overviewCTA: "Explorer l\u2019IA & l\u2019apprentissage automatique",
    items: aiItemsFr,
    process: {
      eyebrow: "DE L\u2019IDÉE IA AU SYSTÈME QUI TOURNE",
      heading: "De l\u2019idée IA au système qui tourne.",
      steps: [
        { number: "01", title: "Identifier", summary: "Trouver là où l\u2019IA peut créer une valeur significative." },
        { number: "02", title: "Préparer", summary: "Structurer les données, les workflows et les exigences système." },
        { number: "03", title: "Construire", summary: "Développer et intégrer la capacité IA." },
        { number: "04", title: "Déployer", summary: "Mettre le système dans un environnement de production utilisable." },
        { number: "05", title: "Améliorer", summary: "Surveiller, évaluer et améliorer la performance en continu." },
      ],
    },
    closing: {
      heading: "Vous avez un problème où l\u2019IA pourrait aider ?",
      cta: "Construisons-le",
    },
    visualVariant: "ai",
  },
  {
    slug: "digital-products",
    href: "/what-we-build/digital-products",
    eyebrow: "PRODUITS NUMÉRIQUES",
    name: "Produits numériques",
    title: "De l\u2019idée aux produits utilisables.",
    summary:
      "Nous combinons pensée produit, design et ingénierie pour transformer des idées en produits numériques utiles.",
    overviewSummary:
      "Nous transformons des idées en produits numériques que les gens peuvent réellement utiliser, du concept aux prototypes jusqu\u2019aux plateformes prêtes pour la production.",
    overviewCTA: "Explorer les produits numériques",
    items: digitalProductsItemsFr,
    process: {
      eyebrow: "CYCLE DE VIE PRODUIT",
      heading: "Construire la bonne chose. Puis bien la construire.",
      steps: [
        { number: "01", title: "Découvrir", summary: "Comprendre l\u2019audience, le problème et l\u2019opportunité." },
        { number: "02", title: "Définir", summary: "Cadrer la direction du produit, le périmètre et les critères de succès." },
        { number: "03", title: "Concevoir", summary: "Concevoir l\u2019expérience dans laquelle vivront les utilisateurs." },
        { number: "04", title: "Prototyper", summary: "Tester la forme du produit avant de s\u2019engager à le construire." },
        { number: "05", title: "Construire", summary: "Développer une version du produit prête pour la production." },
        { number: "06", title: "Lancer", summary: "Livrer à de vrais utilisateurs avec un plan de déploiement clair." },
        { number: "07", title: "Améliorer", summary: "Affiner selon la façon dont le produit est réellement utilisé." },
      ],
    },
    closing: {
      heading: "Vous avez une idée de produit à construire ?",
      cta: "Construisons-le",
    },
    visualVariant: "products",
  },
  {
    slug: "digital-transformation",
    href: "/what-we-build/digital-transformation",
    eyebrow: "TRANSFORMATION NUMÉRIQUE",
    name: "Transformation numérique",
    title:
      "Une technologie moderne pour les organisations prêtes à avancer.",
    summary:
      "Nous aidons les organisations à améliorer leur manière de travailler en modernisant leurs systèmes, en automatisant leurs processus et en connectant la technologie autour de vrais besoins opérationnels.",
    overviewSummary:
      "Nous aidons les organisations à moderniser leurs processus, leurs systèmes et leurs expériences grâce à une technologie concrète.",
    overviewCTA: "Explorer la transformation numérique",
    items: digitalTransformationItemsFr,
    process: {
      eyebrow: "FLUX DE TRANSFORMATION",
      heading:
        "La transformation commence par comprendre comment le travail se fait.",
      steps: [
        { number: "01", title: "Comprendre", summary: "Étudier comment le travail circule aujourd\u2019hui dans l\u2019organisation." },
        { number: "02", title: "Cartographier", summary: "Cartographier systèmes, processus et dépendances en une vue unique." },
        { number: "03", title: "Moderniser", summary: "Amener les systèmes hérités à un état moderne exploitable." },
        { number: "04", title: "Intégrer", summary: "Connecter les outils qui fonctionnaient jusqu\u2019ici en silo." },
        { number: "05", title: "Automatiser", summary: "Automatiser les parties répétitives du workflow." },
        { number: "06", title: "Améliorer", summary: "Mesurer les résultats et continuer à faire évoluer le système." },
      ],
    },
    closing: {
      heading:
        "Prêt à moderniser la manière dont votre organisation fonctionne ?",
      cta: "Parlons-en",
    },
    visualVariant: "transformation",
  },
];

const capabilityBySlugFr: Record<string, Capability> = Object.fromEntries(
  capabilitiesFr.map((c) => [c.slug, c]),
);

const approachStepsFr: ProcessStep[] = [
  {
    number: "01",
    title: "Comprendre",
    summary:
      "Comprendre le problème, les personnes, les contraintes et le résultat attendu.",
  },
  {
    number: "02",
    title: "Concevoir",
    summary:
      "Concevoir la bonne expérience, la bonne architecture et la bonne direction produit.",
  },
  {
    number: "03",
    title: "Construire",
    summary:
      "Développer une technologie fiable, avec un souci de qualité et de scalabilité.",
  },
  {
    number: "04",
    title: "Améliorer",
    summary:
      "Mesurer, apprendre, itérer et améliorer la solution en continu.",
  },
];

const aiUseCasesFr: CapabilityItem[] = [
  {
    title: "Connaissance & information",
    summary:
      "Rendre les savoirs internes plus faciles à chercher, à retrouver et à utiliser.",
  },
  {
    title: "Support client",
    summary:
      "Assister les équipes en contact avec les clients pour des réponses plus rapides et plus précises.",
  },
  {
    title: "Intelligence documentaire",
    summary:
      "Extraire de la structure des documents non structurés à grande échelle.",
  },
  {
    title: "Automatisation de workflows",
    summary:
      "Supprimer les étapes manuelles des processus dont le jugement est reproductible.",
  },
  {
    title: "Aide à la décision",
    summary:
      "Faire remonter le contexte pertinent pour prendre de meilleures décisions.",
  },
  {
    title: "Contenu & communication",
    summary:
      "Rédiger, traduire et structurer du contenu à travers les canaux.",
  },
];

const productPrinciplesFr: CapabilityItem[] = [
  { title: "Utile", summary: "Résoudre un vrai problème pour les personnes qui l\u2019utiliseront." },
  { title: "Simple", summary: "Réduire la complexité partout où elle peut l\u2019être." },
  { title: "Scalable", summary: "Prêt à grandir avec le produit sans être reconstruit." },
  { title: "Maintenable", summary: "Construit pour que les équipes futures puissent l\u2019étendre en confiance." },
];

const transformationAreasFr: CapabilityItem[] = [
  { title: "Personnes", summary: "Les équipes et les utilisateurs qui vivent chaque jour à l\u2019intérieur du système." },
  { title: "Processus", summary: "La façon dont le travail circule réellement dans l\u2019organisation." },
  { title: "Systèmes", summary: "Les applications et plateformes qui soutiennent le travail." },
  { title: "Données", summary: "L\u2019information dont dépendent les décisions et les opérations." },
  { title: "Technologie", summary: "L\u2019infrastructure sous-jacente sur laquelle tout le système repose." },
];

/* ---------------------------------------------------------------
 * Bilingual getters
 * ------------------------------------------------------------- */

function localizedCapabilities(lang: Locale, list: Capability[]): Capability[] {
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return list.map((c) => ({ ...c, href: prefix(c.href) }));
}

export function getCapabilities(lang: Locale): Capability[] {
  const source = lang === "fr" ? capabilitiesFr : capabilities;
  return localizedCapabilities(lang, source);
}

export function getCapability(lang: Locale, slug: string): Capability | undefined {
  const source = lang === "fr" ? capabilityBySlugFr[slug] : capabilityBySlug[slug];
  if (!source) return undefined;
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return { ...source, href: prefix(source.href) };
}

export function getApproachSteps(lang: Locale): ProcessStep[] {
  return lang === "fr" ? approachStepsFr : approachSteps;
}

export function getAiUseCases(lang: Locale): CapabilityItem[] {
  return lang === "fr" ? aiUseCasesFr : aiUseCases;
}

export function getProductPrinciples(lang: Locale): CapabilityItem[] {
  return lang === "fr" ? productPrinciplesFr : productPrinciples;
}

export function getTransformationAreas(lang: Locale): CapabilityItem[] {
  return lang === "fr" ? transformationAreasFr : transformationAreas;
}
