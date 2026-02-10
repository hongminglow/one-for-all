import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "imageSrc",
        type: "string",
        default: "",
        description: "Image source URL",
      },
      {
        prop: "peelBackHoverPct",
        type: "number",
        default: "30",
        description: "% Peel on hover",
      },
      {
        prop: "peelBackActivePct",
        type: "number",
        default: "40",
        description: "% Peel on active",
      },
      {
        prop: "rotate",
        type: "number",
        default: "30",
        description: "Sticker rotation",
      },
      {
        prop: "shadowIntensity",
        type: "number",
        default: "0.6",
        description: "Shadow opacity",
      },
    ];