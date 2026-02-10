import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "baseWidth",
        label: "Base Width",
        defaultValue: 320,
        min: 220,
        max: 520,
        step: 10,
      },
      {
        type: "boolean",
        param: "autoplay",
        label: "Autoplay",
        defaultValue: false,
      },
      {
        type: "number",
        param: "autoplayDelay",
        label: "Autoplay Delay (ms)",
        defaultValue: 3000,
        min: 500,
        max: 10000,
        step: 250,
      },
      {
        type: "boolean",
        param: "pauseOnHover",
        label: "Pause On Hover",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "loop",
        label: "Loop",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "round",
        label: "Round",
        defaultValue: false,
      },
    ];