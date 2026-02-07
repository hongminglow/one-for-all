"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface ImageSphereItem {
  id: string;
  src: string;
  alt: string;
}

export interface ImageSphereProps {
  images: ImageSphereItem[];
  containerSize?: number;
  sphereRadius?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
}

export default function ImageSphere({
  images,
  containerSize = 360,
  sphereRadius = 160,
  autoRotate = true,
  autoRotateSpeed = 0.25,
  className,
}: ImageSphereProps) {
  const [rotY, setRotY] = React.useState(0);
  const draggingRef = React.useRef(false);
  const lastXRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!autoRotate) return;
    const tick = () => {
      setRotY((v) => v + autoRotateSpeed);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoRotate, autoRotateSpeed]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    setRotY((v) => v + dx * 0.25);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const angleStep = images.length ? 360 / images.length : 0;

  return (
    <div
      className={cn("relative", className)}
      style={{ width: containerSize, height: containerSize, perspective: 900 }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotY}deg)`,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="absolute left-1/2 top-1/2"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${idx * angleStep}deg) translateZ(${sphereRadius}px) translate(-50%, -50%)`,
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-16 w-16 rounded-2xl border border-[var(--sb-border-2)] object-cover shadow-lg"
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[var(--sb-border-2)]" />
    </div>
  );
}
