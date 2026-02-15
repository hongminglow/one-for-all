import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "text",
    param: "text",
    label: "Loader Text",
    defaultValue: "VENGEANCE",
  },
  {
    type: "text",
    param: "fontSize",
    label: "Font Size",
    defaultValue: "100px",
  },
  {
    type: "text",
    param: "revealColor",
    label: "Reveal Color",
    defaultValue: "white",
  },
  {
    type: "select",
    param: "revealDirection",
    label: "Reveal Direction",
    defaultValue: "left-to-right",
    options: ["left-to-right", "right-to-left", "center-out", "edges-in"],
  },
  {
    type: "select",
    param: "exitAnimation",
    label: "Exit Animation",
    defaultValue: "top-down",
    options: ["top-down", "bottom-up", "fade-out", "scale-vertical"],
  },
  {
    type: "number",
    param: "duration",
    label: "Duration",
    defaultValue: 0.5,
    min: 0.1,
    max: 2,
    step: 0.1,
  },
];
