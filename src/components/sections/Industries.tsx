import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function Industries() {
  const dict = await getDictionary();
  const lang = await getLocale();
  const t = dict.home.industries;
  return (
    <Section tone="surface" spacing="lg" aria-labelledby="industries-heading">
      <Container size="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="industries-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {t.heading}
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-elevated">
          {t.items.map((industry) => {
            const content = (
              <>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:w-64 md:shrink-0 md:text-2xl">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {industry.summary}
                </p>
              </>
            );
            return (
              <li key={industry.slug}>
                {industry.href ? (
                  <NextLink
                    href={`/${lang}${industry.href}`}
                    className="group flex flex-col gap-3 p-6 transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:flex-row md:items-center md:gap-8 md:p-8"
                  >
                    {content}
                  </NextLink>
                ) : (
                  <div className="flex flex-col gap-3 p-6 md:flex-row md:items-center md:gap-8 md:p-8">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
