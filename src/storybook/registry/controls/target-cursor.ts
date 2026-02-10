import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "spinDuration",
        label: "Spin Duration (s)",
        defaultValue: 2,
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      {
        type: "number",
        param: "hoverDuration",
        label: "Hover Duration (s)",
        defaultValue: 0.2,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "hideDefaultCursor",
        label: "Hide Default Cursor",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "parallaxOn",
        label: "Parallax Effect",
        defaultValue: true,
      },
    ];