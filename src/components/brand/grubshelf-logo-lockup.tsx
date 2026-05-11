"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  GRUBSHELF_LOCKUP_INTRINSIC,
  GRUBSHELF_LOCKUP_MINT_ON_DARK_SRC,
  GRUBSHELF_LOCKUP_TEAL_ON_LIGHT_SRC,
} from "@/lib/grubshelf-brand";

export type GrubShelfLogoLockupProps = {
  href: string;
  size: "header" | "footer";
  /** Extra classes on the root `Link`. */
  className?: string;
  /** Subtle idle pulse (header only; respects reduced motion). */
  pulse?: boolean;
  priority?: boolean;
};

const lockupImg =
  "block h-auto w-auto brightness-[0.98] contrast-[1.03] transition-[filter,opacity] duration-300 ease-out dark:brightness-[1.06] dark:contrast-[1.04]";

export function GrubShelfLogoLockup({
  href,
  size,
  className = "",
  pulse = false,
  priority = false,
}: GrubShelfLogoLockupProps) {
  const reduceMotion = useReducedMotion();
  const showPulse = pulse && !reduceMotion;

  const heightClass =
    size === "header" ? "h-7 sm:h-8" : "h-11 sm:h-14";

  const lockup = (
    <>
      <Image
        src={GRUBSHELF_LOCKUP_TEAL_ON_LIGHT_SRC}
        alt=""
        width={GRUBSHELF_LOCKUP_INTRINSIC.width}
        height={GRUBSHELF_LOCKUP_INTRINSIC.height}
        className={`${lockupImg} ${heightClass} dark:hidden`}
        aria-hidden
        priority={priority}
      />
      <Image
        src={GRUBSHELF_LOCKUP_MINT_ON_DARK_SRC}
        alt=""
        width={GRUBSHELF_LOCKUP_INTRINSIC.width}
        height={GRUBSHELF_LOCKUP_INTRINSIC.height}
        className={`${lockupImg} ${heightClass} hidden dark:block`}
        aria-hidden
        priority={false}
      />
    </>
  );

  const content = showPulse ? (
    <motion.span
      className="inline-flex"
      animate={{ scale: [1, 1.03, 1], opacity: [0.94, 1, 0.94] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {lockup}
    </motion.span>
  ) : (
    <span className="inline-flex">{lockup}</span>
  );

  return (
    <Link
      href={href}
      className={`group inline-flex items-center transition-opacity hover:opacity-[0.82] dark:hover:opacity-[0.88] ${className}`}
    >
      <span className="sr-only">GrubShelf</span>
      {content}
    </Link>
  );
}
