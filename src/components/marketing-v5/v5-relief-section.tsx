"use client";

import { motion } from "framer-motion";
import { V5 } from "./v5-tokens";

const lines = [
  "No more guessing.",
  "No more waste.",
  "No more forgotten lists.",
] as const;

export function V5ReliefSection() {
  return (
    <section
      className="flex min-h-[85dvh] flex-col items-center justify-center px-6 py-24"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-white/35">
        The exhale
      </p>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center md:gap-8">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: 0.85,
              delay: i * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-sans text-2xl font-semibold tracking-tight text-white/90 md:text-4xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-14 h-px w-40 origin-center bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
    </section>
  );
}
