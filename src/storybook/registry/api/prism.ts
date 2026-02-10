import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "animationType",
        type: "'rotate' | 'hover' | '3drotate'",
        default: "rotate",
        description: "Animation behavior",
      },
      {
        prop: "height",
        type: "number",
        default: "3.5",
        description: "Prism height",
      },
      {
        prop: "baseWidth",
        type: "number",
        default: "5.5",
        description: "Prism base width",
      },
      {
        prop: "glow",
        type: "number",
        default: "1",
        description: "Glow intensity",
      },
      {
        prop: "noise",
        type: "number",
        default: "0.5",
        description: "Noise amount",
      },
    ];