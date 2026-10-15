export const serviceSlugs = [
  "ajuste-quiropractico",
  "terapia-fisica",
  "tratamientos-especializados",
  "bienestar-prevencion",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceMedia = {
  slug: ServiceSlug;
  image: string;
  featured: boolean;
};

export const services: ServiceMedia[] = [
  {
    slug: "ajuste-quiropractico",
    image: "/images/service-chiropractic.jpg",
    featured: true,
  },
  {
    slug: "terapia-fisica",
    image: "/images/service-rehabilitation.jpg",
    featured: false,
  },
  {
    slug: "tratamientos-especializados",
    image: "/images/service-specialized.jpg",
    featured: false,
  },
  {
    slug: "bienestar-prevencion",
    image: "/images/service-wellness.jpg",
    featured: false,
  },
];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
