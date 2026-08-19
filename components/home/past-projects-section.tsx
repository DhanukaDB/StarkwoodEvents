import { EventCard } from "@/components/event-card";
import type { EventSummary } from "@/lib/types";

export function PastProjectsSection({ events }: { events: EventSummary[] }) {
  if (events.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl text-[var(--foreground)]">
        Past <span className="text-gradient-gold">Projects</span>
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {events.slice(0, 6).map((e) => (
          <EventCard key={e._id} {...e} />
        ))}
      </div>
    </section>
  );
}
