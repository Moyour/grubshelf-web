"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { V2ScreenshotStrip } from "@/components/marketing-v2/v2-screenshot-strip";

const FEATURES = [
  {
    step: "I",
    title: "Stay organized",
    body: "Know exactly what you have at home before you leave the house. No more buying duplicates, no more forgetting what's already on the shelf. Your entire pantry, finally under control.",
    accent: "var(--gs-accent)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
  },
  {
    step: "II",
    title: "Waste less food",
    body: "Track what expires and when. Use it before you lose it — less food in the bin, more money saved. You'll stop throwing away things you forgot were there.",
    accent: "var(--gs-danger)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    step: "III",
    title: "One list, one place",
    body: "Every item you need, always in your pocket. No more photos of the fridge, no scattered notes, no texting yourself. One list that's always with you when it matters.",
    accent: "var(--gs-success)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    step: "IV",
    title: "Spend smarter",
    body: "See what you're actually buying and stop impulse purchases. When you know what you have and what you need, you stop overspending on things that end up in the bin.",
    accent: "var(--gs-accent)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
] as const;

const CARD_ENTRANCES: Array<{ x: number; y: number; rotate: number }> = [
  { x: -120, y: 60, rotate: -8 },
  { x: 120, y: -40, rotate: 6 },
  { x: -80, y: 80, rotate: 5 },
  { x: 100, y: 60, rotate: -6 },
];

function TiltCard({
  children,
  className = "",
  index,
}: {
  children: ReactNode;
  className?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const reduceMotion = useReducedMotion();

  function handleMouse(e: ReactMouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = (e.clientX - cx) / (rect.width / 2);
    const py = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  }

  function handleLeave() {
    if (reduceMotion) return;
    rotateX.set(0);
    rotateY.set(0);
  }

  const entrance = CARD_ENTRANCES[index % CARD_ENTRANCES.length];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: reduceMotion ? undefined : 800,
        rotateX: reduceMotion ? 0 : springX,
        rotateY: reduceMotion ? 0 : springY,
        transformStyle: reduceMotion ? undefined : "preserve-3d",
      }}
      initial={{
        opacity: 0,
        x: entrance.x,
        y: entrance.y,
        rotate: entrance.rotate,
        filter: "blur(8px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

export function V2Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="v2-features"
      className="relative overflow-hidden border-b border-gs-border bg-gs-surface px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="v2-features-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--gs-accent)_8%,transparent),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,color-mix(in_srgb,var(--gs-success)_6%,transparent),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={headingRef}
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-gs-accent">
            What GrubShelf solves
          </span>
          <h2
            id="v2-features-heading"
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-gs-text-primary"
          >
            Less waste. Less guessing.{" "}
            <span className="text-gs-text-secondary">Less money out the door.</span>
          </h2>
        </motion.div>

        <V2ScreenshotStrip />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <TiltCard key={f.step} index={i} className="h-full">
              <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-gs-border/80 bg-gs-background/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
                <span
                  className="pointer-events-none absolute -right-4 -top-4 font-display text-[6rem] font-bold leading-none"
                  style={{ color: f.accent, opacity: 0.06 }}
                  aria-hidden
                >
                  {f.step}
                </span>
                <motion.div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: f.accent }}
                />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gs-border/80"
                    style={{ color: f.accent }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-gs-text-primary sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-[15px] leading-relaxed text-gs-text-secondary">
                    {f.body}
                  </p>
                  <motion.div
                    className="mt-6 h-[2px] w-0 rounded-full group-hover:w-16"
                    style={{ background: f.accent }}
                    transition={{ duration: 0.4 }}
                    layout
                  />
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
