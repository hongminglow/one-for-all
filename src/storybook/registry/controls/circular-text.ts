import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "REACT*BITS*COMPONENTS*",
      },
      {
        type: "number",
        param: "spinDuration",
        label: "Spin Duration (s)",
        defaultValue: 20,
        min: 1,
        max: 60,
        step: 1,
      },
      {
        type: "select",
        param: "onHover",
        label: "On Hover",
        defaultValue: "speedUp",
        options: ["speedUp", "slowDown", "pause", "goBonkers"],
      },
    ];