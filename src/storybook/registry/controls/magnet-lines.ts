import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "rows",
        label: "Rows",
        defaultValue: 9,
        min: 1,
        max: 20,
      },
      {
        type: "number",
        param: "columns",
        label: "Columns",
        defaultValue: 9,
        min: 1,
        max: 20,
      },
      {
        type: "text",
        param: "containerSize",
        label: "Container Size",
        defaultValue: "40vmin",
      },
      {
        type: "color",
        param: "lineColor",
        label: "Line Color",
        defaultValue: "#efefef",
      },
      {
        type: "text",
        param: "lineWidth",
        label: "Line Width",
        defaultValue: "1vmin",
      },
      {
        type: "text",
        param: "lineHeight",
        label: "Line Height",
        defaultValue: "6vmin",
      },
      {
        type: "number",
        param: "baseAngle",
        label: "Base Angle (deg)",
        defaultValue: -10,
        min: -360,
        max: 360,
      },
    ];