"use client";

import { useMemo, useState } from "react";

import type { ComponentItem } from "./components.generated";
import { STORYBOOK } from "./storybook-constants";
import { getDemoCode, renderDemo } from "./demos/demo-registry";

type TabKey = "preview" | "code";

export function ComponentDetails(props: { component: ComponentItem }) {
  const [tab, setTab] = useState<TabKey>("preview");

  const codeSnippet = useMemo(
    () => getDemoCode(props.component),
    [props.component],
  );
  const previewNode = useMemo(
    () => renderDemo(props.component),
    [props.component],
  );

  const [copied, setCopied] = useState(false);
  const installText = STORYBOOK.demo.installCommand(props.component);

  return (
    <div>
      <h1 className="text-[28px] font-black tracking-tight text-[var(--sb-text-strong)]">
        {props.component.title}
      </h1>
      <p className="mt-1 text-[14px] font-medium text-[var(--sb-text-muted)]">
        {props.component.description}
      </p>

      {/* Preview / Code */}
      <section className="mt-10 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)]">
        <div className="px-6 pt-6">
          <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
            {STORYBOOK.componentPage.previewTitle}
          </div>
          <div className="mt-3 inline-flex overflow-hidden rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)]">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={
                tab === "preview"
                  ? "h-8 rounded-lg bg-[var(--sb-selected)] px-4 text-[13px] font-extrabold text-[var(--sb-text-strong)] transition-colors"
                  : "h-8 px-4 text-[13px] font-bold text-[var(--sb-text-muted)] hover:text-[var(--sb-text-strong)] transition-colors"
              }
            >
              {STORYBOOK.componentPage.tabs.preview}
            </button>
            <button
              type="button"
              onClick={() => setTab("code")}
              className={
                tab === "code"
                  ? "h-8 rounded-lg bg-[var(--sb-selected)] px-4 text-[13px] font-extrabold text-[var(--sb-text-strong)] transition-colors"
                  : "h-8 px-4 text-[13px] font-bold text-[var(--sb-text-muted)] hover:text-[var(--sb-text-strong)] transition-colors"
              }
            >
              {STORYBOOK.componentPage.tabs.code}
            </button>
          </div>
        </div>

        <div className="px-6 pb-6 pt-4">
          <div className="rounded-[16px] border border-[var(--sb-border-2)] bg-[var(--sb-panel)] p-6">
            {tab === "preview" ? (
              <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden">
                <div className="w-full text-center">{previewNode}</div>
              </div>
            ) : tab === "code" ? (
              <pre className="sb-scroll max-h-[520px] overflow-auto whitespace-pre text-[12px] font-semibold leading-5 text-[var(--sb-code)]">
                {codeSnippet}
              </pre>
            ) : (
              <div>
                <div className="mb-3 text-[12px] font-bold text-[var(--sb-text-muted)]">
                  Embedded docs (if the site allows iframes)
                </div>
                <div className="sb-scroll h-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)]">
                  <iframe
                    title={`${props.component.title} docs`}
                    src={props.component.url}
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-3 text-[12px] font-medium text-[var(--sb-text-muted)]">
                  If the embed is blank, the docs site is blocking iframes. Use
                  the “Open docs” button.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="mt-5 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6">
        <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
          {STORYBOOK.componentPage.installTitle}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-panel)] px-4 py-3">
            <div className="text-[12px] font-bold text-[var(--sb-code)]">
              {installText}
            </div>
          </div>

          <button
            type="button"
            onClick={async () => {
              const text = installText;
              try {
                await navigator.clipboard.writeText(text);
              } catch {
                const ta = document.createElement("textarea");
                ta.value = text;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
              }
              setCopied(true);
              window.setTimeout(() => setCopied(false), 900);
            }}
            className="h-11 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-5 text-[12px] font-black text-[var(--sb-text-strong)]"
          >
            <span className="inline-flex items-center gap-2">
              {copied ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

          <a
            href={props.component.url}
            target="_blank"
            rel="noreferrer"
            className="h-11 rounded-xl bg-[var(--sb-accent)] px-5 text-center text-[12px] font-black leading-[44px] text-[var(--sb-on-accent)]"
          >
            Open docs
          </a>
        </div>

        <div className="mt-3 text-[12px] font-medium text-[var(--sb-text-muted)]">
          {STORYBOOK.componentPage.installHint}
        </div>
      </section>

      {/* API Reference */}
      <section className="mt-10 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6">
        <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
          API Reference
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-[var(--sb-border-2)]">
                <th className="pb-2 font-bold text-[var(--sb-text-strong)]">
                  Prop
                </th>
                <th className="pb-2 font-bold text-[var(--sb-text-strong)]">
                  Type
                </th>
                <th className="pb-2 font-bold text-[var(--sb-text-strong)]">
                  Default
                </th>
                <th className="pb-2 font-bold text-[var(--sb-text-strong)]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-[var(--sb-text-muted)]">
              {/* This table body should ideally be populated dynamically.
                   For now, it acts as a placeholder or we can hardcode for known components if needed.
                   Since we don't have a centralized prop definition system yet, we will show a generic message or just the header.
               */}
              <tr>
                <td colSpan={4} className="py-4 text-center italic opacity-60">
                  Refer to the component source code or official documentation
                  for detailed API usage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
