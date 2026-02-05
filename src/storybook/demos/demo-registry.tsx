"use client";

import { useEffect, useRef, useState } from "react";

import type { ComponentItem } from "../components.generated";
import SplitText from "../../components/reactbits/SplitText";

function GradientTextDemo(props: { label: string }) {
  return (
    <div className="text-[26px] font-black tracking-tight">
      <span className="bg-gradient-to-r from-[var(--sb-accent)] via-[#a78bfa] to-[var(--sb-accent-2)] bg-clip-text text-transparent">
        {props.label}
      </span>
    </div>
  );
}

function TypewriterDemo(props: { text: string }) {
  return (
    <div className="font-mono text-[15px] font-bold text-[var(--sb-text-strong)]">
      <span className="inline-block overflow-hidden whitespace-nowrap align-bottom [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">
        {props.text}
      </span>
    </div>
  );
}

function CountUpDemo(props: { to: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const durationMs = 900;
    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * props.to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [props.to]);

  return (
    <div className="text-[28px] font-black tracking-tight text-[var(--sb-text-strong)]">
      {value.toLocaleString()}
    </div>
  );
}

function GlitchTextDemo(props: { label: string }) {
  return (
    <div className="relative text-[26px] font-black tracking-tight text-[var(--sb-text-strong)]">
      <span className="relative inline-block [text-shadow:2px_0_0_rgba(139,92,246,0.7),-2px_0_0_rgba(99,102,241,0.6)] [animation:glitch_1.4s_infinite]">
        {props.label}
      </span>
    </div>
  );
}

function DecryptedTextDemo(props: { text: string }) {
  const [shown, setShown] = useState("".padEnd(props.text.length, "•"));
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i = Math.min(props.text.length, i + 1);
      const head = props.text.slice(0, i);
      const tail = Array.from({ length: props.text.length - i })
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
      setShown(head + tail);
      if (i >= props.text.length) window.clearInterval(id);
    }, 40);
    return () => window.clearInterval(id);
  }, [props.text]);

  return (
    <div className="font-mono text-[15px] font-bold text-[var(--sb-text-strong)]">
      {shown}
    </div>
  );
}

function SimpleCarouselDemo() {
  const items = ["One", "Two", "Three", "Four"];
  const [i, setI] = useState(0);
  const current = items[i] ?? items[0];

  return (
    <div className="w-full max-w-[520px]">
      <div className="rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] p-6">
        <div className="text-[18px] font-black text-[var(--sb-text-strong)]">
          {current}
        </div>
        <div className="mt-1 text-[12px] font-medium text-[var(--sb-text-muted)]">
          Minimal carousel demo
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
            className="h-10 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 text-[12px] font-black text-[var(--sb-text-strong)]"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setI((x) => (x + 1) % items.length)}
            className="h-10 rounded-xl bg-[var(--sb-accent)] px-4 text-[12px] font-black text-[var(--sb-on-accent)]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function BackgroundPanelDemo(props: { title: string }) {
  return (
    <div className="relative h-[160px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)]">
      <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.55),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(167,139,250,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-50 [background:linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.06))] [animation:bgshift_4.5s_linear_infinite]" />
      <div className="relative flex h-full items-end p-4">
        <div className="rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] px-3 py-2">
          <div className="text-[12px] font-black text-[var(--sb-text-strong)]">
            {props.title}
          </div>
          <div className="text-[11px] font-semibold text-[var(--sb-text-muted)]">
            Local background demo
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollRevealDemo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div className="h-[180px] w-full max-w-[520px] overflow-auto rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] p-4 sb-scroll">
      <div className="h-[120px]" />
      <div
        ref={ref}
        className={
          visible
            ? "rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-5 transition-all duration-300"
            : "translate-y-4 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-5 opacity-40 blur-[1px] transition-all duration-300"
        }
      >
        <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
          Revealed on scroll
        </div>
        <div className="mt-1 text-[12px] font-medium text-[var(--sb-text-muted)]">
          Scroll inside this panel to trigger
        </div>
      </div>
      <div className="h-[180px]" />
    </div>
  );
}

export function renderDemo(component: ComponentItem) {
  const title = component.title.toLowerCase();
  const slug = component.slug.toLowerCase();
  const url = component.url.toLowerCase();

  if (slug.includes("split-text") || title.includes("split text")) {
    return (
      <SplitText
        text="Elevate Your Web Experience"
        className="text-[32px] font-black text-center leading-tight text-[var(--sb-text-strong)]"
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
    );
  }

  if (slug.includes("gradient-text") || title.includes("gradient text")) {
    return <GradientTextDemo label={component.title} />;
  }
  if (title.includes("typewriter")) {
    return <TypewriterDemo text="Typewriter text demo" />;
  }
  if (
    title.includes("count up") ||
    title.includes("counter") ||
    title.includes("number counter")
  ) {
    return <CountUpDemo to={1250} />;
  }
  if (title.includes("glitch")) {
    return <GlitchTextDemo label={component.title} />;
  }
  if (title.includes("decrypted")) {
    return <DecryptedTextDemo text="DECRYPTED TEXT" />;
  }
  if (title.includes("carousel")) {
    return <SimpleCarouselDemo />;
  }
  if (
    slug.includes("scroll") ||
    title.includes("scroll") ||
    url.includes("scroll")
  ) {
    return <ScrollRevealDemo />;
  }
  if (url.includes("/background") || url.includes("/backgrounds")) {
    return <BackgroundPanelDemo title={component.title} />;
  }

  return (
    <div className="w-full">
      <div className="inline-flex items-center gap-3">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--sb-accent)]" />
        <div>
          <div className="text-[13px] font-extrabold text-[var(--sb-text-strong)]">
            {component.title}
          </div>
          <div className="text-[12px] font-medium text-[var(--sb-text-muted)]">
            Local demo preview
          </div>
        </div>
      </div>
    </div>
  );
}

export function getDemoCode(component: ComponentItem) {
  const title = component.title.toLowerCase();
  const slug = component.slug.toLowerCase();
  const url = component.url;

  if (slug.includes("split-text") || title.includes("split text")) {
    return [
      "import SplitText from './SplitText';",
      "",
      "<SplitText",
      '  text="Elevate Your Web Experience"',
      '  className="text-4xl font-black text-center"',
      "  delay={50}",
      "  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}",
      "  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}",
      '  easing="easeOutCubic"',
      "  threshold={0.2}",
      '  rootMargin="-50px"',
      "/>",
    ].join("\\n");
  }

  if (slug.includes("gradient-text") || title.includes("gradient text")) {
    return [
      "// Gradient text (local demo)",
      "export function GradientTextDemo({ label }: { label: string }) {",
      "  return (",
      '    <span className="bg-gradient-to-r from-[var(--sb-accent)] via-[#a78bfa] to-[var(--sb-accent-2)] bg-clip-text text-transparent">',
      "      {label}",
      "    </span>",
      "  );",
      "}",
    ].join("\n");
  }

  if (title.includes("typewriter")) {
    return [
      "// Typewriter text (local demo)",
      "export function TypewriterDemo({ text }: { text: string }) {",
      "  return (",
      '    <span className="inline-block overflow-hidden whitespace-nowrap [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">',
      "      {text}",
      "    </span>",
      "  );",
      "}",
    ].join("\n");
  }

  if (
    title.includes("count up") ||
    title.includes("counter") ||
    title.includes("number counter")
  ) {
    return [
      "// Count up (local demo)",
      "// Uses requestAnimationFrame to animate 0 → target.",
      "const durationMs = 900;",
      "requestAnimationFrame(function tick(t) { /* ... */ });",
    ].join("\n");
  }

  if (title.includes("carousel")) {
    return [
      "// Minimal carousel (local demo)",
      "const items = ['One', 'Two', 'Three', 'Four'];",
      "const [index, setIndex] = useState(0);",
      "<button onClick={() => setIndex((i) => (i + 1) % items.length)}>Next</button>",
    ].join("\n");
  }

  if (slug.includes("scroll") || title.includes("scroll")) {
    return [
      "// Scroll reveal (local demo)",
      "// Uses IntersectionObserver to toggle visibility.",
      "const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting));",
      "io.observe(node);",
    ].join("\n");
  }

  if (
    component.url.toLowerCase().includes("/background") ||
    component.url.toLowerCase().includes("/backgrounds")
  ) {
    return [
      "// Background panel (local demo)",
      '<div className="[background:radial-gradient(...),radial-gradient(...)]" />',
    ].join("\n");
  }

  return [
    "// Generic local demo",
    `// Upstream docs: ${url}`,
    "export function Demo() {",
    "  return <div>Local demo preview</div>;",
    "}",
  ].join("\n");
}
