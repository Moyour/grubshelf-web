"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { V5 } from "./v5-tokens";

const FAQ_ITEMS = [
  {
    q: "How do I join the beta?",
    a: "Tap 'Try the Beta' anywhere on this page — it opens TestFlight on your iPhone or iPad. Install the app, and you're in. No waitlist.",
  },
  {
    q: "Is my data private?",
    a: "Your pantry, lists, and spending stay on your device and in your private cloud sync. We don't sell data, show ads, or share your grocery habits with anyone.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. We're focused on getting the iPhone & iPad experience right first. Android is on the roadmap — join the beta and we'll keep you posted.",
  },
  {
    q: "Does it cost anything?",
    a: "The beta is free. We'll share pricing details before any paid features launch — no surprises.",
  },
] as const;

export function V5FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="v5-faq"
      className="scroll-mt-20 px-6 py-24 md:py-28"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.28em] text-white/40"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center font-sans text-3xl font-bold tracking-tight md:text-4xl"
        >
          Quick answers
        </motion.h2>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm font-semibold text-white/85 md:text-base">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-lg text-white/40"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 font-sans text-sm leading-relaxed text-white/50">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
