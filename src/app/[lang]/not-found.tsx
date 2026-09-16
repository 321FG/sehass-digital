import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for doesn\u2019t exist on sehassdigital.com.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section id="main" tone="default" spacing="xl">
      <Container size="md">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            404
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            The link may be out of date, or the address was typed incorrectly.
            Here are a few places to pick back up.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTA href="/" variant="primary" size="lg">
              Back to home
            </CTA>
            <CTA
              href="/what-we-build"
              variant="outline"
              size="lg"
              withArrow={false}
            >
              What we build
            </CTA>
            <CTA
              href="/contact"
              variant="outline"
              size="lg"
              withArrow={false}
            >
              Contact us
            </CTA>
          </div>
        </div>
      </Container>
    </Section>
  );
}
