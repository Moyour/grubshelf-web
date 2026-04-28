"use client";

/** Shell while the fridge story chunk (framer-motion) loads. Client-only so deferred loaders can import it. */
export function FridgeListStorySkeleton() {
  return (
    <section
      className="gs-chapter gs-section-atmosphere border-b border-gs-border px-4 py-24 sm:px-6 sm:py-32"
      aria-busy="true"
      aria-label="Loading story section"
    >
      <h2 className="sr-only">Loading fridge list story</h2>
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
        <div className="animate-pulse space-y-4">
          <div className="h-3 w-28 rounded bg-gs-border/70" />
          <div className="h-8 w-full max-w-md rounded-lg bg-gs-border/50" />
          <div className="h-4 w-full max-w-sm rounded bg-gs-border/40" />
          <div className="h-4 w-[90%] max-w-sm rounded bg-gs-border/35" />
          <div className="flex flex-wrap gap-2 pt-4">
            <div className="h-8 w-20 rounded-full bg-gs-border/60" />
            <div className="h-8 w-24 rounded-full bg-gs-border/45" />
            <div className="h-8 w-[4.5rem] rounded-full bg-gs-border/45" />
          </div>
        </div>
        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-gs-border/60 bg-gs-surface-secondary/25 ring-1 ring-gs-border/40 dark:border-gs-border-secondary/40 dark:bg-gs-surface/20 sm:max-w-[320px]"
          aria-hidden
        >
          <div className="absolute left-6 right-6 top-10 h-px bg-gradient-to-r from-transparent via-gs-accent/30 to-transparent" />
          <div className="absolute left-6 top-16 space-y-3">
            <div className="h-2 w-32 rounded-full bg-gs-border/50 dark:bg-gs-border-secondary/35" />
            <div className="h-2 w-40 rounded-full bg-gs-border/40 dark:bg-gs-border-secondary/30" />
            <div className="h-2 w-28 rounded-full bg-gs-border/35 dark:bg-gs-border-secondary/25" />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-gs-text-tertiary">
            Loading scene…
          </p>
        </div>
      </div>
    </section>
  );
}
