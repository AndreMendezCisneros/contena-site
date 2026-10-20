import { facebookTestimonials } from "@/content/testimonials";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: { title: "Más historias del centro", lead: "Explora las publicaciones originales compartidas por el centro en Facebook.", video: "Video", open: "Ver en Facebook", note: "Los enlaces abren Facebook en otra pestaña. La reproducción depende de Facebook y puede requerir iniciar sesión." },
  en: { title: "More stories from the center", lead: "Explore the original posts shared by the center on Facebook.", video: "Video", open: "Watch on Facebook", note: "Links open Facebook in a new tab. Playback depends on Facebook and may require signing in." },
  quy: { title: "Centroymanta aswan willakuykuna", lead: "Facebookpi centropa publicacionesninta qaway.", video: "Video", open: "Facebookpi qaway", note: "Kay enlaces huk pestañapi Facebookta kichan. Videota qawanaykipaq sesiónta kichayta mañakusunman." },
};

export function FacebookTestimonials({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <section className="facebook-stories" aria-labelledby="facebook-stories-title">
      <div className="facebook-stories-heading"><h2 id="facebook-stories-title">{text.title}</h2><p>{text.lead}</p></div>
      <div className="facebook-stories-grid">
        {facebookTestimonials.map((item, index) => (
          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
            <span className="facebook-play" aria-hidden="true">▶</span>
            <span><strong>{text.video} {String(index + 1).padStart(2, "0")}</strong><small>{text.open}</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <p className="facebook-stories-note">{text.note}</p>
    </section>
  );
}
