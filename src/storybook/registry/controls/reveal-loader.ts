import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "text",
    param: "text",
    label: "Loader Text",
    defaultValue: "LOADING",
  },
  {
    type: "text",
    param: "revealColor",
    label: "Reveal Color",
    defaultValue: "white",
  },
];
