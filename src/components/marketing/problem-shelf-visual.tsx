/** Decorative shelf stack for the problem chapter — motion respects reduced motion via CSS. */
export function ProblemShelfVisual() {
  const shelves = [
    { jars: [0, 1, 2] as const },
    { jars: [0, 1] as const },
    { jars: [0, 1, 2, 3] as const },
  ] as const;

  return (
    <div
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:mx-0 lg:max-w-[300px]"
      aria-hidden
    >
      <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--gs-accent)_14%,transparent),transparent_55%)] opacity-80 dark:opacity-90" />
      <div className="pointer-events-none absolute -right-4 bottom-0 top-1/4 w-px bg-gradient-to-b from-gs-accent/50 via-gs-accent/20 to-transparent" />
      <div className="relative rounded-2xl border border-gs-border/70 bg-gs-surface/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm dark:border-gs-border-secondary/40 dark:bg-gs-surface/30">
        <p className="mb-5 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-gs-text-tertiary">
          Shelf sketch
        </p>
        {shelves.map((row, si) => (
          <div key={si} className="mb-5 last:mb-0">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-gs-border/50 via-gs-text-primary/20 to-gs-border/50 dark:from-gs-border-secondary/50 dark:via-gs-success/25 dark:to-gs-border-secondary/40" />
            <div className="mt-3 flex min-h-[3rem] flex-wrap content-end items-end justify-center gap-2.5">
              {row.jars.map((j) => (
                <span
                  key={j}
                  className={`rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-gs-border/60 motion-safe:animate-shelf-pulse dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-gs-border-secondary/50 ${
                    (si + j) % 3 === 0
                      ? "h-11 w-9 bg-gradient-to-b from-gs-accent/45 to-gs-accent/20"
                      : (si + j) % 3 === 1
                        ? "h-9 w-11 bg-gradient-to-b from-gs-success/35 to-gs-success/15"
                        : "h-10 w-8 bg-gradient-to-b from-gs-surface-secondary to-gs-border/30 dark:from-white/[0.08] dark:to-white/[0.03]"
                  }`}
                  style={{
                    animationDelay: `${(si * 4 + j) * 0.35}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="mt-5 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="h-1 w-1 rounded-full bg-gs-text-tertiary/35 motion-safe:animate-beam"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
