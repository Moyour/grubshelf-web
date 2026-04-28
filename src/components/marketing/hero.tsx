import { MarketingButtonLink } from "./marketing-button";
import { HeroShelfVisual } from "./hero-shelf-visual";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";

export function Hero() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);

  return (
    <section
      className="gs-hero-mesh gs-cinematic-hero relative overflow-hidden border-b border-gs-border"
      aria-labelledby="hero-heading"
    >
      <div className="gs-grain z-[1]" />
      {/* Single spotlight — night-kitchen mood */}
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] z-0 h-[min(120vw,52rem)] w-[min(140vw,64rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--gs-accent)_22%,transparent),transparent_100%)] opacity-90 dark:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(100vw,48rem)] w-[min(120vw,56rem)] -translate-x-1/2 -translate-y-[45%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--gs-brand-primary-bg)_35%,transparent),transparent_70%)] opacity-40 dark:opacity-55"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-center px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:flex-row lg:items-start lg:gap-16 lg:pt-14">
        <div className="min-w-0 flex-1 text-center lg:max-w-[54%] lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gs-accent/40 bg-gs-accent/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-gs-accent backdrop-blur-sm dark:border-gs-accent/30 dark:bg-gs-accent/8">
            <span className="h-1.5 w-1.5 rounded-full bg-gs-accent shadow-[0_0_10px_rgba(232,160,32,0.5)] motion-safe:animate-beam" />
            Beta now open — try it on TestFlight
          </p>
          <h1
            id="hero-heading"
            className="mt-8 font-display text-[clamp(2.65rem,6.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-gs-text-primary"
          >
            The list on the fridge
            <br className="hidden sm:block" />
            <span className="text-gs-text-secondary sm:pl-1">should follow you to the store.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-md font-sans text-[17px] leading-[1.7] text-gs-text-secondary lg:mx-0 lg:max-w-lg">
            You wrote everything down. Then you walked out without it.
            GrubShelf keeps your pantry, your list, and your meals in your
            pocket — so you never stand in the aisle guessing again.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <MarketingButtonLink href={appUrl} variant="accent" size="default">
              Try the Beta
            </MarketingButtonLink>
            <MarketingButtonLink
              href="/#chapter-problem"
              variant="secondary"
              size="default"
            >
              See the story
            </MarketingButtonLink>
          </div>
        </div>

        <div className="relative mt-16 flex min-w-0 flex-1 justify-center lg:mt-0 lg:justify-end lg:pt-6">
          <div className="relative w-full max-w-md">
            <HeroShelfVisual />
            <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-gs-text-tertiary lg:text-right">
              Concept preview
            </p>
          </div>
        </div>
      </div>

      <div className="gs-glow-line relative z-[2]" aria-hidden />
    </section>
  );
}
