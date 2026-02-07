"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface GitHubStarButtonProps {
  owner: string;
  repo: string;
  stars?: number;
  className?: string;
}

function formatNumber(num: number): string {
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return num.toLocaleString();
}

export default function GitHubStarButton({
  owner,
  repo,
  stars,
  className,
}: GitHubStarButtonProps) {
  const [count, setCount] = React.useState<number>(stars ?? 0);
  const [loading, setLoading] = React.useState(stars === undefined);
  const [starred, setStarred] = React.useState(false);

  React.useEffect(() => {
    if (stars !== undefined) {
      setCount(stars);
      setLoading(false);
      return;
    }

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((r) => r.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setCount(data.stargazers_count);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [owner, repo, stars]);

  const repoUrl = `https://github.com/${owner}/${repo}`;

  return (
    <motion.a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] px-4 py-3",
        "text-[var(--sb-text-strong)] no-underline",
        className,
      )}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      onClick={(e) => {
        if (starred) return;
        e.preventDefault();
        setStarred(true);
        setCount((c) => c + 1);
        window.setTimeout(() => window.open(repoUrl, "_blank"), 500);
      }}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-xl",
          "bg-[var(--sb-selected)]",
        )}
      >
        ★
      </span>
      <div className="flex flex-col">
        <div className="text-[12px] font-black leading-none">
          Star {owner}/{repo}
        </div>
        <div className="mt-1 text-[12px] font-semibold text-[var(--sb-text-muted)]">
          {loading ? "Loading…" : `${formatNumber(count)} stars`}
        </div>
      </div>
    </motion.a>
  );
}
