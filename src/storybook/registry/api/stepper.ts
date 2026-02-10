import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "initialStep",
        type: "number",
        default: "1",
        description: "Starting step",
      },
      {
        prop: "backButtonText",
        type: "string",
        default: "Back",
        description: "Back button label",
      },
      {
        prop: "nextButtonText",
        type: "string",
        default: "Continue",
        description: "Next button label",
      },
      {
        prop: "disableStepIndicators",
        type: "boolean",
        default: "false",
        description: "Hide step indicators",
      },
    ];