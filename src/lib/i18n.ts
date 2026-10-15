export const locales = ["es", "en", "quy"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const htmlLang: Record<Locale, string> = {
  es: "es",
  en: "en",
  quy: "quy",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = "/") {
  if (!path || path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/");
  if (isLocale(parts[1] ?? "")) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return localePath(next, pathname);
}
