/** Abstract shelf stack — glass, depth, amber spine; matches cinematic hero. */
export function HeroShelfVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[min(100%,380px)] motion-safe:animate-hero-drift"
      aria-hidden
    >
      <div className="absolute inset-[6%] rounded-[2.15rem] bg-gradient-to-b from-gs-accent/8 via-transparent to-gs-success/5 opacity-80 blur-xl" />
      <div className="absolute inset-[8%] rounded-[2rem] bg-gs-surface/45 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-gs-border/45 backdrop-blur-xl dark:bg-gs-surface/22 dark:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-[13%] rounded-[1.7rem] bg-gradient-to-br from-gs-success/18 via-transparent to-gs-accent/12" />
      <div className="absolute left-[18%] right-[14%] top-[26%] h-3 rounded-full bg-gradient-to-r from-gs-text-primary/12 via-gs-text-primary/18 to-gs-text-primary/10 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] ring-1 ring-gs-border/35 dark:from-gs-text-primary/10 dark:via-gs-text-primary/14" />
      <div className="absolute left-[16%] right-[20%] top-[46%] h-3 rounded-full bg-gs-text-primary/9 shadow-inner ring-1 ring-gs-border/35 dark:bg-gs-text-primary/7" />
      <div className="absolute left-[20%] right-[16%] top-[66%] h-3 rounded-full bg-gs-text-primary/7 shadow-inner ring-1 ring-gs-border/28 dark:bg-gs-text-primary/6" />
      <div className="absolute -right-[1%] top-[20%] h-[66%] w-[2px] rounded-full bg-gradient-to-b from-gs-accent via-gs-accent/50 to-transparent opacity-90 shadow-[0_0_24px_rgba(232,160,32,0.25)]" />
      <div className="absolute left-[22%] top-[18%] flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-gs-accent/25 to-gs-accent/10 font-mono text-xs font-bold text-gs-accent shadow-[0_12px_28px_-12px_rgba(232,160,32,0.45)] ring-1 ring-gs-accent/30">
        12
      </div>
      <div className="absolute right-[19%] top-[37%] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gs-success/22 to-gs-success/8 font-mono text-[10px] font-bold text-gs-success ring-1 ring-gs-success/25">
        3
      </div>
      <div className="absolute left-[28%] top-[55%] h-10 w-16 rounded-lg bg-gs-surface-secondary/55 shadow-inner ring-1 ring-gs-border/45 dark:bg-gs-surface-secondary/32" />
      <div className="pointer-events-none absolute -inset-[18%] rounded-[3rem] bg-[radial-gradient(ellipse_at_50%_0%,var(--gs-accent)_0%,transparent_58%)] opacity-[0.12]" />
    </div>
  );
}
