"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { VideoCard } from "@/components/media/VideoCard";

export type TestimonialSlide = {
  slug: string;
  src: string;
  poster: string;
  name: string;
  title: string;
  quote: string;
};

export function TestimonialCarousel({
  items,
  playLabel,
  prevLabel,
  nextLabel,
}: {
  items: TestimonialSlide[];
  playLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function go(next: number) {
    const bounded = (next + items.length) % items.length;
    const root = scroller.current;
    const card = root?.children[bounded] as HTMLElement | undefined;
    if (root && card) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.scrollTo({
        left: card.offsetLeft - root.offsetLeft,
        behavior: reduced ? "auto" : "smooth",
      });
    }
    document.querySelectorAll("video").forEach((node) => node.pause());
    setIndex(bounded);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-white/70" aria-live="polite">
          {index + 1} / {items.length} · {items[index]?.name}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => go(index - 1)}
            className="grid h-11 w-11 place-items-center border border-white/30 text-lg hover:bg-lime hover:text-ink"
          >
            ←
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => go(index + 1)}
            className="grid h-11 w-11 place-items-center border border-white/30 text-lg hover:bg-lime hover:text-ink"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={playLabel}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 focus-visible:outline-offset-8"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="w-[85%] shrink-0 snap-start md:w-[calc(50%-0.7rem)] xl:w-[calc(33.33%-0.9rem)]"
          >
            <VideoCard
              src={item.src}
              poster={item.poster}
              name={item.name}
              title={item.title}
              quote={item.quote}
              playLabel={playLabel}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
