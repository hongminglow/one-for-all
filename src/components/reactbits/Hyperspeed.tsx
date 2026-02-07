import { useEffect, useMemo, useRef } from "react";

import "./Hyperspeed.css";

export interface HyperspeedProps {
  streaks?: number;
  speed?: number;
  color?: string;
  className?: string;
}

type Streak = { x: number; y: number; z: number };

export default function Hyperspeed({
  streaks = 260,
  speed = 1,
  color = "#ffffff",
  className = "",
}: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const opts = useMemo(
    () => ({ streaks, speed, color }),
    [streaks, speed, color],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Streak[] = [];

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      stars.length = 0;
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < Math.max(60, opts.streaks); i++) {
        stars.push({
          x: (Math.random() - 0.5) * rect.width,
          y: (Math.random() - 0.5) * rect.height,
          z: Math.random() * 1,
        });
      }
    };

    const draw = (t: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = opts.color;
      ctx.lineCap = "round";

      const sp = 0.012 * Math.max(0.1, opts.speed);
      const time = t * sp;

      for (const s of stars) {
        const px = s.x;
        const py = s.y;
        const pz = Math.max(0.02, s.z);

        // Move "towards" camera
        s.z -= 0.006 * opts.speed;
        if (s.z <= 0.02) {
          s.x = (Math.random() - 0.5) * w;
          s.y = (Math.random() - 0.5) * h;
          s.z = 1;
        }

        const k = 1 / pz;
        const x = px * k;
        const y = py * k;
        const len =
          (1.2 + 4.5 * (1 - pz)) * (0.6 + 0.4 * Math.sin(time + pz * 10));
        const alpha = Math.min(1, (1 - pz) * 0.85);

        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1 + (1 - pz) * 2.2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x * (1 + len * 0.03), y * (1 + len * 0.03));
        ctx.stroke();
      }

      ctx.restore();
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
    <div className={`rb-hyperspeed ${className}`}>
      <canvas ref={canvasRef} className="rb-hyperspeed__canvas" />
    </div>
  );
}
