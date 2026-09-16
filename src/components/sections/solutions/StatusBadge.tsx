import { cn } from "@/lib/utils";
import type { SolutionStatus } from "@/data/solutions";

const toneMap: Record<SolutionStatus, { dot: string; text: string; ring: string }> = {
  live: {
    dot: "bg-success",
    text: "text-success",
    ring: "border-success/30 bg-success/8",
  },
  active: {
    dot: "bg-success",
    text: "text-success",
    ring: "border-success/30 bg-success/8",
  },
  "in-progress": {
    dot: "bg-warning",
    text: "text-warning",
    ring: "border-warning/30 bg-warning/8",
  },
};

export function StatusBadge({
  status,
  label,
  className,
}: {
  status: SolutionStatus;
  label: string;
  className?: string;
}) {
  const tone = toneMap[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        tone.ring,
        tone.text,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone.dot,
          status === "in-progress" ? "" : "animate-pulse",
        )}
      />
      {label}
    </span>
  );
}
