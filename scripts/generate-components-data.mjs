import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "component-list.md");
const OUTPUT = path.join(ROOT, "src", "storybook", "components.generated.ts");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function toWords(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

const TAG_STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "or",
  "the",
  "of",
  "to",
  "in",
  "for",
  "with",
  "from",
  "on",
  "at",
  "by",
  "your",
  "web",
  "ui",
  "component",
  "components",
]);

function uniqLimit(values, limit = 8) {
  const out = [];
  const seen = new Set();
  for (const v of values) {
    if (!v) continue;
    if (TAG_STOPWORDS.has(v)) continue;
    if (v.length < 2) continue;
    if (seen.has(v)) continue;
    seen.add(v);
    out.push(v);
    if (out.length >= limit) break;
  }
  return out;
}

const TAG_OVERRIDES = {
  "electric-border": ["electric", "border", "card"],
  "sticker-peel": ["sticker", "peel", "drag"],
  dock: ["dock", "navigation", "toolbar"],
  calendar: ["calendar", "date", "picker"],
  "magic-card": ["card", "hover", "gradient"],
  "neon-gradient-card": ["card", "neon", "gradient"],
  "border-beam": ["border", "beam", "card"],
  "shine-border": ["border", "shine", "card"],
  "icon-cloud": ["icons", "cloud", "canvas"],
  "compact-confetti": ["confetti", "celebration", "canvas"],
};

function generateTags({ title, slug, url, library }) {
  const direct = TAG_OVERRIDES[slug];
  if (Array.isArray(direct) && direct.length) return direct;

  const words = [];

  // slug + title are the most useful
  words.push(...toWords(slug).flatMap((w) => w.split("-")));
  words.push(...toWords(title));

  // URL path/category hints
  try {
    const u = new URL(String(url || ""));
    const parts = u.pathname
      .split("/")
      .map((p) => p.trim())
      .filter(Boolean);
    words.push(...parts.flatMap((p) => toWords(p)));
  } catch {
    // ignore
  }

  // library hints (lets user type "magic" / "shadcn" etc)
  if (library) words.push(...toWords(library));

  // a few semantic enrichments
  if (slug.includes("button")) words.push("cta");
  if (slug.includes("menu") || slug.includes("nav")) words.push("navigation");
  if (slug.includes("background")) words.push("hero");
  if (slug.includes("cursor")) words.push("pointer");
  if (slug.includes("carousel")) words.push("slider");
  if (slug.includes("progress")) words.push("loading");

  return uniqLimit(words, 10);
}

function detectLibrary(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("reactbits.dev")) return "React-Bits";
    if (host.includes("shadcn.io")) return "shadcn";
    if (host.includes("jolyui.dev")) return "Joly UI";
    if (host.includes("animate-ui.com")) return "Animated UI";
    if (host.includes("magicui.design")) return "Magic UI";
    if (host.includes("ui.aceternity.com")) return "Aceternity UI";
    return host;
  } catch {
    return "Unknown";
  }
}

function describeComponent(titleRaw, urlRaw, library) {
  const title = String(titleRaw || "").trim();
  const url = String(urlRaw || "").toLowerCase();
  const t = title.toLowerCase();

  // High-signal name-based descriptions (common items)
  if (t === "gradient text") {
    return "Applies a multi-color gradient fill to text (great for headings).";
  }
  if (t === "split text") {
    return "Splits a heading into segments so you can animate parts independently.";
  }
  if (t === "circular text") {
    return "Renders text around a circle for badges, stamps, and hero accents.";
  }
  if (t === "shiny text") {
    return "Adds a moving highlight / shimmer effect across text.";
  }
  if (t.includes("typewriter")) {
    return "Types text character-by-character with a blinking cursor.";
  }
  if (t.includes("glitch")) {
    return "Creates a glitchy, distorted text effect for cyber/retro styles.";
  }
  if (t.includes("decrypted")) {
    return "Reveals text by cycling through random characters (decryption effect).";
  }
  if (t.includes("count up") || t.includes("counter")) {
    return "Animates a number from 0 to a target value (stats/metrics).";
  }
  if (t.includes("scroll reveal")) {
    return "Reveals content as it enters the viewport while scrolling.";
  }
  if (t.includes("scroll float")) {
    return "Gently offsets elements based on scroll position for depth.";
  }

  // URL-based category descriptions
  if (url.includes("/text-animations/") || url.includes("/text-animations")) {
    return `Animated text effect: ${title}.`;
  }
  if (url.includes("/background/") || url.includes("/backgrounds/")) {
    return `Animated background preset: ${title} (drop into a section/hero).`;
  }
  if (url.includes("/charts/") || url.includes("/charts")) {
    return `Chart component: ${title} (data visualization).`;
  }
  if (url.includes("/inputs/") || url.includes("/input")) {
    return `Input/form component: ${title}.`;
  }
  if (url.includes("/buttons/") || t.includes("button")) {
    return `Button/CTA component: ${title}.`;
  }
  if (url.includes("/navigation/") || t.includes("nav") || t.includes("menu")) {
    return `Navigation component: ${title}.`;
  }

  // Generic fallback: still user friendly.
  return `${title} — a UI component reference from ${library}.`;
}

function parseComponentLines(md) {
  const lines = md.split(/\r?\n/);
  const items = [];

  // Only parse the main numbered component list section.
  let inComponentSection = false;

  for (const line of lines) {
    if (line.trim().toLowerCase().startsWith("# here are the component list")) {
      inComponentSection = true;
      continue;
    }
    if (!inComponentSection) continue;

    const match = line.match(
      /^\s*(\d+)\.?\s*([^:]+)\s*:\s*(https?:\/\/\S+)\s*$/,
    );
    if (!match) continue;

    const order = Number(match[1]);
    const title = match[2].trim();
    const url = match[3].trim();
    const library = detectLibrary(url);

    items.push({
      order,
      title,
      slug: slugify(title) || `component-${order}`,
      library,
      url,
      description: describeComponent(title, url, library),
      tags: generateTags({ title, slug: slugify(title) || "", url, library }),
      apiReferenceUrl: null,
    });
  }

  return items;
}

function uniqueSlugs(items) {
  const used = new Map();
  for (const item of items) {
    const base = item.slug;
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    if (count > 0) item.slug = `${base}-${count + 1}`;
  }
  return items;
}

function toTs(items) {
  const header = `/* This file is auto-generated by scripts/generate-components-data.mjs */\n`;
  const types =
    `export type ComponentItem = {\n` +
    `  id: string;\n` +
    `  order: number;\n` +
    `  slug: string;\n` +
    `  title: string;\n` +
    `  description: string;\n` +
    `  tags: string[];\n` +
    `  library: string;\n` +
    `  url: string;\n` +
    `  apiReferenceUrl: string | null;\n` +
    `};\n\n`;

  const body = `export const COMPONENTS: ComponentItem[] = ${JSON.stringify(
    items.map((x) => ({
      id: `cmp_${x.order}`,
      order: x.order,
      slug: x.slug,
      title: x.title,
      description: x.description,
      tags: x.tags,
      library: x.library,
      url: x.url,
      apiReferenceUrl: x.apiReferenceUrl,
    })),
    null,
    2,
  )} as const;\n`;

  return header + types + body;
}

const md = await readFile(INPUT, "utf8");
const items = uniqueSlugs(parseComponentLines(md));

if (items.length === 0) {
  throw new Error("No components parsed. Check component-list.md format.");
}

await writeFile(OUTPUT, toTs(items), "utf8");
console.log(
  `Generated ${items.length} components → ${path.relative(ROOT, OUTPUT)}`,
);
