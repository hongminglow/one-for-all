"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  className?: string;
  children: string;
  duration?: number;
  delay?: number;
  loop?: boolean;
  separator?: string;
  together?: boolean;
}

export function FlipText({
  className,
  children,
  duration = 2.2,
  delay = 0,
  loop = true,
  separator = " ",
  together = false,
}: FlipTextProps) {
  const words = useMemo(() => children.split(separator), [children, separator]);
  const totalChars = children.length;

  const getCharIndex = (wordIndex: number, charIndex: number) => {
    let index = 0;
    for (let i = 0; i < wordIndex; i++) {
      index += words[i].length + (separator === " " ? 1 : separator.length);
    }
    return index + charIndex;
  };

  return (
    <>
      <style jsx>{`
        .flip-char {
          color: inherit;
          -webkit-text-fill-color: transparent;
          height: 1.2em;
          line-height: 1.2em;
          vertical-align: middle;
          animation: flip var(--flip-duration, 2.2s) var(--flip-delay, 0s)
            var(--flip-iteration, infinite) ease;
        }

        .flip-char::before,
        .flip-char::after {
          color: inherit;
          -webkit-text-fill-color: currentColor;
          content: attr(data-char);
          position: absolute;
          top: 50%;
          left: 50%;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
        }

        .flip-char::after {
          transform: translate(-50%, -50%) translateZ(0.6em);
        }

        .flip-char::before {
          transform: translate(-50%, -50%) rotateX(-90deg) translateZ(0.6em);
          opacity: 0;
        }

        @keyframes flip {
          0%,
          10% {
            transform: rotateX(0deg);
          }
          40%,
          60% {
            transform: rotateX(90deg);
          }
          90%,
          100% {
            transform: rotateX(0deg);
          }
        }
      `}</style>
      <div
        className={cn("flip-text-wrapper inline-block leading-none", className)}
        style={{ perspective: "1000px" }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="word inline-block whitespace-nowrap"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word.split("").map((char, charIndex) => {
              const currentGlobalIndex = getCharIndex(wordIndex, charIndex);
              let calculatedDelay = delay;
              if (!together) {
                const normalizedIndex = currentGlobalIndex / totalChars;
                const sineValue = Math.sin(normalizedIndex * (Math.PI / 2));
                calculatedDelay = sineValue * (duration * 0.25) + delay;
              }

              return (
                <span
                  key={charIndex}
                  className="flip-char inline-block relative"
                  data-char={char}
                  style={
                    {
                      "--flip-duration": `${duration}s`,
                      "--flip-delay": `${calculatedDelay}s`,
                      "--flip-iteration": loop ? "infinite" : "1",
                      transformStyle: "preserve-3d",
                    } as React.CSSProperties
                  }
                >
                  {char}
                </span>
              );
            })}
            {separator === " " && wordIndex < words.length - 1 && (
              <span className="whitespace inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </div>
    </>
  );
}

export default FlipText;
