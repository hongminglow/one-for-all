import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "children",
        label: "Text",
        defaultValue: "React Bits",
      },
      {
        type: "number",
        param: "animationDuration",
        label: "Duration (s)",
        defaultValue: 1,
        min: 0.1,
        max: 5,
        step: 0.1,
      },
      {
        type: "text",
        param: "ease",
        label: "Ease",
        defaultValue: "back.inOut(2)",
      },
      {
        type: "number",
        param: "stagger",
        label: "Stagger",
        defaultValue: 0.03,
        min: 0.01,
        max: 0.5,
        step: 0.01,
      },
    ];