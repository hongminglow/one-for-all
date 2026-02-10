import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "LETTER GLITCH",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 22,
        min: 1,
        max: 60,
        step: 1,
      },
      {
        type: "number",
        param: "glitchChance",
        label: "Glitch Chance",
        defaultValue: 0.18,
        min: 0,
        max: 1,
        step: 0.01,
      },
    ];