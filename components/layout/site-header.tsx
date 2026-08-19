"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false);

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
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--card)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-[var(--accent)] transition hover:bg-[var(--card)]"
            >
              {phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
