"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { V2Header } from "@/components/marketing-v2/v2-header";
import { V2Hero } from "@/components/marketing-v2/v2-hero";
import { V2Social } from "@/components/marketing-v2/v2-social";
import { V2Story } from "@/components/marketing-v2/v2-story";
import {
  V5FallbackAccent,
  V5FallbackDark,
  V5FallbackWhite,
} from "@/components/marketing-v5/v5-route-fallbacks";
import { V5 } from "@/components/marketing-v5/v5-tokens";
import { getFooterLegalLinks } from "@/lib/marketing-nav";

const V5StorySection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-story-section").then((m) => ({
      default: m.V5StorySection,
    })),
  { loading: () => <V5FallbackAccent /> },
);

const V5SolutionSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-solution-section").then((m) => ({
      default: m.V5SolutionSection,
    })),
  { loading: () => <V5FallbackWhite /> },
);

const V5ProductSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-product-section").then((m) => ({
      default: m.V5ProductSection,
    })),
  { loading: () => <V5FallbackAccent /> },
);

const V5ReliefSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-relief-section").then((m) => ({
      default: m.V5ReliefSection,
    })),
  { loading: () => <V5FallbackDark /> },
);

const V5NewsletterSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-newsletter-section").then((m) => ({
      default: m.V5NewsletterSection,
    })),
  { loading: () => <V5FallbackDark /> },
);

const V5FaqSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-faq-section").then((m) => ({
      default: m.V5FaqSection,
    })),
  { loading: () => <V5FallbackDark /> },
);


export default function VfPageClient() {
  return (
    <>
      <V2Header
        homeHref="/"
        featuresHref="/#vf-features"
        faqHref="/#v5-faq"
      />
      <main id="vf-main" className="overflow-x-hidden">
        <V2Hero />
        <V2Story />
        <V5StorySection />
        <V5SolutionSection />
        <div id="vf-features" className="scroll-mt-28">
          <V5ProductSection />
        </div>
        <V5ReliefSection />
        <V2Social />
        <V5FaqSection />
        <V5NewsletterSection />
      </main>
      <footer
        className="border-t border-white/10 px-6 py-8 text-center"
        style={{ backgroundColor: V5.secondary }}
      >
        <p className="font-sans text-xs text-white/40">
          Grub Shelf — a quieter way through the store.
        </p>
        <nav
          className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
          aria-label="Legal"
        >
          {getFooterLegalLinks().map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs font-medium text-white/45 underline-offset-4 hover:text-white/70 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  );
}
