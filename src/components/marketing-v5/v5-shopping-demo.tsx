"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ListChecks, RotateCcw } from "lucide-react";
import { useState } from "react";
import { V5 } from "./v5-tokens";

type Row = { id: string; label: string; done: boolean };

const initial: Row[] = [
  { id: "a", label: "Cilantro", done: false },
  { id: "b", label: "Limes", done: false },
  { id: "c", label: "Chicken thighs", done: false },
  { id: "d", label: "Coconut milk", done: true },
];

export function V5ShoppingDemo() {
  const [rows, setRows] = useState<Row[]>(initial);
  const [draft, setDraft] = useState("");

  const toggle = (id: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, done: !r.done } : r)));
  };

  const reset = () => setRows(initial);

  const add = () => {
    const label = draft.trim();
    if (!label) return;
    setRows((prev) => [...prev, { id: `${Date.now()}`, label, done: false }]);
    setDraft("");
  };

  const pending = rows.filter((r) => !r.done).length;

  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:min-h-[380px] md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: V5.secondary }}
          >
            <ListChecks className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-black">Shopping list</p>
            <p className="font-sans text-xs text-black/45">
              <span className="tabular-nums">{pending}</span> left in the store
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-black/55 hover:bg-black/[0.04]"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          Reset
        </button>
      </div>

      <ul className="mb-4 flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {rows.map((row) => (
            <motion.li
              key={row.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => toggle(row.id)}
                className="flex w-full items-center gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] px-3 py-3 text-left transition hover:border-black/12"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: row.done ? V5.primary : "rgba(0,0,0,0.12)",
                    backgroundColor: row.done ? `${V5.primary}18` : "transparent",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {row.done ? (
                      <motion.span
                        key="on"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="h-4 w-4" style={{ color: V5.primary }} aria-hidden />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="off"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-2 w-2 rounded-full bg-black/15"
                      />
                    )}
                  </AnimatePresence>
                </span>
                <span
                  className={`font-sans text-sm ${row.done ? "text-black/40 line-through" : "font-medium text-black"}`}
                >
                  {row.label}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-auto flex gap-2 border-t border-black/[0.06] pt-4">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="What did you almost forget?"
          className="min-w-0 flex-1 rounded-xl border border-black/10 bg-black/[0.02] px-3 py-2 font-sans text-sm text-black outline-none ring-[#4CAF50]/40 placeholder:text-black/35 focus:ring-2"
        />
        <button
          type="button"
          onClick={add}
          className="rounded-xl px-3 py-2 font-sans text-sm font-semibold text-white"
          style={{ backgroundColor: V5.secondary }}
        >
          Queue
        </button>
      </div>
    </div>
  );
}
