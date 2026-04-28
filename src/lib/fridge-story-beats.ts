export type FridgeStoryBeat = {
  id: "board" | "forgot" | "store";
  stepLabel: string;
  kicker: string;
  title: string;
  body: string;
};

export const FRIDGE_STORY_BEATS: readonly FridgeStoryBeat[] = [
  {
    id: "board",
    stepLabel: "At home",
    kicker: "Kitchen · morning",
    title: "You wrote it all down.",
    body: "Eggs, milk, that bread you like. Clear handwriting on the board, magnets holding it to the fridge. The perfect list — right there on the door.",
  },
  {
    id: "forgot",
    stepLabel: "Out the door",
    kicker: "Front door · ten minutes later",
    title: "You grabbed your keys, not a photo.",
    body: "The list is still on the fridge. Your phone is in your pocket, but the photo you meant to take? Never happened.",
  },
  {
    id: "store",
    stepLabel: "At the store",
    kicker: "Supermarket · twenty minutes later",
    title: "Now you're standing in the aisle, guessing.",
    body: "Was it two tins or three? Cilantro or parsley? You know the answer is written down — just not anywhere you can see it.",
  },
] as const;

export const FRIDGE_LIST_ITEMS = [
  "eggs (x6)",
  "oat milk",
  "sourdough loaf",
  "cilantro",
  "olive oil",
  "rice — the good one",
] as const;
