"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { V5 } from "./v5-tokens";

type Status = "idle" | "loading" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as const;

/** Teaser content — shows people what they'd actually receive. */
const PEEK_ITEMS = [
  {
    emoji: "🥑",
    title: "Your avocados are lying to you",
    preview:
      "That 'ready to eat' sticker? It's optimistic at best. Here's the fridge-door trick that actually works.",
  },
  {
    emoji: "🧾",
    title: "The $14 grocery swap nobody talks about",
    preview:
      "One aisle change. Same meals. A family of 3 saved $58/month — no coupons needed.",
  },
  {
    emoji: "🧊",
    title: "Freeze it before you lose it",
    preview:
      "The 5 things in your fridge right now that freeze beautifully and the 2 that absolutely don't.",
  },
];

export function V5NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(
          data.alreadySubscribed
            ? "You're already on the list — welcome back."
            : "You're in. First one drops soon. Check your inbox.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-28 md:py-36"
      style={{ backgroundColor: V5.accent }}
    >
      {/* background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{ backgroundColor: V5.secondary }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.06]"
        style={{ backgroundColor: V5.primary }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* ---- LEFT: copy + form ---- */}
          <div className="flex-1 text-center lg:pt-4 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: V5.primary }}
            >
              From the Shelf
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease }}
              className="text-balance font-sans text-3xl font-bold leading-[1.15] tracking-tight md:text-[2.75rem]"
              style={{ color: V5.secondary }}
            >
              Your fridge has opinions.
              <br />
              <span style={{ color: V5.primary }}>We write them down.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-5 max-w-md text-pretty text-base leading-relaxed lg:mx-0"
              style={{ color: `${V5.secondary}88` }}
            >
              A short email every week or so. Food hacks that actually work,
              features before anyone else, recipes worth keeping, and the kind of
              stuff that saves you money and rescues that cilantro you forgot about.
            </motion.p>

            {/* form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2 lg:mx-0"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@example.com"
                disabled={status === "loading"}
                className="min-w-0 flex-1 rounded-2xl border bg-white px-5 py-3.5 font-sans text-sm shadow-sm outline-none transition placeholder:text-black/25 focus:ring-2 disabled:opacity-50"
                style={{
                  borderColor: `${V5.secondary}15`,
                  color: V5.secondary,
                  "--tw-ring-color": `${V5.primary}44`,
                } as React.CSSProperties}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-2xl px-7 py-3.5 font-sans text-sm font-bold text-white shadow-md transition hover:shadow-lg active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50"
                style={{ backgroundColor: V5.secondary }}
              >
                {status === "loading" ? "Joining..." : "I'm in"}
              </button>
            </motion.form>

            {message && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 font-sans text-sm font-medium"
                style={{ color: status === "error" ? V5.danger : V5.primary }}
              >
                {message}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 font-sans text-xs"
              style={{ color: `${V5.secondary}44` }}
            >
              Free forever. Unsubscribe in one click. Zero&nbsp;spam.
            </motion.p>
          </div>

          {/* ---- RIGHT: newsletter peek card ---- */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="w-full max-w-sm flex-shrink-0 lg:max-w-[360px]"
          >
            <div
              className="overflow-hidden rounded-3xl border shadow-xl"
              style={{
                borderColor: `${V5.secondary}10`,
                backgroundColor: "white",
                boxShadow: `0 25px 60px -20px ${V5.secondary}18`,
              }}
            >
              {/* card header */}
              <div
                className="px-5 py-4"
                style={{ backgroundColor: V5.secondary }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Sneak peek
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: V5.warning }}
                  >
                    Sample
                  </span>
                </div>
                <p className="mt-2 font-sans text-sm font-bold text-white/90">
                  Spring Into Smarter Meal Planning
                </p>
                <p className="mt-0.5 font-sans text-[11px] text-white/40">
                  March 2026 issue
                </p>
              </div>

              {/* peek items */}
              <div
                className="divide-y"
                style={{ borderColor: `${V5.secondary}08` }}
              >
                {PEEK_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.12,
                      ease,
                    }}
                    className="px-5 py-4"
                  >
                    <p
                      className="mb-1.5 flex items-start gap-2 font-sans text-[13px] font-bold leading-snug"
                      style={{ color: V5.secondary }}
                    >
                      <span className="mt-px text-base leading-none">
                        {item.emoji}
                      </span>
                      {item.title}
                    </p>
                    <p
                      className="pl-[26px] font-sans text-xs leading-relaxed"
                      style={{ color: `${V5.secondary}55` }}
                    >
                      {item.preview}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* card footer */}
              <div
                className="px-5 py-3.5 text-center"
                style={{ backgroundColor: `${V5.warning}12` }}
              >
                <p
                  className="font-sans text-[11px] font-semibold"
                  style={{ color: V5.warning }}
                >
                  Recipes, tips &amp; features — free, every week.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
