import "server-only";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, type Locale } from "@/i18n/config";
import { en, type Dictionary } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export type { Dictionary };

export async function getDictionary(explicit?: Locale): Promise<Dictionary> {
  if (explicit) return dictionaries[explicit];
  const value = await lang();
  if (!value || !isLocale(value)) notFound();
  return dictionaries[value];
}

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !isLocale(value)) notFound();
  return value;
}
