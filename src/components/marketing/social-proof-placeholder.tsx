import { ChapterMark } from "./chapter-mark";
import { ScrollReveal } from "./scroll-reveal";

const ECHO_LINES = [
  {
    line: "I already had three cans of chickpeas. Bought two more anyway.",
    tag: "Sound familiar?",
  },
  {
    line: "Wrote the list on the fridge. Left the house without taking a photo.",
    tag: "Every single week",
  },
  {
    line: "The yogurt expired two days ago. I didn't even know it was in there.",
    tag: "Happens to everyone",
  },
] as const;

function StarRow() {
  return (
    <div
      className="flex justify-center gap-1.5 sm:justify-start"
      aria-hidden
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="grid h-8 w-8 place-items-center rounded-lg border border-gs-border/80 bg-gs-surface/50 text-gs-accent motion-safe:animate-beam dark:bg-gs-surface/30"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-gs-accent opacity-90"
          >
            <path
              d="M8 1.2l1.8 4.1 4.5.4-3.4 2.9 1 4.4L8 11.9l-3.9 2.3 1-4.4-3.4-2.9 4.5-.4L8 1.2z"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function SocialProofPlaceholder() {
  return (
    <section
      className="gs-chapter gs-section-surface-wash relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="proof-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,36rem)] w-[min(100vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gs-success/5 blur-3xl dark:bg-gs-success/10"
        aria-hidden
      />
      <ScrollReveal className="relative mx-auto max-w-4xl">
        <ChapterMark index="03" title="Real life" />
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="min-w-0 max-w-xl">
            <h2
              id="proof-heading"
              className="font-display text-[clamp(1.85rem,3.6vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gs-text-primary"
            >
              Everyone has a version of this story.
            </h2>
            <p className="mt-6 font-sans text-[16px] leading-relaxed text-gs-text-secondary">
              Real reviews will live here once the app launches. For now,
              these are the moments GrubShelf is built for.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-4 self-start rounded-2xl border border-gs-border/80 bg-gs-surface/60 px-8 py-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md dark:border-gs-border-secondary/45 dark:bg-gs-surface/45 sm:px-10 lg:max-w-[280px]">
            <StarRow />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-gs-text-tertiary">
              Coming soon to the App Store
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-gs-border/70 pt-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gs-text-tertiary">
            Moments we&apos;re fixing
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:items-stretch">
            {ECHO_LINES.map((echo, i) => (
              <li
                key={echo.tag}
                className="flex h-full min-h-[8.5rem] flex-col rounded-card border border-gs-border/80 bg-gs-surface/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-gs-accent/35 dark:border-gs-border-secondary/40 dark:bg-gs-surface/35"
              >
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-gs-accent">
                  {echo.tag}
                </p>
                <p className="mt-3 flex-1 font-sans text-[14px] leading-snug text-gs-text-primary">
                  &ldquo;{echo.line}&rdquo;
                </p>
                <span
                  className="mt-auto block h-0.5 w-10 rounded-full bg-gradient-to-r from-gs-accent/70 to-transparent motion-safe:animate-shelf-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </div>

        <figure className="mt-14 border-t border-gs-border/70 pt-12">
          <blockquote className="font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-snug tracking-tight text-gs-text-primary">
            <span className="text-gs-accent/90">&ldquo;</span>
            You wrote it down. You just didn&apos;t bring it with you.
            <span className="text-gs-accent/90">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-gs-text-tertiary">
            The story GrubShelf fixes
          </figcaption>
        </figure>
      </ScrollReveal>
    </section>
  );
}
