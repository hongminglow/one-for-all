"use client";

import * as React from "react";

import { cn } from "@/lib/cn";
import "./AnimatedBeam.css";

export interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  pathWidth?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  className?: string;
}

export default function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 2,
  delay = 0,
  reverse = false,
  pathWidth = 2,
  gradientStartColor = "var(--sb-accent)",
  gradientStopColor = "var(--sb-accent-2)",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className,
}: AnimatedBeamProps) {
  const [pathD, setPathD] = React.useState("");
  const [svgDimensions, setSvgDimensions] = React.useState({
    width: 0,
    height: 0,
  });
  const uniqueId = React.useId();

  const updatePath = React.useCallback(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    const startX =
      fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
    const startY =
      fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
    const endX =
      toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
    const endY =
      toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    const dx = endX - startX;
    const dy = endY - startY;
    const controlX = midX - dy * curvature;
    const controlY = midY + dx * curvature;

    setPathD(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  React.useEffect(() => {
    updatePath();
    if (typeof window === "undefined") return;

    const ro = new ResizeObserver(updatePath);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updatePath);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [updatePath, containerRef]);

  return (
    <svg
      className={cn(
        "pointer-events-none absolute left-0 top-0 h-full w-full",
        className,
      )}
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`beam-gradient-${uniqueId}`}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="20%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="80%" stopColor={gradientStopColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={pathD}
        stroke="color-mix(in srgb, var(--sb-border-2) 70%, transparent)"
        strokeWidth={pathWidth}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={pathD}
        stroke={`url(#beam-gradient-${uniqueId})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: "22 1200",
          strokeDashoffset: reverse ? 0 : 1200,
          animation: `joly-beam-dash ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      />
    </svg>
  );
}
