import { describe, expect, it } from "vitest";
import {
  GRUBSHELF_APP_ICON_SRC,
  GRUBSHELF_LOCKUP_INTRINSIC,
  GRUBSHELF_LOCKUP_MINT_ON_DARK_SRC,
  GRUBSHELF_LOCKUP_TEAL_ON_LIGHT_SRC,
  GRUBSHELF_LOCKUP_WHITE_SRC,
} from "./grubshelf-brand";

describe("grubshelf-brand", () => {
  it("exports stable public icon path", () => {
    expect(GRUBSHELF_APP_ICON_SRC).toBe("/brand/grubshelf-app-icon-1024.png");
  });

  it("exports brand lockup SVG paths", () => {
    expect(GRUBSHELF_LOCKUP_TEAL_ON_LIGHT_SRC).toBe(
      "/brand/wordmark/grubshelf-lockup-teal-on-light.svg",
    );
    expect(GRUBSHELF_LOCKUP_MINT_ON_DARK_SRC).toBe(
      "/brand/wordmark/grubshelf-lockup-mint-on-dark.svg",
    );
    expect(GRUBSHELF_LOCKUP_WHITE_SRC).toBe(
      "/brand/wordmark/grubshelf-lockup-white.svg",
    );
  });

  it("exports lockup intrinsic dimensions", () => {
    expect(GRUBSHELF_LOCKUP_INTRINSIC).toEqual({ width: 1032, height: 284 });
  });
});
