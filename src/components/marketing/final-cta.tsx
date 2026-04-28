import { MarketingButtonLink } from "./marketing-button";
import { ScrollReveal } from "./scroll-reveal";
import { ChapterMark } from "./chapter-mark";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";

export function FinalCta() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);

  return (
    <section
      className="gs-chapter relative overflow-hidden border-t border-gs-border bg-gs-surface px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,36rem)] w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gs-accent/12 blur-3xl dark:bg-gs-accent/16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gs-accent/35 to-transparent"
        aria-hidden
      />
      <ScrollReveal className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex">
          <ChapterMark index="04" title="Get started" />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {(["Pantry", "Expiry dates", "Meals", "Shopping list"] as const).map((label, i) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-gs-border/90 bg-gs-surface/60 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-gs-text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm dark:border-gs-border/60 dark:bg-gs-surface/40"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-gs-accent motion-safe:animate-beam"
                style={{ animationDelay: `${i * 0.35}s` }}
                aria-hidden
              />
              {label}
            </span>
          ))}
        </div>
        <h2
          id="final-cta-heading"
          className="mt-10 font-display text-[clamp(2rem,4.2vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-gs-text-primary"
        >
          Next time, the list comes with you.
        </h2>
        <p className="mt-5 max-w-md mx-auto font-sans text-[16px] leading-relaxed text-gs-text-secondary">
          Your pantry, your grocery list, your meal plan — all in one place,
          always in your pocket. No more guessing in the aisle.
        </p>
        <div className="mt-10">
          <MarketingButtonLink href={appUrl} variant="accent" size="default">
            Join the Beta
          </MarketingButtonLink>
        </div>
      </ScrollReveal>
    </section>
  );
}
