import { redirect } from "next/navigation";

import { COMPONENTS } from "@/storybook/components";

export default function Home() {
  redirect(`/components/${COMPONENTS[0].slug}`);
}
