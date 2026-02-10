import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "gradientSize",
        label: "Gradient Size",
        defaultValue: 200,
        min: 80,
        max: 420,
        step: 10,
      },
      {
        type: "number",
        param: "gradientOpacity",
        label: "Gradient Opacity",
        defaultValue: 0.8,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ];