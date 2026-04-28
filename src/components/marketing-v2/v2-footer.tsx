"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { GrubShelfLogoLockup } from "@/components/brand/grubshelf-logo-lockup";
import { getFooterLegalLinks } from "@/lib/marketing-nav";

export function V2Footer() {
  const links = getFooterLegalLinks();
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      ref={ref}
      className="relative border-t border-gs-border bg-gs-surface px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20"
    >
      <motion.div
        className="mx-auto mb-12 h-px max-w-7xl overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-gs-accent via-gs-success to-transparent" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <GrubShelfLogoLockup href="/" size="footer" />
          <p className="mt-5 max-w-sm font-sans text-lg leading-snug text-gs-text-secondary">
            Your grocery list, always in your pocket.{" "}
            <span className="text-gs-text-tertiary">
              No more guessing at the store.
            </span>
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between gap-10 lg:items-end lg:text-right"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end"
            aria-label="Legal"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-gs-text-secondary underline-offset-[6px] transition hover:text-gs-brand-primary hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gs-text-tertiary">
            &copy; {year} GrubShelf
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
