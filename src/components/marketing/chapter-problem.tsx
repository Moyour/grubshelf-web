import { ScrollReveal } from "./scroll-reveal";
import { ChapterMark } from "./chapter-mark";
import { ProblemShelfVisual } from "./problem-shelf-visual";

export function ChapterProblem() {
  return (
    <section
      id="chapter-problem"
      className="gs-chapter gs-section-atmosphere relative border-b border-gs-border px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="chapter-problem-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_100%,color-mix(in_srgb,var(--gs-brand-primary-bg)_14%,transparent),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,color-mix(in_srgb,var(--gs-teal-mid)_28%,transparent),transparent_58%)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-gs-accent/5 blur-3xl dark:bg-gs-accent/10" />
      <ScrollReveal className="relative mx-auto max-w-5xl">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_min(300px,34%)] lg:gap-x-12 lg:gap-y-10">
          <div className="min-w-0">
            <ChapterMark index="01" title="The problem" />
            <h2
              id="chapter-problem-heading"
              className="mt-8 max-w-[22ch] font-display text-[clamp(2.15rem,4.8vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-gs-text-primary"
            >
              The list was perfect.{" "}
              <span className="text-gs-text-secondary">
                It just never made it to the store.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl font-sans text-[17px] leading-[1.65] text-gs-text-secondary">
              You know what you need when you&apos;re standing in the kitchen.
              The trouble is remembering it twenty minutes later, under
              fluorescent lights, staring at a wall of options.
              GrubShelf puts your kitchen knowledge in your pocket.
            </p>
            <dl className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {(
                [
                  ["See", "What you have", "Know what's in your pantry before you leave the house."],
                  ["Remember", "What you need", "Your grocery list, always with you — no photo required."],
                  [
                    "Plan",
                    "What you'll cook",
                    "Pick meals for the week and the ingredients fill themselves in.",
                  ],
                ] as const
              ).map(([dt, dd, sub]) => (
                <div
                  key={dt}
                  className="rounded-card border border-gs-border/90 bg-gs-surface/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-300 hover:border-gs-border-secondary dark:border-gs-border/70 dark:bg-gs-surface/35"
                >
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-gs-text-tertiary">
                    {dt}
                  </dt>
                  <dd className="mt-3 font-display text-lg font-semibold tracking-tight text-gs-text-primary">
                    {dd}
                  </dd>
                  <p className="mt-2 font-sans text-[13px] leading-snug text-gs-text-secondary">
                    {sub}
                  </p>
                </div>
              ))}
            </dl>
            <p className="mt-12 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.38em] text-gs-text-tertiary">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gs-border/80 text-[11px] motion-safe:animate-hero-drift">
                ↓
              </span>
              Here&apos;s how it works
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-end lg:pt-2">
            <ProblemShelfVisual />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
