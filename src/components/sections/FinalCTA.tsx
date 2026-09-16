import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

// Purpose-built inverted buttons for the dark FinalCTA section.
// The DS Button primary variant would render invisibly (navy on navy).
const invertedPrimary = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-medium text-brand",
  "shadow-(--shadow-sm) transition-colors duration-150",
  "hover:bg-white/90 active:translate-y-px",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand",
);

const invertedOutline = cn(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 text-base font-medium text-on-brand",
  "transition-colors duration-150",
  "hover:bg-white/10 hover:border-white/40",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand",
);

export async function FinalCTA() {
  const dict = await getDictionary();
  const lang = await getLocale();
  const t = dict.home.finalCta;
  return (
    <Section tone="brand" spacing="xl" aria-labelledby="final-cta-heading">
      <Container size="md">
        <div className="flex flex-col items-start gap-8 text-left md:items-center md:text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-on-brand-muted">
            <span aria-hidden className="h-px w-6 bg-white/25" />
            {t.eyebrow}
          </span>
          <h2
            id="final-cta-heading"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-on-brand md:text-5xl lg:text-6xl"
          >
            {t.heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-on-brand-muted md:text-lg">
            {t.subheading}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <NextLink href={`/${lang}/contact`} className={invertedPrimary}>
              {t.ctaPrimary}
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NextLink>
            <NextLink href={`/${lang}/about`} className={invertedOutline}>
              {t.ctaSecondary}
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
