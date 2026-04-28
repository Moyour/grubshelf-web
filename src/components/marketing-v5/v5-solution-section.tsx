"use client";

import { motion } from "framer-motion";
import { ClipboardList, Eye, TrendingDown } from "lucide-react";
import { V5 } from "./v5-tokens";

const pillars = [
  {
    icon: Eye,
    title: "See what you have",
    desc: "Your pantry, with expiry dates that actually mean something. No more mystery containers.",
  },
  {
    icon: ClipboardList,
    title: "Carry the list",
    desc: "One shared list that lives in your pocket — not on the fridge, not in a note you can't find.",
  },
  {
    icon: TrendingDown,
    title: "Spot the waste",
    desc: "Simple spend tracking that shows the pattern. Enough to change the habit, not enough to stress you out.",
  },
] as const;

export function V5SolutionSection() {
  return (
    <section
      className="relative flex min-h-[85dvh] flex-col items-center justify-center px-6 py-24"
      style={{ backgroundColor: "#ffffff", color: V5.secondary }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 h-1 w-16 origin-center rounded-full"
          style={{ backgroundColor: V5.primary }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-sans text-4xl font-bold tracking-tight md:text-6xl"
        >
          So we built something better.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-black/50"
        >
          One calm place for what you have, what you need, and what it actually costs — so the store stops
          eating your attention.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-black/[0.06] bg-black/[0.02] p-6 text-left md:p-8"
            >
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: V5.primary }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-sans text-base font-semibold tracking-tight text-black md:text-lg">
                {p.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-black/50">
                {p.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
