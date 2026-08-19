interface SiteFooterProps {
  phone: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
}

export function SiteFooter({
  phone,
  email,
  address,
  facebookUrl,
  instagramUrl,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] py-12 text-sm text-[var(--muted-foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-[var(--accent)]">Starkwood Events</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className="flex gap-4">
          <a href={facebookUrl} className="hover:text-[var(--accent)]">
            Facebook
          </a>
          <a href={instagramUrl} className="hover:text-[var(--accent)]">
            Instagram
          </a>
        </div>
        <div className="flex gap-4 text-xs opacity-70">
          <a href="https://fm.starkwood.au" className="hover:text-[var(--accent)]">
            Starkwood FM
          </a>
          <a href="https://staff.starkwood.au" className="hover:text-[var(--accent)]">
            Staff
          </a>
        </div>
      </div>
    </footer>
  );
}
