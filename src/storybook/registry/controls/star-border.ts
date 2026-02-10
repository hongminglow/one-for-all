import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      { type: "color", param: "color", label: "Color", defaultValue: "cyan" },
      { type: "text", param: "speed", label: "Speed", defaultValue: "6s" },
      {
        type: "number",
        param: "thickness",
        label: "Thickness",
        defaultValue: 1,
      },
    ];