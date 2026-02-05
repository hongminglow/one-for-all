"use client";

import { useMemo, useState, useEffect } from "react";

import type { ComponentItem } from "./components.generated";
import { STORYBOOK } from "./storybook-constants";
import {
  getDemoCode,
  renderDemo,
  getApiReference,
  getDemoControls,
  type DemoControl,
} from "./demos/demo-registry";

type TabKey = "preview" | "code";

export function ComponentDetails(props: { component: ComponentItem }) {
  const [tab, setTab] = useState<TabKey>("preview");
  const [controls, setControls] = useState<DemoControl[] | null>(null);
  const [controlValues, setControlValues] = useState<Record<string, any>>({});

  useEffect(() => {
    const defaultControls = getDemoControls(props.component);
    setControls(defaultControls);
    if (defaultControls) {
      const initialValues: Record<string, any> = {};
      defaultControls.forEach((c) => {
        initialValues[c.param] = c.defaultValue;
      });
      setControlValues(initialValues);
    } else {
      setControlValues({});
    }
  }, [props.component]);

  const handleControlChange = (param: string, value: any) => {
    setControlValues((prev) => ({ ...prev, [param]: value }));
  };

  const codeSnippet = useMemo(
    () => getDemoCode(props.component),
    [props.component],
  );
  const previewNode = useMemo(
    () => renderDemo(props.component, controlValues),
    [props.component, controlValues],
  );
  const apiReference = useMemo(
    () => getApiReference(props.component),
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
              <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden">
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

      {/* Customization Controls */}
      {controls && controls.length > 0 && (
        <section className="mt-6 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6">
          <div className="mb-4 text-[14px] font-black text-[var(--sb-text-strong)]">
            Customize
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <div key={control.param} className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[var(--sb-text-muted)]">
                  {control.label}
                </label>
                {control.type === "text" && (
                  <input
                    type="text"
                    value={controlValues[control.param] || ""}
                    onChange={(e) =>
                      handleControlChange(control.param, e.target.value)
                    }
                    className="h-9 rounded-lg border border-[var(--sb-border-2)] bg-[var(--sb-bg)] px-3 text-[13px] text-[var(--sb-text-strong)] focus:border-[var(--sb-accent)] focus:outline-none"
                  />
                )}
                {control.type === "number" && (
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={control.min}
                      max={control.max}
                      step={control.step || 1}
                      value={controlValues[control.param] || 0}
                      onChange={(e) =>
                        handleControlChange(
                          control.param,
                          parseFloat(e.target.value),
                        )
                      }
                      className="flex-1 accent-[var(--sb-accent)]"
                    />
                    <span className="w-12 text-right text-[12px] font-mono text-[var(--sb-text-muted)]">
                      {controlValues[control.param]}
                    </span>
                  </div>
                )}
                {control.type === "boolean" && (
                  <button
                    onClick={() =>
                      handleControlChange(
                        control.param,
                        !controlValues[control.param],
                      )
                    }
                    className={`h-9 w-full rounded-lg border text-[13px] font-bold transition-colors ${
                      controlValues[control.param]
                        ? "border-[var(--sb-accent)] bg-[var(--sb-accent)] text-white"
                        : "border-[var(--sb-border-2)] bg-[var(--sb-bg)] text-[var(--sb-text-muted)] hover:border-[var(--sb-border-1)]"
                    }`}
                  >
                    {controlValues[control.param] ? "Enabled" : "Disabled"}
                  </button>
                )}
                {control.type === "select" && (
                  <select
                    value={controlValues[control.param] || ""}
                    onChange={(e) =>
                      handleControlChange(control.param, e.target.value)
                    }
                    className="h-9 rounded-lg border border-[var(--sb-border-2)] bg-[var(--sb-bg)] px-3 text-[13px] text-[var(--sb-text-strong)] focus:border-[var(--sb-accent)] focus:outline-none"
                  >
                    {control.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                )}
                {control.type === "color" && (
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={controlValues[control.param] || "#000000"}
                      onChange={(e) =>
                        handleControlChange(control.param, e.target.value)
                      }
                      className="h-9 w-full cursor-pointer rounded-lg border border-[var(--sb-border-2)] bg-[var(--sb-bg)] p-1"
                    />
                    <span className="w-16 text-[12px] font-mono text-[var(--sb-text-muted)]">
                      {controlValues[control.param]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

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
      {apiReference && apiReference.length > 0 && (
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
                {apiReference.map((prop, i) => (
                  <tr
                    key={i}
                    className="border-b border-[var(--sb-border-1)] last:border-0"
                  >
                    <td className="py-3 font-mono text-[12px] font-semibold text-[var(--sb-code)]">
                      {prop.prop}
                    </td>
                    <td className="py-3 font-mono text-[12px] opacity-80">
                      {prop.type}
                    </td>
                    <td className="py-3 font-mono text-[12px] opacity-80">
                      {prop.default}
                    </td>
                    <td className="py-3 opacity-90">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
