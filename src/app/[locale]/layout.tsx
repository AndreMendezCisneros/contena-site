import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { locales } from "@/lib/i18n";
import { loadLocale } from "@/lib/locale";
import { localBusinessJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const { locale, dict } = loadLocale(localeParam);

  return (
    <>
      <a
        href="#contenido"
        className="absolute -left-[999px] top-3 z-50 bg-lime px-3 py-2 text-ink focus:left-3"
      >
        {dict.nav.home}
      </a>
      <SiteHeader locale={locale} dict={dict} />
      <div id="contenido">{children}</div>
      <SiteFooter locale={locale} dict={dict} />
      <WhatsAppFab label={dict.common.whatsappLabel} message={dict.whatsapp.general} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
    </>
  );
}
