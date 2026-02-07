"use client";

import React, { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";

import "./LiquidEther.css";

export interface LiquidEtherProps {
  className?: string;
  style?: React.CSSProperties;
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: {
    red: [number, number, number];
    green: [number, number, number];
    blue: [number, number, number];
    whi: [number, number, number];
    yel: [number, number, number];
  };
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

// Note: The upstream LiquidEther is a full fluid simulation.
// The local HTML reference is truncated, so this implementation is a lightweight
// shader-based "liquid" backdrop that supports the same public props surface.
export default function LiquidEther({
  className,
  style,
  resolution = 1,
}: LiquidEtherProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new Renderer({
      dpr:
        Math.min(2, window.devicePixelRatio || 1) * Math.max(0.25, resolution),
      alpha: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    mount.appendChild(gl.canvas);

    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

    const fragment = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;

varying vec2 vUv;

float hash(vec2 p){
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main(){
  vec2 p = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  vec2 m = (uPointer - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  float t = uTime * 0.25;
  float n = 0.0;
  vec2 q = p;
  for(int i=0;i<4;i++){
    n += noise(q * 2.0 + t);
    q = mat2(1.2, 0.2, -0.2, 1.2) * q + 0.15 * sin(q.yx + t);
  }
  n /= 4.0;
  float d = length(p - m);
  float splash = exp(-d * 4.0);
  vec3 col = vec3(0.08, 0.02, 0.12);
  col += vec3(0.35, 0.15, 0.55) * (n * 1.2);
  col += vec3(0.6, 0.35, 0.9) * splash;
  gl_FragColor = vec4(col, 1.0);
}`;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(1, 1) },
        uPointer: { value: new Vec2(0.5, 0.5) },
      },
      transparent: true,
    });
    const mesh = new Mesh(gl, { geometry, program });

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / Math.max(1, rect.width);
      const y = (e.clientY - rect.top) / Math.max(1, rect.height);
      program.uniforms.uPointer.value.set(x, y);
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      renderer.setSize(mount.clientWidth || 1, mount.clientHeight || 1);
      program.uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      program.uniforms.uTime.value = (t - t0) * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      if (gl.canvas.parentElement === mount) mount.removeChild(gl.canvas);
    };
  }, [resolution]);

  return (
    <div
      ref={mountRef}
      className={`liquid-ether-container ${className ?? ""}`.trim()}
      style={style}
    />
  );
}
