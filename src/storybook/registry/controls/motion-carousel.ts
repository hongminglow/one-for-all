import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "boolean",
        param: "autoplay",
        label: "Autoplay",
        defaultValue: false,
      },
      {
        type: "number",
        param: "autoplayDelay",
        label: "Autoplay delay (ms)",
        defaultValue: 2800,
        min: 800,
        max: 8000,
        step: 100,
      },
    ];