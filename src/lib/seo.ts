import type { Metadata } from "next";
import { site, siteUrl } from "@/content/contact";
import { locales, localePath, type Locale } from "@/lib/i18n";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const canonical = `${siteUrl}${localePath(locale, path)}`;
  const languages = Object.fromEntries(
    locales.map((item) => [item, `${siteUrl}${localePath(item, path)}`]),
  );

  const fullTitle = path === "/" ? title : `${title} · Conteña`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": `${siteUrl}${localePath("es", path)}` },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === "en" ? "en_US" : locale === "quy" ? "qu_PE" : "es_PE",
      type: "website",
      images: [{ url: "/images/hero-chiropractic.jpg", alt: site.name }],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${siteUrl}/images/hero-chiropractic.jpg`,
    url: siteUrl,
    telephone: site.phones.map((phone) => `+${phone.e164}`),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [site.social.facebook, site.social.tiktok],
  };
}
