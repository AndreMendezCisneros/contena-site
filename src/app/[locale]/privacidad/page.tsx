import { PageIntro } from "@/components/layout/PageIntro";
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
  return pageMetadata(locale, "/privacidad", dict.meta.titles.privacy, dict.legal.privacyIntro);
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.footer.privacy} title={dict.meta.titles.privacy} lead={dict.legal.privacyIntro} />
      <article className="mx-auto max-w-3xl space-y-8 px-[6%] py-16">
        {dict.legal.privacy.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p className="text-sm">
          <a href={`mailto:${site.email}`} className="border-b border-ink">
            {site.email}
          </a>
        </p>
        <p className="text-xs text-muted">{dict.legal.updated}</p>
      </article>
    </main>
  );
}
