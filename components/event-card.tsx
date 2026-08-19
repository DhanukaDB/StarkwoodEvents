import Link from "next/link";
import Image from "next/image";
import { formatEventDate } from "@/lib/format-date";

interface EventCardProps {
  title: string;
  slug: string;
  venue?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  coverImageUrl?: string;
}

export function EventCard({
  title,
  slug,
  venue,
  startDate,
  endDate,
  summary,
  coverImageUrl,
}: EventCardProps) {
  return (
    <Link
      href={`/events/${slug}`}
      className="group block overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] transition hover:border-[var(--accent)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        ) : (
          <div
            data-testid="event-card-placeholder"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1710] to-[#0a0a0a]"
          >
            <span className="font-display text-2xl text-gradient-gold">S</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-[var(--foreground)]">{title}</h3>
        {venue && <p className="mt-1 text-sm text-[var(--muted-foreground)]">{venue}</p>}
        <p className="mt-1 text-sm text-[var(--accent)]">{formatEventDate(startDate, endDate)}</p>
        {summary && <p className="mt-2 text-sm text-[var(--muted-foreground)]">{summary}</p>}
      </div>
    </Link>
  );
}
