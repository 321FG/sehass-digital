import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTA } from "@/components/ui/CTA";
import { getProjectBySlug, localizeCategoryTag } from "@/data/projects";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function FeaturedSolution() {
  const dict = await getDictionary();
  const lang = await getLocale();
  const t = dict.home.featuredSolution;
  const mbipaProject = getProjectBySlug(lang, "mbipa");
  const screenshot = mbipaProject.card.image;

  return (
    <Section tone="default" spacing="lg" aria-labelledby="built-by-sehass">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="built-by-sehass"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.subheading}
          </p>
        </div>

        <article className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-(--shadow-sm)">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-6 p-8 md:p-12 lg:p-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.productCategory}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {t.productName}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {t.productTagline}
                </p>
              </div>

              <ul className="mt-2 flex flex-wrap gap-2">
                {mbipaProject.card.categoryTags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {localizeCategoryTag(lang, tag)}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <CTA
                  href={`/${lang}/solutions/mbipa`}
                  variant="primary"
                  size="md"
                >
                  {t.cta}
                </CTA>
              </div>
            </div>

            <div className="relative min-h-72 border-t border-border bg-brand lg:border-l lg:border-t-0">
              <div
                aria-hidden
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative flex h-full items-center justify-center p-8 md:p-12 lg:p-14">
                <div className="relative aspect-9/16 w-full max-w-64 overflow-hidden rounded-2xl border border-white/10 shadow-(--shadow-lg) md:max-w-72">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
