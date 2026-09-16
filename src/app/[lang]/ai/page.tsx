import type { Metadata } from "next";
import { AIAgents } from "@/components/sections/ai/AIAgents";
import { AICapabilities } from "@/components/sections/ai/AICapabilities";
import { AIConversational } from "@/components/sections/ai/AIConversational";
import { AIEcosystem } from "@/components/sections/ai/AIEcosystem";
import { AIEngagement } from "@/components/sections/ai/AIEngagement";
import { AIFinalCTA } from "@/components/sections/ai/AIFinalCTA";
import { AIGenerative } from "@/components/sections/ai/AIGenerative";
import { AIHero } from "@/components/sections/ai/AIHero";
import { AIHumanPlus } from "@/components/sections/ai/AIHumanPlus";
import { AIKnowledge } from "@/components/sections/ai/AIKnowledge";
import { AIProcess } from "@/components/sections/ai/AIProcess";
import { AIPurpose } from "@/components/sections/ai/AIPurpose";
import { AIResponsible } from "@/components/sections/ai/AIResponsible";
import { AIUseCases } from "@/components/sections/ai/AIUseCases";
import { AIWhy } from "@/components/sections/ai/AIWhy";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialBand, EditorialBandSection } from "@/components/ui/EditorialImage";
import { editorial } from "@/data/editorial";
import { getDictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { title, description } = dict.ai.meta;
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/ai`,
      languages: {
        en: "/en/ai",
        fr: "/fr/ai",
        "x-default": "/en/ai",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${lang}/ai`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function AIPage() {
  return (
    <>
      <AIHero />
      <AIPurpose />
      <AICapabilities />
      <Section tone="default" spacing="md">
        <Container size="lg">
          <EditorialBand asset={editorial.aiHologram} />
        </Container>
      </Section>
      <AIAgents />
      <AIConversational />
      <AIGenerative />
      <EditorialBandSection asset={editorial.intelligentSearch} tone="surface" />
      <AIKnowledge />
      <AIProcess />
      <AIResponsible />
      <AIHumanPlus />
      <AIUseCases />
      <AIEcosystem />
      <AIWhy />
      <AIEngagement />
      <AIFinalCTA />
    </>
  );
}
