import { DemoControl } from "../types";

export const controls: DemoControl[] = [
	{
		type: "text",
		param: "text",
		label: "Text",
		defaultValue: "Hover to decrypt!",
	},
	{
		type: "number",
		param: "speed",
		label: "Speed (ms)",
		defaultValue: 50,
		min: 10,
		max: 200,
		step: 5,
	},
	{
		type: "number",
		param: "maxIterations",
		label: "Max Iterations",
		defaultValue: 10,
		min: 1,
		max: 50,
		step: 1,
	},
	{
		type: "boolean",
		param: "sequential",
		label: "Sequential",
		defaultValue: false,
	},
	{
		type: "select",
		param: "revealDirection",
		label: "Reveal Direction",
		options: ["start", "end", "center"],
		defaultValue: "start",
	},
	{
		type: "boolean",
		param: "useOriginalCharsOnly",
		label: "Use Original Chars Only",
		defaultValue: false,
	},
	{
		type: "text",
		param: "characters",
		label: "Character Set",
		defaultValue: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
	},
	{
		type: "select",
		param: "animateOn",
		label: "Animate On",
		options: ["hover", "view", "both"],
		defaultValue: "hover",
	},
];
