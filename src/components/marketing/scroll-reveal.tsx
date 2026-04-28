"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Root margin passed to IntersectionObserver (e.g. earlier trigger). */
  rootMargin?: string;
};

function revealIfIntersecting(el: HTMLElement, minRatio = 0.06): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const visibleH = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  const visibleW = Math.min(rect.right, vw) - Math.max(rect.left, 0);
  if (visibleH <= 0 || visibleW <= 0) return false;
  const visibleArea = visibleH * visibleW;
  const elArea = rect.width * rect.height;
  if (elArea <= 0) return false;
  return visibleArea / elArea >= minRatio;
}

/**
 * Fades/slides content in when it enters the viewport. Pairs with `.gs-scroll-reveal` in globals.css.
 * Respects `prefers-reduced-motion` via CSS.
 *
 * Also reveals immediately if the block is already on screen (avoids stuck opacity:0 when IO is late).
 */
export function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -5% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markVisible = () => {
      el.dataset.visible = "true";
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      markVisible();
      return;
    }

    if (revealIfIntersecting(el)) {
      markVisible();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting || (entry?.intersectionRatio ?? 0) > 0) {
          markVisible();
          io.unobserve(el);
        }
      },
      { threshold: [0, 0.01, 0.08], rootMargin },
    );

    io.observe(el);

    const raf = requestAnimationFrame(() => {
      if (el.dataset.visible === "true") return;
      if (revealIfIntersecting(el)) {
        markVisible();
        io.disconnect();
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} className={`gs-scroll-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
