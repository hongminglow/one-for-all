"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { COMPONENTS } from "@/storybook/components";
import { STORYBOOK } from "@/storybook/storybook-constants";
import { scoreMatch } from "@/storybook/fuzzy";

export function SearchModal(props: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!props.open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [props.open]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return COMPONENTS.slice(0, 12);

    return COMPONENTS.map((item) => {
      const scoreTitle = scoreMatch(q, item.title);
      const scoreDesc = scoreMatch(q, item.description);
      const score = Math.max(scoreTitle, scoreDesc);
      return { item, score };
    })
      .filter((x) => x.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((x) => x.item);
  }, [query]);

  if (!props.open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search components"
      className="fixed inset-0 z-50"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60"
        onClick={() => props.onOpenChange(false)}
      />

      <div className="absolute left-1/2 top-24 w-[min(720px,calc(100vw-32px))] -translate-x-1/2 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-3 border-b border-[var(--sb-border)] px-5 py-4">
          <span className="inline-flex h-[14px] w-[14px] rounded-full bg-[var(--sb-icon)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={STORYBOOK.search.placeholder}
            className="h-8 w-full bg-transparent text-[14px] font-semibold text-[var(--sb-text-strong)] outline-none placeholder:text-[var(--sb-text-muted)]"
          />
          <kbd className="rounded-md border border-[var(--sb-border-2)] bg-[var(--sb-bg)] px-2 py-1 text-[11px] font-bold text-[var(--sb-text-strong)]">
            Esc
          </kbd>
        </div>

        <div className="max-h-[420px] overflow-auto p-2">
          {results.length === 0 ? (
            <div className="px-4 py-10 text-center text-[13px] font-medium text-[var(--sb-text-muted)]">
              No results
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <Link
                  key={item.id}
                  href={`/components/${item.slug}`}
                  onClick={() => props.onOpenChange(false)}
                  className="block rounded-xl px-4 py-3 hover:bg-[var(--sb-hover)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[13px] font-extrabold text-[var(--sb-text-strong)]">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-[12px] font-medium text-[var(--sb-text-muted)]">
                        {item.description}
                      </div>
                    </div>
                    <div className="text-[11px] font-bold text-[var(--sb-text-dim)]">
                      {item.library}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--sb-border)] px-5 py-3 text-[12px] font-medium text-[var(--sb-text-muted)]">
          <div>
            Tip: press{" "}
            <span className="font-bold text-[var(--sb-text-strong)]">Ctrl</span>{" "}
            + <span className="font-bold text-[var(--sb-text-strong)]">K</span>
          </div>
          <div>
            Search matches title + description (supports partial & fuzzy)
          </div>
        </div>
      </div>
    </div>
  );
}
