import { describe, it, expect } from "vitest";
import { schemaTypes } from "../index";

describe("sanity schemaTypes", () => {
  it("exports exactly the five expected document types", () => {
    const names = schemaTypes.map((s) => s.name).sort();
    expect(names).toEqual(
      ["event", "service", "siteSettings", "sponsor", "testimonial"].sort(),
    );
  });

  it("event schema requires title, slug, and status", () => {
    const eventSchema = schemaTypes.find((s) => s.name === "event")!;
    const fieldNames = (eventSchema as any).fields.map((f: any) => f.name);
    expect(fieldNames).toEqual(
      expect.arrayContaining([
        "title",
        "slug",
        "status",
        "category",
        "startDate",
        "venue",
        "starkwoodRole",
        "summary",
        "coverImage",
        "gallery",
        "sponsors",
      ]),
    );
  });

  it("service schema has slug and order fields for routing/sorting", () => {
    const serviceSchema = schemaTypes.find((s) => s.name === "service")!;
    const fieldNames = (serviceSchema as any).fields.map((f: any) => f.name);
    expect(fieldNames).toEqual(expect.arrayContaining(["slug", "order"]));
  });
});
