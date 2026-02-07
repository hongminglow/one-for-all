import { useEffect, useMemo, useRef } from "react";

import "./Galaxy.css";

export interface GalaxyProps {
  stars?: number;
  rotationSpeed?: number;
  colorA?: string;
  colorB?: string;
  className?: string;
}

type Star = { r: number; a: number; z: number; s: number };

export default function Galaxy({
  stars = 900,
  rotationSpeed = 0.25,
  colorA = "#ffffff",
  colorB = "var(--sb-accent)",
  className = "",
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const opts = useMemo(
    () => ({ stars, rotationSpeed, colorA, colorB }),
    [stars, rotationSpeed, colorA, colorB],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const starfield: Star[] = [];
    const init = () => {
      starfield.length = 0;
      const n = Math.max(200, opts.stars);
      for (let i = 0; i < n; i++) {
        starfield.push({
          r: Math.pow(Math.random(), 0.55),
          a: Math.random() * Math.PI * 2,
          z: Math.random(),
          s: 0.4 + Math.random() * 1.6,
        });
      }
    };

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

      ctx.clearRect(0, 0, w, h);

      const time = (t / 1000) * opts.rotationSpeed;

      // Soft vignette
      const g = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(w, h) * 0.7,
      );
      g.addColorStop(0, "rgba(255,255,255,0.05)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const s of starfield) {
        const arm = 2 + Math.floor(s.z * 3);
        const spiral = s.r * s.r * 4.6;
        const angle = s.a + time + arm * Math.PI * 2 * s.z;
        const rr = s.r * Math.min(cx, cy) * (0.15 + 0.85 * s.z);
        const x = cx + Math.cos(angle + spiral) * rr;
        const y = cy + Math.sin(angle + spiral) * rr;
        const alpha = 0.08 + 0.55 * s.z;

        const c = ctx.createRadialGradient(x, y, 0, x, y, 10 * s.s);
        c.addColorStop(
          0,
          `color-mix(in srgb, ${opts.colorB} 50%, ${opts.colorA})`,
        );
        c.addColorStop(0.5, `rgba(255,255,255,${alpha})`);
        c.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(x, y, 6 * s.s, 0, Math.PI * 2);
        ctx.fill();
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
    <div className={`rb-galaxy ${className}`}>
      <canvas ref={canvasRef} className="rb-galaxy__canvas" />
    </div>
  );
}
