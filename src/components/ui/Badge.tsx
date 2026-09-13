import type { HTMLAttributes } from "react";
import { badgeVariants, type BadgeVariant } from "@/lib/variants";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ variant, className, ...props }: BadgeProps) {
  return <span className={badgeVariants({ variant, className })} {...props} />;
}
