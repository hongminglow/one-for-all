import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 15,
        min: 2,
        max: 60,
        step: 1,
      },
      {
        type: "color",
        param: "textColor",
        label: "Text Color",
        defaultValue: "#ffffff",
      },
      {
        type: "color",
        param: "bgColor",
        label: "Background Color",
        defaultValue: "#060010",
      },
      {
        type: "color",
        param: "marqueeBgColor",
        label: "Marquee BG Color",
        defaultValue: "#ffffff",
      },
      {
        type: "color",
        param: "marqueeTextColor",
        label: "Marquee Text Color",
        defaultValue: "#060010",
      },
      {
        type: "color",
        param: "borderColor",
        label: "Border Color",
        defaultValue: "#ffffff",
      },
    ];