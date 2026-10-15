import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { gallery } from "@/content/gallery";
import { site } from "@/content/contact";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/el-centro", dict.meta.titles.center, dict.center.lead);
}

export default async function CenterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.center.label} title={dict.center.title} lead={dict.center.lead} />
      <section className="px-[6%] py-12 md:px-[8%]">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {gallery.map((item) => (
            <figure key={item.key} className="w-[86%] shrink-0 snap-start md:w-[62%]">
              <div className="relative h-[52vh] min-h-72">
                <Image
                  src={item.image}
                  alt={dict.center.captions[item.key]}
                  fill
                  sizes="(min-width: 768px) 62vw, 86vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex justify-between border-t border-[#96b746] pt-3 text-sm">
                <span>{dict.center.captions[item.key]}</span>
                <span className="text-[11px] tracking-[0.14em] uppercase">Conteña</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-display text-3xl">{dict.center.accessTitle}</h2>
          <div>
            <p className="max-w-xl text-base leading-7">{dict.center.access}</p>
            <div className="mt-6 overflow-hidden bg-white">
              <iframe
                title={`${dict.center.accessTitle}: ${site.name}`}
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0"
              />
            </div>
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-b border-ink text-sm">
              {dict.contact.directions} ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
