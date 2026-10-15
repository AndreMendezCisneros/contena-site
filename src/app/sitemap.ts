import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/contact";
import { serviceSlugs } from "@/content/services";
import { locales } from "@/lib/i18n";

const paths = [
  "",
  "/servicios",
  ...serviceSlugs.map((slug) => `/servicios/${slug}`),
  "/primera-visita",
  "/especialista",
  "/testimonios",
  "/el-centro",
  "/contacto",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteUrl}/${item}${path}`]),
        ),
      },
    })),
  );
}
