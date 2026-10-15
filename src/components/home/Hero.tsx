import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";
import { localePath, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink-deep text-white">
      <Image
        src="/images/hero-chiropractic.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-photo object-cover object-[center_40%] opacity-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_18%,rgba(8,14,11,0.18)_48%,rgba(8,14,11,0.82)_78%),linear-gradient(0deg,rgba(8,14,11,0.55),transparent_32%)] max-md:bg-[linear-gradient(0deg,#080e0b_8%,rgba(8,14,11,0.72)_46%,rgba(8,14,11,0.05)_78%)]" />
      <div className="relative z-10 flex min-h-[100svh] items-end px-[6%] pt-28 pb-16 md:items-center md:px-[5%] md:pb-20">
        <div className="w-full md:ml-auto md:w-[40%] md:pt-10">
          <p className="border-t border-white/50 pt-3 text-[11px] tracking-[0.16em] uppercase">
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.4rem,8vw,6.6rem)] leading-[0.92] font-medium tracking-[-0.06em]">
            {dict.hero.line1}
            <br />
            <em className="text-lime not-italic">{dict.hero.emphasis}</em>
          </h1>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/80">{dict.hero.subtitle}</p>
          <Link
            href={localePath(locale, "/contacto")}
            className="mt-8 inline-flex items-center gap-8 border-b border-lime/60 py-3 text-[13px] tracking-[0.08em] text-lime uppercase"
          >
            {dict.hero.cta}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="absolute right-[6%] bottom-7 left-[6%] z-10 flex justify-between border-t border-white/35 pt-4 pr-16 text-[10px] tracking-[0.16em] uppercase md:right-[5%] md:left-[5%]">
        <span>{dict.hero.scroll}</span>
        <span className="hidden sm:inline">{dict.hero.place}</span>
      </div>
    </section>
  );
}
