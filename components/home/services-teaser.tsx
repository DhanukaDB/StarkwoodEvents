import Link from "next/link";
import type { Service } from "@/lib/types";

export function ServicesTeaser({ services }: { services: Service[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl text-[var(--foreground)]">
        What We <span className="text-gradient-gold">Do</span>
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
        {services.map((s) => (
          <Link
            key={s._id}
            href={`/services/${s.slug}`}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center transition hover:border-[var(--accent)]"
          >
            <div className="text-2xl">{s.icon}</div>
            <p className="mt-2 text-sm text-[var(--foreground)]">{s.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
