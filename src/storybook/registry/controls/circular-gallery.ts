import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "bend",
        label: "Bend",
        defaultValue: 3,
        step: 0.1,
      },
      {
        type: "color",
        param: "textColor",
        label: "Text Color",
        defaultValue: "#ffffff",
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 0.05,
        step: 0.01,
      },
    ];