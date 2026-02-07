"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface ExpandedMapProps {
  location?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
  tileProvider?: "openstreetmap" | "carto-light" | "carto-dark";
}

function latLngToTile(lat: number, lng: number, zoom: number) {
  const n = 2 ** zoom;
  const x = Math.floor(((lng + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n,
  );
  return { x, y };
}

function getTileUrl(provider: string, x: number, y: number, z: number) {
  switch (provider) {
    case "carto-light":
      return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
    case "carto-dark":
      return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}.png`;
    default:
      return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }
}

function formatCoordinates(lat: number, lng: number) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
}

export default function ExpandedMap({
  location = "San Francisco, CA",
  latitude = 37.7749,
  longitude = -122.4194,
  zoom = 14,
  tileProvider = "carto-light",
  className,
}: ExpandedMapProps) {
  const [expanded, setExpanded] = React.useState(false);
  const centerTile = React.useMemo(
    () => latLngToTile(latitude, longitude, zoom),
    [latitude, longitude, zoom],
  );
  const tiles = React.useMemo(() => {
    const out: Array<{ url: string; dx: number; dy: number }> = [];
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        out.push({
          url: getTileUrl(
            tileProvider,
            centerTile.x + dx,
            centerTile.y + dy,
            zoom,
          ),
          dx,
          dy,
        });
      }
    }
    return out;
  }, [tileProvider, centerTile, zoom]);

  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      className={cn(
        "relative select-none overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)]",
        "transition-[width,height,transform] duration-300",
        expanded ? "h-[280px] w-[360px]" : "h-[140px] w-[240px]",
        className,
      )}
      style={{ transform: expanded ? "translateZ(0)" : "translateZ(0)" }}
    >
      <div className="absolute inset-0">
        {expanded ? (
          <div className="absolute left-1/2 top-1/2 h-[768px] w-[768px] -translate-x-1/2 -translate-y-1/2">
            {tiles.map((t, idx) => (
              <img
                key={idx}
                src={t.url}
                alt=""
                className="absolute h-[256px] w-[256px]"
                style={{
                  left: `${(t.dx + 1) * 256}px`,
                  top: `${(t.dy + 1) * 256}px`,
                }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sb-accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--sb-accent)_30%,transparent)]" />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_30%,color-mix(in_srgb,var(--sb-accent)_35%,transparent),transparent_55%),radial-gradient(circle_at_75%_70%,color-mix(in_srgb,var(--sb-accent-2)_30%,transparent),transparent_60%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sb-bg)]/70 via-transparent to-transparent" />
      </div>
      <div className="relative flex h-full w-full flex-col justify-end p-3 text-left">
        <div className="text-[12px] font-black text-[var(--sb-text-strong)]">
          {location}
        </div>
        <div className="mt-0.5 text-[11px] font-semibold text-[var(--sb-text-muted)]">
          {formatCoordinates(latitude, longitude)}
        </div>
        <div className="mt-2 text-[11px] font-semibold text-[var(--sb-text-dim)]">
          Click to {expanded ? "collapse" : "expand"}
        </div>
      </div>
    </button>
  );
}
