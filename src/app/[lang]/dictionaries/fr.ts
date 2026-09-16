import type { Dictionary } from "./en";

export const fr: Dictionary = {
  nav: {
    ariaPrimary: "Navigation principale",
    skipToContent: "Aller au contenu",
    home: "Accueil",
    whatWeBuild: "Ce que nous construisons",
    ai: "IA",
    solutions: "Solutions",
    industries: "Secteurs",
    projects: "Projets",
    about: "À propos",
    insights: "Insights",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    visitMarketplace: "Découvrir e-Sehass",
    switchLanguage: "Langue",
  },
  footer: {
    tagline:
      "Logiciels, IA & produits numériques. Conçus en République centrafricaine. Pensés pour le monde.",
    columns: { whatWeBuild: "Ce que nous construisons", company: "Entreprise", ecosystem: "Écosystème" },
    links: {
      software: "Logiciels",
      ai: "IA",
      digitalProducts: "Produits numériques",
      digitalTransformation: "Transformation numérique",
      about: "À propos",
      projects: "Projets",
      industries: "Secteurs",
      insights: "Insights",
      contact: "Contact",
      privacy: "Confidentialité",
      marketplace: "Marketplace e-Sehass",
      solutions: "Nos solutions",
    },
    copyright: "Tous droits réservés.",
  },
  common: {
    startProject: "Démarrer un projet",
    exploreWhatWeBuild: "Découvrir ce que nous construisons",
    viewProject: "Voir le projet",
    viewSolution: "Voir la solution",
    viewAllProjects: "Voir tous les projets",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",
    getInTouch: "Nous contacter",
    seeAll: "Voir tout",
    caseStudy: "Études de cas",
    selectedWork: "Travaux sélectionnés",
    live: "En ligne",
    inProgress: "En cours",
    active: "Actif",
    talkToSehass: "Échanger avec Sehass",
  },
  home: {
    hero: {
      eyebrow: "Sehass Digital",
      heading: "Nous construisons des technologies qui résolvent de vrais problèmes.",
      subheading:
        "Sehass Digital est une entreprise technologique qui conçoit des logiciels, des solutions d'IA et des produits numériques pour les entreprises, les organisations et les communautés.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Découvrir ce que nous construisons",
    },
    capabilities: {
      eyebrow: "Ce que nous construisons",
      heading: "Des technologies pensées pour des problèmes concrets.",
      items: [
        { id: "software", label: "Logiciels", title: "Logiciels sur mesure", summary: "Applications, plateformes et systèmes métiers conçus autour de véritables flux de travail." },
        { id: "ai", label: "IA", title: "Intelligence artificielle", summary: "Applications, automatisations, agents et systèmes intelligents propulsés par l'IA." },
        { id: "digital-products", label: "Produits numériques", title: "Produits numériques", summary: "SaaS, marketplaces, plateformes et produits construits de zéro." },
        { id: "digital-transformation", label: "Transformation numérique", title: "Transformation numérique", summary: "Cloud, automatisation, intégrations et modernisation technologique pour les équipes existantes." },
      ],
    },
    featuredSolution: {
      eyebrow: "Construit par Sehass Digital",
      heading: "Construit par Sehass Digital.",
      subheading: "On ne se contente pas de parler de technologie. Nous construisons des produits qui résolvent de vrais problèmes.",
      cta: "Voir la solution",
      productName: "Mbipa",
      productCategory: "Un produit signé Sehass Digital",
      productTagline: "Une plateforme numérique en cours de développement chez Sehass Digital, pour résoudre un vrai problème de bout en bout.",
    },
    ai: {
      eyebrow: "Intelligence artificielle",
      heading: "De l'IA qui fait plus que discuter.",
      subheading:
        "Nous concevons des systèmes d'IA concrets qui aident les organisations à automatiser leurs processus, comprendre leurs données et créer de meilleures expériences numériques.",
      items: [
        { id: "agents", label: "Agents IA", title: "Des agents qui travaillent.", summary: "Automatisez les tâches et les workflows avec des agents cadrés autour d'objectifs réels." },
        { id: "automation", label: "Automatisation IA", title: "De l'automatisation qui comprend le contexte.", summary: "Transformez les processus répétitifs en workflows intelligents qui comprennent le contexte." },
        { id: "applications", label: "Applications IA", title: "Des applications intelligentes de bout en bout.", summary: "Concevez des produits avec l'intelligence au cœur — pas rajoutée après coup." },
      ],
    },
    proof: {
      eyebrow: "Travaux sélectionnés",
      heading: "De l'idée à la technologie qui tourne.",
      viewAll: "Voir tous les projets",
    },
    industries: {
      eyebrow: "Secteurs",
      heading: "Des technologies pour les secteurs qui comptent.",
      items: [
        { slug: "healthcare", title: "Santé", summary: "Systèmes pour les cliniques, les praticiens et la coordination des soins.", href: "/industries/healthcare" },
        { slug: "education", title: "Éducation", summary: "Plateformes pour les institutions, les apprenants et les organismes de formation.", href: "/industries/education" },
        { slug: "business", title: "Entreprises", summary: "Opérations, outils internes et applications métiers.", href: "/industries/business" },
        { slug: "government", title: "Gouvernement & ONG", summary: "Plateformes de services publics et systèmes d'exploitation pour les ONG.", href: "/industries/government-ngos" },
        { slug: "commerce", title: "Commerce", summary: "Marketplaces, boutiques en ligne et infrastructures de commerce.", href: "/industries/commerce" },
      ],
    },
    whySehass: {
      eyebrow: "Pourquoi Sehass",
      heading: "Conçu en République centrafricaine. Pensé pour le monde.",
      items: [
        { id: "product-thinking", label: "01", title: "Pensée produit", summary: "Nous partons du problème, des utilisateurs et du résultat visé." },
        { id: "engineering-first", label: "02", title: "L'ingénierie d'abord", summary: "Nous construisons des technologies scalables et maintenables dès le premier jour." },
        { id: "ai-native", label: "03", title: "AI-native", summary: "Nous identifions où la technologie intelligente crée de la vraie valeur — et où elle ne doit pas être utilisée." },
        { id: "long-term-partnership", label: "04", title: "Partenariat long terme", summary: "Nous ne disparaissons pas après le lancement. Nous restons pour la suite." },
      ],
    },
    marketplace: {
      eyebrow: "Écosystème Sehass",
      heading: "Besoin du matériel pour démarrer ?",
      subheading: "Découvrez des ordinateurs, de l'électronique et des produits technologiques via l'écosystème Sehass.",
      cta: "Découvrir e-Sehass",
    },
    finalCta: {
      eyebrow: "Construisons",
      heading: "Un problème qui vaut la peine d'être résolu ?",
      subheading: "Construisons la technologie pour le résoudre.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Échanger avec Sehass",
    },
  },
  contact: {
    metaTitle: "Contact Sehass Digital | Démarrer un projet technologique",
    metaDescription:
      "Échangez avec Sehass Digital sur les logiciels, l'IA, les produits numériques, l'automatisation et les solutions technologiques. Dites-nous ce que vous cherchez à construire ou à résoudre.",
    hero: {
      eyebrow: "Contactez Sehass Digital",
      heading: "Un problème qui vaut la peine d'être résolu ?",
      body:
        "Dites-nous ce que vous cherchez à construire, améliorer ou résoudre. Nous explorerons si la technologie peut aider — et à quoi la bonne approche pourrait ressembler.",
      ctaPrimary: "Démarrer un projet",
      ctaWhatsApp: "Écrire sur WhatsApp",
    },
    info: {
      talkToUs: "Échangez avec nous",
      generalInquiries: "Demandes générales & projets",
      directContact: "Contact direct",
      whatsAppLabel: "Discutez avec nous sur WhatsApp",
      whatHappensNext: "Et ensuite ?",
      steps: [
        { number: "01", title: "Parlez-nous du problème", summary: "Partagez ce que vous cherchez à construire, améliorer ou résoudre." },
        { number: "02", title: "Nous explorons la bonne approche", summary: "Nous étudions votre contexte et réfléchissons à ce qui pourrait vraiment aider." },
        { number: "03", title: "Nous discutons de ce qu'il faut construire", summary: "Nous revenons vers vous pour discuter d'une possible voie à suivre." },
      ],
    },
    quickPaths: {
      eyebrow: "Envie d'un raccourci ?",
      heading: "Choisissez le chemin le plus rapide pour nous joindre.",
      go: "Aller",
      paths: [
        { key: "start", title: "Démarrer un projet", summary: "Dites-nous ce que vous cherchez à construire, améliorer ou résoudre." },
        { key: "ai", title: "Poser une question sur l'IA", summary: "Curieux de savoir comment l'IA pourrait s'intégrer ? Posez-nous la question." },
        { key: "general", title: "Demande générale", summary: "Tout le reste — partenariats, questions, idées." },
      ],
    },
    finalCta: {
      eyebrow: "Construisons",
      heading: "Construisons quelque chose d'utile.",
      subheading: "Partons du problème. Nous explorerons la technologie.",
      cta: "Démarrer un projet",
    },
    form: {
      title: "Démarrer un projet",
      description:
        "Que vous construisiez quelque chose en République centrafricaine ou que vous exploriez une idée au-delà, commencez par nous parler du problème.",
      aboutYou: "À propos de vous",
      yourName: "Votre nom",
      required: "*",
      emailAddress: "Adresse e-mail",
      organization: "Organisation / entreprise",
      country: "Où êtes-vous basé·e ?",
      countryPlaceholder: "ex. Bangui, Nairobi, Paris",
      aboutProject: "À propos du projet",
      whatYouNeed: "De quoi avez-vous besoin ?",
      whatYouNeedPlaceholder: "Sélectionnez ce dont vous avez besoin",
      projectStage: "Étape du projet",
      budget: "Budget",
      budgetHint: "Fourchettes indicatives pour amorcer la conversation — pas nos tarifs.",
      timeline: "Échéance",
      theProblem: "Le problème",
      problemLabel: "Qu'est-ce que vous cherchez à construire ou à résoudre ?",
      problemPlaceholder: "Parlez-nous brièvement du problème, du produit ou de l'opportunité que vous explorez.",
      sensitiveNotice: "Merci de ne pas inclure d'informations sensibles ou confidentielles.",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours…",
      consent:
        "En soumettant ce formulaire, vous acceptez que Sehass Digital utilise les informations fournies pour répondre à votre demande. Merci de ne pas inclure d'informations sensibles ou confidentielles.",
      errors: {
        name: "Merci d'indiquer votre nom.",
        email: "Merci d'indiquer une adresse e-mail valide.",
        need: "Merci de choisir ce dont vous avez besoin.",
        problemRequired: "Merci de nous dire ce que vous cherchez à construire ou à résoudre.",
        problemMinPrefix: "Merci d'ajouter un peu plus de détails (au moins ",
        problemMinSuffix: " caractères).",
      },
      options: {
        need: [
          { value: "software-development", label: "Développement logiciel" },
          { value: "ai-solution", label: "Solution IA" },
          { value: "digital-product", label: "Produit numérique" },
          { value: "automation", label: "Automatisation" },
          { value: "digital-transformation", label: "Transformation numérique" },
          { value: "system-integration", label: "Intégration de systèmes" },
          { value: "not-sure", label: "Je ne sais pas encore" },
          { value: "other", label: "Autre" },
        ],
        stage: [
          { value: "", label: "Sélectionnez une étape (optionnel)" },
          { value: "exploring", label: "En exploration" },
          { value: "idea", label: "Idée" },
          { value: "planning", label: "Planification" },
          { value: "prototype", label: "Prototype / MVP" },
          { value: "existing-product", label: "Produit existant" },
          { value: "existing-improvement", label: "Système existant à améliorer" },
          { value: "not-sure", label: "Je ne sais pas" },
        ],
        budget: [
          { value: "", label: "Sélectionnez une fourchette (optionnel)" },
          { value: "not-decided", label: "Non défini" },
          { value: "under-1k", label: "Moins de 1 000 $" },
          { value: "1k-5k", label: "1 000–5 000 $" },
          { value: "5k-10k", label: "5 000–10 000 $" },
          { value: "10k-plus", label: "10 000 $+" },
          { value: "discuss", label: "Préfère en discuter" },
        ],
        timeline: [
          { value: "", label: "Sélectionnez une échéance (optionnel)" },
          { value: "flexible", label: "Flexible" },
          { value: "within-1-month", label: "Dans le mois" },
          { value: "1-3-months", label: "1–3 mois" },
          { value: "3-6-months", label: "3–6 mois" },
          { value: "6-plus-months", label: "Plus de 6 mois" },
          { value: "not-sure", label: "Je ne sais pas" },
        ],
      },
      errorNotice: {
        title: "Quelque chose s'est mal passé.",
        bodyBefore: "Nous n'avons pas pu envoyer votre demande maintenant. Réessayez, ou contactez-nous directement à ",
        emailLink: "",
        bodyMiddle: " ou sur ",
        whatsappLink: "WhatsApp",
        bodyAfter: ".",
      },
      notConfigured: {
        title: "L'envoi d'e-mail n'est pas encore connecté.",
        body:
          "Nous n'avons pas encore branché l'endpoint automatique à ce formulaire. Vos informations restent là — ouvrez votre client mail avec la demande pré-remplie, ou écrivez-nous sur WhatsApp.",
        openEmail: "Ouvrir dans le client mail",
        whatsappInstead: "Écrire sur WhatsApp",
      },
      success: {
        title: "Merci de nous avoir contactés.",
        body: "Nous avons reçu votre demande. Nous étudions les informations et revenons vers vous.",
        backHome: "Retour à l'accueil",
        exploreWork: "Découvrir nos travaux",
        sendAnother: "Envoyer une autre demande",
      },
    },
  },
  insights: {
    metaTitle: "Insights | Sehass Digital",
    metaDescription:
      "Suivez Sehass Digital pour les mises à jour, annonces et échanges autour des technologies que nous construisons.",
    eyebrow: "Insights",
    heading: "Notes sur ce que nous construisons.",
    subheading:
      "Des écrits sur les logiciels, l'intelligence artificielle, les produits numériques et les réalités concrètes de la construction de technologies depuis l'Afrique centrale. Des articles longs sont en préparation. En attendant, les actualités sont publiées sur la Page Facebook officielle Sehass Digital.",
    facebook: {
      eyebrow: "Sehass Digital sur Facebook",
      heading: "Suivez ce que nous construisons.",
      subheading:
        "Suivez Sehass Digital pour les mises à jour, annonces et échanges autour des technologies que nous construisons.",
      followCard: {
        officialPage: "Page officielle",
        title: "Sehass Digital sur Facebook",
        body:
          "La Page Facebook officielle de Sehass Digital. Mises à jour, annonces et échanges autour des technologies que nous construisons — directement de la source.",
        cta: "Suivre sur Facebook",
      },
      embedAriaLabel: "Aperçu de la Page Facebook Sehass Digital",
      loadingAriaLabel: "Chargement de la Page Facebook",
      loadingText: "Chargement de la Page Facebook en direct…",
      unavailableBadge: "Aperçu en direct indisponible",
      unavailableBody:
        "L'aperçu en direct de la Page Facebook n'a pas pu se charger dans ce navigateur. Vous pouvez toujours suivre Sehass Digital directement sur Facebook via le bouton à gauche.",
      unavailableCta: "Ouvrir la page sur Facebook",
    },
  },
  privacy: {
    metaTitle: "Confidentialité",
    metaDescription:
      "Comment Sehass Digital traite les informations personnelles envoyées via ce site.",
    eyebrow: "Confidentialité",
    heading: "Comment nous traitons vos informations.",
    intro:
      "Cette page décrit, simplement, quelles informations personnelles ce site collecte, pourquoi, et ce qu'elles deviennent. Elle ne couvre que ce site et rien d'autre.",
    lastUpdatedLabel: "Dernière mise à jour ·",
    lastUpdatedDate: "Décembre 2024",
    who: {
      title: "Qui nous sommes",
      before:
        "Sehass Digital est une entreprise technologique qui conçoit des logiciels, de l'intelligence artificielle et des produits numériques. Vous pouvez nous joindre à ",
      after: ".",
    },
    form: {
      title: "Informations que vous nous envoyez",
      intro:
        "Le formulaire de contact demande les informations nécessaires pour vous répondre. C'est-à-dire :",
      bullets: [
        "Votre nom et votre adresse e-mail (obligatoires).",
        "Contexte optionnel : organisation, pays, type d'aide recherchée, étape du projet, budget, échéance.",
        "Une courte description de ce que vous cherchez à construire ou à résoudre.",
      ],
      useDisclaimer:
        "Nous utilisons ces informations uniquement pour vous répondre et évaluer si nous sommes un bon partenaire pour le projet. Nous ne les vendons pas, ne les partageons pas avec des annonceurs et ne les utilisons pas pour des listes marketing.",
      endpointNote:
        "Si un endpoint de livraison est configuré de notre côté, la soumission est envoyée à cet endpoint via HTTPS. S'il n'est pas configuré, le formulaire renvoie un message explicite « pas encore configuré » et vous oriente vers l'e-mail — nous ne prétendons jamais avoir reçu quelque chose que nous n'avons pas reçu.",
    },
    emailWhatsapp: {
      title: "E-mail et WhatsApp",
      body:
        "Quand vous nous écrivez par e-mail ou WhatsApp, nous recevons ce que vous envoyez. Nous conservons ces messages aussi longtemps que nécessaire pour travailler avec vous, puis les supprimons.",
    },
    cookies: {
      title: "Cookies et analytics",
      body:
        "Ce site ne pose pas de cookies marketing ni d'analytics. Nous n'utilisons pas de trackers tiers, pixels publicitaires ou analytics comportementaux sur ce site aujourd'hui.",
    },
    thirdParties: {
      title: "Intégrations tierces",
      body1:
        "La page Insights intègre notre Page Facebook publique via le Page Plugin officiel de Facebook. Quand ce plugin se charge, Facebook peut poser ses propres cookies et recevoir des informations standard de requête (votre adresse IP, votre navigateur, la page consultée). Le traitement de ces données est régi par la politique de confidentialité de Facebook, pas par la nôtre.",
      body2:
        "Le site est hébergé sur une infrastructure qui reçoit des logs standard (adresse IP, user-agent, URL demandée) pour servir les pages et se défendre contre les abus.",
    },
    rights: {
      title: "Vos choix",
      before: "Vous pouvez nous demander de voir, corriger ou supprimer les informations que vous nous avez envoyées. Écrivez à ",
      middle: " et dites-nous ce que vous souhaitez.",
      after: " Nous répondrons aux demandes raisonnables dans un délai raisonnable.",
    },
    changes: {
      title: "Modifications",
      body:
        "Si nous modifions substantiellement la façon dont le site traite les informations personnelles, nous mettrons cette page à jour et actualiserons la date « dernière mise à jour » ci-dessus.",
    },
  },
  languageSwitcher: { label: "Changer de langue", current: "Langue actuelle" },
  metadata: {
    homeTitle: "Sehass Digital — Logiciels, IA & produits numériques",
    homeDescription:
      "Sehass Digital conçoit des logiciels, de l'intelligence artificielle et des produits numériques — en République centrafricaine, pensés pour le monde.",
  },
  sections: {
    letsBuildEyebrow: "Construisons",
    startProject: "Démarrer un projet",
    viewProjects: "Voir les projets",
    viewAllProjects: "Voir tous les projets",
    selectedWork: "Travaux sélectionnés.",
    relevantWork: "Travaux pertinents",
    talkToSehass: "Échanger avec Sehass",
    getInTouch: "Nous contacter",
    openInNewTab: "s\u2019ouvre dans un nouvel onglet",
    haveProblemHeading: "Vous avez un problème qui mérite d\u2019être résolu ?",
    letsBuildBody: "Construisons la technologie pour le résoudre.",
  },
  wwb: {
    overview: {
      metaTitle: "Ce que nous construisons",
      metaDescription:
        "Sehass Digital conçoit des logiciels, de l\u2019intelligence artificielle et des produits numériques pensés pour résoudre de vrais problèmes et créer de la valeur durable.",
      eyebrow: "Ce que nous construisons",
      title: "Une technologie pensée autour de vrais problèmes.",
      body: "De l\u2019ingénierie logicielle à l\u2019intelligence artificielle en passant par les produits numériques, nous construisons des technologies conçues pour résoudre des problèmes qui comptent et créer de la valeur durable.",
      approachEyebrow: "Notre approche",
      approachHeading: "Nous partons du problème.",
    },
    shared: {
      technologyEyebrow: "Technologie",
      technologyHeading:
        "Nous choisissons la technologie pour qu\u2019elle épouse le problème.",
      technologyBody:
        "Nos choix technologiques sont dictés par la forme de chaque projet — fiabilité, longévité et équipe qui fera vivre le système. Une matrice de compétences confirmée sera publiée ici.",
      technologyColumns: [
        "Langages",
        "Frameworks",
        "Cloud & infrastructure",
        "Données & stockage",
      ],
      technologyDetailsSoon: "Les détails seront publiés prochainement.",
      pullQuoteEyebrow: "Un principe qui nous guide",
    },
    software: {
      metaTitle: "Développement logiciel",
      metaDescription:
        "Nous concevons et développons des systèmes logiciels fiables — applications web, applications mobiles, systèmes métiers, plateformes SaaS et API — pensés pour le monde réel.",
      capabilitiesHeading:
        "Du logiciel, à travers les systèmes que les gens utilisent vraiment.",
      relevantWorkHeading: "Des logiciels que nous avons livrés.",
    },
    ai: {
      metaTitle: "IA & apprentissage automatique",
      metaDescription:
        "Nous concevons des systèmes d\u2019IA concrets \u2014 agents, automatisation, IA générative et apprentissage automatique \u2014 qui aident les organisations à automatiser, comprendre, prédire et créer.",
      capabilitiesHeading:
        "Des capacités d\u2019IA que nous concevons, développons et déployons.",
      processEyebrow: "Processus",
      pillarsEyebrow: "Là où l\u2019IA peut aider",
      pillarsHeading:
        "Catégories de cas d\u2019usage où l\u2019IA vaut la peine d\u2019être construite.",
      pillarsSupporting:
        "Ce sont des domaines où l\u2019IA crée de la vraie valeur — pas des promesses de livraison passée.",
      pullQuote:
        "L\u2019IA doit résoudre un problème, pas simplement démontrer un modèle.",
      relevantWorkHeading: "Des projets d\u2019IA que nous pouvons montrer.",
    },
    digitalProducts: {
      metaTitle: "Produits numériques",
      metaDescription:
        "Nous combinons stratégie produit, design UX/UI et ingénierie pour transformer des idées en produits numériques réellement utilisables \u2014 du prototype à la production.",
      capabilitiesHeading:
        "Des compétences produit couvrant tout le cycle de vie.",
      pillarsEyebrow: "Principes produit",
      pillarsHeading:
        "Un produit doit être utile, simple, scalable et maintenable.",
      relevantWorkHeading: "Des produits que nous avons construits.",
    },
    digitalTransformation: {
      metaTitle: "Transformation numérique",
      metaDescription:
        "Nous aidons les organisations à moderniser leurs systèmes, automatiser leurs processus et connecter la technologie autour de vrais besoins opérationnels \u2014 une transformation concrète, pas des slogans.",
      capabilitiesHeading:
        "Des compétences de transformation à travers les systèmes et les flux de travail.",
      pillarsEyebrow: "Domaines de transformation",
      pillarsHeading:
        "La transformation fonctionne quand elle prend en compte l\u2019ensemble du système.",
      relevantWorkHeading: "Des travaux couvrant systèmes et flux de travail.",
      closingSecondary: "Démarrer un projet",
    },
  },
  solutions: {
    metaTitle: "Solutions",
    metaDescription:
      "MBIPA, Amal AI et l\u2019assistant IA e-ARCEP — de vrais produits et projets construits par Sehass Digital.",
    hero: {
      eyebrow: "Solutions",
      title: "Des technologies conçues pour résoudre de vrais problèmes.",
      body: "Du bien-être mental à l\u2019emploi en passant par les services publics assistés par IA, Sehass Digital construit des technologies pensées autour de vraies personnes, de vrais besoins et d\u2019un usage réel.",
    },
    overviewLive: {
      eyebrow: "Solutions en ligne",
      heading: "Des solutions que nous avons construites et livrées.",
    },
    overviewProjects: {
      eyebrow: "Projets en cours",
      heading: "Des projets que nous construisons actuellement.",
    },
    ongoingProject: "Projet en cours",
    platforms: "Plateformes",
    availabilityEyebrow: "Disponibilité",
    contextEyebrow: "Contexte",
    detail: {
      startProject: "Démarrer un projet",
      getInTouch: "Nous contacter",
      mbipa: {
        metaTitle: "MBIPA",
        metaDescription:
          "MBIPA est une plateforme numérique de bien-être conçue par Sehass Digital — compagnon conversationnel IA, tests de bien-être, musicothérapie et expérience multilingue sur iOS et Android.",
        builtByHeading: "Construit par Sehass Digital.",
      },
      amal: {
        metaTitle: "Amal AI",
        metaDescription:
          "Amal AI est une plateforme numérique d\u2019emploi conçue par Sehass Digital — découverte d\u2019offres, publication, communauté, création de CV, coach de carrière IA et lettres de motivation.",
        whatHeading: "Ce que permet Amal.",
        showcaseHeading: "Au cœur d\u2019Amal AI.",
      },
      earcep: {
        metaTitle: "Assistant IA e-ARCEP",
        metaDescription:
          "Un projet en cours de Sehass Digital — un assistant WhatsApp propulsé par l\u2019IA conçu pour guider les citoyens à travers l\u2019information et le dépôt de réclamations.",
        howHeading: "Comment ça fonctionne.",
        technologyHeading: "Ce qui l\u2019alimente.",
      },
    },
  },
  industries: {
    metaTitle: "Secteurs",
    metaDescription:
      "Comment Sehass Digital applique l\u2019ingénierie logicielle, l\u2019IA et la pensée produit numérique aux secteurs de la santé, de l\u2019éducation, des entreprises, du gouvernement & ONG, et du commerce.",
    hero: {
      eyebrow: "Secteurs",
      title: "Une technologie appliquée à des défis réels.",
      body: "Chaque secteur affronte ses propres problèmes. Nous combinons ingénierie logicielle, IA et pensée produit numérique pour construire une technologie proche des besoins des personnes et des organisations que nous servons.",
    },
    card: {
      industry: "Secteur",
      featuredSolution: "Solution en vedette",
      upcoming: "À venir",
    },
    overview: {
      eyebrow: "Cinq domaines de focalisation",
      heading: "Pour qui nous construisons.",
    },
    cross: {
      eyebrow: "Une fondation",
      heading:
        "Une seule fondation technologique. Des applications réelles multiples.",
      body: "Les mêmes compétences fondamentales se retrouvent d\u2019un secteur à l\u2019autre. Ce qui change, c\u2019est le problème, les personnes et la forme de la solution numérique.",
      capability: "Compétence",
      problem: "Problème sectoriel",
      example: "Exemple Sehass réel",
    },
    detail: {
      startProject: "Démarrer un projet",
      exploreSolutions: "Découvrir les solutions",
      whereTechCanHelp: "Là où la technologie peut aider.",
      useCasesBuild: "Des cas d\u2019usage que nous pouvons construire.",
      useCases: "Cas d\u2019usage.",
      howWeApproachIt: "Notre approche.",
      problemsWeCanHelpSolve:
        "Des problèmes que nous pouvons aider à résoudre.",
      whyConversational: "Pourquoi les interfaces conversationnelles.",
      healthcare: {
        metaTitle: "Santé",
        metaDescription:
          "Comment Sehass Digital applique le logiciel, l\u2019IA et l\u2019ingénierie produit mobile au bien-être numérique — avec MBIPA comme exemple réel de produit.",
      },
      education: {
        metaTitle: "Éducation",
        metaDescription:
          "Plateformes d\u2019apprentissage, assistants d\u2019apprentissage IA, systèmes d\u2019information et automatisation des workflows que Sehass Digital peut construire dans le secteur de l\u2019éducation.",
      },
      business: {
        metaTitle: "Entreprises",
        metaDescription:
          "Logiciels, IA, automatisation, SaaS, API et produits numériques que Sehass Digital construit pour les organisations — avec Amal AI comme exemple réel de plateforme.",
      },
      government: {
        metaTitle: "Gouvernement & ONG",
        metaDescription:
          "Engagement citoyen, IA conversationnelle, workflows de réclamations et systèmes d\u2019information que Sehass Digital peut construire pour le gouvernement et les ONG — avec l\u2019assistant IA e-ARCEP comme projet en cours.",
      },
      commerce: {
        metaTitle: "Commerce",
        metaDescription:
          "E-commerce, catalogues, paiements, stocks, commandes et intégrations que Sehass Digital peut construire. e-Sehass est une initiative de marketplace à venir au sein de l\u2019écosystème Sehass.",
      },
    },
  },
  projects: {
    metaTitle: "Projets",
    metaDescription:
      "De vrais projets et études de cas de Sehass Digital — MBIPA, Amal AI et l\u2019assistant IA e-ARCEP. Découvrez comment nous abordons les problèmes, ce que nous avons construit et où en est chaque projet aujourd\u2019hui.",
    hero: {
      eyebrow: "Projets",
      title: "De l\u2019idée à la technologie qui tourne.",
      body: "Nous transformons de vrais problèmes en logiciels, en systèmes d\u2019IA et en produits numériques réellement utilisables.",
    },
    grid: {
      eyebrow: "Études de cas",
      heading: "De vrais projets. De la vraie technologie.",
      body: "Chaque étude de cas montre le problème, l\u2019approche, ce que nous avons réellement construit et où en est le projet aujourd\u2019hui.",
    },
    backToProjects: "Retour aux projets",
    category: "Catégorie",
    challenge: "Défi",
    approach: "Approche",
    whatWeBuilt: "Ce que nous avons construit",
    status: "Statut",
    related: {
      eyebrow: "En lien",
      heading: "Là où cela se connecte.",
      project: "Projet en lien",
      solution: "Solution en lien",
      industry: "Secteur en lien",
      capabilities: "Compétences en lien",
      view: "Voir",
    },
    mbipa: {
      metaTitle: "MBIPA — Étude de cas",
      metaDescription:
        "Comment Sehass Digital a conçu et développé MBIPA — une plateforme numérique de bien-être assistée par IA combinant technologie mobile, tests de bien-être, musicothérapie et compagnon conversationnel.",
    },
    amal: {
      metaTitle: "Amal AI — Étude de cas",
      metaDescription:
        "Comment Sehass Digital a conçu et développé Amal AI — une plateforme numérique d\u2019emploi combinant découverte d\u2019offres, publication, communauté, profils professionnels, création de CV et accompagnement carrière assisté par IA.",
    },
    earcep: {
      metaTitle: "Assistant IA e-ARCEP — Étude de cas",
      metaDescription:
        "Un projet en cours de Sehass Digital — un assistant WhatsApp propulsé par l\u2019IA conçu pour guider les citoyens à travers l\u2019information et le dépôt de réclamations.",
    },
  },
  eSehass: {
    meta: {
      title: "Marketplace e-Sehass",
      description:
        "e-Sehass est une future initiative de marketplace au sein de l\u2019écosystème Sehass Digital. Elle n\u2019a pas encore été lancée.",
    },
    hero: {
      eyebrow: "Écosystème Sehass",
      title: "e-Sehass arrive bientôt.",
      bodyOne:
        "e-Sehass est une future initiative de marketplace au sein de l\u2019écosystème Sehass Digital. Elle n\u2019a pas encore été lancée\u00a0: pas encore de catalogue, de panier ni de données produit à afficher. Quand elle sera prête, elle vivra à cette adresse.",
      bodyTwo:
        "En attendant, nous nous concentrons sur la livraison de logiciels, d\u2019IA et de produits numériques pour les organisations avec lesquelles nous travaillons. Si vous avez un problème qui mérite d\u2019être résolu, nous préférons en parler.",
    },
    next: {
      eyebrow: "Pendant que vous êtes là",
      heading: "Découvrez ce que nous construisons déjà.",
      body: "Nos solutions livrées et nos projets en cours sont le vrai signal de ce que Sehass Digital sait construire.",
      primaryCta: "Voir nos solutions",
      secondaryCta: "Démarrer un projet",
    },
  },
  ai: {
    meta: {
      title: "Solutions d\u2019IA et intelligence artificielle | Sehass Digital",
      description:
        "Sehass Digital conçoit et développe des solutions d\u2019IA concrètes — applications d\u2019IA, agents d\u2019IA, IA conversationnelle, IA générative, intelligence documentaire, connaissance et recherche, automatisation des flux et aide à la décision.",
    },
    hero: {
      eyebrow: "Sehass IA",
      title: "Construire plus intelligemment avec l\u2019IA.",
      body: "Nous concevons et développons des solutions d\u2019IA concrètes qui aident les personnes et les organisations à exploiter l\u2019information, automatiser des processus, améliorer les expériences et mieux utiliser la technologie.",
      primaryCta: "Parlons IA",
      secondaryCta: "Découvrir ce que nous construisons",
      system: "Système",
      flowsInto: "Alimente",
      diagramAlt:
        "Système Sehass IA\u00a0: l\u2019entrée alimente une couche d\u2019intelligence, qui produit l\u2019action.",
      layers: {
        input: { label: "Entrée", detail: "Information, documents, conversations, données" },
        intelligence: { label: "Intelligence", detail: "Compréhension, raisonnement, recherche" },
        action: { label: "Action", detail: "Réponses, décisions, flux, expériences" },
      },
    },
    purpose: {
      eyebrow: "L\u2019objectif avant la hype",
      heading: "Commencer par le problème. Décider ensuite si l\u2019IA a sa place.",
      body: "L\u2019IA n\u2019est pas la réponse à tous les problèmes. Nous commençons par comprendre le problème, les personnes concernées et le résultat qui compte. Si l\u2019IA peut créer une valeur réelle, nous concevons la bonne approche autour d\u2019elle.",
    },
    capabilities: {
      eyebrow: "Capacités",
      heading: "Que peut faire l\u2019IA pour votre organisation\u00a0?",
      body: "Une liste courte des capacités d\u2019IA que nous concevons, développons et intégrons — ancrées dans des cas d\u2019usage réels et combinées uniquement quand cela a du sens pour le problème posé.",
    },
    agents: {
      eyebrow: "Agents d\u2019IA",
      heading: "De répondre aux questions à passer à l\u2019action.",
      body: "Les agents d\u2019IA peuvent combiner modèles de langage, outils, règles métier et flux de travail pour aider à accomplir des tâches en plusieurs étapes. Nous les construisons avec des contraintes réelles — cadrés à un flux, conscients de leurs outils et responsables devant les personnes qu\u2019ils servent.",
      insistLabel: "Ce sur quoi nous insistons",
      insist: [
        "Supervision humaine",
        "Flux contrôlés",
        "Permissions",
        "Usage fiable des outils",
        "Objectifs clairs",
        "Surveillance",
        "Déploiement responsable",
      ],
      archTitle: "Architecture d\u2019agent",
      archAlt:
        "Architecture d\u2019agent d\u2019IA\u00a0: un utilisateur interagit avec un agent qui s\u2019appuie sur des connaissances, des outils et des systèmes pour effectuer une action encadrée et renvoyer un résultat vérifiable.",
      nodes: {
        user: { label: "Utilisateur", detail: "Personne avec un objectif ou une tâche." },
        agent: { label: "Agent d\u2019IA", detail: "Raisonne sur la tâche à partir des instructions et du contexte." },
        knowledge: { label: "Connaissances · Outils · Systèmes", detail: "Les ressources que l\u2019agent est autorisé à utiliser." },
        action: { label: "Action", detail: "Une étape concrète prise dans un cadre défini." },
        result: { label: "Résultat", detail: "Un résultat que l\u2019utilisateur peut examiner et exploiter." },
      },
    },
    conversational: {
      eyebrow: "IA conversationnelle",
      heading: "Rendre la technologie plus simple à utiliser.",
      body: "L\u2019IA conversationnelle peut transformer des systèmes complexes en expériences avec lesquelles les gens peuvent simplement dialoguer. Bien conçue, elle aide les utilisateurs à trouver de l\u2019information, accomplir des tâches et obtenir une aide guidée sans avoir à comprendre le logiciel sous-jacent.",
    },
    generative: {
      eyebrow: "IA générative",
      heading: "Travailler autrement avec l\u2019information.",
      body: "L\u2019IA générative aide les travailleurs du savoir à avancer plus vite sur l\u2019information qu\u2019ils manipulent déjà — écrire, résumer, extraire et transformer — tout en laissant aux personnes la responsabilité des décisions de jugement.",
      note: "Nous positionnons l\u2019IA générative comme une assistance, pas comme un substitut à l\u2019expertise.",
    },
    knowledge: {
      eyebrow: "Données et connaissance",
      heading: "Transformer l\u2019information en quelque chose d\u2019utile.",
      body: "Les systèmes d\u2019IA les plus utiles s\u2019appuient sur l\u2019information que l\u2019organisation possède déjà. Le travail de conception consiste à décider ce qui doit y passer, ce qui ne doit pas, et comment les réponses sont ancrées.",
      sourcesLabel: "Sources",
      outputsLabel: "Sorties",
      intelligenceLabel: "Couche d\u2019intelligence",
      intelligenceTitle: "Recherche · Compréhension · Raisonnement",
      intelligenceBody:
        "La couche d\u2019intelligence connecte les sources aux sorties. Elle respecte les contrôles d\u2019accès, privilégie les réponses vérifiables et connaît ses limites.",
      flowAlt:
        "Les sources d\u2019information traversent une couche d\u2019intelligence d\u2019IA pour produire recherche, réponses, insights, automatisation et aide à la décision.",
      sources: [
        "Documents",
        "Bases de données",
        "Bases de connaissances",
        "Information interne",
        "Données structurées",
        "Données non structurées",
      ],
      outputs: ["Recherche", "Réponses", "Insights", "Automatisation", "Aide à la décision"],
    },
    process: {
      eyebrow: "Processus",
      heading: "De l\u2019idée à la solution d\u2019IA.",
    },
    responsible: {
      eyebrow: "IA responsable",
      heading: "Une technologie puissante exige une ingénierie réfléchie.",
      body: "Les systèmes d\u2019IA peuvent influencer la manière dont les personnes accèdent à l\u2019information, prennent des décisions et interagissent avec les organisations. Nous pensons qu\u2019ils doivent donc être conçus avec les garde-fous adaptés, une supervision humaine et des limites claires.",
    },
    human: {
      eyebrow: "Humain + IA",
      heading: "L\u2019IA doit prolonger les personnes, pas retirer le besoin de jugement.",
      body: "Les meilleurs produits propulsés par l\u2019IA que nous puissions imaginer ne sortent pas les personnes de la boucle. Ils leur donnent de meilleurs éléments, de meilleurs outils et plus de temps pour le travail qui a réellement besoin d\u2019un humain.",
      expertise: "Expertise humaine",
      assistance: "Assistance de l\u2019IA",
      workflows: "Bons flux de travail",
      outcomes: "Meilleurs résultats",
      formulaAlt:
        "Expertise humaine plus assistance de l\u2019IA plus bons flux de travail égalent de meilleurs résultats.",
    },
    useCases: {
      eyebrow: "Là où nous pouvons aider",
      heading: "Des endroits concrets où mettre l\u2019IA au travail.",
      body: "Ce sont les types de problèmes pour lesquels nous pensons que l\u2019IA fait utilement partie de la réponse. Chaque mission est cadrée sur ce dont l\u2019organisation a réellement besoin.",
    },
    ecosystem: {
      eyebrow: "Écosystème technologique",
      heading: "Construit avec le bon écosystème technologique.",
      body: "Notre partenariat avec Microsoft connecte Sehass Digital à un écosystème technologique mondial pendant que nous continuons à bâtir la technologie depuis la République centrafricaine.",
    },
    why: {
      eyebrow: "Pourquoi travailler avec Sehass pour l\u2019IA",
      heading: "L\u2019IA n\u2019a de valeur que lorsqu\u2019elle fonctionne dans le monde réel.",
    },
    engagement: {
      eyebrow: "Stratégie d\u2019IA",
      heading: "Commencez au niveau de risque qui vous convient.",
      body: "Chaque projet d\u2019IA ne démarre pas par une implémentation à grande échelle. Beaucoup commencent comme de petites expérimentations bien cadrées et grandissent à partir de là.",
    },
    finalCta: {
      heading: "Une idée d\u2019IA à explorer\u00a0?",
      supporting: "Commençons par comprendre le problème — puis voyons ce que l\u2019IA peut faire.",
      cta: "Parlons IA",
      secondaryLabel: "Découvrir nos projets",
    },
  },
};
