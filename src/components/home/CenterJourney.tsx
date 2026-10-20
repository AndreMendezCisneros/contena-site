import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";
import { gallery } from "@/content/gallery";
import { localePath, type Locale } from "@/lib/i18n";

export function CenterJourney({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="center-gallery" aria-label={dict.center.title}>
      <div className="center-gallery-intro">
        <p>{dict.center.label}</p>
        <h2>{dict.center.title}</h2>
        <p className="center-gallery-lead">{dict.center.lead}</p>
        <Link href={localePath(locale, "/el-centro")} className="action-link">{dict.nav.center} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="center-gallery-photos">
        {gallery.slice(0, 1).map((photo, index) => (
          <figure key={photo.key}>
            <Image src={photo.image} alt={dict.center.captions[photo.key]}
              width={index === 0 ? 1792 : 640} height={index === 0 ? 2390 : 640}
              sizes={index === 0 ? "(max-width: 767px) 88vw, 48vw" : "(max-width: 767px) 88vw, 27vw"}
            />
            <figcaption>{dict.center.captions[photo.key]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
