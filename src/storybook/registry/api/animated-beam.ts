import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "containerRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "Common parent container",
      },
      {
        prop: "fromRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "Start node ref",
      },
      {
        prop: "toRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "End node ref",
      },
      {
        prop: "curvature",
        type: "number",
        default: "0",
        description: "Path curvature",
      },
      {
        prop: "duration",
        type: "number",
        default: "2",
        description: "Dash animation duration (seconds)",
      },
      {
        prop: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse dash direction",
      },
    ];