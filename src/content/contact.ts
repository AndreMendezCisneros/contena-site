export const site = {
  name: "Centro Quiropráctico Conteña",
  shortName: "conteña.",
  email: "carloscontena@gmail.com",
  whatsappE164: "51976367843",
  address: {
    line1: "Las Américas Mz. I Lt. 13",
    line2: "Frente a la puerta 4",
    city: "Ayacucho",
    region: "Ayacucho",
    country: "Perú",
    countryCode: "PE",
  },
  geo: {
    latitude: -13.173559,
    longitude: -74.210639,
  },
  phones: [
    { e164: "51976367843", display: "+51 976 367 843", whatsapp: true },
    { e164: "51973933459", display: "+51 973 933 459", whatsapp: false },
    { e164: "51919197000", display: "+51 919 197 000", whatsapp: false },
  ],
  social: {
    facebook: "https://www.facebook.com/centroquiropractica",
    tiktok: "https://www.tiktok.com/@carloscontenachaico",
  },
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Centro+Quiropractico+Contena+Ayacucho",
  mapsEmbed:
    "https://maps.google.com/maps?q=Centro%20Quiropr%C3%A1ctico%20Conte%C3%B1a%20Ayacucho&output=embed",
  locationVideo: "/videos/contacto.mp4",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://centrocontena.com";
