import { cn } from "@/lib/utils";
import type { IndustryIconName } from "@/data/industries";

const base = "h-6 w-6";

/** Minimal outline icons in currentColor — no brand color, no fill. */
export function IndustryIcon({
  name,
  className,
}: {
  name: IndustryIconName;
  className?: string;
}) {
  const c = cn(base, className);
  const props = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: c,
  };

  switch (name) {
    case "healthcare":
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.4-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 11c0 5.6-7 10-7 10Z" />
          <path d="M9.5 12h5M12 9.5v5" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
          <path d="M7 11.5V16c0 1.4 2.5 2.5 5 2.5s5-1.1 5-2.5v-4.5" />
          <path d="M21 9.5V15" />
        </svg>
      );
    case "business":
      return (
        <svg {...props}>
          <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
          <path d="M8.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v1.5" />
          <path d="M3.5 12h17" />
        </svg>
      );
    case "government":
      return (
        <svg {...props}>
          <path d="M3.5 10 12 5l8.5 5" />
          <path d="M5 10v8.5M19 10v8.5M9 10v8.5M15 10v8.5M12 10v8.5" />
          <path d="M3 19h18" />
        </svg>
      );
    case "commerce":
      return (
        <svg {...props}>
          <path d="M3 4h2l2 11h11l2-8H6" />
          <circle cx="9" cy="19" r="1.4" />
          <circle cx="17" cy="19" r="1.4" />
        </svg>
      );
  }
}
