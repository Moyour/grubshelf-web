"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";

const RINGS = [
  { size: 180, delay: 0, duration: 3 },
  { size: 280, delay: 0.5, duration: 3.5 },
  { size: 400, delay: 1, duration: 4 },
  { size: 540, delay: 1.5, duration: 4.5 },
];

const COMPLETED_ITEMS = [
  "Eggs",
  "Milk",
  "Chicken",
  "Rice",
  "Olive oil",
] as const;

function CompletedListVisual({
  isInView,
  reduceMotion,
}: {
  isInView: boolean;
  reduceMotion: boolean | null;
}) {
  const noMotion = reduceMotion ?? false;
  return (
    <div
      className="relative mx-auto w-full max-w-[320px] pt-2 sm:max-w-[340px] sm:pt-0 lg:mr-0 lg:pr-6"
      aria-hidden
    >
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(ellipse at 45% 25%, color-mix(in srgb, var(--gs-success) 14%, transparent), transparent 60%)",
        }}
        initial={false}
        animate={
          isInView && !noMotion
            ? { opacity: [0.35, 0.65, 0.45] }
            : { opacity: 0.45 }
        }
        transition={{ duration: 4, repeat: noMotion ? 0 : Infinity, ease: "easeInOut" }}
      />

      {/* Phone-style frame — list that actually made it to the store */}
      <motion.div
        className="relative rounded-[1.75rem] border border-gs-border/60 bg-gs-surface/80 p-2.5 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.45)] backdrop-blur-lg sm:p-3"
        initial={noMotion ? false : { opacity: 0, y: 28, rotate: -2 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
        transition={{
          duration: noMotion ? 0.2 : 0.85,
          delay: noMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mx-auto mt-1 h-1.5 w-12 shrink-0 rounded-full bg-gs-text-primary/10" />
        <motion.div
          className="mx-auto mt-3 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-gs-success/45 bg-gs-success/12 pt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:h-[3.75rem] sm:w-[3.75rem]"
          initial={noMotion ? false : { opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 22,
            delay: noMotion ? 0 : 0.5,
          }}
          aria-hidden
        >
          <span className="font-mono text-lg font-bold leading-none tracking-tight text-gs-success tabular-nums sm:text-[1.125rem]">
            5
          </span>
          <span className="mt-1 font-mono text-[6.5px] font-semibold uppercase leading-none tracking-[0.16em] text-gs-text-tertiary sm:text-[7px]">
            of 5
          </span>
        </motion.div>

        <div className="relative mt-4 overflow-hidden rounded-[0.875rem] border border-gs-border/40 bg-gs-background/60">
          <div className="flex items-center justify-between gap-3 border-b border-gs-border/30 bg-gs-success/8 px-4 py-3.5 sm:px-5 sm:py-4">
            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gs-text-tertiary">
              Shopping list
            </span>
            <span className="shrink-0 rounded-full bg-gs-success/20 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-gs-success">
              All checked
            </span>
          </div>

          <ul className="px-4 py-3 sm:px-5 sm:py-4">
            {COMPLETED_ITEMS.map((item, i) => (
              <li key={item}>
                <motion.div
                  className="flex items-center gap-3.5 border-b border-gs-border/15 py-3 first:pt-0 last:border-b-0 last:pb-0 sm:gap-4 sm:py-3.5"
                  initial={noMotion ? false : { opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: noMotion ? 0.15 : 0.45,
                    delay: noMotion ? 0 : 0.55 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.span
                    className="grid h-[1.65rem] w-[1.65rem] shrink-0 place-items-center rounded-[0.35rem] border border-gs-success/50 bg-gs-success/15 text-gs-success sm:h-7 sm:w-7"
                    initial={noMotion ? false : { scale: 0.6 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                      delay: noMotion ? 0 : 0.65 + i * 0.08,
                    }}
                  >
                    <svg
                      className="sm:scale-105"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2.5 6l2.5 2.5L9.5 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                  <span className="min-w-0 font-handwriting text-[1.1rem] leading-snug text-gs-text-secondary line-through decoration-gs-success/40 decoration-2 sm:text-[1.15rem]">
                    {item}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gs-border/25 bg-gs-surface-secondary/30 px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="text-center font-mono text-[9px] uppercase tracking-[0.18em] text-gs-text-tertiary">
              With you at the store
            </p>
          </div>
        </div>
        <div className="px-1 pb-1 pt-3 sm:px-0 sm:pb-1.5 sm:pt-3.5">
          <div className="flex items-center justify-center gap-1.5 text-gs-text-tertiary">
            <span className="h-1 w-1 rounded-full bg-gs-success/60" />
            <span className="h-1 w-1 rounded-full bg-gs-accent/50" />
            <span className="h-1 w-1 rounded-full bg-gs-text-tertiary/30" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function V2Cta() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gs-background px-4 py-20 sm:px-6 sm:py-28 lg:min-h-[min(90svh,52rem)] lg:py-32"
      aria-labelledby="v2-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,color-mix(in_srgb,var(--gs-accent)_12%,transparent),transparent_55%)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {RINGS.map((ring) => (
          <motion.div
            key={ring.size}
            className="absolute left-1/2 top-1/2 rounded-full border border-gs-accent/15"
            style={{
              width: ring.size,
              height: ring.size,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView
                ? reduceMotion
                  ? { scale: 1, opacity: 0.35 }
                  : {
                      scale: [0.8, 1.05, 0.95, 1],
                      opacity: [0, 0.6, 0.4, 0.3],
                    }
                : {}
            }
            transition={{
              delay: ring.delay,
              duration: reduceMotion ? 0.35 : ring.duration,
              repeat: reduceMotion ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-col items-center gap-14 lg:min-h-[min(78svh,44rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-x-12 lg:gap-y-0 xl:gap-x-20">
        <div className="w-full max-w-xl shrink-0 text-center lg:max-w-[min(28rem,44%)] lg:text-left">
          <motion.h2
            id="v2-cta-heading"
            className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-gs-text-primary"
            initial={reduceMotion ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: reduceMotion ? 0.2 : 0.9, delay: reduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Next time, the list comes&nbsp;with&nbsp;you.
          </motion.h2>

          <motion.p
            className="mx-auto mt-7 max-w-[28rem] font-sans text-[17px] leading-[1.65] text-gs-text-secondary lg:mx-0"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: reduceMotion ? 0 : 0.35 }}
          >
            GrubShelf is in beta on TestFlight. Five minutes is all it takes —
            add what&apos;s in your kitchen, set a few expiry dates, and build a
            quick shopping list. You&apos;ll feel the difference at the store.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6 lg:justify-start"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : 0.55 }}
          >
            <Link
              href={appUrl}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gs-accent px-10 py-5 font-sans text-[16px] font-semibold text-gs-accent-text shadow-[0_0_40px_rgba(232,160,32,0.25)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(232,160,32,0.4)] active:scale-[0.97]"
            >
              {!reduceMotion ? (
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-white/20"
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : null}
              <span className="relative">Join the Beta</span>
            </Link>
            <p className="text-center font-sans text-[13px] leading-snug text-gs-text-tertiary sm:max-w-[13.5rem] sm:self-center sm:text-left lg:self-auto">
              Requires{" "}
              <span className="font-medium text-gs-text-secondary">TestFlight</span>
              {" "}on iPhone or iPad
            </p>
          </motion.div>
        </div>

        <div className="flex w-full shrink-0 justify-center lg:w-auto lg:flex-1 lg:justify-end">
          <CompletedListVisual isInView={isInView} reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}
