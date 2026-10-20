"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Dictionary } from "@/dictionaries/types";
import { gallery } from "@/content/gallery";
import { localePath, type Locale } from "@/lib/i18n";

export function CenterJourney({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.max(0, Math.min(1, -node.getBoundingClientRect().top / Math.max(1, node.offsetHeight - innerHeight)));
      const expansion = Math.max(0, Math.min(1, (progress - 0.04) / 0.35));
      node.style.setProperty("--journey-open", String(expansion));
      node.style.setProperty("--journey-label", String(1 - Math.min(1, expansion * 2.5)));
      node.style.setProperty("--journey-pan", `${Math.max(0, (progress - 0.48) / 0.52) * -36}%`);
      node.dataset.motion = media.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); media.removeEventListener("change", schedule); };
  }, []);
  return (
    <section ref={root} className="center-journey" aria-label={dict.center.title}>
      <div className="journey-sticky">
        <div className="journey-panel">
          <div className="journey-heading"><p className="eyebrow">{dict.center.label}</p><h2>{dict.center.title}</h2></div>
          <div className="journey-images">
            {gallery.map((photo, index) => (
              <figure key={photo.key}>
                <div className="journey-image"><Image src={photo.image} alt={dict.center.captions[photo.key]} fill sizes="(max-width: 700px) 85vw, 65vw" className="object-cover" /></div>
                <figcaption><span>0{index + 1}</span>{dict.center.captions[photo.key]}</figcaption>
              </figure>
            ))}
          </div>
          <Link href={localePath(locale, "/el-centro")} className="journey-link">{dict.nav.center} <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
