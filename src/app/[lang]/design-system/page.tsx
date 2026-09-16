import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CartButton } from "@/components/ui/CartButton";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { IndustryCard } from "@/components/cards/IndustryCard";

const swatches = [
  { name: "Brand", varName: "--brand", swatch: "bg-brand", fg: "text-brand-foreground" },
  { name: "Accent", varName: "--accent", swatch: "bg-accent", fg: "text-accent-foreground" },
  { name: "Background", varName: "--background", swatch: "bg-background border border-border", fg: "text-foreground" },
  { name: "Surface", varName: "--surface", swatch: "bg-surface", fg: "text-surface-foreground" },
  { name: "Muted", varName: "--muted", swatch: "bg-muted", fg: "text-muted-foreground" },
  { name: "Border", varName: "--border", swatch: "bg-border", fg: "text-foreground" },
  { name: "Success", varName: "--success", swatch: "bg-success", fg: "text-white" },
  { name: "Warning", varName: "--warning", swatch: "bg-warning", fg: "text-white" },
  { name: "Error", varName: "--error", swatch: "bg-error", fg: "text-white" },
];

const typeScale = [
  { label: "Display", className: "font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]" },
  { label: "H1", className: "font-display text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.08]" },
  { label: "H2", className: "font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.15]" },
  { label: "H3", className: "font-display text-xl md:text-2xl font-semibold tracking-[-0.015em] leading-[1.25]" },
  { label: "H4", className: "font-display text-lg font-semibold tracking-tight" },
  { label: "Body", className: "text-base leading-relaxed" },
  { label: "Small", className: "text-sm text-muted-foreground" },
  { label: "Caption", className: "text-xs uppercase tracking-[0.16em] text-muted-foreground" },
];

export default function DesignSystemPreview() {
  return (
    <div className="flex-1">
      {/* Header preview */}
      <div className="border-b border-border">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <span className="font-display text-base font-semibold tracking-tight">
              Sehass<span className="text-accent">.</span>Digital
            </span>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Sprint 1 · Design system</Badge>
              <CartButton count={2} href="#" />
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl flex flex-col gap-8">
            <Heading level="display" eyebrow="Design system preview">
              A modern foundation for{" "}
              <span className="text-accent">Sehass Digital</span>.
            </Heading>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Design tokens, typography, and reusable UI primitives. Brand navy
              stays dominant; accent orange stays reserved for meaningful
              interactions.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <CTA href="#components">Explore components</CTA>
              <Button variant="outline" size="lg">
                View tokens
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Colors */}
      <Section tone="surface" spacing="md">
        <Container>
          <div className="flex flex-col gap-10">
            <Heading level="h2" eyebrow="Color system">
              Brand-led palette
            </Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {swatches.map((s) => (
                <div key={s.name} className="flex flex-col gap-2">
                  <div
                    className={`h-24 rounded-xl flex items-end p-3 ${s.swatch} ${s.fg}`}
                  >
                    <span className="text-xs font-medium">{s.name}</span>
                  </div>
                  <code className="text-xs text-muted-foreground font-mono">
                    {s.varName}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section spacing="md">
        <Container>
          <div className="flex flex-col gap-10">
            <Heading level="h2" eyebrow="Typography">
              Clear hierarchy, Geist system
            </Heading>
            <div className="flex flex-col gap-6 divide-y divide-border">
              {typeScale.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 pt-6 first:pt-0"
                >
                  <span className="w-24 shrink-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.label}
                  </span>
                  <p className={t.className}>
                    Engineering premium digital products.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Components */}
      <Section id="components" tone="surface" spacing="md">
        <Container>
          <div className="flex flex-col gap-12">
            <Heading level="h2" eyebrow="Component library">
              Reusable primitives
            </Heading>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Buttons
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="accent">Accent CTA</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Text link</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Badges
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral">Neutral</Badge>
                <Badge variant="brand">Brand</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4 max-w-lg">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Form inputs
              </h3>
              <Input placeholder="Full name" />
              <Input type="email" placeholder="you@company.com" />
              <Textarea placeholder="Tell us about your project…" />
            </div>

            {/* Card */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Card
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card interactive elevated>
                  <CardHeader>
                    <Badge variant="accent" className="w-fit">
                      New
                    </Badge>
                    <CardTitle>Base card</CardTitle>
                    <CardDescription>
                      Elevated interactive surface with hover feedback and
                      accessible focus states.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Flat card</CardTitle>
                    <CardDescription>
                      Static content surface. Same border and radius language,
                      no shadow, no lift.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Domain cards */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Domain cards
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <SolutionCard
                  solution={{
                    slug: "ai",
                    title: "AI & intelligent systems",
                    summary:
                      "Production-grade AI agents, RAG pipelines, and ML services deployed on Azure.",
                    href: "#",
                  }}
                />
                <SolutionCard
                  solution={{
                    slug: "products",
                    title: "Digital products",
                    summary:
                      "Web and mobile products built for scale, speed, and clarity of purpose.",
                    href: "#",
                  }}
                />
                <SolutionCard
                  solution={{
                    slug: "platforms",
                    title: "Cloud platforms",
                    summary:
                      "Azure-native architectures, IaC, and observability from day one.",
                    href: "#",
                  }}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <IndustryCard
                  industry={{
                    slug: "fintech",
                    title: "Financial services",
                    summary:
                      "Payments, lending, and treasury tooling for African fintechs.",
                    href: "#",
                  }}
                />
                <IndustryCard
                  industry={{
                    slug: "gov",
                    title: "Public sector",
                    summary:
                      "Secure digital services for governments and agencies.",
                    href: "#",
                  }}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  project={{
                    slug: "sample-1",
                    title: "Marketplace platform",
                    summary:
                      "Multi-vendor commerce experience with an AI recommendation layer.",
                    tags: ["Next.js", "Azure", "AI"],
                    href: "#",
                  }}
                />
                <ProjectCard
                  project={{
                    slug: "sample-2",
                    title: "Risk intelligence",
                    summary:
                      "Real-time credit risk scoring using event-driven ML pipelines.",
                    tags: ["Python", "Cosmos DB"],
                    href: "#",
                  }}
                />
                <ProjectCard
                  project={{
                    slug: "sample-3",
                    title: "Field operations",
                    summary:
                      "Offline-first mobile tooling for logistics teams across three markets.",
                    tags: ["React Native", "Blob Storage"],
                    href: "#",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inverted brand section */}
      <Section tone="brand" spacing="lg">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-6">
              <Heading level="h2" eyebrow="Dark surface">
                Same identity, inverted.
              </Heading>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sections can render on the deep brand navy while preserving
                contrast, focus, and accent behavior.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTA href="#" variant="accent">
                Start a project
              </CTA>
              <Button variant="outline" size="lg">
                Read the manifesto
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
