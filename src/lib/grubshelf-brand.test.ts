import { describe, expect, it } from "vitest";
import { GRUBSHELF_APP_ICON_SRC } from "./grubshelf-brand";

describe("grubshelf-brand", () => {
  it("exports stable public icon path", () => {
    expect(GRUBSHELF_APP_ICON_SRC).toBe("/brand/grubshelf-app-icon-1024.png");
  });
});
