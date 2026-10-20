"use client";

import { useState } from "react";
import { facebookTestimonials } from "@/content/testimonials";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: { title: "Más historias del centro", lead: "Explora las publicaciones originales compartidas por el centro en Facebook.", video: "Video", open: "Ver en Facebook", note: "Pulsa un video para verlo aquí. Si Facebook restringe su reproducción, puedes abrir la publicación original." },
  en: { title: "More stories from the center", lead: "Explore the original posts shared by the center on Facebook.", video: "Video", open: "Watch on Facebook", note: "Select a video to watch here. If Facebook restricts playback, open the original post." },
  quy: { title: "Centroymanta aswan willakuykuna", lead: "Facebookpi centropa publicacionesninta qaway.", video: "Video", open: "Facebookpi qaway", note: "Videota kaypi qaway. Facebook mana saqiptin, publicación originalta kichay." },
};

export function FacebookTestimonials({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="facebook-stories" aria-labelledby="facebook-stories-title">
      <div className="facebook-stories-heading"><h2 id="facebook-stories-title">{text.title}</h2><p>{text.lead}</p></div>
      <div className="facebook-stories-grid">
        {facebookTestimonials.map((item, index) => (
          <article key={item.id} className="facebook-video-card">
            <div className="facebook-video-stage">
              {active === item.id ? (
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=false&width=360&autoplay=true`}
                  title={`${text.video} ${index + 1} — Facebook`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button type="button" onClick={() => {
                  document.querySelectorAll("video").forEach(video => video.pause());
                  setActive(item.id);
                }} aria-label={`${locale === "en" ? "Play" : locale === "quy" ? "Qaway" : "Reproducir"} ${text.video} ${index + 1}`}>
                  <span className="facebook-cover-brand">conteña<span>.</span></span>
                  <span className="facebook-cover-play" aria-hidden="true">▶</span>
                  <span>{text.video} {String(index + 1).padStart(2, "0")}</span>
                  <small>Facebook Reels</small>
                </button>
              )}
            </div>
            <div className="facebook-video-caption">
              <strong>{text.video} {String(index + 1).padStart(2, "0")}</strong>
              {active === item.id && <button type="button" onClick={() => setActive(null)}>{locale === "en" ? "Close" : locale === "quy" ? "Wichqay" : "Cerrar"} ×</button>}
              <a href={item.url} target="_blank" rel="noopener noreferrer">{text.open} ↗</a>
            </div>
          </article>
        ))}
      </div>
      <p className="facebook-stories-note">{text.note}</p>
    </section>
  );
}
