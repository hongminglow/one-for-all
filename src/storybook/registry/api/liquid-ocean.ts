import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
  {
    prop: "backgroundColor",
    type: "number",
    default: "0x000000",
    description: "Background color of the scene",
  },
  {
    prop: "accentColor",
    type: "number",
    default: "0xF00589",
    description: "Color of the ocean waves and accent elements",
  },
  {
    prop: "gridColor",
    type: "number",
    default: "0x333333",
    description: "Color of the grid lines",
  },
  {
    prop: "shipCount",
    type: "number",
    default: "20",
    description: "Number of floating ships/boxes",
  },
  {
    prop: "speed",
    type: "number",
    default: "0.001",
    description: "Animation speed",
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
  {
    prop: "gridCols",
    type: "number",
    default: "5",
    description: "Number of grid columns",
  },
  {
    prop: "gridRows",
    type: "number",
    default: "5",
    description: "Number of grid rows",
  },
  {
    prop: "oceanSizeX",
    type: "number",
    default: "25",
    description: "Width of the ocean plane",
  },
  {
    prop: "oceanSizeZ",
    type: "number",
    default: "25",
    description: "Depth of the ocean plane",
  },
  {
    prop: "waveAmplitude",
    type: "number",
    default: "0.2",
    description: "Height of the waves",
  },
  {
    prop: "waveSpeed",
    type: "number",
    default: "0.05",
    description: "Speed of the wave movement",
  },
  {
    prop: "autoRotate",
    type: "boolean",
    default: "true",
    description: "Whether the camera should rotate automatically",
  },
  {
    prop: "autoRotateSpeed",
    type: "number",
    default: "0.85",
    description: "Speed of the camera rotation",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "—",
    description: "Content to overlay on top of the ocean",
  },
];
