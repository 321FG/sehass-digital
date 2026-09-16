import type { SolutionSummary } from "@/data/solutions";
import type { Locale } from "@/i18n/config";

export type IndustrySlug =
  | "healthcare"
  | "education"
  | "business"
  | "government-ngos"
  | "commerce";

export type IndustryIconName =
  | "healthcare"
  | "education"
  | "business"
  | "government"
  | "commerce";

/** Featured product reference on an industry card. */
export type IndustryFeature =
  | { kind: "solution"; solutionSlug: SolutionSummary["slug"] }
  | { kind: "upcoming"; name: string; href: string; note: string };

export type IndustryOverview = {
  slug: IndustrySlug;
  name: string;
  href: string;
  icon: IndustryIconName;
  description: string;
  capabilities: string[];
  feature?: IndustryFeature;
  ctaLabel: string;
};

export const industries: IndustryOverview[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    href: "/industries/healthcare",
    icon: "healthcare",
    description:
      "Digital technology can make health information, wellbeing tools, workflows and experiences more accessible.",
    capabilities: [
      "Digital Health",
      "AI",
      "Mobile Applications",
      "Data & Information",
      "Digital Products",
    ],
    feature: { kind: "solution", solutionSlug: "mbipa" },
    ctaLabel: "Explore Healthcare",
  },
  {
    slug: "education",
    name: "Education",
    href: "/industries/education",
    icon: "education",
    description:
      "Technology can help organizations improve access to information, learning experiences, communication and digital workflows.",
    capabilities: [
      "Digital Platforms",
      "AI",
      "Learning Experiences",
      "Information Systems",
      "Automation",
    ],
    ctaLabel: "Explore Education",
  },
  {
    slug: "business",
    name: "Business",
    href: "/industries/business",
    icon: "business",
    description:
      "Businesses need technology that helps them operate better, automate work, connect systems and create new digital experiences.",
    capabilities: [
      "Business Software",
      "Automation",
      "AI",
      "SaaS",
      "APIs & Integrations",
      "Digital Products",
    ],
    feature: { kind: "solution", solutionSlug: "amal-ai" },
    ctaLabel: "Explore Business",
  },
  {
    slug: "government-ngos",
    name: "Government & NGOs",
    href: "/industries/government-ngos",
    icon: "government",
    description:
      "Digital systems can help organizations communicate with citizens, manage information, automate workflows and make services more accessible.",
    capabilities: [
      "Citizen Engagement",
      "Conversational AI",
      "Digital Workflows",
      "Information Systems",
      "Automation",
    ],
    feature: { kind: "solution", solutionSlug: "e-arcep" },
    ctaLabel: "Explore Government & NGOs",
  },
  {
    slug: "commerce",
    name: "Commerce",
    href: "/industries/commerce",
    icon: "commerce",
    description:
      "Digital commerce requires reliable software, connected systems and experiences that make it easier for people and organizations to discover, buy and operate.",
    capabilities: [
      "E-commerce",
      "Digital Platforms",
      "Payments & Integrations",
      "Inventory & Operations",
      "Customer Experiences",
    ],
    feature: {
      kind: "upcoming",
      name: "e-Sehass",
      href: "/e-sehass",
      note: "An upcoming marketplace initiative within the broader Sehass ecosystem.",
    },
    ctaLabel: "Explore Commerce",
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((i) => [i.slug, i]),
) as Record<IndustrySlug, IndustryOverview>;

/* ---------------------------------------------------------------
 * Cross-industry section — capability → problem → real example
 * ------------------------------------------------------------- */
export type CrossIndustryRow = {
  capability: string;
  problem: string;
  example: string;
};

export const crossIndustryRows: CrossIndustryRow[] = [
  {
    capability: "Software Engineering",
    problem: "Organizations need reliable, well-engineered software.",
    example: "MBIPA · Amal AI",
  },
  {
    capability: "AI",
    problem:
      "Teams need conversational, generative or supportive AI experiences embedded in real workflows.",
    example: "MBIPA AI Companion · e-ARCEP Assistant",
  },
  {
    capability: "Digital Products",
    problem:
      "End-users need thoughtful digital products, not internal-tool aesthetics.",
    example: "MBIPA · Amal AI",
  },
  {
    capability: "Automation",
    problem: "Manual workflows slow organizations down and duplicate effort.",
    example: "e-ARCEP complaint workflow",
  },
  {
    capability: "Integrations",
    problem:
      "Disconnected systems create friction, missing data and rework.",
    example: "—",
  },
  {
    capability: "Data & Information Systems",
    problem:
      "Information is scattered, hard to access and hard to act on.",
    example: "—",
  },
];

/* ---------------------------------------------------------------
 * Per-industry detail page content
 * ------------------------------------------------------------- */
export type IndustryUseCase = { title: string; summary: string };
export type IndustryApproachStep = { number: string; title: string; summary: string };

export type IndustryContent = {
  hero: { eyebrow: string; title: string; supporting: string };
  useCases: {
    heading: string;
    supporting: string;
    items: IndustryUseCase[];
    /** Renders as a restrained note when we don't want to imply deployments. */
    note?: string;
  };
  approach: {
    heading: string;
    supporting?: string;
    steps: IndustryApproachStep[];
  };
  /** When we can point to a real Sehass solution. */
  featuredSolutionSlug?: SolutionSummary["slug"];
  featuredSolution?: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  /** When there is no verified project, we show a restrained invite instead. */
  restrainedInvite?: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    href: string;
  };
  closing: { heading: string; supporting: string; cta: string; secondary?: { label: string; href: string } };
};

export const healthcareContent: IndustryContent = {
  hero: {
    eyebrow: "HEALTHCARE",
    title: "Technology that makes wellbeing more accessible.",
    supporting:
      "We build digital experiences that can help people access information, wellbeing tools and supportive technology more easily.",
  },
  useCases: {
    heading: "Where technology can help",
    supporting:
      "Areas where software, AI and mobile product design can support people's wellbeing journey. These describe capability areas, not medical claims.",
    items: [
      {
        title: "Digital Wellbeing",
        summary:
          "Mobile experiences designed to make wellbeing content and reflection tools easier to access.",
      },
      {
        title: "AI Assistants",
        summary:
          "Conversational companions designed to support — not replace — human care.",
      },
      {
        title: "Self-Assessment Experiences",
        summary:
          "Structured screening tools such as WHO-5, WEMWBS and MBI, presented as awareness tools rather than diagnostic instruments.",
      },
      {
        title: "Mobile Health Experiences",
        summary:
          "Native-feeling mobile applications engineered for both iOS and Android.",
      },
      {
        title: "Information & Awareness",
        summary:
          "Content, resources and multilingual experiences that make wellbeing information more approachable.",
      },
    ],
    note:
      "These describe capability areas. They are not medical claims and are not a substitute for professional care.",
  },
  approach: {
    heading: "How we approach healthcare technology",
    supporting:
      "A product-oriented approach — designed for people first, engineered to be reliable and evaluated over time.",
    steps: [
      { number: "01", title: "Understand the user", summary: "Learn about the people the product is designed to support." },
      { number: "02", title: "Design the experience", summary: "Design an experience that feels human, calm and clear." },
      { number: "03", title: "Build the technology", summary: "Engineer the mobile, AI and data foundations." },
      { number: "04", title: "Evaluate", summary: "Review how the product performs against its intended purpose." },
      { number: "05", title: "Improve", summary: "Iterate with what we learn to keep the experience relevant." },
    ],
  },
  featuredSolutionSlug: "mbipa",
  featuredSolution: {
    eyebrow: "A real Sehass solution",
    heading: "MBIPA",
    body:
      "MBIPA demonstrates how Sehass combines mobile software, AI, wellbeing assessments, musicothérapie and multilingual product experiences.",
  },
  closing: {
    heading: "Have a healthcare technology problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a Project",
  },
};

export const educationContent: IndustryContent = {
  hero: {
    eyebrow: "EDUCATION",
    title: "Digital experiences designed to make knowledge more accessible.",
    supporting:
      "We build software and digital products that can help organizations improve access to information, learning experiences and communication.",
  },
  useCases: {
    heading: "Where technology can help",
    supporting:
      "Areas of education technology Sehass Digital can build in. These describe capability areas, not existing deployments.",
    items: [
      { title: "Learning Platforms", summary: "Web and mobile experiences that make learning content easier to access." },
      { title: "AI Learning Assistants", summary: "Conversational assistants that can support learners and educators." },
      { title: "Information Systems", summary: "Software that helps organizations manage learners, programs and content." },
      { title: "Digital Communities", summary: "Community experiences that connect learners and educators." },
      { title: "Workflow Automation", summary: "Automation for repetitive administrative and academic workflows." },
    ],
    note:
      "These are areas we can build in. We do not claim existing education deployments unless verified.",
  },
  approach: {
    heading: "How we approach education technology",
    supporting:
      "Software engineered around real learners and real organizations, not templates.",
    steps: [
      { number: "01", title: "Understand learners", summary: "Learn about the people the product is designed for." },
      { number: "02", title: "Understand organizations", summary: "Understand how educators and administrators actually work." },
      { number: "03", title: "Design the experience", summary: "Design a clear, respectful learning experience." },
      { number: "04", title: "Build the platform", summary: "Engineer the software foundations that make it real." },
      { number: "05", title: "Improve continuously", summary: "Iterate based on how the product is actually used." },
    ],
  },
  restrainedInvite: {
    eyebrow: "Looking for education technology?",
    heading: "Let's explore what we can build.",
    body:
      "We don't publish education case studies we haven't built yet. If your organization is exploring a learning platform, AI assistant, information system or workflow automation, we can help design and engineer it.",
    cta: "Start a conversation",
    href: "/contact",
  },
  closing: {
    heading: "Have an education technology problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a Project",
  },
};

export const businessContent: IndustryContent = {
  hero: {
    eyebrow: "BUSINESS",
    title: "Software and AI for organizations ready to move forward.",
    supporting:
      "We build technology that helps organizations improve operations, automate processes, connect systems and create new digital products.",
  },
  useCases: {
    heading: "Use cases",
    supporting:
      "Business technology areas Sehass Digital can build in.",
    items: [
      { title: "Business Software", summary: "Custom software engineered around how your organization actually operates." },
      { title: "AI Automation", summary: "AI applied to real workflows, not demos." },
      { title: "Internal Tools", summary: "Reliable internal tools that replace spreadsheets and manual steps." },
      { title: "Customer Platforms", summary: "Digital platforms for the people your organization serves." },
      { title: "SaaS", summary: "Multi-tenant software products engineered for scale." },
      { title: "APIs & Integrations", summary: "Connecting the systems you already run with the ones you want next." },
      { title: "Digital Products", summary: "New digital product experiences designed and engineered end-to-end." },
    ],
  },
  approach: {
    heading: "Problems we can help solve",
    supporting:
      "Common technology challenges we can help organizations work through.",
    steps: [
      { number: "01", title: "Manual workflows", summary: "Repetitive work slowing your team down." },
      { number: "02", title: "Disconnected systems", summary: "Systems that don't talk to each other." },
      { number: "03", title: "Repetitive tasks", summary: "Work that could be automated by software or AI." },
      { number: "04", title: "Poor digital experiences", summary: "Products that feel dated or hard to use." },
      { number: "05", title: "Scattered information", summary: "Information spread across too many systems." },
      { number: "06", title: "New digital product", summary: "A digital product that doesn't exist yet." },
    ],
  },
  featuredSolutionSlug: "amal-ai",
  featuredSolution: {
    eyebrow: "A real Sehass solution",
    heading: "Amal AI",
    body:
      "Amal AI is a real example of a digital platform built by Sehass — designed and engineered end-to-end.",
  },
  closing: {
    heading: "Have a business technology problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a Project",
  },
};

export const governmentContent: IndustryContent = {
  hero: {
    eyebrow: "GOVERNMENT & NGOs",
    title: "Technology that connects organizations with the people they serve.",
    supporting:
      "We build digital systems that can help organizations improve communication, information access, citizen engagement and operational workflows.",
  },
  useCases: {
    heading: "Use cases",
    supporting:
      "Areas of citizen-facing and public-sector technology Sehass Digital can build in.",
    items: [
      { title: "Citizen Engagement", summary: "Digital experiences that make services easier to reach." },
      { title: "Conversational AI", summary: "AI assistants that meet people in the interfaces they already use." },
      { title: "Complaint & Request Workflows", summary: "Structured workflows for capturing and following up on citizen requests." },
      { title: "Information Access", summary: "Making public information easier to find and understand." },
      { title: "Digital Forms", summary: "Well-designed forms that reduce friction and errors." },
      { title: "Workflow Automation", summary: "Automating the steps that don't need to be manual." },
      { title: "Data & Information Systems", summary: "Software that helps organizations organize and act on information." },
    ],
  },
  approach: {
    heading: "Why conversational interfaces?",
    supporting:
      "Familiar messaging interfaces can reduce friction when people need to access information or interact with a service. They do not guarantee universal accessibility or adoption — but they meet many people where they already are.",
    steps: [
      { number: "01", title: "Start where people are", summary: "Reach people in interfaces they already use." },
      { number: "02", title: "Guide the interaction", summary: "Provide structured guidance rather than a blank input." },
      { number: "03", title: "Capture structured information", summary: "Turn a conversation into a workflow the organization can act on." },
      { number: "04", title: "Follow up", summary: "Provide references so people can track what happens next." },
    ],
  },
  featuredSolutionSlug: "e-arcep",
  featuredSolution: {
    eyebrow: "An ongoing Sehass project",
    heading: "e-ARCEP AI Assistant",
    body:
      "An AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows. Presented as an ongoing project — not a nationwide deployment.",
  },
  closing: {
    heading: "Have a public-sector or NGO problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a Project",
  },
};

export const commerceContent: IndustryContent = {
  hero: {
    eyebrow: "COMMERCE",
    title: "Digital commerce built around better experiences.",
    supporting:
      "We build the software, platforms and integrations that support modern digital commerce.",
  },
  useCases: {
    heading: "Use cases",
    supporting:
      "Areas of commerce technology Sehass Digital can build in.",
    items: [
      { title: "E-commerce", summary: "Online stores and marketplace experiences." },
      { title: "Product Catalogs", summary: "Structured catalogs that scale from tens to thousands of items." },
      { title: "Payments", summary: "Payment integrations that fit your market and your customers." },
      { title: "Inventory", summary: "Inventory systems that reflect the real state of what's available." },
      { title: "Orders", summary: "Order workflows engineered for reliability." },
      { title: "Customer Experiences", summary: "Digital experiences designed around the customer, not the operator." },
      { title: "Business Integrations", summary: "Connecting commerce with the other systems the business runs." },
    ],
  },
  approach: {
    heading: "How we approach commerce technology",
    supporting:
      "Engineered around the people who buy, the people who sell and the systems that support them.",
    steps: [
      { number: "01", title: "Understand the market", summary: "Understand the buyers, sellers and the context." },
      { number: "02", title: "Design the experience", summary: "Design a shopping experience that respects everyone's time." },
      { number: "03", title: "Build the platform", summary: "Engineer catalog, cart, checkout and admin surfaces." },
      { number: "04", title: "Integrate", summary: "Wire in payments, inventory and business systems." },
      { number: "05", title: "Operate", summary: "Support the business through the day-to-day of running commerce." },
    ],
  },
  restrainedInvite: {
    eyebrow: "e-Sehass",
    heading: "An upcoming marketplace initiative within the broader Sehass ecosystem.",
    body:
      "e-Sehass is an upcoming marketplace initiative. It is not yet a launched platform — no product counts, customer counts, revenue or transaction volume are published because none has been verified.",
    cta: "Explore e-Sehass",
    href: "/e-sehass",
  },
  closing: {
    heading: "Have a commerce technology problem worth solving?",
    supporting: "Let's build the technology to solve it.",
    cta: "Start a Project",
  },
};

export const industryContentBySlug: Record<IndustrySlug, IndustryContent> = {
  healthcare: healthcareContent,
  education: educationContent,
  business: businessContent,
  "government-ngos": governmentContent,
  commerce: commerceContent,
};

/* ---------------------------------------------------------------
 * French translations
 * ------------------------------------------------------------- */

const industriesFr: IndustryOverview[] = [
  {
    slug: "healthcare",
    name: "Santé",
    href: "/industries/healthcare",
    icon: "healthcare",
    description:
      "La technologie numérique peut rendre l\u2019information santé, les outils de bien-être, les workflows et les expériences plus accessibles.",
    capabilities: [
      "Santé numérique",
      "IA",
      "Applications mobiles",
      "Données & information",
      "Produits numériques",
    ],
    feature: { kind: "solution", solutionSlug: "mbipa" },
    ctaLabel: "Explorer la santé",
  },
  {
    slug: "education",
    name: "Éducation",
    href: "/industries/education",
    icon: "education",
    description:
      "La technologie peut aider les organisations à améliorer l\u2019accès à l\u2019information, aux expériences d\u2019apprentissage, à la communication et aux workflows numériques.",
    capabilities: [
      "Plateformes numériques",
      "IA",
      "Expériences d\u2019apprentissage",
      "Systèmes d\u2019information",
      "Automatisation",
    ],
    ctaLabel: "Explorer l\u2019éducation",
  },
  {
    slug: "business",
    name: "Entreprises",
    href: "/industries/business",
    icon: "business",
    description:
      "Les entreprises ont besoin d\u2019une technologie qui les aide à mieux opérer, à automatiser le travail, à connecter les systèmes et à créer de nouvelles expériences numériques.",
    capabilities: [
      "Logiciels métiers",
      "Automatisation",
      "IA",
      "SaaS",
      "API & intégrations",
      "Produits numériques",
    ],
    feature: { kind: "solution", solutionSlug: "amal-ai" },
    ctaLabel: "Explorer les entreprises",
  },
  {
    slug: "government-ngos",
    name: "Gouvernement & ONG",
    href: "/industries/government-ngos",
    icon: "government",
    description:
      "Les systèmes numériques peuvent aider les organisations à communiquer avec les citoyens, gérer l\u2019information, automatiser les workflows et rendre les services plus accessibles.",
    capabilities: [
      "Engagement citoyen",
      "IA conversationnelle",
      "Workflows numériques",
      "Systèmes d\u2019information",
      "Automatisation",
    ],
    feature: { kind: "solution", solutionSlug: "e-arcep" },
    ctaLabel: "Explorer Gouvernement & ONG",
  },
  {
    slug: "commerce",
    name: "Commerce",
    href: "/industries/commerce",
    icon: "commerce",
    description:
      "Le commerce numérique demande des logiciels fiables, des systèmes connectés et des expériences qui facilitent la découverte, l\u2019achat et l\u2019exploitation pour les personnes et les organisations.",
    capabilities: [
      "E-commerce",
      "Plateformes numériques",
      "Paiements & intégrations",
      "Stocks & opérations",
      "Expériences client",
    ],
    feature: {
      kind: "upcoming",
      name: "e-Sehass",
      href: "/e-sehass",
      note: "Une initiative de marketplace à venir au sein de l\u2019écosystème Sehass.",
    },
    ctaLabel: "Explorer le commerce",
  },
];

const industryBySlugFr = Object.fromEntries(
  industriesFr.map((i) => [i.slug, i]),
) as Record<IndustrySlug, IndustryOverview>;

const crossIndustryRowsFr: CrossIndustryRow[] = [
  {
    capability: "Ingénierie logicielle",
    problem: "Les organisations ont besoin de logiciels fiables et bien conçus.",
    example: "MBIPA · Amal AI",
  },
  {
    capability: "IA",
    problem:
      "Les équipes ont besoin d\u2019expériences IA conversationnelles, génératives ou de soutien, intégrées à de vrais workflows.",
    example: "Compagnon IA MBIPA · Assistant e-ARCEP",
  },
  {
    capability: "Produits numériques",
    problem:
      "Les utilisateurs finaux ont besoin de produits numériques réfléchis, pas d\u2019esthétique d\u2019outil interne.",
    example: "MBIPA · Amal AI",
  },
  {
    capability: "Automatisation",
    problem:
      "Les workflows manuels ralentissent les organisations et dupliquent l\u2019effort.",
    example: "Workflow de réclamation e-ARCEP",
  },
  {
    capability: "Intégrations",
    problem:
      "Les systèmes déconnectés créent frictions, données manquantes et retravail.",
    example: "—",
  },
  {
    capability: "Données & systèmes d\u2019information",
    problem:
      "L\u2019information est éparpillée, difficile à trouver et difficile à exploiter.",
    example: "—",
  },
];

const healthcareContentFr: IndustryContent = {
  hero: {
    eyebrow: "SANTÉ",
    title: "Une technologie qui rend le bien-être plus accessible.",
    supporting:
      "Nous concevons des expériences numériques qui aident les personnes à accéder plus facilement à l\u2019information, aux outils de bien-être et à des technologies de soutien.",
  },
  useCases: {
    heading: "Là où la technologie peut aider",
    supporting:
      "Domaines où le logiciel, l\u2019IA et le design produit mobile peuvent accompagner le parcours de bien-être. Ce sont des domaines de compétences, pas des allégations médicales.",
    items: [
      {
        title: "Bien-être numérique",
        summary:
          "Des expériences mobiles conçues pour rendre plus accessibles les contenus et les outils de réflexion liés au bien-être.",
      },
      {
        title: "Assistants IA",
        summary:
          "Des compagnons conversationnels conçus pour soutenir — non remplacer — le soin humain.",
      },
      {
        title: "Auto-évaluations",
        summary:
          "Des outils de dépistage structurés comme WHO-5, WEMWBS et MBI, présentés comme outils de sensibilisation plutôt qu\u2019instruments de diagnostic.",
      },
      {
        title: "Expériences santé mobiles",
        summary:
          "Des applications mobiles au feeling natif, développées pour iOS et Android.",
      },
      {
        title: "Information & sensibilisation",
        summary:
          "Des contenus, ressources et expériences multilingues qui rendent l\u2019information sur le bien-être plus accessible.",
      },
    ],
    note:
      "Ce sont des domaines de compétences. Ce ne sont pas des allégations médicales et cela ne remplace pas un accompagnement professionnel.",
  },
  approach: {
    heading: "Comment nous abordons la technologie de santé",
    supporting:
      "Une approche orientée produit — pensée d\u2019abord pour les personnes, développée pour être fiable et évaluée dans la durée.",
    steps: [
      { number: "01", title: "Comprendre l\u2019utilisateur", summary: "Apprendre à connaître les personnes que le produit doit soutenir." },
      { number: "02", title: "Concevoir l\u2019expérience", summary: "Concevoir une expérience humaine, calme et claire." },
      { number: "03", title: "Construire la technologie", summary: "Développer les fondations mobiles, IA et données." },
      { number: "04", title: "Évaluer", summary: "Examiner la performance du produit au regard de son intention." },
      { number: "05", title: "Améliorer", summary: "Itérer à partir de ce que nous apprenons pour que l\u2019expérience reste pertinente." },
    ],
  },
  featuredSolutionSlug: "mbipa",
  featuredSolution: {
    eyebrow: "Une vraie solution Sehass",
    heading: "MBIPA",
    body:
      "MBIPA illustre la manière dont Sehass combine logiciel mobile, IA, tests de bien-être, musicothérapie et expériences produit multilingues.",
  },
  closing: {
    heading:
      "Vous avez un problème de technologie de santé qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const educationContentFr: IndustryContent = {
  hero: {
    eyebrow: "ÉDUCATION",
    title:
      "Des expériences numériques conçues pour rendre le savoir plus accessible.",
    supporting:
      "Nous construisons des logiciels et des produits numériques qui aident les organisations à améliorer l\u2019accès à l\u2019information, aux expériences d\u2019apprentissage et à la communication.",
  },
  useCases: {
    heading: "Là où la technologie peut aider",
    supporting:
      "Domaines de la technologie éducative dans lesquels Sehass Digital peut construire. Ce sont des domaines de compétences, pas des déploiements existants.",
    items: [
      { title: "Plateformes d\u2019apprentissage", summary: "Des expériences web et mobiles qui facilitent l\u2019accès aux contenus d\u2019apprentissage." },
      { title: "Assistants d\u2019apprentissage IA", summary: "Des assistants conversationnels capables de soutenir apprenants et éducateurs." },
      { title: "Systèmes d\u2019information", summary: "Des logiciels qui aident les organisations à gérer apprenants, programmes et contenus." },
      { title: "Communautés numériques", summary: "Des expériences communautaires qui connectent apprenants et éducateurs." },
      { title: "Automatisation de workflows", summary: "L\u2019automatisation des workflows administratifs et académiques répétitifs." },
    ],
    note:
      "Ce sont des domaines dans lesquels nous pouvons construire. Nous ne revendiquons pas de déploiements existants dans l\u2019éducation sans vérification.",
  },
  approach: {
    heading: "Comment nous abordons la technologie éducative",
    supporting:
      "Des logiciels conçus autour de vrais apprenants et de vraies organisations, pas de modèles.",
    steps: [
      { number: "01", title: "Comprendre les apprenants", summary: "Apprendre à connaître les personnes pour qui le produit est conçu." },
      { number: "02", title: "Comprendre les organisations", summary: "Comprendre comment éducateurs et administrateurs travaillent réellement." },
      { number: "03", title: "Concevoir l\u2019expérience", summary: "Concevoir une expérience d\u2019apprentissage claire et respectueuse." },
      { number: "04", title: "Construire la plateforme", summary: "Développer les fondations logicielles qui rendent tout cela réel." },
      { number: "05", title: "Améliorer en continu", summary: "Itérer à partir de la manière dont le produit est réellement utilisé." },
    ],
  },
  restrainedInvite: {
    eyebrow: "À la recherche de technologie éducative ?",
    heading: "Explorons ce que nous pouvons construire.",
    body:
      "Nous ne publions pas d\u2019études de cas éducatives que nous n\u2019avons pas construites. Si votre organisation explore une plateforme d\u2019apprentissage, un assistant IA, un système d\u2019information ou une automatisation de workflows, nous pouvons vous aider à la concevoir et à la développer.",
    cta: "Démarrer une conversation",
    href: "/contact",
  },
  closing: {
    heading:
      "Vous avez un problème de technologie éducative qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const businessContentFr: IndustryContent = {
  hero: {
    eyebrow: "ENTREPRISES",
    title:
      "Du logiciel et de l\u2019IA pour les organisations prêtes à avancer.",
    supporting:
      "Nous construisons une technologie qui aide les organisations à améliorer leurs opérations, à automatiser leurs processus, à connecter leurs systèmes et à créer de nouveaux produits numériques.",
  },
  useCases: {
    heading: "Cas d\u2019usage",
    supporting:
      "Domaines de la technologie d\u2019entreprise dans lesquels Sehass Digital peut construire.",
    items: [
      { title: "Logiciels métiers", summary: "Des logiciels sur mesure conçus autour du fonctionnement réel de votre organisation." },
      { title: "Automatisation IA", summary: "L\u2019IA appliquée à de vrais workflows, pas à des démos." },
      { title: "Outils internes", summary: "Des outils internes fiables qui remplacent les tableurs et les étapes manuelles." },
      { title: "Plateformes clients", summary: "Des plateformes numériques pour les personnes que votre organisation sert." },
      { title: "SaaS", summary: "Des produits logiciels multi-tenant conçus pour évoluer." },
      { title: "API & intégrations", summary: "Connecter les systèmes que vous exploitez déjà à ceux que vous voulez ensuite." },
      { title: "Produits numériques", summary: "De nouvelles expériences produit conçues et développées de bout en bout." },
    ],
  },
  approach: {
    heading: "Problèmes que nous pouvons aider à résoudre",
    supporting:
      "Des défis technologiques courants sur lesquels nous pouvons accompagner les organisations.",
    steps: [
      { number: "01", title: "Workflows manuels", summary: "Un travail répétitif qui ralentit votre équipe." },
      { number: "02", title: "Systèmes déconnectés", summary: "Des systèmes qui ne se parlent pas." },
      { number: "03", title: "Tâches répétitives", summary: "Un travail qui pourrait être automatisé par le logiciel ou l\u2019IA." },
      { number: "04", title: "Mauvaises expériences numériques", summary: "Des produits qui semblent datés ou difficiles à utiliser." },
      { number: "05", title: "Information éparpillée", summary: "Une information dispersée sur trop de systèmes." },
      { number: "06", title: "Nouveau produit numérique", summary: "Un produit numérique qui n\u2019existe pas encore." },
    ],
  },
  featuredSolutionSlug: "amal-ai",
  featuredSolution: {
    eyebrow: "Une vraie solution Sehass",
    heading: "Amal AI",
    body:
      "Amal AI est un exemple réel de plateforme numérique conçue par Sehass — pensée et développée de bout en bout.",
  },
  closing: {
    heading:
      "Vous avez un problème de technologie d\u2019entreprise qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const governmentContentFr: IndustryContent = {
  hero: {
    eyebrow: "GOUVERNEMENT & ONG",
    title:
      "Une technologie qui relie les organisations aux personnes qu\u2019elles servent.",
    supporting:
      "Nous concevons des systèmes numériques qui aident les organisations à améliorer la communication, l\u2019accès à l\u2019information, l\u2019engagement citoyen et les workflows opérationnels.",
  },
  useCases: {
    heading: "Cas d\u2019usage",
    supporting:
      "Domaines de technologie citoyenne et publique dans lesquels Sehass Digital peut construire.",
    items: [
      { title: "Engagement citoyen", summary: "Des expériences numériques qui rendent les services plus faciles d\u2019accès." },
      { title: "IA conversationnelle", summary: "Des assistants IA qui rencontrent les gens dans les interfaces qu\u2019ils utilisent déjà." },
      { title: "Flux de réclamations & demandes", summary: "Des workflows structurés pour capturer et suivre les demandes citoyennes." },
      { title: "Accès à l\u2019information", summary: "Rendre l\u2019information publique plus facile à trouver et à comprendre." },
      { title: "Formulaires numériques", summary: "Des formulaires bien conçus qui réduisent friction et erreurs." },
      { title: "Automatisation de workflows", summary: "Automatiser les étapes qui n\u2019ont pas besoin d\u2019être manuelles." },
      { title: "Données & systèmes d\u2019information", summary: "Des logiciels qui aident les organisations à organiser et exploiter l\u2019information." },
    ],
  },
  approach: {
    heading: "Pourquoi les interfaces conversationnelles ?",
    supporting:
      "Les interfaces de messagerie familières peuvent réduire la friction lorsque les gens veulent accéder à une information ou interagir avec un service. Elles ne garantissent pas une accessibilité ou une adoption universelles — mais elles rencontrent beaucoup de personnes là où elles sont déjà.",
    steps: [
      { number: "01", title: "Partir de là où sont les gens", summary: "Rencontrer les personnes dans les interfaces qu\u2019elles utilisent déjà." },
      { number: "02", title: "Guider l\u2019interaction", summary: "Offrir un accompagnement structuré plutôt qu\u2019un champ vide." },
      { number: "03", title: "Capturer une information structurée", summary: "Transformer une conversation en un workflow exploitable par l\u2019organisation." },
      { number: "04", title: "Assurer le suivi", summary: "Fournir des références pour que les personnes puissent suivre la suite." },
    ],
  },
  featuredSolutionSlug: "e-arcep",
  featuredSolution: {
    eyebrow: "Un projet Sehass en cours",
    heading: "Assistant IA e-ARCEP",
    body:
      "Un assistant WhatsApp propulsé par l\u2019IA, conçu pour guider les citoyens à travers l\u2019information et le dépôt de réclamations. Présenté comme un projet en cours — pas un déploiement national.",
  },
  closing: {
    heading:
      "Vous avez un défi du secteur public ou d\u2019une ONG qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const commerceContentFr: IndustryContent = {
  hero: {
    eyebrow: "COMMERCE",
    title: "Un commerce numérique bâti autour de meilleures expériences.",
    supporting:
      "Nous construisons les logiciels, les plateformes et les intégrations qui soutiennent le commerce numérique moderne.",
  },
  useCases: {
    heading: "Cas d\u2019usage",
    supporting:
      "Domaines de la technologie du commerce dans lesquels Sehass Digital peut construire.",
    items: [
      { title: "E-commerce", summary: "Des boutiques en ligne et expériences de marketplace." },
      { title: "Catalogues produits", summary: "Des catalogues structurés qui passent de dizaines à des milliers d\u2019articles." },
      { title: "Paiements", summary: "Des intégrations de paiement adaptées à votre marché et à vos clients." },
      { title: "Stocks", summary: "Des systèmes de gestion des stocks qui reflètent l\u2019état réel de ce qui est disponible." },
      { title: "Commandes", summary: "Des workflows de commande conçus pour la fiabilité." },
      { title: "Expériences client", summary: "Des expériences numériques pensées pour le client, pas pour l\u2019opérateur." },
      { title: "Intégrations métiers", summary: "Connecter le commerce aux autres systèmes que l\u2019entreprise utilise." },
    ],
  },
  approach: {
    heading: "Comment nous abordons la technologie du commerce",
    supporting:
      "Pensée autour de ceux qui achètent, de ceux qui vendent et des systèmes qui les soutiennent.",
    steps: [
      { number: "01", title: "Comprendre le marché", summary: "Comprendre acheteurs, vendeurs et contexte." },
      { number: "02", title: "Concevoir l\u2019expérience", summary: "Concevoir une expérience d\u2019achat qui respecte le temps de chacun." },
      { number: "03", title: "Construire la plateforme", summary: "Développer catalogue, panier, paiement et interfaces d\u2019administration." },
      { number: "04", title: "Intégrer", summary: "Brancher paiements, stocks et systèmes métiers." },
      { number: "05", title: "Opérer", summary: "Soutenir l\u2019entreprise dans l\u2019exploitation quotidienne du commerce." },
    ],
  },
  restrainedInvite: {
    eyebrow: "e-Sehass",
    heading:
      "Une initiative de marketplace à venir au sein de l\u2019écosystème Sehass.",
    body:
      "e-Sehass est une initiative de marketplace à venir. Ce n\u2019est pas encore une plateforme lancée — aucun nombre de produits, nombre de clients, chiffre d\u2019affaires ou volume de transactions n\u2019est publié car rien n\u2019a été vérifié.",
    cta: "Explorer e-Sehass",
    href: "/e-sehass",
  },
  closing: {
    heading:
      "Vous avez un défi de technologie du commerce qui mérite d\u2019être résolu ?",
    supporting: "Construisons la technologie pour le résoudre.",
    cta: "Démarrer un projet",
  },
};

const industryContentBySlugFr: Record<IndustrySlug, IndustryContent> = {
  healthcare: healthcareContentFr,
  education: educationContentFr,
  business: businessContentFr,
  "government-ngos": governmentContentFr,
  commerce: commerceContentFr,
};

/* ---------------------------------------------------------------
 * Bilingual getters
 * ------------------------------------------------------------- */

function localizeIndustry(lang: Locale, i: IndustryOverview): IndustryOverview {
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return {
    ...i,
    href: prefix(i.href),
    feature:
      i.feature?.kind === "upcoming"
        ? { ...i.feature, href: prefix(i.feature.href) }
        : i.feature,
  };
}

export function getIndustries(lang: Locale): IndustryOverview[] {
  const source = lang === "fr" ? industriesFr : industries;
  return source.map((i) => localizeIndustry(lang, i));
}

export function getIndustryBySlug(
  lang: Locale,
  slug: IndustrySlug,
): IndustryOverview {
  const source = lang === "fr" ? industryBySlugFr[slug] : industryBySlug[slug];
  return localizeIndustry(lang, source);
}

export function getCrossIndustryRows(lang: Locale): CrossIndustryRow[] {
  return lang === "fr" ? crossIndustryRowsFr : crossIndustryRows;
}

function localizeIndustryContent(
  lang: Locale,
  content: IndustryContent,
): IndustryContent {
  const prefix = (href: string) => (href.startsWith("/") ? `/${lang}${href}` : href);
  return {
    ...content,
    restrainedInvite: content.restrainedInvite
      ? { ...content.restrainedInvite, href: prefix(content.restrainedInvite.href) }
      : undefined,
    closing: {
      ...content.closing,
      secondary: content.closing.secondary
        ? { ...content.closing.secondary, href: prefix(content.closing.secondary.href) }
        : undefined,
    },
  };
}

export function getIndustryContent(
  lang: Locale,
  slug: IndustrySlug,
): IndustryContent {
  const source =
    lang === "fr" ? industryContentBySlugFr[slug] : industryContentBySlug[slug];
  return localizeIndustryContent(lang, source);
}
