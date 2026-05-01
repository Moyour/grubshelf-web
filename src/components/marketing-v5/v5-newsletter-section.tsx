"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { V5 } from "./v5-tokens";

type Status = "idle" | "loading" | "success" | "error";

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
            ? "You're already subscribed — you're all set!"
            : "You're in! We'll keep you posted.",
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
      className="relative overflow-hidden px-6 py-24 md:py-28"
      style={{ backgroundColor: V5.secondary, color: V5.accent }}
    >
      {/* decorative glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: V5.primary }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.18, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${V5.primary}22` }}
          >
            <Mail className="h-5 w-5" style={{ color: V5.primary }} />
          </span>

          <h2 className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Stay in the loop
          </h2>

          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-white/50">
            Get updates on new features, recipes, and tips — no spam, ever.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
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
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 font-sans text-sm text-white outline-none placeholder:text-white/30 focus:ring-2 disabled:opacity-60"
            style={{ "--tw-ring-color": `${V5.primary}66` } as React.CSSProperties}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-sans text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 disabled:opacity-60"
            style={{ backgroundColor: V5.primary }}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </motion.form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 font-sans text-sm"
            style={{ color: status === "error" ? "#f87171" : V5.primary }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
}
