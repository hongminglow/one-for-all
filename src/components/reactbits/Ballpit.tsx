import { useEffect, useMemo, useRef } from "react";

import "./Ballpit.css";

export interface BallpitProps {
  balls?: number;
  gravity?: number;
  bounce?: number;
  className?: string;
}

type Ball = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
};

const DEFAULT_COLORS = [
  "var(--sb-accent)",
  "rgba(255,255,255,0.9)",
  "rgba(255,255,255,0.6)",
];

export default function Ballpit({
  balls = 18,
  gravity = 0.45,
  bounce = 0.86,
  className = "",
}: BallpitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const opts = useMemo(
    () => ({ balls, gravity, bounce }),
    [balls, gravity, bounce],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const items: Ball[] = [];

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      items.length = 0;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      for (let i = 0; i < Math.max(6, opts.balls); i++) {
        const r = 10 + Math.random() * 22;
        items.push({
          x: r + Math.random() * (w - r * 2),
          y: r + Math.random() * (h - r * 2),
          vx: (Math.random() - 0.5) * 2.4,
          vy: (Math.random() - 0.5) * 1.2,
          r,
          c: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
        });
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      for (const b of items) {
        b.vy += opts.gravity;
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = Math.abs(b.vx) * opts.bounce;
        }
        if (b.x + b.r > w) {
          b.x = w - b.r;
          b.vx = -Math.abs(b.vx) * opts.bounce;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = Math.abs(b.vy) * opts.bounce;
        }
        if (b.y + b.r > h) {
          b.y = h - b.r;
          b.vy = -Math.abs(b.vy) * opts.bounce;
          b.vx *= 0.985;
        }

        ctx.save();
        ctx.globalAlpha = 0.9;
        const g = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          0,
          b.x,
          b.y,
          b.r * 1.3,
        );
        g.addColorStop(0, "rgba(255,255,255,0.7)");
        g.addColorStop(0.25, b.c);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 1.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    init();
    rafRef.current = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [opts]);

  return (
    <div className={`rb-ballpit ${className}`}>
      <canvas ref={canvasRef} className="rb-ballpit__canvas" />
    </div>
  );
}
