"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { V5 } from "./v5-tokens";

const floatingItems = [
  "milk?",
  "that one thing",
  "paper… towels?",
  "dinner idea",
  "snacks",
];

export function V5HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 28, damping: 18 });
  const sy = useSpring(my, { stiffness: 28, damping: 18 });
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const spot = spotlightRef.current;
    if (!spot) return;

    const apply = () => {
      spot.style.background = `radial-gradient(520px circle at ${Math.round(sx.get())}px ${Math.round(sy.get())}px, rgba(76, 175, 80, 0.14), transparent 65%)`;
    };

    apply();
    const unsubX = sx.on("change", apply);
    const unsubY = sy.on("change", apply);

    return () => {
      unsubX();
      unsubY();
    };
  }, [sx, sy]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-start overflow-hidden px-6 pb-28 pt-[calc(1.25rem+env(safe-area-inset-top,0px)+4rem)] md:pb-36 md:pt-[calc(1.5rem+env(safe-area-inset-top,0px)+4.5rem)]"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-white/45"
        >
          Grub Shelf
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
        >
          You walk into a store…
          <br />
          <span className="text-white/55">and forget everything you came for.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-10 max-w-lg text-pretty text-base leading-relaxed text-white/50 md:text-lg"
        >
          The fluorescent hum. The endless aisles. The list you swore you’d remember — gone.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.72 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/40 md:text-base"
        >
          Grub Shelf: pantry, shopping list, and spending in one app — iPhone & iPad, beta via
          TestFlight.
        </motion.p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[12%] flex flex-wrap justify-center gap-3 px-4 md:bottom-[10%]">
        {floatingItems.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 18, rotate: -4 + i * 2 }}
            animate={{ opacity: 1, y: 0, rotate: -3 + i * 1.5 }}
            transition={{
              duration: 0.85,
              delay: 0.65 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-xs text-white/35 backdrop-blur-sm md:text-sm"
            style={{
              marginLeft: `${(i - 2.5) * 8}px`,
              marginTop: `${(i % 2) * 6}px`,
            }}
          >
            {label}
          </motion.span>
        ))}
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      />
    </section>
  );
}
