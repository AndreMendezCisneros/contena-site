import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/PageIntro";
import { getService, serviceSlugs } from "@/content/services";
import { fillTemplate } from "@/dictionaries";
import { locales } from "@/lib/i18n";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const service = getService(slug);
  const { locale, dict } = loadLocale(localeParam);
  if (!service) return {};
  const copy = dict.service[service.slug];
  return pageMetadata(locale, `/servicios/${service.slug}`, copy.name, copy.summary);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { dict } = loadLocale(localeParam);
  const copy = dict.service[service.slug];
  const message = fillTemplate(dict.whatsapp.service, { service: copy.name });

  return (
    <main>
      <PageIntro label={copy.kicker} title={copy.name} lead={copy.summary} />
      <section className="grid gap-10 px-[6%] py-16 md:grid-cols-[1.1fr_0.9fr] md:px-[8%]">
        <div className="relative min-h-[360px]">
          <Image src={service.image} alt={copy.name} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl">{dict.serviceLabels.forWhom}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{copy.forWhom}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">{dict.serviceLabels.expect}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{copy.expect}</p>
          </div>
          <dl className="grid gap-4 border-y border-line py-5 text-sm">
            <div>
              <dt className="uppercase tracking-[0.12em] text-muted">{dict.serviceLabels.duration}</dt>
              <dd className="mt-1">{dict.serviceLabels.consultValue}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.12em] text-muted">{dict.serviceLabels.includes}</dt>
              <dd className="mt-1">{dict.serviceLabels.consultValue}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.12em] text-muted">{dict.serviceLabels.followUp}</dt>
              <dd className="mt-1">{dict.serviceLabels.consultValue}</dd>
            </div>
          </dl>
          {service.slug === "ajuste-quiropractico" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="bg-lime-soft p-5">
                <h3 className="font-display text-xl">{dict.serviceLabels.initial}</h3>
                <p className="mt-2 text-sm leading-6">{dict.serviceLabels.initialBody}</p>
              </article>
              <article className="bg-white p-5">
                <h3 className="font-display text-xl">{dict.serviceLabels.follow}</h3>
                <p className="mt-2 text-sm leading-6">{dict.serviceLabels.followBody}</p>
              </article>
            </div>
          ) : null}
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-ink px-5 py-4 text-sm text-lime"
          >
            {dict.serviceLabels.ask} ↗
          </a>
        </div>
      </section>
    </main>
  );
}
