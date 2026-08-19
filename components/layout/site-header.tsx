import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ phone }: { phone: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Starkwood"
          className="font-display text-lg tracking-wide text-gradient-gold"
        >
          STARKWOOD EVENTS
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="hidden text-sm text-[var(--accent)] md:block"
        >
          {phone}
        </a>
      </div>
    </header>
  );
}
