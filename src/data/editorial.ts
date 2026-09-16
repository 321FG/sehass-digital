/**
 * Central registry for editorial imagery integrated across the site.
 *
 * These are the approved Freepik assets provided by the owner (Sprint
 * 11.5). Files live under public/editorial/. Every entry is used in at
 * least one place — do not add entries speculatively.
 *
 * Alt text is deliberately generic where an image's setting cannot be
 * verified (no fabricated locations, no invented subjects, no claims
 * about people in the frame).
 */
export type EditorialAsset = {
  src: string;
  alt: string;
  /** Native aspect ratio (w / h) for reserving space and avoiding CLS. */
  aspectRatio: number;
  /** Where the interesting content sits, for use with object-position. */
  focus?: "center" | "top" | "bottom" | "left" | "right";
};

export const editorial = {
  humanSmartphone: {
    src: "/editorial/human-smartphone.jpg",
    alt: "Person leaning against a wall, using a smartphone.",
    aspectRatio: 2.4,
    focus: "right",
  },
  dataCenterAdmin: {
    src: "/editorial/data-center-admin.jpg",
    alt: "Administrator working at a screen inside a data center.",
    aspectRatio: 1.5,
    focus: "center",
  },
  softwareEngineer: {
    src: "/editorial/software-engineer.jpg",
    alt: "Software engineer writing code at a workstation.",
    aspectRatio: 1.78,
    focus: "center",
  },
  aiSystems: {
    src: "/editorial/ai-systems.jpg",
    alt: "Close-up of an engineer inspecting an AI system on screen.",
    aspectRatio: 0.67,
    focus: "center",
  },
  cloudNetwork: {
    src: "/editorial/cloud-network.jpg",
    alt: "Abstract cloud and network graphic.",
    aspectRatio: 1.5,
    focus: "center",
  },
  dataCenterTechnician: {
    src: "/editorial/data-center-technician.jpg",
    alt: "Technician using a laptop between rows of data-center racks.",
    aspectRatio: 1.78,
    focus: "right",
  },
  intelligentSearch: {
    src: "/editorial/intelligent-search.jpg",
    alt: "Homepage concept with a prominent search bar.",
    aspectRatio: 1.5,
    focus: "center",
  },
  digitalCommunity: {
    src: "/editorial/digital-community.jpg",
    alt: "Digital community and media network graphic.",
    aspectRatio: 1.29,
    focus: "center",
  },
  healthcareConsult: {
    src: "/editorial/healthcare-consult.jpg",
    alt: "Doctor and patient reviewing test results together.",
    aspectRatio: 1.78,
    focus: "center",
  },
  commerceRestaurant: {
    src: "/editorial/commerce-restaurant.jpg",
    alt: "Group of friends reading a menu at a restaurant table.",
    aspectRatio: 1.5,
    focus: "center",
  },
  aiCollaboration: {
    src: "/editorial/ai-collaboration.jpg",
    alt: "Two developers reviewing an AI project on multiple screens.",
    aspectRatio: 1.78,
    focus: "center",
  },
  systemsIntegration: {
    src: "/editorial/systems-integration.jpg",
    alt: "Engineer running system diagnostics at an industrial site.",
    aspectRatio: 1.9,
    focus: "center",
  },
  codeCloseUp: {
    src: "/editorial/code-close-up.jpg",
    alt: "Close-up of source code on a computer screen.",
    aspectRatio: 1.5,
    focus: "center",
  },
  aiHologram: {
    src: "/editorial/ai-hologram.jpg",
    alt: "Person interacting with an augmented-reality data display.",
    aspectRatio: 1.5,
    focus: "center",
  },
  digitalTransformation: {
    src: "/editorial/digital-transformation.jpg",
    alt: "Person using a smartphone in front of a large digital display wall.",
    aspectRatio: 1.5,
    focus: "center",
  },
  educationStudents: {
    src: "/editorial/education-students.jpg",
    alt: "Students attending a classroom session.",
    aspectRatio: 1.5,
    focus: "center",
  },
} as const satisfies Record<string, EditorialAsset>;

export type EditorialKey = keyof typeof editorial;
