export function PageIntro({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="page-intro bg-ink-deep px-[6%] pt-32 pb-16 text-white md:px-[8%] md:pt-36 md:pb-20">
      <p className="text-[11px] uppercase tracking-[0.18em] text-lime">{label}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-[-0.05em] md:text-7xl">
        {title}
      </h1>
      {lead ? <p className="mt-6 max-w-xl text-base leading-7 text-white/75">{lead}</p> : null}
    </section>
  );
}
