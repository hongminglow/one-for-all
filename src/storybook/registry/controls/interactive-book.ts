import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "text",
    param: "title",
    label: "Title",
    defaultValue: "The Art of Motion",
  },
  {
    type: "text",
    param: "author",
    label: "Author",
    defaultValue: "AI Designer",
  },
  {
    type: "number",
    param: "width",
    label: "Width",
    defaultValue: 350,
    min: 200,
    max: 800,
  },
  {
    type: "number",
    param: "height",
    label: "Height",
    defaultValue: 500,
    min: 300,
    max: 1000,
  },
];
