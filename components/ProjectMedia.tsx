"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaItem } from "@/data/projects";

type ProjectMediaProps = {
  media: MediaItem[];
  /** Fallback alt/label context, e.g. the project title. */
  title: string;
};

function PlayGlyph() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

/**
 * Card gallery: a large main viewer (image or video) plus a thumbnail strip.
 * `object-contain` keeps portrait and landscape media fully visible without
 * cropping. Client component so thumbnails can switch the active item.
 */
export function ProjectMedia({ media, title }: ProjectMediaProps) {
  const [active, setActive] = useState(0);

  if (media.length === 0) return null;

  const current = media[active];

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface ring-1 ring-border">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            controls
            preload="metadata"
            className="h-full w-full object-contain"
          >
            <track kind="captions" />
          </video>
        ) : (
          <Image
            src={current.src}
            alt={current.alt || title}
            fill
            sizes="(min-width: 768px) 36rem, 100vw"
            className="object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {media.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${item.alt || item.type}`}
              aria-current={i === active}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-1 transition-colors ${
                i === active
                  ? "ring-accent"
                  : "ring-border hover:ring-accent/50"
              }`}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    preload="metadata"
                    muted
                    className="h-full w-full object-cover"
                  />
                  <PlayGlyph />
                </>
              ) : (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="5rem"
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
