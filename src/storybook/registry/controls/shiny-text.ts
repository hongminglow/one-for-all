import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "✨ Shiny Text Effect",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 2,
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      {
        type: "number",
        param: "delay",
        label: "Delay",
        defaultValue: 0,
        min: 0,
        max: 10,
        step: 0.1,
      },
      {
        type: "color",
        param: "color",
        label: "Base Color",
        defaultValue: "#b5b5b5",
      },
      {
        type: "color",
        param: "shineColor",
        label: "Shine Color",
        defaultValue: "#ffffff",
      },
      {
        type: "number",
        param: "spread",
        label: "Spread",
        defaultValue: 120,
        min: 0,
        max: 360,
        step: 1,
      },
      {
        type: "boolean",
        param: "disabled",
        label: "Disabled",
        defaultValue: false,
      },
    ];