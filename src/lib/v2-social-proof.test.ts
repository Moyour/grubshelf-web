import { describe, expect, it } from "vitest";
import {
  V2_BETA_TESTER_QUOTE,
  V2_SOCIAL_QUOTES,
} from "./v2-social-proof";

describe("v2-social-proof", () => {
  it("exports three relatable quotes", () => {
    expect(V2_SOCIAL_QUOTES).toHaveLength(3);
    expect(V2_SOCIAL_QUOTES[0]).toHaveProperty("text");
    expect(V2_SOCIAL_QUOTES[0]).toHaveProperty("tag");
  });

  it("beta quote config has attribution", () => {
    expect(V2_BETA_TESTER_QUOTE.attribution).toBeTruthy();
    expect(typeof V2_BETA_TESTER_QUOTE.quote).toBe("string");
  });
});
