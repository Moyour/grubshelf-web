"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { V5 } from "./v5-tokens";

const lines = [
  { text: "So you guess.", metric: "impulse buys", delta: 12 },
  { text: "You overspend.", metric: "cart creep", delta: 38 },
  { text: "You waste food.", metric: "tossed weekly", delta: 5 },
] as const;

export function V5ProblemSection() {
  const [active, setActive] = useState<number | null>(null);

  const cards = useMemo(
    () =>
      lines.map((line, i) => ({
        ...line,
        id: i,
      })),
    [],
  );

  return (
    <section
      id="v5-problem"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center scroll-mt-20 px-6 py-24"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: active !== null ? 0.11 : 0.07 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-sm font-normal uppercase tracking-[0.3em] text-white/40">
            The spiral
          </h2>
          <p className="max-w-sm font-sans text-xs leading-snug text-white/30">
            Illustrative friction — stylized jumps, not survey data.
          </p>
        </div>
        <div className="flex w-full flex-col gap-6 md:gap-10">
          {cards.map((line, i) => {
            const isOn = active === line.id;
            return (
              <motion.button
                type="button"
                key={line.text}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => {
                  setActive((prev) => (prev === line.id ? null : line.id));
                }}
                className="group relative w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-8 text-left transition-colors hover:border-white/15 md:px-10 md:py-10"
                whileTap={{ scale: 0.985 }}
              >
                <motion.div
                  animate={{
                    x: isOn ? [0, -4, 4, -3, 0] : 0,
                    rotate: isOn ? [0, -0.6, 0.6, 0] : 0,
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <motion.span
                    className="block font-sans text-2xl font-semibold tracking-tight md:text-4xl"
                    style={{ color: isOn ? V5.danger : V5.accent }}
                  >
                    {line.text}
                  </motion.span>
                  <motion.span
                    initial={false}
                    animate={{ opacity: isOn ? 1 : 0.35, y: isOn ? 0 : 4 }}
                    className="mt-3 block font-sans text-sm text-white/50 md:text-base"
                  >
                    {line.metric}
                    <span className="ml-2 tabular-nums" style={{ color: V5.danger }}>
                      +{line.delta}%
                    </span>{" "}
                    <span className="text-white/35">when you wing it</span>
                  </motion.span>
                </motion.div>
                <span className="pointer-events-none absolute right-5 top-5 text-[10px] uppercase tracking-widest text-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:text-xs">
                  tap
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
