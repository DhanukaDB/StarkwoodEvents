export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--border)] py-16 text-center text-[var(--muted-foreground)]">
      <p className="font-display text-xl text-[var(--accent)]">{message}</p>
    </div>
  );
}
