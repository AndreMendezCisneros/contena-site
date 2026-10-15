import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { headers } from "next/headers";
import { site, siteUrl } from "@/content/contact";
import { htmlLang, isLocale } from "@/lib/i18n";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s · Conteña`,
  },
  description:
    "Quiropráctica y rehabilitación física en Ayacucho. Centro Quiropráctico Conteña.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerList = await headers();
  const requested = headerList.get("x-locale") ?? "es";
  const locale = isLocale(requested) ? requested : "es";

  return (
    <html
      lang={htmlLang[locale]}
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${sourceSans.variable} h-full`}
    >
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
