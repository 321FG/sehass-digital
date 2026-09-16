import { cn } from "@/lib/utils";
import type { VisualVariant } from "@/data/what-we-build";

// TODO: Replace with real product screenshots once verified assets are available.

const VARIANTS: Record<VisualVariant, () => React.ReactNode> = {
  software: SoftwareVisual,
  ai: AIVisual,
  products: ProductsVisual,
  transformation: TransformationVisual,
};

export function CapabilityVisual({
  variant,
  className,
}: {
  variant: VisualVariant;
  className?: string;
}) {
  const Content = VARIANTS[variant];
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-(--shadow-md)",
        "min-h-80 md:min-h-95 lg:min-h-110",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--brand) 1px, transparent 1px), linear-gradient(to bottom, var(--brand) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center p-8 md:p-10">
        <Content />
      </div>
    </div>
  );
}

function ChromeShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        </div>
        <span className="h-1.5 w-16 rounded-full bg-muted" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -right-3 top-6 h-full w-full rounded-2xl border border-border bg-surface" />
      <div className="absolute -right-6 top-12 h-full w-full rounded-2xl border border-border bg-muted" />
      <div className="relative">
        <ChromeShell>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-2.5"
              >
                <span className="h-1 w-2/3 rounded-full bg-brand" />
                <span className="h-1 w-full rounded-full bg-border-strong" />
                <span className="h-1 w-1/2 rounded-full bg-border-strong" />
              </div>
            ))}
          </div>
        </ChromeShell>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="h-auto w-full max-w-md text-foreground"
      role="presentation"
    >
      <defs>
        <pattern id="ai-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="320" height="240" fill="url(#ai-dots)" />
      {[
        [60, 60], [160, 40], [260, 70],
        [80, 140], [180, 130], [260, 160],
        [130, 200], [230, 210],
      ].map(([x, y], i) => (
        <line
          key={`l-${i}`}
          x1={x}
          y1={y}
          x2={160}
          y2={120}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.25"
        />
      ))}
      {[
        [60, 60, 6], [160, 40, 5], [260, 70, 6],
        [80, 140, 5], [260, 160, 5],
        [130, 200, 6], [230, 210, 5],
      ].map(([x, y, r], i) => (
        <circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r={r}
          fill="var(--surface-elevated)"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ))}
      <circle cx="160" cy="120" r="18" fill="var(--brand)" />
      <circle
        cx="160"
        cy="120"
        r="28"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1"
        opacity="0.35"
      />
      <circle
        cx="160"
        cy="120"
        r="42"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  );
}

function ProductsVisual() {
  return (
    <ChromeShell>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="h-2 w-24 rounded-full bg-foreground" />
          <span className="h-4 w-14 rounded-md border border-border" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-3">
            <span className="h-1 w-16 rounded-full bg-muted-foreground/40" />
            <span className="mt-1 h-3 w-full rounded-md bg-brand" />
          </div>
          <div className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-3">
            <span className="h-1 w-16 rounded-full bg-muted-foreground/40" />
            <span className="mt-1 h-3 w-3/4 rounded-md bg-border-strong" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-3">
          <span className="h-1.5 w-24 rounded-full bg-foreground" />
          <span className="mt-1 h-1 w-full rounded-full bg-border-strong" />
          <span className="h-1 w-5/6 rounded-full bg-border-strong" />
          <span className="h-1 w-2/3 rounded-full bg-border-strong" />
        </div>
      </div>
    </ChromeShell>
  );
}

function TransformationVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="h-auto w-full max-w-md text-foreground"
      role="presentation"
    >
      {[
        { x: 30, y: 60, label: "Legacy" },
        { x: 130, y: 30, label: "Modernize" },
        { x: 130, y: 120, label: "Integrate" },
        { x: 230, y: 60, label: "Automate" },
      ].map((box) => (
        <g key={box.label}>
          <rect
            x={box.x}
            y={box.y}
            width="60"
            height="40"
            rx="6"
            fill="var(--surface-elevated)"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <line
            x1={box.x + 8}
            y1={box.y + 12}
            x2={box.x + 40}
            y2={box.y + 12}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <line
            x1={box.x + 8}
            y1={box.y + 22}
            x2={box.x + 32}
            y2={box.y + 22}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <line
            x1={box.x + 8}
            y1={box.y + 32}
            x2={box.x + 44}
            y2={box.y + 32}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </g>
      ))}
      {[
        [90, 80, 130, 50],
        [90, 80, 130, 140],
        [190, 50, 230, 80],
        [190, 140, 230, 80],
      ].map((coords, i) => (
        <line
          key={i}
          x1={coords[0]}
          y1={coords[1]}
          x2={coords[2]}
          y2={coords[3]}
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
          strokeDasharray="3 3"
        />
      ))}
      <g transform="translate(130 180)">
        <rect
          width="160"
          height="40"
          rx="6"
          fill="var(--brand)"
        />
        <text
          x="80"
          y="24"
          textAnchor="middle"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="1.6"
          fill="var(--on-brand)"
        >
          UNIFIED SYSTEM
        </text>
      </g>
      <line
        x1="150"
        y1="160"
        x2="210"
        y2="180"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
