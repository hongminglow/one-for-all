import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "typingSpeed",
        label: "Typing (ms)",
        defaultValue: 90,
        min: 20,
        max: 250,
        step: 5,
      },
      {
        type: "number",
        param: "deletingSpeed",
        label: "Deleting (ms)",
        defaultValue: 50,
        min: 20,
        max: 250,
        step: 5,
      },
      {
        type: "number",
        param: "pauseDuration",
        label: "Pause (ms)",
        defaultValue: 1200,
        min: 0,
        max: 3000,
        step: 50,
      },
    ];