"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutList, PieChart, Refrigerator } from "lucide-react";
import dynamic from "next/dynamic";
import { type ComponentType, useState } from "react";
import { V5FallbackDemoPanel } from "./v5-route-fallbacks";
import { V5 } from "./v5-tokens";

const V5PantryDemoLazy = dynamic(
  () => import("./v5-pantry-demo").then((m) => ({ default: m.V5PantryDemo })),
  { loading: () => <V5FallbackDemoPanel /> },
);

const V5ShoppingDemoLazy = dynamic(
  () => import("./v5-shopping-demo").then((m) => ({ default: m.V5ShoppingDemo })),
  { loading: () => <V5FallbackDemoPanel /> },
);

const V5ExpenseDemoLazy = dynamic(
  () => import("./v5-expense-demo").then((m) => ({ default: m.V5ExpenseDemo })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[320px] flex-col justify-center rounded-2xl border border-black/[0.08] bg-white p-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:min-h-[380px]"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="mx-auto h-2 w-24 animate-pulse rounded-full bg-black/10" />
        <p className="mt-4 text-center font-sans text-sm text-black/40">Loading chart…</p>
      </div>
    ),
  },
);

type PanelComponent = ComponentType<object>;

const tabs: {
  id: "pantry" | "list" | "expense";
  label: string;
  hint: string;
  icon: typeof Refrigerator;
  Panel: PanelComponent;
}[] = [
  {
    id: "pantry",
    label: "Pantry",
    hint: "See what’s aging before it becomes guilt.",
    icon: Refrigerator,
    Panel: V5PantryDemoLazy,
  },
  {
    id: "list",
    label: "Smart list",
    hint: "Check off as you go — no mental juggling.",
    icon: LayoutList,
    Panel: V5ShoppingDemoLazy,
  },
  {
    id: "expense",
    label: "Spend & waste",
    hint: "Patterns appear when the numbers stop hiding.",
    icon: PieChart,
    Panel: V5ExpenseDemoLazy,
  },
];

export function V5ProductSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("pantry");

  const active = tabs.find((t) => t.id === tab)!;
  const Panel = active.Panel;

  return (
    <section
      id="v5-demos"
      className="relative scroll-mt-24 px-6 py-24 md:py-32"
      style={{ backgroundColor: V5.accent, color: V5.secondary }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-black/40"
          >
            Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-sans text-3xl font-bold tracking-tight md:text-5xl"
          >
            Touch the parts that usually live in your head.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-black/50 md:text-lg"
          >
            Pantry, shopping list, and expense tracking — each demo is a tiny rehearsal for a calmer
            week.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <nav className="flex flex-col gap-2 lg:sticky lg:top-28" aria-label="Product demos">
            {tabs.map((t, i) => {
              const Icon = t.icon;
              const isOn = tab === t.id;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  onClick={() => setTab(t.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition md:px-5 md:py-4 ${
                    isOn
                      ? "border-black/12 bg-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)]"
                      : "border-transparent bg-black/[0.02] hover:border-black/10 hover:bg-white/70"
                  }`}
                >
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: isOn ? V5.primary : "rgba(26,26,26,0.85)" }}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-semibold text-black">{t.label}</span>
                    <span className="mt-1 block font-sans text-xs leading-relaxed text-black/45">
                      {t.hint}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </nav>

          <div className="relative min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Panel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
