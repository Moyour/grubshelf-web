"use client";

import { motion } from "framer-motion";
import { PieChart } from "lucide-react";
import { useMemo } from "react";
import { V5 } from "./v5-tokens";

const WEEKS = ["4 wks", "3 wks", "2 wks", "Last wk"] as const;

const series = [
  { week: WEEKS[0], spend: 118, waste: 18 },
  { week: WEEKS[1], spend: 132, waste: 24 },
  { week: WEEKS[2], spend: 105, waste: 14 },
  { week: WEEKS[3], spend: 124, waste: 21 },
];

const MAX_VALUE = 180;

export function V5ExpenseDemo() {
  const totals = useMemo(() => {
    const last = series[series.length - 1]!;
    return { spend: last.spend, waste: last.waste };
  }, []);

  const wastePct = Math.round((totals.waste / totals.spend) * 100);

  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:min-h-[380px] md:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: V5.secondary }}
          >
            <PieChart className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-black">Spend &amp; waste</p>
            <p className="font-sans text-xs text-black/45">
              Rough dollars — enough to spot the pattern.
            </p>
          </div>
        </div>
        <motion.div
          layout
          className="rounded-xl border border-black/[0.06] bg-black/[0.02] px-3 py-2 text-right"
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-black/40">
            Last week
          </p>
          <p className="font-sans text-sm font-bold tabular-nums text-black">
            ${totals.spend}{" "}
            <span className="font-medium text-black/35">groceries</span>
          </p>
          <p className="mt-0.5 font-sans text-xs tabular-nums" style={{ color: V5.danger }}>
            ~${totals.waste} likely waste ({wastePct}%)
          </p>
        </motion.div>
      </div>

      <div className="flex flex-1 items-end gap-3 px-1 pb-1 pt-2">
        {series.map((d, i) => (
          <div key={d.week} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end justify-center gap-[3px]" style={{ height: 180 }}>
              <motion.div
                className="w-[40%] rounded-t-md"
                style={{ backgroundColor: V5.primary }}
                initial={{ height: 0 }}
                animate={{ height: `${(d.spend / MAX_VALUE) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              />
              <motion.div
                className="w-[40%] rounded-t-md"
                style={{ backgroundColor: V5.danger }}
                initial={{ height: 0 }}
                animate={{ height: `${(d.waste / MAX_VALUE) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.1, ease: "easeOut" }}
              />
            </div>
            <span className="font-sans text-[11px] text-black/45">{d.week}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: V5.primary }} />
          <span className="font-sans text-[11px] text-black/50">Groceries</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: V5.danger }} />
          <span className="font-sans text-[11px] text-black/50">Est. waste</span>
        </div>
      </div>

      <p className="mt-3 font-sans text-xs leading-relaxed text-black/40">
        Demo numbers only — tap a week in your real app to reconcile with receipts.
      </p>
    </div>
  );
}
