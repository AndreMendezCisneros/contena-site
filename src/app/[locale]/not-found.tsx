import Link from "next/link";
import { headers } from "next/headers";
import { getDictionary } from "@/dictionaries";
import { defaultLocale, isLocale, localePath } from "@/lib/i18n";

export default async function NotFound() {
  const headerList = await headers();
  const requested = headerList.get("x-locale") ?? defaultLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main className="px-[6%] py-40">
      <h1 className="font-display text-5xl tracking-[-0.05em]">{dict.notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{dict.notFound.body}</p>
      <Link href={localePath(locale)} className="mt-8 inline-block border-b border-ink py-2">
        {dict.notFound.cta}
      </Link>
    </main>
  );
}
