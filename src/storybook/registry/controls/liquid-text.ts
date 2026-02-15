import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  { type: "text", param: "text", label: "Text", defaultValue: "Liquid Text" },
  {
    type: "number",
    param: "fontSize",
    label: "Font Size",
    defaultValue: 200,
    min: 50,
    max: 500,
  },
  {
    type: "text",
    param: "lightColor",
    label: "Light Color",
    defaultValue: "#000000",
  },
  {
    type: "text",
    param: "darkColor",
    label: "Dark Color",
    defaultValue: "#ffffff",
  },
];
