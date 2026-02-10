import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "data",
        type: "Record<string, PreviewData>",
        default: "{}",
        description: "Preview content per key",
      },
      {
        prop: "cursorOffset",
        type: "number",
        default: "18",
        description: "Distance from cursor",
      },
      {
        prop: "preloadImages",
        type: "boolean",
        default: "true",
        description: "Preload preview images",
      },
    ];