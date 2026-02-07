"use client";

import * as React from "react";

interface Icon {
  x: number;
  y: number;
  z: number;
  id: number;
}

export interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
  size?: number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function IconCloud({
  icons,
  images,
  size = 400,
}: IconCloudProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [iconPositions, setIconPositions] = React.useState<Icon[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const [lastMousePos, setLastMousePos] = React.useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = React.useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);

  const animationFrameRef = React.useRef<number>(0);
  const rotationRef = React.useRef({ x: 0, y: 0 });
  const iconCanvasesRef = React.useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = React.useRef<boolean[]>([]);

  React.useEffect(() => {
    const items = images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);
    const newIconCanvases = items.map((src, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");
      if (offCtx) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.beginPath();
          offCtx.arc(20, 20, 20, 0, Math.PI * 2);
          offCtx.closePath();
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 40, 40);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, [images]);

  React.useEffect(() => {
    const items = images || icons || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      newIcons.push({ x: x * 100, y: y * 100, z: z * 100, id: i });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const canvas = canvasRef.current;
    if (!rect || !canvas) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      const screenX = canvas.width / 2 + rotatedX;
      const screenY = canvas.height / 2 + rotatedY;
      const scale = (rotatedZ + 200) / 300;
      const radius = 20 * scale;

      const dx = x - screenX;
      const dy = y - screenY;
      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z),
        );
        const targetY = Math.atan2(icon.x, icon.z);
        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
        );
        const duration = Math.min(2000, Math.max(800, distance * 1000));
        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        });
      }
    });

    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    rotationRef.current = {
      x: rotationRef.current.x + deltaY * 0.002,
      y: rotationRef.current.y + deltaX * 0.002,
    };
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.003 + (distance / maxDistance) * 0.01;

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const eased = easeOutCubic(progress);
        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * eased,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * eased,
        };
        if (progress >= 1) setTargetRotation(null);
      } else if (!isDragging) {
        rotationRef.current = {
          x: rotationRef.current.x + (dy / canvas.height) * speed,
          y: rotationRef.current.y + (dx / canvas.width) * speed,
        };
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;
        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY,
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (
          images &&
          iconCanvasesRef.current[index] &&
          imagesLoadedRef.current[index]
        ) {
          ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 40, 40);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, 20, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "16px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, images, isDragging, mousePos, targetRotation]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img"
    />
  );
}
