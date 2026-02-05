export type ThemeMode = "dark" | "light";

const STORAGE_KEY = "ofa-theme";

export function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(mode: ThemeMode) {
  document.documentElement.dataset.theme = mode;
  window.localStorage.setItem(STORAGE_KEY, mode);
}
