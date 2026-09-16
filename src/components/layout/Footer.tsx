import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

const year = new Date().getFullYear();

type Props = { dict: Dictionary; lang: Locale };

export function Footer({ dict, lang }: Props) {
  const l = (href: string) => `/${lang}${href === "/" ? "" : href}`;
  const columns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
    {
      title: dict.footer.columns.whatWeBuild,
      links: [
        { label: dict.footer.links.software, href: "/what-we-build#software" },
        { label: dict.footer.links.ai, href: "/ai" },
        { label: dict.footer.links.digitalProducts, href: "/what-we-build#digital-products" },
        { label: dict.footer.links.digitalTransformation, href: "/what-we-build#digital-transformation" },
      ],
    },
    {
      title: dict.footer.columns.company,
      links: [
        { label: dict.footer.links.about, href: "/about" },
        { label: dict.footer.links.projects, href: "/projects" },
        { label: dict.footer.links.industries, href: "/industries" },
        { label: dict.footer.links.insights, href: "/insights" },
        { label: dict.footer.links.contact, href: "/contact" },
        { label: dict.footer.links.privacy, href: "/privacy" },
      ],
    },
    {
      title: dict.footer.columns.ecosystem,
      links: [
        { label: dict.footer.links.marketplace, href: "/e-sehass" },
        { label: dict.footer.links.solutions, href: "/solutions" },
      ],
    },
  ];
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container size="lg" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4 max-w-sm">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <NextLink
                      href={l(link.href)}
                      className="text-sm text-foreground transition-colors duration-150 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Sehass Digital · {dict.footer.copyright}</p>
          <p>{dict.footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
