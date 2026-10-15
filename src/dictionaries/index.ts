import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/types";
import es from "@/dictionaries/es";
import en from "@/dictionaries/en";
import quy from "@/dictionaries/quy";

const dictionaries: Record<Locale, Dictionary> = { es, en, quy };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function fillTemplate(
  template: string,
  values: Record<string, string>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}
