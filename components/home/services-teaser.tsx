import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServicesTeaser({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  const [featured, large, ...rest] = services;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Planning first.
          <br />
          Everything else follows.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Most clients come to us for one thing: someone to own the plan.
          From there we scale the team to the type of event you&apos;re
          running.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Link
          href={`/services/${featured.slug}`}
          className="rounded-3xl border border-white/[0.08] bg-card/70 p-10 backdrop-blur-md transition hover:border-accent/40"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-2xl">
            {featured.icon}
          </div>
          <h3 className="mt-8 font-display text-3xl font-bold leading-tight text-foreground">
            {featured.title}
          </h3>
          {featured.summary && (
            <p className="mt-4 max-w-md text-base font-medium text-muted-foreground">
              {featured.summary}
            </p>
          )}
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-foreground">
            Learn more
            <ArrowRight className="size-[15px]" />
          </span>
        </Link>

        {large && (
          <Link
            href={`/services/${large.slug}`}
            className="rounded-3xl border border-white/[0.08] bg-card/70 p-10 backdrop-blur-md transition hover:border-accent/40"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-2xl">
              {large.icon}
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold text-foreground">{large.title}</h3>
            {large.summary && (
              <p className="mt-4 max-w-md text-[15px] font-medium text-muted-foreground">
                {large.summary}
              </p>
            )}
          </Link>
        )}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service) => (
            <Link
              key={service._id}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-white/[0.08] bg-card/70 p-6 backdrop-blur-md transition hover:border-accent/40"
            >
              <div className="text-xl">{service.icon}</div>
              <p className="mt-9 font-display text-lg font-bold text-foreground">{service.title}</p>
              {service.summary && (
                <p className="mt-3 text-sm font-medium text-muted-foreground">{service.summary}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
