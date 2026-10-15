import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { localePath } from "@/lib/i18n";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/primera-visita", dict.meta.titles.firstVisit, dict.firstVisit.lead);
}

export default async function FirstVisitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.firstVisit.label} title={dict.firstVisit.title} lead={dict.firstVisit.lead} />
      <section className="px-[6%] py-16 md:px-[8%]">
        <ol className="grid gap-6 md:grid-cols-3">
          {dict.firstVisit.steps.map((step, index) => (
            <li key={step.title} className="bg-white p-6">
              <p className="font-display text-sm text-[#6d8a12]">0{index + 1}</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-3xl tracking-[-0.04em]">{dict.firstVisit.includedTitle}</h2>
          <ul className="space-y-4">
            {dict.firstVisit.included.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-sm leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <h2 className="font-display text-3xl">{dict.firstVisit.faqTitle}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {dict.firstVisit.faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-xl">{faq.q}</summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappUrl(dict.whatsapp.firstVisit)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-ink px-5 py-4 text-sm text-lime"
          >
            {dict.firstVisit.cta} ↗
          </a>
          <Link href={localePath(locale, "/contacto")} className="inline-flex border border-ink px-5 py-4 text-sm">
            {dict.nav.book}
          </Link>
        </div>
      </section>
    </main>
  );
}
