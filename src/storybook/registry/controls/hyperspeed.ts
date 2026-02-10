import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "streaks",
        label: "Streaks",
        defaultValue: 260,
        min: 60,
        max: 900,
        step: 20,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0.2,
        max: 4,
        step: 0.1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
    ];