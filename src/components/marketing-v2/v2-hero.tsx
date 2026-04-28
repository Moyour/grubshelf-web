"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { resolveAppStoreUrl } from "@/lib/marketing-nav";

const TITLE_WORDS = ["The", "list", "on", "the", "fridge"];
const SUB_WORDS = ["should", "follow", "you", "to", "the", "store."];

const ORBS = [
  { x: "12%", y: "18%", size: 320, color: "var(--gs-accent)", opacity: 0.12, drift: 30 },
  { x: "78%", y: "30%", size: 260, color: "var(--gs-success)", opacity: 0.1, drift: -25 },
  { x: "55%", y: "72%", size: 380, color: "var(--gs-brand-primary-bg)", opacity: 0.14, drift: 20 },
  { x: "25%", y: "65%", size: 200, color: "var(--gs-accent)", opacity: 0.08, drift: -35 },
];

function FloatingOrb({
  x,
  y,
  size,
  color,
  opacity,
  drift,
  index,
  reduceMotion,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
  opacity: number;
  drift: number;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        opacity,
        x: "-50%",
        y: "-50%",
      }}
      animate={
        reduceMotion
          ? {}
          : {
              y: [0, drift, 0],
              x: [0, drift * 0.5, 0],
              scale: [1, 1.08, 1],
            }
      }
      transition={{
        duration: 8 + index * 2,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function V2Hero() {
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-gs-background px-4 sm:px-6"
      aria-labelledby="v2-hero-heading"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        {ORBS.map((orb, i) => (
          <FloatingOrb
            key={i}
            index={i}
            reduceMotion={!!reduceMotion}
            {...orb}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        style={{ scale: textScale, opacity: textOpacity }}
      >
        <h1 id="v2-hero-heading" className="overflow-hidden">
          <span className="block">
            {TITLE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-gs-text-primary"
                initial={{ opacity: 0, y: 60, rotateX: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < TITLE_WORDS.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>
          <span className="mt-2 block">
            {SUB_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-gs-text-secondary"
                initial={{ opacity: 0, y: 60, rotateX: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.65 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < SUB_WORDS.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-10 max-w-lg font-sans text-[18px] leading-[1.7] text-gs-text-secondary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          You wrote everything down. Then you walked out without it.
          GrubShelf keeps your pantry, your list, and your meals in your pocket.
        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-md font-sans text-[14px] leading-relaxed text-gs-text-tertiary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Install TestFlight on iPhone or iPad, then tap below to join the beta.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={appUrl}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gs-accent px-8 py-4 font-sans text-[15px] font-semibold text-gs-accent-text transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative">Join the Beta</span>
          </Link>
          <Link
            href="/#vf-features"
            className="inline-flex items-center justify-center rounded-xl border-2 border-gs-border px-8 py-4 font-sans text-[15px] font-semibold text-gs-text-primary transition-colors hover:border-gs-text-primary"
          >
            See the story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gs-text-tertiary">
          Scroll
        </span>
        <motion.span
          className="block h-8 w-px bg-gs-text-tertiary"
          animate={
            reduceMotion
              ? { scaleY: 1, opacity: 0.5 }
              : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }
          }
          transition={{
            duration: 2,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
