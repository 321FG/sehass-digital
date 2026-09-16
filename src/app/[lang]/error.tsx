"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";

/**
 * Root error boundary. Rendered when a Server Component throws or a route
 * hits an unhandled runtime error. Kept intentionally spare: no stack
 * traces to the user, no telemetry pretending to exist.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error in the browser console for the developer.
    // We deliberately do not send this anywhere — no analytics pipeline
    // is wired up in the site today.
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <Section id="main" tone="default" spacing="xl">
      <Container size="md">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            Something broke
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            This page ran into an error.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Try again, or head back to the home page. If it keeps happening,
            reach out and we&rsquo;ll take a look.
          </p>
          {error.digest ? (
            <p className="font-mono text-xs text-muted-foreground">
              Reference: {error.digest}
            </p>
          ) : null}
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-base font-medium text-brand-foreground shadow-(--shadow-sm) transition-colors duration-150 hover:bg-brand-hover active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Try again
            </button>
            <CTA href="/" variant="outline" size="lg" withArrow={false}>
              Back to home
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
