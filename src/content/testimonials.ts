export const testimonialSlugs = ["alejandra", "becker", "sonia"] as const;

export type TestimonialSlug = (typeof testimonialSlugs)[number];

export const testimonials = [
  {
    slug: "alejandra",
    video: "/videos/testimonio-alejandra.mp4",
    poster: "/images/service-wellness.jpg",
  },
  {
    slug: "becker",
    video: "/videos/testimonio-becker.mp4",
    poster: "/images/service-rehabilitation.jpg",
  },
  {
    slug: "sonia",
    video: "/videos/testimonio-sonia.mp4",
    poster: "/images/service-chiropractic.jpg",
  },
] as const;
