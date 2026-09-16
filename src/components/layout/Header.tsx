import NextLink from "next/link";
import { CartButton } from "@/components/ui/CartButton";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { MobileNav } from "@/components/layout/MobileNav";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { primaryNav } from "@/config/site";
import type { Locale } from "@/i18n/config";

type Props = { dict: Dictionary; lang: Locale };

export function Header({ dict, lang }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-on-brand"
      >
        {dict.nav.skipToContent}
      </a>
      <Container size="lg">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6 xl:gap-10">
            <NextLink
              href={`/${lang}`}
              aria-label="Sehass Digital home"
              className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <Logo />
            </NextLink>
            <nav
              aria-label={dict.nav.ariaPrimary}
              className="hidden items-center gap-0.5 xl:flex"
            >
              {primaryNav.map((item) => (
                <HeaderNavLink key={item.href} href={item.href} lang={lang}>
                  {dict.nav[item.key]}
                </HeaderNavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <LocaleSwitcher
              lang={lang}
              label={dict.languageSwitcher.label}
              className="hidden sm:inline-flex"
            />
            <CartButton count={0} href={`/${lang}/e-sehass`} className="hidden sm:inline-flex" />
            <MobileNav dict={dict} lang={lang} />
          </div>
        </div>
      </Container>
    </header>
  );
}
