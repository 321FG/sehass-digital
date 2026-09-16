export type SelectOption = {
  value: string;
  label: string;
};

export const needOptions: SelectOption[] = [
  { value: "software-development", label: "Software Development" },
  { value: "ai-solution", label: "AI Solution" },
  { value: "digital-product", label: "Digital Product" },
  { value: "automation", label: "Automation" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "system-integration", label: "System Integration" },
  { value: "not-sure", label: "Not sure yet" },
  { value: "other", label: "Other" },
];

export const stageOptions: SelectOption[] = [
  { value: "", label: "Select a stage (optional)" },
  { value: "exploring", label: "Just exploring" },
  { value: "idea", label: "Idea" },
  { value: "planning", label: "Planning" },
  { value: "prototype", label: "Prototype / MVP" },
  { value: "existing-product", label: "Existing product" },
  { value: "existing-improvement", label: "Existing system that needs improvement" },
  { value: "not-sure", label: "Not sure" },
];

export const budgetOptions: SelectOption[] = [
  { value: "", label: "Select a range (optional)" },
  { value: "not-decided", label: "Not decided" },
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000\u20135,000" },
  { value: "5k-10k", label: "$5,000\u201310,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "discuss", label: "Prefer to discuss" },
];

export const timelineOptions: SelectOption[] = [
  { value: "", label: "Select a timeline (optional)" },
  { value: "flexible", label: "Flexible" },
  { value: "within-1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1\u20133 months" },
  { value: "3-6-months", label: "3\u20136 months" },
  { value: "6-plus-months", label: "More than 6 months" },
  { value: "not-sure", label: "Not sure" },
];

export type WhatHappensStep = {
  number: string;
  title: string;
  summary: string;
};

export const whatHappensSteps: WhatHappensStep[] = [
  {
    number: "01",
    title: "Tell us about the problem",
    summary: "Share what you\u2019re trying to build, improve or solve.",
  },
  {
    number: "02",
    title: "We explore the right approach",
    summary: "We review your context and think through what could actually help.",
  },
  {
    number: "03",
    title: "We discuss what to build",
    summary: "We get back to you to talk through a possible way forward.",
  },
];

export type QuickPath = {
  title: string;
  summary: string;
  href: string;
  external?: boolean;
};
