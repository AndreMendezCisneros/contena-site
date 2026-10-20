export const testimonialSlugs = ["alejandra", "becker", "sonia"] as const;

export type TestimonialSlug = (typeof testimonialSlugs)[number];

export const testimonials = [
  {
    slug: "alejandra",
    video: "/videos/testimonio-alejandra.mp4",
    poster: "/images/testimonio-alejandra.jpg",
  },
  {
    slug: "becker",
    video: "/videos/testimonio-becker.mp4",
    poster: "/images/testimonio-becker.jpg",
  },
  {
    slug: "sonia",
    video: "/videos/testimonio-sonia.mp4",
    poster: "/images/testimonio-sonia.jpg",
  },
] as const;

// Original Facebook posts supplied by the client; content not independently transcribed.
export const facebookTestimonials = [
  "944685142853005", "342316537781504", "219083126865596",
  "1533858366976457", "888538086209534", "701239864848534",
  "1190784545769231", "4862430187119019",
].map(id => ({ id, url: `https://www.facebook.com/reel/${id}/` }));
