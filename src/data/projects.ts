/**
 * Sprint 6 — Projects / Case Studies data
 *
 * Structured, typed representation of every project case study.
 * Content-safety concerns (medical claims, unverified stats, missing
 * projects) are encoded at the data layer via optional fields and
 * disclaimer `note`s — the pages just render what the data allows.
 */

import type { ExternalLink } from "@/data/solutions";
import type { Locale } from "@/i18n/config";

export type ProjectStatus = "live" | "active" | "in-progress";

export type ProjectCategoryTag =
  | "AI"
  | "Software"
  | "Digital Products"
  | "Healthcare"
  | "Employment"
  | "Government";

export type ProjectSlug = "mbipa" | "amal-ai" | "e-arcep";

export type ProjectImage = { src: string; alt: string };

export type ProjectFeature = {
  title: string;
  body: string;
  /** Optional disclaimer rendered under the feature body. */
  note?: string;
  images?: ProjectImage[];
};

export type ProjectWorkflowStep = {
  number: string;
  title: string;
  summary: string;
};

export type ProjectGalleryImage = ProjectImage & { caption?: string };

export type ProjectRelatedLink = { label: string; href: string };

export type Project = {
  slug: ProjectSlug;
  href: string;
  /** Card + overview grid data */
  card: {
    title: string;
    category: string;
    categoryTags: ProjectCategoryTag[];
    description: string;
    status: ProjectStatus;
    statusLabel: string;
    ctaLabel: string;
    image: ProjectImage;
  };
  /** Case-study hero */
  hero: {
    eyebrow: string;
    title: string;
    supporting: string;
    image: ProjectImage;
  };
  challenge: { heading: string; body: string; note?: string };
  approach: { heading: string; body: string };
  whatWeBuilt: {
    heading: string;
    body: string;
    features: ProjectFeature[];
  };
  /** Optional numbered workflow (e-ARCEP). */
  workflow?: {
    eyebrow: string;
    heading: string;
    body?: string;
    steps: ProjectWorkflowStep[];
  };
  /** "See the product" evidence gallery. */
  gallery?: {
    eyebrow: string;
    heading: string;
    body?: string;
    images: ProjectGalleryImage[];
  };
  technology: {
    eyebrow: string;
    heading: string;
    body: string;
    categories: readonly string[];
  };
  related: {
    solution?: ProjectRelatedLink & { kind: "solution" | "project" };
    industry: ProjectRelatedLink;
    capabilities: readonly ProjectRelatedLink[];
  };
  /** Optional "Available on" panel (mobile app stores / external site). */
  availability?: {
    heading: string;
    body: string;
    links: readonly ExternalLink[];
  };
  status: {
    heading: string;
    body: string;
    label: string;
    tone: ProjectStatus;
  };
  closing: { heading: string; supporting: string; cta: string };
};

/* ============================================================
 * MBIPA
 * ============================================================ */
export const mbipaProject: Project = {
  slug: "mbipa",
  href: "/projects/mbipa",
  card: {
    title: "MBIPA",
    category: "Mental Wellbeing Technology",
    categoryTags: ["AI", "Digital Products", "Healthcare"],
    description:
      "An AI-enabled digital wellbeing platform combining mobile technology, wellbeing assessments, musicoth\u00e9rapie, and conversational support.",
    status: "live",
    statusLabel: "Live",
    ctaLabel: "View Case Study",
    image: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "MBIPA AI conversational companion screen",
    },
  },
  hero: {
    eyebrow: "CASE STUDY / MBIPA",
    title: "Building technology for mental health awareness.",
    supporting:
      "MBIPA is a digital wellbeing platform designed to make mental health awareness, self-assessment, and supportive resources more accessible through technology.",
    image: {
      src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
      alt: "MBIPA wellbeing tests screen — WHO-5, WEMWBS, and MBI listed",
    },
  },
  challenge: {
    heading: "The challenge",
    body: "Mental health awareness and access to supportive resources remain important challenges. Digital technology can help make information, self-reflection tools, and supportive experiences more accessible.",
  },
  approach: {
    heading: "Our approach",
    body: "Sehass approached MBIPA as a digital product rather than simply a content application, combining product design, mobile engineering, AI interaction, assessment experiences, and supportive digital content.",
  },
  whatWeBuilt: {
    heading: "What we built",
    body: "A mobile-first digital wellbeing product spanning conversational AI, structured self-assessments, a musicoth\u00e9rapie library, and a multilingual user experience.",
    features: [
      {
        title: "AI conversational companion",
        body: "An AI-powered conversational experience designed to provide supportive interaction. Users can choose between different companion personalities to guide their session.",
        note: "The AI companion is not a replacement for a psychologist, therapist, doctor, or emergency service.",
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
        title: "Wellbeing assessments",
        body: "MBIPA offers structured self-assessment experiences including WHO-5, WEMWBS, and a burnout-related assessment (MBI). These are screening and self-reflection tools.",
        note: "These are assessment and screening experiences. They are not diagnostic instruments and do not replace professional care.",
        images: [
          {
            src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
            alt: "MBIPA wellbeing tests — WHO-5, WEMWBS, and MBI",
          },
        ],
      },
      {
        title: "Musicoth\u00e9rapie",
        body: "A wellbeing-oriented music library with categories such as relaxation and r\u00e9confort designed to accompany the user's session.",
        images: [
          {
            src: "/images/solutions/mbipa/musicotherapie.jpeg",
            alt: "MBIPA Musicoth\u00e9rapie screen — relaxation music library",
          },
        ],
      },
      {
        title: "Mobile application",
        body: "MBIPA is delivered as a mobile application with a dashboard summarising the session, quick access to core features, and daily supportive guidance.",
        images: [
          {
            src: "/images/solutions/mbipa/dashboard.jpeg",
            alt: "MBIPA dashboard — wellbeing score, quick access, and daily guidance",
          },
        ],
      },
      {
        title: "Multilingual experience",
        body: "MBIPA is designed as a multilingual experience — the interface shown in the current screenshots is presented in French.",
        note: "Language coverage reflects what is currently visible in product screenshots. Additional languages will be listed as they are confirmed.",
      },
      {
        title: "Onboarding and user experience",
        body: "Onboarding, navigation, and daily interaction were designed as part of the product experience — not just a wrapper around content.",
      },
    ],
  },
  gallery: {
    eyebrow: "Evidence",
    heading: "See the product.",
    body: "Real product screens across the AI companion, assessments, musicoth\u00e9rapie, and dashboard.",
    images: [
      {
        src: "/images/solutions/mbipa/dashboard.jpeg",
        alt: "MBIPA dashboard",
        caption: "Dashboard",
      },
      {
        src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
        alt: "MBIPA AI companion — Yassingou",
        caption: "AI companion",
      },
      {
        src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
        alt: "MBIPA wellbeing tests screen",
        caption: "Assessments",
      },
      {
        src: "/images/solutions/mbipa/musicotherapie.jpeg",
        alt: "MBIPA Musicoth\u00e9rapie library",
        caption: "Musicoth\u00e9rapie",
      },
    ],
  },
  technology: {
    eyebrow: "Built by Sehass Digital",
    heading: "The engineering.",
    body: "High-level disciplines used to design and build MBIPA end-to-end. Specific frameworks, models, and infrastructure are intentionally omitted until confirmed.",
    categories: [
      "Software Engineering",
      "AI",
      "Mobile Development",
      "Product Design",
      "Digital Wellbeing Technology",
    ],
  },
  related: {
    solution: {
      label: "MBIPA (Solution)",
      href: "/solutions/mbipa",
      kind: "solution",
    },
    industry: { label: "Healthcare", href: "/industries/healthcare" },
    capabilities: [
      { label: "AI & Machine Learning", href: "/what-we-build/ai" },
      { label: "Digital Products", href: "/what-we-build/digital-products" },
      { label: "Software Development", href: "/what-we-build/software" },
    ],
  },
  availability: {
    heading: "Available on mobile.",
    body: "MBIPA is published on both the Apple App Store and Google Play. Install it on your device to try it.",
    links: [
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
  },
  status: {
    heading: "Current status",
    body: "MBIPA is live and available to install. This case study describes what was built. No user counts, downloads, retention figures, revenue, clinical outcomes, or adoption metrics are published because none have been verified.",
    label: "Live",
    tone: "live",
  },
  closing: {
    heading: "Have a problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a project",
  },
};

/* ============================================================
 * AMAL AI
 * ============================================================ */
export const amalProject: Project = {
  slug: "amal-ai",
  href: "/projects/amal-ai",
  card: {
    title: "Amal AI",
    category: "Employment Technology",
    categoryTags: ["AI", "Software", "Digital Products", "Employment"],
    description:
      "A digital employment platform designed to help people discover opportunities, build professional profiles, and participate in an employment ecosystem.",
    status: "active",
    statusLabel: "Active",
    ctaLabel: "View Case Study",
    image: {
      src: "/images/solutions/amal/job-listings.jpeg",
      alt: "Amal AI job listings — Offres d'emploi",
    },
  },
  hero: {
    eyebrow: "CASE STUDY / AMAL AI",
    title: "Building technology around opportunity.",
    supporting:
      "Amal AI is a digital employment platform designed to help people discover opportunities, build their professional presence, and participate in a connected employment ecosystem.",
    image: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Amal AI landing screen — Construisez votre avenir et trouvez votre emploi",
    },
  },
  challenge: {
    heading: "The challenge",
    body: "Finding opportunities is not only about discovering jobs. People also need tools to present themselves professionally, prepare applications, and participate in an employment ecosystem.",
  },
  approach: {
    heading: "Our approach",
    body: "Amal brings multiple employment-related workflows — discovery, publishing, community, professional profiles, and AI-assisted preparation — into one connected digital experience rather than a job board.",
  },
  whatWeBuilt: {
    heading: "What we built",
    body: "A connected employment product covering the workflows candidates and organizations actually go through.",
    features: [
      {
        title: "Job discovery",
        body: "A dedicated job marketplace where users can browse and discover opportunities.",
        images: [
          {
            src: "/images/solutions/amal/job-listings.jpeg",
            alt: "Amal AI job listings — Offres d'emploi",
          },
        ],
      },
      {
        title: "Job publishing",
        body: "Organizations can publish employment opportunities into the same connected experience.",
      },
      {
        title: "Community",
        body: "An employment-focused community where users can share and discover opportunities together.",
        images: [
          {
            src: "/images/solutions/amal/community-feed.jpeg",
            alt: "Amal AI community feed — Communaut\u00e9",
          },
        ],
      },
      {
        title: "Professional profiles",
        body: "Users can build and manage their professional presence inside the platform.",
      },
      {
        title: "CV creation",
        body: "Tools to help users create and manage their professional CV.",
      },
      {
        title: "AI Career Coach",
        body: "AI-powered assistance designed to support users through their career journey — a supportive product feature, not a career outcome.",
      },
      {
        title: "Motivation letters",
        body: "AI-assisted support for creating job application materials.",
      },
    ],
  },
  gallery: {
    eyebrow: "Evidence",
    heading: "See the product.",
    body: "Real product surfaces — landing, job discovery, and community.",
    images: [
      {
        src: "/images/solutions/amal/landing.jpeg",
        alt: "Amal AI landing screen with primary calls to action",
        caption: "Landing",
      },
      {
        src: "/images/solutions/amal/job-listings.jpeg",
        alt: "Amal AI job listings screen",
        caption: "Job listings",
      },
      {
        src: "/images/solutions/amal/community-feed.jpeg",
        alt: "Amal AI community feed",
        caption: "Community",
      },
    ],
  },
  technology: {
    eyebrow: "Built by Sehass Digital",
    heading: "The engineering.",
    body: "High-level disciplines used to design and build Amal AI. Specific frameworks, models, and infrastructure are intentionally omitted until confirmed.",
    categories: [
      "Software Engineering",
      "AI",
      "Digital Product Development",
      "Mobile/Web Experience",
      "Employment Technology",
    ],
  },
  related: {
    solution: {
      label: "Amal AI (Solution)",
      href: "/solutions/amal-ai",
      kind: "solution",
    },
    industry: { label: "Business", href: "/industries/business" },
    capabilities: [
      { label: "Software Development", href: "/what-we-build/software" },
      { label: "AI & Machine Learning", href: "/what-we-build/ai" },
      { label: "Digital Products", href: "/what-we-build/digital-products" },
    ],
  },
  availability: {
    heading: "Available online.",
    body: "Amal AI is an active platform available through its official website.",
    links: [{ label: "amal.cf", href: "https://www.amal.cf", platform: "web" }],
  },
  status: {
    heading: "Current status",
    body: "Amal AI is an active platform. This case study describes what was built. No user counts, revenue figures, adoption metrics, or business outcomes are published because none have been verified in this repository.",
    label: "Active",
    tone: "active",
  },
  closing: {
    heading: "Have a problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a project",
  },
};

/* ============================================================
 * e-ARCEP AI ASSISTANT
 * ============================================================ */
export const eArcepProject: Project = {
  slug: "e-arcep",
  href: "/projects/e-arcep",
  card: {
    title: "e-ARCEP AI Assistant",
    category: "Government / Citizen Engagement",
    categoryTags: ["AI", "Government"],
    description:
      "An AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows.",
    status: "in-progress",
    statusLabel: "In Progress",
    ctaLabel: "View Case Study",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "e-ARCEP AI Assistant WhatsApp conversation",
    },
  },
  hero: {
    eyebrow: "CASE STUDY / ONGOING PROJECT",
    title: "Building a conversational interface for citizen engagement.",
    supporting:
      "An AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows.",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "e-ARCEP AI Assistant WhatsApp conversation — guided complaint submission and reference number",
    },
  },
  challenge: {
    heading: "The challenge",
    body: "Public-facing processes can become difficult to navigate when information and complaint workflows are disconnected from the communication channels people already use.",
  },
  approach: {
    heading: "Our approach",
    body: "Use conversational AI to create a guided interaction inside WhatsApp — a channel citizens are already familiar with — so information access and complaint submission become part of a single, structured conversation.",
  },
  whatWeBuilt: {
    heading: "What we built",
    body: "A conversational assistant that runs entirely inside WhatsApp and guides the user through a structured workflow.",
    features: [
      {
        title: "Conversational AI on WhatsApp",
        body: "An AI-powered conversational experience that guides citizens through information and complaint workflows through a channel they already use.",
        images: [
          {
            src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
            alt: "e-ARCEP WhatsApp conversation — assistant guiding a complaint",
          },
        ],
      },
      {
        title: "Guided complaint submission",
        body: "The workflow captures the operator, the nature of the issue, and the relevant details in a structured way.",
      },
      {
        title: "Reference number issued",
        body: "At the end of the flow the citizen receives a reference number they can use to follow up.",
      },
    ],
  },
  workflow: {
    eyebrow: "How it works",
    heading: "A structured, six-step conversation.",
    body: "This reflects the demonstrated workflow — not a production deployment. Real-world integration with downstream government systems is outside the scope of this project as shown.",
    steps: [
      {
        number: "01",
        title: "Citizen starts a conversation",
        summary:
          "The user opens WhatsApp and starts a conversation with the assistant.",
      },
      {
        number: "02",
        title: "AI assistant provides guidance",
        summary:
          "The assistant explains the process and offers a set of guided options.",
      },
      {
        number: "03",
        title: "Citizen submits a complaint",
        summary:
          "The user selects an operator and briefly describes the problem.",
      },
      {
        number: "04",
        title: "Relevant information is collected",
        summary: "The workflow captures the details needed to record the case.",
      },
      {
        number: "05",
        title: "The complaint is recorded",
        summary: "The complaint is captured and structured for handling.",
      },
      {
        number: "06",
        title: "A reference number is generated",
        summary:
          "The user receives a reference number they can use to follow up.",
      },
    ],
  },
  gallery: {
    eyebrow: "Evidence",
    heading: "See the product.",
    body: "The demonstrated WhatsApp workflow — captured from the actual conversation.",
    images: [
      {
        src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
        alt: "e-ARCEP AI Assistant WhatsApp conversation",
        caption: "WhatsApp conversation",
      },
    ],
  },
  technology: {
    eyebrow: "Technology",
    heading: "High-level capabilities.",
    body: "The project brings together several high-level capabilities. Specific AI models, backends, databases, cloud infrastructure, APIs, and programming languages are intentionally omitted until confirmed.",
    categories: [
      "Conversational AI",
      "WhatsApp Integration",
      "Workflow Automation",
      "Citizen Engagement",
      "Information Systems",
    ],
  },
  related: {
    industry: {
      label: "Government & NGOs",
      href: "/industries/government-ngos",
    },
    capabilities: [
      { label: "AI & Machine Learning", href: "/what-we-build/ai" },
      {
        label: "Digital Transformation",
        href: "/what-we-build/digital-transformation",
      },
      { label: "Software Development", href: "/what-we-build/software" },
    ],
  },
  status: {
    heading: "Project status",
    body: "This is an ongoing project. It is not presented as fully deployed. No national deployment, government-wide adoption, citizen numbers, response times, resolution rates, or official performance metrics are published because none have been verified in this repository.",
    label: "In Progress",
    tone: "in-progress",
  },
  closing: {
    heading: "Interested in building an AI-powered workflow?",
    supporting:
      "If your team has a citizen or customer workflow that could be simplified with AI, we can help design and build it.",
    cta: "Start a conversation",
  },
};

export const projects: readonly Project[] = [
  mbipaProject,
  amalProject,
  eArcepProject,
];

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
) as Record<ProjectSlug, Project>;

/* ============================================================
 * French translations
 * ============================================================ */

const mbipaProjectFr: Project = {
  slug: "mbipa",
  href: "/projects/mbipa",
  card: {
    title: "MBIPA",
    category: "Technologie de bien-être mental",
    categoryTags: ["AI", "Digital Products", "Healthcare"],
    description:
      "Une plateforme numérique de bien-être assistée par IA combinant technologie mobile, tests de bien-être, musicothérapie et compagnon conversationnel.",
    status: "live",
    statusLabel: "En ligne",
    ctaLabel: "Voir l\u2019étude de cas",
    image: {
      src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
      alt: "Écran du compagnon conversationnel IA MBIPA",
    },
  },
  hero: {
    eyebrow: "ÉTUDE DE CAS / MBIPA",
    title: "Construire une technologie pour la santé mentale.",
    supporting:
      "MBIPA est une plateforme numérique de bien-être conçue pour rendre la sensibilisation à la santé mentale, l\u2019auto-évaluation et les ressources de soutien plus accessibles grâce à la technologie.",
    image: {
      src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
      alt: "Écran des tests de bien-être MBIPA — WHO-5, WEMWBS et MBI",
    },
  },
  challenge: {
    heading: "Le défi",
    body:
      "La sensibilisation à la santé mentale et l\u2019accès aux ressources de soutien restent des enjeux importants. La technologie numérique peut aider à rendre l\u2019information, les outils de réflexion et les expériences de soutien plus accessibles.",
  },
  approach: {
    heading: "Notre approche",
    body:
      "Sehass a abordé MBIPA comme un produit numérique et non comme une simple application de contenu, en combinant design produit, ingénierie mobile, interaction IA, expériences d\u2019évaluation et contenus numériques de soutien.",
  },
  whatWeBuilt: {
    heading: "Ce que nous avons construit",
    body:
      "Un produit de bien-être numérique mobile-first couvrant IA conversationnelle, auto-évaluations structurées, bibliothèque de musicothérapie et expérience utilisateur multilingue.",
    features: [
      {
        title: "Compagnon conversationnel IA",
        body:
          "Une expérience conversationnelle propulsée par l\u2019IA, conçue pour offrir une interaction bienveillante. Les utilisateurs peuvent choisir entre différentes personnalités de compagnon pour guider leur séance.",
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
          "MBIPA propose des expériences d\u2019auto-évaluation structurées incluant WHO-5, WEMWBS et une évaluation liée au burnout (MBI). Ce sont des outils de dépistage et de réflexion.",
        note:
          "Ce sont des expériences d\u2019évaluation et de dépistage. Elles ne sont pas des instruments diagnostiques et ne remplacent pas un accompagnement professionnel.",
        images: [
          {
            src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
            alt: "Tests de bien-être MBIPA — WHO-5, WEMWBS et MBI",
          },
        ],
      },
      {
        title: "Musicothérapie",
        body:
          "Une bibliothèque musicale orientée bien-être avec des catégories comme relaxation et réconfort, pensée pour accompagner la séance de l\u2019utilisateur.",
        images: [
          {
            src: "/images/solutions/mbipa/musicotherapie.jpeg",
            alt: "Écran Musicothérapie MBIPA — bibliothèque de musique de relaxation",
          },
        ],
      },
      {
        title: "Application mobile",
        body:
          "MBIPA est livré comme une application mobile avec un tableau de bord qui résume la séance, offre un accès rapide aux fonctionnalités clés et propose un accompagnement quotidien.",
        images: [
          {
            src: "/images/solutions/mbipa/dashboard.jpeg",
            alt: "Tableau de bord MBIPA — score de bien-être, accès rapide et conseils du jour",
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
        title: "Onboarding et expérience utilisateur",
        body:
          "L\u2019onboarding, la navigation et l\u2019interaction quotidienne ont été conçus comme partie intégrante de l\u2019expérience produit — pas comme un simple habillage autour du contenu.",
      },
    ],
  },
  gallery: {
    eyebrow: "Preuve",
    heading: "Voir le produit.",
    body:
      "De vrais écrans produit — compagnon IA, évaluations, musicothérapie et tableau de bord.",
    images: [
      {
        src: "/images/solutions/mbipa/dashboard.jpeg",
        alt: "Tableau de bord MBIPA",
        caption: "Tableau de bord",
      },
      {
        src: "/images/solutions/mbipa/ai-companion-yassingou.jpeg",
        alt: "Compagnon IA MBIPA — Yassingou",
        caption: "Compagnon IA",
      },
      {
        src: "/images/solutions/mbipa/wellbeing-tests.jpeg",
        alt: "Écran des tests de bien-être MBIPA",
        caption: "Évaluations",
      },
      {
        src: "/images/solutions/mbipa/musicotherapie.jpeg",
        alt: "Bibliothèque Musicothérapie MBIPA",
        caption: "Musicothérapie",
      },
    ],
  },
  technology: {
    eyebrow: "Construit par Sehass Digital",
    heading: "L\u2019ingénierie.",
    body:
      "Disciplines de haut niveau utilisées pour concevoir et développer MBIPA de bout en bout. Les frameworks, modèles et infrastructures spécifiques sont volontairement omis tant qu\u2019ils ne sont pas confirmés.",
    categories: [
      "Ingénierie logicielle",
      "IA",
      "Développement mobile",
      "Design produit",
      "Technologie de bien-être numérique",
    ],
  },
  related: {
    solution: {
      label: "MBIPA (Solution)",
      href: "/solutions/mbipa",
      kind: "solution",
    },
    industry: { label: "Santé", href: "/industries/healthcare" },
    capabilities: [
      { label: "IA & apprentissage automatique", href: "/what-we-build/ai" },
      { label: "Produits numériques", href: "/what-we-build/digital-products" },
      { label: "Développement logiciel", href: "/what-we-build/software" },
    ],
  },
  availability: {
    heading: "Disponible sur mobile.",
    body:
      "MBIPA est publié à la fois sur l\u2019App Store d\u2019Apple et sur Google Play. Installez-le sur votre appareil pour l\u2019essayer.",
    links: [
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
  },
  status: {
    heading: "Statut actuel",
    body:
      "MBIPA est en ligne et disponible à l\u2019installation. Cette étude de cas décrit ce qui a été construit. Aucun nombre d\u2019utilisateurs, téléchargement, rétention, chiffre d\u2019affaires, résultat clinique ou métrique d\u2019adoption n\u2019est publié car rien n\u2019a été vérifié.",
    label: "En ligne",
    tone: "live",
  },
  closing: {
    heading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const amalProjectFr: Project = {
  slug: "amal-ai",
  href: "/projects/amal-ai",
  card: {
    title: "Amal AI",
    category: "Technologie d\u2019emploi",
    categoryTags: ["AI", "Software", "Digital Products", "Employment"],
    description:
      "Une plateforme numérique d\u2019emploi conçue pour aider les personnes à découvrir des opportunités, construire des profils professionnels et participer à un écosystème d\u2019emploi.",
    status: "active",
    statusLabel: "Active",
    ctaLabel: "Voir l\u2019étude de cas",
    image: {
      src: "/images/solutions/amal/job-listings.jpeg",
      alt: "Liste d\u2019offres Amal AI — Offres d'emploi",
    },
  },
  hero: {
    eyebrow: "ÉTUDE DE CAS / AMAL AI",
    title: "Construire une technologie autour de l\u2019opportunité.",
    supporting:
      "Amal AI est une plateforme numérique d\u2019emploi conçue pour aider les personnes à découvrir des opportunités, construire leur présence professionnelle et participer à un écosystème d\u2019emploi connecté.",
    image: {
      src: "/images/solutions/amal/landing.jpeg",
      alt: "Écran d\u2019accueil Amal AI — Construisez votre avenir et trouvez votre emploi",
    },
  },
  challenge: {
    heading: "Le défi",
    body:
      "Trouver des opportunités ne se résume pas à découvrir des offres. Les personnes ont aussi besoin d\u2019outils pour se présenter professionnellement, préparer leurs candidatures et participer à un écosystème d\u2019emploi.",
  },
  approach: {
    heading: "Notre approche",
    body:
      "Amal réunit plusieurs workflows liés à l\u2019emploi — découverte, publication, communauté, profils professionnels et préparation assistée par IA — dans une seule expérience numérique connectée, plutôt qu\u2019un tableau d\u2019offres.",
  },
  whatWeBuilt: {
    heading: "Ce que nous avons construit",
    body:
      "Un produit d\u2019emploi connecté couvrant les workflows que candidats et organisations traversent réellement.",
    features: [
      {
        title: "Découverte d\u2019offres",
        body:
          "Un marché d\u2019offres dédié où les utilisateurs peuvent parcourir et découvrir des opportunités.",
        images: [
          {
            src: "/images/solutions/amal/job-listings.jpeg",
            alt: "Liste d\u2019offres Amal AI — Offres d'emploi",
          },
        ],
      },
      {
        title: "Publication d\u2019offres",
        body:
          "Les organisations peuvent publier des opportunités d\u2019emploi dans la même expérience connectée.",
      },
      {
        title: "Communauté",
        body:
          "Une communauté centrée sur l\u2019emploi où les utilisateurs peuvent partager et découvrir des opportunités ensemble.",
        images: [
          {
            src: "/images/solutions/amal/community-feed.jpeg",
            alt: "Fil communautaire Amal AI — Communauté",
          },
        ],
      },
      {
        title: "Profils professionnels",
        body:
          "Les utilisateurs peuvent construire et gérer leur présence professionnelle à l\u2019intérieur de la plateforme.",
      },
      {
        title: "Création de CV",
        body:
          "Des outils pour aider les utilisateurs à créer et gérer leur CV professionnel.",
      },
      {
        title: "Coach de carrière IA",
        body:
          "Un accompagnement propulsé par l\u2019IA, conçu pour soutenir les utilisateurs dans leur parcours professionnel — une fonctionnalité de soutien, pas une promesse de résultat de carrière.",
      },
      {
        title: "Lettres de motivation",
        body:
          "Un accompagnement assisté par IA pour créer les documents de candidature.",
      },
    ],
  },
  gallery: {
    eyebrow: "Preuve",
    heading: "Voir le produit.",
    body:
      "De vraies surfaces produit — accueil, découverte d\u2019offres et communauté.",
    images: [
      {
        src: "/images/solutions/amal/landing.jpeg",
        alt: "Écran d\u2019accueil Amal AI avec les principaux appels à l\u2019action",
        caption: "Accueil",
      },
      {
        src: "/images/solutions/amal/job-listings.jpeg",
        alt: "Écran de liste d\u2019offres Amal AI",
        caption: "Offres d\u2019emploi",
      },
      {
        src: "/images/solutions/amal/community-feed.jpeg",
        alt: "Fil communautaire Amal AI",
        caption: "Communauté",
      },
    ],
  },
  technology: {
    eyebrow: "Construit par Sehass Digital",
    heading: "L\u2019ingénierie.",
    body:
      "Disciplines de haut niveau utilisées pour concevoir et développer Amal AI. Les frameworks, modèles et infrastructures spécifiques sont volontairement omis tant qu\u2019ils ne sont pas confirmés.",
    categories: [
      "Ingénierie logicielle",
      "IA",
      "Développement de produits numériques",
      "Expérience mobile/web",
      "Technologie de l\u2019emploi",
    ],
  },
  related: {
    solution: {
      label: "Amal AI (Solution)",
      href: "/solutions/amal-ai",
      kind: "solution",
    },
    industry: { label: "Entreprises", href: "/industries/business" },
    capabilities: [
      { label: "Développement logiciel", href: "/what-we-build/software" },
      { label: "IA & apprentissage automatique", href: "/what-we-build/ai" },
      { label: "Produits numériques", href: "/what-we-build/digital-products" },
    ],
  },
  availability: {
    heading: "Disponible en ligne.",
    body:
      "Amal AI est une plateforme active accessible via son site officiel.",
    links: [{ label: "amal.cf", href: "https://www.amal.cf", platform: "web" }],
  },
  status: {
    heading: "Statut actuel",
    body:
      "Amal AI est une plateforme active. Cette étude de cas décrit ce qui a été construit. Aucun nombre d\u2019utilisateurs, chiffre d\u2019affaires, métrique d\u2019adoption ou résultat commercial n\u2019est publié car rien n\u2019a été vérifié dans ce dépôt.",
    label: "Active",
    tone: "active",
  },
  closing: {
    heading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const eArcepProjectFr: Project = {
  slug: "e-arcep",
  href: "/projects/e-arcep",
  card: {
    title: "Assistant IA e-ARCEP",
    category: "Gouvernement / Engagement citoyen",
    categoryTags: ["AI", "Government"],
    description:
      "Un assistant WhatsApp propulsé par l\u2019IA, conçu pour guider les citoyens à travers des flux d\u2019information et de dépôt de réclamations.",
    status: "in-progress",
    statusLabel: "En cours",
    ctaLabel: "Voir l\u2019étude de cas",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "Conversation WhatsApp Assistant IA e-ARCEP",
    },
  },
  hero: {
    eyebrow: "ÉTUDE DE CAS / PROJET EN COURS",
    title:
      "Construire une interface conversationnelle pour l\u2019engagement citoyen.",
    supporting:
      "Un assistant WhatsApp propulsé par l\u2019IA, conçu pour guider les citoyens à travers des flux d\u2019information et de dépôt de réclamations.",
    image: {
      src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
      alt: "Conversation WhatsApp Assistant IA e-ARCEP — dépôt guidé de réclamation et numéro de référence",
    },
  },
  challenge: {
    heading: "Le défi",
    body:
      "Les processus destinés au public peuvent devenir difficiles à naviguer lorsque l\u2019information et les flux de réclamations sont déconnectés des canaux de communication que les gens utilisent déjà.",
  },
  approach: {
    heading: "Notre approche",
    body:
      "Utiliser l\u2019IA conversationnelle pour créer une interaction guidée à l\u2019intérieur de WhatsApp — un canal déjà familier aux citoyens — afin que l\u2019accès à l\u2019information et le dépôt de réclamation deviennent une seule conversation structurée.",
  },
  whatWeBuilt: {
    heading: "Ce que nous avons construit",
    body:
      "Un assistant conversationnel qui fonctionne entièrement à l\u2019intérieur de WhatsApp et guide l\u2019utilisateur à travers un workflow structuré.",
    features: [
      {
        title: "IA conversationnelle sur WhatsApp",
        body:
          "Une expérience conversationnelle propulsée par l\u2019IA qui guide les citoyens à travers les flux d\u2019information et de réclamations via un canal qu\u2019ils utilisent déjà.",
        images: [
          {
            src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
            alt: "Conversation WhatsApp e-ARCEP — l\u2019assistant guide une réclamation",
          },
        ],
      },
      {
        title: "Dépôt de réclamation guidé",
        body:
          "Le workflow capture l\u2019opérateur, la nature du problème et les détails pertinents de manière structurée.",
      },
      {
        title: "Numéro de référence émis",
        body:
          "À la fin du flux, le citoyen reçoit un numéro de référence pour effectuer le suivi.",
      },
    ],
  },
  workflow: {
    eyebrow: "Comment ça fonctionne",
    heading: "Une conversation structurée en six étapes.",
    body:
      "Cela reflète le flux démontré — pas un déploiement en production. L\u2019intégration réelle avec les systèmes gouvernementaux en aval est hors du périmètre du projet tel que présenté.",
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
        title: "Les informations utiles sont collectées",
        summary:
          "Le workflow capture les détails nécessaires pour enregistrer le cas.",
      },
      {
        number: "05",
        title: "La réclamation est enregistrée",
        summary: "La réclamation est capturée et structurée pour être traitée.",
      },
      {
        number: "06",
        title: "Un numéro de référence est généré",
        summary:
          "L\u2019utilisateur reçoit un numéro de référence pour effectuer le suivi.",
      },
    ],
  },
  gallery: {
    eyebrow: "Preuve",
    heading: "Voir le produit.",
    body:
      "Le flux WhatsApp démontré — capturé à partir de la conversation réelle.",
    images: [
      {
        src: "/images/solutions/e-arcep/whatsapp-conversation.jpeg",
        alt: "Conversation WhatsApp Assistant IA e-ARCEP",
        caption: "Conversation WhatsApp",
      },
    ],
  },
  technology: {
    eyebrow: "Technologie",
    heading: "Capacités de haut niveau.",
    body:
      "Le projet mobilise plusieurs capacités de haut niveau. Les modèles d\u2019IA, backends, bases de données, infrastructures cloud, API et langages spécifiques sont volontairement omis tant qu\u2019ils ne sont pas confirmés.",
    categories: [
      "IA conversationnelle",
      "Intégration WhatsApp",
      "Automatisation de workflows",
      "Engagement citoyen",
      "Systèmes d\u2019information",
    ],
  },
  related: {
    industry: {
      label: "Gouvernement & ONG",
      href: "/industries/government-ngos",
    },
    capabilities: [
      { label: "IA & apprentissage automatique", href: "/what-we-build/ai" },
      {
        label: "Transformation numérique",
        href: "/what-we-build/digital-transformation",
      },
      { label: "Développement logiciel", href: "/what-we-build/software" },
    ],
  },
  status: {
    heading: "Statut du projet",
    body:
      "Il s\u2019agit d\u2019un projet en cours. Il n\u2019est pas présenté comme entièrement déployé. Aucun déploiement national, adoption à l\u2019échelle du gouvernement, nombre de citoyens, temps de réponse, taux de résolution ou métrique officielle n\u2019est publié car rien n\u2019a été vérifié dans ce dépôt.",
    label: "En cours",
    tone: "in-progress",
  },
  closing: {
    heading: "Intéressé par la construction d\u2019un workflow assisté par IA ?",
    supporting:
      "Si votre équipe a un workflow citoyen ou client qui pourrait être simplifié par l\u2019IA, nous pouvons vous aider à le concevoir et à le construire.",
    cta: "Démarrer une conversation",
  },
};

const projectsFr: readonly Project[] = [
  mbipaProjectFr,
  amalProjectFr,
  eArcepProjectFr,
];

const projectBySlugFr = Object.fromEntries(
  projectsFr.map((p) => [p.slug, p]),
) as Record<ProjectSlug, Project>;

/* ============================================================
 * Bilingual getters
 * ============================================================ */

function localizeProject(lang: Locale, p: Project): Project {
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return {
    ...p,
    href: prefix(p.href),
    related: {
      ...p.related,
      solution: p.related.solution
        ? { ...p.related.solution, href: prefix(p.related.solution.href) }
        : undefined,
      industry: {
        ...p.related.industry,
        href: prefix(p.related.industry.href),
      },
      capabilities: p.related.capabilities.map((c) => ({
        ...c,
        href: prefix(c.href),
      })),
    },
  };
}

export function getProjects(lang: Locale): readonly Project[] {
  const source = lang === "fr" ? projectsFr : projects;
  return source.map((p) => localizeProject(lang, p));
}

export function getProjectBySlug(lang: Locale, slug: ProjectSlug): Project {
  const source = lang === "fr" ? projectBySlugFr[slug] : projectBySlug[slug];
  return localizeProject(lang, source);
}

const categoryTagFr: Record<ProjectCategoryTag, string> = {
  AI: "IA",
  Software: "Logiciels",
  "Digital Products": "Produits numériques",
  Healthcare: "Santé",
  Employment: "Emploi",
  Government: "Gouvernement",
};

export function localizeCategoryTag(
  lang: Locale,
  tag: ProjectCategoryTag,
): string {
  return lang === "fr" ? categoryTagFr[tag] : tag;
}
