import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "targetSelector",
        type: "string",
        default: ".cursor-target",
        description: "CSS selector for targets",
      },
      {
        prop: "spinDuration",
        type: "number",
        default: "2",
        description: "Rotation duration (s)",
      },
      {
        prop: "hideDefaultCursor",
        type: "boolean",
        default: "true",
        description: "Hide system cursor",
      },
      {
        prop: "hoverDuration",
        type: "number",
        default: "0.2",
        description: "Hover transition duration",
      },
      {
        prop: "parallaxOn",
        type: "boolean",
        default: "true",
        description: "Enable parallax effect",
      },
    ];