import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: ContainerSize;
  children?: ReactNode;
};

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export function Container({
  as: Tag = "div",
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = Tag as ElementType;
  return (
    <Component
      className={cn(
        "w-full mx-auto px-6 md:px-8 lg:px-10",
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
