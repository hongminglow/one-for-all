/**
 * Fetches official doc pages from component-list.md and extracts
 * Installation, Code, and API (Props) into component-docs.generated.ts.
 * No custom components — we only store what the official docs provide.
 *
 * Run: node scripts/fetch-component-docs.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "component-list.md");
const OUTPUT = path.join(ROOT, "src", "storybook", "component-docs.generated.ts");

const FETCH_DELAY_MS = 800;
const REQUEST_TIMEOUT_MS = 15000;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function parseComponentList(md) {
  const lines = md.split(/\r?\n/);
  const items = [];
  let inSection = false;

  for (const line of lines) {
    if (line.trim().toLowerCase().startsWith("# here are the component list")) {
      inSection = true;
      continue;
    }
    if (!inSection) continue;

    const match = line.match(/^\s*(\d+)\.?\s*([^:]+)\s*:\s*(https?:\/\/\S+)\s*$/);
    if (!match) continue;

    const order = Number(match[1]);
    const title = match[2].trim();
    const url = match[3].trim();
    items.push({
      order,
      title,
      slug: slugify(title) || `component-${order}`,
      url,
    });
  }

  // Dedupe slugs
  const used = new Map();
  for (const item of items) {
    const base = item.slug;
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    if (count > 0) item.slug = `${base}-${count + 1}`;
  }

  return items;
}

/** Strip HTML tags and decode common entities for plain-text parsing */
function htmlToText(html) {
  if (!html || typeof html !== "string") return "";
  let text = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x3C;/g, "<")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
  return text;
}

/** Extract first code block from pre/code or markdown ``` */
function extractCode(html) {
  // <pre><code>...</code></pre> or data in JSON
  const preMatch = html.match(/<pre[^>]*>[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/i);
  if (preMatch) {
    const raw = preMatch[1]
      .replace(/&#x3C;/g, "<")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .trim();
    if (raw.length > 50) return raw;
  }

  // Markdown-style ``` in converted text (from MCP-style markdown we don't have in raw HTML, but some SSG sites emit it)
  const mdBlock = html.match(/```(?:[\w]*)\n?([\s\S]*?)```/);
  if (mdBlock && mdBlock[1].trim().length > 30) return mdBlock[1].trim();

  return null;
}

/** Find Installation section: next paragraph or code block after "Installation" */
function extractInstall(text, html) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf("installation");
  if (idx === -1) return null;
  const after = text.slice(idx + "installation".length).trim();
  const lines = after.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const firstLine = lines[0] || "";
  if (firstLine.startsWith("pnpm") || firstLine.startsWith("npm") || firstLine.startsWith("yarn") || firstLine.startsWith("bun") || firstLine.startsWith("npx")) {
    return firstLine;
  }
  if (firstLine.includes("shadcn") || firstLine.includes("add ")) {
    return firstLine;
  }
  const cliMatch = html.match(/pnpm\s+dlx\s+shadcn[^\s`"']*(?:\s+[^\s`"']+)?/);
  if (cliMatch) return cliMatch[0].trim();
  const npmMatch = html.match(/(?:npm|npx|yarn|pnpm|bun)\s+[^\s<`"]+/);
  if (npmMatch) return npmMatch[0].trim();
  return null;
}

/** Parse markdown-style table: | Prop | Type | Default | Description | */
function parsePropsTable(text) {
  const rows = text.split(/\n/).filter((line) => line.includes("|"));
  const api = [];
  let headerDone = false;
  const sep = /\|\s*[-]+\s*\|/;
  for (const line of rows) {
    if (sep.test(line)) {
      headerDone = true;
      continue;
    }
    if (!headerDone) continue;
    const cells = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cells.length >= 3) {
      const prop = cells[0]?.replace(/\s+/g, " ") || "";
      const type = cells[1]?.replace(/\s+/g, " ") || "";
      const defaultVal = cells[2]?.replace(/\s+/g, " ") || "-";
      const description = cells[3]?.replace(/\s+/g, " ") || "";
      if (prop && !prop.toLowerCase().startsWith("property") && !prop.toLowerCase().startsWith("prop")) {
        api.push({ prop, type, default: defaultVal, description });
      }
    }
  }
  return api.length ? api : null;
}

/** Find Props/API section and parse table from text */
function extractApi(text) {
  const lower = text.toLowerCase();
  const markers = ["## props", "### props", "## api", "|property|", "|prop|"];
  let start = -1;
  for (const m of markers) {
    const i = lower.indexOf(m);
    if (i !== -1 && (start === -1 || i < start)) start = i;
  }
  if (start === -1) return null;
  const section = text.slice(start, start + 8000);
  return parsePropsTable(section);
}

/** Customize section: optional hint (we just store "See official docs" or first line) */
function extractCustomize(text) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf("customize");
  if (idx === -1) return null;
  const after = text.slice(idx + "customize".length, idx + 500).trim();
  const firstLine = after.split(/\n/)[0]?.trim();
  return firstLine && firstLine.length < 200 ? firstLine : null;
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OneForAllStorybook/1.0; +https://github.com/one-for-all)",
      },
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

function parseFetchedPage(html, slug) {
  const text = htmlToText(html);
  const code = extractCode(html);
  const install = extractInstall(text, html);
  const api = extractApi(text);
  const customizeHint = extractCustomize(text);

  const out = {};
  if (install) out.install = install;
  if (code) out.code = code;
  if (api && api.length) out.api = api;
  if (customizeHint) out.customizeHint = customizeHint;
  return Object.keys(out).length ? out : null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// --- main
const md = await readFile(INPUT, "utf8");
const items = parseComponentList(md);
if (items.length === 0) {
  throw new Error("No components parsed from component-list.md");
}

const limit = process.env.LIMIT ? Math.max(1, parseInt(process.env.LIMIT, 10)) : items.length;
const toProcess = items.slice(0, limit);
if (limit < items.length) {
  console.log(`Processing first ${limit} of ${items.length} components (set LIMIT=158 for all).\n`);
}

const docs = {};
let ok = 0;
let fail = 0;

function writeOutput() {
  const typeDef = `export type ComponentDoc = {
  install?: string;
  code?: string;
  api?: { prop: string; type: string; default: string; description: string }[];
  customizeHint?: string;
  _source?: string;
};
`;
  const body = `export const COMPONENT_DOCS: Partial<Record<string, ComponentDoc>> = ${JSON.stringify(docs, null, 2)} as const;
`;
  const header = `/* This file is auto-generated by scripts/fetch-component-docs.mjs. Do not edit by hand. */\n\n`;
  return header + typeDef + "\n" + body;
}

for (let i = 0; i < toProcess.length; i++) {
  const { slug, title, url } = toProcess[i];
  process.stdout.write(`[${i + 1}/${toProcess.length}] ${slug} ... `);
  try {
    const html = await fetchWithTimeout(url);
    if (html) {
      const parsed = parseFetchedPage(html, slug);
      if (parsed) {
        docs[slug] = parsed;
        ok++;
        console.log("ok");
      } else {
        docs[slug] = { _source: url };
        console.log("(no sections)");
      }
    } else {
      fail++;
      console.log("fetch failed");
    }
  } catch (e) {
    fail++;
    console.log("error:", e.message);
  }
  await sleep(FETCH_DELAY_MS);
  // Write after each fetch so partial progress is saved (e.g. on timeout or Ctrl+C)
  await writeFile(OUTPUT, writeOutput(), "utf8");
}

console.log(`\nDone. ${ok} with content, ${fail} failed → ${path.relative(ROOT, OUTPUT)}`);
