import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "initialStep",
        label: "Initial Step",
        defaultValue: 1,
        min: 1,
        max: 4,
        step: 1,
      },
      {
        type: "boolean",
        param: "disableStepIndicators",
        label: "Disable Step Indicators",
        defaultValue: false,
      },
    ];