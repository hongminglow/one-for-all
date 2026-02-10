"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { motion } from "motion/react";

import { Bot, ClipboardPaste, Copy, Pin, Scissors, Search, Star, Trash2, User, Zap } from "lucide-react";

import ScrollFloat from "@/components/reactbits/ScrollFloat";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import VariableProximity from "@/components/reactbits/VariableProximity";
import { DateWheelPicker } from "@/components/jolyui/DateWheelPicker";
import { type FileTreeNode } from "@/components/jolyui/FileTree";
import { AnimatedBeam, BeamContainer, BeamNode } from "@/components/jolyui/AnimatedBeam";
import { HoverPreviewLink, HoverPreviewProvider } from "@/components/jolyui/HoverPreview";
import Calendar from "@/components/shadcn/Calendar";
import { AnimatedCircularProgressBar } from "@/components/magicui/CircularProgressBar";
import CompactConfetti, { type ConfettiRef } from "@/components/magicui/CompactConfetti";
import { IconCloud } from "@/components/magicui/IconCloud";
import { Progress } from "@/components/animate-ui/components/radix/progress";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@/components/animate-ui/components/radix/sheet";
import { FlipButton, FlipButtonFront, FlipButtonBack } from "@/components/animate-ui/components/buttons/flip";
import { RippleButton, RippleButtonRipples } from "@/components/animate-ui/components/buttons/ripple";

import {
	Popover,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
} from "@/components/animate-ui/primitives/radix/popover";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { Lens } from "@/components/ui/lens";
import Crosshair from "@/components/tsdefault/Crosshair";
import { addDays } from "date-fns";
import { GanttFeature, GanttProvider, GanttStatus } from "@/components/shadcn/GanttChart";

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	FlipButton,
	FlipButtonBack,
	FlipButtonFront,
	RippleButton,
	RippleButtonRipples,
};

export const DEFAULT_FILE_TREE: FileTreeNode[] = [
	{
		type: "folder",
		name: "src",
		children: [
			{
				type: "folder",
				name: "components",
				children: [
					{ type: "file", name: "RainbowButton.tsx" },
					{ type: "file", name: "Calendar.tsx" },
					{ type: "file", name: "ImageSphere.tsx" },
				],
			},
			{ type: "file", name: "app.tsx" },
		],
	},
];

export const DEMO_IMAGES = [
	{
		id: "1",
		src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&auto=format&fit=crop&q=60",
		alt: "Team",
	},
	{
		id: "2",
		src: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?w=400&auto=format&fit=crop&q=60",
		alt: "City",
	},
	{
		id: "3",
		src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop&q=60",
		alt: "Mountains",
	},
	{
		id: "4",
		src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&auto=format&fit=crop&q=60",
		alt: "Sunset",
	},
	{
		id: "5",
		src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&auto=format&fit=crop&q=60",
		alt: "Code",
	},
];

export const RADIAL_ITEMS = [
	{
		id: 1,
		name: "Framer University",
		src: "https://pbs.twimg.com/profile_images/1602734731728142336/9Bppcs67_400x400.jpg",
	},
	{
		id: 2,
		name: "arhamkhnz",
		src: "https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg",
	},
	{
		id: 3,
		name: "Skyleen",
		src: "https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg",
	},
	{
		id: 4,
		name: "Shadcn",
		src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
	},
	{
		id: 5,
		name: "Adam Wathan",
		src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
	},
	{
		id: 6,
		name: "Guillermo Rauch",
		src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
	},
	{
		id: 7,
		name: "Jhey",
		src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
	},
	{
		id: 8,
		name: "David Haz",
		src: "https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg",
	},
	{
		id: 9,
		name: "Matt Perry",
		src: "https://pbs.twimg.com/profile_images/1690345911149375488/wfD0Ai9j_400x400.jpg",
	},
];

export const MENU_ITEMS = [
	{ id: 1, label: "Copy", icon: Copy },
	{ id: 2, label: "Cut", icon: Scissors },
	{ id: 3, label: "Paste", icon: ClipboardPaste },
	{ id: 4, label: "Favorite", icon: Star },
	{ id: 5, label: "Pin", icon: Pin },
	{ id: 6, label: "Delete", icon: Trash2 },
];

export const slugs = [
	"typescript",
	"javascript",
	"dart",
	"java",
	"react",
	"flutter",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
	"androidstudio",
	"sonarqube",
	"figma",
];

export const beforeCode = `
import { NextRequest } from 'next/server';
export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token');
  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);
    if(!user) {
      return NextResponse.redirect('/login');
    }
  }
  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);
    if(!user) {
      return NextResponse.redirect('/login');
    }
    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]
    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]
  return NextResponse.next(); // [!code highlight]
}
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`;

export const afterCode = `
import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';
export const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};
export const middleware = createMiddleware(middlewares); // [!code focus]
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

export const products = [
	{
		title: "Moonbeam",
		link: "https://gomoonbeam.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
	},
	{
		title: "Editrix AI",
		link: "https://editrix.ai",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
	},
	{
		title: "Pixel Perfect",
		link: "https://app.pixelperfect.quest",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
	},

	{
		title: "Algochurn",
		link: "https://algochurn.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
	},
	{
		title: "Aceternity UI",
		link: "https://ui.aceternity.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
	},
	{
		title: "Tailwind Master Kit",
		link: "https://tailwindmasterkit.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
	},
	{
		title: "SmartBridge",
		link: "https://smartbridgetech.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
	},
	{
		title: "Renderwork Studio",
		link: "https://renderwork.studio",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
	},

	{
		title: "Creme Digital",
		link: "https://cremedigital.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
	},
	{
		title: "Golden Bells Academy",
		link: "https://goldenbellsacademy.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
	},
	{
		title: "Invoker Labs",
		link: "https://invoker.lol",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
	},
	{
		title: "E Free Invoice",
		link: "https://efreeinvoice.com",
		thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
	},
];
interface RadixPopoverDemoProps {
	side?: "top" | "bottom" | "left" | "right";
	sideOffset?: number;
	align?: "start" | "center" | "end";
	alignOffset?: number;
}

export function AnimatedBeamDemo(props?: { curvature?: number; duration?: number; reverse?: boolean }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const userRef = useRef<HTMLDivElement>(null);
	const aiRef = useRef<HTMLDivElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);
	const resultRef = useRef<HTMLDivElement>(null);

	return (
		<BeamContainer
			ref={containerRef}
			className="mx-auto flex w-full items-center justify-between rounded-xl border bg-background p-10 shadow-sm"
		>
			<div className="flex flex-col items-center gap-2">
				<BeamNode ref={userRef} className="h-12 w-12 border-2 border-blue-500/20 bg-blue-500/10">
					<User className="h-6 w-6 text-blue-600" />
				</BeamNode>
				<span className="font-medium text-[10px] text-muted-foreground uppercase tracking-wider">User</span>
			</div>

			<div className="flex flex-col items-center gap-2">
				<BeamNode
					ref={aiRef}
					className="h-16 w-16 border-2 border-purple-500/20 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
				>
					<Bot className="h-8 w-8 text-purple-600" />
				</BeamNode>
				<span className="font-medium text-[10px] text-muted-foreground uppercase tracking-wider">AI Agent</span>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex flex-col items-center gap-2">
					<BeamNode ref={searchRef} className="h-12 w-12 border-2 border-amber-500/20 bg-amber-500/10">
						<Search className="h-5 w-5 text-amber-600" />
					</BeamNode>
					<span className="font-medium text-[10px] text-muted-foreground uppercase tracking-wider">Search</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<BeamNode ref={resultRef} className="h-12 w-12 border-2 border-emerald-500/20 bg-emerald-500/10">
						<Zap className="h-5 w-5 text-emerald-600" />
					</BeamNode>
					<span className="font-medium text-[10px] text-muted-foreground uppercase tracking-wider">Result</span>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={userRef}
				toRef={aiRef}
				duration={props?.duration ?? 3}
				curvature={props?.curvature ?? 0.2}
				reverse={props?.reverse}
				gradientStartColor="#3b82f6"
				gradientStopColor="#8b5cf6"
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={aiRef}
				toRef={searchRef}
				duration={3}
				delay={0.5}
				curvature={-0.3}
				gradientStartColor="#8b5cf6"
				gradientStopColor="#f59e0b"
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={searchRef}
				toRef={aiRef}
				duration={3}
				delay={1.5}
				curvature={-0.3}
				reverse
				gradientStartColor="#f59e0b"
				gradientStopColor="#8b5cf6"
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={aiRef}
				toRef={resultRef}
				duration={3}
				delay={2.5}
				curvature={0.3}
				gradientStartColor="#8b5cf6"
				gradientStopColor="#10b981"
			/>
		</BeamContainer>
	);
}

export function CalendarDemo() {
	const [selected, setSelected] = useState<Date>(new Date());
	return <Calendar value={selected} onChange={setSelected} />;
}

export function CompactConfettiDemo(props: { particleCount?: number; spread?: number }) {
	const confettiRef = useRef<ConfettiRef>(null);
	return (
		<div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card)">
			<CompactConfetti ref={confettiRef} className="absolute inset-0 h-full w-full" manualStart />
			<div className="absolute inset-0 flex items-center justify-center">
				<button
					type="button"
					className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[13px] font-black text-(--sb-text-strong)"
					onClick={() =>
						confettiRef.current?.fire({
							particleCount: props.particleCount ?? 120,
							spread: props.spread ?? 70,
							startVelocity: 35,
							scalar: 0.85,
							ticks: 200,
						})
					}
				>
					Celebrate
				</button>
			</div>
		</div>
	);
}

export function SheetDemo(props: { side?: "top" | "bottom" | "left" | "right" }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type="button"
					className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[13px] font-black text-(--sb-text-strong)"
				>
					Open Sheet
				</button>
			</SheetTrigger>
			<SheetContent side={props.side ?? "right"}>
				<SheetHeader>
					<SheetTitle>Sheet Title</SheetTitle>
					<SheetDescription>This is a simple sheet implementation from Animate UI.</SheetDescription>
				</SheetHeader>
				<div className="p-4">This is the content of the sheet.</div>
			</SheetContent>
		</Sheet>
	);
}

export function CrosshairDemo(props: { size?: number }) {
	const [enabled, setEnabled] = useState(false);
	return (
		<div className="relative w-full max-w-[620px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
			{enabled ? <Crosshair size={props.size ?? 22} /> : null}
			<div className="text-[14px] font-black text-(--sb-text-strong)">Crosshair</div>
			<div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
				Toggle to enable the pointer-following overlay.
			</div>
			<div className="mt-4">
				<button
					type="button"
					className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[13px] font-black text-(--sb-text-strong)"
					onClick={() => setEnabled((v) => !v)}
				>
					{enabled ? "Disable" : "Enable"}
				</button>
			</div>
		</div>
	);
}

export function HoverPreviewDemo() {
	return (
		<div className="rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
			<HoverPreviewProvider
				data={{
					one: {
						image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60",
						title: "Hover Preview",
						subtitle: "Tooltip-style card",
					},
				}}
			>
				<div className="text-[13px] font-semibold text-(--sb-text-muted)">Hover over:</div>
				<div className="mt-2 text-[18px] font-black">
					<HoverPreviewLink previewKey="one">this link</HoverPreviewLink>
				</div>
			</HoverPreviewProvider>
		</div>
	);
}

export function TypewriterDemo(props: { text: string }) {
	return (
		<div className="font-mono text-[15px] font-bold text-(--sb-text-strong)">
			<span className="inline-block overflow-hidden whitespace-nowrap align-bottom [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">
				{props.text}
			</span>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CountUpDemo(props: { to: number }) {
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

	return <div className="text-[28px] font-black tracking-tight text-(--sb-text-strong)">{value.toLocaleString()}</div>;
}

export function DateWheelPickerDemo() {
	const [date, setDate] = useState<Date>(new Date());

	return (
		<div className="relative flex h-[300px] w-full flex-col items-center justify-center gap-4">
			<DateWheelPicker value={date} onChange={setDate} />
			<p className="text-muted-foreground text-sm">Selected: {date.toLocaleDateString()}</p>
		</div>
	);
}

export function GlitchTextDemo(props: { label: string }) {
	return (
		<div className="relative text-[26px] font-black tracking-tight text-(--sb-text-strong)">
			<span className="relative inline-block [text-shadow:2px_0_0_rgba(139,92,246,0.7),-2px_0_0_rgba(99,102,241,0.6)] [animation:glitch_1.4s_infinite]">
				{props.label}
			</span>
		</div>
	);
}

export const RadixPopoverDemo = ({ side, sideOffset, align, alignOffset }: RadixPopoverDemoProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open popover</Button>
			</PopoverTrigger>
			<PopoverPortal>
				<PopoverContent side={side} sideOffset={sideOffset} align={align} alignOffset={alignOffset} className="w-80">
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="leading-none font-medium">Dimensions</h4>
							<p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
						</div>
						<div className="grid gap-2">
							<div className="grid grid-cols-3 items-center gap-4">
								<label htmlFor="width">Width</label>
								<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<label htmlFor="maxWidth">Max. width</label>
								<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<label htmlFor="height">Height</label>
								<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<label htmlFor="maxHeight">Max. height</label>
								<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
							</div>
						</div>
					</div>
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DecryptedTextDemo(props: { text: string }) {
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

	return <div className="font-mono text-[15px] font-bold text-(--sb-text-strong)">{shown}</div>;
}

export function SimpleCarouselDemo() {
	const items = ["One", "Two", "Three", "Four"];
	const [i, setI] = useState(0);
	const current = items[i] ?? items[0];

	return (
		<div className="w-full max-w-[520px]">
			<div className="rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg) p-6">
				<div className="text-[18px] font-black text-(--sb-text-strong)">{current}</div>
				<div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">Minimal carousel demo</div>
				<div className="mt-4 flex gap-2">
					<button
						type="button"
						onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
						className="h-10 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 text-[12px] font-black text-(--sb-text-strong)"
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

export function BackgroundPanelDemo(props: { title: string }) {
	return (
		<div className="relative h-[160px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
			<div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.55),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(167,139,250,0.35),transparent_55%)]" />
			<div className="absolute inset-0 opacity-50 [background:linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.06))] [animation:bgshift_4.5s_linear_infinite]" />
			<div className="relative flex h-full items-end p-4">
				<div className="rounded-xl border border-(--sb-border) bg-(--sb-card) px-3 py-2">
					<div className="text-[12px] font-black text-(--sb-text-strong)">{props.title}</div>
					<div className="text-[11px] font-semibold text-(--sb-text-muted)">Local background demo</div>
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ScrollFloatWrapper(props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={containerRef}
			className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-(--sb-panel) overflow-y-auto overflow-x-hidden sb-scroll"
		>
			<div className="flex flex-col items-center justify-center p-8" style={{ height: "1000px" }}>
				<div style={{ height: "400px", flexShrink: 0 }} />
				<ScrollFloat
					scrollContainerRef={containerRef}
					animationDuration={props?.animationDuration ?? 1}
					ease={props?.ease ?? "back.inOut(2)"}
					stagger={props?.stagger ?? 0.03}
					containerClassName={`text-[48px] font-black text-(--sb-text-strong) text-center ${props?.containerClassName ?? ""}`}
					{...props}
				>
					{props?.children ?? "React Bits"}
				</ScrollFloat>
				<div style={{ height: "400px", flexShrink: 0 }} />
			</div>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ScrollRevealWrapper(props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={containerRef}
			className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-(--sb-panel) overflow-y-auto overflow-x-hidden sb-scroll"
		>
			<div className="flex flex-col items-center justify-center p-8 text-center" style={{ height: "1000px" }}>
				<div style={{ height: "400px", flexShrink: 0 }} />
				<ScrollReveal
					scrollContainerRef={containerRef}
					baseOpacity={props?.baseOpacity ?? 0.1}
					enableBlur={props?.enableBlur ?? true}
					baseRotation={props?.baseRotation ?? 3}
					blurStrength={props?.blurStrength ?? 4}
					containerClassName={`text-[28px] font-bold text-(--sb-text-strong) ${props?.containerClassName ?? ""}`}
					{...props}
				>
					{props?.children ?? "Scroll down to reveal the beauty of React Bits."}
				</ScrollReveal>
				<div style={{ height: "400px", flexShrink: 0 }} />
			</div>
		</div>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function VariableProximityWrapper(_props: any) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div ref={containerRef} className="demo-container" style={{ position: "relative" }}>
			<VariableProximity
				label={"Hover me! And then star React Bits on GitHub, or else..."}
				className={"variable-proximity-demo"}
				fromFontVariationSettings="'wght' 400, 'opsz' 9"
				toFontVariationSettings="'wght' 1000, 'opsz' 40"
				containerRef={containerRef}
				radius={100}
				falloff="linear"
			/>
		</div>
	);
}

export function ScrollRevealDemo() {
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
		<div className="h-[180px] w-full max-w-[520px] overflow-auto rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg) p-4 sb-scroll">
			<div className="h-[120px]" />
			<div
				ref={ref}
				className={
					visible
						? "rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-5 transition-all duration-300"
						: "translate-y-4 rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-5 opacity-40 blur-[1px] transition-all duration-300"
				}
			>
				<div className="text-[14px] font-black text-(--sb-text-strong)">Revealed on scroll</div>
				<div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">Scroll inside this panel to trigger</div>
			</div>
			<div className="h-[180px]" />
		</div>
	);
}

export function RadixProgressDemo() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) return 100;
				return prev + 25;
			});
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (progress >= 100) setTimeout(() => setProgress(0), 4000);
	}, [progress]);

	return <Progress value={progress} className="w-[520px]" />;
}

export function IconCloudDemo() {
	const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
	return (
		<div className="relative flex size-full items-center justify-center overflow-hidden">
			<IconCloud images={images} />
		</div>
	);
}

export function AnimatedCircularProgressBarDemo() {
	const [value, setValue] = useState(0);
	useEffect(() => {
		const handleIncrement = (prev: number) => {
			if (prev === 100) {
				return 0;
			}
			return prev + 10;
		};
		const interval = setInterval(() => setValue(handleIncrement), 2000);
		return () => clearInterval(interval);
	}, []);
	return (
		<AnimatedCircularProgressBar
			value={value}
			gaugePrimaryColor="rgb(79 70 229)"
			gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
		/>
	);
}

export function DraggableCardDemo() {
	const items = [
		{
			title: "Tyler Durden",
			image:
				"https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-10 left-[20%] rotate-[-5deg]",
		},
		{
			title: "The Narrator",
			image:
				"https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-40 left-[25%] rotate-[-7deg]",
		},
		{
			title: "Iceland",
			image:
				"https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-5 left-[40%] rotate-[8deg]",
		},
		{
			title: "Japan",
			image:
				"https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-32 left-[55%] rotate-[10deg]",
		},
		{
			title: "Norway",
			image:
				"https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-20 right-[35%] rotate-[2deg]",
		},
		{
			title: "New Zealand",
			image:
				"https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-24 left-[45%] rotate-[-7deg]",
		},
		{
			title: "Canada",
			image:
				"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-8 left-[30%] rotate-[4deg]",
		},
	];
	return (
		<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
			<p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
				If its your first day at Fight Club, you have to fight.
			</p>
			{items.map((item) => (
				<DraggableCardBody key={item.title} className={item.className}>
					<img src={item.image} alt={item.title} className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
					<h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">{item.title}</h3>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	);
}

export const Beams = () => {
	return (
		<svg
			width="380"
			height="315"
			viewBox="0 0 380 315"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
		>
			<g filter="url(#filter0_f_120_7473)">
				<circle cx="34" cy="52" r="114" fill="#6925E7" />
			</g>
			<g filter="url(#filter1_f_120_7473)">
				<circle cx="332" cy="24" r="102" fill="#8A4BFF" />
			</g>
			<g filter="url(#filter2_f_120_7473)">
				<circle cx="191" cy="53" r="102" fill="#802FE3" />
			</g>
			<defs>
				<filter
					id="filter0_f_120_7473"
					x="-192"
					y="-174"
					width="452"
					height="452"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur_120_7473" />
				</filter>
				<filter
					id="filter1_f_120_7473"
					x="70"
					y="-238"
					width="524"
					height="524"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_120_7473" />
				</filter>
				<filter
					id="filter2_f_120_7473"
					x="-71"
					y="-209"
					width="524"
					height="524"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_120_7473" />
				</filter>
			</defs>
		</svg>
	);
};

export const Rays = ({ className }: { className?: string }) => {
	return (
		<svg
			width="380"
			height="397"
			viewBox="0 0 380 397"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("absolute left-0 top-0  pointer-events-none z-[1]", className)}
		>
			<g filter="url(#filter0_f_120_7480)">
				<path
					d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
					fill="url(#paint0_linear_120_7480)"
				/>
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} opacity="0.3" filter="url(#filter1_f_120_7480)">
				<path
					d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
					fill="url(#paint1_linear_120_7480)"
				/>
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} opacity="0.86" filter="url(#filter2_f_120_7480)">
				<path
					d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
					fill="url(#paint2_linear_120_7480)"
				/>
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} opacity="0.31" filter="url(#filter3_f_120_7480)">
				<path
					d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
					fill="#8A50FF"
				/>
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter4_f_120_7480)">
				<path d="M34.2031 13.2222L291.721 269.534" stroke="url(#paint3_linear_120_7480)" />
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter5_f_120_7480)">
				<path d="M41 -40.9331L298.518 215.378" stroke="url(#paint4_linear_120_7480)" />
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter6_f_120_7480)">
				<path d="M61.3691 3.8999L317.266 261.83" stroke="url(#paint5_linear_120_7480)" />
			</g>
			<g style={{ mixBlendMode: "plus-lighter" }} filter="url(#filter7_f_120_7480)">
				<path d="M-1.46191 9.06348L129.458 145.868" stroke="url(#paint6_linear_120_7480)" strokeWidth="2" />
			</g>
			<defs>
				<filter
					id="filter0_f_120_7480"
					x="-49.4199"
					y="-102.729"
					width="304.212"
					height="296.803"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter1_f_120_7480"
					x="-115.54"
					y="-64.0903"
					width="300.326"
					height="293.822"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter2_f_120_7480"
					x="-111.647"
					y="-103.654"
					width="317.434"
					height="311.722"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter3_f_120_7480"
					x="-212.518"
					y="-188.71"
					width="473.085"
					height="369.366"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="48" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter4_f_120_7480"
					x="25.8447"
					y="4.84521"
					width="274.234"
					height="273.065"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter5_f_120_7480"
					x="32.6416"
					y="-49.3101"
					width="274.234"
					height="273.065"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter6_f_120_7480"
					x="54.0078"
					y="-3.47461"
					width="270.619"
					height="272.68"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<filter
					id="filter7_f_120_7480"
					x="-9.2002"
					y="1.32812"
					width="146.396"
					height="152.275"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_120_7480" />
				</filter>
				<linearGradient
					id="paint0_linear_120_7480"
					x1="-57.5042"
					y1="-134.741"
					x2="403.147"
					y2="351.523"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.214779" stopColor="#AF53FF" />
					<stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_120_7480"
					x1="-122.154"
					y1="-103.098"
					x2="342.232"
					y2="379.765"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.214779" stopColor="#AF53FF" />
					<stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_120_7480"
					x1="-106.717"
					y1="-138.534"
					x2="359.545"
					y2="342.58"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.214779" stopColor="#9D53FF" />
					<stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_120_7480"
					x1="72.701"
					y1="54.347"
					x2="217.209"
					y2="187.221"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#AF81FF" />
					<stop offset="1" stopColor="#C081FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint4_linear_120_7480"
					x1="79.4978"
					y1="0.191681"
					x2="224.006"
					y2="133.065"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#AF81FF" />
					<stop offset="1" stopColor="#C081FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint5_linear_120_7480"
					x1="79.6568"
					y1="21.8377"
					x2="234.515"
					y2="174.189"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#B981FF" />
					<stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint6_linear_120_7480"
					x1="16.119"
					y1="27.6966"
					x2="165.979"
					y2="184.983"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#A981FF" />
					<stop offset="1" stopColor="#CB81FF" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export function LensDemo() {
	const [hovering, setHovering] = useState(false);

	return (
		<div>
			<div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
				<Rays />
				<Beams />
				<div className="relative z-10">
					<Lens hovering={hovering} setHovering={setHovering}>
						<img
							src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image"
							width={500}
							height={500}
							className="rounded-2xl"
						/>
					</Lens>
					<motion.div
						animate={{
							filter: hovering ? "blur(2px)" : "blur(0px)",
						}}
						className="py-4 relative z-20"
					>
						<h2 className="text-white text-2xl text-left font-bold">Apple Vision Pro</h2>
						<p className="text-neutral-200 text-left  mt-4">
							The all new apple vision pro was the best thing that happened around 8 months ago, not anymore.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
