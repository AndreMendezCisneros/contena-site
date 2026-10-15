import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export function resolveLocale(locale: string): Locale {
  if (!isLocale(locale)) notFound();
  return locale;
}

export function loadLocale(locale: string) {
  const safe = resolveLocale(locale);
  return { locale: safe, dict: getDictionary(safe) };
}
