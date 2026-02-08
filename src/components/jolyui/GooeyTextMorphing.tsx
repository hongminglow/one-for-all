"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GooeyTextMorphingProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export default function GooeyTextMorphing({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextMorphingProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationId: number;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        // text2 (appearing)
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${fraction ** 0.4 * 100}%`;

        // text1 (disappearing)
        const invFraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / invFraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${invFraction ** 0.4 * 100}%`;
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const doCooldown = () => {
      morph = 0;

      if (text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
      }

      if (text1Ref.current) {
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent =
              texts[(textIndex + 1) % texts.length];
          }
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center py-20",
        className,
      )}
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex h-full w-full items-center justify-center text-center outline-none"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-4xl font-black md:text-6xl lg:text-8xl",
            textClassName,
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-4xl font-black md:text-6xl lg:text-8xl",
            textClassName,
          )}
        />
      </div>
    </div>
  );
}
