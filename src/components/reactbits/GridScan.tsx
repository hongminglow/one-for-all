import { CSSProperties, useMemo } from "react";

import "./GridScan.css";

export interface GridScanProps {
  size?: number;
  opacity?: number;
  scanOpacity?: number;
  scanSpeed?: number;
  gridColor?: string;
  scanColor?: string;
  className?: string;
}

export default function GridScan({
  size = 44,
  opacity = 0.12,
  scanOpacity = 0.55,
  scanSpeed = 2.2,
  gridColor = "#ffffff",
  scanColor = "var(--sb-accent)",
  className = "",
}: GridScanProps) {
  const style = useMemo(() => {
    return {
      ["--rb-grid-size" as any]: `${size}px`,
      ["--rb-grid-opacity" as any]: opacity,
      ["--rb-grid-color" as any]: gridColor,
      ["--rb-scan-opacity" as any]: scanOpacity,
      ["--rb-scan-color" as any]: scanColor,
      ["--rb-scan-duration" as any]: `${Math.max(0.4, scanSpeed)}s`,
    } as CSSProperties;
  }, [size, opacity, gridColor, scanOpacity, scanColor, scanSpeed]);

  return <div className={`rb-grid-scan ${className}`} style={style} />;
}
