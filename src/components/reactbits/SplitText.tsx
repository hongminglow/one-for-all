import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (props: Record<string, unknown>) => Promise<void>) => {
            await next(animationTo as Record<string, unknown>);
            animatedCount.current += 1;
            if (
              animatedCount.current === letters.length &&
              onLetterAnimationComplete
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing: easing as string },
    })),
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        display: "inline",
        whiteSpace: "normal",
        wordBreak: "break-word",
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;

            return (
              <animated.span
                key={index}
                style={{
                  ...springs[index],
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: "inline-block" }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
