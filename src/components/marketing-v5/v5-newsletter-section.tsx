"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

import { upstreamErrorToMessage } from "@/lib/newsletter-errors";

import { V5 } from "./v5-tokens";

type Status = "idle" | "loading" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as const;

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
        const payload = data as { error?: unknown; detail?: unknown };
        setMessage(
          upstreamErrorToMessage(payload.error ?? payload.detail),
        );
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

      <div className="relative z-10 mx-auto max-w-xl text-center">
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
          className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed"
          style={{ color: `${V5.secondary}88` }}
        >
          A short email every week or so. Food hacks that actually work,
          features before anyone else, recipes worth keeping, and the kind of
          stuff that saves you money and rescues that cilantro you forgot about.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
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
    </section>
  );
}
