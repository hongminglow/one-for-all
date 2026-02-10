import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "owner",
        label: "Owner",
        defaultValue: "vercel",
      },
      {
        type: "text",
        param: "repo",
        label: "Repo",
        defaultValue: "next.js",
      },
      {
        type: "number",
        param: "stars",
        label: "Stars override (0=fetch)",
        defaultValue: 0,
        min: 0,
        max: 200000,
        step: 1000,
      },
    ];