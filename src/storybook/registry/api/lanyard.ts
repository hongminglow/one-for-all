import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "position",
        type: "[number, number, number]",
        default: "[0, 0, 30]",
        description: "Camera position",
      },
      {
        prop: "gravity",
        type: "[number, number, number]",
        default: "[0, -40, 0]",
        description: "Physics gravity",
      },
      {
        prop: "fov",
        type: "number",
        default: "20",
        description: "Field of view",
      },
      {
        prop: "transparent",
        type: "boolean",
        default: "true",
        description: "Transparent background",
      },
    ];