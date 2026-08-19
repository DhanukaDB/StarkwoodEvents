import { describe, it, expect, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("next-sanity/webhook", () => ({
  parseBody: vi.fn().mockResolvedValue({ isValidSignature: false, body: undefined }),
}));

import { POST } from "../route";

describe("POST /api/revalidate", () => {
  it("returns 401 when the webhook signature is invalid", async () => {
    const req = new NextRequest("http://localhost/api/revalidate", { method: "POST" });
    const res = await POST(req);
    expect(res.status).toBe(401);
  });
});
