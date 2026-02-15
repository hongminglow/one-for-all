import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "text",
    type: "string",
    default: "Liquid Text",
    description: "Text to display",
  },
  {
    prop: "fontSize",
    type: "number",
    default: "200",
    description: "Font size of the text",
  },
  {
    prop: "font",
    type: "string",
    default: "Inter, sans-serif",
    description: "Font family",
  },
  {
    prop: "color",
    type: "string",
    default: "—",
    description: "Custom text color",
  },
  {
    prop: "lightColor",
    type: "string",
    default: "#000000",
    description: "Text color in light mode",
  },
  {
    prop: "darkColor",
    type: "string",
    default: "#ffffff",
    description: "Text color in dark mode",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes",
  },
];
