"use client";

import dynamic from "next/dynamic";
import { V2Header } from "@/components/marketing-v2/v2-header";
import { V2Hero } from "@/components/marketing-v2/v2-hero";
import { V2Story } from "@/components/marketing-v2/v2-story";
import {
  V5FallbackAccent,
  V5FallbackDark,
} from "@/components/marketing-v5/v5-route-fallbacks";
import { VfFooter } from "./vf-footer";

const V5ProductSection = dynamic(
  () =>
    import("@/components/marketing-v5/v5-product-section").then((m) => ({
      default: m.V5ProductSection,
    })),
  { loading: () => <V5FallbackAccent /> },
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
        <div id="vf-features" className="scroll-mt-28">
          <V5ProductSection />
        </div>
        <V5FaqSection />
        <V5NewsletterSection />
      </main>
      <VfFooter />
    </>
  );
}
