import { ShieldCheck } from "lucide-react";

// TODO(launch-blocker): Placeholder credibility figures carried over from the
// Figma template — confirm real years-operating / event count / accreditations
// with the client before this section goes live.
export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-base text-foreground/80">Experience and accreditation</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-card/70 p-7 backdrop-blur-md">
          <p className="font-mono text-5xl font-bold tracking-tight text-accent-2">— yrs</p>
          <p className="mt-7 font-display text-lg font-bold text-foreground">
            Producing events across Australia
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Founding year to be confirmed</p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-card/70 p-7 backdrop-blur-md">
          <p className="font-mono text-5xl font-bold tracking-tight text-accent-2">—</p>
          <p className="mt-7 font-display text-lg font-bold text-foreground">Events run end to end</p>
          <p className="mt-4 text-sm text-muted-foreground">Event count to be confirmed</p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-card/70 p-7 backdrop-blur-md">
          <ShieldCheck className="size-7 text-foreground/80" />
          <p className="mt-7 font-display text-lg font-bold text-foreground">Accreditations</p>
          <p className="mt-4 text-sm text-muted-foreground">Accreditation details to be confirmed</p>
        </div>
      </div>
    </section>
  );
}
