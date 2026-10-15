import { PageIntro } from "@/components/layout/PageIntro";
import { loadLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);
  return pageMetadata(locale, "/terminos", dict.meta.titles.terms, dict.legal.termsIntro);
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { dict } = loadLocale(localeParam);

  return (
    <main>
      <PageIntro label={dict.footer.terms} title={dict.meta.titles.terms} lead={dict.legal.termsIntro} />
      <article className="mx-auto max-w-3xl space-y-8 px-[6%] py-16">
        {dict.legal.terms.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p className="text-xs text-muted">{dict.legal.updated}</p>
      </article>
    </main>
  );
}
