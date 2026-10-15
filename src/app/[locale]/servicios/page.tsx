import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { services } from "@/content/services";
import { localePath } from "@/lib/i18n";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/servicios", dict.meta.titles.services, dict.servicesPage.lead);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.servicesPage.label} title={dict.servicesPage.title} lead={dict.servicesPage.lead} />
      <section className="grid gap-6 px-[6%] py-16 md:px-[8%]">
        {services.map((service, index) => {
          const copy = dict.service[service.slug];
          return (
            <article
              key={service.slug}
              className={`grid overflow-hidden bg-white md:grid-cols-[1.1fr_1fr] ${service.featured ? "md:min-h-[420px]" : ""}`}
            >
              <div className="relative min-h-64">
                <Image
                  src={service.image}
                  alt={copy.name}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-[12px] uppercase tracking-[0.14em] text-muted">{copy.kicker}</p>
                <h2 className="mt-2 font-display text-4xl tracking-[-0.04em]">{copy.name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{copy.summary}</p>
                <p className="mt-4 text-sm leading-7">
                  <strong className="font-semibold">{dict.serviceLabels.forWhom}. </strong>
                  {copy.forWhom}
                </p>
                <Link href={localePath(locale, `/servicios/${service.slug}`)} className="mt-6 inline-block border-b border-ink self-start py-2 text-sm">
                  {dict.serviceLabels.ask} ↗
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
