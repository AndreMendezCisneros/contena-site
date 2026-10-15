import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-[6%] py-40">
      <h1 className="font-display text-5xl tracking-[-0.05em]">No encontramos esa página.</h1>
      <p className="mt-4 max-w-md text-muted">El enlace no existe o cambió.</p>
      <Link href="/es" className="mt-8 inline-block border-b border-ink py-2">
        Ir al inicio
      </Link>
    </main>
  );
}
