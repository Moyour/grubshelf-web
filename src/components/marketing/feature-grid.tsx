import { FeatureCard } from "./feature-card";
import { ChapterMark } from "./chapter-mark";
import { ScrollReveal } from "./scroll-reveal";

const features = [
  {
    title: "Your pantry",
    body: "See everything you have at home — even when you're not there.",
    visualId: "pantry" as const,
  },
  {
    title: "Expiry dates",
    body: "Get a nudge before things go bad, not after.",
    visualId: "expiry" as const,
  },
  {
    title: "Meal planning",
    body: "Pick what you're cooking this week. The ingredients sort themselves out.",
    visualId: "meals" as const,
  },
  {
    title: "Shopping list",
    body: "Always in your pocket. Built from your meals or written from scratch — your call.",
    visualId: "shop" as const,
  },
] as const;

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="gs-chapter gs-section-atmosphere relative border-b border-gs-border px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gs-border to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-10">
          {/* No transform-based reveal on sticky parent — would break position:sticky */}
          <div className="min-w-0 lg:col-span-4 lg:row-span-2 lg:pt-4">
            <div className="lg:sticky lg:top-28 lg:max-w-sm">
              <ChapterMark index="02" title="The fix" />
              <h2
                id="features-heading"
                className="mt-8 font-display text-[clamp(1.95rem,3.8vw,2.95rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-gs-text-primary"
              >
                One app for everything between the fridge and the store.
              </h2>
              <p className="mt-5 font-sans text-[16px] leading-relaxed text-gs-text-secondary">
                Four things GrubShelf does so you never have to guess again.
              </p>
            </div>
          </div>

          <ScrollReveal className="mt-14 min-w-0 space-y-5 sm:space-y-6 lg:col-span-8 lg:mt-0">
            <FeatureCard
              step="I"
              title={features[0].title}
              visualId={features[0].visualId}
              className="lg:min-h-[300px]"
            >
              {features[0].body}
            </FeatureCard>
            <div className="grid gap-5 sm:grid-cols-2 sm:items-stretch sm:gap-6">
              <FeatureCard
                step="II"
                title={features[1].title}
                visualId={features[1].visualId}
                className="h-full"
              >
                {features[1].body}
              </FeatureCard>
              <FeatureCard
                step="III"
                title={features[2].title}
                visualId={features[2].visualId}
                className="h-full"
              >
                {features[2].body}
              </FeatureCard>
            </div>
            <FeatureCard step="IV" title={features[3].title} visualId={features[3].visualId}>
              {features[3].body}
            </FeatureCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
