"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useId, useRef, useState, type ReactNode } from "react";

type FaqItem = { q: string; a: ReactNode };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How do I join the beta?",
    a: "Install Apple TestFlight on your iPhone or iPad, then open the invite link from our site. You will accept the beta and install GrubShelf like any other app.",
  },
  {
    q: "Is my data private?",
    a: (
      <>
        We take privacy seriously. Read how we handle data in our{" "}
        <Link
          href="/privacy"
          className="font-medium text-gs-accent underline-offset-2 hover:underline"
        >
          Privacy
        </Link>{" "}
        page — and reach out if something is unclear.
      </>
    ),
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. The beta is iOS (TestFlight) only for now. We are focused on getting the core experience right first.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function V2Faq() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      ref={ref}
      id="v2-faq"
      className="scroll-mt-28 border-b border-gs-border bg-gs-background px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby={`${baseId}-faq-heading`}
    >
      <motion.div
        className="mx-auto max-w-2xl"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: reduceMotion ? 0.2 : 0.7, ease }}
      >
        <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-gs-text-tertiary">
          Questions
        </p>
        <h2
          id={`${baseId}-faq-heading`}
          className="mt-3 text-center font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em] text-gs-text-primary"
        >
          Before you install
        </h2>
        <dl className="mt-10 divide-y divide-gs-border/80 rounded-2xl border border-gs-border/80 bg-gs-surface/40">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;
            return (
              <div key={item.q} className="px-4 py-1 sm:px-6">
                <dt>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left font-sans text-[15px] font-semibold text-gs-text-primary transition hover:text-gs-brand-primary"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span
                      className="font-mono text-lg leading-none text-gs-accent tabular-nums"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={
                    isOpen
                      ? "block pb-5 font-sans text-[15px] leading-relaxed text-gs-text-secondary"
                      : "hidden"
                  }
                >
                  {item.a}
                </dd>
              </div>
            );
          })}
        </dl>
      </motion.div>
    </section>
  );
}
