"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LocationMapProps {
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
  className,
  tileProvider = "carto-light",
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilesLoaded, setTilesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const coordinates = useMemo(
    () => formatCoordinates(latitude, longitude),
    [latitude, longitude],
  );

  const tiles = useMemo(() => {
    const centerTile = latLngToTile(latitude, longitude, zoom);
    const tileUrls: { url: string; offsetX: number; offsetY: number }[] = [];

    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        tileUrls.push({
          url: getTileUrl(
            tileProvider,
            centerTile.x + dx,
            centerTile.y + dy,
            zoom,
          ),
          offsetX: dx,
          offsetY: dy,
        });
      }
    }

    return tileUrls;
  }, [latitude, longitude, zoom, tileProvider]);

  useEffect(() => {
    let loadedCount = 0;
    const totalTiles = tiles.length;

    tiles.forEach((tile) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalTiles) {
          setTilesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalTiles) {
          setTilesLoaded(true);
        }
      };
      img.src = tile.url;
    });
  }, [tiles]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative cursor-pointer select-none", className)}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 360 : 240,
          height: isExpanded ? 280 : 140,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute"
                  style={{
                    width: "768px",
                    height: "768px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {tiles.map((tile, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        width: "256px",
                        height: "256px",
                        left: `${(tile.offsetX + 1) * 256}px`,
                        top: `${(tile.offsetY + 1) * 256}px`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: tilesLoaded ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <img
                        src={tile.url}
                        alt=""
                        className="h-full w-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {!tilesLoaded && (
                <div className="absolute inset-0 animate-pulse bg-muted" />
              )}

              <motion.div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-lg bg-primary/40 animate-pulse rounded-full" />
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      fill="hsl(var(--primary))"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      fill="hsl(var(--background))"
                    />
                  </svg>
                </div>
              </motion.div>

              <div className="absolute inset-0 z-10 bg-linear-to-t from-background via-transparent to-transparent opacity-70" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ opacity: isExpanded ? 0 : 0.03 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </motion.div>

        <div className="relative z-20 flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-between">
            <motion.div
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </svg>
            </motion.div>
          </div>

          <div className="space-y-1">
            <motion.h3
              className="font-bold text-foreground text-sm tracking-tight"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="font-mono text-muted-foreground text-[10px]"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div
              className="h-0.5 bg-linear-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
