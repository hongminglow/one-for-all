import { useEffect, useMemo, useRef } from "react";

import "./Orb.css";

export interface OrbProps {
  color?: string;
  speed?: number;
  glow?: number;
  className?: string;
}

export default function Orb({
  color = "var(--sb-accent)",
  speed = 1,
  glow = 0.85,
  className = "",
}: OrbProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const opts = useMemo(() => ({ color, speed, glow }), [color, speed, glow]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const time = (t / 1000) * opts.speed;

      ctx.clearRect(0, 0, w, h);

      const r = Math.min(w, h) * 0.22;
      const wobbleX = Math.sin(time * 0.7) * r * 0.2;
      const wobbleY = Math.cos(time * 0.6) * r * 0.18;

      const g = ctx.createRadialGradient(
        cx + wobbleX,
        cy + wobbleY,
        r * 0.1,
        cx,
        cy,
        r * 2.8,
      );
      g.addColorStop(0, `color-mix(in srgb, ${opts.color} 65%, white)`);
      g.addColorStop(
        0.25,
        `color-mix(in srgb, ${opts.color} 55%, transparent)`,
      );
      g.addColorStop(1, "rgba(0,0,0,0)");

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, opts.glow));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Inner orb
      const g2 = ctx.createRadialGradient(
        cx - r * 0.25,
        cy - r * 0.25,
        0,
        cx,
        cy,
        r * 1.2,
      );
      g2.addColorStop(0, "rgba(255,255,255,0.85)");
      g2.addColorStop(0.15, `color-mix(in srgb, ${opts.color} 70%, white)`);
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.05, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [opts]);

  return (
    <div className={`rb-orb ${className}`}>
      <canvas ref={canvasRef} className="rb-orb__canvas" />
    </div>
  );
}
