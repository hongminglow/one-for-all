import { CSSProperties, useMemo } from "react";

import "./DotGrid.css";

export interface DotGridProps {
  spacing?: number;
  dotSize?: number;
  opacity?: number;
  dotColor?: string;
  className?: string;
}

export default function DotGrid({
  spacing = 22,
  dotSize = 2,
  opacity = 0.18,
  dotColor = "#ffffff",
  className = "",
}: DotGridProps) {
  const style = useMemo(() => {
    return {
      ["--rb-dot-spacing" as any]: `${spacing}px`,
      ["--rb-dot-size" as any]: `${dotSize}px`,
      ["--rb-dot-opacity" as any]: opacity,
      ["--rb-dot-color" as any]: dotColor,
    } as CSSProperties;
  }, [spacing, dotSize, opacity, dotColor]);

  return <div className={`rb-dot-grid ${className}`} style={style} />;
}
