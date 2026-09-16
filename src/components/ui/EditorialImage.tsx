import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { EditorialAsset } from "@/data/editorial";

const focusToPosition: Record<
  NonNullable<EditorialAsset["focus"]>,
  string
> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

/**
 * Editorial hero visual — a rounded, bordered card used on the right
 * side of hero grids in place of the abstract CapabilityVisual /
 * IndustryDetailHero icon block.
 *
 * Aspect ratio stays consistent across a page so heroes line up.
 */
export function EditorialHeroCard({
  asset,
  priority = false,
  className,
}: {
  asset: EditorialAsset;
  priority?: boolean;
  className?: string;
}) {
  const positionClass = focusToPosition[asset.focus ?? "center"];
  return (
    <div
      className={cn(
        "relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-(--shadow-md) md:aspect-3/4 lg:aspect-4/5",
        className,
      )}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 100vw"
        className={cn("object-cover", positionClass)}
        priority={priority}
      />
    </div>
  );
}

/**
 * Full-bleed editorial band — a thin horizontal image band used to
 * introduce a stretch of a page (e.g. between hero and the first
 * content section on the AI page). Keeps a fixed aspect ratio so it
 * doesn't dominate mobile.
 */
export function EditorialBand({
  asset,
  className,
}: {
  asset: EditorialAsset;
  className?: string;
}) {
  const positionClass = focusToPosition[asset.focus ?? "center"];
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface-elevated md:aspect-21/9",
        className,
      )}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        className={cn("object-cover", positionClass)}
      />
    </div>
  );
}

/**
 * Editorial band embedded in a standard Section — the common pattern
 * for punctuating a long page between narrative sections. Prefer this
 * over hand-rolling a Section wrapper around EditorialBand on pages.
 */
export function EditorialBandSection({
  asset,
  tone = "default",
}: {
  asset: EditorialAsset;
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="md">
      <Container size="lg">
        <EditorialBand asset={asset} />
      </Container>
    </Section>
  );
}
