"use client";

import { useEffect, useRef, useState } from "react";

import type { ComponentItem } from "@/storybook/components.generated";
import SplitText from "@/components/reactbits/SplitText";
import CircularText from "@/components/reactbits/CircularText";
import ShinyText from "@/components/reactbits/ShinyText";
import CurvedLoop from "@/components/reactbits/CurvedLoop";
import FuzzyText from "@/components/reactbits/FuzzyText";
import GradientText from "@/components/reactbits/GradientText";
import FallingText from "@/components/reactbits/FallingText";
import TextCursor from "@/components/reactbits/TextCursor";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import RotatingText from "@/components/reactbits/RotatingText";
import GlitchText from "@/components/reactbits/GlitchText";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import VariableProximity from "@/components/reactbits/VariableProximity";
import CountUp from "@/components/reactbits/CountUp";
import {
	circularTextCode,
	curvedLoopCode,
	fallingTextCode,
	fuzzyTextCode,
	gradientTextCode,
	shinyTextCode,
	splitTextCode,
	textCursorCode,
	decryptedTextCode,
	scrollFloatCode,
	scrollRevealCode,
	rotatingTextCode,
	glitchTextCode,
	scrollVelocityCode,
	variableProximityCode,
	countUpCode,
} from "@/storybook/demos/code-snippets";

function TypewriterDemo(props: { text: string }) {
	return (
		<div className="font-mono text-[15px] font-bold text-[var(--sb-text-strong)]">
			<span className="inline-block overflow-hidden whitespace-nowrap align-bottom [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">
				{props.text}
			</span>
		</div>
	);
}

function CountUpDemo(props: { to: number }) {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const durationMs = 900;
		const start = performance.now();
		let raf = 0;

		const tick = (t: number) => {
			const p = Math.min(1, (t - start) / durationMs);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(eased * props.to));
			if (p < 1) raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [props.to]);

	return (
		<div className="text-[28px] font-black tracking-tight text-[var(--sb-text-strong)]">{value.toLocaleString()}</div>
	);
}

function GlitchTextDemo(props: { label: string }) {
	return (
		<div className="relative text-[26px] font-black tracking-tight text-[var(--sb-text-strong)]">
			<span className="relative inline-block [text-shadow:2px_0_0_rgba(139,92,246,0.7),-2px_0_0_rgba(99,102,241,0.6)] [animation:glitch_1.4s_infinite]">
				{props.label}
			</span>
		</div>
	);
}

function DecryptedTextDemo(props: { text: string }) {
	const [shown, setShown] = useState("".padEnd(props.text.length, "•"));
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	useEffect(() => {
		let i = 0;
		const id = window.setInterval(() => {
			i = Math.min(props.text.length, i + 1);
			const head = props.text.slice(0, i);
			const tail = Array.from({ length: props.text.length - i })
				.map(() => chars[Math.floor(Math.random() * chars.length)])
				.join("");
			setShown(head + tail);
			if (i >= props.text.length) window.clearInterval(id);
		}, 40);
		return () => window.clearInterval(id);
	}, [props.text]);

	return <div className="font-mono text-[15px] font-bold text-[var(--sb-text-strong)]">{shown}</div>;
}

function SimpleCarouselDemo() {
	const items = ["One", "Two", "Three", "Four"];
	const [i, setI] = useState(0);
	const current = items[i] ?? items[0];

	return (
		<div className="w-full max-w-[520px]">
			<div className="rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] p-6">
				<div className="text-[18px] font-black text-[var(--sb-text-strong)]">{current}</div>
				<div className="mt-1 text-[12px] font-medium text-[var(--sb-text-muted)]">Minimal carousel demo</div>
				<div className="mt-4 flex gap-2">
					<button
						type="button"
						onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
						className="h-10 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 text-[12px] font-black text-[var(--sb-text-strong)]"
					>
						Prev
					</button>
					<button
						type="button"
						onClick={() => setI((x) => (x + 1) % items.length)}
						className="h-10 rounded-xl bg-[var(--sb-accent)] px-4 text-[12px] font-black text-[var(--sb-on-accent)]"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

function BackgroundPanelDemo(props: { title: string }) {
	return (
		<div className="relative h-[160px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)]">
			<div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.55),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(167,139,250,0.35),transparent_55%)]" />
			<div className="absolute inset-0 opacity-50 [background:linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.06))] [animation:bgshift_4.5s_linear_infinite]" />
			<div className="relative flex h-full items-end p-4">
				<div className="rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] px-3 py-2">
					<div className="text-[12px] font-black text-[var(--sb-text-strong)]">{props.title}</div>
					<div className="text-[11px] font-semibold text-[var(--sb-text-muted)]">Local background demo</div>
				</div>
			</div>
		</div>
	);
}

function ScrollFloatWrapper(props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={containerRef}
			className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-[var(--sb-panel)] overflow-y-auto overflow-x-hidden sb-scroll"
		>
			<div className="flex flex-col items-center justify-center p-8" style={{ height: "1000px" }}>
				<div style={{ height: "400px", flexShrink: 0 }} />
				<ScrollFloat
					scrollContainerRef={containerRef}
					animationDuration={props?.animationDuration ?? 1}
					ease={props?.ease ?? "back.inOut(2)"}
					stagger={props?.stagger ?? 0.03}
					containerClassName={`text-[48px] font-black text-[var(--sb-text-strong)] text-center ${props?.containerClassName ?? ""}`}
					{...props}
				>
					{props?.children ?? "React Bits"}
				</ScrollFloat>
				<div style={{ height: "400px", flexShrink: 0 }} />
			</div>
		</div>
	);
}

function ScrollRevealWrapper(props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={containerRef}
			className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-[var(--sb-panel)] overflow-y-auto overflow-x-hidden sb-scroll"
		>
			<div className="flex flex-col items-center justify-center p-8 text-center" style={{ height: "1000px" }}>
				<div style={{ height: "400px", flexShrink: 0 }} />
				<ScrollReveal
					scrollContainerRef={containerRef}
					baseOpacity={props?.baseOpacity ?? 0.1}
					enableBlur={props?.enableBlur ?? true}
					baseRotation={props?.baseRotation ?? 3}
					blurStrength={props?.blurStrength ?? 4}
					containerClassName={`text-[28px] font-bold text-[var(--sb-text-strong)] ${props?.containerClassName ?? ""}`}
					{...props}
				>
					{props?.children ?? "Scroll down to reveal the beauty of React Bits."}
				</ScrollReveal>
				<div style={{ height: "400px", flexShrink: 0 }} />
			</div>
		</div>
	);
}

function VariableProximityWrapper(props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={containerRef}
			className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-[var(--sb-panel)] flex items-center justify-center overflow-hidden"
		>
			<VariableProximity
				label={props?.label ?? "Hover me! And then star React Bits on GitHub, or else..."}
				fromFontVariationSettings={props?.fromFontVariationSettings ?? "'wght' 400, 'opsz' 9"}
				toFontVariationSettings={props?.toFontVariationSettings ?? "'wght' 1000, 'opsz' 40"}
				containerRef={containerRef}
				radius={props?.radius ?? 100}
				falloff={props?.falloff ?? "linear"}
				className={`text-[48px] font-black text-[var(--sb-text-strong)] text-center ${props?.className ?? ""}`}
				{...props}
			/>
		</div>
	);
}

function ScrollRevealDemo() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const io = new IntersectionObserver(
			(entries) => {
				const e = entries[0];
				if (e?.isIntersecting) setVisible(true);
			},
			{ threshold: 0.35 },
		);
		io.observe(node);
		return () => io.disconnect();
	}, []);

	return (
		<div className="h-[180px] w-full max-w-[520px] overflow-auto rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] p-4 sb-scroll">
			<div className="h-[120px]" />
			<div
				ref={ref}
				className={
					visible
						? "rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-5 transition-all duration-300"
						: "translate-y-4 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-5 opacity-40 blur-[1px] transition-all duration-300"
				}
			>
				<div className="text-[14px] font-black text-[var(--sb-text-strong)]">Revealed on scroll</div>
				<div className="mt-1 text-[12px] font-medium text-[var(--sb-text-muted)]">
					Scroll inside this panel to trigger
				</div>
			</div>
			<div className="h-[180px]" />
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderDemo(component: ComponentItem, props?: any) {
	const title = component.title.toLowerCase();
	const slug = component.slug.toLowerCase();
	const url = component.url.toLowerCase();

	switch (true) {
		case slug.includes("split-text") || title.includes("split text"):
			return (
				<SplitText
					text="Elevate Your Web Experience"
					className="text-[32px] font-black text-center leading-tight text-[var(--sb-text-strong)]"
					delay={50}
					animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
					animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
					easing="easeOutCubic"
					threshold={0.2}
					rootMargin="-50px"
					{...props}
				/>
			);

		case slug.includes("circular-text") || title.includes("circular text"):
			return (
				<CircularText
					text="REACT*BITS*COMPONENTS*"
					onHover="speedUp"
					spinDuration={20}
					className="custom-class text-[var(--sb-text-strong)]"
					{...props}
				/>
			);

		case slug.includes("shiny-text") || title.includes("shiny text"):
			return (
				<div className="text-[28px] font-black tracking-tight" style={{ width: "100%" }}>
					<ShinyText
						text="✨ Shiny Text Effect"
						speed={2}
						delay={0}
						color="var(--sb-text-muted)"
						shineColor="var(--sb-text-strong)"
						spread={120}
						direction="left"
						yoyo={false}
						pauseOnHover={false}
						disabled={false}
						{...props}
					/>
				</div>
			);

		case slug.includes("curved-marquee") || title.includes("curved marquee"):
			return (
				<div className="w-full h-[300px] relative overflow-hidden">
					<CurvedLoop
						marqueeText="CURVED LOOP • CURVED LOOP •"
						curveAmount={400}
						speed={2}
						direction="left"
						interactive={true}
						className="text-[32px] font-black text-[var(--sb-text-strong)]"
						{...props}
					/>
				</div>
			);

		case slug.includes("fuzzy-text") || title.includes("fuzzy text"):
			return (
				<FuzzyText
					baseIntensity={0.18}
					hoverIntensity={0.5}
					enableHover={true}
					className="text-[40px] font-black text-[var(--sb-text-strong)]"
					{...props}
				>
					Fuzzy Text
				</FuzzyText>
			);

		case slug.includes("gradient-text") || title.includes("gradient text"):
			return (
				<div className="text-[32px] font-black">
					<GradientText
						colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
						animationSpeed={3}
						showBorder={false}
						className="custom-class"
						{...props}
					>
						Gradient Text
					</GradientText>
				</div>
			);

		case slug.includes("falling-text") || title.includes("falling text"): {
			const rawHighlight = props?.highlightWords;
			const highlightWords =
				typeof rawHighlight === "string"
					? rawHighlight
							.split(",")
							.map((s: string) => s.trim())
							.filter(Boolean)
					: Array.isArray(rawHighlight)
						? rawHighlight
						: ["physics.", "Drag"];
			return (
				<div
					className="w-full min-h-[320px] rounded-2xl bg-[var(--sb-panel)] p-2 flex justify-center"
					style={{ minHeight: 320 }}
				>
					<div className="w-full text-[var(--sb-text-strong)]">
						<FallingText
							text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
							highlightWords={["React", "Bits", "animated", "components", "simplify"]}
							trigger="hover"
							backgroundColor="transparent"
							wireframes={false}
							gravity={0.56}
							fontSize="2rem"
							mouseConstraintStiffness={0.9}
						/>
					</div>
				</div>
			);
		}

		case slug.includes("text-cursor") || title.includes("text cursor"):
			return (
				<div className="w-full h-[320px] rounded-2xl bg-[var(--sb-panel)] overflow-hidden">
					<TextCursor
						text={props?.text ?? "⚛️"}
						spacing={props?.spacing ?? 80}
						followMouseDirection={props?.followMouseDirection ?? true}
						randomFloat={props?.randomFloat ?? true}
						exitDuration={props?.exitDuration ?? 0.3}
						removalInterval={props?.removalInterval ?? 20}
						maxPoints={props?.maxPoints ?? 10}
						{...props}
					/>
				</div>
			);

		case slug.includes("decrypted-text") || title.includes("decrypted text") || title.includes("decrypted"):
			return (
				<div
					className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-panel)] p-8 flex items-center justify-center"
					style={{ minHeight: 200 }}
				>
					<div className="text-[28px] font-black text-[var(--sb-text-strong)]">
						<DecryptedText
							text={props?.text ?? "Hover to decrypt!"}
							speed={props?.speed ?? 50}
							maxIterations={props?.maxIterations ?? 10}
							sequential={props?.sequential ?? false}
							revealDirection={props?.revealDirection ?? "start"}
							animateOn={props?.animateOn ?? "hover"}
							{...props}
						/>
					</div>
				</div>
			);

		case slug.includes("scroll-float") || title.includes("scroll float"):
			return <ScrollFloatWrapper {...props} />;

		case slug.includes("scroll-reveal") || title.includes("scroll reveal"):
			return <ScrollRevealWrapper {...props} />;

		case slug.includes("rotating-text") || title.includes("rotating text"):
			return (
				<div
					className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-panel)] p-8 flex items-center justify-center"
					style={{ minHeight: 200 }}
				>
					<div className="text-[28px] font-black text-[var(--sb-text-strong)] flex items-center gap-2">
						<span>I love</span>
						<RotatingText
							texts={props?.texts ?? ["React", "Bits", "Design", "Code"]}
							rotationInterval={props?.rotationInterval ?? 2000}
							staggerDuration={props?.staggerDuration ?? 0.025}
							mainClassName="px-2 bg-cyan-300 text-black overflow-hidden py-1 rounded-lg"
							{...props}
						/>
					</div>
				</div>
			);

		case slug.includes("glitch-text") || title.includes("glitch text"):
			return (
				<div
					className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-panel)] p-8 flex items-center justify-center"
					style={{ minHeight: 200 }}
				>
					<GlitchText
						speed={props?.speed ?? 1}
						enableShadows={props?.enableShadows ?? true}
						enableOnHover={props?.enableOnHover ?? true}
						className="text-[4rem] font-bold text-[var(--sb-text-strong)]"
						{...props}
					>
						{props?.text ?? "GLITCH"}
					</GlitchText>
				</div>
			);

		case slug.includes("scroll-velocity") || title.includes("scroll velocity"):
			return (
				<div
					className="w-full min-h-[300px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-panel)] p-4 flex flex-col justify-center overflow-hidden"
					style={{ minHeight: 300 }}
				>
					<ScrollVelocity
						texts={props?.texts ?? ["React Bits", "Scroll Velocity"]}
						velocity={props?.velocity ?? 100}
						className="custom-scroll-text text-[var(--sb-text-strong)]"
						{...props}
					/>
				</div>
			);

		case slug.includes("variable-proximity") || title.includes("variable proximity"):
			return <VariableProximityWrapper {...props} />;

		case slug.includes("count-up") || title.includes("count up") || title.includes("counter"):
			return (
				<div className="flex items-center justify-center w-full h-full min-h-[200px]">
					<CountUp
						from={props?.from ?? 0}
						to={props?.to ?? 100}
						separator={props?.separator ?? ","}
						direction={props?.direction ?? "up"}
						duration={props?.duration ?? 1}
						className={`text-[64px] font-black text-[var(--sb-text-strong)] ${props?.className ?? ""}`}
						{...props}
					/>
				</div>
			);

		// ... other cases fallback to generic
	}

	// Fallback for older simpler demos
	if (title.includes("typewriter")) {
		return <TypewriterDemo text="Typewriter text demo" />;
	}
	if (title.includes("glitch")) {
		return <GlitchTextDemo label={component.title} />;
	}
	if (title.includes("carousel")) {
		return <SimpleCarouselDemo />;
	}
	if (slug.includes("scroll") || title.includes("scroll") || url.includes("scroll")) {
		return <ScrollRevealDemo />;
	}
	if (url.includes("/background") || url.includes("/backgrounds")) {
		return <BackgroundPanelDemo title={component.title} />;
	}

	return (
		<div className="w-full">
			<div className="inline-flex items-center gap-3">
				<span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--sb-accent)]" />
				<div>
					<div className="text-[13px] font-extrabold text-[var(--sb-text-strong)]">{component.title}</div>
					<div className="text-[12px] font-medium text-[var(--sb-text-muted)]">Local demo preview</div>
				</div>
			</div>
		</div>
	);
}

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

export function getDemoControls(component: ComponentItem): DemoControl[] | null {
	const slug = component.slug.toLowerCase();
	const title = component.title.toLowerCase();

	if (slug.includes("circular-text") || title.includes("circular text")) {
		return [
			{
				type: "text",
				param: "text",
				label: "Text",
				defaultValue: "REACT*BITS*COMPONENTS*",
			},
			{
				type: "number",
				param: "spinDuration",
				label: "Spin Duration (s)",
				defaultValue: 20,
				min: 1,
				max: 60,
				step: 1,
			},
			{
				type: "select",
				param: "onHover",
				label: "On Hover",
				defaultValue: "speedUp",
				options: ["speedUp", "slowDown", "pause", "goBonkers"],
			},
		];
	}

	if (slug.includes("shiny-text") || title.includes("shiny text")) {
		return [
			{
				type: "text",
				param: "text",
				label: "Text",
				defaultValue: "✨ Shiny Text Effect",
			},
			{
				type: "number",
				param: "speed",
				label: "Speed",
				defaultValue: 2,
				min: 0.1,
				max: 10,
				step: 0.1,
			},
			{
				type: "number",
				param: "delay",
				label: "Delay",
				defaultValue: 0,
				min: 0,
				max: 10,
				step: 0.1,
			},
			{
				type: "color",
				param: "color",
				label: "Base Color",
				defaultValue: "#b5b5b5",
			},
			{
				type: "color",
				param: "shineColor",
				label: "Shine Color",
				defaultValue: "#ffffff",
			},
			{
				type: "number",
				param: "spread",
				label: "Spread",
				defaultValue: 120,
				min: 0,
				max: 360,
				step: 1,
			},
			{
				type: "boolean",
				param: "disabled",
				label: "Disabled",
				defaultValue: false,
			},
		];
	}

	if (slug.includes("falling-text") || title.includes("falling text")) {
		return [
			{
				type: "text",
				param: "text",
				label: "Text",
				defaultValue: "Words fall with physics. Drag to play.",
			},
			{
				type: "text",
				param: "highlightWords",
				label: "Highlight words (comma-separated)",
				defaultValue: "physics., Drag",
			},
			{
				type: "select",
				param: "trigger",
				label: "Trigger",
				defaultValue: "auto",
				options: ["auto", "scroll", "click", "hover"],
			},
			{
				type: "number",
				param: "gravity",
				label: "Gravity",
				defaultValue: 1,
				min: 0.1,
				max: 3,
				step: 0.1,
			},
			{
				type: "number",
				param: "mouseConstraintStiffness",
				label: "Mouse stiffness",
				defaultValue: 0.2,
				min: 0.01,
				max: 1,
				step: 0.01,
			},
			{
				type: "text",
				param: "fontSize",
				label: "Font size",
				defaultValue: "1.25rem",
			},
			{
				type: "boolean",
				param: "wireframes",
				label: "Wireframes (debug)",
				defaultValue: false,
			},
		];
	}

	if (slug.includes("text-cursor") || title.includes("text cursor")) {
		return [
			{
				type: "text",
				param: "text",
				label: "Text",
				defaultValue: "⚛️",
			},
			{
				type: "number",
				param: "spacing",
				label: "Spacing (px)",
				defaultValue: 80,
				min: 20,
				max: 200,
				step: 10,
			},
			{
				type: "boolean",
				param: "followMouseDirection",
				label: "Follow Mouse Direction",
				defaultValue: true,
			},
			{
				type: "boolean",
				param: "randomFloat",
				label: "Random Float",
				defaultValue: true,
			},
			{
				type: "number",
				param: "exitDuration",
				label: "Exit Duration (s)",
				defaultValue: 0.3,
				min: 0.1,
				max: 2,
				step: 0.1,
			},
			{
				type: "number",
				param: "removalInterval",
				label: "Removal Interval (ms)",
				defaultValue: 20,
				min: 10,
				max: 100,
				step: 10,
			},
			{
				type: "number",
				param: "maxPoints",
				label: "Max Points",
				defaultValue: 10,
				min: 1,
				max: 50,
				step: 1,
			},
		];
	}

	if (slug.includes("decrypted-text") || title.includes("decrypted text") || title.includes("decrypted")) {
		return [
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
				step: 10,
			},
			{
				type: "number",
				param: "maxIterations",
				label: "Max Iterations",
				defaultValue: 10,
				min: 1,
				max: 30,
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
				defaultValue: "start",
				options: ["start", "end", "center"],
			},
			{
				type: "select",
				param: "animateOn",
				label: "Animate On",
				defaultValue: "hover",
				options: ["hover", "view", "both"],
			},
		];
	}

	if (slug.includes("scroll-float") || title.includes("scroll float")) {
		return [
			{
				type: "text",
				param: "children",
				label: "Text",
				defaultValue: "React Bits",
			},
			{
				type: "number",
				param: "animationDuration",
				label: "Duration (s)",
				defaultValue: 1,
				min: 0.1,
				max: 5,
				step: 0.1,
			},
			{
				type: "text",
				param: "ease",
				label: "Ease",
				defaultValue: "back.inOut(2)",
			},
			{
				type: "number",
				param: "stagger",
				label: "Stagger",
				defaultValue: 0.03,
				min: 0.01,
				max: 0.5,
				step: 0.01,
			},
		];
	}

	if (slug.includes("scroll-reveal") || title.includes("scroll reveal")) {
		return [
			{
				type: "text",
				param: "children",
				label: "Text",
				defaultValue: "Scroll to reveal this text word by word.",
			},
			{
				type: "number",
				param: "baseOpacity",
				label: "Base Opacity",
				defaultValue: 0.1,
				min: 0,
				max: 1,
				step: 0.1,
			},
			{
				type: "boolean",
				param: "enableBlur",
				label: "Enable Blur",
				defaultValue: true,
			},
			{
				type: "number",
				param: "baseRotation",
				label: "Base Rotation (deg)",
				defaultValue: 3,
				min: 0,
				max: 90,
				step: 1,
			},
			{
				type: "number",
				param: "blurStrength",
				label: "Blur Strength (px)",
				defaultValue: 4,
				min: 0,
				max: 20,
				step: 1,
			},
		];
	}

	if (slug.includes("rotating-text") || title.includes("rotating text")) {
		return [
			{
				type: "number",
				param: "rotationInterval",
				label: "Interval (ms)",
				defaultValue: 2000,
				min: 500,
				max: 5000,
				step: 100,
			},
			{
				type: "number",
				param: "staggerDuration",
				label: "Stagger (s)",
				defaultValue: 0.025,
				min: 0,
				max: 0.2,
				step: 0.005,
			},
			{
				type: "boolean",
				param: "loop",
				label: "Loop",
				defaultValue: true,
			},
			{
				type: "boolean",
				param: "auto",
				label: "Auto Play",
				defaultValue: true,
			},
			{
				type: "select",
				param: "splitBy",
				label: "Split By",
				defaultValue: "characters",
				options: ["characters", "words", "lines"],
			},
		];
	}

	if (slug.includes("glitch-text") || title.includes("glitch text")) {
		return [
			{
				type: "text",
				param: "text",
				label: "Text",
				defaultValue: "GLITCH",
			},
			{
				type: "number",
				param: "speed",
				label: "Speed",
				defaultValue: 1,
				min: 0.1,
				max: 5,
				step: 0.1,
			},
			{
				type: "boolean",
				param: "enableShadows",
				label: "Enable Shadows",
				defaultValue: true,
			},
			{
				type: "boolean",
				param: "enableOnHover",
				label: "Enable on Hover",
				defaultValue: true,
			},
		];
	}

	if (slug.includes("scroll-velocity") || title.includes("scroll velocity")) {
		return [
			{
				type: "number",
				param: "velocity",
				label: "Velocity",
				defaultValue: 100,
				min: 10,
				max: 500,
				step: 10,
			},
		];
	}
	if (slug.includes("variable-proximity") || title.includes("variable proximity")) {
		return [
			{
				type: "text",
				param: "label",
				label: "Text",
				defaultValue: "Hover me! And then star React Bits on GitHub, or else...",
			},
			{
				type: "number",
				param: "radius",
				label: "Radius",
				defaultValue: 100,
				min: 50,
				max: 500,
				step: 10,
			},
			{
				type: "select",
				param: "falloff",
				label: "Falloff",
				defaultValue: "linear",
				options: ["linear", "exponential", "gaussian"],
			},
			{
				type: "text",
				param: "fromFontVariationSettings",
				label: "From Settings",
				defaultValue: "'wght' 400, 'opsz' 9",
			},
			{
				type: "text",
				param: "toFontVariationSettings",
				label: "To Settings",
				defaultValue: "'wght' 1000, 'opsz' 40",
			},
		];
	}

	if (slug.includes("count-up") || title.includes("count up") || title.includes("counter")) {
		return [
			{
				type: "number",
				param: "to",
				label: "To",
				defaultValue: 100,
			},
			{
				type: "number",
				param: "from",
				label: "From",
				defaultValue: 0,
			},
			{
				type: "number",
				param: "duration",
				label: "Duration (s)",
				defaultValue: 2,
				min: 0.1,
				max: 10,
				step: 0.1,
			},
			{
				type: "number",
				param: "delay",
				label: "Delay (s)",
				defaultValue: 0,
				min: 0,
				max: 5,
				step: 0.1,
			},
			{
				type: "text",
				param: "separator",
				label: "Separator",
				defaultValue: ",",
			},
			{
				type: "select",
				param: "direction",
				label: "Direction",
				defaultValue: "up",
				options: ["up", "down"],
			},
		];
	}

	return null;
}

export function getDemoCode(component: ComponentItem) {
	const title = component.title.toLowerCase();
	const slug = component.slug.toLowerCase();
	const url = component.url;

	if (slug.includes("split-text") || title.includes("split text")) return splitTextCode;
	if (slug.includes("circular-text") || title.includes("circular text")) return circularTextCode;
	if (slug.includes("shiny-text") || title.includes("shiny text")) return shinyTextCode;
	if (slug.includes("curved-marquee") || title.includes("curved marquee")) return curvedLoopCode;
	if (slug.includes("fuzzy-text") || title.includes("fuzzy text")) return fuzzyTextCode;
	if (slug.includes("gradient-text") || title.includes("gradient text")) return gradientTextCode;
	if (slug.includes("falling-text") || title.includes("falling text")) return fallingTextCode;
	if (slug.includes("text-cursor") || title.includes("text cursor")) return textCursorCode;
	if (slug.includes("decrypted-text") || title.includes("decrypted text") || title.includes("decrypted"))
		return decryptedTextCode;
	if (slug.includes("scroll-float") || title.includes("scroll float")) return scrollFloatCode;
	if (slug.includes("scroll-reveal") || title.includes("scroll reveal")) return scrollRevealCode;
	if (slug.includes("rotating-text") || title.includes("rotating text")) return rotatingTextCode;
	if (slug.includes("glitch-text") || title.includes("glitch text")) return glitchTextCode;
	if (slug.includes("scroll-velocity") || title.includes("scroll velocity")) return scrollVelocityCode;
	if (slug.includes("variable-proximity") || title.includes("variable proximity")) return variableProximityCode;
	if (
		slug.includes("count-up") ||
		title.includes("count up") ||
		title.includes("counter") ||
		title.includes("number counter")
	)
		return countUpCode;

	if (title.includes("typewriter")) {
		return [
			"// Typewriter text (local demo)",
			"export function TypewriterDemo({ text }: { text: string }) {",
			"  return (",
			'    <span className="inline-block overflow-hidden whitespace-nowrap [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">',
			"      {text}",
			"    </span>",
			"  );",
			"}",
		].join("\n");
	}

	if (title.includes("carousel")) {
		return [
			"// Minimal carousel (local demo)",
			"const items = ['One', 'Two', 'Three', 'Four'];",
			"const [index, setIndex] = useState(0);",
			"<button onClick={() => setIndex((i) => (i + 1) % items.length)}>Next</button>",
		].join("\n");
	}

	if (slug.includes("scroll") || title.includes("scroll")) {
		return [
			"// Scroll reveal (local demo)",
			"// Uses IntersectionObserver to toggle visibility.",
			"const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting));",
			"io.observe(node);",
		].join("\n");
	}

	if (component.url.toLowerCase().includes("/background") || component.url.toLowerCase().includes("/backgrounds")) {
		return [
			"// Background panel (local demo)",
			'<div className="[background:radial-gradient(...),radial-gradient(...)]" />',
		].join("\n");
	}

	return [
		"// Generic local demo",
		`// Upstream docs: ${url}`,
		"export function Demo() {",
		"  return <div>Local demo preview</div>;",
		"}",
	].join("\n");
}

export type ApiProp = {
	prop: string;
	type: string;
	default: string;
	description: string;
};

export function getApiReference(component: ComponentItem): ApiProp[] | null {
	const slug = component.slug.toLowerCase();
	const title = component.title.toLowerCase();

	if (slug.includes("circular-text") || title.includes("circular text")) {
		return [
			{
				prop: "text",
				type: "string",
				default: "''",
				description: "The text to display in a circular layout.",
			},
			{
				prop: "spinDuration",
				type: "number",
				default: "20",
				description: "The duration (in seconds) for one full rotation.",
			},
			{
				prop: "onHover",
				type: "'slowDown' | 'speedUp' | 'pause' | 'goBonkers'",
				default: "undefined",
				description: "Specifies the hover behavior variant.",
			},
			{
				prop: "className",
				type: "string",
				default: "''",
				description: "Optional additional CSS classes to apply to the component.",
			},
		];
	}

	if (slug.includes("shiny-text") || title.includes("shiny text")) {
		return [
			{
				prop: "text",
				type: "string",
				default: "'-'",
				description: "The text to be displayed with the shiny effect.",
			},
			{
				prop: "color",
				type: "string",
				default: '"#b5b5b5"',
				description: "The base color of the text.",
			},
			{
				prop: "shineColor",
				type: "string",
				default: '"#ffffff"',
				description: "The color of the shine/highlight effect.",
			},
			{
				prop: "speed",
				type: "number",
				default: "2",
				description: "Duration of one animation cycle in seconds.",
			},
			{
				prop: "delay",
				type: "number",
				default: "0",
				description: "Pause duration (in seconds) between animation cycles.",
			},
			{
				prop: "spread",
				type: "number",
				default: "120",
				description: "The angle (in degrees) of the gradient spread.",
			},
			{
				prop: "yoyo",
				type: "boolean",
				default: "false",
				description: "If true, the animation reverses direction instead of looping.",
			},
			{
				prop: "pauseOnHover",
				type: "boolean",
				default: "false",
				description: "Pauses the animation when the user hovers over the text.",
			},
			{
				prop: "direction",
				type: "'left' | 'right'",
				default: '"left"',
				description: "The direction the shine moves across the text.",
			},
			{
				prop: "disabled",
				type: "boolean",
				default: "false",
				description: "Disables the shiny effect when set to true.",
			},
		];
	}

	if (slug.includes("split-text") || title.includes("split text")) {
		return [
			{
				prop: "tag",
				type: "string",
				default: '"p"',
				description: 'HTML tag to render: "h1", "h2", "h3", "h4", "h5", "h6", "p"',
			},
			{
				prop: "text",
				type: "string",
				default: '""',
				description: "The text content to animate.",
			},
			{
				prop: "className",
				type: "string",
				default: '""',
				description: "Additional class names to style the component.",
			},
			{
				prop: "delay",
				type: "number",
				default: "50",
				description: "Delay between animations for each letter (in ms).",
			},
			{
				prop: "duration",
				type: "number",
				default: "1.25",
				description: "Duration of each letter animation (in seconds).",
			},
			{
				prop: "ease",
				type: "string",
				default: '"power3.out"',
				description: "GSAP easing function for the animation.",
			},
			{
				prop: "splitType",
				type: "string",
				default: '"chars"',
				description: 'Split type: "chars", "words", "lines", or "words, chars".',
			},
			{
				prop: "from",
				type: "object",
				default: "{ opacity: 0, y: 40 }",
				description: "Initial GSAP properties for each letter/word.",
			},
			{
				prop: "to",
				type: "object",
				default: "{ opacity: 1, y: 0 }",
				description: "Target GSAP properties for each letter/word.",
			},
			{
				prop: "threshold",
				type: "number",
				default: "0.1",
				description: "Intersection threshold to trigger the animation (0-1).",
			},
		];
	}

	if (slug.includes("curved-marquee") || title.includes("curved marquee")) {
		return [
			{
				prop: "marqueeText",
				type: "string",
				default: '""',
				description: "The text to display in the curved marquee",
			},
			{
				prop: "speed",
				type: "number",
				default: "2",
				description: "Animation speed of the marquee text",
			},
			{
				prop: "curveAmount",
				type: "number",
				default: "400",
				description: "Amount of curve in the text path",
			},
			{
				prop: "direction",
				type: '"left" | "right"',
				default: '"left"',
				description: "Initial direction of the marquee animation",
			},
			{
				prop: "interactive",
				type: "boolean",
				default: "true",
				description: "Whether the marquee can be dragged by the user",
			},
		];
	}

	if (slug.includes("fuzzy-text") || title.includes("fuzzy text")) {
		return [
			{
				prop: "fontSize",
				type: "number | string",
				default: '"clamp(2rem, 8vw, 8rem)"',
				description: "Font size of the text.",
			},
			{
				prop: "baseIntensity",
				type: "number",
				default: "0.18",
				description: "Fuzz intensity when not hovered.",
			},
			{
				prop: "hoverIntensity",
				type: "number",
				default: "0.5",
				description: "Fuzz intensity when hovered.",
			},
			{
				prop: "fuzzRange",
				type: "number",
				default: "30",
				description: "Maximum pixel displacement.",
			},
			{
				prop: "direction",
				type: "'horizontal' | 'vertical' | 'both'",
				default: "'horizontal'",
				description: "Axis for displacement effect.",
			},
			{
				prop: "glitchMode",
				type: "boolean",
				default: "false",
				description: "Enables periodic random intensity spikes.",
			},
		];
	}

	if (slug.includes("gradient-text") || title.includes("gradient text")) {
		return [
			{
				prop: "colors",
				type: "string[]",
				default: '["#40ffaa", "#4079ff", ...]',
				description: "Colors of the gradient.",
			},
			{
				prop: "animationSpeed",
				type: "number",
				default: "8",
				description: "Duration of one animation cycle.",
			},
			{
				prop: "showBorder",
				type: "boolean",
				default: "false",
				description: "Shows a border around the text.",
			},
			{
				prop: "direction",
				type: "'horizontal' | 'vertical' | 'diagonal'",
				default: "'horizontal'",
				description: "Direction of the animation.",
			},
		];
	}

	if (slug.includes("falling-text") || title.includes("falling text")) {
		return [
			{
				prop: "text",
				type: "string",
				default: '""',
				description: "The sentence or phrase; each word becomes a physics body.",
			},
			{
				prop: "highlightWords",
				type: "string[]",
				default: "[]",
				description: "Words that start with these strings get the highlight class.",
			},
			{
				prop: "highlightClass",
				type: "string",
				default: '"highlighted"',
				description: "CSS class applied to highlighted words.",
			},
			{
				prop: "trigger",
				type: "'auto' | 'scroll' | 'click' | 'hover'",
				default: '"auto"',
				description:
					"When the physics effect starts: auto immediately, scroll when in view, click or hover on the container.",
			},
			{
				prop: "backgroundColor",
				type: "string",
				default: '"transparent"',
				description: "Background of the Matter.js canvas.",
			},
			{
				prop: "wireframes",
				type: "boolean",
				default: "false",
				description: "Show Matter.js debug wireframes.",
			},
			{
				prop: "gravity",
				type: "number",
				default: "1",
				description: "World gravity (y-axis).",
			},
			{
				prop: "mouseConstraintStiffness",
				type: "number",
				default: "0.2",
				description: "Stiffness of the mouse-drag constraint.",
			},
			{
				prop: "fontSize",
				type: "string",
				default: '"1rem"',
				description: "CSS font size of the text.",
			},
		];
	}

	if (slug.includes("text-cursor") || title.includes("text cursor")) {
		return [
			{
				prop: "text",
				type: "string",
				default: '"⚛️"',
				description: "The text string to display as the trail.",
			},
			{
				prop: "spacing",
				type: "number",
				default: "100",
				description: "The spacing in pixels between each trail point.",
			},
			{
				prop: "followMouseDirection",
				type: "boolean",
				default: "true",
				description: "If true, each text rotates to follow the mouse direction.",
			},
			{
				prop: "randomFloat",
				type: "boolean",
				default: "true",
				description: "If true, enables random floating offsets in position and rotation for a dynamic effect.",
			},
			{
				prop: "exitDuration",
				type: "number",
				default: "0.5",
				description: "The duration in seconds for the exit animation of each trail item.",
			},
			{
				prop: "removalInterval",
				type: "number",
				default: "30",
				description: "The interval in milliseconds between removing trail items when the mouse stops moving.",
			},
			{
				prop: "maxPoints",
				type: "number",
				default: "5",
				description: "The maximum number of trail points to display.",
			},
		];
	}

	if (slug.includes("decrypted-text") || title.includes("decrypted text") || title.includes("decrypted")) {
		return [
			{
				prop: "text",
				type: "string",
				default: '""',
				description: "The target text to be revealed.",
			},
			{
				prop: "speed",
				type: "number",
				default: "50",
				description: "The speed of the scrambling animation in milliseconds.",
			},
			{
				prop: "maxIterations",
				type: "number",
				default: "10",
				description: "Number of times each character scrambles before revealing the correct one.",
			},
			{
				prop: "sequential",
				type: "boolean",
				default: "false",
				description: "If true, characters reveal one after another instead of all at once.",
			},
			{
				prop: "revealDirection",
				type: "'start' | 'end' | 'center'",
				default: '"start"',
				description: "The direction in which characters are revealed when sequential is true.",
			},
			{
				prop: "useOriginalCharsOnly",
				type: "boolean",
				default: "false",
				description: "If true, only characters present in the text prop will be used for scrambling.",
			},
			{
				prop: "characters",
				type: "string",
				default: '"ABCDEFGHIJKLMNOPQRSTUVWXYZ..."',
				description: "A string of characters to use for the scrambling effect.",
			},
			{
				prop: "animateOn",
				type: "'hover' | 'view' | 'both'",
				default: '"hover"',
				description: "Triggers the animation either on mouse hover or when the component enters the viewport.",
			},
		];
	}

	if (slug.includes("scroll-float") || title.includes("scroll float")) {
		return [
			{
				prop: "children",
				type: "ReactNode",
				default: "null",
				description: "The content to animate. Strings are split into characters.",
			},
			{
				prop: "animationDuration",
				type: "number",
				default: "1",
				description: "Duration (in seconds) of the animation.",
			},
			{
				prop: "ease",
				type: "string",
				default: '"back.inOut(2)"',
				description: "GSAP easing function string.",
			},
			{
				prop: "scrollStart",
				type: "string",
				default: '"center bottom+=50%"',
				description: "The scroll trigger start position.",
			},
			{
				prop: "scrollEnd",
				type: "string",
				default: '"bottom bottom-=40%"',
				description: "The scroll trigger end position.",
			},
			{
				prop: "stagger",
				type: "number",
				default: "0.03",
				description: "Delay between the animation start of each character.",
			},
		];
	}

	if (slug.includes("scroll-reveal") || title.includes("scroll reveal")) {
		return [
			{
				prop: "children",
				type: "ReactNode",
				default: "null",
				description: "The text or elements to be animated.",
			},
			{
				prop: "baseOpacity",
				type: "number",
				default: "0.1",
				description: "Initial opacity before animation starts.",
			},
			{
				prop: "enableBlur",
				type: "boolean",
				default: "true",
				description: "Enables blur effect on words.",
			},
			{
				prop: "baseRotation",
				type: "number",
				default: "3",
				description: "Starting rotation (deg) for the container.",
			},
			{
				prop: "blurStrength",
				type: "number",
				default: "4",
				description: "Strength of blur effect (px) at start.",
			},
			{
				prop: "rotationEnd",
				type: "string",
				default: '"bottom bottom"',
				description: "Scroll trigger end point for rotation.",
			},
			{
				prop: "wordAnimationEnd",
				type: "string",
				default: '"bottom bottom"',
				description: "Scroll trigger end point for word opacity/blur.",
			},
		];
	}

	if (slug.includes("rotating-text") || title.includes("rotating text")) {
		return [
			{
				prop: "texts",
				type: "string[]",
				default: "[]",
				description: "Array of text strings to rotate through.",
			},
			{
				prop: "rotationInterval",
				type: "number",
				default: "2000",
				description: "Interval (ms) between text rotations.",
			},
			{
				prop: "staggerDuration",
				type: "number",
				default: "0",
				description: "Delay (s) between animation of each character/word.",
			},
			{
				prop: "splitBy",
				type: "string",
				default: '"characters"',
				description: "Split unit: 'characters', 'words', or 'lines'.",
			},
			{
				prop: "loop",
				type: "boolean",
				default: "true",
				description: "Whether to loop back to the first text.",
			},
			{
				prop: "auto",
				type: "boolean",
				default: "true",
				description: "Whether rotation starts automatically.",
			},
			{
				prop: "mainClassName",
				type: "string",
				default: '""',
				description: "Class for the main container.",
			},
		];
	}

	if (slug.includes("glitch-text") || title.includes("glitch text")) {
		return [
			{
				prop: "children",
				type: "string",
				default: '""',
				description: "The text content to display.",
			},
			{
				prop: "speed",
				type: "number",
				default: "1",
				description: "Animation speed multiplier.",
			},
			{
				prop: "enableShadows",
				type: "boolean",
				default: "true",
				description: "Enable or disable the glitch shadow effect.",
			},
			{
				prop: "enableOnHover",
				type: "boolean",
				default: "true",
				description: "Trigger glitch effect only on hover.",
			},
			{
				prop: "className",
				type: "string",
				default: '""',
				description: "Custom classes for the container.",
			},
		];
	}

	if (slug.includes("scroll-velocity") || title.includes("scroll velocity")) {
		return [
			{
				prop: "texts",
				type: "string[]",
				default: "[]",
				description: "Array of strings to display in the scrolling bands.",
			},
			{
				prop: "velocity",
				type: "number",
				default: "100",
				description: "Base velocity for the scrolling effect.",
			},
			{
				prop: "className",
				type: "string",
				default: '""',
				description: "Custom class for individual text items.",
			},
		];
	}

	return null;
}
