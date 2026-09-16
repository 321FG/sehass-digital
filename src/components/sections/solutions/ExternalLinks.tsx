import NextLink from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ExternalLink } from "@/data/solutions";
import { getDictionary } from "@/app/[lang]/dictionaries";

const iconClass = "h-4 w-4 shrink-0";

function PlayIcon() {
  return (
    <Image
      src="/brand/google-play.jpeg"
      alt=""
      aria-hidden
      width={2048}
      height={2048}
      className={cn(iconClass, "rounded-sm")}
    />
  );
}
function AppleIcon() {
  return (
    <Image
      src="/brand/app-store.jpeg"
      alt=""
      aria-hidden
      width={1450}
      height={1450}
      className={cn(iconClass, "rounded-sm")}
    />
  );
}
function WebIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
function ExternalArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
    >
      <path
        d="M7 13 13 7m0 0H8m5 0v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const primary = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-medium text-brand-foreground",
  "shadow-(--shadow-sm) transition-colors duration-150",
  "hover:bg-brand-hover active:translate-y-px",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const outline = cn(
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-background px-5 text-sm font-medium text-foreground",
  "transition-colors duration-150 hover:bg-surface hover:border-foreground/30",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

function iconFor(platform?: ExternalLink["platform"]) {
  switch (platform) {
    case "play":
      return <PlayIcon />;
    case "apple":
      return <AppleIcon />;
    case "web":
      return <WebIcon />;
    default:
      return null;
  }
}

export async function ExternalLinks({
  links,
  variant = "outline",
  className,
}: {
  links: ExternalLink[];
  variant?: "primary" | "outline" | "mixed";
  className?: string;
}) {
  const dict = await getDictionary();
  return (
    <ul
      className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}
    >
      {links.map((link, i) => {
        const style =
          variant === "mixed" && i === 0
            ? primary
            : variant === "primary"
              ? primary
              : outline;
        return (
          <li key={link.href}>
            <NextLink
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={style}
              aria-label={`${link.label} (${dict.sections.openInNewTab})`}
            >
              {iconFor(link.platform)}
              <span>{link.label}</span>
              <ExternalArrow />
            </NextLink>
          </li>
        );
      })}
    </ul>
  );
}
