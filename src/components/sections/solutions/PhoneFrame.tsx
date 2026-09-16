import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Presentation container for a mobile-portrait product screenshot.
 * Wraps the image in a subtle rounded card with a hairline border and
 * a device-like inset frame — non-branded, does not force product colors.
 * Screenshots are rendered with `object-contain` so nothing is cropped.
 */
export function PhoneFrame({
  src,
  alt,
  className,
  priority,
  sizes = "(min-width: 1024px) 32vw, (min-width: 640px) 60vw, 80vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate mx-auto w-full max-w-xs rounded-[2.25rem] border border-border bg-surface-elevated p-2 shadow-(--shadow-lg)",
        className,
      )}
    >
      <div className="relative aspect-9/19.5 w-full overflow-hidden rounded-[1.75rem] bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      </div>
    </div>
  );
}
