"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GRUBSHELF_APP_ICON_SRC } from "@/lib/grubshelf-brand";

export type GrubShelfLogoLockupProps = {
  href: string;
  size: "header" | "footer";
  /** Extra classes on the root `Link`. */
  className?: string;
  /** Subtle idle pulse (header only; respects reduced motion). */
  pulse?: boolean;
  priority?: boolean;
};

const iconShellFree =
  "relative inline-flex shrink-0 overflow-hidden rounded-[22%] bg-black/[0.02] shadow-[0_1px_5px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.05] transition-[background-color,box-shadow,ring-color] duration-300 ease-out dark:bg-white/[0.06] dark:shadow-[0_0_18px_rgba(232,160,32,0.22)] dark:ring-white/16";

const iconImg =
  "object-cover transition-[filter] duration-300 ease-out brightness-[0.98] contrast-[1.03] dark:brightness-[1.1] dark:contrast-[1.04]";

export function GrubShelfLogoLockup({
  href,
  size,
  className = "",
  pulse = false,
  priority = false,
}: GrubShelfLogoLockupProps) {
  const reduceMotion = useReducedMotion();
  const showPulse = pulse && !reduceMotion;

  const iconClass =
    size === "header"
      ? `h-7 w-7 sm:h-8 sm:w-8 ${iconImg}`
      : `h-11 w-11 sm:h-14 sm:w-14 ${iconImg}`;

  const labelClass =
    size === "header"
      ? "gs-wordmark text-xl font-semibold lowercase leading-none tracking-tight sm:text-2xl"
      : "gs-wordmark text-4xl font-semibold lowercase leading-none text-gs-brand-primary sm:text-[2.75rem]";

  const mark = (
    <Image
      src={GRUBSHELF_APP_ICON_SRC}
      alt=""
      width={128}
      height={128}
      className={iconClass}
      priority={priority}
    />
  );

  const lead = showPulse ? (
    <motion.span
      className={iconShellFree}
      aria-hidden
      animate={{ scale: [1, 1.05, 1], opacity: [0.94, 1, 0.94] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {mark}
    </motion.span>
  ) : (
    <span className={iconShellFree} aria-hidden>
      {mark}
    </span>
  );

  return (
    <Link
      href={href}
      className={`group flex items-center gap-2.5 text-gs-brand-primary transition hover:text-gs-text-primary ${className}`}
    >
      {lead}
      <span className={labelClass}>grubshelf</span>
    </Link>
  );
}
