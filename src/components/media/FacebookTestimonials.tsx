import { facebookTestimonials } from "@/content/testimonials";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: { title: "Más historias del centro", lead: "Explora las publicaciones originales compartidas por el centro en Facebook.", video: "Video", open: "Ver en Facebook", note: "Pulsa un video para verlo aquí. Si Facebook restringe su reproducción, puedes abrir la publicación original." },
  en: { title: "More stories from the center", lead: "Explore the original posts shared by the center on Facebook.", video: "Video", open: "Watch on Facebook", note: "Select a video to watch here. If Facebook restricts playback, open the original post." },
  quy: { title: "Centroymanta aswan willakuykuna", lead: "Facebookpi centropa publicacionesninta qaway.", video: "Video", open: "Facebookpi qaway", note: "Videota kaypi qaway. Facebook mana saqiptin, publicación originalta kichay." },
};

export function FacebookTestimonials({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <section className="facebook-stories" aria-labelledby="facebook-stories-title">
      <div className="facebook-stories-heading"><h2 id="facebook-stories-title">{text.title}</h2><p>{text.lead}</p></div>
      <div className="facebook-stories-grid">
        {facebookTestimonials.map((item, index) => (
          <article key={item.id} className="facebook-video-card">
            <div className="facebook-video-stage">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=false&width=360&autoplay=false`}
                title={`${text.video} ${index + 1} — Facebook`}
                loading="eager"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="facebook-video-caption">
              <strong>{text.video} {String(index + 1).padStart(2, "0")}</strong>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{text.open} ↗</a>
            </div>
          </article>
        ))}
      </div>
      <p className="facebook-stories-note">{text.note}</p>
    </section>
  );
}
