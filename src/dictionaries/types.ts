import type { ServiceSlug } from "@/content/services";
import type { TestimonialSlug } from "@/content/testimonials";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type Faq = { q: string; a: string };

export type Dictionary = {
  meta: {
    siteName: string;
    description: string;
    titles: {
      home: string;
      services: string;
      service: string;
      firstVisit: string;
      specialist: string;
      stories: string;
      center: string;
      contact: string;
      privacy: string;
      terms: string;
    };
  };
  nav: {
    home: string;
    services: string;
    firstVisit: string;
    specialist: string;
    stories: string;
    center: string;
    book: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    emphasis: string;
    subtitle: string;
    cta: string;
    scroll: string;
    place: string;
  };
  intro: { label: string; title: string; body: string };
  servicesHome: { label: string; title: string; lead: string; all: string };
  servicesPage: { label: string; title: string; lead: string };
  service: Record<
    ServiceSlug,
    {
      name: string;
      kicker: string;
      summary: string;
      forWhom: string;
      expect: string;
    }
  >;
  serviceLabels: {
    forWhom: string;
    expect: string;
    duration: string;
    includes: string;
    followUp: string;
    consultValue: string;
    ask: string;
    initial: string;
    initialBody: string;
    follow: string;
    followBody: string;
    featured: string;
  };
  firstVisit: {
    label: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    includedTitle: string;
    included: string[];
    faqTitle: string;
    faqs: Faq[];
    cta: string;
  };
  specialist: {
    label: string;
    title: string;
    role: string;
    body: string;
    who: string;
    bullets: string[];
    cta: string;
    alt: string;
  };
  stories: {
    label: string;
    title: string;
    lead: string;
    note: string;
    play: string;
    prev: string;
    next: string;
    pause: string;
    items: Record<
      TestimonialSlug,
      { name: string; title: string; quote: string }
    >;
  };
  center: {
    label: string;
    title: string;
    lead: string;
    captions: Record<"care" | "move" | "time", string>;
    accessTitle: string;
    access: string;
  };
  contact: {
    label: string;
    title: string;
    visit: string;
    hoursTitle: string;
    talk: string;
    directions: string;
    videoCaption: string;
    formTitle: string;
    name: string;
    phone: string;
    reason: string;
    message: string;
    send: string;
    sending: string;
    other: string;
    success: string;
    error: string;
    openWhatsapp: string;
    faqTitle: string;
    faqs: Faq[];
    hours: { days: string; time: string }[];
    closed: string;
  };
  footer: {
    blurb: string;
    quick: string;
    contact: string;
    rights: string;
    developedBy: string;
    privacy: string;
    terms: string;
  };
  legal: {
    updated: string;
    privacyIntro: string;
    termsIntro: string;
    privacy: LegalSection[];
    terms: LegalSection[];
  };
  common: {
    whatsappLabel: string;
    individual: string;
  };
  notFound: { title: string; body: string; cta: string };
  whatsapp: {
    general: string;
    service: string;
    firstVisit: string;
    form: string;
  };
};
