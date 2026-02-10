import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Words fall with physics. Drag to play.",
      },
      {
        type: "text",
        param: "highlightWords",
        label: "Highlight words (comma-separated)",
        defaultValue: "physics., Drag",
      },
      {
        type: "select",
        param: "trigger",
        label: "Trigger",
        defaultValue: "auto",
        options: ["auto", "scroll", "click", "hover"],
      },
      {
        type: "number",
        param: "gravity",
        label: "Gravity",
        defaultValue: 1,
        min: 0.1,
        max: 3,
        step: 0.1,
      },
      {
        type: "number",
        param: "mouseConstraintStiffness",
        label: "Mouse stiffness",
        defaultValue: 0.2,
        min: 0.01,
        max: 1,
        step: 0.01,
      },
      {
        type: "text",
        param: "fontSize",
        label: "Font size",
        defaultValue: "1.25rem",
      },
      {
        type: "boolean",
        param: "wireframes",
        label: "Wireframes (debug)",
        defaultValue: false,
      },
    ];