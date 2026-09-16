import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PhoneFrame } from "@/components/sections/solutions/PhoneFrame";
import type { ProjectGalleryImage } from "@/data/projects";

export function ProjectGallery({
  eyebrow,
  heading,
  body,
  images,
  tone = "surface",
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  images: ProjectGalleryImage[];
  tone?: "default" | "surface";
}) {
  return (
    <Section tone={tone} spacing="lg" aria-labelledby="pg-heading">
      <Container size="lg">
        <div className="mb-12 flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2
            id="pg-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {heading}
          </h2>
          {body ? (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {body}
            </p>
          ) : null}
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img) => (
            <li key={img.src} className="flex flex-col gap-4">
              <PhoneFrame src={img.src} alt={img.alt} />
              {img.caption ? (
                <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {img.caption}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
