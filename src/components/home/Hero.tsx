import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";
import { localePath, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="hero-editorial relative min-h-[100svh] overflow-hidden bg-ink-deep text-white">
      <div className="absolute inset-0"><Image
        src="/images/hero-editorial.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="hero-photo object-cover object-center"
      /></div>
      <div className="hero-shade absolute inset-0" />
      <div className="hero-content relative z-10 flex min-h-[100svh] items-end px-[6%] pt-28 pb-16 md:items-center md:px-[5%] md:pb-20">
        <div className="w-full md:ml-auto md:w-[40%] md:pt-10">
          <p className="border-t border-white/50 pt-3 text-[11px] tracking-[0.16em] uppercase">
            {dict.hero.eyebrow}
          </p>
          <h1 className="hero-title mt-6 font-display leading-[0.92] font-medium tracking-[-0.06em]">
            Centro
            <br />
            <em className="not-italic">Conteña<span className="text-lime">.</span></em>
          </h1>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/80">{dict.hero.subtitle}</p>
          <Link
            href={localePath(locale, "/contacto")}
            className="action-link mt-8 inline-flex items-center gap-8 border-b border-lime/60 py-3 text-[13px] tracking-[0.08em] text-lime uppercase"
          >
            {dict.hero.cta}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <span className="hero-side" aria-hidden="true">CONTEÑA — {dict.hero.place}</span>
      <div className="absolute right-[6%] bottom-7 left-[6%] z-10 flex justify-between border-t border-white/35 pt-4 pr-16 text-[10px] tracking-[0.16em] uppercase md:right-[5%] md:left-[5%]">
        <span>{dict.hero.scroll}</span>
        <span className="hidden sm:inline">{dict.hero.place}</span>
      </div>
    </section>
  );
}
