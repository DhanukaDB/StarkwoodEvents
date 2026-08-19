import Link from "next/link";

export function ContactCta() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--card)] py-16 text-center">
      <h2 className="font-display text-3xl text-[var(--foreground)]">
        Let&apos;s Build Something <span className="text-gradient-gold">Unforgettable</span>
      </h2>
      <Link
        href="/contact"
        className="mt-6 inline-block rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)]"
      >
        Get in touch
      </Link>
    </section>
  );
}
