import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "text",
    type: "string",
    default: "VENGEANCE",
    description: "Text to display during loading",
  },
  {
    prop: "fontSize",
    type: "string",
    default: "100px",
    description: "Font size of the loader text",
  },
  {
    prop: "revealColor",
    type: "string",
    default: "white",
    description: "Color of the text reveal animation",
  },
  {
    prop: "backgroundColors",
    type: "string[]",
    default: "['#000000']",
    description: "Array of colors for the background pieces",
  },
  {
    prop: "revealDirection",
    type: "'left-to-right' | 'right-to-left' | 'center-out' | 'edges-in'",
    default: "left-to-right",
    description: "Direction of the piece reveal animation",
  },
  {
    prop: "exitAnimation",
    type: "'top-down' | 'bottom-up' | 'fade-out' | 'scale-vertical'",
    default: "top-down",
    description: "Animation style when cleaning up",
  },
  {
    prop: "duration",
    type: "number",
    default: "0.5",
    description: "Duration of the reveal animation in seconds",
  },
  {
    prop: "onComplete",
    type: "() => void",
    default: "—",
    description: "Callback function when animation finishes",
  },
];
