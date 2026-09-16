import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import { cn } from "@/lib/utils";

export type FeatureBlockImage = { src: string; alt: string };

export function FeatureBlock({
  index,
  label,
  title,
  body,
  note,
  images,
  reverse = false,
  tone = "default",
}: {
  index: number;
  label?: string;
  title: string;
  body: string;
  note?: string;
  images?: FeatureBlockImage[];
  reverse?: boolean;
  tone?: "default" | "surface";
}) {
  const hasImages = images && images.length > 0;
  return (
    <Section tone={tone} spacing="md" aria-labelledby={`feat-${index}`}>
      <Container size="lg">
        <div
          className={cn(
            "grid gap-12 lg:gap-16",
            hasImages
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
          )}
        >
          <div
            className={cn(
              "flex flex-col justify-center gap-5",
              reverse ? "lg:order-2" : "",
            )}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                0{index}
              </span>
              {label ? (
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </span>
              ) : null}
            </div>
            <h2
              id={`feat-${index}`}
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {title}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
            {note ? (
              <p className="max-w-md rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
            ) : null}
          </div>

          {hasImages ? (
            <div
              className={cn(
                "flex items-center justify-center gap-6",
                reverse ? "lg:order-1" : "",
              )}
            >
              {images!.map((img, i) => (
                <PhoneFrame
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={cn(
                    "max-w-56 md:max-w-64",
                    images!.length > 1 && i === 1
                      ? "hidden md:block"
                      : "",
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
