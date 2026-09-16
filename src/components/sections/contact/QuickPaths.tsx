import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/app/[lang]/dictionaries";

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-foreground"
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

export async function QuickPaths() {
  const dict = await getDictionary();
  const t = dict.contact.quickPaths;

  const hrefFor = (key: "start" | "ai" | "general"): { href: string; external?: boolean } => {
    if (key === "start") return { href: "#project-form" };
    if (key === "ai") {
      const path = t.paths.find((p) => p.key === "ai");
      return {
        href: `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
          path?.title ?? "Ask about AI",
        )}`,
        external: true,
      };
    }
    return { href: `mailto:${siteConfig.contact.email}`, external: true };
  };

  return (
    <Section tone="surface" spacing="md" aria-labelledby="quick-paths-heading">
      <Container size="lg">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {t.eyebrow}
          </span>
          <h2
            id="quick-paths-heading"
            className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {t.heading}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.paths.map((p) => {
            const { href, external } = hrefFor(p.key);
            const isHash = href.startsWith("#");
            const commonClass =
              "group flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
            const content = (
              <>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  {t.go}
                  <ArrowIcon />
                </span>
              </>
            );

            if (isHash || external) {
              return (
                <a
                  key={p.key}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={commonClass}
                >
                  {content}
                </a>
              );
            }
            return (
              <Link key={p.key} href={href} className={commonClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
