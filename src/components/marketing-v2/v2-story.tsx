"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LIST_ITEMS = ["Eggs", "Milk", "Chicken", "Rice", "Olive oil"];

const ease = [0.22, 1, 0.36, 1] as const;

function StoryBeat({
  number,
  kicker,
  headline,
  body,
  children,
  reverse,
}: {
  number: string;
  kicker: string;
  headline: string;
  body: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div
        className={`grid items-center gap-10 lg:gap-16 ${
          reverse
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
            : "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        }`}
      >
        <motion.div
          className={reverse ? "lg:order-2" : ""}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-baseline gap-4">
            <motion.span
              className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold tabular-nums leading-none tracking-[-0.04em] text-gs-accent/20"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {number}
            </motion.span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-gs-text-tertiary">
              {kicker}
            </span>
          </div>
          <motion.h2
            className="mt-5 max-w-[20ch] font-display text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-gs-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {headline}
          </motion.h2>
          <motion.p
            className="mt-5 max-w-md font-sans text-[16px] leading-[1.7] text-gs-text-secondary"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            {body}
          </motion.p>
        </motion.div>

        <motion.div
          className={`flex items-center justify-center ${reverse ? "lg:order-1" : ""}`}
          initial={{ opacity: 0, x: reverse ? -40 : 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

function TimelineConnector({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 py-8 sm:py-12">
      <motion.div
        className="h-16 w-px origin-top sm:h-24"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, ease }}
        style={{
          background:
            "linear-gradient(to bottom, var(--gs-accent), var(--gs-success), transparent)",
        }}
      />
      <motion.span
        className="rounded-full border border-gs-border/60 bg-gs-surface/60 px-4 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-gs-text-tertiary backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 300 }}
      >
        {label}
      </motion.span>
      <motion.div
        className="h-16 w-px origin-top sm:h-24"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--gs-success), var(--gs-accent))",
        }}
      />
    </div>
  );
}

function KitchenVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const r = reduceMotion ? 0 : Infinity;
  return (
    <div className="relative">
      <div className="relative h-80 w-60 overflow-hidden rounded-2xl border border-gs-border/50 bg-gs-surface/70 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-lg sm:h-[22rem] sm:w-[17rem]">
        <div className="absolute inset-x-0 top-0 h-10 border-b border-gs-border/40 bg-gs-surface-secondary/60">
          <div className="flex h-full items-center justify-between px-4">
            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gs-text-tertiary">
              Grocery list
            </span>
            <motion.div
              className="h-5 w-5 rounded-full bg-gs-accent shadow-[0_0_14px_rgba(232,160,32,0.5)]"
              animate={
                reduceMotion ? { scale: 1 } : { scale: [1, 1.2, 1] }
              }
              transition={{ duration: 2.5, repeat: r }}
            />
          </div>
        </div>

        <div className="mt-12 space-y-1 px-5 py-2">
          {LIST_ITEMS.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-2.5 border-b border-gs-border/20 py-2.5"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-gs-accent"
                animate={
                  reduceMotion ? { scale: 1 } : { scale: [1, 1.3, 1] }
                }
                transition={{ duration: 2, delay: i * 0.5, repeat: r }}
              />
              <span className="font-handwriting text-[1.15rem] text-gs-text-primary">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute -right-2 bottom-1/4 h-6 w-6 rounded-full bg-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.4)]"
          animate={
            reduceMotion ? { scale: 1 } : { scale: [1, 1.1, 1] }
          }
          transition={{ duration: 3, repeat: r }}
        />
        <motion.div
          className="absolute -left-2 top-1/3 h-5 w-5 rounded-full bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.3)]"
          animate={
            reduceMotion ? { scale: 1 } : { scale: [1, 1.15, 1] }
          }
          transition={{ duration: 2.5, repeat: r, delay: 0.5 }}
        />
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, color-mix(in srgb, var(--gs-accent) 15%, transparent), transparent 65%)",
        }}
        animate={
          reduceMotion ? { opacity: 0.55 } : { opacity: [0.4, 0.7, 0.4] }
        }
        transition={{ duration: 4, repeat: r }}
      />
    </div>
  );
}

function DoorVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const r = reduceMotion ? 0 : Infinity;
  return (
    <div className="relative flex items-center gap-5 sm:gap-8">
      <motion.div
        className="relative h-60 w-44 rounded-xl border border-gs-border/30 bg-gs-surface/30 shadow-2xl backdrop-blur-md sm:h-72 sm:w-52"
        animate={reduceMotion ? { y: 0 } : { y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: r, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col items-center justify-center p-5 text-center">
          <div className="space-y-1.5 opacity-25">
            {LIST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-gs-text-tertiary" />
                <span className="font-handwriting text-sm text-gs-text-tertiary">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: [0.6, 1, 0.6] }
            }
            transition={{ duration: 2.5, repeat: r }}
          >
            <div className="rounded-full border-2 border-dashed border-gs-danger/40 bg-gs-danger/8 px-4 py-2 shadow-[0_0_20px_rgba(163,45,45,0.15)]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gs-danger/80">
                Still on fridge
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-gs-accent"
              animate={
                reduceMotion
                  ? { opacity: 0.9, x: 0 }
                  : { opacity: [0.15, 0.9, 0.15], x: [0, 6, 0] }
              }
              transition={{ duration: 1.5, delay: i * 0.25, repeat: r }}
            />
          ))}
        </motion.div>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gs-text-tertiary">
          You left
        </span>
      </div>

      <motion.div
        className="relative flex h-28 w-16 flex-col items-center justify-start rounded-[1.2rem] border border-gs-border/60 bg-gs-surface/60 pt-2 shadow-lg backdrop-blur-md sm:h-32 sm:w-[4.5rem]"
        animate={reduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: r, ease: "easeInOut" }}
      >
        <div className="h-1 w-8 rounded-full bg-gs-text-primary/15" />
        <div className="mt-3 flex h-16 w-12 flex-col items-center justify-center rounded-lg border border-gs-border/40 bg-gs-surface-secondary/40 sm:h-20 sm:w-14">
          <svg
            className="mb-1 text-gs-text-tertiary/60"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="font-mono text-[7px] font-bold uppercase tracking-wider text-gs-text-tertiary/60">
            No list
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function StoreVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const r = reduceMotion ? 0 : Infinity;
  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex h-14 w-14 items-center justify-center rounded-lg border border-gs-border/40 bg-gs-surface/40 backdrop-blur-sm sm:h-[4.2rem] sm:w-[4.2rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease }}
          >
            <motion.span
              className="h-2 w-7 rounded-full bg-gs-text-primary/10"
              animate={
                reduceMotion
                  ? { opacity: 0.4 }
                  : { opacity: [0.2, 0.6, 0.2] }
              }
              transition={{ duration: 2.5, delay: i * 0.12, repeat: r }}
            />
          </motion.div>
        ))}
      </div>

      {["Milk??", "Which\none?", "Already\nhave it?", "???"].map((label, i) => (
        <motion.span
          key={i}
          className="absolute whitespace-pre-line text-center font-handwriting text-lg leading-tight text-gs-accent/80 drop-shadow-[0_0_12px_rgba(232,160,32,0.3)]"
          style={{
            left: `${[-18, 90, -14, 80][i]}%`,
            top: `${[-12, 12, 72, 88][i]}%`,
          }}
          animate={
            reduceMotion
              ? { y: 0, opacity: 0.75, rotate: -4 + i * 3 }
              : {
                  y: [0, -8, 0],
                  opacity: [0.25, 0.85, 0.25],
                  rotate: [-4 + i * 3, 4 - i * 2, -4 + i * 3],
                }
          }
          transition={{ duration: 3, delay: i * 0.4, repeat: r }}
        >
          {label}
        </motion.span>
      ))}

      <motion.div
        className="pointer-events-none absolute inset-[-35%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--gs-danger) 7%, transparent), transparent 55%)",
        }}
        animate={
          reduceMotion ? { opacity: 0.42 } : { opacity: [0.3, 0.55, 0.3] }
        }
        transition={{ duration: 4, repeat: r }}
      />
    </div>
  );
}

export function V2Story() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;

  return (
    <section
      className="relative border-b border-gs-border bg-gs-background py-20 sm:py-28"
      aria-label="The story"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,color-mix(in_srgb,var(--gs-accent)_5%,transparent),transparent_55%)]" />

      <StoryBeat
        number="01"
        kicker="6:45 AM · The kitchen"
        headline="You wrote it all down."
        body="Standing in the kitchen, you knew exactly what was missing. The pen moved fast. Eggs, milk, chicken, rice, olive oil — every single thing. The list was perfect."
      >
        <KitchenVisual reduceMotion={rm} />
      </StoryBeat>

      <TimelineConnector label="27 minutes later" />

      <StoryBeat
        number="02"
        kicker="7:12 AM · The front door"
        headline="Then you walked out."
        body="Keys, wallet, phone — you grabbed everything that mattered. Everything except the list, still pinned to the fridge under a magnet. Perfectly written. Perfectly useless."
        reverse
      >
        <DoorVisual reduceMotion={rm} />
      </StoryBeat>

      <TimelineConnector label="26 minutes later" />

      <StoryBeat
        number="03"
        kicker="7:38 AM · The store"
        headline="Standing in the aisle. Guessing."
        body="Fluorescent lights. Endless options. You can picture the handwriting but not the words. Was it whole milk or oat? Did you already have rice? You're guessing."
      >
        <StoreVisual reduceMotion={rm} />
      </StoryBeat>
    </section>
  );
}
