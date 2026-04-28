"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GrubShelfLogoLockup } from "@/components/brand/grubshelf-logo-lockup";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";
import { V5 } from "./v5-tokens";

const NAV_ITEMS = [
  { href: "#v5-problem", label: "The problem" },
  { href: "#v5-demos", label: "Product" },
  { href: "#v5-faq", label: "FAQ" },
] as const;

export function V5Header() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[200] transition-colors duration-300 ${
        scrolled ? "bg-[#04342c]/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16">
        <GrubShelfLogoLockup
          href="/"
          size="header"
          priority
          className="text-white/90 [&_.gs-wordmark]:text-white/90"
        />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-white/50 transition hover:text-white/80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href={appUrl}
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-sans text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: V5.primary }}
        >
          Join beta
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </motion.header>
  );
}
