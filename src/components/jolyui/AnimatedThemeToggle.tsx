"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";
import { getTheme } from "@/utils/theme";

export interface AnimatedThemeToggleProps {
  className?: string;
}

export default function AnimatedThemeToggle({
  className,
}: AnimatedThemeToggleProps) {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    setMounted(true);
    setTheme(getTheme());
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] text-[var(--sb-text-strong)]",
        "transition-colors hover:bg-[var(--sb-hover)]",
        className,
      )}
      aria-label={
        mounted
          ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
          : "Theme toggle"
      }
      disabled={!mounted}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={theme === "dark" ? "dark" : "light"}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            light: { scale: 1, opacity: 1 },
            dark: { scale: 0, opacity: 0 },
          }}
          transition={{ duration: 0.35 }}
        />
        <motion.path
          d="M21 12h-2M5 12H3M12 21v-2M12 5V3M19.07 19.07l-1.41-1.41M6.34 6.34 4.93 4.93M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            light: { opacity: 1 },
            dark: { opacity: 0 },
          }}
          transition={{ duration: 0.35 }}
        />
        <motion.path
          d="M21 14.5c-1.3 3.5-4.7 6-8.7 6C7 20.5 3 16.5 3 11.2c0-4 2.6-7.4 6.1-8.7 0.1 4.1 3.4 7.4 7.6 7.4 1.7 0 3.3-0.5 4.6-1.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            light: { opacity: 0, pathLength: 0 },
            dark: { opacity: 1, pathLength: 1 },
          }}
          transition={{ duration: 0.55 }}
        />
      </motion.svg>
    </button>
  );
}
