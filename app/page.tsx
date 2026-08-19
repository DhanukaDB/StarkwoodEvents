import { Hero } from "@/components/home/hero";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section";
import { PastProjectsSection } from "@/components/home/past-projects-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SponsorLogos } from "@/components/home/sponsor-logos";
import { ContactCta } from "@/components/home/contact-cta";
import { safeFetch } from "@/sanity/client";
import {
  upcomingEventsQuery,
  pastEventsQuery,
  servicesQuery,
  testimonialsQuery,
  sponsorsQuery,
  siteSettingsQuery,
} from "@/lib/queries";
import type { EventSummary, Service, Testimonial, Sponsor, SiteSettings } from "@/lib/types";

export default async function HomePage() {
  const [upcoming, past, services, testimonials, sponsors, settings] = await Promise.all([
    safeFetch<EventSummary[]>(upcomingEventsQuery, "event", []),
    safeFetch<EventSummary[]>(pastEventsQuery, "event", []),
    safeFetch<Service[]>(servicesQuery, "service", []),
    safeFetch<Testimonial[]>(testimonialsQuery, "testimonial", []),
    safeFetch<Sponsor[]>(sponsorsQuery, "sponsor", []),
    safeFetch<SiteSettings | null>(siteSettingsQuery, "siteSettings", null),
  ]);

  return (
    <main>
      <Hero
        headline={settings?.heroHeadline || "Full-Scale Events. Flawlessly Produced."}
        subheadline={
          settings?.heroSubheadline ||
          "From arena concerts to cultural galas, Starkwood Events brings Melbourne's biggest nights to life."
        }
      />
      <ServicesTeaser services={services} />
      <UpcomingEventsSection events={upcoming} />
      <PastProjectsSection events={past} />
      <TestimonialsSection testimonials={testimonials} />
      <SponsorLogos sponsors={sponsors} />
      <ContactCta />
    </main>
  );
}
