import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "select",
        param: "direction",
        label: "Direction",
        defaultValue: "left",
        options: ["left", "right", "up", "down"],
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 100,
        min: 10,
        max: 500,
      },
      {
        type: "number",
        param: "hoverSpeed",
        label: "Hover Speed",
        defaultValue: 0,
        min: 0,
        max: 500,
      },
      {
        type: "number",
        param: "logoHeight",
        label: "Logo Height",
        defaultValue: 40,
        min: 20,
        max: 100,
      },
      {
        type: "number",
        param: "gap",
        label: "Gap",
        defaultValue: 40,
        min: 10,
        max: 200,
      },
      {
        type: "boolean",
        param: "fadeOut",
        label: "Fade Out",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "scaleOnHover",
        label: "Scale on Hover",
        defaultValue: true,
      },
    ];