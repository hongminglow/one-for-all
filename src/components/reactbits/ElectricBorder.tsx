import React, {
  useEffect,
  useRef,
  useCallback,
  CSSProperties,
  ReactNode,
} from "react";
import "./ElectricBorder.css";

interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback((x: number): number => {
    return (Math.sin(x * 12.9898) * 43758.5453) % 1;
  }, []);

  const noise2D = useCallback(
    (x: number, y: number): number => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;
      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);
      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);
      return (
        a * (1 - ux) * (1 - uy) +
        b * ux * (1 - uy) +
        c * (1 - ux) * uy +
        d * ux * uy
      );
    },
    [random],
  );

  const octavedNoise = useCallback(
    (
      x: number,
      octaves: number,
      lacunarity: number,
      gain: number,
      amplitude: number,
      frequency: number,
      time: number,
      seed: number,
      baseFlatness: number,
    ) => {
      let y = 0;
      let amp = amplitude;
      let freq = frequency;
      for (let i = 0; i < octaves; i++) {
        let octaveAmplitude = amp;
        if (i === 0) octaveAmplitude *= baseFlatness;
        y +=
          octaveAmplitude * noise2D(freq * x + seed * 100, time * freq * 0.3);
        freq *= lacunarity;
        amp *= gain;
      }
      return y;
    },
    [noise2D],
  );

  const getCornerPoint = useCallback(
    (
      centerX: number,
      centerY: number,
      radius: number,
      startAngle: number,
      arcLength: number,
      progress: number,
    ) => {
      const angle = startAngle + progress * arcLength;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    },
    [],
  );

  const getRoundedRectPoint = useCallback(
    (
      t: number,
      left: number,
      top: number,
      width: number,
      height: number,
      radius: number,
    ) => {
      const straightWidth = width - 2 * radius;
      const straightHeight = height - 2 * radius;
      const cornerArc = (Math.PI * radius) / 2;
      const totalPerimeter =
        2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
      const distance = t * totalPerimeter;
      let acc = 0;

      if (distance <= acc + straightWidth)
        return { x: left + radius + (distance - acc), y: top };
      acc += straightWidth;
      if (distance <= acc + cornerArc)
        return getCornerPoint(
          left + width - radius,
          top + radius,
          radius,
          -Math.PI / 2,
          Math.PI / 2,
          (distance - acc) / cornerArc,
        );
      acc += cornerArc;
      if (distance <= acc + straightHeight)
        return { x: left + width, y: top + radius + (distance - acc) };
      acc += straightHeight;
      if (distance <= acc + cornerArc)
        return getCornerPoint(
          left + width - radius,
          top + height - radius,
          radius,
          0,
          Math.PI / 2,
          (distance - acc) / cornerArc,
        );
      acc += cornerArc;
      if (distance <= acc + straightWidth)
        return { x: left + width - radius - (distance - acc), y: top + height };
      acc += straightWidth;
      if (distance <= acc + cornerArc)
        return getCornerPoint(
          left + radius,
          top + height - radius,
          radius,
          Math.PI / 2,
          Math.PI / 2,
          (distance - acc) / cornerArc,
        );
      acc += cornerArc;
      if (distance <= acc + straightHeight)
        return { x: left, y: top + height - radius - (distance - acc) };
      acc += straightHeight;
      return getCornerPoint(
        left + radius,
        top + radius,
        radius,
        Math.PI,
        Math.PI / 2,
        (distance - acc) / cornerArc,
      );
    },
    [getCornerPoint],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = (rect.width + 120) * dpr;
      canvas.height = (rect.height + 120) * dpr;
      canvas.style.width = `${rect.width + 120}px`;
      canvas.style.height = `${rect.height + 120}px`;
      ctx.scale(dpr, dpr);
      return { width: rect.width + 120, height: rect.height + 120 };
    };

    let { width, height } = updateSize();
    const draw = (currentTime: number) => {
      const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += deltaTime * speed;
      lastFrameTimeRef.current = currentTime;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(
        Math.min(window.devicePixelRatio || 1, 2),
        Math.min(window.devicePixelRatio || 1, 2),
      );
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      const left = 60,
        top = 60;
      const bW = width - 120,
        bH = height - 120;
      const r = Math.min(borderRadius, Math.min(bW, bH) / 2);
      const samples = Math.floor((2 * (bW + bH) + 2 * Math.PI * r) / 2);

      ctx.beginPath();
      for (let i = 0; i <= samples; i++) {
        const p = i / samples;
        const pt = getRoundedRectPoint(p, left, top, bW, bH, r);
        const xN = octavedNoise(
          p * 8,
          10,
          1.6,
          0.7,
          chaos,
          10,
          timeRef.current,
          0,
          0,
        );
        const yN = octavedNoise(
          p * 8,
          10,
          1.6,
          0.7,
          chaos,
          10,
          timeRef.current,
          1,
          0,
        );
        if (i === 0) ctx.moveTo(pt.x + xN * 60, pt.y + yN * 60);
        else ctx.lineTo(pt.x + xN * 60, pt.y + yN * 60);
      }
      ctx.closePath();
      ctx.stroke();
      animationRef.current = requestAnimationFrame(draw);
    };
    const observer = new ResizeObserver(() => {
      const sz = updateSize();
      width = sz.width;
      height = sz.height;
    });
    observer.observe(container);
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      observer.disconnect();
    };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className ?? ""}`}
      style={{ ...style, borderRadius }}
    >
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div className="eb-layers">
        <div
          className="eb-glow-1"
          style={{ borderColor: color, opacity: 0.6 }}
        />
        <div className="eb-glow-2" style={{ borderColor: color }} />
      </div>
      <div className="eb-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;
