"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface MotionCarouselItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface MotionCarouselProps {
  items: MotionCarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export default function MotionCarousel({
  items,
  autoplay = false,
  autoplayDelay = 2800,
  className,
}: MotionCarouselProps) {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  React.useEffect(() => {
    if (!autoplay || items.length <= 1) return;
    const id = window.setInterval(next, autoplayDelay);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayDelay, items.length]);

  return (
    <div
      className={cn(
        "w-full max-w-[760px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)]",
        className,
      )}
    >
      <div className="relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full shrink-0 p-6">
              <div className="flex gap-5">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[var(--sb-selected)]">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <div className="text-[16px] font-black text-[var(--sb-text-strong)]">
                    {item.title}
                  </div>
                  {item.description ? (
                    <div className="mt-2 text-[13px] font-medium text-[var(--sb-text-muted)]">
                      {item.description}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
          <button
            type="button"
            className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-2 text-[12px] font-black text-[var(--sb-text-strong)]"
            onClick={prev}
          >
            Prev
          </button>
          <div className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-1 text-[12px] font-black text-[var(--sb-text-strong)]">
            {index + 1}/{items.length}
          </div>
          <button
            type="button"
            className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-2 text-[12px] font-black text-[var(--sb-text-strong)]"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
