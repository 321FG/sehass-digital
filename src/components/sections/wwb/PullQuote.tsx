import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/app/[lang]/dictionaries";

/**
 * Full-bleed pull-quote used on the AI page as a strong closing statement
 * before the final CTA. Purely typographic, no imagery.
 */
export async function PullQuote({ quote }: { quote: string }) {
  const dict = await getDictionary();
  return (
    <Section tone="default" spacing="md">
      <Container size="md">
        <figure className="flex flex-col gap-6 border-y border-border py-14 text-center md:py-20">
          <span
            aria-hidden
            className="mx-auto font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            {dict.wwb.shared.pullQuoteEyebrow}
          </span>
          <blockquote className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </figure>
      </Container>
    </Section>
  );
}
