export type SolutionStatus = "live" | "active" | "in-progress";

export type SolutionKind = "solution" | "project";

export type ExternalLink = {
  label: string;
  href: string;
  /** Platform key controls the icon shown next to the label. */
  platform?: "play" | "apple" | "web";
};

import type { Locale } from "@/i18n/config";

export type SolutionImage = {
  src: string;
  alt: string;
  /** Portrait mobile screenshots default to 9:19.5-ish; landscape is 16:10. */
  orientation?: "portrait" | "landscape";
};

/** Shared card used on /solutions overview + at the top of detail pages. */
export type SolutionSummary = {
  slug: "mbipa" | "amal-ai" | "e-arcep";
  href: string;
  kind: SolutionKind;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  status: SolutionStatus;
  statusLabel: string;
  platforms?: string[];
  featureHighlights: string[];
  ctaLabel: string;
  externalLinks?: ExternalLink[];
  /** Hero card image on /solutions. */
  heroImage: SolutionImage;
};

export const solutions: SolutionSummary[] = [
  {
    slug: "mbipa",
    href: "/solutions/mbipa",
    kind: "solution",
    name: "MBIPA",
    category: "Mental Wellbeing",
    subtitle: "Mental health awareness technology.",
    description:
      "MBIPA is a digital wellbeing platform designed to make mental health awareness, self-assessment and supportive resources more accessible.",
    status: "live",
    statusLabel: "Live",
    platforms: ["iOS", "Android"],
    featureHighlights: [
      "AI conversational companion",
      "Wellbeing assessments",
      "Musicothérapie",
      "Multilingual experience",
      "Mobile application",
    ],
    ctaLabel: "Explore MBIPA",
    externalLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mbipa.app&pli=1",
        platform: "play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/mbipa/id6791964849",
        platform: "apple",
      },
    ],
    heroImage: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "MBIPA AI companion — Yassingou coaching screen",
      orientation: "portrait",
    },
  },
  {
    slug: "amal-ai",
    href: "/solutions/amal-ai",
    kind: "solution",
    name: "Amal AI",
    category: "Employment Platform",
    subtitle: "Technology connecting people with employment opportunities.",
    description:
      "Amal AI is a digital employment platform designed to help people discover job opportunities, build their professional profiles and participate in a connected employment community.",
    status: "active",
    // Spec: display "Active platform" unless the 300+ figure has been re-verified.
    statusLabel: "Active platform",
    platforms: ["Web", "Mobile"],
    featureHighlights: [
      "Job discovery",
      "Job publishing",
      "Community / feed",
      "CV creation",
      "AI career coach",
      "Motivation letters",
    ],
    ctaLabel: "Explore Amal AI",
    externalLinks: [
      { label: "amal.cf", href: "https://www.amal.cf", platform: "web" },
    ],
    heroImage: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Amal AI landing screen — Construisez votre avenir et trouvez votre emploi",
      orientation: "portrait",
    },
  },
  {
    slug: "e-arcep",
    href: "/solutions/e-arcep",
    kind: "project",
    name: "e-ARCEP AI Assistant",
    category: "AI · Citizen Services",
    subtitle: "AI-powered citizen engagement through WhatsApp.",
    description:
      "An AI-powered conversational assistant designed to make it easier for citizens to interact with a public-sector complaint and information process through WhatsApp.",
    status: "in-progress",
    statusLabel: "In Progress",
    platforms: ["WhatsApp"],
    featureHighlights: [
      "Conversational AI",
      "WhatsApp interaction",
      "Complaint submission",
      "Reference tracking",
      "Citizen information",
      "Guided interaction",
    ],
    ctaLabel: "View Project",
    heroImage: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "e-ARCEP Assistant WhatsApp conversation — complaint submission and reference number",
      orientation: "portrait",
    },
  },
];

export const solutionBySlug = Object.fromEntries(
  solutions.map((s) => [s.slug, s]),
) as Record<SolutionSummary["slug"], SolutionSummary>;

/* ---------------------------------------------------------------
 * MBIPA — detail-page content
 * ------------------------------------------------------------- */
type FeatureImage = { src: string; alt: string };
export type MbipaFeature = {
  title: string;
  body: string;
  note?: string;
  images?: FeatureImage[];
};

export const mbipaContent: {
  hero: { eyebrow: string; title: string; supporting: string; image: FeatureImage };
  problem: { heading: string; body: string };
  built: { heading: string; body: string };
  features: { heading: string; items: MbipaFeature[] };
  builtBy: { heading: string; body: string; categories: string[] };
  availability: { heading: string; body: string };
  closing: { heading: string; supporting: string; cta: string };
} = {
  hero: {
    eyebrow: "MBIPA",
    title: "Technology for mental health awareness.",
    supporting:
      "MBIPA is a digital wellbeing platform designed to make mental health awareness and supportive tools more accessible through technology.",
    image: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "MBIPA AI companion — conversational wellbeing coach interface",
    },
  },
  problem: {
    heading: "The problem",
    body:
      "Mental health awareness and access to supportive resources remain important challenges. Digital technology can help make information, self-reflection tools and supportive experiences more accessible.",
  },
  built: {
    heading: "What we built",
    body:
      "Sehass Digital built a digital wellbeing experience combining mobile software, an AI conversational companion, structured wellbeing assessments, musicotherapy content and a multilingual user experience.",
  },
  features: {
    heading: "Inside MBIPA",
    items: [
      {
        title: "AI Companion",
        body:
          "MBIPA includes a conversational companion designed to provide a supportive interaction experience. Users can choose between different companion personalities to guide their session.",
        note:
          "The AI Companion is not a replacement for a psychologist, therapist, doctor or emergency service.",
        images: [
          {
            src: "/images/solutions/mbipa/ai-companion-selection.jpeg",
            alt: "MBIPA companion selection screen — choose between Bagaza and Yassingou",
          },
          {
            src: "/images/solutions/mbipa/ai-companion-bagaza.jpeg",
            alt: "MBIPA AI companion — Bagaza coaching screen",
          },
        ],
      },
      {
        title: "Wellbeing Tests",
        body:
          "MBIPA offers structured wellbeing self-assessments including WHO-5, WEMWBS and a burnout-related assessment (MBI). These are screening tools, not diagnostic instruments.",
        note:
          "These assessments are self-assessment / screening tools and do not diagnose mental health conditions.",
        images: [
          {
            src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
            alt: "MBIPA wellbeing tests screen — WHO-5, WEMWBS and MBI listed",
          },
        ],
      },
      {
        title: "Musicothérapie",
        body:
          "MBIPA includes a musicotherapy / wellbeing-oriented music library, with categories such as relaxation and réconfort designed to support the user's session.",
        images: [
          {
            src: "/images/solutions/mbipa/musicotherapie.jpeg",
            alt: "MBIPA Musicothérapie screen — relaxation music library",
          },
        ],
      },
      {
        title: "Multilingual Experience",
        body:
          "MBIPA is designed as a multilingual experience — the interface visible in the current screenshots is presented in French.",
        note:
          "Language coverage shown reflects what is visible in the current product screenshots. Additional languages will be listed as they are confirmed.",
      },
      {
        title: "Mobile Product Experience",
        body:
          "MBIPA is delivered as a mobile application with a dashboard summarising the user's wellbeing score, quick access to core features and personalised daily guidance.",
        images: [
          {
            src: "/images/solutions/mbipa/dashboard.jpeg",
            alt: "MBIPA dashboard — wellbeing score, quick access and daily guidance",
          },
        ],
      },
    ],
  },
  builtBy: {
    heading: "Built by Sehass Digital",
    body:
      "MBIPA was designed and engineered end-to-end by Sehass Digital across the following disciplines.",
    categories: [
      "Software Engineering",
      "AI",
      "Mobile Development",
      "Product Design",
      "Digital Health / Wellbeing Technology",
    ],
  },
  availability: {
    heading: "Available on mobile",
    body:
      "MBIPA is published on the Apple App Store and Google Play. Install it on your device to try it.",
  },
  closing: {
    heading: "Have a problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a project",
  },
} ;

/* ---------------------------------------------------------------
 * Amal AI — detail-page content
 * ------------------------------------------------------------- */
export const amalContent = {
  hero: {
    eyebrow: "AMAL AI",
    title: "Connecting people with opportunity.",
    supporting:
      "Amal AI is a digital employment platform designed to help people discover opportunities, build their professional presence and participate in a connected employment ecosystem.",
    image: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Amal AI landing screen — build your future and find your job",
    },
  },
  what: {
    heading: "What Amal enables",
    body:
      "A connected employment experience built around discovery, publishing and support — not just a job board.",
    features: [
      {
        title: "Job Opportunities",
        body: "Discover employment opportunities through a dedicated job marketplace.",
      },
      {
        title: "Job Publishing",
        body: "Organizations can publish employment opportunities.",
      },
      {
        title: "Professional Profiles",
        body: "Users can build and manage their professional presence.",
      },
      {
        title: "Community",
        body:
          "An employment-focused community where users can share and discover opportunities.",
      },
      {
        title: "CV Creation",
        body: "Tools to help users create their professional CV.",
      },
      {
        title: "AI Career Coach",
        body:
          "AI-powered support designed to help users navigate their career journey.",
      },
      {
        title: "Motivation Letters",
        body: "Support for creating job application materials.",
      },
    ],
  },
  context: {
    heading: "Built for the Central African employment ecosystem",
    body:
      "Amal was designed with the Central African employment context in mind — the platform, the language of the interface and the organizations posting on it reflect that context.",
  },
  showcase: {
    heading: "Inside Amal AI",
    body:
      "A quick look at the product surface — landing, discovery and community.",
    images: [
      {
        src: "/images/solutions/amal/landing.jpeg",
        alt: "Amal AI landing screen with primary calls to action",
        caption: "Landing",
      },
      {
        src: "/images/solutions/amal/job-listings.jpeg",
        alt: "Amal AI job listings screen — Offres d'emploi",
        caption: "Job listings",
      },
      {
        src: "/images/solutions/amal/community-feed.jpeg",
        alt: "Amal AI community feed — Communauté",
        caption: "Community",
      },
    ],
  },
  closing: {
    heading: "Have a problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a project",
  },
};

/* ---------------------------------------------------------------
 * e-ARCEP — detail-page content
 * ------------------------------------------------------------- */
export const eArcepContent = {
  hero: {
    eyebrow: "ONGOING PROJECT",
    title: "Making citizen services more accessible through AI.",
    supporting:
      "An AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows.",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "e-ARCEP Assistant WhatsApp conversation — guided complaint submission and reference number",
    },
  },
  how: {
    heading: "How it works",
    body:
      "The workflow demonstrated by the project, step by step. This represents the demonstrated workflow, not a production deployment.",
    steps: [
      {
        number: "01",
        title: "Citizen starts a conversation",
        summary: "A user opens WhatsApp and starts a conversation with the assistant.",
      },
      {
        number: "02",
        title: "AI assistant provides guidance",
        summary: "The assistant explains the process and offers a set of guided options.",
      },
      {
        number: "03",
        title: "Citizen submits a complaint",
        summary: "The user selects an operator and briefly describes the problem.",
      },
      {
        number: "04",
        title: "The system records the complaint",
        summary: "The complaint is captured and structured for handling.",
      },
      {
        number: "05",
        title: "A reference number is provided",
        summary: "The user receives a reference number they can use to follow up.",
      },
      {
        number: "06",
        title: "The complaint moves through the appropriate process",
        summary:
          "The recorded complaint can be handled through the appropriate downstream process.",
      },
    ],
  },
  technology: {
    heading: "Technology",
    body:
      "The project brings together several high-level capabilities. Specific vendors, models and infrastructure are intentionally omitted here until confirmed.",
    categories: [
      "Conversational AI",
      "WhatsApp Integration",
      "Workflow Automation",
      "Citizen Engagement",
      "Information Systems",
    ],
  },
  closing: {
    heading: "Interested in building an AI-powered workflow?",
    supporting:
      "If your team has a citizen or customer workflow that could be simplified with AI, we can help design and build it.",
    cta: "Start a conversation",
  },
} as const;

/* ---------------------------------------------------------------
 * French translations
 * ------------------------------------------------------------- */

const solutionsFr: SolutionSummary[] = [
  {
    slug: "mbipa",
    href: "/solutions/mbipa",
    kind: "solution",
    name: "MBIPA",
    category: "Bien-être mental",
    subtitle: "Une technologie pour la sensibilisation à la santé mentale.",
    description:
      "MBIPA est une plateforme numérique de bien-être conçue pour rendre plus accessibles la sensibilisation à la santé mentale, l\u2019auto-évaluation et les ressources de soutien.",
    status: "live",
    statusLabel: "En ligne",
    platforms: ["iOS", "Android"],
    featureHighlights: [
      "Compagnon conversationnel IA",
      "Tests de bien-être",
      "Musicothérapie",
      "Expérience multilingue",
      "Application mobile",
    ],
    ctaLabel: "Explorer MBIPA",
    externalLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mbipa.app&pli=1",
        platform: "play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/mbipa/id6791964849",
        platform: "apple",
      },
    ],
    heroImage: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "Compagnon IA MBIPA — écran de coaching Yassingou",
      orientation: "portrait",
    },
  },
  {
    slug: "amal-ai",
    href: "/solutions/amal-ai",
    kind: "solution",
    name: "Amal AI",
    category: "Plateforme d\u2019emploi",
    subtitle:
      "Une technologie qui connecte les personnes aux opportunités d\u2019emploi.",
    description:
      "Amal AI est une plateforme numérique d\u2019emploi conçue pour aider les personnes à découvrir des offres, construire leur profil professionnel et participer à une communauté d\u2019emploi connectée.",
    status: "active",
    statusLabel: "Plateforme active",
    platforms: ["Web", "Mobile"],
    featureHighlights: [
      "Découverte d\u2019offres",
      "Publication d\u2019offres",
      "Communauté / fil d\u2019actualité",
      "Création de CV",
      "Coach de carrière IA",
      "Lettres de motivation",
    ],
    ctaLabel: "Explorer Amal AI",
    externalLinks: [
      { label: "amal.cf", href: "https://www.amal.cf", platform: "web" },
    ],
    heroImage: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Écran d\u2019accueil Amal AI — Construisez votre avenir et trouvez votre emploi",
      orientation: "portrait",
    },
  },
  {
    slug: "e-arcep",
    href: "/solutions/e-arcep",
    kind: "project",
    name: "Assistant IA e-ARCEP",
    category: "IA · Services aux citoyens",
    subtitle:
      "Un engagement citoyen assisté par IA à travers WhatsApp.",
    description:
      "Un assistant conversationnel propulsé par l\u2019IA, conçu pour faciliter les échanges des citoyens avec un processus public de réclamations et d\u2019information via WhatsApp.",
    status: "in-progress",
    statusLabel: "En cours",
    platforms: ["WhatsApp"],
    featureHighlights: [
      "IA conversationnelle",
      "Interaction WhatsApp",
      "Dépôt de réclamations",
      "Suivi par référence",
      "Information citoyenne",
      "Interaction guidée",
    ],
    ctaLabel: "Voir le projet",
    heroImage: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "Conversation WhatsApp Assistant e-ARCEP — dépôt de réclamation et numéro de référence",
      orientation: "portrait",
    },
  },
];

const solutionBySlugFr = Object.fromEntries(
  solutionsFr.map((s) => [s.slug, s]),
) as Record<SolutionSummary["slug"], SolutionSummary>;

const mbipaContentFr: typeof mbipaContent = {
  hero: {
    eyebrow: "MBIPA",
    title: "La technologie au service de la santé mentale.",
    supporting:
      "MBIPA est une plateforme numérique de bien-être conçue pour rendre la sensibilisation à la santé mentale et les outils de soutien plus accessibles grâce à la technologie.",
    image: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "Compagnon IA MBIPA — interface conversationnelle de coaching bien-être",
    },
  },
  problem: {
    heading: "Le problème",
    body:
      "La sensibilisation à la santé mentale et l\u2019accès aux ressources de soutien restent des enjeux importants. La technologie numérique peut rendre plus accessibles l\u2019information, les outils d\u2019auto-réflexion et les expériences de soutien.",
  },
  built: {
    heading: "Ce que nous avons construit",
    body:
      "Sehass Digital a conçu une expérience numérique de bien-être qui combine logiciel mobile, compagnon conversationnel IA, tests de bien-être structurés, contenus de musicothérapie et expérience utilisateur multilingue.",
  },
  features: {
    heading: "Au cœur de MBIPA",
    items: [
      {
        title: "Compagnon IA",
        body:
          "MBIPA intègre un compagnon conversationnel conçu pour offrir une interaction bienveillante. Les utilisateurs peuvent choisir entre différentes personnalités de compagnon pour guider leur séance.",
        note:
          "Le compagnon IA ne remplace pas un psychologue, un thérapeute, un médecin ou un service d\u2019urgence.",
        images: [
          {
            src: "/images/solutions/mbipa/ai-companion-selection.jpeg",
            alt: "Écran de sélection du compagnon MBIPA — choix entre Bagaza et Yassingou",
          },
          {
            src: "/images/solutions/mbipa/ai-companion-bagaza.jpeg",
            alt: "Compagnon IA MBIPA — écran de coaching Bagaza",
          },
        ],
      },
      {
        title: "Tests de bien-être",
        body:
          "MBIPA propose des auto-évaluations structurées incluant WHO-5, WEMWBS et une évaluation liée au burnout (MBI). Ce sont des outils de dépistage, pas des instruments diagnostiques.",
        note:
          "Ces évaluations sont des outils d\u2019auto-évaluation et de dépistage. Elles ne diagnostiquent pas les troubles de santé mentale.",
        images: [
          {
            src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
            alt: "Écran des tests de bien-être MBIPA — WHO-5, WEMWBS et MBI",
          },
        ],
      },
      {
        title: "Musicothérapie",
        body:
          "MBIPA propose une bibliothèque musicale orientée bien-être et musicothérapie, avec des catégories comme la relaxation et le réconfort, pour accompagner la séance de l\u2019utilisateur.",
        images: [
          {
            src: "/images/solutions/mbipa/musicotherapie.jpeg",
            alt: "Écran Musicothérapie MBIPA — bibliothèque de musique de relaxation",
          },
        ],
      },
      {
        title: "Expérience multilingue",
        body:
          "MBIPA est conçu comme une expérience multilingue — l\u2019interface visible sur les captures actuelles est présentée en français.",
        note:
          "La couverture linguistique reflète ce qui est visible sur les captures actuelles du produit. D\u2019autres langues seront listées à mesure qu\u2019elles sont confirmées.",
      },
      {
        title: "Expérience produit mobile",
        body:
          "MBIPA est livré comme une application mobile avec un tableau de bord qui résume le score de bien-être, offre un accès rapide aux fonctionnalités clés et propose des conseils quotidiens personnalisés.",
        images: [
          {
            src: "/images/solutions/mbipa/dashboard.jpeg",
            alt: "Tableau de bord MBIPA — score de bien-être, accès rapide et conseils du jour",
          },
        ],
      },
    ],
  },
  builtBy: {
    heading: "Construit par Sehass Digital",
    body:
      "MBIPA a été conçu et développé de bout en bout par Sehass Digital, à travers les disciplines suivantes.",
    categories: [
      "Ingénierie logicielle",
      "IA",
      "Développement mobile",
      "Design produit",
      "Technologie de santé & bien-être numérique",
    ],
  },
  availability: {
    heading: "Disponible sur mobile",
    body:
      "MBIPA est publié sur l\u2019App Store d\u2019Apple et sur Google Play. Installez-le sur votre appareil pour l\u2019essayer.",
  },
  closing: {
    heading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const amalContentFr: typeof amalContent = {
  hero: {
    eyebrow: "AMAL AI",
    title: "Connecter les personnes à l\u2019opportunité.",
    supporting:
      "Amal AI est une plateforme numérique d\u2019emploi conçue pour aider les personnes à découvrir des opportunités, construire leur présence professionnelle et participer à un écosystème d\u2019emploi connecté.",
    image: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Écran d\u2019accueil Amal AI — construisez votre avenir et trouvez votre emploi",
    },
  },
  what: {
    heading: "Ce que permet Amal",
    body:
      "Une expérience d\u2019emploi connectée pensée autour de la découverte, de la publication et de l\u2019accompagnement — pas juste un tableau d\u2019offres.",
    features: [
      {
        title: "Opportunités d\u2019emploi",
        body:
          "Découvrir des opportunités professionnelles à travers un marché d\u2019offres dédié.",
      },
      {
        title: "Publication d\u2019offres",
        body:
          "Les organisations peuvent publier des opportunités d\u2019emploi.",
      },
      {
        title: "Profils professionnels",
        body:
          "Les utilisateurs peuvent construire et gérer leur présence professionnelle.",
      },
      {
        title: "Communauté",
        body:
          "Une communauté centrée sur l\u2019emploi où les utilisateurs peuvent partager et découvrir des opportunités.",
      },
      {
        title: "Création de CV",
        body:
          "Des outils pour aider les utilisateurs à créer leur CV professionnel.",
      },
      {
        title: "Coach de carrière IA",
        body:
          "Un accompagnement propulsé par l\u2019IA, conçu pour aider les utilisateurs à naviguer leur parcours professionnel.",
      },
      {
        title: "Lettres de motivation",
        body:
          "Un accompagnement pour créer les documents de candidature.",
      },
    ],
  },
  context: {
    heading: "Conçu pour l\u2019écosystème d\u2019emploi centrafricain",
    body:
      "Amal a été conçu avec le contexte d\u2019emploi centrafricain à l\u2019esprit — la plateforme, la langue de l\u2019interface et les organisations qui y publient en témoignent.",
  },
  showcase: {
    heading: "Au cœur d\u2019Amal AI",
    body:
      "Un aperçu de la surface du produit — accueil, découverte et communauté.",
    images: [
      {
        src: "/images/solutions/amal/landing.jpeg",
        alt: "Écran d\u2019accueil Amal AI avec les principaux appels à l\u2019action",
        caption: "Accueil",
      },
      {
        src: "/images/solutions/amal/job-listings.jpeg",
        alt: "Écran de liste d\u2019offres Amal AI — Offres d'emploi",
        caption: "Offres d\u2019emploi",
      },
      {
        src: "/images/solutions/amal/community-feed.jpeg",
        alt: "Fil communautaire Amal AI — Communauté",
        caption: "Communauté",
      },
    ],
  },
  closing: {
    heading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const eArcepContentFr = {
  hero: {
    eyebrow: "PROJET EN COURS",
    title:
      "Rendre les services aux citoyens plus accessibles grâce à l\u2019IA.",
    supporting:
      "Un assistant WhatsApp propulsé par l\u2019IA, conçu pour guider les citoyens à travers des flux d\u2019information et de dépôt de réclamations.",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "Conversation WhatsApp Assistant e-ARCEP — dépôt guidé de réclamation et numéro de référence",
    },
  },
  how: {
    heading: "Comment ça fonctionne",
    body:
      "Le flux démontré par le projet, étape par étape. Cela représente le flux démontré, pas un déploiement en production.",
    steps: [
      {
        number: "01",
        title: "Le citoyen entame une conversation",
        summary:
          "L\u2019utilisateur ouvre WhatsApp et démarre une conversation avec l\u2019assistant.",
      },
      {
        number: "02",
        title: "L\u2019assistant IA propose des repères",
        summary:
          "L\u2019assistant explique le processus et propose un ensemble d\u2019options guidées.",
      },
      {
        number: "03",
        title: "Le citoyen dépose une réclamation",
        summary:
          "L\u2019utilisateur sélectionne un opérateur et décrit brièvement le problème.",
      },
      {
        number: "04",
        title: "Le système enregistre la réclamation",
        summary:
          "La réclamation est capturée et structurée pour être traitée.",
      },
      {
        number: "05",
        title: "Un numéro de référence est fourni",
        summary:
          "L\u2019utilisateur reçoit un numéro de référence pour effectuer le suivi.",
      },
      {
        number: "06",
        title: "La réclamation suit le processus approprié",
        summary:
          "La réclamation enregistrée peut être traitée via le processus approprié en aval.",
      },
    ],
  },
  technology: {
    heading: "Technologie",
    body:
      "Le projet mobilise plusieurs capacités de haut niveau. Les fournisseurs, modèles et infrastructures spécifiques sont volontairement omis tant qu\u2019ils ne sont pas confirmés.",
    categories: [
      "IA conversationnelle",
      "Intégration WhatsApp",
      "Automatisation de workflows",
      "Engagement citoyen",
      "Systèmes d\u2019information",
    ],
  },
  closing: {
    heading: "Intéressé par la construction d\u2019un workflow assisté par IA ?",
    supporting:
      "Si votre équipe a un workflow citoyen ou client qui pourrait être simplifié par l\u2019IA, nous pouvons vous aider à le concevoir et à le construire.",
    cta: "Démarrer une conversation",
  },
} as const;

/* ---------------------------------------------------------------
 * Bilingual getters
 * ------------------------------------------------------------- */

function localizeSolution(lang: Locale, s: SolutionSummary): SolutionSummary {
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return { ...s, href: prefix(s.href) };
}

export function getSolutions(lang: Locale): SolutionSummary[] {
  const source = lang === "fr" ? solutionsFr : solutions;
  return source.map((s) => localizeSolution(lang, s));
}

export function getSolutionBySlug(
  lang: Locale,
  slug: SolutionSummary["slug"],
): SolutionSummary {
  const source = lang === "fr" ? solutionBySlugFr[slug] : solutionBySlug[slug];
  return localizeSolution(lang, source);
}

export function getMbipaContent(lang: Locale): typeof mbipaContent {
  return lang === "fr" ? mbipaContentFr : mbipaContent;
}

export function getAmalContent(lang: Locale): typeof amalContent {
  return lang === "fr" ? amalContentFr : amalContent;
}

export function getEArcepContent(lang: Locale): typeof eArcepContent {
  return lang === "fr" ? (eArcepContentFr as unknown as typeof eArcepContent) : eArcepContent;
}
