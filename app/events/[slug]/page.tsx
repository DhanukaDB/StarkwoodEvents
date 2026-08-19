import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { sanityFetch } from "@/sanity/client";
import { eventBySlugQuery, eventSlugsQuery } from "@/lib/queries";
import { formatEventDate } from "@/lib/format-date";
import type { EventDetail } from "@/lib/types";

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<string[]>({ query: eventSlugsQuery, tags: ["event"] });
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await sanityFetch<EventDetail | null>({
    query: eventBySlugQuery,
    params: { slug },
    tags: ["event"],
  });
  if (!event) return {};
  return { title: `${event.title} | Starkwood Events` };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await sanityFetch<EventDetail | null>({
    query: eventBySlugQuery,
    params: { slug },
    tags: ["event"],
  });

  if (!event) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {event.coverImageUrl && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={event.coverImageUrl} alt={event.title} fill className="object-cover" />
        </div>
      )}
      <h1 className="font-display text-4xl text-[var(--foreground)]">{event.title}</h1>
      <p className="mt-2 text-[var(--accent)]">
        {formatEventDate(event.startDate, event.endDate)}
        {event.venue ? ` · ${event.venue}` : ""}
      </p>
      {event.starkwoodRole && (
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Starkwood&apos;s role: {event.starkwoodRole}
        </p>
      )}
      {event.description && (
        <div className="prose prose-invert mt-8 max-w-none">
          <PortableText value={event.description as PortableTextBlock[]} />
        </div>
      )}
      {event.galleryUrls && event.galleryUrls.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {event.galleryUrls.map((url, i) => (
            <div key={url} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={url} alt={`${event.title} photo ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 flex flex-wrap gap-4">
        {event.ticketUrl && (
          <a
            href={event.ticketUrl}
            className="rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)]"
          >
            Get tickets
          </a>
        )}
        {event.infoUrl && (
          <a
            href={event.infoUrl}
            className="rounded-md border border-[var(--border)] px-6 py-3 text-sm text-[var(--foreground)]"
          >
            More info
          </a>
        )}
      </div>
      {event.sponsors && event.sponsors.length > 0 && (
        <div className="mt-12 flex flex-wrap items-center gap-6 opacity-80">
          {event.sponsors.map((s) =>
            s.logoUrl ? (
              <Image key={s._id} src={s.logoUrl} alt={s.name} width={100} height={40} />
            ) : (
              <span key={s._id} className="text-sm text-[var(--muted-foreground)]">
                {s.name}
              </span>
            ),
          )}
        </div>
      )}
    </main>
  );
}
