import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "color",
        param: "highlightColor",
        label: "Highlight Color",
        defaultValue: "#ff3333",
      },
      {
        type: "text",
        param: "filename",
        label: "Filename",
        defaultValue: "example.ts",
      },
    ];