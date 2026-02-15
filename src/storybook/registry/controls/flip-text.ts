import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "text",
    param: "children",
    label: "Text Content",
    defaultValue: "Vengeance UI",
  },
  {
    type: "number",
    param: "duration",
    label: "Duration",
    defaultValue: 2.2,
    min: 0.5,
    max: 10,
    step: 0.1,
  },
  {
    type: "text",
    param: "separator",
    label: "Separator",
    defaultValue: " ",
  },
  { type: "boolean", param: "loop", label: "Loop", defaultValue: true },
];
