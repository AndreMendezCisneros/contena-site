import { FacebookTestimonials } from "@/components/media/FacebookTestimonials";
import { TestimonialCarousel } from "@/components/media/TestimonialCarousel";
import { PageIntro } from "@/components/layout/PageIntro";
import { testimonials } from "@/content/testimonials";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/testimonios", dict.meta.titles.stories, dict.stories.lead);
}

export default async function StoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  const items = testimonials.map((item) => ({
    slug: item.slug,
    src: item.video,
    poster: item.poster,
    name: dict.stories.items[item.slug].name,
    title: dict.stories.items[item.slug].title,
    quote: dict.stories.items[item.slug].quote,
  }));

  return (
    <main className="bg-ink-deep text-white">
      <PageIntro label={dict.stories.label} title={dict.stories.title} lead={dict.stories.lead} />
      <section className="px-[6%] pb-20 md:px-[8%]">
        <p className="mb-8 max-w-xl text-sm leading-6 text-white/70">{dict.stories.note}</p>
        <TestimonialCarousel
          items={items}
          playLabel={dict.stories.play}
          prevLabel={dict.stories.prev}
          nextLabel={dict.stories.next}
        />
        <FacebookTestimonials locale={locale} />
        <p className="mt-8 text-xs tracking-[0.08em] text-white/50 uppercase">{dict.common.individual}</p>
      </section>
    </main>
  );
}
