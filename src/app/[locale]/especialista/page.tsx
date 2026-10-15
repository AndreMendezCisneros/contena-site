import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
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
  return pageMetadata(locale, "/especialista", dict.meta.titles.specialist, dict.specialist.body);
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.specialist.label} title={dict.specialist.title} lead={dict.specialist.role} />
      <section className="grid items-start gap-10 px-[6%] py-16 md:grid-cols-2 md:px-[8%]">
        <div className="relative min-h-[560px]">
          <Image
            src="/images/doctor-contena.jpg"
            alt={dict.specialist.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{dict.specialist.who}</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">{dict.specialist.role}</h2>
          <p className="mt-5 text-base leading-8 text-muted">{dict.specialist.body}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {dict.specialist.bullets.map((bullet, index) => (
              <li key={bullet} className="py-4 text-sm">
                <span className="mr-4 text-[#6d8a12]">0{index + 1}</span>
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(dict.whatsapp.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex bg-ink px-5 py-4 text-sm text-lime"
          >
            {dict.specialist.cta} ↗
          </a>
        </div>
      </section>
    </main>
  );
}
