import Link from "next/link";
import { Container } from "@/components/layout/Container";

// Placeholder root — the real homepage lands in Sprint 2.
export default function RootPage() {
  return (
    <main className="flex-1 flex items-center">
      <Container>
        <div className="flex flex-col gap-6 max-w-xl py-24">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            Sehass Digital
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            Something remarkable is being engineered here.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Sehass Digital website is under active construction. The design
            system foundation is complete; the homepage lands in the next sprint.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="/design-system"
              className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover underline underline-offset-4 decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              View design system
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
