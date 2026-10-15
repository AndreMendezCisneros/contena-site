import { site } from "@/content/contact";

export function whatsappUrl(text: string) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(text)}`;
}

export function telHref(e164: string) {
  return `tel:+${e164}`;
}
