import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "title",
    type: "string",
    default: "The Art of Motion",
    description: "Book title",
  },
  {
    prop: "author",
    type: "string",
    default: "AI Designer",
    description: "Author name",
  },
  {
    prop: "description",
    type: "string",
    default: "—",
    description: "Inside cover description",
  },
];
