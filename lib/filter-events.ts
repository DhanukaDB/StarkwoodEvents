import type { EventSummary } from "./types";

type CategorizedEvent = EventSummary & { category?: string };

export function filterEventsByCategory<T extends CategorizedEvent>(
  events: T[],
  category: string,
): T[] {
  if (category === "All") return events;
  return events.filter((e) => e.category === category);
}
