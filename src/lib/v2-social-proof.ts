export type V2SocialQuote = {
  text: string;
  tag: string;
};

/** Relatable moments the product is built for (placeholder until real reviews). */
export const V2_SOCIAL_QUOTES: V2SocialQuote[] = [
  {
    text: "I already had three cans of chickpeas. Bought two more anyway.",
    tag: "Sound familiar?",
  },
  {
    text: "Wrote the list on the fridge. Left the house without taking a photo.",
    tag: "Every single week",
  },
  {
    text: "The yogurt expired two days ago. I didn't even know it was in there.",
    tag: "Happens to everyone",
  },
];

/** Optional real beta quote — leave text empty until you have one. */
export const V2_BETA_TESTER_QUOTE: { quote: string; attribution: string } = {
  quote: "",
  attribution: "Beta tester",
};
