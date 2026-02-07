import { useEffect, useMemo, useRef, useState } from "react";

import "./LetterGlitch.css";

export interface LetterGlitchProps {
  text?: string;
  speed?: number;
  glitchChance?: number;
  className?: string;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

export default function LetterGlitch({
  text = "LETTER GLITCH",
  speed = 22,
  glitchChance = 0.18,
  className = "",
}: LetterGlitchProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);

  const opts = useMemo(
    () => ({ text, speed, glitchChance }),
    [text, speed, glitchChance],
  );

  useEffect(() => {
    setDisplay(opts.text);
  }, [opts.text]);

  useEffect(() => {
    const tick = (t: number) => {
      const dt = t - lastRef.current;
      const interval = 1000 / Math.max(1, opts.speed);
      if (dt >= interval) {
        lastRef.current = t;
        setDisplay((prev) => {
          const base = opts.text;
          let out = "";
          for (let i = 0; i < base.length; i++) {
            const ch = base[i];
            if (ch === " ") {
              out += " ";
              continue;
            }
            if (Math.random() < opts.glitchChance) {
              out += DEFAULT_CHARS[(Math.random() * DEFAULT_CHARS.length) | 0];
            } else {
              out += ch;
            }
          }
          // reduce stable-state churn
          if (out === prev) return prev;
          return out;
        });
      }
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [opts]);

  return (
    <div className={`rb-letter-glitch ${className}`} aria-label={opts.text}>
      <div className="rb-letter-glitch__text">{display}</div>
    </div>
  );
}
