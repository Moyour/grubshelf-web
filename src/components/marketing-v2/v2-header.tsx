"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GrubShelfLogoLockup } from "@/components/brand/grubshelf-logo-lockup";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";
import { ThemeToggle } from "@/components/marketing/theme-toggle";

export type V2HeaderProps = {
  /** Logo target (default home `/`). */
  homeHref?: string;
  /** “Features” nav link (default `/#v2-features`). */
  featuresHref?: string;
  /** “FAQ” nav link (default `/#v2-faq`). */
  faqHref?: string;
};

export function V2Header({
  homeHref = "/",
  featuresHref = "/#v2-features",
  faqHref = "/#v2-faq",
}: V2HeaderProps = {}) {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-gs-border/40 bg-gs-background/70 backdrop-blur-2xl"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6">
        <GrubShelfLogoLockup
          href={homeHref}
          size="header"
          pulse
          priority
        />
        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-5 sm:gap-8"
          aria-label="Primary"
        >
          <Link
            href={featuresHref}
            className="relative font-sans text-[11px] font-medium tracking-wide text-gs-text-secondary transition hover:text-gs-text-primary sm:text-sm"
          >
            Features
          </Link>
          <Link
            href={faqHref}
            className="relative font-sans text-[11px] font-medium tracking-wide text-gs-text-secondary transition hover:text-gs-text-primary sm:text-sm"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gs-accent px-5 py-2.5 font-sans text-[13px] font-semibold text-gs-accent-text shadow-[0_0_20px_rgba(232,160,32,0.2)] transition-all hover:shadow-[0_0_30px_rgba(232,160,32,0.35)]"
          >
            Try the Beta
          </a>
        </div>
      </div>
    </motion.header>
  );
}
