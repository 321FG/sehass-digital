/**
 * Sprint 7 — About Sehass Digital: content data.
 *
 * Content is verbatim from the sprint brief. No inferred numbers,
 * founding dates, employee counts, offices, testimonials, awards,
 * partnerships, or global claims — omissions are intentional and
 * enforced at the data layer.
 */

import type { Locale } from "@/i18n/config";

export type AboutPrinciple = {
  number: string;
  title: string;
  body: string;
};

export type AboutValue = {
  title: string;
  body: string;
};

export type AboutAiExample = {
  name: string;
  role: string;
  href: string;
};

export type AboutCapability = {
  label: string;
};

export type AboutJourneyStep = {
  label: string;
  detail: string;
};

type CtaLink = { label: string; href: string };

export type AboutContent = {
  hero: {
    eyebrow: string;
    title: string;
    supporting: string;
    positioning: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  startingPoint: {
    eyebrow: string;
    heading: string;
    body: string[];
    pullQuote: { lead: string; accent: string };
  };
  fromCarToWorld: {
    eyebrow: string;
    heading: string;
    body: string[];
  };
  whySehassExists: {
    eyebrow: string;
    heading: string;
    body: string;
    products: { name: string; href: string; description: string }[];
  };
  beliefs: { eyebrow: string; heading: string; principles: AboutPrinciple[] };
  smallByDesign: { eyebrow: string; heading: string; body: string[] };
  engineeringMindset: {
    eyebrow: string;
    heading: string;
    supporting: string;
    capabilities: AboutCapability[];
    cta: CtaLink;
  };
  aiApproach: {
    eyebrow: string;
    heading: string;
    body: string[];
    examples: AboutAiExample[];
  };
  realWork: {
    eyebrow: string;
    heading: string;
    supporting: string;
    cta: CtaLink;
  };
  builtHereFirst: {
    eyebrow: string;
    lead: string;
    accent: string;
    body: string;
    steps: AboutJourneyStep[];
  };
  values: { eyebrow: string; heading: string; items: AboutValue[] };
  missionVision: {
    mission: { eyebrow: string; statement: string; body: string };
    vision: { eyebrow: string; statement: string; body: string };
  };
  brandMark: {
    eyebrow: string;
    heading: string;
    body: string;
    image: { src: string; alt: string };
  };
  closing: {
    heading: string;
    supporting: string;
    cta: CtaLink;
    secondary: CtaLink;
  };
  meta: { title: string; description: string };
  ambitionEyebrow: string;
};

const en: AboutContent = {
  hero: {
    eyebrow: "About Sehass Digital",
    title: "We build technology that solves real problems.",
    supporting:
      "Sehass Digital is a technology company focused on software, artificial intelligence, digital products, and practical technology solutions.",
    positioning: "Built in the Central African Republic. Designed for the world.",
    primaryCta: { label: "Explore Our Work", href: "/projects" },
    secondaryCta: { label: "What We Build", href: "/what-we-build" },
  },
  startingPoint: {
    eyebrow: "Our starting point",
    heading: "We start with the problems closest to us.",
    body: [
      "Sehass Digital is being built from the Central African Republic with a simple starting point: solve problems we understand.",
      "We believe some of the most meaningful technology opportunities are found in places where digital access, employment, public services, business processes and everyday experiences still have enormous room for improvement.",
      "Our goal is to build technology that fits those realities — practical, accessible and useful.",
    ],
    pullQuote: {
      lead: "Our ambition is not to stop in the Central African Republic.",
      accent: "It\u2019s to start here.",
    },
  },
  fromCarToWorld: {
    eyebrow: "Ambition",
    heading: "From Central Africa to the world.",
    body: [
      "What we learn by building for real people in Central Africa can become the foundation for products that work elsewhere.",
      "We build locally, think beyond our borders, and let the quality of the technology determine how far it can go.",
    ],
  },
  whySehassExists: {
    eyebrow: "Why Sehass exists",
    heading: "Technology should solve something.",
    body: "Sehass Digital was built around a simple idea: technology is most valuable when it helps solve a real problem.",
    products: [
      {
        name: "MBIPA",
        href: "/projects/mbipa",
        description:
          "A digital wellbeing product focused on wellbeing awareness, supportive interaction and self-assessment.",
      },
      {
        name: "Amal AI",
        href: "/projects/amal-ai",
        description:
          "A technology platform focused on employment and opportunities for young people, including job discovery, profiles, CV creation and AI-powered career functionality.",
      },
      {
        name: "e-ARCEP",
        href: "/projects/e-arcep",
        description:
          "An ongoing conversational AI project exploring how citizens can interact with a public institution through WhatsApp and submit complaints through a guided workflow.",
      },
    ],
  },
  beliefs: {
    eyebrow: "What we believe",
    heading: "Four principles behind the work.",
    principles: [
      { number: "01", title: "Start with the problem", body: "Good technology starts with understanding the problem, not choosing the technology." },
      { number: "02", title: "Build for real people", body: "Products should be understandable, useful and designed around the people who actually use them." },
      { number: "03", title: "Use AI where it creates value", body: "AI is powerful, but it should have a purpose. We use it where it can make a real difference." },
      { number: "04", title: "Build to improve", body: "Technology is rarely finished after the first release. We learn, improve and keep building." },
    ],
  },
  smallByDesign: {
    eyebrow: "How we work",
    heading: "Small by design. Serious about technology.",
    body: [
      "We believe being lean can be an advantage.",
      "Fewer layers mean faster decisions, closer attention to the product, and a more hands-on approach to building technology.",
      "We stay focused on the problem, the product and the people using it.",
    ],
  },
  engineeringMindset: {
    eyebrow: "Engineering mindset",
    heading: "We care about how technology works.",
    supporting:
      "The disciplines we bring to every project. Specific frameworks, models, and infrastructure are intentionally omitted until confirmed.",
    capabilities: [
      { label: "Software Engineering" },
      { label: "AI & Machine Learning" },
      { label: "Digital Product Development" },
      { label: "Automation" },
      { label: "System Integration" },
      { label: "User Experience" },
    ],
    cta: { label: "Explore What We Build", href: "/what-we-build" },
  },
  aiApproach: {
    eyebrow: "Our approach to AI",
    heading: "AI is a tool, not the product.",
    body: [
      "We don\u2019t use AI simply because it is fashionable.",
      "We look for situations where artificial intelligence can make a product more useful, a process more efficient, or an interaction more intelligent.",
    ],
    examples: [
      { name: "MBIPA", role: "AI-supported wellbeing interaction", href: "/projects/mbipa" },
      { name: "e-ARCEP", role: "Conversational AI for guided citizen complaint submission", href: "/projects/e-arcep" },
      { name: "Amal AI", role: "AI-powered career functionality", href: "/projects/amal-ai" },
    ],
  },
  realWork: {
    eyebrow: "The work",
    heading: "We believe the work speaks for itself.",
    supporting:
      "Three real projects — a live wellbeing product, an active employment platform, and an ongoing conversational-AI project for a public institution.",
    cta: { label: "View all projects", href: "/projects" },
  },
  builtHereFirst: {
    eyebrow: "Positioning",
    lead: "Built in the Central African Republic.",
    accent: "Designed for the world.",
    body: "We want to build technology from Central Africa that is shaped by real local needs, while being engineered with the ambition to work beyond them.",
    steps: [
      { label: "Understand locally", detail: "Start from problems we can actually see, talk to the people affected by them, and design around what matters." },
      { label: "Build practically", detail: "Ship real software that fits the constraints of the environment it runs in — not a prototype." },
      { label: "Learn from real users", detail: "Put the product in front of the people it was built for and take what we learn seriously." },
      { label: "Improve continuously", detail: "Treat every release as a starting point. Iterate on what works and rebuild what doesn\u2019t." },
      { label: "Expand beyond borders", detail: "Let the quality of the technology decide how far it travels. This is where we\u2019re going — not where we already are." },
    ],
  },
  values: {
    eyebrow: "Values",
    heading: "How we work — in practice.",
    items: [
      { title: "Problem-first", body: "We begin with the problem before thinking about the technology." },
      { title: "Engineering-minded", body: "We care about quality, reliability and how things actually work." },
      { title: "Human-centered", body: "Technology should work for the people who use it." },
      { title: "Responsible AI", body: "AI should be useful, understandable and applied thoughtfully." },
      { title: "Continuous improvement", body: "We build, learn, measure what matters and improve." },
    ],
  },
  missionVision: {
    mission: {
      eyebrow: "Our mission",
      statement: "Make useful technology more accessible.",
      body: "We build technology that helps people and organizations solve meaningful problems — especially where thoughtful software and responsible AI can make a difference.",
    },
    vision: {
      eyebrow: "Our vision",
      statement: "Build technology from Africa that can matter anywhere.",
      body: "Great technology does not need to come from a particular geography. It needs a real problem, a deep understanding of users, and the engineering discipline to build something useful. We want to build meaningful technology from the Central African Republic and eventually take what we learn far beyond it.",
    },
  },
  brandMark: {
    eyebrow: "The mark",
    heading: "Sehass Digital.",
    body: "The official brand mark. Built in the Central African Republic. Designed for the world.",
    image: { src: "/brand/Sehass Digital.jpeg", alt: "Sehass Digital official logo" },
  },
  closing: {
    heading: "Have a problem worth solving?",
    supporting: "Let\u2019s explore what technology could do.",
    cta: { label: "Start a Project", href: "/contact" },
    secondary: { label: "Explore Our Work", href: "/projects" },
  },
  meta: {
    title: "About Sehass Digital | Technology, Software & AI",
    description:
      "Learn how Sehass Digital approaches software, AI, digital products, and technology solutions — built in the Central African Republic and designed for the world.",
  },
  ambitionEyebrow: "Ambition",
};

const fr: AboutContent = {
  hero: {
    eyebrow: "À propos de Sehass Digital",
    title: "Nous concevons des technologies qui résolvent de vrais problèmes.",
    supporting:
      "Sehass Digital est une entreprise technologique dédiée au logiciel, à l\u2019intelligence artificielle, aux produits numériques et aux solutions technologiques concrètes.",
    positioning: "Conçu en République centrafricaine. Pensé pour le monde.",
    primaryCta: { label: "Découvrir nos projets", href: "/projects" },
    secondaryCta: { label: "Ce que nous construisons", href: "/what-we-build" },
  },
  startingPoint: {
    eyebrow: "Notre point de départ",
    heading: "Nous partons des problèmes les plus proches de nous.",
    body: [
      "Sehass Digital se construit depuis la République centrafricaine avec un point de départ simple : résoudre des problèmes que nous comprenons.",
      "Nous pensons que certaines des opportunités technologiques les plus significatives se trouvent là où l\u2019accès numérique, l\u2019emploi, les services publics, les processus métiers et les expériences quotidiennes ont encore une immense marge de progression.",
      "Notre objectif est de bâtir une technologie qui s\u2019adapte à ces réalités — pratique, accessible et utile.",
    ],
    pullQuote: {
      lead: "Notre ambition n\u2019est pas de nous arrêter en République centrafricaine.",
      accent: "C\u2019est d\u2019y commencer.",
    },
  },
  fromCarToWorld: {
    eyebrow: "Ambition",
    heading: "De l\u2019Afrique centrale au monde.",
    body: [
      "Ce que nous apprenons en construisant pour de vraies personnes en Afrique centrale peut devenir la base de produits qui fonctionnent ailleurs.",
      "Nous bâtissons localement, pensons au-delà de nos frontières, et laissons la qualité de la technologie décider jusqu\u2019où elle peut aller.",
    ],
  },
  whySehassExists: {
    eyebrow: "Pourquoi Sehass existe",
    heading: "La technologie doit résoudre quelque chose.",
    body: "Sehass Digital a été fondée autour d\u2019une idée simple : la technologie prend toute sa valeur lorsqu\u2019elle aide à résoudre un vrai problème.",
    products: [
      { name: "MBIPA", href: "/projects/mbipa", description: "Un produit numérique de bien-être axé sur la sensibilisation, l\u2019interaction bienveillante et l\u2019auto-évaluation." },
      { name: "Amal AI", href: "/projects/amal-ai", description: "Une plateforme technologique dédiée à l\u2019emploi et aux opportunités des jeunes : découverte d\u2019offres, profils, création de CV et fonctionnalités de carrière assistées par IA." },
      { name: "e-ARCEP", href: "/projects/e-arcep", description: "Un projet en cours d\u2019IA conversationnelle explorant comment les citoyens peuvent interagir avec une institution publique via WhatsApp et déposer des réclamations dans un parcours guidé." },
    ],
  },
  beliefs: {
    eyebrow: "Ce que nous croyons",
    heading: "Quatre principes derrière le travail.",
    principles: [
      { number: "01", title: "Partir du problème", body: "Une bonne technologie commence par la compréhension du problème, pas par le choix de la technologie." },
      { number: "02", title: "Construire pour de vraies personnes", body: "Les produits doivent être compréhensibles, utiles et pensés autour des personnes qui les utilisent réellement." },
      { number: "03", title: "Utiliser l\u2019IA là où elle crée de la valeur", body: "L\u2019IA est puissante, mais elle doit avoir un but. Nous l\u2019utilisons là où elle fait vraiment la différence." },
      { number: "04", title: "Construire pour s\u2019améliorer", body: "La technologie est rarement finie après la première version. Nous apprenons, améliorons et continuons de bâtir." },
    ],
  },
  smallByDesign: {
    eyebrow: "Notre manière de travailler",
    heading: "Restreints par choix. Sérieux sur la technologie.",
    body: [
      "Nous pensons qu\u2019être une petite équipe peut être un avantage.",
      "Moins de couches signifie des décisions plus rapides, une attention plus fine au produit, et une approche plus directe pour construire la technologie.",
      "Nous restons concentrés sur le problème, le produit et les personnes qui l\u2019utilisent.",
    ],
  },
  engineeringMindset: {
    eyebrow: "État d\u2019esprit d\u2019ingénierie",
    heading: "Nous nous soucions du fonctionnement de la technologie.",
    supporting:
      "Les disciplines que nous mobilisons sur chaque projet. Les frameworks, modèles et infrastructures spécifiques sont volontairement omis tant qu\u2019ils ne sont pas confirmés.",
    capabilities: [
      { label: "Ingénierie logicielle" },
      { label: "IA & apprentissage automatique" },
      { label: "Développement de produits numériques" },
      { label: "Automatisation" },
      { label: "Intégration de systèmes" },
      { label: "Expérience utilisateur" },
    ],
    cta: { label: "Explorer ce que nous construisons", href: "/what-we-build" },
  },
  aiApproach: {
    eyebrow: "Notre approche de l\u2019IA",
    heading: "L\u2019IA est un outil, pas le produit.",
    body: [
      "Nous n\u2019utilisons pas l\u2019IA simplement parce qu\u2019elle est à la mode.",
      "Nous cherchons les situations où l\u2019intelligence artificielle peut rendre un produit plus utile, un processus plus efficace ou une interaction plus intelligente.",
    ],
    examples: [
      { name: "MBIPA", role: "Interaction de bien-être assistée par IA", href: "/projects/mbipa" },
      { name: "e-ARCEP", role: "IA conversationnelle pour la soumission guidée de réclamations citoyennes", href: "/projects/e-arcep" },
      { name: "Amal AI", role: "Fonctionnalités de carrière assistées par IA", href: "/projects/amal-ai" },
    ],
  },
  realWork: {
    eyebrow: "Le travail",
    heading: "Nous croyons que le travail parle de lui-même.",
    supporting:
      "Trois vrais projets — un produit de bien-être en production, une plateforme d\u2019emploi active, et un projet en cours d\u2019IA conversationnelle pour une institution publique.",
    cta: { label: "Voir tous les projets", href: "/projects" },
  },
  builtHereFirst: {
    eyebrow: "Positionnement",
    lead: "Conçu en République centrafricaine.",
    accent: "Pensé pour le monde.",
    body: "Nous voulons construire depuis l\u2019Afrique centrale une technologie façonnée par de vrais besoins locaux, tout en étant conçue avec l\u2019ambition de fonctionner au-delà.",
    steps: [
      { label: "Comprendre localement", detail: "Partir de problèmes que nous voyons réellement, parler aux personnes concernées, et concevoir autour de ce qui compte." },
      { label: "Construire concrètement", detail: "Livrer de vrais logiciels adaptés aux contraintes de l\u2019environnement dans lequel ils fonctionnent — pas des prototypes." },
      { label: "Apprendre des utilisateurs réels", detail: "Mettre le produit devant les personnes pour qui il a été conçu et prendre au sérieux ce que nous apprenons." },
      { label: "S\u2019améliorer en continu", detail: "Considérer chaque version comme un point de départ. Itérer sur ce qui fonctionne et refaire ce qui ne fonctionne pas." },
      { label: "S\u2019étendre au-delà des frontières", detail: "Laisser la qualité de la technologie décider jusqu\u2019où elle voyage. C\u2019est vers cela que nous allons — pas là où nous sommes déjà." },
    ],
  },
  values: {
    eyebrow: "Valeurs",
    heading: "Comment nous travaillons — en pratique.",
    items: [
      { title: "Le problème d\u2019abord", body: "Nous partons du problème avant de penser à la technologie." },
      { title: "Esprit d\u2019ingénierie", body: "Nous nous soucions de la qualité, de la fiabilité et du fonctionnement réel des choses." },
      { title: "Humain d\u2019abord", body: "La technologie doit servir les personnes qui l\u2019utilisent." },
      { title: "IA responsable", body: "L\u2019IA doit être utile, compréhensible et appliquée avec discernement." },
      { title: "Amélioration continue", body: "Nous construisons, apprenons, mesurons ce qui compte et améliorons." },
    ],
  },
  missionVision: {
    mission: {
      eyebrow: "Notre mission",
      statement: "Rendre les technologies utiles plus accessibles.",
      body: "Nous bâtissons une technologie qui aide les personnes et les organisations à résoudre des problèmes qui comptent — en particulier là où un logiciel réfléchi et une IA responsable peuvent faire la différence.",
    },
    vision: {
      eyebrow: "Notre vision",
      statement: "Construire depuis l\u2019Afrique une technologie qui compte partout.",
      body: "Une grande technologie n\u2019a pas besoin de venir d\u2019une géographie particulière. Il lui faut un vrai problème, une compréhension profonde des utilisateurs et la rigueur d\u2019ingénierie nécessaire pour construire quelque chose d\u2019utile. Nous voulons bâtir une technologie significative depuis la République centrafricaine et emmener ce que nous apprenons bien au-delà.",
    },
  },
  brandMark: {
    eyebrow: "La marque",
    heading: "Sehass Digital.",
    body: "La marque officielle. Conçu en République centrafricaine. Pensé pour le monde.",
    image: { src: "/brand/Sehass Digital.jpeg", alt: "Logo officiel Sehass Digital" },
  },
  closing: {
    heading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    supporting: "Explorons ce que la technologie pourrait faire.",
    cta: { label: "Démarrer un projet", href: "/contact" },
    secondary: { label: "Découvrir nos projets", href: "/projects" },
  },
  meta: {
    title: "À propos de Sehass Digital | Technologie, Logiciel & IA",
    description:
      "Découvrez comment Sehass Digital aborde le logiciel, l\u2019IA, les produits numériques et les solutions technologiques — conçu en République centrafricaine et pensé pour le monde.",
  },
  ambitionEyebrow: "Ambition",
};

function withLocaleHrefs(content: AboutContent, lang: Locale): AboutContent {
  const prefix = (href: string) =>
    href.startsWith("/") ? `/${lang}${href === "/" ? "" : href}` : href;
  return {
    ...content,
    hero: {
      ...content.hero,
      primaryCta: { ...content.hero.primaryCta, href: prefix(content.hero.primaryCta.href) },
      secondaryCta: { ...content.hero.secondaryCta, href: prefix(content.hero.secondaryCta.href) },
    },
    whySehassExists: {
      ...content.whySehassExists,
      products: content.whySehassExists.products.map((p) => ({ ...p, href: prefix(p.href) })),
    },
    engineeringMindset: {
      ...content.engineeringMindset,
      cta: { ...content.engineeringMindset.cta, href: prefix(content.engineeringMindset.cta.href) },
    },
    aiApproach: {
      ...content.aiApproach,
      examples: content.aiApproach.examples.map((e) => ({ ...e, href: prefix(e.href) })),
    },
    realWork: {
      ...content.realWork,
      cta: { ...content.realWork.cta, href: prefix(content.realWork.cta.href) },
    },
    closing: {
      ...content.closing,
      cta: { ...content.closing.cta, href: prefix(content.closing.cta.href) },
      secondary: { ...content.closing.secondary, href: prefix(content.closing.secondary.href) },
    },
  };
}

export function getAboutContent(lang: Locale): AboutContent {
  return withLocaleHrefs(lang === "fr" ? fr : en, lang);
}
