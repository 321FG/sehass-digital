import { ClosingCTA } from "@/components/sections/wwb/ClosingCTA";
import { getDictionary, getLocale } from "@/app/[lang]/dictionaries";

export async function AIFinalCTA() {
  const lang = await getLocale();
  const dict = await getDictionary(lang);
  const t = dict.ai.finalCta;
  return (
    <ClosingCTA
      heading={t.heading}
      supporting={t.supporting}
      cta={t.cta}
      href={`/${lang}/contact`}
      secondary={{ label: t.secondaryLabel, href: `/${lang}/projects` }}
    />
  );
}
