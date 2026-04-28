"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { FridgeListStorySkeleton } from "@/components/marketing/fridge-list-story-skeleton";

const FridgeListStory = dynamic(
  () =>
    import("@/components/marketing/fridge-list-story").then(
      (m) => m.FridgeListStory,
    ),
  {
    loading: () => <FridgeListStorySkeleton />,
    ssr: false,
  },
);

/**
 * Defers downloading framer-motion (and Caveat) until this block is near the viewport,
 * so the hero and first paint stay lighter.
 */
export function FridgeListStoryDeferred() {
  const [load, setLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "320px 0px 320px 0px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sentinelRef}>
      {load ? <FridgeListStory /> : <FridgeListStorySkeleton />}
    </div>
  );
}
