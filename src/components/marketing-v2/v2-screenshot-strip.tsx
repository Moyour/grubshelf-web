"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const SCREENS = [
  {
    src: "/marketing/pantry.svg",
    alt: "Pantry view — shelves and items at a glance",
    label: "Pantry",
  },
  {
    src: "/marketing/expiry.svg",
    alt: "Expiring soon — gentle nudges before food goes bad",
    label: "Expiry",
  },
  {
    src: "/marketing/meals.svg",
    alt: "Meals this week — plan and ingredients in one place",
    label: "Meals",
  },
  {
    src: "/marketing/list.svg",
    alt: "Shopping list — always in your pocket",
    label: "List",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function V2ScreenshotStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="mt-16 -mx-4 px-4 sm:mx-0 sm:px-0"
      aria-labelledby="v2-screenshots-heading"
    >
      <p
        id="v2-screenshots-heading"
        className="mb-6 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gs-text-tertiary"
      >
        In the app
      </p>
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 sm:justify-center sm:overflow-visible sm:pb-0">
        {SCREENS.map((s, i) => (
          <motion.figure
            key={s.src}
            className="shrink-0 text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.2 : 0.65,
              delay: reduceMotion ? 0 : 0.08 * i,
              ease,
            }}
          >
            <div className="relative rounded-[1.75rem] border border-gs-border/80 bg-gs-background/60 p-2 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <Image
                src={s.src}
                alt={s.alt}
                width={320}
                height={640}
                unoptimized
                className="h-[min(52vw,22rem)] w-auto rounded-2xl sm:h-[20rem]"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-gs-text-tertiary">
              {s.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-xl text-center font-sans text-[13px] leading-snug text-gs-text-tertiary">
        Concept screens — replace with real product shots when ready.
      </p>
    </div>
  );
}
