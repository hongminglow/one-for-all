import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "accentColor",
    type: "number",
    default: "0xF00589",
    description: "Color of the ocean waves and accent elements",
  },
  {
    prop: "oceanSize",
    type: "number",
    default: "25",
    description: "Size of the ocean plane",
  },
  {
    prop: "waveAmplitude",
    type: "number",
    default: "0.2",
    description: "Height of the waves",
  },
  {
    prop: "showBoats",
    type: "boolean",
    default: "true",
    description: "Whether to show floating boats",
  },
  {
    prop: "showWireframe",
    type: "boolean",
    default: "true",
    description: "Whether to show the wireframe mesh",
  },
];
