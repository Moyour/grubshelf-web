"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Refrigerator, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { V5 } from "./v5-tokens";

type PantryItem = {
  id: string;
  name: string;
  qty: number;
  daysLeft: number;
};

const seed: PantryItem[] = [
  { id: "1", name: "Greek yogurt", qty: 2, daysLeft: 4 },
  { id: "2", name: "Cherry tomatoes", qty: 1, daysLeft: 1 },
  { id: "3", name: "Basil plant", qty: 1, daysLeft: 6 },
];

function urgencyColor(days: number): string {
  if (days <= 1) return V5.danger;
  if (days <= 3) return V5.warning;
  return V5.primary;
}

export function V5PantryDemo() {
  const [items, setItems] = useState<PantryItem[]>(seed);
  const [draft, setDraft] = useState("");

  const sorted = useMemo(
    () => [...items].sort((a, b) => a.daysLeft - b.daysLeft),
    [items],
  );

  const addPreset = (name: string) => {
    const id = `${Date.now()}`;
    setItems((prev) => [...prev, { id, name, qty: 1, daysLeft: 5 }]);
  };

  const commitDraft = () => {
    const name = draft.trim();
    if (!name) return;
    addPreset(name);
    setDraft("");
  };

  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:min-h-[380px] md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: V5.primary }}
          >
            <Refrigerator className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-black">Pantry</p>
            <p className="font-sans text-xs text-black/45">What’s actually home</p>
          </div>
        </div>
        <span className="rounded-full bg-black/[0.04] px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-wider text-black/45">
          live demo
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {["Spinach", "Eggs", "Tofu"].map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => addPreset(label)}
            className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1.5 font-sans text-xs font-medium text-black/70 transition hover:border-[#4CAF50]/50 hover:bg-[#4CAF50]/10"
          >
            + {label}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && commitDraft()}
          placeholder="Add something you bought…"
          className="min-w-0 flex-1 rounded-xl border border-black/10 bg-black/[0.02] px-3 py-2 font-sans text-sm text-black outline-none ring-[#4CAF50]/40 placeholder:text-black/35 focus:ring-2"
        />
        <button
          type="button"
          onClick={commitDraft}
          className="rounded-xl px-3 py-2 font-sans text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: V5.primary }}
        >
          Add
        </button>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto pr-1">
        <AnimatePresence initial={false}>
          {sorted.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] px-3 py-3"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-sans text-sm font-medium text-black">{item.name}</p>
                <p className="mt-0.5 font-sans text-xs text-black/45">
                  <span className="tabular-nums" style={{ color: urgencyColor(item.daysLeft) }}>
                    {item.daysLeft}d left
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="rounded-lg p-1.5 text-black/50 hover:bg-black/[0.06] hover:text-black"
                  onClick={() =>
                    setItems((prev) =>
                      prev
                        .map((p) =>
                          p.id === item.id ? { ...p, qty: p.qty - 1 } : p,
                        )
                        .filter((p) => p.qty > 0),
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-6 text-center font-sans text-sm tabular-nums text-black/80">
                  {item.qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="rounded-lg p-1.5 text-black/50 hover:bg-black/[0.06] hover:text-black"
                  onClick={() =>
                    setItems((prev) =>
                      prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p)),
                    )
                  }
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Remove item"
                  className="ml-1 rounded-lg p-1.5 text-black/35 hover:bg-[#FF6B6B]/15 hover:text-[#FF6B6B]"
                  onClick={() => setItems((prev) => prev.filter((p) => p.id !== item.id))}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
