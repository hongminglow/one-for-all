import type { ReactNode } from "react";

export type ApiProp = {
	prop: string;
	type: string;
	default: string;
	description: string;
};

export type DemoControl =
	| { type: "text"; param: string; label: string; defaultValue: string }
	| {
			type: "number";
			param: string;
			label: string;
			defaultValue: number;
			min?: number;
			max?: number;
			step?: number;
	  }
	| { type: "boolean"; param: string; label: string; defaultValue: boolean }
	| {
			type: "select";
			param: string;
			label: string;
			defaultValue: string;
			options: string[];
	  }
	| { type: "color"; param: string; label: string; defaultValue: string };

export interface ComponentConfig {
	render(props: unknown): ReactNode;
	controls?: DemoControl[];
	api?: ApiProp[];
	code?: string;
}
