"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";
import { V5 } from "./v5-tokens";

export function V5CtaSection() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-28"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: V5.primary }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.22, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Plan smarter. Shop better. Waste less.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/50"
        >
          Bring the list back — without the paper, the panic, or the walk of shame past the bakery twice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={appUrl}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-8 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            style={{ backgroundColor: V5.primary }}
          >
            Join the beta
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
