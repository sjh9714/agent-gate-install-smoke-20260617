import { normalizeSessionId } from "../../src/auth/session";

describe("normalizeSessionId", () => {
  it("trims surrounding whitespace", () => {
    expect(normalizeSessionId(" abc ")).toBe("abc");
  });

  it("normalizes casing", () => {
    expect(normalizeSessionId(" ABC ")).toBe("abc");
  });
});
