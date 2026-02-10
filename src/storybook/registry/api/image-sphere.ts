import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "images",
        type: "{id,src,alt}[]",
        default: "[]",
        description: "Images on the sphere",
      },
      {
        prop: "containerSize",
        type: "number",
        default: "360",
        description: "Container size (px)",
      },
      {
        prop: "sphereRadius",
        type: "number",
        default: "160",
        description: "TranslateZ radius (px)",
      },
      {
        prop: "autoRotate",
        type: "boolean",
        default: "true",
        description: "Auto rotate",
      },
      {
        prop: "autoRotateSpeed",
        type: "number",
        default: "0.25",
        description: "Degrees per frame",
      },
    ];