import type { FeatureVisualId } from "./feature-types";

export function FeatureVisual({ id }: { id: FeatureVisualId }) {
  switch (id) {
    case "pantry":
      return (
        <div className="relative flex h-full min-h-[152px] w-full max-w-md flex-col justify-center gap-3 px-6 py-6" aria-hidden>
          <div className="h-2 w-full rounded-full bg-gs-brand-primary-bg/85 shadow-md motion-safe:animate-shelf-pulse dark:bg-gs-success/35" />
          <div className="flex gap-2">
            <span className="h-10 w-10 rounded-lg bg-gs-accent/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-gs-accent/50 motion-safe:animate-shelf-pulse dark:bg-gs-accent/25" style={{ animationDelay: "0.4s" }} />
            <span className="h-10 min-w-0 flex-1 rounded-lg bg-gs-surface-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-gs-border motion-safe:animate-shelf-pulse dark:bg-white/[0.07] dark:ring-gs-border-secondary/50" style={{ animationDelay: "0.9s" }} />
          </div>
          <div className="h-2 w-full rounded-full bg-gs-text-primary/12 ring-1 ring-gs-border/60 motion-safe:animate-shelf-pulse dark:bg-white/[0.06] dark:ring-gs-border-secondary/40" style={{ animationDelay: "0.2s" }} />
          <div className="flex gap-2">
            <span className="h-8 min-w-0 flex-1 rounded-md bg-gs-success/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-gs-success/35 motion-safe:animate-shelf-pulse dark:bg-gs-success/18" style={{ animationDelay: "0.6s" }} />
            <span className="h-8 w-16 shrink-0 rounded-md bg-gs-text-primary/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-gs-border/55 motion-safe:animate-shelf-pulse dark:bg-white/[0.06] dark:ring-gs-border-secondary/45" style={{ animationDelay: "1.1s" }} />
          </div>
        </div>
      );
    case "expiry":
      return (
        <div className="relative flex min-h-[152px] w-full items-center justify-center px-6 py-6" aria-hidden>
          <div
            className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full bg-gs-surface-secondary shadow-inner ring-1 ring-gs-border dark:bg-gs-surface-secondary/40 dark:ring-gs-border-secondary/50"
            style={{
              background: `conic-gradient(var(--gs-accent) 72deg, var(--gs-border) 72deg)`,
            }}
          >
            <div className="flex h-[76%] w-[76%] flex-col items-center justify-center rounded-full bg-gs-surface shadow-sm ring-1 ring-gs-border dark:bg-gs-surface/85 dark:ring-gs-border-secondary/40">
              <span className="font-mono text-lg font-bold tabular-nums text-gs-accent motion-safe:animate-shelf-pulse">7</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-gs-text-tertiary">
                days
              </span>
            </div>
          </div>
        </div>
      );
    case "meals":
      return (
        <div className="grid min-h-[152px] w-full max-w-[280px] grid-cols-7 gap-1.5 px-5 py-6" aria-hidden>
          {Array.from({ length: 21 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-md ${
                i % 5 === 0
                  ? "bg-gs-accent/40 ring-1 ring-gs-accent/55 motion-safe:animate-shelf-pulse dark:bg-gs-accent/30"
                  : i % 3 === 0
                    ? "bg-gs-success/25 ring-1 ring-gs-success/35 motion-safe:animate-shelf-pulse dark:bg-gs-success/22"
                    : "bg-gs-text-primary/[0.07] ring-1 ring-gs-border/45 dark:bg-white/[0.07] dark:ring-gs-border-secondary/35"
              }`}
              style={
                i % 5 === 0 || i % 3 === 0
                  ? { animationDelay: `${(i % 7) * 0.15}s` }
                  : undefined
              }
            />
          ))}
        </div>
      );
    case "shop":
      return (
        <div className="flex min-h-[152px] w-full max-w-sm flex-col justify-center gap-3.5 px-8 py-6" aria-hidden>
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-3">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded border ${
                  row < 2
                    ? "border-gs-success bg-gs-success/18 text-gs-success dark:bg-gs-success/12"
                    : "border-dashed border-gs-border-secondary bg-gs-surface-secondary/30 dark:border-gs-border-secondary/60 dark:bg-white/[0.04]"
                }`}
              >
                {row < 2 ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 6l2.5 2.5L9.5 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="h-0.5 w-2.5 rounded-full bg-gs-text-tertiary/50 dark:bg-gs-text-tertiary/40" />
                )}
              </span>
              <span
                className={`h-2 min-w-0 flex-1 rounded-full ${
                  row < 2
                    ? "bg-gs-text-primary/12 dark:bg-white/10"
                    : "bg-gs-text-primary/18 dark:bg-white/14"
                }`}
              />
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}
