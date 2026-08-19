import { ContactForm } from "@/components/contact-form";
import { sanityFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/lib/queries";
import type { SiteSettings } from "@/lib/types";
import { DEFAULT_PHONE, DEFAULT_EMAIL, DEFAULT_ADDRESS } from "@/lib/site-config";

export const metadata = { title: "Contact | Starkwood Events" };

export default async function ContactPage() {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityFetch<SiteSettings>({ query: siteSettingsQuery, tags: ["siteSettings"] });
  } catch {
    settings = null;
  }

  const phone = settings?.phone || DEFAULT_PHONE;
  const email = settings?.email || DEFAULT_EMAIL;
  const address = settings?.address || DEFAULT_ADDRESS;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-[var(--foreground)]">
        Get In <span className="text-gradient-gold">Touch</span>
      </h1>
      <p className="mt-4 text-[var(--muted-foreground)]">{address}</p>
      <div className="mt-8">
        <ContactForm phone={phone} email={email} />
      </div>
    </main>
  );
}
