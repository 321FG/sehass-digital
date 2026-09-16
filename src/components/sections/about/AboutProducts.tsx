import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const linkClass = cn(
  "group flex flex-col gap-3 rounded-2xl border border-border bg-surface-elevated p-6",
  "transition-colors duration-150 hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function ArrowRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
    >
      <path
        d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutProducts({
  eyebrow,
  heading,
  body,
  products,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  products: { name: string; href: string; description: string }[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="about-products">
      <Container size="lg">
        <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="about-products"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.name}>
              <NextLink href={p.href} className={linkClass}>
                <span className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {p.name}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.description}
                </span>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-foreground">
                  View case study <ArrowRight />
                </span>
              </NextLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
