import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "defaultValue",
        label: "Default Value",
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "startingValue",
        label: "Starting Value",
        defaultValue: 0,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "maxValue",
        label: "Max Value",
        defaultValue: 100,
        min: 1,
        max: 500,
        step: 1,
      },
      {
        type: "boolean",
        param: "isStepped",
        label: "Stepped",
        defaultValue: false,
      },
      {
        type: "number",
        param: "stepSize",
        label: "Step Size",
        defaultValue: 1,
        min: 1,
        max: 25,
        step: 1,
      },
    ];