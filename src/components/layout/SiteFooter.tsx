import Link from "next/link";
import { site } from "@/content/contact";
import type { Dictionary } from "@/dictionaries/types";
import { localePath, type Locale } from "@/lib/i18n";
import { telHref } from "@/lib/whatsapp";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    [dict.nav.home, "/"],
    [dict.nav.services, "/servicios"],
    [dict.nav.firstVisit, "/primera-visita"],
    [dict.nav.specialist, "/especialista"],
    [dict.nav.stories, "/testimonios"],
    [dict.nav.center, "/el-centro"],
    [dict.nav.book, "/contacto"],
  ] as const;

  return (
    <footer className="bg-ink-deep px-[6%] py-14 text-white md:px-[8%]">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl tracking-[-0.04em]">
            conteña<span className="text-lime">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{dict.footer.blurb}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-lime">{dict.footer.quick}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map(([label, path]) => (
              <li key={path}>
                <Link href={localePath(locale, path)} className="hover:text-lime">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-lime">{dict.footer.contact}</p>
          <p className="mt-4 text-sm leading-7">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}, {site.address.country}
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.e164}>
                <a href={telHref(phone.e164)} className="hover:text-lime">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60">
        <div>
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
          <p className="mt-1">
            {dict.footer.developedBy}{" "}
            <a
              href="https://ryjec.com/es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline-offset-2 hover:text-lime hover:underline"
            >
              RYJEC
            </a>
          </p>
        </div>
        <div className="flex gap-5">
          <Link href={localePath(locale, "/privacidad")}>{dict.footer.privacy}</Link>
          <Link href={localePath(locale, "/terminos")}>{dict.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
