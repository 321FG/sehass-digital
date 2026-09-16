export type CapabilityItem = { id: string; label: string; title: string; summary: string };
export type AIHighlightItem = { id: string; label: string; title: string; summary: string };
export type IndustryItem = { slug: string; title: string; summary: string; href?: string };
export type ReasonItem = { id: string; label: string; title: string; summary: string };
export type WhatHappensStep = { number: string; title: string; summary: string };
export type QuickPathItem = { key: "start" | "ai" | "general"; title: string; summary: string };
export type SelectOption = { value: string; label: string };
export type PrivacyBullet = string;

export type Dictionary = {
  nav: {
    ariaPrimary: string;
    skipToContent: string;
    home: string;
    whatWeBuild: string;
    ai: string;
    solutions: string;
    industries: string;
    projects: string;
    about: string;
    insights: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    visitMarketplace: string;
    switchLanguage: string;
  };
  footer: {
    tagline: string;
    columns: { whatWeBuild: string; company: string; ecosystem: string };
    links: {
      software: string;
      ai: string;
      digitalProducts: string;
      digitalTransformation: string;
      about: string;
      projects: string;
      industries: string;
      insights: string;
      contact: string;
      privacy: string;
      marketplace: string;
      solutions: string;
    };
    copyright: string;
  };
  common: {
    startProject: string;
    exploreWhatWeBuild: string;
    viewProject: string;
    viewSolution: string;
    viewAllProjects: string;
    readMore: string;
    learnMore: string;
    getInTouch: string;
    seeAll: string;
    caseStudy: string;
    selectedWork: string;
    live: string;
    inProgress: string;
    active: string;
    talkToSehass: string;
  };
  home: {
    hero: { eyebrow: string; heading: string; subheading: string; ctaPrimary: string; ctaSecondary: string };
    capabilities: { eyebrow: string; heading: string; items: CapabilityItem[] };
    featuredSolution: {
      eyebrow: string; heading: string; subheading: string; cta: string;
      productName: string; productCategory: string; productTagline: string;
    };
    ai: { eyebrow: string; heading: string; subheading: string; items: AIHighlightItem[] };
    proof: { eyebrow: string; heading: string; viewAll: string };
    industries: { eyebrow: string; heading: string; items: IndustryItem[] };
    whySehass: { eyebrow: string; heading: string; items: ReasonItem[] };
    marketplace: { eyebrow: string; heading: string; subheading: string; cta: string };
    finalCta: { eyebrow: string; heading: string; subheading: string; ctaPrimary: string; ctaSecondary: string };
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      heading: string;
      body: string;
      ctaPrimary: string;
      ctaWhatsApp: string;
    };
    info: {
      talkToUs: string;
      generalInquiries: string;
      directContact: string;
      whatsAppLabel: string;
      whatHappensNext: string;
      steps: WhatHappensStep[];
    };
    quickPaths: {
      eyebrow: string;
      heading: string;
      go: string;
      paths: QuickPathItem[];
    };
    finalCta: {
      eyebrow: string;
      heading: string;
      subheading: string;
      cta: string;
    };
    form: {
      title: string;
      description: string;
      aboutYou: string;
      yourName: string;
      required: string;
      emailAddress: string;
      organization: string;
      country: string;
      countryPlaceholder: string;
      aboutProject: string;
      whatYouNeed: string;
      whatYouNeedPlaceholder: string;
      projectStage: string;
      budget: string;
      budgetHint: string;
      timeline: string;
      theProblem: string;
      problemLabel: string;
      problemPlaceholder: string;
      sensitiveNotice: string;
      submit: string;
      submitting: string;
      consent: string;
      errors: {
        name: string;
        email: string;
        need: string;
        problemRequired: string;
        problemMinPrefix: string;
        problemMinSuffix: string;
      };
      options: {
        need: SelectOption[];
        stage: SelectOption[];
        budget: SelectOption[];
        timeline: SelectOption[];
      };
      errorNotice: {
        title: string;
        bodyBefore: string;
        emailLink: string;
        bodyMiddle: string;
        whatsappLink: string;
        bodyAfter: string;
      };
      notConfigured: {
        title: string;
        body: string;
        openEmail: string;
        whatsappInstead: string;
      };
      success: {
        title: string;
        body: string;
        backHome: string;
        exploreWork: string;
        sendAnother: string;
      };
    };
  };
  insights: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    subheading: string;
    facebook: {
      eyebrow: string;
      heading: string;
      subheading: string;
      followCard: {
        officialPage: string;
        title: string;
        body: string;
        cta: string;
      };
      embedAriaLabel: string;
      loadingAriaLabel: string;
      loadingText: string;
      unavailableBadge: string;
      unavailableBody: string;
      unavailableCta: string;
    };
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
    who: { title: string; before: string; after: string };
    form: {
      title: string;
      intro: string;
      bullets: PrivacyBullet[];
      useDisclaimer: string;
      endpointNote: string;
    };
    emailWhatsapp: { title: string; body: string };
    cookies: { title: string; body: string };
    thirdParties: { title: string; body1: string; body2: string };
    rights: { title: string; before: string; middle: string; after: string };
    changes: { title: string; body: string };
  };
  languageSwitcher: { label: string; current: string };
  metadata: { homeTitle: string; homeDescription: string };
  sections: {
    letsBuildEyebrow: string;
    startProject: string;
    viewProjects: string;
    viewAllProjects: string;
    selectedWork: string;
    relevantWork: string;
    talkToSehass: string;
    getInTouch: string;
    openInNewTab: string;
    haveProblemHeading: string;
    letsBuildBody: string;
  };
  wwb: {
    overview: {
      metaTitle: string;
      metaDescription: string;
      eyebrow: string;
      title: string;
      body: string;
      approachEyebrow: string;
      approachHeading: string;
    };
    shared: {
      technologyEyebrow: string;
      technologyHeading: string;
      technologyBody: string;
      technologyColumns: string[];
      technologyDetailsSoon: string;
      pullQuoteEyebrow: string;
    };
    software: {
      metaTitle: string;
      metaDescription: string;
      capabilitiesHeading: string;
      relevantWorkHeading: string;
    };
    ai: {
      metaTitle: string;
      metaDescription: string;
      capabilitiesHeading: string;
      processEyebrow: string;
      pillarsEyebrow: string;
      pillarsHeading: string;
      pillarsSupporting: string;
      pullQuote: string;
      relevantWorkHeading: string;
    };
    digitalProducts: {
      metaTitle: string;
      metaDescription: string;
      capabilitiesHeading: string;
      pillarsEyebrow: string;
      pillarsHeading: string;
      relevantWorkHeading: string;
    };
    digitalTransformation: {
      metaTitle: string;
      metaDescription: string;
      capabilitiesHeading: string;
      pillarsEyebrow: string;
      pillarsHeading: string;
      relevantWorkHeading: string;
      closingSecondary: string;
    };
  };
  solutions: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; body: string };
    overviewLive: { eyebrow: string; heading: string };
    overviewProjects: { eyebrow: string; heading: string };
    ongoingProject: string;
    platforms: string;
    availabilityEyebrow: string;
    contextEyebrow: string;
    detail: {
      startProject: string;
      getInTouch: string;
      mbipa: {
        metaTitle: string;
        metaDescription: string;
        builtByHeading: string;
      };
      amal: {
        metaTitle: string;
        metaDescription: string;
        whatHeading: string;
        showcaseHeading: string;
      };
      earcep: {
        metaTitle: string;
        metaDescription: string;
        howHeading: string;
        technologyHeading: string;
      };
    };
  };
  industries: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; body: string };
    card: { industry: string; featuredSolution: string; upcoming: string };
    overview: { eyebrow: string; heading: string };
    cross: {
      eyebrow: string;
      heading: string;
      body: string;
      capability: string;
      problem: string;
      example: string;
    };
    detail: {
      startProject: string;
      exploreSolutions: string;
      whereTechCanHelp: string;
      useCasesBuild: string;
      useCases: string;
      howWeApproachIt: string;
      problemsWeCanHelpSolve: string;
      whyConversational: string;
      healthcare: { metaTitle: string; metaDescription: string };
      education: { metaTitle: string; metaDescription: string };
      business: { metaTitle: string; metaDescription: string };
      government: { metaTitle: string; metaDescription: string };
      commerce: { metaTitle: string; metaDescription: string };
    };
  };
  projects: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; body: string };
    grid: { eyebrow: string; heading: string; body: string };
    backToProjects: string;
    category: string;
    challenge: string;
    approach: string;
    whatWeBuilt: string;
    status: string;
    related: {
      eyebrow: string;
      heading: string;
      project: string;
      solution: string;
      industry: string;
      capabilities: string;
      view: string;
    };
    mbipa: { metaTitle: string; metaDescription: string };
    amal: { metaTitle: string; metaDescription: string };
    earcep: { metaTitle: string; metaDescription: string };
  };
  eSehass: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      title: string;
      bodyOne: string;
      bodyTwo: string;
    };
    next: {
      eyebrow: string;
      heading: string;
      body: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };
  ai: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: string;
      secondaryCta: string;
      system: string;
      flowsInto: string;
      diagramAlt: string;
      layers: {
        input: { label: string; detail: string };
        intelligence: { label: string; detail: string };
        action: { label: string; detail: string };
      };
    };
    purpose: { eyebrow: string; heading: string; body: string };
    capabilities: { eyebrow: string; heading: string; body: string };
    agents: {
      eyebrow: string;
      heading: string;
      body: string;
      insistLabel: string;
      insist: string[];
      archTitle: string;
      archAlt: string;
      nodes: {
        user: { label: string; detail: string };
        agent: { label: string; detail: string };
        knowledge: { label: string; detail: string };
        action: { label: string; detail: string };
        result: { label: string; detail: string };
      };
    };
    conversational: { eyebrow: string; heading: string; body: string };
    generative: { eyebrow: string; heading: string; body: string; note: string };
    knowledge: {
      eyebrow: string;
      heading: string;
      body: string;
      sourcesLabel: string;
      outputsLabel: string;
      intelligenceLabel: string;
      intelligenceTitle: string;
      intelligenceBody: string;
      flowAlt: string;
      sources: string[];
      outputs: string[];
    };
    process: { eyebrow: string; heading: string };
    responsible: { eyebrow: string; heading: string; body: string };
    human: {
      eyebrow: string;
      heading: string;
      body: string;
      expertise: string;
      assistance: string;
      workflows: string;
      outcomes: string;
      formulaAlt: string;
    };
    useCases: { eyebrow: string; heading: string; body: string };
    ecosystem: { eyebrow: string; heading: string; body: string };
    why: { eyebrow: string; heading: string };
    engagement: { eyebrow: string; heading: string; body: string };
    finalCta: { heading: string; supporting: string; cta: string; secondaryLabel: string };
  };
};

export const en: Dictionary = {
  nav: {
    ariaPrimary: "Primary",
    skipToContent: "Skip to content",
    home: "Home",
    whatWeBuild: "What We Build",
    ai: "AI",
    solutions: "Solutions",
    industries: "Industries",
    projects: "Projects",
    about: "About",
    insights: "Insights",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    visitMarketplace: "Visit e-Sehass",
    switchLanguage: "Language",
  },
  footer: {
    tagline:
      "Software, AI & digital products. Built in the Central African Republic. Designed for the world.",
    columns: {
      whatWeBuild: "What we build",
      company: "Company",
      ecosystem: "Ecosystem",
    },
    links: {
      software: "Software",
      ai: "AI",
      digitalProducts: "Digital Products",
      digitalTransformation: "Digital Transformation",
      about: "About",
      projects: "Projects",
      industries: "Industries",
      insights: "Insights",
      contact: "Contact",
      privacy: "Privacy",
      marketplace: "e-Sehass Marketplace",
      solutions: "Our Solutions",
    },
    copyright: "All rights reserved.",
  },
  common: {
    startProject: "Start a project",
    exploreWhatWeBuild: "Explore what we build",
    viewProject: "View project",
    viewSolution: "View solution",
    viewAllProjects: "View all projects",
    readMore: "Read more",
    learnMore: "Learn more",
    getInTouch: "Get in touch",
    seeAll: "See all",
    caseStudy: "Case studies",
    selectedWork: "Selected work",
    live: "Live",
    inProgress: "In progress",
    active: "Active",
    talkToSehass: "Talk to Sehass",
  },
  home: {
    hero: {
      eyebrow: "Sehass Digital",
      heading: "We build technology that solves real problems.",
      subheading:
        "Sehass Digital is a technology company building software, AI solutions and digital products for businesses, organizations and communities.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore what we build",
    },
    capabilities: {
      eyebrow: "What we build",
      heading: "Technology built around real-world problems.",
      items: [
        { id: "software", label: "Software", title: "Custom software", summary: "Applications, platforms and business systems designed around real workflows." },
        { id: "ai", label: "AI", title: "Artificial intelligence", summary: "AI-powered applications, automation, agents and intelligent systems." },
        { id: "digital-products", label: "Digital Products", title: "Digital products", summary: "SaaS, marketplaces, platforms and products built from the ground up." },
        { id: "digital-transformation", label: "Digital Transformation", title: "Digital transformation", summary: "Cloud, automation, integrations and technology modernization for existing teams." },
      ],
    },
    featuredSolution: {
      eyebrow: "Built by Sehass Digital",
      heading: "Built by Sehass Digital.",
      subheading: "We don't just talk about technology. We build products that solve real problems.",
      cta: "View solution",
      productName: "Mbipa",
      productCategory: "A product by Sehass Digital",
      productTagline: "A digital platform being built by Sehass Digital to solve a real problem end-to-end.",
    },
    ai: {
      eyebrow: "Artificial intelligence",
      heading: "AI that does more than chat.",
      subheading: "We build practical AI systems that help organizations automate processes, understand data and create better digital experiences.",
      items: [
        { id: "agents", label: "AI Agents", title: "Agents that work.", summary: "Automate tasks and workflows with agents scoped to real objectives." },
        { id: "automation", label: "AI Automation", title: "Automation with judgement.", summary: "Turn repetitive processes into intelligent workflows that understand context." },
        { id: "applications", label: "AI Applications", title: "Applications with intelligence.", summary: "Build products with intelligence at their core — not bolted on afterwards." },
      ],
    },
    proof: {
      eyebrow: "Selected work",
      heading: "From ideas to working technology.",
      viewAll: "View all projects",
    },
    industries: {
      eyebrow: "Industries",
      heading: "Technology for industries that matter.",
      items: [
        { slug: "healthcare", title: "Healthcare", summary: "Systems for clinics, providers and care coordination.", href: "/industries/healthcare" },
        { slug: "education", title: "Education", summary: "Platforms for institutions, learners and training organizations.", href: "/industries/education" },
        { slug: "business", title: "Business", summary: "Operations, internal tools and line-of-business applications.", href: "/industries/business" },
        { slug: "government", title: "Government & NGOs", summary: "Public-service platforms and non-profit operating systems.", href: "/industries/government-ngos" },
        { slug: "commerce", title: "Commerce", summary: "Marketplaces, storefronts and commerce infrastructure.", href: "/industries/commerce" },
      ],
    },
    whySehass: {
      eyebrow: "Why Sehass",
      heading: "Built in the Central African Republic. Designed for the world.",
      items: [
        { id: "product-thinking", label: "01", title: "Product thinking", summary: "We start with the problem, the users, and the desired outcome." },
        { id: "engineering-first", label: "02", title: "Engineering first", summary: "We build scalable and maintainable technology from day one." },
        { id: "ai-native", label: "03", title: "AI-native", summary: "We identify where intelligent technology can create real value — and where it shouldn't." },
        { id: "long-term-partnership", label: "04", title: "Long-term partnership", summary: "We don't disappear after launch. We stay for what comes next." },
      ],
    },
    marketplace: {
      eyebrow: "Sehass ecosystem",
      heading: "Need the technology to get started?",
      subheading: "Explore computers, electronics and technology products through the Sehass ecosystem.",
      cta: "Visit e-Sehass",
    },
    finalCta: {
      eyebrow: "Let's build",
      heading: "Have a problem worth solving?",
      subheading: "Let's build the technology to solve it.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Talk to Sehass",
    },
  },
  contact: {
    metaTitle: "Contact Sehass Digital | Start a Technology Project",
    metaDescription:
      "Talk to Sehass Digital about software, AI, digital products, automation and technology solutions. Tell us what you're trying to build or solve.",
    hero: {
      eyebrow: "Contact Sehass Digital",
      heading: "Have a problem worth solving?",
      body: "Tell us what you're trying to build, improve or solve. We'll explore whether technology can help — and what the right approach could look like.",
      ctaPrimary: "Start a Project",
      ctaWhatsApp: "WhatsApp Us",
    },
    info: {
      talkToUs: "Talk to us",
      generalInquiries: "General inquiries & projects",
      directContact: "Direct contact",
      whatsAppLabel: "Chat with us on WhatsApp",
      whatHappensNext: "What happens next?",
      steps: [
        { number: "01", title: "Tell us about the problem", summary: "Share what you're trying to build, improve or solve." },
        { number: "02", title: "We explore the right approach", summary: "We review your context and think through what could actually help." },
        { number: "03", title: "We discuss what to build", summary: "We get back to you to talk through a possible way forward." },
      ],
    },
    quickPaths: {
      eyebrow: "Prefer a shortcut?",
      heading: "Pick the fastest way to reach us.",
      go: "Go",
      paths: [
        { key: "start", title: "Start a project", summary: "Tell us what you're trying to build, improve or solve." },
        { key: "ai", title: "Ask about AI", summary: "Curious how AI could fit? Send us the question." },
        { key: "general", title: "General inquiry", summary: "Anything else — partnerships, questions, ideas." },
      ],
    },
    finalCta: {
      eyebrow: "Let's build",
      heading: "Let's build something useful.",
      subheading: "Start with the problem. We'll explore the technology.",
      cta: "Start a Project",
    },
    form: {
      title: "Start a project",
      description:
        "Whether you're building something in the Central African Republic or exploring an idea beyond it, start by telling us about the problem.",
      aboutYou: "About you",
      yourName: "Your name",
      required: "*",
      emailAddress: "Email address",
      organization: "Organization / company",
      country: "Where are you based?",
      countryPlaceholder: "e.g. Bangui, Nairobi, Paris",
      aboutProject: "About the project",
      whatYouNeed: "What do you need?",
      whatYouNeedPlaceholder: "Select what you need",
      projectStage: "Project stage",
      budget: "Budget",
      budgetHint: "Indicative ranges to help our first conversation — not Sehass pricing.",
      timeline: "Timeline",
      theProblem: "The problem",
      problemLabel: "What are you trying to build or solve?",
      problemPlaceholder: "Tell us briefly about the problem, product or opportunity you're exploring.",
      sensitiveNotice: "Please don't include sensitive or confidential information.",
      submit: "Send Project Inquiry",
      submitting: "Sending…",
      consent:
        "By submitting this form, you agree that Sehass Digital may use the information provided to respond to your inquiry. Please do not include sensitive or confidential information.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        need: "Please choose what you need.",
        problemRequired: "Please tell us what you're trying to build or solve.",
        problemMinPrefix: "Please add a little more detail (at least ",
        problemMinSuffix: " characters).",
      },
      options: {
        need: [
          { value: "software-development", label: "Software Development" },
          { value: "ai-solution", label: "AI Solution" },
          { value: "digital-product", label: "Digital Product" },
          { value: "automation", label: "Automation" },
          { value: "digital-transformation", label: "Digital Transformation" },
          { value: "system-integration", label: "System Integration" },
          { value: "not-sure", label: "Not sure yet" },
          { value: "other", label: "Other" },
        ],
        stage: [
          { value: "", label: "Select a stage (optional)" },
          { value: "exploring", label: "Just exploring" },
          { value: "idea", label: "Idea" },
          { value: "planning", label: "Planning" },
          { value: "prototype", label: "Prototype / MVP" },
          { value: "existing-product", label: "Existing product" },
          { value: "existing-improvement", label: "Existing system that needs improvement" },
          { value: "not-sure", label: "Not sure" },
        ],
        budget: [
          { value: "", label: "Select a range (optional)" },
          { value: "not-decided", label: "Not decided" },
          { value: "under-1k", label: "Under $1,000" },
          { value: "1k-5k", label: "$1,000–5,000" },
          { value: "5k-10k", label: "$5,000–10,000" },
          { value: "10k-plus", label: "$10,000+" },
          { value: "discuss", label: "Prefer to discuss" },
        ],
        timeline: [
          { value: "", label: "Select a timeline (optional)" },
          { value: "flexible", label: "Flexible" },
          { value: "within-1-month", label: "Within 1 month" },
          { value: "1-3-months", label: "1–3 months" },
          { value: "3-6-months", label: "3–6 months" },
          { value: "6-plus-months", label: "More than 6 months" },
          { value: "not-sure", label: "Not sure" },
        ],
      },
      errorNotice: {
        title: "Something went wrong.",
        bodyBefore: "We couldn't send your inquiry right now. Please try again, or contact us directly at ",
        emailLink: "",
        bodyMiddle: " or on ",
        whatsappLink: "WhatsApp",
        bodyAfter: ".",
      },
      notConfigured: {
        title: "Email delivery isn't connected yet.",
        body:
          "We haven't wired the automated email endpoint to this form yet. Your details are still here — open your email client with your inquiry pre-filled, or message us on WhatsApp.",
        openEmail: "Open in email client",
        whatsappInstead: "WhatsApp us instead",
      },
      success: {
        title: "Thanks for reaching out.",
        body: "We've received your project inquiry. We'll review the information and get back to you.",
        backHome: "Back to Home",
        exploreWork: "Explore Our Work",
        sendAnother: "Send another inquiry",
      },
    },
  },
  insights: {
    metaTitle: "Insights | Sehass Digital",
    metaDescription:
      "Follow Sehass Digital for updates, announcements and conversations about the technology we're building.",
    eyebrow: "Insights",
    heading: "Notes on what we're building.",
    subheading:
      "Written insights on software, artificial intelligence, digital products and the practical realities of building technology from Central Africa. Long-form pieces are being prepared. In the meantime, updates are shared publicly on the official Sehass Digital Facebook Page.",
    facebook: {
      eyebrow: "Sehass Digital on Facebook",
      heading: "Follow what we're building.",
      subheading:
        "Follow Sehass Digital for updates, announcements and conversations about the technology we're building.",
      followCard: {
        officialPage: "Official page",
        title: "Sehass Digital on Facebook",
        body:
          "The official Sehass Digital Facebook Page. Updates, announcements and conversations about the technology we're building — straight from the source.",
        cta: "Follow us on Facebook",
      },
      embedAriaLabel: "Sehass Digital Facebook Page preview",
      loadingAriaLabel: "Loading Facebook Page",
      loadingText: "Loading live Facebook Page…",
      unavailableBadge: "Live preview unavailable",
      unavailableBody:
        "The live Facebook Page preview didn't load in this browser. You can still follow Sehass Digital directly on Facebook using the button on the left.",
      unavailableCta: "Open the page on Facebook",
    },
  },
  privacy: {
    metaTitle: "Privacy",
    metaDescription:
      "How Sehass Digital handles the personal information submitted through this website.",
    eyebrow: "Privacy",
    heading: "How we handle your information.",
    intro:
      "This page describes, in plain terms, what personal information this website collects, why we collect it, and what happens to it afterwards. It only covers this website and nothing else.",
    lastUpdatedLabel: "Last updated ·",
    lastUpdatedDate: "December 2024",
    who: {
      title: "Who we are",
      before:
        "Sehass Digital is a technology company building software, artificial intelligence and digital products. We're reachable at ",
      after: ".",
    },
    form: {
      title: "Information you send us",
      intro:
        "The contact form on this website asks for the details we need to respond to your inquiry. That means:",
      bullets: [
        "Your name and email address (required).",
        "Optional context: organization, country, the kind of help you're looking for, project stage, budget range, and timeline.",
        "A short description of what you're trying to build or solve.",
      ],
      useDisclaimer:
        "We use this information only to reply to you and to understand whether we're a good fit for the project. We do not sell it, share it with advertisers, or use it for marketing lists.",
      endpointNote:
        "If a delivery endpoint is configured on our side, the form submission is sent to that endpoint over HTTPS. If it's not configured, the form returns an explicit \"not yet configured\" message and points you at email — we never pretend to have received something we didn't.",
    },
    emailWhatsapp: {
      title: "Email and WhatsApp",
      body:
        "When you email us or message us on WhatsApp, we receive whatever you send. We keep those messages for as long as we need to work with you, and delete them when they're no longer needed.",
    },
    cookies: {
      title: "Cookies and analytics",
      body:
        "This website does not set marketing or analytics cookies. We do not run third-party trackers, advertising pixels or behavioural analytics on this site today.",
    },
    thirdParties: {
      title: "Third-party embeds",
      body1:
        "The Insights page embeds our public Facebook Page using Facebook's official Page Plugin. When that plugin loads, Facebook may set its own cookies and receive standard request information (your IP address, browser and the page you're on). Facebook's handling of that data is governed by Facebook's own privacy policy, not this one.",
      body2:
        "The site is hosted on infrastructure that receives standard request logs (IP address, user agent, requested URL) to serve pages and defend against abuse.",
    },
    rights: {
      title: "Your choices",
      before: "You can ask us to see, correct or delete the information you've sent us. Email ",
      middle: " and tell us what you'd like us to do.",
      after: " We'll act on reasonable requests within a reasonable time.",
    },
    changes: {
      title: "Changes",
      body:
        "If we change how the site handles personal information in a material way, we'll update this page and bump the \"last updated\" date above.",
    },
  },
  languageSwitcher: { label: "Change language", current: "Current language" },
  metadata: {
    homeTitle: "Sehass Digital — Software, AI & Digital Products",
    homeDescription:
      "Sehass Digital engineers software, artificial intelligence, and digital products — built in the Central African Republic and designed for the world.",
  },
  sections: {
    letsBuildEyebrow: "Let\u2019s build",
    startProject: "Start a project",
    viewProjects: "View projects",
    viewAllProjects: "View all projects",
    selectedWork: "Selected work.",
    relevantWork: "Relevant work",
    talkToSehass: "Talk to Sehass",
    getInTouch: "Get in touch",
    openInNewTab: "opens in a new tab",
    haveProblemHeading: "Have a problem worth solving?",
    letsBuildBody: "Let\u2019s build the technology to solve it.",
  },
  wwb: {
    overview: {
      metaTitle: "What We Build",
      metaDescription:
        "Sehass Digital builds software, artificial intelligence and digital products designed to solve real problems and create lasting value.",
      eyebrow: "What we build",
      title: "Technology built around real problems.",
      body: "From software engineering to artificial intelligence and digital products, we build technology designed to solve meaningful problems and create lasting value.",
      approachEyebrow: "Our approach",
      approachHeading: "We start with the problem.",
    },
    shared: {
      technologyEyebrow: "Technology",
      technologyHeading: "We choose technology to fit the problem.",
      technologyBody:
        "Our technology choices are driven by the shape of each engagement — reliability, longevity and the team that will run the system. A confirmed capabilities matrix will be published here.",
      technologyColumns: [
        "Languages",
        "Frameworks",
        "Cloud & Infrastructure",
        "Data & Storage",
      ],
      technologyDetailsSoon: "Details will be published soon.",
      pullQuoteEyebrow: "A principle we build on",
    },
    software: {
      metaTitle: "Software Development",
      metaDescription:
        "We design and engineer reliable software systems — web applications, mobile apps, business systems, SaaS platforms and APIs — built for the real world.",
      capabilitiesHeading: "Software, across the systems people actually use.",
      relevantWorkHeading: "Software we\u2019ve shipped.",
    },
    ai: {
      metaTitle: "AI & Machine Learning",
      metaDescription:
        "We build practical AI systems \u2014 agents, automation, generative AI and machine learning \u2014 that help organizations automate, understand, predict and create.",
      capabilitiesHeading: "AI capabilities we design, engineer and deploy.",
      processEyebrow: "Process",
      pillarsEyebrow: "Where AI can help",
      pillarsHeading: "Use-case categories where AI is worth building.",
      pillarsSupporting:
        "These are common areas where AI creates real value — not claims of past delivery.",
      pullQuote: "AI should solve a problem, not just demonstrate a model.",
      relevantWorkHeading: "AI work we can point to.",
    },
    digitalProducts: {
      metaTitle: "Digital Products",
      metaDescription:
        "We combine product strategy, UX/UI design and engineering to turn ideas into digital products people can actually use \u2014 from prototype to production.",
      capabilitiesHeading: "Product capabilities across the full lifecycle.",
      pillarsEyebrow: "Product principles",
      pillarsHeading:
        "Products should be useful, simple, scalable and maintainable.",
      relevantWorkHeading: "Products we\u2019ve built.",
    },
    digitalTransformation: {
      metaTitle: "Digital Transformation",
      metaDescription:
        "We help organizations modernize systems, automate processes and connect technology around real operational needs \u2014 practical transformation, not slogans.",
      capabilitiesHeading:
        "Transformation capabilities across systems and workflows.",
      pillarsEyebrow: "Transformation areas",
      pillarsHeading:
        "Transformation works when it addresses the whole system.",
      relevantWorkHeading: "Work across systems and workflows.",
      closingSecondary: "Start a project",
    },
  },
  solutions: {
    metaTitle: "Solutions",
    metaDescription:
      "MBIPA, Amal AI and the e-ARCEP AI Assistant — real products and projects built by Sehass Digital.",
    hero: {
      eyebrow: "Solutions",
      title: "Technology we\u2019ve built to solve real problems.",
      body: "From mental wellbeing and employment to AI-powered public services, Sehass Digital builds technology designed around real people, real needs and real-world use.",
    },
    overviewLive: {
      eyebrow: "Live Solutions",
      heading: "Solutions we\u2019ve built and shipped.",
    },
    overviewProjects: {
      eyebrow: "Projects in Progress",
      heading: "Projects we\u2019re currently building.",
    },
    ongoingProject: "Ongoing project",
    platforms: "Platforms",
    availabilityEyebrow: "Availability",
    contextEyebrow: "Context",
    detail: {
      startProject: "Start a project",
      getInTouch: "Get in touch",
      mbipa: {
        metaTitle: "MBIPA",
        metaDescription:
          "MBIPA is a digital wellbeing platform built by Sehass Digital — AI conversational companion, wellbeing assessments, musicoth\u00e9rapie and multilingual experience on iOS and Android.",
        builtByHeading: "Built by Sehass Digital.",
      },
      amal: {
        metaTitle: "Amal AI",
        metaDescription:
          "Amal AI is a digital employment platform built by Sehass Digital — job discovery, publishing, community, CV creation, AI career coach and motivation letters.",
        whatHeading: "What Amal enables.",
        showcaseHeading: "Inside Amal AI.",
      },
      earcep: {
        metaTitle: "e-ARCEP AI Assistant",
        metaDescription:
          "An ongoing Sehass Digital project — an AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows.",
        howHeading: "How it works.",
        technologyHeading: "What powers it.",
      },
    },
  },
  industries: {
    metaTitle: "Industries",
    metaDescription:
      "How Sehass Digital applies software engineering, AI and digital product thinking across healthcare, education, business, government & NGOs, and commerce.",
    hero: {
      eyebrow: "Industries",
      title: "Technology applied to real-world challenges.",
      body: "Different industries face different problems. We combine software engineering, AI and digital product thinking to build technology around the needs of the people and organizations we serve.",
    },
    card: {
      industry: "Industry",
      featuredSolution: "Featured solution",
      upcoming: "Upcoming",
    },
    overview: {
      eyebrow: "Five focus areas",
      heading: "Who we build for.",
    },
    cross: {
      eyebrow: "One foundation",
      heading:
        "One technology foundation. Different real-world applications.",
      body: "The same core capabilities show up across industries. What changes is the problem, the people and the shape of the digital solution.",
      capability: "Capability",
      problem: "Industry problem",
      example: "Real Sehass example",
    },
    detail: {
      startProject: "Start a project",
      exploreSolutions: "Explore solutions",
      whereTechCanHelp: "Where technology can help.",
      useCasesBuild: "Use cases we can build in.",
      useCases: "Use cases.",
      howWeApproachIt: "How we approach it.",
      problemsWeCanHelpSolve: "Problems we can help solve.",
      whyConversational: "Why conversational interfaces.",
      healthcare: {
        metaTitle: "Healthcare",
        metaDescription:
          "How Sehass Digital applies software, AI and mobile product engineering to digital wellbeing — with MBIPA as a real product example.",
      },
      education: {
        metaTitle: "Education",
        metaDescription:
          "Learning platforms, AI learning assistants, information systems and workflow automation Sehass Digital can build in the education sector.",
      },
      business: {
        metaTitle: "Business",
        metaDescription:
          "Software, AI, automation, SaaS, APIs and digital products Sehass Digital builds for organizations — with Amal AI as a real platform example.",
      },
      government: {
        metaTitle: "Government & NGOs",
        metaDescription:
          "Citizen engagement, conversational AI, complaint workflows and information systems Sehass Digital can build for government and NGOs — with the e-ARCEP AI Assistant as an ongoing project.",
      },
      commerce: {
        metaTitle: "Commerce",
        metaDescription:
          "E-commerce, catalogs, payments, inventory, orders and integrations Sehass Digital can build. e-Sehass is an upcoming marketplace initiative within the broader Sehass ecosystem.",
      },
    },
  },
  projects: {
    metaTitle: "Projects",
    metaDescription:
      "Real projects and case studies from Sehass Digital — MBIPA, Amal AI, and the e-ARCEP AI Assistant. See how we approach problems, what we built, and where each project stands today.",
    hero: {
      eyebrow: "Projects",
      title: "From ideas to working technology.",
      body: "We turn real problems into software, AI systems, and digital products that people can actually use.",
    },
    grid: {
      eyebrow: "Case studies",
      heading: "Real projects. Real technology.",
      body: "Each case study shows the problem, the approach, what we actually built, and where the project stands today.",
    },
    backToProjects: "Back to Projects",
    category: "Category",
    challenge: "Challenge",
    approach: "Approach",
    whatWeBuilt: "What we built",
    status: "Status",
    related: {
      eyebrow: "Related",
      heading: "Where this connects.",
      project: "Related project",
      solution: "Related solution",
      industry: "Related industry",
      capabilities: "Related capabilities",
      view: "View",
    },
    mbipa: {
      metaTitle: "MBIPA — Case Study",
      metaDescription:
        "How Sehass Digital designed and engineered MBIPA — an AI-enabled digital wellbeing platform combining mobile technology, wellbeing assessments, musicoth\u00e9rapie, and a conversational companion.",
    },
    amal: {
      metaTitle: "Amal AI — Case Study",
      metaDescription:
        "How Sehass Digital designed and engineered Amal AI — a digital employment platform combining job discovery, publishing, community, professional profiles, CV creation, and AI-assisted career support.",
    },
    earcep: {
      metaTitle: "e-ARCEP AI Assistant — Case Study",
      metaDescription:
        "An ongoing Sehass Digital project — an AI-powered WhatsApp assistant designed to guide citizens through information and complaint submission workflows.",
    },
  },
  eSehass: {
    meta: {
      title: "e-Sehass Marketplace",
      description:
        "e-Sehass is an upcoming marketplace initiative within the broader Sehass Digital ecosystem. It has not launched yet.",
    },
    hero: {
      eyebrow: "Sehass ecosystem",
      title: "e-Sehass is on the way.",
      bodyOne:
        "e-Sehass is an upcoming marketplace initiative inside the Sehass Digital ecosystem. It hasn\u2019t launched yet, so there is no catalog, no cart and no product data to show. When it\u2019s ready, it will live at this address.",
      bodyTwo:
        "In the meantime, we\u2019re focused on shipping software, AI and digital products for the organizations we work with. If you have a problem worth solving, we\u2019d rather hear about that.",
    },
    next: {
      eyebrow: "While you\u2019re here",
      heading: "Look at what we\u2019re already building.",
      body: "Our shipped solutions and in-progress projects are the honest signal of what Sehass Digital can build.",
      primaryCta: "See our solutions",
      secondaryCta: "Start a project",
    },
  },
  ai: {
    meta: {
      title: "AI Solutions & Artificial Intelligence | Sehass Digital",
      description:
        "Sehass Digital designs and builds practical AI solutions — AI applications, AI agents, conversational AI, generative AI, document intelligence, knowledge and search, workflow automation and decision support.",
    },
    hero: {
      eyebrow: "Sehass AI",
      title: "Build smarter with AI.",
      body: "We design and build practical AI solutions that help people and organizations work with information, automate processes, improve experiences and make better use of technology.",
      primaryCta: "Talk to Us About AI",
      secondaryCta: "Explore What We Build",
      system: "System",
      flowsInto: "Flows into",
      diagramAlt: "Sehass AI system: Input flows into an intelligence layer, which produces action.",
      layers: {
        input: { label: "Input", detail: "Information, documents, conversations, data" },
        intelligence: { label: "Intelligence", detail: "Understanding, reasoning, retrieval" },
        action: { label: "Action", detail: "Answers, decisions, workflows, experiences" },
      },
    },
    purpose: {
      eyebrow: "Purpose over hype",
      heading: "Start with the problem. Then decide if AI belongs.",
      body: "AI is not the answer to every problem. We begin by understanding the problem, the people involved and the outcome that matters. If AI can create meaningful value, we design the right approach around it.",
    },
    capabilities: {
      eyebrow: "Capabilities",
      heading: "What can AI do for your organization?",
      body: "A short list of the AI capabilities we design, build and integrate — grounded in real use cases and combined only when they make sense for the problem at hand.",
    },
    agents: {
      eyebrow: "AI Agents",
      heading: "From answering questions to getting things done.",
      body: "AI agents can combine language models, tools, business rules and workflows to help complete multi-step tasks. We build them with real constraints — scoped to a workflow, aware of their tools and answerable to the people they serve.",
      insistLabel: "What we insist on",
      insist: [
        "Human oversight",
        "Controlled workflows",
        "Permissions",
        "Reliable tool use",
        "Clear objectives",
        "Monitoring",
        "Responsible deployment",
      ],
      archTitle: "Agent architecture",
      archAlt:
        "AI agent architecture: a user interacts with an AI agent that draws on knowledge, tools and systems to take a bounded action and return a reviewable result.",
      nodes: {
        user: { label: "User", detail: "Person with a goal or task." },
        agent: { label: "AI Agent", detail: "Reasons about the task using instructions and context." },
        knowledge: { label: "Knowledge · Tools · Systems", detail: "The resources the agent is allowed to use." },
        action: { label: "Action", detail: "A concrete step taken within defined boundaries." },
        result: { label: "Result", detail: "An outcome the user can review and act on." },
      },
    },
    conversational: {
      eyebrow: "Conversational AI",
      heading: "Make technology easier to interact with.",
      body: "Conversational AI can turn complex systems into experiences people can simply talk to. Designed carefully, it helps users find information, complete tasks and get guided help without needing to understand the underlying software.",
    },
    generative: {
      eyebrow: "Generative AI",
      heading: "Work with information differently.",
      body: "Generative AI helps knowledge workers move faster through the information they already deal with — writing, summarising, extracting and transforming — while people remain responsible for the judgement calls.",
      note: "We position generative AI as assistance rather than as a replacement for expertise.",
    },
    knowledge: {
      eyebrow: "Data & knowledge",
      heading: "Turn information into something useful.",
      body: "Most useful AI systems are built on top of the information an organization already has. The design work is deciding what should flow through, what should not, and how the answers are grounded.",
      sourcesLabel: "Sources",
      outputsLabel: "Outputs",
      intelligenceLabel: "Intelligence layer",
      intelligenceTitle: "Retrieval · Understanding · Reasoning",
      intelligenceBody:
        "The intelligence layer connects sources to outputs. It respects access controls, prefers verifiable answers and knows where its limits are.",
      flowAlt:
        "Information sources flow through an AI intelligence layer to produce search, answers, insights, automation and decision support.",
      sources: [
        "Documents",
        "Databases",
        "Knowledge bases",
        "Internal information",
        "Structured data",
        "Unstructured data",
      ],
      outputs: ["Search", "Answers", "Insights", "Automation", "Decision support"],
    },
    process: {
      eyebrow: "Process",
      heading: "From idea to AI solution.",
    },
    responsible: {
      eyebrow: "Responsible AI",
      heading: "Powerful technology needs thoughtful engineering.",
      body: "AI systems can influence how people access information, make decisions and interact with organizations. We believe they should therefore be designed with appropriate safeguards, human oversight and clear boundaries.",
    },
    human: {
      eyebrow: "Human + AI",
      heading: "AI should extend people, not remove the need for judgment.",
      body: "The best AI-powered products we can imagine do not remove people from the loop. They give people better inputs, better tools and more time for work that actually needs a human.",
      expertise: "Human expertise",
      assistance: "AI assistance",
      workflows: "Good workflows",
      outcomes: "Better outcomes",
      formulaAlt: "Human expertise plus AI assistance plus good workflows equals better outcomes.",
    },
    useCases: {
      eyebrow: "Where we can help",
      heading: "Practical places to put AI to work.",
      body: "These are the kinds of problems where we believe AI is a useful part of the answer. Each engagement is scoped to what the organization actually needs.",
    },
    ecosystem: {
      eyebrow: "Technology ecosystem",
      heading: "Built with the right technology ecosystem.",
      body: "Our partnership with Microsoft connects Sehass Digital to a global technology ecosystem as we continue building technology from the Central African Republic.",
    },
    why: {
      eyebrow: "Why work with Sehass for AI",
      heading: "AI is only valuable when it works in the real world.",
    },
    engagement: {
      eyebrow: "AI strategy",
      heading: "Start where the risk is right for you.",
      body: "Not every AI project starts with a large implementation. Many begin as small, well-defined experiments and grow from there.",
    },
    finalCta: {
      heading: "Have an AI idea worth exploring?",
      supporting: "Let\u2019s understand the problem first \u2014 then figure out what AI can do.",
      cta: "Talk to Us About AI",
      secondaryLabel: "Explore Our Work",
    },
  },
};
