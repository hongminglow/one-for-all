import { useEffect, useMemo, useRef } from "react";

import "./GridMotion.css";

export interface GridMotionProps {
  gridSize?: number;
  speed?: number;
  amplitude?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function GridMotion({
  gridSize = 28,
  speed = 1,
  amplitude = 8,
  color = "#ffffff",
  opacity = 0.14,
  className = "",
}: GridMotionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const opts = useMemo(
    () => ({ gridSize, speed, amplitude, color, opacity }),
    [gridSize, speed, amplitude, color, opacity],
  );

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
      ctx.clearRect(0, 0, w, h);

      const time = (t / 1000) * opts.speed;

      ctx.save();
      ctx.strokeStyle = opts.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, opts.opacity));
      ctx.lineWidth = 1;

      const step = Math.max(10, opts.gridSize);
      for (let y = 0; y <= h + step; y += step) {
        ctx.beginPath();
        for (let x = 0; x <= w + step; x += step) {
          const dx = Math.sin(time + x * 0.02 + y * 0.01) * opts.amplitude;
          const dy = Math.cos(time + y * 0.02 + x * 0.01) * opts.amplitude;
          if (x === 0) ctx.moveTo(x + dx, y + dy);
          else ctx.lineTo(x + dx, y + dy);
        }
        ctx.stroke();
      }

      for (let x = 0; x <= w + step; x += step) {
        ctx.beginPath();
        for (let y = 0; y <= h + step; y += step) {
          const dx = Math.sin(time + x * 0.02 + y * 0.01) * opts.amplitude;
          const dy = Math.cos(time + y * 0.02 + x * 0.01) * opts.amplitude;
          if (y === 0) ctx.moveTo(x + dx, y + dy);
          else ctx.lineTo(x + dx, y + dy);
        }
        ctx.stroke();
      }
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
    <div className={`rb-grid-motion ${className}`}>
      <canvas ref={canvasRef} className="rb-grid-motion__canvas" />
    </div>
  );
}
