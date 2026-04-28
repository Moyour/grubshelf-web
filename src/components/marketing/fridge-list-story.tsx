"use client";

import type { MotionValue } from "framer-motion";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
import {
  FRIDGE_LIST_ITEMS,
  FRIDGE_STORY_BEATS,
} from "@/lib/fridge-story-beats";

/** Scroll snap targets within the story section (fraction of scrollable range). */
const FRIDGE_BEAT_SCROLL_POSITIONS = [0.1, 0.46, 0.8] as const;

function BeatCopy({
  activeIndex,
}: {
  activeIndex: number;
}) {
  return (
    <div
      className="relative min-h-[9rem] sm:min-h-[10rem]"
      aria-live="polite"
    >
      {FRIDGE_STORY_BEATS.map((beat, i) => (
        <motion.div
          key={beat.id}
          className="absolute inset-0 flex flex-col justify-center"
          initial={false}
          animate={{
            opacity: i === activeIndex ? 1 : 0,
            y: i === activeIndex ? 0 : i < activeIndex ? -14 : 14,
            filter: i === activeIndex ? "blur(0px)" : "blur(6px)",
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden={i !== activeIndex}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-gs-accent">
            {beat.kicker}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,4.2vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-gs-text-primary">
            {beat.title}
          </h2>
          <p className="mt-4 max-w-md font-sans text-[16px] leading-relaxed text-gs-text-secondary">
            {beat.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Magnet({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-7 w-7 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_14px_rgba(0,0,0,0.35)] ring-1 ring-black/30 dark:from-zinc-600 dark:via-zinc-800 dark:to-black ${className}`}
      aria-hidden
    />
  );
}

function AcrylicBoard({
  listOpacity,
  listBlur,
  boardFilter,
}: {
  listOpacity: MotionValue<number>;
  listBlur: MotionValue<string>;
  boardFilter: MotionValue<string>;
}) {
  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px]"
      style={{ filter: boardFilter }}
    >
      <div className="gs-fridge-metal absolute inset-[-12%] rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] ring-1 ring-gs-border/60" />
      <div className="absolute inset-0 flex items-center justify-center p-[10%]">
        <div className="relative h-full w-full rounded-2xl border border-white/40 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_20px_50px_-24px_rgba(0,0,0,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-gs-surface/35">
          <Magnet className="left-4 top-3" />
          <Magnet className="right-4 top-3" />
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gs-accent/35 to-transparent" />
          <motion.ul
            className="absolute left-6 right-6 top-16 space-y-3 text-left"
            style={{ opacity: listOpacity, filter: listBlur }}
          >
            {FRIDGE_LIST_ITEMS.map((item, idx) => (
              <motion.li
                key={item}
                className="font-handwriting text-[clamp(1.35rem,3.8vw,1.75rem)] leading-tight text-gs-text-primary dark:text-gs-text-primary"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  delay: 0.08 * idx,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="relative inline-block">
                  {item}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gs-text-primary/25"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.07, duration: 0.5 }}
                  />
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

function StaticAcrylicBoard({
  listOpacityClass = "opacity-100",
  listBlurClass = "",
}: {
  listOpacityClass?: string;
  listBlurClass?: string;
}) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px]">
      <div className="gs-fridge-metal absolute inset-[-12%] rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] ring-1 ring-gs-border/60" />
      <div className="absolute inset-0 flex items-center justify-center p-[10%]">
        <div className="relative h-full w-full rounded-2xl border border-white/40 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_20px_50px_-24px_rgba(0,0,0,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-gs-surface/35">
          <Magnet className="left-4 top-3" />
          <Magnet className="right-4 top-3" />
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gs-accent/35 to-transparent" />
          <ul
            className={`absolute left-6 right-6 top-16 space-y-3 text-left transition-opacity duration-300 ${listOpacityClass} ${listBlurClass}`}
          >
            {FRIDGE_LIST_ITEMS.map((item) => (
              <li
                key={item}
                className="font-handwriting text-[clamp(1.35rem,3.8vw,1.75rem)] leading-tight text-gs-text-primary dark:text-gs-text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PhoneForgotOverlay({
  opacity,
}: {
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <motion.div
        className="relative flex h-[min(52vw,220px)] w-[min(42vw,180px)] flex-col items-center justify-start rounded-[2rem] border border-gs-border/80 bg-gs-surface/90 p-4 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl dark:bg-gs-surface/75"
        animate={{ y: [0, -6, 0], rotate: [-2, -1.5, -2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-2 w-16 rounded-full bg-gs-text-primary/10" />
        <div className="mt-4 flex h-28 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-gs-danger/35 bg-gs-danger-surface/30">
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gs-danger"
            animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            aria-hidden
          >
            <path
              d="M4 7h4l2-2h4l2 2h4v12H4V7z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M9 11h6M12 8v6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </motion.svg>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-gs-text-tertiary">
            No photo
          </p>
        </div>
        <p className="mt-3 text-center font-sans text-[11px] leading-snug text-gs-text-secondary">
          You forgot to take a photo.
          <br />
          <span className="text-gs-text-tertiary">The list is still on the fridge.</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

function StoreAisleScene({
  opacity,
}: {
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-[2rem]"
      style={{ opacity }}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0 48px, color-mix(in srgb, var(--gs-text-primary) 6%, transparent) 48px 49px)",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute inset-x-0 top-[18%] h-[64%] skew-y-1 bg-gradient-to-b from-gs-surface/10 via-transparent to-gs-accent/5 blur-sm"
        animate={{ x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {["???", "milk?", "which one", "??"].map((label, i) => (
        <motion.span
          key={label}
          className="absolute font-handwriting text-[clamp(1.25rem,4vw,2rem)] text-gs-accent/90 drop-shadow-[0_0_24px_rgba(232,160,32,0.25)]"
          style={{
            left: `${18 + i * 20}%`,
            top: `${22 + (i % 3) * 18}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.35, 0.85, 0.35],
            rotate: [-4, 2, -4],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function FridgeListStory() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);
  const [tabBeat, setTabBeat] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 300 : 90,
    damping: reduceMotion ? 40 : 24,
    mass: reduceMotion ? 0.4 : 0.85,
  });

  const boardBlurAmount = useTransform(
    progress,
    [0, 0.30, 0.48, 0.68],
    [0, 0, 2.5, 0],
  );
  const boardFilter = useTransform(
    boardBlurAmount,
    (v) => `blur(${v}px)`,
  );

  const listOpacity = useTransform(progress, [0, 0.28, 0.46, 0.68], [1, 1, 0.15, 0]);
  const listBlurAmount = useTransform(progress, [0, 0.30, 0.48], [0, 0, 6]);
  const listBlur = useTransform(listBlurAmount, (v) => `blur(${v}px)`);

  const phoneOpacity = useTransform(progress, [0.24, 0.36, 0.60, 0.76], [0, 1, 1, 0]);
  const storeOpacity = useTransform(progress, [0.58, 0.78, 1], [0, 1, 1]);

  useMotionValueEvent(progress, "change", (v) => {
    const q = Math.round(v * 50) / 50;
    const next = q < 0.34 ? 0 : q < 0.62 ? 1 : 2;
    setActiveBeat((prev) => (prev === next ? prev : next));
  });

  const scrollToBeat = useCallback(
    (index: number) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const scrollRange = el.offsetHeight - window.innerHeight;
      const target = absoluteTop + scrollRange * FRIDGE_BEAT_SCROLL_POSITIONS[index];
      window.scrollTo({
        top: target,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion],
  );

  if (reduceMotion) {
    const beat = FRIDGE_STORY_BEATS[tabBeat];
    return (
      <section
        className="gs-chapter gs-section-atmosphere border-b border-gs-border px-4 py-24 sm:px-6 sm:py-32"
        aria-labelledby="fridge-story-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gs-text-tertiary">
            Same morning
          </p>
          <h2
            id="fridge-story-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-gs-text-primary"
          >
            You had the list. You left it behind.
          </h2>
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Part of the story"
          >
            {FRIDGE_STORY_BEATS.map((b, i) => (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={tabBeat === i}
                onClick={() => setTabBeat(i)}
                className={`rounded-full border px-4 py-2 font-sans text-[13px] font-semibold tracking-tight transition ${
                  tabBeat === i
                    ? "border-gs-accent bg-gs-accent/15 text-gs-text-primary"
                    : "border-gs-border text-gs-text-secondary hover:border-gs-border-secondary"
                }`}
              >
                {i + 1}. {b.stepLabel}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-gs-accent">
                {beat.kicker}
              </p>
              <p className="mt-4 font-display text-2xl font-semibold text-gs-text-primary">
                {beat.title}
              </p>
              <p className="mt-3 font-sans text-[16px] leading-relaxed text-gs-text-secondary">
                {beat.body}
              </p>
            </div>
            <div className="relative flex min-h-[320px] items-center justify-center">
              {tabBeat === 0 ? (
                <div className="scale-90">
                  <StaticAcrylicBoard />
                </div>
              ) : null}
              {tabBeat === 1 ? (
                <div className="relative scale-90">
                  <StaticAcrylicBoard
                    listOpacityClass="opacity-25"
                    listBlurClass="blur-[3px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="max-w-[220px] text-center font-sans text-sm text-gs-text-secondary">
                      You forgot to take a photo. The list is still on the fridge.
                    </p>
                  </div>
                </div>
              ) : null}
              {tabBeat === 2 ? (
                <div className="relative h-72 w-full max-w-sm overflow-hidden rounded-2xl border border-gs-border bg-gs-surface-secondary/40 p-6">
                  <p className="font-handwriting text-2xl text-gs-accent">
                    ??? · milk? · which one
                  </p>
                  <p className="mt-4 font-sans text-sm text-gs-text-secondary">
                    You&apos;re at the store, but the list is still on the fridge.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="gs-chapter relative border-b border-gs-border bg-gs-background"
      style={{ height: "160vh" }}
      aria-labelledby="fridge-story-heading"
    >
      <div className="sticky top-0 grid h-[100vh] grid-rows-[1fr_auto_1fr] overflow-hidden bg-gs-background px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-0 gs-section-atmosphere opacity-90" />
        <div className="pointer-events-none absolute -right-1/4 top-1/4 h-[min(80vw,28rem)] w-[min(80vw,28rem)] rounded-full bg-gs-accent/10 blur-3xl" />

        {/* top spacer */}
        <div />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-12">
          <div className="flex flex-col">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gs-text-tertiary">
              Same morning
            </p>
            <h2
              id="fridge-story-heading"
              className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-gs-text-primary"
            >
              You had the list. You left it behind.
            </h2>
            <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-gs-text-secondary">
              Scroll through the story — from the kitchen, out the door,
              all the way to the supermarket.
            </p>
            <div className="mt-6">
              <BeatCopy activeIndex={activeBeat} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {FRIDGE_STORY_BEATS.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => scrollToBeat(i)}
                  className={`rounded-full border px-3 py-2 font-sans text-[12px] font-semibold tracking-tight transition ${
                    activeBeat === i
                      ? "border-gs-accent bg-gs-accent/15 text-gs-text-primary"
                      : "border-gs-border/80 text-gs-text-tertiary hover:border-gs-border-secondary hover:text-gs-text-secondary"
                  }`}
                >
                  {i + 1}. {b.stepLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[min(100%,380px)] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <AcrylicBoard
                  listOpacity={listOpacity}
                  listBlur={listBlur}
                  boardFilter={boardFilter}
                />
                <PhoneForgotOverlay opacity={phoneOpacity} />
                <StoreAisleScene opacity={storeOpacity} />
              </div>
            </div>
            <div
              className="mx-auto mt-4 h-1 max-w-[200px] overflow-hidden rounded-full bg-gs-border/80"
              aria-hidden
            >
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-gs-accent to-gs-success"
                style={{ scaleX: progress }}
              />
            </div>
            <p className="mt-2 text-center font-sans text-[11px] text-gs-text-tertiary">
              Keep scrolling to follow the story
            </p>
          </div>
        </div>

        {/* bottom spacer */}
        <div />
      </div>
    </section>
  );
}
