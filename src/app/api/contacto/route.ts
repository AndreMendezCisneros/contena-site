import { NextResponse } from "next/server";
import { site } from "@/content/contact";
import { isServiceSlug } from "@/content/services";
import { fillTemplate, getDictionary } from "@/dictionaries";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/whatsapp";

function text(value: unknown, min: number, max: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length < min || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true, whatsappUrl: whatsappUrl("Hola") });
  }

  const name = text(data.name, 2, 80);
  const phone = text(data.phone, 6, 20);
  const reason = text(data.reason, 2, 80);
  const message = text(data.message, 0, 1000) ?? "";
  const locale = typeof data.locale === "string" && isLocale(data.locale) ? data.locale : defaultLocale;

  if (!name || !phone || !reason || !/^[\d+\s()-]{6,20}$/.test(phone)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (reason !== "otro" && !isServiceSlug(reason)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const dict = getDictionary(locale);
  const reasonLabel = reason === "otro" ? dict.contact.other : dict.service[reason].name;
  const composed = fillTemplate(dict.whatsapp.form, {
    name,
    phone,
    reason: reasonLabel,
    message,
  }).trim();
  const link = whatsappUrl(composed);

  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (apiKey && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Consulta web — ${name}`,
        text: composed,
      }),
    });
    emailed = response.ok;
  }

  return NextResponse.json({ ok: true, whatsappUrl: link, emailed });
}
