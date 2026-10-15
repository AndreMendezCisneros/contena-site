"use client";

import { useRef, useState } from "react";

export function VideoCard({
  src,
  poster,
  name,
  title,
  quote,
  playLabel,
}: {
  src: string;
  poster: string;
  name: string;
  title: string;
  quote?: string;
  playLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    document.querySelectorAll("video").forEach((node) => {
      if (node !== video) node.pause();
    });
    video.muted = false;
    video.controls = true;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      video.controls = true;
      setPlaying(true);
    }
  }

  return (
    <figure className="min-w-0">
      <div className="relative aspect-[9/16] max-h-[660px] overflow-hidden bg-ink-deep">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          className="h-full w-full object-contain"
          aria-label={name}
          onPlay={() => setPlaying(true)}
          onPause={() => {
            if (videoRef.current?.ended) setPlaying(false);
          }}
          onEnded={() => {
            const video = videoRef.current;
            if (!video) return;
            video.controls = false;
            setPlaying(false);
          }}
        />
        {playing ? null : (
          <button
            type="button"
            onClick={play}
            aria-label={`${playLabel} ${name}`}
            className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-left text-white"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-lime text-xl text-ink">
              ▶
            </span>
            <small className="mt-4 text-[11px] tracking-[0.16em] uppercase">
              {playLabel} {name}
            </small>
          </button>
        )}
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/30 pt-3 text-sm">
        <span>{name}</span>
        <span className="text-white/70">{title}</span>
      </figcaption>
      {quote ? <blockquote className="mt-3 text-sm leading-6 text-white/75">{quote}</blockquote> : null}
    </figure>
  );
}
