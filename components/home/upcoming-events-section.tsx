"use client";

import { useEffect, useState } from "react";
import { MapPin, CalendarDays, Ticket } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { formatEventDate } from "@/lib/format-date";
import type { EventSummary } from "@/lib/types";

function getCountdown(targetIso: string) {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function CountdownTile({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex h-[107px] w-full flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10">
      <span className="font-mono text-4xl font-bold text-foreground">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[11px] font-extrabold tracking-[0.15em] text-foreground/45">
        {label}
      </span>
    </div>
  );
}

export function UpcomingEventsSection({ events }: { events: EventSummary[] }) {
  const event = events[0];
  const [countdown, setCountdown] = useState(() =>
    event?.startDate ? getCountdown(event.startDate) : null,
  );

  useEffect(() => {
    if (!event?.startDate) return;
    const id = setInterval(() => setCountdown(getCountdown(event.startDate!)), 1000);
    return () => clearInterval(id);
  }, [event?.startDate]);

  if (!event) {
    return (
      <section className="mx-auto max-w-6xl px-6">
        <EmptyState message="New events coming soon" />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-card/70 p-6 backdrop-blur-md sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-accent/35 bg-accent/10 px-4 py-1 text-xs font-semibold text-accent-2">
              Next up
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-[44px]">
              {event.title}
            </h2>
            {event.summary && <p className="mt-3 text-base text-muted-foreground">{event.summary}</p>}

            <div className="mt-6 space-y-3">
              {event.venue && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="size-4 text-foreground/50" />
                  <span className="font-medium text-foreground">Venue</span>
                  <span className="text-foreground/85">{event.venue}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="size-4 text-foreground/50" />
                <span className="font-medium text-foreground">Date</span>
                <span className="text-foreground/85">
                  {formatEventDate(event.startDate, event.endDate)}
                </span>
              </div>
            </div>

            <a
              href={`/events/${event.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-[0_10px_15px_rgba(197,139,56,0.35)] transition hover:brightness-110"
            >
              <Ticket className="size-[18px]" />
              View event
            </a>
          </div>

          {countdown && (
            <div className="rounded-2xl border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-extrabold tracking-[0.2em] text-foreground/45">Doors open in</p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                <CountdownTile value={countdown.days} label="Days" />
                <CountdownTile value={countdown.hours} label="Hours" />
                <CountdownTile value={countdown.minutes} label="Mins" />
                <CountdownTile value={countdown.seconds} label="Secs" />
              </div>
              <p className="mt-4 text-sm font-extrabold text-foreground/50">
                Counting down to {formatEventDate(event.startDate)}.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
