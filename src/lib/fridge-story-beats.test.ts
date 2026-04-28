import { describe, expect, it } from "vitest";
import {
  FRIDGE_LIST_ITEMS,
  FRIDGE_STORY_BEATS,
  type FridgeStoryBeat,
} from "./fridge-story-beats";

describe("FRIDGE_STORY_BEATS", () => {
  it("has three narrative beats in order", () => {
    expect(FRIDGE_STORY_BEATS).toHaveLength(3);
    const ids = FRIDGE_STORY_BEATS.map((b: FridgeStoryBeat) => b.id);
    expect(ids).toEqual(["board", "forgot", "store"]);
  });

  it("each beat has required copy fields", () => {
    for (const beat of FRIDGE_STORY_BEATS) {
      expect(beat.stepLabel.length).toBeGreaterThan(0);
      expect(beat.kicker.length).toBeGreaterThan(0);
      expect(beat.title.length).toBeGreaterThan(0);
      expect(beat.body.length).toBeGreaterThan(0);
    }
  });
});

describe("FRIDGE_LIST_ITEMS", () => {
  it("includes grocery lines for the board", () => {
    expect(FRIDGE_LIST_ITEMS.length).toBeGreaterThanOrEqual(3);
    expect(FRIDGE_LIST_ITEMS.some((l) => l.includes("milk"))).toBe(true);
  });
});
