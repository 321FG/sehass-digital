import { cn } from "@/lib/utils";

/**
 * Abstract product-surface visual used in the hero.
 * Pure CSS composition — no stock imagery, no invented content.
 * Renders as a decorative element for sighted users; hidden from AT.
 */
export function InterfaceMock({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-border bg-surface-elevated p-4 shadow-(--shadow-lg)",
        "min-h-95 md:min-h-110 lg:min-h-130",
        className,
      )}
    >
      {/* Faint navy grid backdrop — subtle, no gradient. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--brand) 1px, transparent 1px), linear-gradient(to bottom, var(--brand) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main product panel */}
      <div className="relative flex h-full flex-col rounded-2xl border border-border bg-background">
        {/* Panel chrome */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              sehass / product
            </span>
          </div>
          <span className="h-6 w-6 rounded-md border border-border" />
        </div>

        {/* Panel body — two columns */}
        <div className="grid flex-1 grid-cols-[112px_1fr] gap-0">
          {/* Sidebar */}
          <div className="border-r border-border p-3">
            <ul className="flex flex-col gap-1.5">
              {["Overview", "Systems", "Agents", "Data", "Insights"].map((item, i) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]",
                    i === 1
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      i === 1 ? "bg-brand" : "bg-border-strong",
                    )}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content grid */}
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-tight text-foreground">
                Systems
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Uptime" },
                { label: "Requests" },
                { label: "Latency" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-border bg-surface p-2.5"
                >
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-brand" />
                  </div>
                </div>
              ))}
            </div>

            <ul className="flex flex-1 flex-col gap-1.5">
              {[0, 1, 2, 3, 4].map((row) => (
                <li
                  key={row}
                  className="flex items-center gap-3 rounded-md border border-border bg-surface-elevated px-2.5 py-2"
                >
                  <span className="h-6 w-6 rounded-md border border-border bg-muted" />
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                  <span
                    className={cn(
                      "h-1.5 w-16 rounded-full",
                      row === 1 ? "bg-brand" : "bg-border-strong",
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating "agent" card — bottom-right */}
      <div className="absolute -bottom-4 -right-2 w-52 rounded-xl border border-border bg-brand p-3 text-on-brand shadow-(--shadow-lg) sm:-right-4 md:w-60">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path
                d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-on-brand-muted">
            Agent
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-on-brand">
          Reconciling records across three sources.
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-on-brand/60" />
          <span className="h-1 w-1 rounded-full bg-on-brand/60" />
          <span className="h-1 w-1 rounded-full bg-on-brand/60" />
        </div>
      </div>
    </div>
  );
}
