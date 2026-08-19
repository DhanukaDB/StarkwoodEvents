export function Hero({ headline, subheadline }: { headline: string; subheadline: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[var(--background)] px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--background)]" />
      <div className="relative z-10 max-w-3xl">
        <h1 className="font-display text-5xl leading-tight text-gradient-gold md:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-[var(--muted-foreground)]">{subheadline}</p>
      </div>
    </section>
  );
}
