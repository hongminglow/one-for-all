import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "color",
        param: "topColor",
        label: "Top Color",
        defaultValue: "#5227FF",
      },
      {
        type: "color",
        param: "bottomColor",
        label: "Bottom Color",
        defaultValue: "#FF9FFC",
      },
      {
        type: "number",
        param: "intensity",
        label: "Intensity",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "rotationSpeed",
        label: "Rotation Speed",
        defaultValue: 0.3,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: false,
      },
      {
        type: "select",
        param: "quality",
        label: "Quality",
        defaultValue: "high",
        options: ["low", "medium", "high"],
      },
    ];