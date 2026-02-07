import { useEffect, useMemo, useRef } from "react";

import "./Lightning.css";

export interface LightningProps {
  frequency?: number;
  speed?: number;
  color?: string;
  glow?: number;
  thickness?: number;
  className?: string;
}

type Point = { x: number; y: number };

function makeBolt(start: Point, end: Point, segments: number): Point[] {
  const pts: Point[] = [start];
  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t;
    const jitter = (1 - Math.abs(0.5 - t) * 2) * 60;
    pts.push({
      x: x + (Math.random() - 0.5) * jitter,
      y: y + (Math.random() - 0.5) * jitter,
    });
  }
  pts.push(end);
  return pts;
}

export default function Lightning({
  frequency = 1.1,
  speed = 1,
  color = "#ffffff",
  glow = 10,
  thickness = 2,
  className = "",
}: LightningProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const opts = useMemo(
    () => ({ frequency, speed, color, glow, thickness }),
    [frequency, speed, color, glow, thickness],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastBoltAt = 0;

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

      ctx.clearRect(0, 0, w, h);

      const seconds = t / 1000;
      const period = 1 / Math.max(0.1, opts.frequency);
      const shouldFire = seconds - lastBoltAt > period;
      if (shouldFire) {
        lastBoltAt = seconds;
      }

      // Fade old content slightly for a persistence vibe
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      if (shouldFire) {
        const start: Point = { x: Math.random() * w, y: -10 };
        const end: Point = { x: w * (0.2 + Math.random() * 0.6), y: h + 20 };
        const pts = makeBolt(start, end, 14);

        ctx.save();
        ctx.strokeStyle = opts.color;
        ctx.lineWidth = opts.thickness;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.shadowColor = opts.color;
        ctx.shadowBlur = opts.glow;

        ctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Subtle flicker
      ctx.save();
      ctx.globalAlpha = 0.08 + 0.05 * Math.sin(seconds * 8 * opts.speed);
      ctx.fillStyle = opts.color;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

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
    <div className={`rb-lightning ${className}`}>
      <canvas ref={canvasRef} className="rb-lightning__canvas" />
    </div>
  );
}
