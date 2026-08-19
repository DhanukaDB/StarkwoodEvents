"use client";

import { useState } from "react";
import { EventCard } from "@/components/event-card";
import { EmptyState } from "@/components/empty-state";
import { filterEventsByCategory } from "@/lib/filter-events";
import type { EventSummary } from "@/lib/types";

const CATEGORIES = ["All", "Concert", "Pageant", "Corporate", "Expo", "Cultural", "Other"];

export function EventsExplorer({
  events,
}: {
  events: (EventSummary & { category?: string })[];
}) {
  const [category, setCategory] = useState("All");
  const filtered = filterEventsByCategory(events, category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              category === c
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
                : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState message="No events in this category yet" />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((e) => (
              <EventCard key={e._id} {...e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
