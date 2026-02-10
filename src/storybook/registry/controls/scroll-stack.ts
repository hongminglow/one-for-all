import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "itemDistance",
        label: "Distance",
        defaultValue: 50,
      },
      {
        type: "number",
        param: "itemScale",
        label: "Scale Step",
        defaultValue: 0.05,
        step: 0.01,
      },
      {
        type: "number",
        param: "itemStackDistance",
        label: "Stack Dist",
        defaultValue: 20,
      },
      {
        type: "text",
        param: "stackPosition",
        label: "Stack Pos",
        defaultValue: "20%",
      },
      {
        type: "number",
        param: "rotationAmount",
        label: "Rotation",
        defaultValue: 0,
      },
      { type: "number", param: "blurAmount", label: "Blur", defaultValue: 0 },
    ];