import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const languageAlternates = Object.fromEntries(
    locales.map((l) => [l, `/${l}`]),
  );
  return {
    title: {
      default: dict.metadata.homeTitle,
      template: "%s | Sehass Digital",
    },
    description: dict.metadata.homeDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...languageAlternates,
        "x-default": `/${defaultLocale}`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header dict={dict} lang={lang} />
        <main id="main" className="flex-1">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
