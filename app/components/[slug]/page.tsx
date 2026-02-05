import { notFound } from "next/navigation";

import { COMPONENTS } from "@/storybook/components";
import { ComponentDetails } from "@/storybook/ComponentDetails";

export function generateStaticParams() {
  return COMPONENTS.map((c) => ({ slug: c.slug }));
}

export default async function ComponentPage(props: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(props.params);
  const component = COMPONENTS.find((c) => c.slug === slug);
  if (!component) return notFound();

  return <ComponentDetails component={component} />;
}
