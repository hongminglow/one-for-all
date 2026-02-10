"use client";

import { registry } from "../registry";
import type { ComponentItem } from "@/storybook/components.generated";
import type { ApiProp, DemoControl } from "../registry/types";

export type { ApiProp, DemoControl };

/**
 * Renders the demo for a given component.
 * Delegated to the modular registry.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderDemo(component: ComponentItem, props?: unknown) {
	const slug = component.slug.toLowerCase();
	const config = registry[slug];
	if (config) {
		return config.render(props);
	}
	return null;
}

/**
 * Returns the controls for a given component.
 */
export function getDemoControls(component: ComponentItem): DemoControl[] | null {
	const slug = component.slug.toLowerCase();
	const config = registry[slug];
	return config?.controls ?? null;
}

/**
 * Returns the code snippet for a given component.
 */
export function getDemoCode(component: ComponentItem): string {
	const slug = component.slug.toLowerCase();
	const config = registry[slug];
	return config?.code ?? `See official docs for code: ${component.url}`;
}

/**
 * Returns the API reference for a given component.
 */
export function getApiReference(component: ComponentItem): ApiProp[] | null {
	const slug = component.slug.toLowerCase();
	const config = registry[slug];
	return config?.api ?? null;
}
