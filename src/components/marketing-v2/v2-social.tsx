"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  V2_BETA_TESTER_QUOTE,
  V2_SOCIAL_QUOTES,
} from "@/lib/v2-social-proof";

function AnimatedQuote({
  text,
  tag,
  index,
}: {
  text: string;
  tag: string;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      className="group relative flex min-h-[10rem] flex-col overflow-hidden rounded-2xl border border-gs-border/60 bg-gs-background/60 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-gs-accent/40"
      initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: reduceMotion ? 0.2 : 0.8,
        delay: reduceMotion ? 0 : index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gs-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-gs-accent">
        {tag}
      </span>
      <p className="mt-4 flex-1 font-sans text-[15px] leading-snug text-gs-text-primary">
        &ldquo;{text}&rdquo;
      </p>
      <motion.span
        className="mt-4 block h-[2px] w-0 rounded-full bg-gradient-to-r from-gs-accent to-gs-success"
        animate={isInView ? { width: 40 } : { width: 0 }}
        transition={{
          duration: reduceMotion ? 0.15 : 0.6,
          delay: reduceMotion ? 0 : index * 0.15 + 0.5,
        }}
        aria-hidden
      />
    </motion.li>
  );
}

export function V2Social() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteScale = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    reduceMotion ? [1, 1] : [0.6, 1],
  );
  const quoteOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    reduceMotion ? [1, 1] : [0, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-gs-border bg-gs-surface px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="v2-social-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,color-mix(in_srgb,var(--gs-success)_5%,transparent),transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.figure
          ref={quoteRef}
          className="mx-auto max-w-3xl text-center"
          style={{
            scale: quoteScale,
            opacity: quoteOpacity,
          }}
        >
          <motion.span
            className="mb-4 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-gs-text-tertiary"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: reduceMotion ? 0.2 : 0.6 }}
          >
            Real life
          </motion.span>
          <p className="mx-auto max-w-lg font-sans text-[16px] leading-relaxed text-gs-text-secondary">
            <span className="font-semibold text-gs-text-primary">
              Built for real kitchens
            </span>
            — not perfect pantries on Instagram. GrubShelf is for the fuzzy
            memory, the duplicate cans, and the list that stayed on the fridge.
          </p>
          <blockquote className="mt-10">
            <h2
              id="v2-social-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-gs-text-primary"
            >
              <motion.span
                className="text-gs-accent"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={quoteInView ? { opacity: 1 } : {}}
                transition={{ delay: reduceMotion ? 0 : 0.3, duration: reduceMotion ? 0.2 : 0.5 }}
              >
                &ldquo;
              </motion.span>
              You wrote it down. You just didn&apos;t bring it with you.
              <motion.span
                className="text-gs-accent"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={quoteInView ? { opacity: 1 } : {}}
                transition={{ delay: reduceMotion ? 0 : 0.45, duration: reduceMotion ? 0.2 : 0.5 }}
              >
                &rdquo;
              </motion.span>
            </h2>
          </blockquote>
          <motion.figcaption
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-gs-text-tertiary"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={quoteInView ? { opacity: 1 } : {}}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: reduceMotion ? 0.2 : 0.6 }}
          >
            The story GrubShelf fixes
          </motion.figcaption>
        </motion.figure>

        {V2_BETA_TESTER_QUOTE.quote ? (
          <motion.blockquote
            className="mx-auto mt-12 max-w-xl rounded-2xl border border-gs-accent/25 bg-gs-accent/5 px-6 py-5 text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduceMotion ? 0 : 0.6, duration: reduceMotion ? 0.2 : 0.5 }}
          >
            <p className="font-sans text-[15px] leading-relaxed text-gs-text-primary">
              &ldquo;{V2_BETA_TESTER_QUOTE.quote}&rdquo;
            </p>
            <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gs-text-tertiary">
              — {V2_BETA_TESTER_QUOTE.attribution}
            </footer>
          </motion.blockquote>
        ) : null}

        <div className="mt-20">
          <motion.p
            className="mb-8 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gs-text-tertiary"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: reduceMotion ? 0.2 : 0.5 }}
          >
            Moments we&apos;re fixing
          </motion.p>
          <ul className="grid gap-5 sm:grid-cols-3">
            {V2_SOCIAL_QUOTES.map((q, i) => (
              <AnimatedQuote
                key={q.tag}
                text={q.text}
                tag={q.tag}
                index={i}
              />
            ))}
          </ul>
        </div>

        <motion.div
          className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-2"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={quoteInView ? { opacity: 1 } : {}}
          transition={{ delay: reduceMotion ? 0 : 0.9, duration: reduceMotion ? 0.2 : 0.6 }}
        >
          <div className="flex gap-1.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-xl border border-gs-border/80 bg-gs-background/60 text-gs-accent backdrop-blur-sm"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -20 }}
                animate={quoteInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: reduceMotion ? 0 : 1 + i * 0.08,
                  duration: reduceMotion ? 0.15 : 0.5,
                  ...(reduceMotion ? {} : { type: "spring" as const, stiffness: 300 }),
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1.2l1.8 4.1 4.5.4-3.4 2.9 1 4.4L8 11.9l-3.9 2.3 1-4.4-3.4-2.9 4.5-.4L8 1.2z" />
                </svg>
              </motion.span>
            ))}
          </div>
          <span className="ml-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gs-text-tertiary">
            App Store reviews soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
