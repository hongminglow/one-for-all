import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "animationDuration",
        type: "number",
        default: "1",
        description: "Duration of the float animation",
      },
      {
        prop: "ease",
        type: "string",
        default: "'back.inOut(2)'",
        description: "GSAP ease string",
      },
      {
        prop: "stagger",
        type: "number",
        default: "0.03",
        description: "Stagger delay between characters",
      },
    ];