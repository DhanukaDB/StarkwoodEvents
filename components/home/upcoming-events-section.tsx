import { EventCard } from "@/components/event-card";
import { EmptyState } from "@/components/empty-state";
import type { EventSummary } from "@/lib/types";

export function UpcomingEventsSection({ events }: { events: EventSummary[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl text-[var(--foreground)]">
        Upcoming <span className="text-gradient-gold">Events</span>
      </h2>
      <div className="mt-8">
        {events.length === 0 ? (
          <EmptyState message="New events coming soon" />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e._id} {...e} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
