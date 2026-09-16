import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import { cn } from "@/lib/utils";
import type { ProjectFeature } from "@/data/projects";

/**
 * Renders the "What we built" feature list as alternating editorial rows.
 * Features without images render as a compact prose block.
 */
export function ProjectFeatureList({
  eyebrow,
  heading,
  body,
  features,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  features: ProjectFeature[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="pf-list">
      <Container size="lg">
        <div className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
            <h2
              id="pf-list"
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {heading}
            </h2>
          </div>
          {body ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
          ) : null}
        </div>

        <ol className="flex flex-col gap-16 md:gap-24">
          {features.map((feature, i) => {
            const hasImages = feature.images && feature.images.length > 0;
            const reverse = i % 2 === 1;
            return (
              <li
                key={feature.title}
                className={cn(
                  "grid gap-10 lg:gap-16",
                  hasImages
                    ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col justify-center gap-5",
                    hasImages && reverse ? "lg:order-2" : "",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span aria-hidden className="h-px w-6 bg-border-strong" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {feature.body}
                  </p>
                  {feature.note ? (
                    <p className="max-w-xl rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.note}
                    </p>
                  ) : null}
                </div>

                {hasImages ? (
                  <div
                    className={cn(
                      "flex flex-wrap items-center justify-center gap-6",
                      reverse ? "lg:order-1" : "",
                    )}
                  >
                    {feature.images!.map((img, imgIdx) => (
                      <PhoneFrame
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={cn(
                          "max-w-56 md:max-w-64",
                          feature.images!.length > 1 && imgIdx === 1
                            ? "hidden md:block"
                            : "",
                        )}
                      />
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
