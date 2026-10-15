import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { site } from "@/content/contact";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { telHref, whatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/contacto", dict.meta.titles.contact, dict.contact.title);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.contact.label} title={dict.contact.title} />
      <section className="bg-lime-soft px-[6%] py-14 md:px-[8%]">
        <div className="grid gap-10 border-t border-ink/15 pt-8 md:grid-cols-3">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.visit}</h2>
            <p className="mt-3 text-sm leading-7">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.country}
            </p>
          </div>
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.hoursTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              {dict.contact.hours.map((row) => (
                <li key={row.days}>
                  <span className="block">{row.days}</span>
                  {row.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.talk}</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.e164}>
                  <a href={telHref(phone.e164)}>{phone.display}</a>
                  {phone.whatsapp ? " · WhatsApp" : null}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(dict.whatsapp.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex bg-ink px-5 py-3 text-sm text-lime"
            >
              {dict.nav.book} ↗
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="bg-white">
            <iframe
              title={`${dict.contact.directions}: ${site.name}`}
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <span>
                {site.address.line1} · {site.address.city}
              </span>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                {dict.contact.directions} ↗
              </a>
            </div>
          </div>
          <figure>
            <video
              src={site.locationVideo}
              controls
              playsInline
              preload="metadata"
              className="h-[420px] w-full bg-ink-deep object-contain"
              aria-label={dict.contact.videoCaption}
            />
            <figcaption className="mt-3 text-[12px] tracking-[0.12em] uppercase">
              {dict.contact.videoCaption}
            </figcaption>
          </figure>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">{dict.contact.formTitle}</h2>
            <div className="mt-6">
              <ContactForm locale={locale} dict={dict} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl">{dict.contact.faqTitle}</h2>
            <div className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              {dict.contact.faqs.map((faq) => (
                <details key={faq.q} className="py-4">
                  <summary className="cursor-pointer font-display text-xl">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-7">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
