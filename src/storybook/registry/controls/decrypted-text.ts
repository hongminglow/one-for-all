import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "⚛️",
      },
      {
        type: "number",
        param: "spacing",
        label: "Spacing (px)",
        defaultValue: 80,
        min: 20,
        max: 200,
        step: 10,
      },
      {
        type: "boolean",
        param: "followMouseDirection",
        label: "Follow Mouse Direction",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "randomFloat",
        label: "Random Float",
        defaultValue: true,
      },
      {
        type: "number",
        param: "exitDuration",
        label: "Exit Duration (s)",
        defaultValue: 0.3,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      {
        type: "number",
        param: "removalInterval",
        label: "Removal Interval (ms)",
        defaultValue: 20,
        min: 10,
        max: 100,
        step: 10,
      },
      {
        type: "number",
        param: "maxPoints",
        label: "Max Points",
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
      },
    ];