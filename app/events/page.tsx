import { EventsExplorer } from "@/components/events/events-explorer";
import { sanityFetch } from "@/sanity/client";
import { allEventsQuery } from "@/lib/queries";
import type { EventSummary } from "@/lib/types";

export const metadata = { title: "Events | Starkwood Events" };

export default async function EventsPage() {
  let events: (EventSummary & { category?: string })[] = [];
  try {
    events = await sanityFetch({ query: allEventsQuery, tags: ["event"] });
  } catch {
    events = [];
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-[var(--foreground)]">
        Our <span className="text-gradient-gold">Events</span>
      </h1>
      <div className="mt-8">
        <EventsExplorer events={events} />
      </div>
    </main>
  );
}
