import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "autoLaunchInterval",
        label: "Launch Interval (ms)",
        defaultValue: 600,
        min: 100,
        max: 2000,
        step: 100,
      },
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 80,
        min: 20,
        max: 200,
        step: 10,
      },
    ];