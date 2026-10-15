"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Dictionary } from "@/dictionaries/types";
import { localePath, locales, swapLocale, type Locale } from "@/lib/i18n";

const localeName: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  quy: "QU",
};

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const overlay = pathname === `/${locale}`;
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onViewport = () => {
      if (desktop.matches) setOpenPath(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onViewport);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onViewport);
    };
  }, [open]);

  const links = [
    [dict.nav.services, "/servicios"],
    [dict.nav.firstVisit, "/primera-visita"],
    [dict.nav.specialist, "/especialista"],
    [dict.nav.stories, "/testimonios"],
  ] as const;

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30 bg-[linear-gradient(180deg,#080e0b_0%,rgba(8,14,11,0.72)_58%,transparent_100%)] text-white"
          : "sticky top-0 z-30 border-b border-line bg-paper text-ink"
      }
    >
      <div className="flex items-center justify-between px-[6%] py-5 md:px-[5%] md:py-6">
        <Link
          href={localePath(locale)}
          className="font-display text-[1.35rem] font-semibold tracking-[-0.04em]"
        >
          conteña<span className="text-lime">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[12px] uppercase tracking-[0.14em] lg:flex">
          {links.map(([label, path]) => (
            <Link key={path} href={localePath(locale, path)} className="hover:text-lime">
              {label}
            </Link>
          ))}
          <Link href={localePath(locale, "/contacto")} className="text-lime">
            {dict.nav.book}
          </Link>
          <LocaleLinks locale={locale} pathname={pathname} />
        </nav>
        <button
          type="button"
          className="text-[12px] uppercase tracking-[0.16em] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? dict.nav.closeMenu : dict.nav.openMenu}
        </button>
      </div>
      {open
        ? createPortal(
            <div
              id="mobile-nav"
              className="fixed inset-0 z-[80] flex min-h-dvh flex-col bg-ink-deep px-[8%] py-8 text-white"
              style={{ backgroundColor: "#080e0b" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl">
                  conteña<span className="text-lime">.</span>
                </span>
                <button
                  type="button"
                  className="text-[12px] uppercase tracking-[0.16em]"
                  onClick={() => setOpenPath(null)}
                >
                  {dict.nav.closeMenu}
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-6 font-display text-4xl tracking-[-0.04em]">
                <Link href={localePath(locale)}>{dict.nav.home}</Link>
                {links.map(([label, path]) => (
                  <Link key={path} href={localePath(locale, path)}>
                    {label}
                  </Link>
                ))}
                <Link href={localePath(locale, "/el-centro")}>{dict.nav.center}</Link>
                <Link href={localePath(locale, "/contacto")} className="text-lime">
                  {dict.nav.book}
                </Link>
              </nav>
              <div className="mt-auto pt-10">
                <LocaleLinks locale={locale} pathname={pathname} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}

function LocaleLinks({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  return (
    <div className="flex gap-3 text-[12px] tracking-[0.14em]">
      {locales.map((item) => (
        <Link
          key={item}
          href={swapLocale(pathname, item)}
          hrefLang={item}
          aria-current={item === locale ? "page" : undefined}
          className={item === locale ? "text-lime" : "opacity-70 hover:opacity-100"}
        >
          {localeName[item]}
        </Link>
      ))}
    </div>
  );
}
