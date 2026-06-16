import { normalizeSessionId } from "../../src/auth/session";

describe("normalizeSessionId", () => {
  it("trims surrounding whitespace", () => {
    expect(normalizeSessionId(" abc ")).toBe("abc");
  });
});
