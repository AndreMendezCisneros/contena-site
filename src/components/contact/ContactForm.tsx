"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries/types";
import { serviceSlugs } from "@/content/services";
import type { Locale } from "@/lib/i18n";

export function ContactForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      const data = (await response.json()) as { ok?: boolean; whatsappUrl?: string };
      if (!response.ok || !data.ok || !data.whatsappUrl) {
        setStatus("error");
        return;
      }
      setWhatsappUrl(data.whatsappUrl);
      setStatus("ok");
      window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="grid gap-2 text-sm">
        {dict.contact.name}
        <input
          required
          name="name"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          className="border border-ink/20 bg-white px-3 py-3"
        />
      </label>
      <label className="grid gap-2 text-sm">
        {dict.contact.phone}
        <input
          required
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          minLength={6}
          maxLength={20}
          className="border border-ink/20 bg-white px-3 py-3"
        />
      </label>
      <label className="grid gap-2 text-sm">
        {dict.contact.reason}
        <select name="reason" required className="border border-ink/20 bg-white px-3 py-3" defaultValue="otro">
          {serviceSlugs.map((slug) => (
            <option key={slug} value={slug}>
              {dict.service[slug].name}
            </option>
          ))}
          <option value="otro">{dict.contact.other}</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        {dict.contact.message}
        <textarea
          name="message"
          maxLength={1000}
          rows={4}
          className="border border-ink/20 bg-white px-3 py-3"
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-5 py-4 text-sm font-semibold text-lime disabled:opacity-60"
      >
        {status === "sending" ? dict.contact.sending : dict.contact.send}
      </button>
      {status === "ok" ? (
        <p className="text-sm" role="status">
          {dict.contact.success}{" "}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {dict.contact.openWhatsapp}
          </a>
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm" role="alert">
          {dict.contact.error}
        </p>
      ) : null}
    </form>
  );
}
