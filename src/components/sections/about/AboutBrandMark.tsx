import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Presents the real Sehass Digital brand mark. The source image already
 * has the brand navy background baked in, so it's placed in a matching
 * surface without recoloring.
 */
export function AboutBrandMark({
  eyebrow,
  heading,
  body,
  image,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
}) {
  return (
    <Section tone="default" spacing="lg" aria-labelledby="about-mark">
      <Container size="lg">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface-elevated p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="about-mark"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-brand">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
