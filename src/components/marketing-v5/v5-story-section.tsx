"use client";

import { motion } from "framer-motion";
import { V5 } from "./v5-tokens";

export function V5StorySection() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ backgroundColor: V5.accent, color: V5.secondary }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-[#4CAF50]/10 blur-3xl"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-black/40"
          >
            Before the app
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            It started simple.
            <br />
            <span className="text-black/45">A weekly plan. A list on the fridge.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-md text-pretty text-base leading-relaxed text-black/55 md:text-lg"
          >
            Ink crossed out until you can’t tell milk from oat. The slip slides until one corner stays
            under the magnet and the rest hangs loose. You still add lines—but you don’t read them on
            your way out the door.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 24 }}
          whileInView={{ opacity: 1, rotate: -1.2, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-3 rounded-sm bg-black/[0.04] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]"
            aria-hidden
          />
          <div
            className="relative rotate-1 rounded-sm border border-black/10 bg-[#fffef8] p-8 shadow-lg"
            style={{ boxShadow: "2px 3px 0 rgba(0,0,0,0.06)" }}
          >
            <p className="font-handwriting text-2xl leading-snug text-black/80 md:text-3xl">
              eggs
              <br />
              oat milk
              <br />
              ??? something green
              <br />
              <span className="text-black/35">(call mom)</span>
            </p>
            <motion.div
              aria-hidden
              className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
            />
            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-black/35">
              Tuesday — probably
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
