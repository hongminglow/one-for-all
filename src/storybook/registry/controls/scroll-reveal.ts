import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "children",
        label: "Text",
        defaultValue: "Scroll to reveal this text word by word.",
      },
      {
        type: "number",
        param: "baseOpacity",
        label: "Base Opacity",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.1,
      },
      {
        type: "boolean",
        param: "enableBlur",
        label: "Enable Blur",
        defaultValue: true,
      },
      {
        type: "number",
        param: "baseRotation",
        label: "Base Rotation (deg)",
        defaultValue: 3,
        min: 0,
        max: 90,
        step: 1,
      },
      {
        type: "number",
        param: "blurStrength",
        label: "Blur Strength (px)",
        defaultValue: 4,
        min: 0,
        max: 20,
        step: 1,
      },
    ];