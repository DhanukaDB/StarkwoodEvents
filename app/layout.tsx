import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { safeFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/lib/queries";
import type { SiteSettings } from "@/lib/types";
import {
  DEFAULT_PHONE,
  DEFAULT_EMAIL,
  DEFAULT_ADDRESS,
  DEFAULT_FACEBOOK_URL,
  DEFAULT_INSTAGRAM_URL,
} from "@/lib/site-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Starkwood Events",
  description: "Full-scale event production and entertainment, Melbourne.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await safeFetch<SiteSettings | null>(
    siteSettingsQuery,
    "siteSettings",
    null,
  );

  const phone = settings?.phone || DEFAULT_PHONE;
  const email = settings?.email || DEFAULT_EMAIL;
  const address = settings?.address || DEFAULT_ADDRESS;
  const facebookUrl = settings?.facebookUrl || DEFAULT_FACEBOOK_URL;
  const instagramUrl = settings?.instagramUrl || DEFAULT_INSTAGRAM_URL;

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader phone={phone} />
        {children}
        <SiteFooter
          phone={phone}
          email={email}
          address={address}
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
        />
      </body>
    </html>
  );
}
