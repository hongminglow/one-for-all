import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "borderSize",
        label: "Border Size",
        defaultValue: 2,
        min: 0,
        max: 10,
        step: 1,
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 20,
        min: 0,
        max: 48,
        step: 1,
      },
    ];