import Image from "next/image";
import { Film, MapPin, Ticket } from "lucide-react";

const SCREENINGS = [
  { venue: "Knox", city: "Melbourne", time: "6:00 PM", soldOut: true },
  { venue: "Fountain Gate", city: "Melbourne", time: "6:00 PM", soldOut: true },
  { venue: "Glen Waverley", city: "Melbourne", time: "6:00 PM", soldOut: true },
  { venue: "South Morang", city: "Melbourne", time: "6:00 PM", soldOut: false },
];

export function MovieSpotlight() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-card/70 p-6 backdrop-blur-md sm:p-10 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/[0.08]">
          <Image
            src="/images/movies/eda-ra-eda-ra-poster.jpg"
            alt="Eda Ra Eda Ra (එදා රෑ) official movie poster"
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-1 text-xs font-semibold text-accent-2">
            <Film className="size-3.5" />
            Now showing
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Eda Ra Eda Ra <span className="text-accent-2">(එදා රෑ)</span>
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Named after his landmark song, this biopic chronicles the life and
            legacy of the late Milton Mallawarachchi, one of Sri Lanka&apos;s
            most celebrated romantic vocalists. Directed by Aruna Jayawardena,
            starring Roshan Ravindra and Senali Fonseka.
          </p>

          <div className="mt-6 space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Director:</span> Aruna Jayawardena ·{" "}
              <span className="font-medium text-foreground">Producer:</span> Chamaka Manjula
            </p>
            <p>
              <span className="font-medium text-foreground">Cast:</span> Roshan Ravindra, Senali Fonseka
            </p>
            <p>Exclusive Australian theatrical distributor: A9 Cinema</p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-extrabold tracking-[0.2em] text-foreground/45">
              Melbourne screenings · 20 September
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SCREENINGS.map((s) => (
                <div
                  key={s.venue}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-foreground/50" />
                    <span className="font-medium text-foreground">{s.venue}</span>
                    <span className="text-foreground/60">· {s.time}</span>
                  </div>
                  {s.soldOut ? (
                    <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-red-400">
                      SOLD OUT
                    </span>
                  ) : (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-accent-2">
                      LAST 75 TICKETS
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-[0_10px_15px_rgba(197,139,56,0.35)] transition hover:brightness-110"
          >
            <Ticket className="size-[18px]" />
            Enquire about tickets
          </a>
        </div>
      </div>
    </section>
  );
}
