import { VideoCard } from "@/components/media/VideoCard";

export type TestimonialSlide = {
  slug: string;
  src: string;
  poster: string;
  name: string;
  title: string;
  quote: string;
};

// Kept as a compatible export for home and localized stories pages.
export function TestimonialCarousel({ items, playLabel }: {
  items: TestimonialSlide[];
  playLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  return (
    <div className="testimonials-grid">
      {items.map((item) => (
        <VideoCard key={item.slug} src={item.src} poster={item.poster}
          name={item.name} title={item.title} quote={item.quote} playLabel={playLabel} />
      ))}
    </div>
  );
}
