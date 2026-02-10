import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "rotationInterval",
        label: "Interval (ms)",
        defaultValue: 2000,
        min: 500,
        max: 5000,
        step: 100,
      },
      {
        type: "number",
        param: "staggerDuration",
        label: "Stagger (s)",
        defaultValue: 0.025,
        min: 0,
        max: 0.2,
        step: 0.005,
      },
      {
        type: "boolean",
        param: "loop",
        label: "Loop",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "auto",
        label: "Auto Play",
        defaultValue: true,
      },
      {
        type: "select",
        param: "splitBy",
        label: "Split By",
        defaultValue: "characters",
        options: ["characters", "words", "lines"],
      },
    ];