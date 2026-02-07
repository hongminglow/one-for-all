import { useEffect, useMemo, useRef } from "react";

import "./Particles.css";

export interface ParticlesProps {
  count?: number;
  speed?: number;
  radius?: number;
  color?: string;
  linkDistance?: number;
  linkOpacity?: number;
  interactive?: boolean;
  className?: string;
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function Particles({
  count = 70,
  speed = 0.6,
  radius = 2,
  color = "#ffffff",
  linkDistance = 120,
  linkOpacity = 0.22,
  interactive = true,
  className = "",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const options = useMemo(
    () => ({
      count,
      speed,
      radius,
      color,
      linkDistance,
      linkOpacity,
      interactive,
    }),
    [count, speed, radius, color, linkDistance, linkOpacity, interactive],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.length = 0;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      for (let i = 0; i < Math.max(10, options.count); i++) {
        const angle = Math.random() * Math.PI * 2;
        const sp = (0.2 + Math.random() * 0.8) * options.speed;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * sp,
          vy: Math.sin(angle) * sp,
        });
      }
    };

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Update
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        if (options.interactive && pointerRef.current.active) {
          const dx = p.x - pointerRef.current.x;
          const dy = p.y - pointerRef.current.y;
          const d2 = dx * dx + dy * dy;
          const repelRadius = 130;
          if (d2 > 0 && d2 < repelRadius * repelRadius) {
            const d = Math.sqrt(d2);
            const f = (1 - d / repelRadius) * 0.06;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        // Gentle damping
        p.vx *= 0.995;
        p.vy *= 0.995;
      }

      // Links
      ctx.save();
      ctx.strokeStyle = options.color;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD = options.linkDistance;
          if (d2 < maxD * maxD) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / maxD) * options.linkOpacity;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Dots
      ctx.save();
      ctx.fillStyle = options.color;
      ctx.globalAlpha = 0.9;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, options.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    };

    const onLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    init();
    rafRef.current = window.requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [options]);

  return (
    <div className={`rb-particles ${className}`}>
      <canvas ref={canvasRef} className="rb-particles__canvas" />
    </div>
  );
}
