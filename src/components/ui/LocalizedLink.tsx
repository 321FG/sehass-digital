"use client";

import NextLink, { type LinkProps } from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { defaultLocale, isLocale } from "@/i18n/config";

type Props = Omit<LinkProps, "href"> &
  Omit<ComponentProps<"a">, keyof LinkProps | "href"> & {
    href: string;
    children?: ReactNode;
  };

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function LocalizedLink({ href, ...props }: Props) {
  const params = useParams<{ lang?: string }>();
  const raw = params?.lang;
  const lang = raw && isLocale(raw) ? raw : defaultLocale;

  if (!isInternal(href)) {
    return <NextLink href={href} {...props} />;
  }

  const segments = href.split(/[?#]/, 1)[0].split("/").filter(Boolean);
  const first = segments[0];
  const alreadyLocalized = first && isLocale(first);
  const localized = alreadyLocalized
    ? href
    : href === "/"
      ? `/${lang}`
      : `/${lang}${href}`;
  return <NextLink href={localized} {...props} />;
}
