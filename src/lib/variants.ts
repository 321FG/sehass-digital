import { cn } from "./utils";

/* ============================================================
 * Button variants
 * ============================================================ */
export type ButtonVariant =
  | "primary"
  | "accent"
  | "outline"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg " +
  "whitespace-nowrap select-none " +
  "transition-[background-color,border-color,color,box-shadow,transform] " +
  "duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const buttonVariantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-brand-foreground hover:bg-brand-hover active:translate-y-px",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover active:translate-y-px shadow-(--shadow-sm)",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:bg-surface hover:border-foreground/30",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  link: "px-0 h-auto text-accent hover:underline underline-offset-4 decoration-2",
};

const buttonSizeMap: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonVariants(options?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const variant = options?.variant ?? "primary";
  const size = options?.size ?? "md";
  return cn(
    buttonBase,
    buttonVariantMap[variant],
    variant !== "link" && buttonSizeMap[size],
    options?.className,
  );
}

/* ============================================================
 * Badge variants
 * ============================================================ */
export type BadgeVariant =
  | "neutral"
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "outline";

const badgeBase =
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-tight";

const badgeVariantMap: Record<BadgeVariant, string> = {
  neutral: "bg-muted text-muted-foreground",
  brand: "bg-brand-soft text-brand",
  accent: "bg-accent-soft text-accent",
  success:
    "bg-[color-mix(in_srgb,var(--success)_12%,transparent)] text-success",
  warning:
    "bg-[color-mix(in_srgb,var(--warning)_14%,transparent)] text-warning",
  error: "bg-[color-mix(in_srgb,var(--error)_12%,transparent)] text-error",
  outline: "border border-border text-foreground",
};

export function badgeVariants(options?: {
  variant?: BadgeVariant;
  className?: string;
}) {
  const variant = options?.variant ?? "neutral";
  return cn(badgeBase, badgeVariantMap[variant], options?.className);
}
