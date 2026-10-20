import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/contact";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/motion/Reveal";
import { TestimonialCarousel } from "@/components/media/TestimonialCarousel";
import { CenterJourney } from "@/components/home/CenterJourney";
import { fillTemplate } from "@/dictionaries";
import { localePath } from "@/lib/i18n";
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
  return pageMetadata(locale, "/", dict.meta.titles.home, dict.meta.description);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);


  return (
    <main className="home-page">
      <Hero locale={locale} dict={dict} />

      <section className="grid gap-8 px-[6%] py-20 md:grid-cols-[1fr_1.4fr] md:px-[8%] md:py-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{dict.intro.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-[-0.045em] md:text-6xl">
            {dict.intro.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{dict.intro.body}</p>
        </Reveal>
      </section>

      <nav className="home-shortcuts intent-paths" aria-label={dict.footer.quick}>
        <a href="#especialista"><span className="intent-title">{dict.specialist.who}</span><span className="intent-description">{dict.specialist.label}</span><span className="intent-arrow" aria-hidden="true">↗</span></a>
        <a href="#primera-visita"><span className="intent-title">{dict.nav.firstVisit}</span><span className="intent-description">{dict.firstVisit.title}</span><span className="intent-arrow" aria-hidden="true">↗</span></a>
        <a href="#contacto"><span className="intent-title">{dict.nav.book}</span><span className="intent-description">{dict.contact.talk} · {site.address.city}</span><span className="intent-arrow" aria-hidden="true">↗</span></a>
      </nav>

      <section id="servicios" className="home-services px-[6%] pb-20 md:px-[8%]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{dict.servicesHome.label}</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-6xl">
              {dict.servicesHome.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">{dict.servicesHome.lead}</p>
        </div>
        <nav className="service-index" aria-label={dict.nav.services}>
          {services.map(service => <a key={service.slug} href={`#${service.slug}`}>{dict.service[service.slug].kicker}<span aria-hidden="true">↓</span></a>)}
        </nav>
        <div className="service-collection">
          {services.map((service, index) => {
            const copy = dict.service[service.slug];
            return (
              <Reveal key={service.slug} delay={index * 70} className="service-entry">
                <Link
                  id={service.slug}
                  href={localePath(locale, `/servicios/${service.slug}`)}
                  className="service-editorial group grid overflow-hidden bg-white md:grid-cols-2"
                >
                  <div className="service-photo">
                    <Image
                      src={service.image}
                      alt={copy.name}
                      width={640}
                      height={640}
                      sizes="(min-width: 1000px) 430px, (min-width: 768px) 40vw, 88vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="service-copy flex flex-col justify-end p-6 md:p-8">
                    <p className="service-kicker">{copy.kicker}</p>
                    <h3 className="mt-2 font-display text-3xl tracking-[-0.04em]">{copy.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{copy.summary}</p>
                    <span className="service-detail-link">{dict.serviceLabels.expect}<span aria-hidden="true">↗</span></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Link href={localePath(locale, "/servicios")} className="mt-8 inline-block border-b border-ink py-2 text-sm">
          {dict.servicesHome.all} ↗
        </Link>
      </section>

      <section id="primera-visita" className="first-visit-section bg-lime-soft px-[6%] py-20 md:px-[8%]">
        <p className="text-[11px] uppercase tracking-[0.18em]">{dict.firstVisit.label}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl tracking-[-0.045em] md:text-6xl">{dict.firstVisit.title}</h2>
          <Link href={localePath(locale, "/primera-visita")} className="border-b border-ink py-2 text-sm">
            {dict.firstVisit.cta} ↗
          </Link>
        </div>
        <p className="first-visit-lead">{dict.firstVisit.lead}</p>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.firstVisit.steps.map((step, index) => (
            <li key={step.title} className="border-t border-ink/20 pt-5">
              <p className="font-display text-sm text-[#5d7410]">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-6">{step.body}</p>
            </li>
          ))}
        </ol>
        <aside className="visit-expectations">
          <h3>{dict.firstVisit.includedTitle}</h3>
          <ul>{dict.firstVisit.included.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          <a href={whatsappUrl(dict.whatsapp.firstVisit)} target="_blank" rel="noopener noreferrer">{dict.firstVisit.cta}<span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section id="especialista" className="specialist-section grid items-center gap-10 px-[6%] py-20 md:grid-cols-2 md:px-[8%] md:py-28">
        <div className="specialist-photo relative">
          <Image
            src="/images/doctor-contena.jpg"
            alt={dict.specialist.alt}
            width={1400}
            height={1795}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{dict.specialist.label}</p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.045em] md:text-6xl">{dict.specialist.title}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.12em]">{dict.specialist.role}</p>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted">{dict.intro.body}</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {dict.specialist.bullets.map((bullet) => (
              <li key={bullet} className="py-3 text-sm">
                <span className="mr-4 text-[#6d8a12]" aria-hidden="true">✓</span>
                {bullet}
              </li>
            ))}
          </ul>
          <Link href={localePath(locale, "/especialista")} className="mt-8 inline-block border-b border-ink py-2 text-sm">
            {dict.specialist.who} ↗
          </Link>
        </div>
      </section>

      <CenterJourney locale={locale} dict={dict} />

      <section className="home-stories bg-ink-deep px-[6%] py-20 text-white md:px-[8%]">
        <div className="stories-heading">
          <div><p className="eyebrow text-lime">{dict.stories.label}</p><h2>{dict.stories.title}</h2></div>
          <p>{dict.stories.lead}</p>
        </div>
        <TestimonialCarousel items={testimonials.map(item => ({ slug: item.slug, src: item.video, poster: item.poster, ...dict.stories.items[item.slug] }))} playLabel={dict.stories.play} prevLabel={dict.stories.prev} nextLabel={dict.stories.next} />
        <div className="stories-footer"><p>{dict.stories.note}</p><Link href={localePath(locale, "/testimonios")} className="action-link">{dict.nav.stories} ↗</Link></div>
      </section>
      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="home-faq-heading">
          <p>{dict.contact.faqTitle}</p>
          <h2 id="home-faq-title">{dict.firstVisit.faqTitle}</h2>
          <Link href={localePath(locale, "/primera-visita")} className="action-link">{dict.nav.firstVisit}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="home-faq-list">
          {[...dict.firstVisit.faqs, ...dict.contact.faqs].map((faq) => (
            <details key={faq.q}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>
          ))}
        </div>
      </section>
      <section id="contacto" className="home-contact bg-lime px-[6%] py-20 text-ink md:px-[8%]">
        <p className="text-[11px] uppercase tracking-[0.18em]">{dict.contact.label}</p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
          {dict.contact.title}
        </h2>
        <div className="mt-12 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.visit}</p>
            <p className="mt-3 text-sm leading-7">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
            </p>
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-b border-ink text-sm">
              {dict.contact.directions} ↗
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.hoursTitle}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              {dict.contact.hours.map((row) => (
                <li key={row.days}>
                  {row.days}
                  <br />
                  {row.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em]">{dict.contact.talk}</p>
            <a href={telHref(site.phones[0].e164)} className="mt-3 block text-lg">
              {site.phones[0].display}
            </a>
            <a
              href={whatsappUrl(fillTemplate(dict.whatsapp.general, {}))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex bg-ink px-5 py-3 text-sm text-lime"
            >
              {dict.nav.book} ↗
            </a>
          </div>
        </div>
        <div className="location-layout">
          <div><iframe src={site.mapsEmbed} title={`${dict.contact.visit} — Conteña, Ayacucho`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="map-link">{dict.contact.directions}<span>↗</span></a></div>
          <figure><video src={site.locationVideo} controls playsInline preload="metadata" aria-label={dict.contact.videoCaption} /><figcaption>{dict.contact.videoCaption}</figcaption></figure>
        </div>      </section>
    </main>
  );
}
