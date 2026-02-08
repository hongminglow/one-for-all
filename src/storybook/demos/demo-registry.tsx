"use client";

import { useEffect, useRef, useState } from "react";

import type { ComponentItem } from "@/storybook/components.generated";
import SplitText from "@/components/reactbits/SplitText";
import CircularText from "@/components/reactbits/CircularText";
import Dock from "@/components/reactbits/Dock";
import Carousel from "@/components/reactbits/Carousel";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import ModelViewer from "@/components/reactbits/ModelViewer";
import FlowingMenu from "@/components/reactbits/FlowingMenu";
import ElasticSlider from "@/components/reactbits/ElasticSlider";
import Counter from "@/components/reactbits/Counter";
import InfiniteMenu from "@/components/reactbits/InfiniteMenu";
import Stepper, { Step } from "@/components/reactbits/Stepper";
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
import LiquidEther from "@/components/reactbits/LiquidEther";
import Prism from "@/components/reactbits/Prism";
import DarkVeil from "@/components/reactbits/DarkVeil";
import LightPillar from "@/components/reactbits/LightPillar";
import FloatingLines from "@/components/reactbits/FloatingLines";
import LightRays from "@/components/reactbits/LightRays";
import ColorBends from "@/components/reactbits/ColorBends";
import Particles from "@/components/reactbits/Particles";
import Lightning from "@/components/reactbits/Lightning";
import Galaxy from "@/components/reactbits/Galaxy";
import DotGrid from "@/components/reactbits/DotGrid";
import Hyperspeed from "@/components/reactbits/Hyperspeed";
import Ballpit from "@/components/reactbits/Ballpit";
import Orb from "@/components/reactbits/Orb";
import LetterGlitch from "@/components/reactbits/LetterGlitch";
import GridMotion from "@/components/reactbits/GridMotion";
import RainbowButton from "@/components/jolyui/RainbowButton";
import GooeyTextMorphing from "@/components/jolyui/GooeyTextMorphing";
import HighlightText from "@/components/jolyui/HighlightText";
import RotateText from "@/components/jolyui/RotateText";
import TypewriterText from "@/components/jolyui/TypewriterText";
import AIPromptBox from "@/components/jolyui/AIPromptBox";
import AnimatedThemeToggle from "@/components/jolyui/AnimatedThemeToggle";
import DateWheelPicker from "@/components/jolyui/DateWheelPicker";
import FeedbackWidget from "@/components/jolyui/FeedbackWidget";
import FileTree, { type FileTreeNode } from "@/components/jolyui/FileTree";
import AnimatedBeam from "@/components/jolyui/AnimatedBeam";
import ExpandedMap from "@/components/jolyui/ExpandedMap";
import GitHubStarButton from "@/components/jolyui/GitHubStarButton";
import {
  HoverPreviewLink,
  HoverPreviewProvider,
} from "@/components/jolyui/HoverPreview";
import ImageSphere from "@/components/jolyui/ImageSphere";
import CodeBlock from "@/components/shadcn/CodeBlock";
import CodeEditor from "@/components/shadcn/CodeEditor";
import CodeTabs from "@/components/shadcn/CodeTabs";
import Sandbox from "@/components/shadcn/Sandbox";
import GanttChart from "@/components/shadcn/GanttChart";
import Kanban from "@/components/shadcn/Kanban";
import AndroidMock from "@/components/shadcn/AndroidMock";
import IPhoneMock from "@/components/shadcn/IPhoneMock";
import MacOSDock from "@/components/shadcn/MacOSDock";
import Rating from "@/components/shadcn/Rating";
import CreditCard from "@/components/shadcn/CreditCard";
import ColorPicker from "@/components/shadcn/ColorPicker";
import ComboboxDemo from "@/components/shadcn/ComboboxDemo";
import Dropzone from "@/components/shadcn/Dropzone";
import ImageZoom from "@/components/shadcn/ImageZoom";
import ImageCrop from "@/components/shadcn/ImageCrop";
import ThreeDCard from "@/components/shadcn/ThreeDCard";
import ThreeDMarquee from "@/components/shadcn/ThreeDMarquee";
import AnimatedCursor from "@/components/shadcn/AnimatedCursor";
import AnimatedTestimonials from "@/components/shadcn/AnimatedTestimonials";
import AnimatedTooltip from "@/components/shadcn/AnimatedTooltip";
import Glimpse from "@/components/shadcn/Glimpse";
import PinList from "@/components/shadcn/PinList";
import Spinner from "@/components/shadcn/Spinner";
import TabsPremium from "@/components/shadcn/TabsPremium";
import Banner from "@/components/shadcn/Banner";
import Marquee from "@/components/shadcn/Marquee";
import AvatarGroup from "@/components/shadcn/AvatarGroup";
import Tags from "@/components/shadcn/Tags";
import MiniCalendar from "@/components/shadcn/MiniCalendar";
import ComparisonSlider from "@/components/shadcn/ComparisonSlider";
import Kbd from "@/components/shadcn/Kbd";
import QrCode from "@/components/shadcn/QrCode";
import StatusIndicator from "@/components/shadcn/StatusIndicator";
import Terminal from "@/components/shadcn/Terminal";
import VideoPlayer from "@/components/shadcn/VideoPlayer";
import { Confetti } from "@/components/shadcn/Confetti";
import { Fireworks } from "@/components/shadcn/Fireworks";
import { Meteors } from "@/components/shadcn/Meteors";
import { Orbits } from "@/components/shadcn/Orbits";
import { Rain } from "@/components/shadcn/Rain";
import { Snow } from "@/components/shadcn/Snow";
import { Vortex } from "@/components/shadcn/Vortex";
import AreaGradient from "@/components/shadcn/AreaGradient";
import BarHorizontal from "@/components/shadcn/BarHorizontal";
import BarInteractive from "@/components/shadcn/BarInteractive";
import PieDonut from "@/components/shadcn/PieDonut";
import RadarDots from "@/components/shadcn/RadarDots";
import BeamCollision from "@/components/shadcn/BeamCollision";
import Calendar from "@/components/shadcn/Calendar";
import BorderBeam from "@/components/magicui/BorderBeam";
import ShineBorder from "@/components/magicui/ShineBorder";
import MagicCard from "@/components/magicui/MagicCard";
import NeonGradientCard from "@/components/magicui/NeonGradientCard";
import CircularProgressBar from "@/components/magicui/CircularProgressBar";
import IconCloud from "@/components/magicui/IconCloud";
import CompactConfetti, {
  type ConfettiRef,
} from "@/components/magicui/CompactConfetti";
import VideoText from "@/components/magicui/VideoText";
import TextReveal from "@/components/magicui/TextReveal";
import SparklesText from "@/components/magicui/SparklesText";
import CodeComparison from "@/components/magicui/CodeComparison";
import ScrollProgress from "@/components/magicui/ScrollProgress";
import CopyButton from "@/components/animateui/CopyButton";
import FlipButton from "@/components/animateui/FlipButton";
import RippleButton from "@/components/animateui/RippleButton";
import Progress from "@/components/animateui/Progress";
import Popover from "@/components/animateui/Popover";
import Sheet from "@/components/animateui/Sheet";
import FlipCard from "@/components/animateui/FlipCard";
import MotionCarousel from "@/components/animateui/MotionCarousel";
import RadialIntro from "@/components/animateui/RadialIntro";
import RadialMenu from "@/components/animateui/RadialMenu";
import HoleBackground from "@/components/animateui/HoleBackground";
import ManagementBar from "@/components/animateui/ManagementBar";
import PlayfulTodoList from "@/components/animateui/PlayfulTodoList";
import Magnet from "@/components/animateui/Magnet";
import Crosshair from "@/components/tsdefault/Crosshair";
import DecayCard from "@/components/tsdefault/DecayCard";
import FadeContent from "@/components/tsdefault/FadeContent";
import PixelCard from "@/components/tsdefault/PixelCard";
import TrueFocus from "@/components/tsdefault/TrueFocus";
import {
  circularTextCode,
  curvedLoopCode,
  carouselCode,
  dockCode,
  spotlightCardCode,
  flowingMenuCode,
  elasticSliderCode,
  counterCode,
  infiniteMenuCode,
  stepperCode,
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
  liquidEtherCode,
  prismCode,
  darkVeilCode,
  lightPillarCode,
  floatingLinesCode,
  lightRaysCode,
  colorBendsCode,
  particlesCode,
  gridScanCode,
  lightningCode,
  galaxyCode,
  dotGridCode,
  hyperspeedCode,
  ballpitCode,
  orbCode,
  letterGlitchCode,
  gridMotionCode,
  electricBorderCode,
  antigravityCode,
  logoLoopCode,
  targetCursorCode,
  laserFlowCode,
  magnetLinesCode,
  ghostCursorCode,
  clickSparkCode,
  stickerPeelCode,
  splashCursorCode,
  starBorderCode,
  animatedListCode,
  scrollStackCode,
  magicBentoCode,
  circularGalleryCode,
  imageTrailCode,
  stackCode,
  fluidGlassCode,
  masonryCode,
  modelViewerCode,
  rainbowButtonCode,
  gooeyTextMorphingCode,
  highlightTextCode,
  numberCounterCode,
  rotateTextCode,
  typewriterTextJolyCode,
  aiPromptBoxCode,
  animatedThemeToggleCode,
  dateWheelPickerCode,
  feedbackWidgetCode,
  fileTreeCode,
  animatedBeamCode,
  expandedMapCode,
  githubStarCode,
  hoverPreviewCode,
  imageSphereCode,
  shadcnCalendarCode,
  borderBeamCode,
  shineBorderCode,
  magicCardCode,
  neonGradientCardCode,
  circularProgressBarCode,
  iconCloudCode,
  compactConfettiCode,
  videoTextCode,
  textRevealCode,
  sparklesTextCode,
  codeComparisonCode,
  scrollProgressCode,
  copyButtonCode,
  flipButtonCode,
  rippleButtonCode,
  progressCode,
  popoverCode,
  sheetCode,
  flipCardCode,
  motionCarouselCode,
  radialIntroCode,
  radialMenuCode,
  holeBackgroundCode,
  managementBarCode,
  playfulTodoListCode,
  magnetCode,
  crosshairCode,
  decayCardCode,
  fadeContentCode,
  pixelCardCode,
  trueFocusCode,
} from "@/storybook/demos/code-snippets";
import ElectricBorder from "@/components/reactbits/ElectricBorder";
import SplashCursor from "@/components/reactbits/SplashCursor";
import StarBorder from "@/components/reactbits/StarBorder";
import AnimatedList from "@/components/reactbits/AnimatedList";
import ScrollStack from "@/components/reactbits/ScrollStack";
import MagicBento from "@/components/reactbits/MagicBento";
import CircularGallery from "@/components/reactbits/CircularGallery";
import LogoLoop from "@/components/reactbits/LogoLoop";
import TargetCursor from "@/components/reactbits/TargetCursor";
import MagnetLines from "@/components/reactbits/MagnetLines";
import GhostCursor from "@/components/reactbits/GhostCursor";
import ClickSpark from "@/components/reactbits/ClickSpark";
import StickerPeel from "@/components/reactbits/StickerPeel";
import ImageTrail from "@/components/reactbits/ImageTrail";
import Stack from "@/components/reactbits/Stack";
import FluidGlass from "@/components/reactbits/FluidGlass";
import Masonry from "@/components/reactbits/Masonry";
import Lanyard from "@/components/reactbits/Lanyard";
import Antigravity from "@/components/reactbits/Antigravity";
import LaserFlow from "@/components/reactbits/LaserFlow";
import { NumberCounter } from "@/components/jolyui/NumberCounter";
import { GridScan } from "@/components/reactbits/GridScan";
import CalendarInput from "@/components/jolyui/CalendarInput";
import { DraggableCard } from "@/components/aceternityui/DraggableCard";
import { Lens } from "@/components/aceternityui/Lens";
import { ImageCompare } from "@/components/aceternityui/ImageCompare";
import { HeroParallax } from "@/components/aceternityui/HeroParallax";

const DEFAULT_FILE_TREE: FileTreeNode[] = [
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

const DEMO_IMAGES = [
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

function AnimatedBeamDemo(props: {
  curvature: number;
  duration: number;
  reverse: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fromRef = useRef<HTMLDivElement | null>(null);
  const toRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-between rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6"
      style={{ height: 220, width: "100%" }}
    >
      <div
        ref={fromRef}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sb-selected)] text-[12px] font-black text-(--sb-text-strong)"
      >
        A
      </div>
      <div
        ref={toRef}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sb-selected)] text-[12px] font-black text-(--sb-text-strong)"
      >
        B
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        curvature={props.curvature}
        duration={props.duration}
        reverse={props.reverse}
      />
    </div>
  );
}

function CalendarDemo() {
  const [selected, setSelected] = useState<Date>(new Date());
  return <Calendar value={selected} onChange={setSelected} />;
}

function CompactConfettiDemo(props: {
  particleCount?: number;
  spread?: number;
}) {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card)">
      <CompactConfetti
        ref={confettiRef}
        className="absolute inset-0 h-full w-full"
        manualStart
      />
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

function SheetDemo(props: { side?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-[620px]">
      <button
        type="button"
        className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[13px] font-black text-(--sb-text-strong)"
        onClick={() => setOpen(true)}
      >
        Open Sheet
      </button>
      <Sheet
        open={open}
        onOpenChange={setOpen}
        title="Sheet"
        side={props.side ?? "right"}
      >
        This is a simple sheet implementation.
      </Sheet>
    </div>
  );
}

function CrosshairDemo(props: { size?: number }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="relative w-full max-w-[620px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
      {enabled ? <Crosshair size={props.size ?? 22} /> : null}
      <div className="text-[14px] font-black text-(--sb-text-strong)">
        Crosshair
      </div>
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

function HoverPreviewDemo() {
  return (
    <div className="rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
      <HoverPreviewProvider
        data={{
          one: {
            image:
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60",
            title: "Hover Preview",
            subtitle: "Tooltip-style card",
          },
        }}
      >
        <div className="text-[13px] font-semibold text-(--sb-text-muted)">
          Hover over:
        </div>
        <div className="mt-2 text-[18px] font-black">
          <HoverPreviewLink previewKey="one">this link</HoverPreviewLink>
        </div>
      </HoverPreviewProvider>
    </div>
  );
}

function TypewriterDemo(props: { text: string }) {
  return (
    <div className="font-mono text-[15px] font-bold text-(--sb-text-strong)">
      <span className="inline-block overflow-hidden whitespace-nowrap align-bottom [border-right:2px_solid_var(--sb-accent)] [animation:type_2.2s_steps(28,end)_infinite]">
        {props.text}
      </span>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="text-[28px] font-black tracking-tight text-(--sb-text-strong)">
      {value.toLocaleString()}
    </div>
  );
}

function GlitchTextDemo(props: { label: string }) {
  return (
    <div className="relative text-[26px] font-black tracking-tight text-(--sb-text-strong)">
      <span className="relative inline-block [text-shadow:2px_0_0_rgba(139,92,246,0.7),-2px_0_0_rgba(99,102,241,0.6)] [animation:glitch_1.4s_infinite]">
        {props.label}
      </span>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  return (
    <div className="font-mono text-[15px] font-bold text-(--sb-text-strong)">
      {shown}
    </div>
  );
}

function SimpleCarouselDemo() {
  const items = ["One", "Two", "Three", "Four"];
  const [i, setI] = useState(0);
  const current = items[i] ?? items[0];

  return (
    <div className="w-full max-w-[520px]">
      <div className="rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg) p-6">
        <div className="text-[18px] font-black text-(--sb-text-strong)">
          {current}
        </div>
        <div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">
          Minimal carousel demo
        </div>
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

function BackgroundPanelDemo(props: { title: string }) {
  return (
    <div className="relative h-[160px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.55),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.45),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(167,139,250,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-50 [background:linear-gradient(120deg,rgba(255,255,255,0.05),transparent_35%,rgba(255,255,255,0.06))] [animation:bgshift_4.5s_linear_infinite]" />
      <div className="relative flex h-full items-end p-4">
        <div className="rounded-xl border border-(--sb-border) bg-(--sb-card) px-3 py-2">
          <div className="text-[12px] font-black text-(--sb-text-strong)">
            {props.title}
          </div>
          <div className="text-[11px] font-semibold text-(--sb-text-muted)">
            Local background demo
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ScrollFloatWrapper(props: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-(--sb-panel) overflow-y-auto overflow-x-hidden sb-scroll"
    >
      <div
        className="flex flex-col items-center justify-center p-8"
        style={{ height: "1000px" }}
      >
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
function ScrollRevealWrapper(props: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] max-h-[320px] rounded-2xl bg-(--sb-panel) overflow-y-auto overflow-x-hidden sb-scroll"
    >
      <div
        className="flex flex-col items-center justify-center p-8 text-center"
        style={{ height: "1000px" }}
      >
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
function VariableProximityWrapper(_props: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="demo-container"
      style={{ position: "relative" }}
    >
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
        <div className="text-[14px] font-black text-(--sb-text-strong)">
          Revealed on scroll
        </div>
        <div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">
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
          className="text-[32px] font-black text-center leading-tight text-(--sb-text-strong)"
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
          className="custom-class text-(--sb-text-strong)"
          {...props}
        />
      );

    case slug.includes("dock") || title.includes("dock"):
      return (
        <div className="w-full min-h-80 bg-(--sb-bg) rounded-xl border border-(--sb-border) relative overflow-hidden">
          <Dock
            items={[
              {
                icon: (
                  <span className="text-[22px] leading-none text-white">
                    🏠
                  </span>
                ),
                label: "Home",
                onClick: () => {},
              },
              {
                icon: (
                  <span className="text-[22px] leading-none text-white">
                    🔍
                  </span>
                ),
                label: "Search",
                onClick: () => {},
              },
              {
                icon: (
                  <span className="text-[22px] leading-none text-white">
                    📁
                  </span>
                ),
                label: "Files",
                onClick: () => {},
              },
              {
                icon: (
                  <span className="text-[22px] leading-none text-white">
                    ⚙️
                  </span>
                ),
                label: "Settings",
                onClick: () => {},
              },
            ]}
            magnification={props?.magnification ?? 70}
            distance={props?.distance ?? 200}
            panelHeight={props?.panelHeight ?? 68}
            dockHeight={props?.dockHeight ?? 256}
            baseItemSize={props?.baseItemSize ?? 50}
            {...props}
          />
        </div>
      );

    case slug.includes("carousel") || title.includes("carousel"):
      return (
        <div className="w-full flex items-center justify-center">
          <Carousel
            baseWidth={props?.baseWidth ?? 320}
            autoplay={props?.autoplay ?? false}
            autoplayDelay={props?.autoplayDelay ?? 3000}
            pauseOnHover={props?.pauseOnHover ?? false}
            loop={props?.loop ?? false}
            round={props?.round ?? false}
            {...props}
          />
        </div>
      );

    case slug.includes("spotlight-card") || title.includes("spotlight"):
      return (
        <div className="w-full ">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="text-[18px] font-black text-white">
              Spotlight Card
            </div>
            <div className="mt-2 text-[13px] font-medium text-white/70">
              Move your mouse around.
            </div>
          </SpotlightCard>
        </div>
      );

    case slug.includes("flowing-menu") || title.includes("flowing menu"):
      return (
        <div className="w-full h-[360px] rounded-xl overflow-hidden border border-(--sb-border)">
          <FlowingMenu
            items={
              props?.items ?? [
                {
                  link: "#",
                  text: "React Bits",
                  image:
                    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?q=80&w=800&auto=format",
                },
                {
                  link: "#",
                  text: "Components",
                  image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format",
                },
                {
                  link: "#",
                  text: "Backgrounds",
                  image:
                    "https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=800&auto=format",
                },
              ]
            }
            speed={props?.speed ?? 15}
            textColor={props?.textColor ?? "#ffffff"}
            bgColor={props?.bgColor ?? "#060010"}
            marqueeBgColor={props?.marqueeBgColor ?? "#ffffff"}
            marqueeTextColor={props?.marqueeTextColor ?? "#060010"}
            borderColor={props?.borderColor ?? "#ffffff"}
            {...props}
          />
        </div>
      );

    case slug.includes("elastic-slider") || title.includes("elastic slider"):
      return (
        <div className="w-full flex items-center justify-center relative min-h-[220px]">
          <ElasticSlider
            defaultValue={props?.defaultValue ?? 50}
            startingValue={props?.startingValue ?? 0}
            maxValue={props?.maxValue ?? 100}
            isStepped={props?.isStepped ?? false}
            stepSize={props?.stepSize ?? 1}
            {...props}
          />
        </div>
      );

    case slug.includes("number-counter") || title.includes("number counter"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <div className="text-center">
            <h3 className="mb-2 font-medium text-muted-foreground text-sm">
              Basic Counter
            </h3>
            <NumberCounter
              value={1234.56}
              decimals={2}
              prefix="$"
              className="font-bold text-4xl"
            />
          </div>
        </div>
      );

    case slug.includes("counter") || title.includes("counter"): {
      const CounterDemo = () => {
        const [val, setVal] = useState(0);
        useEffect(() => {
          const t = setTimeout(() => setVal(100), 100);
          return () => clearTimeout(t);
        }, []);

        return (
          <div className="relative h-[200px] w-full bg-[#111] overflow-hidden rounded-xl border border-(--sb-border) flex items-center justify-center">
            <div style={{ transform: "scale(2.5)" }}>
              <Counter
                value={val}
                places={[100, 10, 1]}
                fontSize={40}
                padding={0}
                gap={10}
                textColor="white"
                fontWeight={900}
              />
            </div>
          </div>
        );
      };
      return <CounterDemo />;
    }

    case slug.includes("infinite-menu") || title.includes("infinite menu"):
      return (
        <div style={{ height: "600px", position: "relative" }}>
          <InfiniteMenu
            items={[
              {
                image:
                  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
                link: "https://google.com/",
                title: "Item 1",
                description: "This is a description",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
                link: "https://google.com/",
                title: "Item 2",
                description: "This is a description",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
                link: "https://google.com/",
                title: "Item 3",
                description: "This is a description",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
                link: "https://google.com/",
                title: "Item 4",
                description: "This is a description",
              },
            ]}
          />
        </div>
      );

    case slug.includes("stepper") || title.includes("stepper"):
      return (
        <div className="w-full">
          <Stepper
            initialStep={props?.initialStep ?? 1}
            disableStepIndicators={props?.disableStepIndicators ?? false}
            {...props}
          >
            <Step>
              <div className="text-[16px] font-black text-white">Step 1</div>
              <div className="mt-2 text-[12px] font-medium text-white/70">
                Intro content.
              </div>
            </Step>
            <Step>
              <div className="text-[16px] font-black text-white">Step 2</div>
              <div className="mt-2 text-[12px] font-medium text-white/70">
                More details.
              </div>
            </Step>
            <Step>
              <div className="text-[16px] font-black text-white">Step 3</div>
              <div className="mt-2 text-[12px] font-medium text-white/70">
                Finish.
              </div>
            </Step>
          </Stepper>
        </div>
      );

    case slug.includes("lanyard") || title.includes("lanyard"):
      return (
        <div className="w-full h-full min-h-[500px] bg-black rounded-xl overflow-hidden relative">
          <Lanyard
            position={props?.position ?? [0, 0, 20]}
            gravity={props?.gravity ?? [0, -40, 0]}
            fov={props?.fov ?? 20}
            bandColor={props?.bandColor ?? "white"}
            cardColor={props?.cardColor ?? "white"}
            cardGLB={
              props?.cardGLB ?? "https://reactbits.dev/assets/3d/card.glb"
            }
            cardTexture={props?.cardTexture}
            {...props}
          />
        </div>
      );

    case slug.includes("shiny-text") || title.includes("shiny text"):
      return (
        <div
          className="text-[28px] font-black tracking-tight"
          style={{ width: "100%" }}
        >
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
            className="text-[32px] font-black text-(--sb-text-strong)"
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
          className="text-[40px] font-black text-(--sb-text-strong)"
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _highlightWords =
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
          className="w-full min-h-[320px] rounded-2xl bg-(--sb-panel) p-2 flex justify-center"
          style={{ minHeight: 320 }}
        >
          <div className="w-full text-(--sb-text-strong)">
            <FallingText
              text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
              highlightWords={[
                "React",
                "Bits",
                "animated",
                "components",
                "simplify",
              ]}
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

    case slug.includes("click-spark") || title.includes("click spark"):
      return (
        <div className="w-full min-h-[400px] p-8 bg-(--sb-bg) rounded-xl border border-(--sb-border)">
          <ClickSpark
            sparkColor={props?.sparkColor ?? "#fff"}
            sparkSize={props?.sparkSize ?? 10}
            sparkRadius={props?.sparkRadius ?? 15}
            sparkCount={props?.sparkCount ?? 8}
            duration={props?.duration ?? 400}
            {...props}
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-(--sb-text-strong) text-2xl font-bold">
                Click anywhere!
              </h2>
              <p className="text-[var(--sb-text-dim)]">
                Interactive spark effect on click
              </p>
            </div>
          </ClickSpark>
        </div>
      );

    case slug.includes("text-cursor") || title.includes("text cursor"):
      return (
        <div className="w-full h-[320px] rounded-2xl bg-(--sb-panel) overflow-hidden">
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

    case slug.includes("decrypted-text") ||
      title.includes("decrypted text") ||
      title.includes("decrypted"):
      return (
        <div
          className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
          style={{ minHeight: 200 }}
        >
          <div className="text-[28px] font-black text-(--sb-text-strong)">
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
          className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
          style={{ minHeight: 200 }}
        >
          <div className="text-[28px] font-black text-(--sb-text-strong) flex items-center gap-2">
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
          className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
          style={{ minHeight: 200 }}
        >
          <GlitchText
            speed={props?.speed ?? 1}
            enableShadows={props?.enableShadows ?? true}
            enableOnHover={props?.enableOnHover ?? true}
            className="text-[4rem] font-bold text-(--sb-text-strong)"
            {...props}
          >
            {props?.text ?? "GLITCH"}
          </GlitchText>
        </div>
      );

    case slug.includes("scroll-velocity") || title.includes("scroll velocity"):
      return (
        <div
          className="w-full min-h-[300px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-4 flex flex-col justify-center overflow-hidden"
          style={{ minHeight: 300 }}
        >
          <ScrollVelocity
            texts={props?.texts ?? ["React Bits", "Scroll Velocity"]}
            velocity={props?.velocity ?? 100}
            className="custom-scroll-text text-(--sb-text-strong)"
            {...props}
          />
        </div>
      );

    case slug.includes("variable-proximity") ||
      title.includes("variable proximity"):
      return <VariableProximityWrapper {...props} />;

    case slug.includes("count-up") || title.includes("count up"):
      return (
        <div className="flex items-center justify-center w-full h-full min-h-[200px]">
          <CountUp
            from={props?.from ?? 0}
            to={props?.to ?? 100}
            separator={props?.separator ?? ","}
            direction={props?.direction ?? "up"}
            duration={props?.duration ?? 1}
            className={`text-[64px] font-black text-(--sb-text-strong) ${props?.className ?? ""}`}
            {...props}
          />
        </div>
      );

    case slug.includes("electric-border") || title.includes("electric border"):
      return (
        <div className="flex items-center justify-center w-full h-full p-8">
          <ElectricBorder
            color={props?.color ?? "#7df9ff"}
            speed={props?.speed ?? 1}
            chaos={props?.chaos ?? 0.12}
            borderRadius={props?.borderRadius ?? 16}
            {...props}
          >
            <div className="p-6 bg-(--sb-card) text-(--sb-text-strong) rounded-[inherit] border border-(--sb-border)">
              <p className="font-bold">Electric Border</p>
              <p className="text-sm opacity-70">A glowing, animated wrapper.</p>
            </div>
          </ElectricBorder>
        </div>
      );

    case slug.includes("antigravity") || title.includes("antigravity"):
      return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl bg-black">
          <Antigravity
            count={props?.count ?? 300}
            magnetRadius={props?.magnetRadius ?? 10}
            ringRadius={props?.ringRadius ?? 10}
            waveSpeed={props?.waveSpeed ?? 0.4}
            waveAmplitude={props?.waveAmplitude ?? 1}
            particleSize={props?.particleSize ?? 2}
            lerpSpeed={props?.lerpSpeed ?? 0.1}
            color={props?.color ?? "#FF9FFC"}
            {...props}
          />
        </div>
      );

    case slug.includes("logo-loop") || title.includes("logo loop"): {
      const techLogos = [
        {
          src: "/react.svg",
          alt: "React",
          href: "https://react.dev",
        },
        {
          src: "/next.svg",
          alt: "Next.js",
          href: "https://nextjs.org",
        },
        {
          src: "/file.svg", // Using file.svg as placeholder for typescript if not found, or maybe just remove typescript if not in public
          alt: "TypeScript",
          href: "https://www.typescriptlang.org",
        },
        {
          src: "/tailwind.svg",
          alt: "Tailwind CSS",
          href: "https://tailwindcss.com",
        },
        {
          src: "/vercel.svg",
          alt: "Vercel",
          href: "https://vercel.com",
        },
      ];
      return (
        <div className="flex items-center justify-center w-full min-h-[160px] p-4 bg-(--sb-bg) rounded-2xl border border-(--sb-border)">
          <LogoLoop
            logos={techLogos}
            speed={props?.speed ?? 100}
            direction={props?.direction ?? "left"}
            logoHeight={props?.logoHeight ?? 40}
            gap={props?.gap ?? 40}
            hoverSpeed={props?.hoverSpeed ?? 0}
            scaleOnHover={props?.scaleOnHover ?? true}
            fadeOut={props?.fadeOut ?? true}
            {...props}
          />
        </div>
      );
    }

    case slug.includes("target-cursor") || title.includes("target cursor"):
      return (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] p-8 space-y-8 bg-(--sb-bg)">
          <TargetCursor
            targetSelector=".cursor-target"
            spinDuration={props?.spinDuration ?? 2}
            hideDefaultCursor={props?.hideDefaultCursor ?? true}
            hoverDuration={props?.hoverDuration ?? 0.2}
            parallaxOn={props?.parallaxOn ?? true}
            {...props}
          />
          <h2 className="text-xl font-bold text-(--sb-text-strong)">
            Hover over elements to see the cursor lock in!
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="cursor-target px-6 py-3 bg-[var(--sb-accent)] text-white rounded-lg font-bold">
              Button Target
            </button>
            <div className="cursor-target w-32 h-32 flex items-center justify-center bg-(--sb-card) border border-(--sb-border) rounded-xl text-(--sb-text-muted) text-center p-4">
              Div Target
            </div>
            <input
              type="text"
              className="cursor-target px-4 py-2 bg-[var(--sb-input-bg)] border border-(--sb-border) rounded-md"
              placeholder="Input Target"
            />
          </div>
          <p className="text-sm text-(--sb-text-muted) text-center max-w-md">
            The Target Cursor is fixed-position. When it hovers over elements
            matching the <code>targetSelector</code>, its corners snap to the
            element&apos;s bounds.
          </p>
        </div>
      );

    case slug.includes("laser-flow") || title.includes("laser flow"):
      return (
        // <div className="relative w-full h-[400px] bg-black overflow-hidden rounded-xl border border-(--sb-border)">
        //   <LaserFlow
        //     color={props?.color ?? "#FF79C6"}
        //     wispDensity={props?.wispDensity ?? 2}
        //     fogIntensity={props?.fogIntensity ?? 0.45}
        //     horizontalSizing={props?.horizontalSizing ?? 0.5}
        //     verticalSizing={props?.verticalSizing ?? 2.0}
        //     wispSpeed={props?.wispSpeed ?? 15.0}
        //     {...props}
        //   />
        //   <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent pointer-events-none">
        //     <h3 className="text-white text-lg font-bold">Laser Flow</h3>
        //     <p className="text-white/60 text-sm">
        //       Shader-based volumetric laser effect
        //     </p>
        //   </div>
        // </div>

        <div
          style={{ height: "300px", position: "relative", overflow: "hidden" }}
        >
          <LaserFlow />
        </div>
      );

    case slug.includes("magnet-lines") || title.includes("magnet lines"):
      return (
        <div className="flex items-center justify-center w-full min-h-[400px] p-8 bg-(--sb-bg) rounded-xl border border-(--sb-border)">
          <MagnetLines
            rows={props?.rows ?? 9}
            columns={props?.columns ?? 9}
            containerSize={props?.containerSize ?? "40vmin"}
            lineColor={props?.lineColor ?? "#efefef"}
            lineWidth={props?.lineWidth ?? "1vmin"}
            lineHeight={props?.lineHeight ?? "6vmin"}
            baseAngle={props?.baseAngle ?? -10}
            {...props}
          />
        </div>
      );

    case slug.includes("ghost-cursor") || title.includes("ghost cursor"):
      return (
        <div className="relative w-full h-[400px] bg-black overflow-hidden rounded-xl border border-(--sb-border)">
          <GhostCursor
            color={props?.color ?? "#B19EEF"}
            brightness={props?.brightness ?? 2}
            trailLength={props?.trailLength ?? 50}
            inertia={props?.inertia ?? 0.5}
            grainIntensity={props?.grainIntensity ?? 0.05}
            bloomStrength={props?.bloomStrength ?? 0.1}
            bloomRadius={props?.bloomRadius ?? 1.0}
            bloomThreshold={props?.bloomThreshold ?? 0.025}
            {...props}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent pointer-events-none">
            <h3 className="text-white text-lg font-bold">Ghost Cursor</h3>
            <p className="text-white/60 text-sm">
              Interactive volumetric cursor trail
            </p>
          </div>
        </div>
      );

    case slug.includes("sticker-peel") || title.includes("sticker peel"):
      return (
        <div className="w-full flex items-center justify-center overflow-hidden bg-black min-h-[400px] rounded-xl border border-(--sb-border) relative">
          <StickerPeel
            imageSrc={
              props?.imageSrc ??
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60"
            }
            width={props?.width ?? 300}
            rotate={props?.rotate ?? 15}
            peelBackHoverPct={props?.peelBackHoverPct ?? 30}
            peelBackActivePct={props?.peelBackActivePct ?? 40}
            peelDirection={props?.peelDirection ?? 0}
            shadowIntensity={props?.shadowIntensity ?? 0.6}
            lightingIntensity={props?.lightingIntensity ?? 0.1}
            {...props}
          />
        </div>
      );

    case slug.includes("splash-cursor") || title.includes("splash cursor"):
      return (
        <div className="w-full h-[500px] bg-black relative overflow-hidden rounded-xl border border-(--sb-border)">
          <SplashCursor
            SIM_RESOLUTION={props?.SIM_RESOLUTION ?? 128}
            DYE_RESOLUTION={props?.DYE_RESOLUTION ?? 1024}
            CAPTURE_RESOLUTION={props?.CAPTURE_RESOLUTION ?? 512}
            DENSITY_DISSIPATION={props?.DENSITY_DISSIPATION ?? 3.0}
            VELOCITY_DISSIPATION={props?.VELOCITY_DISSIPATION ?? 0.2}
            PRESSURE={props?.PRESSURE ?? 0.8}
            PRESSURE_ITERATIONS={props?.PRESSURE_ITERATIONS ?? 20}
            CURL={props?.CURL ?? 30}
            SPLAT_RADIUS={props?.SPLAT_RADIUS ?? 0.25}
            SPLAT_FORCE={props?.SPLAT_FORCE ?? 1500}
            SHADING={props?.SHADING ?? true}
            COLOR_UPDATE_SPEED={props?.COLOR_UPDATE_SPEED ?? 10}
            BACK_COLOR={props?.BACK_COLOR ?? { r: 0, g: 0, b: 0 }}
            TRANSPARENT={props?.TRANSPARENT ?? true}
            {...props}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-white text-3xl font-bold opacity-50">
              Move Mouse
            </h3>
          </div>
        </div>
      );

    case slug.includes("star-border") || title.includes("star border"):
      return (
        <div className="w-full flex items-center justify-center min-h-[300px] bg-black rounded-xl border border-(--sb-border)">
          <StarBorder
            as={props?.as || "button"}
            className={props?.className || ""}
            color={props?.color || "cyan"}
            speed={props?.speed || "6s"}
            thickness={props?.thickness}
            {...props}
          >
            <div className="text-white px-8 py-4">Hover Me</div>
          </StarBorder>
        </div>
      );

    case slug.includes("animated-list") || title.includes("animated list"):
      return (
        <div className="w-full flex items-center justify-center min-h-[500px] bg-black rounded-xl border border-(--sb-border) overflow-hidden">
          <AnimatedList
            items={
              props?.items || [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
                "Item 7",
                "Item 8",
              ]
            }
            onItemSelect={
              props?.onItemSelect || ((item, index) => console.log(item, index))
            }
            showGradients={props?.showGradients ?? true}
            enableArrowNavigation={props?.enableArrowNavigation ?? true}
            displayScrollbar={props?.displayScrollbar ?? true}
            initialSelectedIndex={props?.initialSelectedIndex ?? -1}
            {...props}
          />
        </div>
      );

    case slug.includes("scroll-stack") || title.includes("scroll stack"):
      return (
        <div className="w-full h-[600px] relative bg-[#060606] rounded-xl border border-(--sb-border) overflow-hidden">
          <ScrollStack
            itemDistance={props?.itemDistance || 50}
            itemScale={props?.itemScale || 0.05}
            itemStackDistance={props?.itemStackDistance || 20}
            stackPosition={props?.stackPosition || "20%"}
            scaleEndPosition={props?.scaleEndPosition || "10%"}
            baseScale={props?.baseScale || 0.85}
            scaleDuration={props?.scaleDuration || 0.5}
            rotationAmount={props?.rotationAmount || 0}
            blurAmount={props?.blurAmount || 0}
            useWindowScroll={false}
            {...props}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="scroll-stack-card bg-[#111] text-white flex items-center justify-center text-4xl font-bold border border-white/10"
              >
                Item {i}
              </div>
            ))}
          </ScrollStack>
        </div>
      );

    case slug.includes("magic-bento") || title.includes("magic bento"):
      return (
        <div className="w-full min-h-[600px] bg-[#030014] rounded-xl border border-(--sb-border) overflow-hidden">
          <MagicBento
            textAutoHide={props?.textAutoHide ?? true}
            enableStars={props?.enableStars ?? true}
            enableSpotlight={props?.enableSpotlight ?? true}
            enableBorderGlow={props?.enableBorderGlow ?? true}
            enableTilt={props?.enableTilt ?? false}
            enableMagnetism={props?.enableMagnetism ?? true}
            clickEffect={props?.clickEffect ?? true}
            spotlightRadius={props?.spotlightRadius || 300}
            particleCount={props?.particleCount || 12}
            glowColor={props?.glowColor || "132, 0, 255"}
            {...props}
          />
        </div>
      );

    case slug.includes("circular-gallery") ||
      title.includes("circular gallery"):
      return (
        <div className="w-full h-[600px] position-relative bg-black rounded-xl border border-(--sb-border) overflow-hidden">
          <CircularGallery
            bend={props?.bend || 3}
            textColor={props?.textColor || "#ffffff"}
            borderRadius={props?.borderRadius || 0.05}
            font={props?.font || "bold 30px Figtree"}
            scrollSpeed={props?.scrollSpeed || 2}
            scrollEase={props?.scrollEase || 0.05}
            {...props}
          />
        </div>
      );

    case slug.includes("image-trail") || title.includes("image trail"):
      return (
        <div className="w-full h-[500px] relative overflow-hidden bg-[#111] rounded-xl border border-(--sb-border)">
          <ImageTrail
            items={
              props?.items || [
                "https://images.unsplash.com/photo-1653896775515-951b43021b3b?q=80&w=600&auto=format",
                "https://images.unsplash.com/photo-1548021682-1720ed403a5b?q=80&w=600&auto=format",
                "https://images.unsplash.com/photo-1696429380069-23dcf7a6e12e?q=80&w=600&auto=format",
                "https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?q=80&w=600&auto=format",
                "https://images.unsplash.com/photo-1655635643420-b9646b617bbd?q=80&w=600&auto=format",
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format",
              ]
            }
            variant={props?.variant || 1}
            {...props}
          />
        </div>
      );

    case slug.includes("stack") || title.includes("stack"):
      return (
        <div className="w-full h-[600px] flex items-center justify-center bg-[#f0f0f0] dark:bg-[#111] rounded-xl border border-(--sb-border) overflow-hidden">
          <div
            style={{ position: "relative", width: "300px", height: "400px" }}
          >
            <Stack
              randomRotation={props?.randomRotation ?? true}
              sensitivity={props?.sensitivity ?? 180}
              sendToBackOnClick={props?.sendToBackOnClick ?? false}
              cards={[
                <div
                  key={1}
                  className="w-full h-full rounded-xl bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-black border border-black/10"
                >
                  1
                </div>,
                <div
                  key={2}
                  className="w-full h-full rounded-xl bg-gray-100 shadow-lg flex items-center justify-center text-4xl font-bold text-black border border-black/10"
                >
                  2
                </div>,
                <div
                  key={3}
                  className="w-full h-full rounded-xl bg-gray-200 shadow-lg flex items-center justify-center text-4xl font-bold text-black border border-black/10"
                >
                  3
                </div>,
                <div
                  key={4}
                  className="w-full h-full rounded-xl bg-gray-300 shadow-lg flex items-center justify-center text-4xl font-bold text-black border border-black/10"
                >
                  4
                </div>,
              ]}
              {...props}
            />
          </div>
        </div>
      );
    // IMPORTANT INFO BELOW
    // This component requires a 3D model to function correctly.
    // You can find three example models in the 'public/assets/3d' directory of the repository:
    // - 'lens.glb'
    // - 'bar.glb'
    // - 'cube.glb'
    // Make sure to place these models in the correct directory or update the paths accordingly.

    case slug.includes("fluid-glass") || title.includes("fluid glass"):
      return (
        <div style={{ height: "600px", position: "relative" }}>
          <FluidGlass
            mode="lens" // or "bar", "cube"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 2,
              chromaticAberration: 0.05,
              anisotropy: 0.01,
              transmission: 1,
              roughness: 0,
            }}
          />
        </div>
      );

    case slug.includes("masonry") || title.includes("masonry"):
      return (
        <div className="w-full min-h-[600px] bg-[#111] rounded-xl border border-(--sb-border) p-4">
          <Masonry
            items={[
              {
                id: "1",
                img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=500&auto=format",
                url: "#",
                height: 400,
              },
              {
                id: "2",
                img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=500&auto=format",
                url: "#",
                height: 300,
              },
              {
                id: "3",
                img: "https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=500&auto=format",
                url: "#",
                height: 500,
              },
              {
                id: "4",
                img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format",
                url: "#",
                height: 350,
              },
              {
                id: "5",
                img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=500&auto=format",
                url: "#",
                height: 450,
              },
              {
                id: "6",
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format",
                url: "#",
                height: 380,
              },
              {
                id: "7",
                img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=500&auto=format",
                url: "#",
                height: 520,
              },
              {
                id: "8",
                img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=500&auto=format",
                url: "#",
                height: 400,
              },
            ]}
            stagger={props?.stagger ?? 0.05}
            duration={props?.duration ?? 0.5}
            {...props}
          />
        </div>
      );

    case slug.includes("liquid-ether") || title.includes("liquid ether"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <LiquidEther resolution={props?.resolution ?? 1} {...props} />
        </div>
      );

    case slug.includes("prism") || title.includes("prism"):
      return (
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
      );

    case slug.includes("dark-veil") || title.includes("dark veil"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <DarkVeil
            hueShift={props?.hueShift ?? 0}
            noiseIntensity={props?.noiseIntensity ?? 0}
            scanlineIntensity={props?.scanlineIntensity ?? 0}
            speed={props?.speed ?? 0.5}
            scanlineFrequency={props?.scanlineFrequency ?? 0}
            warpAmount={props?.warpAmount ?? 0}
            resolutionScale={props?.resolutionScale ?? 1}
            {...props}
          />
        </div>
      );

    case slug.includes("light-pillar") || title.includes("light pillar"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <LightPillar
            topColor={props?.topColor ?? "#5227FF"}
            bottomColor={props?.bottomColor ?? "#FF9FFC"}
            intensity={props?.intensity ?? 1}
            rotationSpeed={props?.rotationSpeed ?? 0.3}
            interactive={props?.interactive ?? false}
            glowAmount={props?.glowAmount ?? 0.005}
            pillarWidth={props?.pillarWidth ?? 3.0}
            pillarHeight={props?.pillarHeight ?? 0.4}
            noiseIntensity={props?.noiseIntensity ?? 0.5}
            pillarRotation={props?.pillarRotation ?? 15}
            quality={props?.quality ?? "high"}
            {...props}
          />
        </div>
      );

    case slug.includes("floating-lines") || title.includes("floating lines"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <FloatingLines
            animationSpeed={props?.animationSpeed ?? 1}
            interactive={props?.interactive ?? true}
            bendRadius={props?.bendRadius ?? 5}
            bendStrength={props?.bendStrength ?? -0.5}
            mouseDamping={props?.mouseDamping ?? 0.05}
            parallax={props?.parallax ?? true}
            parallaxStrength={props?.parallaxStrength ?? 0.2}
            {...props}
          />
        </div>
      );

    case slug.includes("light-rays") || title.includes("light rays"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <LightRays
            raysOrigin={props?.raysOrigin ?? "top-center"}
            raysColor={props?.raysColor ?? "#ffffff"}
            raysSpeed={props?.raysSpeed ?? 1}
            lightSpread={props?.lightSpread ?? 1}
            rayLength={props?.rayLength ?? 2}
            pulsating={props?.pulsating ?? false}
            fadeDistance={props?.fadeDistance ?? 1}
            saturation={props?.saturation ?? 1}
            followMouse={props?.followMouse ?? true}
            mouseInfluence={props?.mouseInfluence ?? 0.1}
            noiseAmount={props?.noiseAmount ?? 0}
            distortion={props?.distortion ?? 0}
            {...props}
          />
        </div>
      );

    case slug.includes("color-bends") || title.includes("color bends"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <ColorBends
            rotation={props?.rotation ?? 45}
            speed={props?.speed ?? 0.2}
            transparent={props?.transparent ?? true}
            autoRotate={props?.autoRotate ?? 0}
            scale={props?.scale ?? 1}
            frequency={props?.frequency ?? 1}
            warpStrength={props?.warpStrength ?? 1}
            mouseInfluence={props?.mouseInfluence ?? 1}
            parallax={props?.parallax ?? 0.5}
            noise={props?.noise ?? 0.1}
            {...props}
          />
        </div>
      );

    case slug.includes("particles") || title.includes("particles"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <Particles
            particleCount={props?.particleCount ?? 200}
            particleSpread={props?.particleSpread ?? 10}
            speed={props?.speed ?? 0.1}
            particleColors={props?.particleColors ?? ["#ffffff", "#ffffff"]}
            moveParticlesOnHover={props?.moveParticlesOnHover ?? true}
            particleBaseSize={props?.particleBaseSize ?? 100}
            alphaParticles={props?.alphaParticles ?? false}
            disableRotation={props?.disableRotation ?? false}
            {...props}
          />
        </div>
      );

    case slug.includes("grid-scan") || title.includes("grid scan"):
      return (
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            gridScale={props?.gridScale ?? 0.1}
            linesColor={props?.linesColor ?? "#392e4e"}
            scanColor={props?.scanColor ?? "#FF9FFC"}
            scanOpacity={props?.scanOpacity ?? 0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            {...props}
          />
        </div>
      );

    case slug.includes("lightning") || title.includes("lightning"):
      return (
        <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <Lightning
            hue={props?.hue ?? 260}
            xOffset={props?.xOffset ?? 0}
            speed={props?.speed ?? 1}
            intensity={props?.intensity ?? 1}
            size={props?.size ?? 1}
            {...props}
          />
        </div>
      );

    case slug.includes("galaxy") || title.includes("galaxy"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <Galaxy
            focal={props?.focal ?? [0.5, 0.5]}
            rotation={props?.rotation ?? [1.0, 0.0]}
            starSpeed={props?.starSpeed ?? 0.5}
            density={props?.density ?? 1.5}
            hueShift={props?.hueShift ?? 140}
            disableAnimation={props?.disableAnimation ?? false}
            speed={props?.speed ?? 1.0}
            mouseInteraction={props?.mouseInteraction ?? true}
            glowIntensity={props?.glowIntensity ?? 0.3}
            saturation={props?.saturation ?? 0.0}
            mouseRepulsion={props?.mouseRepulsion ?? true}
            twinkleIntensity={props?.twinkleIntensity ?? 0.3}
            rotationSpeed={props?.rotationSpeed ?? 0.1}
            repulsionStrength={props?.repulsionStrength ?? 2}
            autoCenterRepulsion={props?.autoCenterRepulsion ?? 0}
            transparent={props?.transparent ?? true}
            {...props}
          />
        </div>
      );

    case slug.includes("dot-grid") || title.includes("dot grid"):
      return (
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      );

    case slug.includes("hyperspeed") || title.includes("hyperspeed"):
      return (
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 526344,
              islandColor: 657930,
              background: 0,
              shoulderLines: 1250072,
              brokenLines: 1250072,
              leftCars: [14177983, 6770850, 12732332],
              rightCars: [242627, 941733, 3294549],
              sticks: 242627,
            },
          }}
        />
      );

    case slug.includes("ballpit") || title.includes("ballpit"):
      return (
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            maxHeight: "500px",
            width: "100%",
          }}
        >
          <Ballpit
            count={props?.count ?? 100}
            gravity={props?.gravity ?? 0.01}
            friction={props?.friction ?? 0.9975}
            wallBounce={props?.wallBounce ?? 0.95}
            followCursor={props?.followCursor ?? false}
          />
        </div>
      );

    case slug.includes("orb") || title.includes("orb"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <Orb
            hue={props?.hue ?? 0}
            hoverIntensity={props?.hoverIntensity ?? 0.2}
            rotateOnHover={props?.rotateOnHover ?? true}
            forceHoverState={props?.forceHoverState ?? false}
            backgroundColor={props?.backgroundColor ?? "transparent"}
            {...props}
          />
        </div>
      );

    case slug.includes("letter-glitch") || title.includes("letter glitch"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <LetterGlitch
            glitchColors={
              props?.glitchColors ?? ["#2b4539", "#61dca3", "#61b3dc"]
            }
            glitchSpeed={props?.glitchSpeed ?? 50}
            centerVignette={props?.centerVignette ?? false}
            outerVignette={props?.outerVignette ?? true}
            smooth={props?.smooth ?? true}
            characters={
              props?.characters ??
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
            }
            {...props}
          />
        </div>
      );

    case slug.includes("grid-motion") || title.includes("grid motion"):
      return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
          <GridMotion
            // items={props?.items ?? []} // items are usually static, maybe leave default
            gradientColor={props?.gradientColor ?? "black"}
            {...props}
          />
        </div>
      );

    case slug.includes("rainbow-button") || title.includes("rainbow button"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 160 }}
        >
          <RainbowButton
            duration={props?.duration ?? 2}
            borderWidth={props?.borderWidth ?? 2}
            animated={props?.animated ?? true}
          >
            {props?.text ?? "Rainbow Button"}
          </RainbowButton>
        </div>
      );

    case slug.includes("gooey-text-morphing") || title.includes("gooey"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 200 }}
        >
          <GooeyTextMorphing
            texts={["Joly UI", "One-for-all", "Storybook"]}
            duration={props?.duration ?? 1.2}
            pauseDuration={props?.pauseDuration ?? 1.2}
          />
        </div>
      );

    case slug.includes("highlight-text") || title.includes("highlight text"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <div className="text-[42px] font-black text-(--sb-text-strong)">
            <HighlightText
              duration={props?.duration ?? 0.5}
              delay={props?.delay ?? 0.1}
            >
              {props?.text ?? "Highlight me"}
            </HighlightText>
          </div>
        </div>
      );

    case slug.includes("rotate-text") || title.includes("rotate text"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <div className="text-[42px] font-black text-(--sb-text-strong)">
            <span>Build </span>
            <span className="inline-block text-[var(--sb-accent)]">
              <RotateText
                words={["fast", "simple", "polished"]}
                duration={props?.duration ?? 0.5}
                pauseDuration={props?.pauseDuration ?? 1.2}
              />
            </span>
          </div>
        </div>
      );

    case slug.includes("typewriter-text") || title.includes("typewriter text"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <div className="text-[42px] font-black text-(--sb-text-strong)">
            <TypewriterText
              words={["Typewriter", "Animation", "Effect"]}
              typingSpeed={props?.typingSpeed ?? 90}
              deletingSpeed={props?.deletingSpeed ?? 50}
              pauseDuration={props?.pauseDuration ?? 1200}
            />
          </div>
        </div>
      );

    case slug.includes("ai-prompt-box") || title.includes("ai prompt"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 240 }}
        >
          <AIPromptBox
            placeholder={props?.placeholder ?? "Ask me anything…"}
            isLoading={props?.isLoading ?? false}
            onSubmit={() => {}}
          />
        </div>
      );

    case slug.includes("animated-theme-toggle") ||
      title.includes("theme toggle"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <AnimatedThemeToggle />
        </div>
      );

    case slug.includes("date-wheel-picker") || title.includes("date wheel"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 140 }}
        >
          <DateWheelPicker
            value={new Date()}
            onChange={() => {}}
            size={props?.size ?? "md"}
            disabled={props?.disabled ?? false}
          />
        </div>
      );

    case slug.includes("feedback-widget") || title.includes("feedback"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 270 }}
        >
          <FeedbackWidget title={props?.title ?? "How was this demo?"} />
        </div>
      );

    case slug.includes("file-tree") || title.includes("file tree"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 300 }}
        >
          <FileTree tree={DEFAULT_FILE_TREE} />
        </div>
      );

    case slug.includes("animated-beam") || title.includes("animated beam"):
      return (
        <AnimatedBeamDemo
          curvature={props?.curvature ?? 0.2}
          duration={props?.duration ?? 2}
          reverse={props?.reverse ?? false}
        />
      );

    case slug.includes("expanded-map") || title.includes("expanded map"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 320 }}
        >
          <ExpandedMap tileProvider={props?.tileProvider ?? "carto-light"} />
        </div>
      );

    case slug.includes("github-star") || title.includes("github star"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 180 }}
        >
          <GitHubStarButton
            owner={props?.owner ?? "vercel"}
            repo={props?.repo ?? "next.js"}
            stars={
              typeof props?.stars === "number" && props.stars > 0
                ? props.stars
                : undefined
            }
          />
        </div>
      );

    case slug.includes("hover-preview") || title.includes("hover preview"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 260 }}
        >
          <HoverPreviewDemo />
        </div>
      );

    case slug.includes("image-sphere") || title.includes("image sphere"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 420 }}
        >
          <ImageSphere
            images={DEMO_IMAGES}
            autoRotate={props?.autoRotate ?? true}
            sphereRadius={props?.sphereRadius ?? 160}
            containerSize={props?.containerSize ?? 360}
          />
        </div>
      );

    case slug === "border-beam" || title.includes("border beam"):
      return (
        <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
          <BorderBeam
            size={props?.size ?? 80}
            duration={props?.duration ?? 6}
            delay={props?.delay ?? 0}
            reverse={props?.reverse ?? false}
            initialOffset={props?.initialOffset ?? 0}
            borderWidth={props?.borderWidth ?? 1}
          />
          <div className="text-[18px] font-black text-(--sb-text-strong)">
            Border Beam
          </div>
          <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
            Animated beam traveling around the border.
          </div>
        </div>
      );

    case slug === "shine-border" || title.includes("shine border"):
      return (
        <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
          <ShineBorder
            borderWidth={props?.borderWidth ?? 1}
            duration={props?.duration ?? 14}
            shineColor={props?.shineColor ?? ["#A97CF8", "#F38CB8", "#FDCC92"]}
          />
          <div className="text-[18px] font-black text-(--sb-text-strong)">
            Shine Border
          </div>
          <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
            Animated sheen effect around the card.
          </div>
        </div>
      );

    case slug === "magic-card" || title.includes("magic card"):
      return (
        <MagicCard
          className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6"
          gradientSize={props?.gradientSize ?? 200}
          gradientOpacity={props?.gradientOpacity ?? 0.8}
          gradientFrom={props?.gradientFrom ?? "#9E7AFF"}
          gradientTo={props?.gradientTo ?? "#FE8BBB"}
        >
          <div className="text-[18px] font-black text-(--sb-text-strong)">
            Magic Card
          </div>
          <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
            Hover to see the gradient follow your pointer.
          </div>
        </MagicCard>
      );

    case slug === "neon-gradient-card" || title.includes("neon gradient"):
      return (
        <div className="w-full max-w-[620px]">
          <NeonGradientCard
            borderSize={props?.borderSize ?? 2}
            borderRadius={props?.borderRadius ?? 20}
          >
            <div className="text-[18px] font-black text-(--sb-text-strong)">
              Neon Gradient Card
            </div>
            <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
              Animated neon gradient border.
            </div>
          </NeonGradientCard>
        </div>
      );

    case slug === "circular-progress-bar" ||
      title.includes("circular progress"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 240 }}
        >
          <CircularProgressBar
            value={props?.value ?? 72}
            min={props?.min ?? 0}
            max={props?.max ?? 100}
            gaugePrimaryColor={props?.gaugePrimaryColor ?? "#A97CF8"}
            gaugeSecondaryColor={
              props?.gaugeSecondaryColor ?? "rgba(0,0,0,0.15)"
            }
          />
        </div>
      );

    case slug === "icon-cloud" || title.includes("icon cloud"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 420 }}
        >
          <IconCloud
            size={props?.size ?? 380}
            images={
              (props?.images as string[] | undefined) ??
              DEMO_IMAGES.slice(0, 10).map((i) => i.src)
            }
          />
        </div>
      );

    case slug === "compact-confetti" || title.includes("compact confetti"):
      return (
        <CompactConfettiDemo
          particleCount={props?.particleCount ?? 120}
          spread={props?.spread ?? 70}
        />
      );

    case slug === "video-text" || title.includes("video text"):
      return (
        <div className="h-[240px] w-full max-w-[720px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card)">
          <VideoText
            src={
              props?.src ??
              "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            }
            fontSize={props?.fontSize ?? 22}
          >
            VIDEO
          </VideoText>
        </div>
      );

    case slug === "text-reveal" || title.includes("text reveal"):
      return (
        <div className="h-[420px] w-full overflow-y-auto rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card)">
          <TextReveal>
            Scroll this panel to reveal the words one by one.
          </TextReveal>
        </div>
      );

    case slug === "sparkles-text" || title.includes("sparkles"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 220 }}
        >
          <SparklesText sparklesCount={props?.sparklesCount ?? 10}>
            Sparkles
          </SparklesText>
        </div>
      );

    case slug.includes("code-block") || title.includes("code block"):
      return (
        <div className="w-full max-w-[620px]">
          <CodeBlock
            code={`const greeting = "Hello World";
console.log(greeting);`}
            language="javascript"
            filename="example.js"
          />
        </div>
      );

    case slug.includes("code-editor") || title.includes("code editor"):
      return (
        <div className="w-full max-w-[620px]">
          <CodeEditor
            code={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`}
            language="javascript"
            filename="fibonacci.js"
          />
        </div>
      );

    case slug.includes("code-tabs") || title.includes("code tabs"):
      return (
        <div className="w-full max-w-[620px]">
          <CodeTabs
            tabs={[
              {
                title: "npm",
                code: "npm install one-for-all",
                language: "bash",
              },
              {
                title: "yarn",
                code: "yarn add one-for-all",
                language: "bash",
              },
              {
                title: "pnpm",
                code: "pnpm add one-for-all",
                language: "bash",
              },
            ]}
          />
        </div>
      );

    case slug.includes("sandbox") || title.includes("sandbox"):
      return (
        <div className="w-full max-w-[900px]">
          <Sandbox
            code={`<button className="btn">
  Click me
</button>`}
            preview={
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                Click me
              </button>
            }
          />
        </div>
      );

    case slug.includes("gantt") || title.includes("gantt"):
      return (
        <div className="w-full max-w-[900px]">
          <GanttChart />
        </div>
      );

    case slug.includes("kanban") || title.includes("kanban"):
      return (
        <div className="w-full max-w-[900px]">
          <Kanban />
        </div>
      );

    case slug.includes("android") ||
      title.includes("android") ||
      slug === "device-mock":
      return (
        <div className="w-full flex items-center justify-center p-8">
          <AndroidMock />
        </div>
      );

    case slug.includes("iphone") ||
      title.includes("iphone") ||
      slug === "device-mock-2":
      return (
        <div className="w-full flex items-center justify-center p-8">
          <IPhoneMock />
        </div>
      );

    case slug.includes("mac-os-dock") ||
      slug.includes("macos-dock") ||
      title.includes("mac os dock"):
      return (
        <div className="w-full bg-linear-to-t from-black/20 to-transparent pt-20">
          <MacOSDock />
        </div>
      );

    case slug.includes("rating") || title.includes("rating"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <Rating
            count={props?.count ?? 5}
            initialValue={props?.initialValue ?? 3}
            icon={props?.icon ?? "star"}
            activeColor={props?.activeColor ?? "#facc15"}
          />
        </div>
      );

    case slug.includes("credit-card") || title.includes("credit card"):
      return (
        <div className="w-full flex items-center justify-center">
          <CreditCard
            number={props?.number}
            name={props?.name}
            expiry={props?.expiry}
          />
        </div>
      );

    case slug.includes("color-picker") || title.includes("color picker"):
      return (
        <div className="w-full flex items-center justify-center p-10">
          <ColorPicker />
        </div>
      );

    case slug.includes("combobox") || title.includes("combobox"):
      return (
        <div className="w-full flex items-center justify-center p-10">
          <ComboboxDemo />
        </div>
      );

    case slug.includes("dropzone") || title.includes("dropzone"):
      return (
        <div className="w-full max-w-[800px]">
          <Dropzone />
        </div>
      );

    case slug.includes("image-zoom") || title.includes("image zoom"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <ImageZoom
            src={
              props?.src ??
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
            }
            alt="Demo Image"
            className="h-64 w-96"
          />
        </div>
      );

    case slug.includes("image-crop") || title.includes("image crop"):
      return (
        <div className="w-full max-w-[800px]">
          <ImageCrop
            src={
              props?.src ??
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
            }
          />
        </div>
      );

    case slug.includes("3d-card") || title.includes("3d card"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <ThreeDCard />
        </div>
      );

    case slug.includes("3d-marquee") || title.includes("3d marquee"):
      return (
        <div className="w-full overflow-hidden">
          <ThreeDMarquee />
        </div>
      );

    case slug.includes("animated-cursor") || title.includes("animated cursor"):
      return (
        <div className="w-full py-10">
          <AnimatedCursor />
        </div>
      );

    case slug.includes("animated-testimonials") ||
      title.includes("animated testimonials"):
      return (
        <div className="w-full py-10">
          <AnimatedTestimonials />
        </div>
      );

    case slug.includes("animated-tooltip") ||
      title.includes("animated tooltip"):
      return (
        <div className="w-full py-10">
          <AnimatedTooltip />
        </div>
      );

    case slug.includes("glimpse") || title.includes("glimpse"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <Glimpse />
        </div>
      );

    case slug.includes("pin-list") || title.includes("pin list"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <PinList />
        </div>
      );

    case slug.includes("spinner") || title.includes("spinner"):
      return (
        <div className="w-full flex items-center justify-center py-10 bg-black/20 rounded-2xl">
          <Spinner
            size={props?.size ?? "md"}
            variant={props?.variant ?? "spin"}
          />
        </div>
      );

    case slug.includes("tabs-premium") ||
      title.includes("tabs premium") ||
      slug === "tabs":
      return (
        <div className="w-full py-10">
          <TabsPremium
            tabs={[
              { id: "1", label: "Analytics" },
              { id: "2", label: "Performance" },
              { id: "3", label: "Reports" },
            ]}
          />
        </div>
      );

    case slug.includes("banner") || title.includes("banner"):
      return (
        <div className="w-full py-10">
          <Banner
            title="New v4.0 is out!"
            description="Explore the latest features and improved performance."
            cta="What's new"
          />
        </div>
      );

    case slug.includes("marquee") || title.includes("marquee"):
      return (
        <div className="w-full py-10">
          <Marquee
            items={[
              <div
                key="1"
                className="flex items-center justify-center h-20 w-40 rounded-2xl bg-white/5 border border-white/5 font-black text-white italic"
              >
                LOGO 1
              </div>,
              <div
                key="2"
                className="flex items-center justify-center h-20 w-40 rounded-2xl bg-white/5 border border-white/5 font-black text-white italic"
              >
                LOGO 2
              </div>,
              <div
                key="3"
                className="flex items-center justify-center h-20 w-40 rounded-2xl bg-white/5 border border-white/5 font-black text-white italic"
              >
                LOGO 3
              </div>,
              <div
                key="4"
                className="flex items-center justify-center h-20 w-40 rounded-2xl bg-white/5 border border-white/5 font-black text-white italic"
              >
                LOGO 4
              </div>,
            ]}
          />
        </div>
      );

    case slug.includes("avatar-group") || title.includes("avatar group"):
      return (
        <div className="w-full py-10">
          <AvatarGroup
            avatars={[
              {
                src: "https://i.pravatar.cc/150?u=1",
                alt: "User 1",
                name: "Alex",
              },
              {
                src: "https://i.pravatar.cc/150?u=2",
                alt: "User 2",
                name: "Sarah",
              },
              {
                src: "https://i.pravatar.cc/150?u=3",
                alt: "User 3",
                name: "James",
              },
              {
                src: "https://i.pravatar.cc/150?u=4",
                alt: "User 4",
                name: "Maria",
              },
              {
                src: "https://i.pravatar.cc/150?u=5",
                alt: "User 5",
                name: "Kevin",
              },
            ]}
          />
        </div>
      );

    case slug.includes("tags") || title.includes("tags"):
      return (
        <div className="w-full py-10">
          <Tags />
        </div>
      );

    case slug.includes("mini-calendar") || title.includes("mini calendar"):
      return (
        <div className="w-full py-10">
          <MiniCalendar />
        </div>
      );

    case slug.includes("comparison") || title.includes("comparison"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <ComparisonSlider
            beforeImg="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
            afterImg="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
          />
        </div>
      );

    case slug.includes("kbd") || title.includes("kbd"):
      return (
        <div className="w-full py-10">
          <Kbd keys={["COMMAND", "K"]} />
        </div>
      );

    case slug.includes("qr-code") || title.includes("qr code"):
      return (
        <div className="w-full py-10">
          <QrCode />
        </div>
      );

    case slug.includes("status") || title.includes("status"):
      return (
        <div className="w-full flex items-center justify-center py-10">
          <StatusIndicator status={props?.status ?? "online"} />
        </div>
      );

    case slug.includes("terminal") || title.includes("terminal"):
      return (
        <div className="w-full py-10">
          <Terminal
            commands={[
              {
                command: "npm install @shadcn/ui",
                output: [
                  "Checking registries...",
                  "Resolving dependencies...",
                  "Installed 15 components.",
                ],
              },
              {
                command: "npm run dev",
                output: "Starting development server at http://localhost:3000",
              },
            ]}
          />
        </div>
      );

    case slug.includes("video-player") || title.includes("video player"):
      return (
        <div className="w-full py-10">
          <VideoPlayer
            src="https://framerusercontent.com/assets/p2Vf958fId7c65H2p4x856p6eU.mp4"
            poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80"
          />
        </div>
      );

    case slug.includes("beam-collision") || title.includes("beam collision"):
      return (
        <div className="w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
          <BeamCollision />
        </div>
      );

    case slug === "code-comparison" || title.includes("code comparison"):
      return (
        <CodeComparison
          filename={props?.filename ?? "example.ts"}
          highlightColor={props?.highlightColor ?? "#ff3333"}
          beforeCode={
            props?.beforeCode ??
            "const a = 1;\nconst b = 2;\nconsole.log(a + b);"
          }
          afterCode={
            props?.afterCode ??
            "const a = 1;\nconst b = 3;\nconsole.log(a + b);"
          }
        />
      );

    case slug === "scroll-progress" || title.includes("scroll progress"):
      return (
        <div className="relative w-full rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
          <ScrollProgress className="!absolute !inset-x-0 !top-0" />
          <div className="text-[18px] font-black text-(--sb-text-strong)">
            Scroll Progress
          </div>
          <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
            Scroll the page to see the progress bar animate.
          </div>
          <div className="mt-6 space-y-3 text-[13px] font-medium text-(--sb-text-muted)">
            <div className="h-8 rounded-xl bg-[var(--sb-selected)]" />
            <div className="h-8 rounded-xl bg-[var(--sb-selected)]" />
            <div className="h-8 rounded-xl bg-[var(--sb-selected)]" />
          </div>
        </div>
      );

    case slug === "copy-button" || title.includes("copy button"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 220 }}
        >
          <CopyButton text={props?.text ?? "npm install one-for-all"} />
        </div>
      );

    case slug === "flip-button" || title.includes("flip button"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 220 }}
        >
          <FlipButton
            frontText={props?.frontText ?? "Hover me"}
            backText={props?.backText ?? "Nice"}
          />
        </div>
      );

    case slug === "ripple-button" || title.includes("ripple button"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 220 }}
        >
          <RippleButton
            rippleColor={props?.rippleColor ?? "rgba(255,255,255,0.35)"}
          >
            Click
          </RippleButton>
        </div>
      );

    case slug === "progress" || title.includes("progress"):
      return (
        <div className="w-full max-w-[520px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
          <div className="text-[14px] font-black text-(--sb-text-strong)">
            Progress
          </div>
          <div className="mt-3">
            <Progress value={props?.value ?? 64} max={props?.max ?? 100} />
          </div>
        </div>
      );

    case slug === "popover" || title.includes("popover"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 240 }}
        >
          <Popover
            side={props?.side ?? "bottom"}
            align={props?.align ?? "center"}
            trigger={
              <button
                type="button"
                className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[13px] font-black text-(--sb-text-strong)"
              >
                Open Popover
              </button>
            }
            content={
              <div>
                <div className="text-[13px] font-black">Popover</div>
                <div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">
                  Click outside to close.
                </div>
              </div>
            }
          />
        </div>
      );

    case slug === "sheet" || title.includes("sheet"):
      return <SheetDemo side={props?.side ?? "right"} />;

    case slug === "flip-card" || title.includes("flip card"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 320 }}
        >
          <FlipCard
            front={
              <div>
                <div className="text-[16px] font-black text-(--sb-text-strong)">
                  Front
                </div>
                <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
                  Hover to flip.
                </div>
              </div>
            }
            back={
              <div>
                <div className="text-[16px] font-black text-(--sb-text-strong)">
                  Back
                </div>
                <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
                  3D flip using CSS transforms.
                </div>
              </div>
            }
          />
        </div>
      );

    case slug === "motion-carousel" || title.includes("motion carousel"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 300 }}
        >
          <MotionCarousel
            autoplay={props?.autoplay ?? false}
            autoplayDelay={props?.autoplayDelay ?? 2800}
            items={
              props?.items ?? [
                { id: "1", title: "First", description: "A minimal carousel" },
                { id: "2", title: "Second", description: "No external deps" },
                { id: "3", title: "Third", description: "Buttons + transform" },
              ]
            }
          />
        </div>
      );

    case slug === "radial-intro" || title.includes("radial intro"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 280 }}
        >
          <RadialIntro
            title={props?.title ?? "Radial Intro"}
            subtitle={props?.subtitle ?? "A simple radial-gradient hero intro."}
          />
        </div>
      );

    case slug === "radial-menu" || title.includes("radial menu"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 340 }}
        >
          <RadialMenu
            radius={props?.radius ?? 90}
            items={
              props?.items ?? [
                { label: "Edit" },
                { label: "Share" },
                { label: "Archive" },
                { label: "Delete" },
              ]
            }
          />
        </div>
      );

    case slug === "hole-background" || title.includes("hole background"):
      return <HoleBackground holeSize={props?.holeSize ?? 220} />;

    case slug === "management-bar" || title.includes("management bar"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 260 }}
        >
          <ManagementBar title={props?.title ?? "Management"} />
        </div>
      );

    case slug === "playful-todolist" ||
      title.includes("todolist") ||
      title.includes("todo"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 420 }}
        >
          <PlayfulTodoList />
        </div>
      );

    case slug === "magnet" || title.includes("magnet"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 240 }}
        >
          <Magnet
            strength={props?.strength ?? 0.25}
            radius={props?.radius ?? 160}
          >
            <button
              type="button"
              className="rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-6 py-3 text-[13px] font-black text-(--sb-text-strong)"
            >
              Magnetic
            </button>
          </Magnet>
        </div>
      );

    case slug === "crosshair" || title.includes("crosshair"):
      return <CrosshairDemo size={props?.size ?? 22} />;

    case slug === "decay-card" || title.includes("decay"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 260 }}
        >
          <DecayCard>
            <div className="text-[16px] font-black text-(--sb-text-strong)">
              Decay Card
            </div>
            <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
              SVG filter displacement effect.
            </div>
          </DecayCard>
        </div>
      );

    case slug === "fade-content" || title.includes("fade content"):
      return (
        <div className="h-[220px] w-full max-w-[620px] overflow-auto rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg) p-4 sb-scroll">
          <div className="h-[120px]" />
          <FadeContent>
            <div className="rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-5">
              <div className="text-[14px] font-black text-(--sb-text-strong)">
                Fade Content
              </div>
              <div className="mt-1 text-[12px] font-medium text-(--sb-text-muted)">
                Scroll inside this panel.
              </div>
            </div>
          </FadeContent>
          <div className="h-[180px]" />
        </div>
      );

    case slug === "pixel-card" || title.includes("pixel card"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 260 }}
        >
          <PixelCard>
            <div className="text-[16px] font-black text-(--sb-text-strong)">
              Pixel Card
            </div>
            <div className="mt-2 text-[13px] font-medium text-(--sb-text-muted)">
              Hover for pixel overlay.
            </div>
          </PixelCard>
        </div>
      );

    case slug === "true-focus" || title.includes("true focus"):
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 220 }}
        >
          <TrueFocus
            text={props?.text ?? "Focus moves across words"}
            intervalMs={props?.intervalMs ?? 1400}
          />
        </div>
      );

    case slug === "calendar":
      return (
        <div
          className="flex items-center justify-center"
          style={{ height: 360 }}
        >
          <CalendarDemo />
        </div>
      );

    case slug.includes("modal-viewer") || title.includes("modal viewer"):
      return (
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/glTF-Binary/Duck.glb"
          width={1000}
          height={400}
          modelXOffset={0.5}
          modelYOffset={0}
          enableMouseParallax
          enableHoverRotation
          environmentPreset="forest"
          fadeIn={false}
          autoRotate={false}
          autoRotateSpeed={0.35}
          showScreenshotButton
        />
      );

    case slug.includes("spotlight-card") || title.includes("spotlight card"):
      return (
        <div className="flex items-center justify-center p-8 bg-black min-h-[400px] rounded-xl">
          <SpotlightCard
            className="w-[300px] h-[400px] rounded-xl border border-white/10 bg-white/5 p-6 text-white relative overflow-hidden"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="text-2xl font-bold relative z-10">Spotlight</div>
            <p className="mt-4 text-white/60 relative z-10">
              Hover over this card to see the spotlight effect.
            </p>
          </SpotlightCard>
        </div>
      );

    // ... other cases fallback to generic

    case slug.includes("confetti") || title.includes("confetti"):
      return <Confetti {...props} />;

    case slug.includes("fireworks") || title.includes("fireworks"):
      return <Fireworks {...props} />;

    case slug.includes("meteors") || title.includes("meteors"):
      return <Meteors {...props} />;

    case slug.includes("orbits") || title.includes("orbits"):
      return <Orbits {...props} />;

    case slug.includes("rain") || title.includes("rain"):
      return <Rain {...props} />;

    case slug.includes("snow") || title.includes("snow"):
      return <Snow {...props} />;

    case slug.includes("vortex") || title.includes("vortex"):
      return <Vortex {...props} />;

    case slug.includes("area-gradient") ||
      title.includes("area gradient") ||
      slug.includes("gradient-area-chart"):
      return (
        <div className="w-full max-w-[600px] p-4">
          <AreaGradient />
        </div>
      );

    case slug.includes("bar-horizontal") ||
      title.includes("bar horizontal") ||
      slug.includes("horizontal-bar"):
      return (
        <div className="w-full max-w-[600px] p-4">
          <BarHorizontal />
        </div>
      );

    case slug.includes("bar-interactive") ||
      title.includes("bar interactive") ||
      slug.includes("interactive-bar"):
      return (
        <div className="w-full max-w-[600px] p-4">
          <BarInteractive />
        </div>
      );

    case slug.includes("pie-donut") || title.includes("pie donut"):
      return (
        <div className="w-full max-w-[400px] p-4">
          <PieDonut />
        </div>
      );

    case slug.includes("calendar-input") || title.includes("calendar input"):
      return (
        <div className="flex items-center justify-center p-8 min-h-[400px]">
          <CalendarInput />
        </div>
      );

    case slug.includes("draggable-card") || title.includes("draggable card"):
      return (
        <div className="flex items-center justify-center p-8 h-[400px] relative overflow-hidden">
          <DraggableCard className="w-40 h-40 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing shadow-2xl">
            Drag me!
          </DraggableCard>
        </div>
      );

    case slug.includes("hero-parallax") || title.includes("hero parallax"):
      return (
        <div className="w-full h-[600px] overflow-auto">
          <HeroParallax
            products={[
              {
                title: "Moonbeam",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
              },
              {
                title: "Cursor",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/cursor.png",
              },
              {
                title: "Rogue",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/rogue.png",
              },
              {
                title: "Editorially",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/editorially.png",
              },
              {
                title: "Editrix AI",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/editrix.png",
              },
              {
                title: "Pixel Perfect",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
              },
              {
                title: "Algochurn",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
              },
              {
                title: "Aceternity UI",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
              },
              {
                title: "Tailwind Master Kit",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
              },
              {
                title: "SmartBridge",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
              },
              {
                title: "Renderwork Studio",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
              },
              {
                title: "Creme Digital",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
              },
              {
                title: "Golden Bells Academy",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
              },
              {
                title: "Invoker Labs",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/invoker.png",
              },
              {
                title: "E Free Invoice",
                link: "#",
                thumbnail:
                  "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
              },
            ]}
          />
        </div>
      );

    case slug.includes("image-compare") || title.includes("image compare"):
      return (
        <div className="w-full max-w-[600px] p-4">
          <ImageCompare
            beforeImage="https://assets.aceternity.com/demos/aceternity-before.webp"
            afterImage="https://assets.aceternity.com/demos/aceternity-after.webp"
          />
        </div>
      );

    case slug.includes("lens") || title.includes("lens"):
      return (
        <div className="w-full flex items-center justify-center p-8 bg-[#1e1e1e] rounded-xl">
          <Lens>
            <div className="w-[400px] relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
                alt="Lens Demo"
                className="w-full h-auto"
              />
            </div>
          </Lens>
        </div>
      );

    case slug.includes("image-stack") || title.includes("image stack"):
      return (
        <div className="w-full h-[600px] flex items-center justify-center">
          <Stack
            randomRotation={true}
            sensitivity={180}
            cards={[
              <img
                key={1}
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&q=80"
                alt="Card 1"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />,
              <img
                key={2}
                src="https://images.unsplash.com/photo-1449824913929-79821eda29cb?w=400&q=80"
                alt="Card 2"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />,
              <img
                key={3}
                src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80"
                alt="Card 3"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />,
              <img
                key={4}
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&q=80"
                alt="Card 4"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />,
            ]}
          />
        </div>
      );

    case slug.includes("radar-dots") ||
      title.includes("radar dots") ||
      slug.includes("radar-chart"):
      return (
        <div className="w-full max-w-[400px] p-4">
          <RadarDots />
        </div>
      );
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
  if (
    slug.includes("scroll") ||
    title.includes("scroll") ||
    url.includes("scroll")
  ) {
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
          <div className="text-[13px] font-extrabold text-(--sb-text-strong)">
            {component.title}
          </div>
          <div className="text-[12px] font-medium text-(--sb-text-muted)">
            Local demo preview
          </div>
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

export function getDemoControls(
  component: ComponentItem,
): DemoControl[] | null {
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

  if (slug === "border-beam" || title.includes("border beam")) {
    return [
      {
        type: "number",
        param: "size",
        label: "Size",
        defaultValue: 80,
        min: 20,
        max: 240,
        step: 5,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 6,
        min: 1,
        max: 20,
        step: 0.5,
      },
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "boolean",
        param: "reverse",
        label: "Reverse",
        defaultValue: false,
      },
    ];
  }

  if (slug === "shine-border" || title.includes("shine border")) {
    return [
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 14,
        min: 2,
        max: 30,
        step: 1,
      },
    ];
  }

  if (slug === "magic-card" || title.includes("magic card")) {
    return [
      {
        type: "number",
        param: "gradientSize",
        label: "Gradient Size",
        defaultValue: 200,
        min: 80,
        max: 420,
        step: 10,
      },
      {
        type: "number",
        param: "gradientOpacity",
        label: "Gradient Opacity",
        defaultValue: 0.8,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ];
  }

  if (slug === "neon-gradient-card" || title.includes("neon gradient")) {
    return [
      {
        type: "number",
        param: "borderSize",
        label: "Border Size",
        defaultValue: 2,
        min: 0,
        max: 10,
        step: 1,
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 20,
        min: 0,
        max: 48,
        step: 1,
      },
    ];
  }

  if (slug === "circular-progress-bar" || title.includes("circular progress")) {
    return [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 72,
        min: 0,
        max: 100,
        step: 1,
      },
    ];
  }

  if (slug === "icon-cloud" || title.includes("icon cloud")) {
    return [
      {
        type: "number",
        param: "size",
        label: "Size",
        defaultValue: 380,
        min: 240,
        max: 520,
        step: 10,
      },
    ];
  }

  if (slug === "compact-confetti" || title.includes("confetti")) {
    return [
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 120,
        min: 20,
        max: 400,
        step: 10,
      },
      {
        type: "number",
        param: "spread",
        label: "Spread",
        defaultValue: 70,
        min: 10,
        max: 180,
        step: 5,
      },
    ];
  }

  if (slug === "sparkles-text" || title.includes("sparkles")) {
    return [
      {
        type: "number",
        param: "sparklesCount",
        label: "Sparkles Count",
        defaultValue: 10,
        min: 0,
        max: 30,
        step: 1,
      },
    ];
  }

  if (slug === "code-comparison" || title.includes("code comparison")) {
    return [
      {
        type: "color",
        param: "highlightColor",
        label: "Highlight Color",
        defaultValue: "#ff3333",
      },
      {
        type: "text",
        param: "filename",
        label: "Filename",
        defaultValue: "example.ts",
      },
    ];
  }

  if (slug.includes("dock") || title.includes("dock")) {
    return [
      {
        type: "number",
        param: "magnification",
        label: "Magnification",
        defaultValue: 70,
        min: 40,
        max: 140,
        step: 2,
      },
      {
        type: "number",
        param: "distance",
        label: "Distance",
        defaultValue: 200,
        min: 60,
        max: 400,
        step: 5,
      },
      {
        type: "number",
        param: "panelHeight",
        label: "Panel Height",
        defaultValue: 68,
        min: 40,
        max: 120,
        step: 2,
      },
      {
        type: "number",
        param: "dockHeight",
        label: "Dock Height",
        defaultValue: 256,
        min: 120,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "baseItemSize",
        label: "Base Item Size",
        defaultValue: 50,
        min: 28,
        max: 90,
        step: 1,
      },
    ];
  }

  if (slug.includes("carousel") || title.includes("carousel")) {
    return [
      {
        type: "number",
        param: "baseWidth",
        label: "Base Width",
        defaultValue: 320,
        min: 220,
        max: 520,
        step: 10,
      },
      {
        type: "boolean",
        param: "autoplay",
        label: "Autoplay",
        defaultValue: false,
      },
      {
        type: "number",
        param: "autoplayDelay",
        label: "Autoplay Delay (ms)",
        defaultValue: 3000,
        min: 500,
        max: 10000,
        step: 250,
      },
      {
        type: "boolean",
        param: "pauseOnHover",
        label: "Pause On Hover",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "loop",
        label: "Loop",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "round",
        label: "Round",
        defaultValue: false,
      },
    ];
  }

  if (slug.includes("spotlight-card") || title.includes("spotlight")) {
    return [
      {
        type: "color",
        param: "spotlightColor",
        label: "Spotlight Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("flowing-menu") || title.includes("flowing menu")) {
    return [
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 15,
        min: 2,
        max: 60,
        step: 1,
      },
      {
        type: "color",
        param: "textColor",
        label: "Text Color",
        defaultValue: "#ffffff",
      },
      {
        type: "color",
        param: "bgColor",
        label: "Background Color",
        defaultValue: "#060010",
      },
      {
        type: "color",
        param: "marqueeBgColor",
        label: "Marquee BG Color",
        defaultValue: "#ffffff",
      },
      {
        type: "color",
        param: "marqueeTextColor",
        label: "Marquee Text Color",
        defaultValue: "#060010",
      },
      {
        type: "color",
        param: "borderColor",
        label: "Border Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("elastic-slider") || title.includes("elastic slider")) {
    return [
      {
        type: "number",
        param: "defaultValue",
        label: "Default Value",
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "startingValue",
        label: "Starting Value",
        defaultValue: 0,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "maxValue",
        label: "Max Value",
        defaultValue: 100,
        min: 1,
        max: 500,
        step: 1,
      },
      {
        type: "boolean",
        param: "isStepped",
        label: "Stepped",
        defaultValue: false,
      },
      {
        type: "number",
        param: "stepSize",
        label: "Step Size",
        defaultValue: 1,
        min: 1,
        max: 25,
        step: 1,
      },
    ];
  }

  if (slug.includes("counter") || title.includes("counter")) {
    return [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 1234.56,
        min: 0,
        max: 999999,
        step: 1,
      },
      {
        type: "number",
        param: "fontSize",
        label: "Font Size",
        defaultValue: 56,
        min: 12,
        max: 140,
        step: 2,
      },
      {
        type: "number",
        param: "padding",
        label: "Padding",
        defaultValue: 8,
        min: 0,
        max: 40,
        step: 1,
      },
      {
        type: "number",
        param: "gap",
        label: "Gap",
        defaultValue: 8,
        min: 0,
        max: 24,
        step: 1,
      },
    ];
  }

  if (slug.includes("infinite-menu") || title.includes("infinite menu")) {
    return [
      {
        type: "number",
        param: "scale",
        label: "Scale",
        defaultValue: 1,
        min: 0.5,
        max: 2,
        step: 0.1,
      },
    ];
  }

  if (slug.includes("stepper") || title.includes("stepper")) {
    return [
      {
        type: "number",
        param: "initialStep",
        label: "Initial Step",
        defaultValue: 1,
        min: 1,
        max: 4,
        step: 1,
      },
      {
        type: "boolean",
        param: "disableStepIndicators",
        label: "Disable Step Indicators",
        defaultValue: false,
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

  if (
    slug.includes("decrypted-text") ||
    title.includes("decrypted text") ||
    title.includes("decrypted")
  ) {
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

  if (slug.includes("electric-border") || title.includes("electric border")) {
    return [
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#7df9ff",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "chaos",
        label: "Chaos",
        defaultValue: 0.12,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 16,
        min: 0,
        max: 100,
        step: 1,
      },
    ];
  }

  if (slug.includes("antigravity") || title.includes("antigravity")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Particle Count",
        defaultValue: 300,
        min: 50,
        max: 1000,
        step: 50,
      },
      {
        type: "number",
        param: "magnetRadius",
        label: "Magnet Radius",
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "number",
        param: "ringRadius",
        label: "Ring Radius",
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "number",
        param: "particleSize",
        label: "Particle Size",
        defaultValue: 2,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#FF9FFC",
      },
      {
        type: "boolean",
        param: "autoAnimate",
        label: "Auto Animate",
        defaultValue: false,
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

  if (slug.includes("logo-loop") || title.includes("logo loop")) {
    return [
      {
        type: "select",
        param: "direction",
        label: "Direction",
        defaultValue: "left",
        options: ["left", "right", "up", "down"],
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 100,
        min: 10,
        max: 500,
      },
      {
        type: "number",
        param: "hoverSpeed",
        label: "Hover Speed",
        defaultValue: 0,
        min: 0,
        max: 500,
      },
      {
        type: "number",
        param: "logoHeight",
        label: "Logo Height",
        defaultValue: 40,
        min: 20,
        max: 100,
      },
      {
        type: "number",
        param: "gap",
        label: "Gap",
        defaultValue: 40,
        min: 10,
        max: 200,
      },
      {
        type: "boolean",
        param: "fadeOut",
        label: "Fade Out",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "scaleOnHover",
        label: "Scale on Hover",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("target-cursor") || title.includes("target cursor")) {
    return [
      {
        type: "number",
        param: "spinDuration",
        label: "Spin Duration (s)",
        defaultValue: 2,
        min: 0.1,
        max: 10,
        step: 0.1,
      },
      {
        type: "number",
        param: "hoverDuration",
        label: "Hover Duration (s)",
        defaultValue: 0.2,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "hideDefaultCursor",
        label: "Hide Default Cursor",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "parallaxOn",
        label: "Parallax Effect",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("laser-flow") || title.includes("laser flow")) {
    return [
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#FF79C6",
      },
      {
        type: "number",
        param: "wispDensity",
        label: "Wisp Density",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "fogIntensity",
        label: "Fog Intensity",
        defaultValue: 0.45,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "horizontalSizing",
        label: "Horizontal Sizing",
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      {
        type: "number",
        param: "verticalSizing",
        label: "Vertical Sizing",
        defaultValue: 2.0,
        min: 0.5,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "wispSpeed",
        label: "Wisp Speed",
        defaultValue: 15.0,
        min: 1,
        max: 50,
        step: 1,
      },
    ];
  }

  if (slug.includes("magnet-lines") || title.includes("magnet lines")) {
    return [
      {
        type: "number",
        param: "rows",
        label: "Rows",
        defaultValue: 9,
        min: 1,
        max: 20,
      },
      {
        type: "number",
        param: "columns",
        label: "Columns",
        defaultValue: 9,
        min: 1,
        max: 20,
      },
      {
        type: "text",
        param: "containerSize",
        label: "Container Size",
        defaultValue: "40vmin",
      },
      {
        type: "color",
        param: "lineColor",
        label: "Line Color",
        defaultValue: "#efefef",
      },
      {
        type: "text",
        param: "lineWidth",
        label: "Line Width",
        defaultValue: "1vmin",
      },
      {
        type: "text",
        param: "lineHeight",
        label: "Line Height",
        defaultValue: "6vmin",
      },
      {
        type: "number",
        param: "baseAngle",
        label: "Base Angle (deg)",
        defaultValue: -10,
        min: -360,
        max: 360,
      },
    ];
  }

  if (slug.includes("ghost-cursor") || title.includes("ghost cursor")) {
    return [
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#B19EEF",
      },
      {
        type: "number",
        param: "brightness",
        label: "Brightness",
        defaultValue: 2,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "trailLength",
        label: "Trail Length",
        defaultValue: 50,
        min: 1,
        max: 100,
      },
      {
        type: "number",
        param: "inertia",
        label: "Inertia",
        defaultValue: 0.5,
        min: 0,
        max: 0.95,
        step: 0.05,
      },
      {
        type: "number",
        param: "grainIntensity",
        label: "Grain Intensity",
        defaultValue: 0.05,
        min: 0,
        max: 0.5,
        step: 0.01,
      },
      {
        type: "number",
        param: "bloomStrength",
        label: "Bloom Strength",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.05,
      },
      {
        type: "number",
        param: "bloomRadius",
        label: "Bloom Radius",
        defaultValue: 1.0,
        min: 0,
        max: 2,
        step: 0.1,
      },
    ];
  }

  if (slug.includes("click-spark") || title.includes("click spark")) {
    return [
      {
        type: "color",
        param: "sparkColor",
        label: "Spark Color",
        defaultValue: "#fff",
      },
      {
        type: "number",
        param: "sparkSize",
        label: "Spark Size",
        defaultValue: 10,
        min: 5,
        max: 50,
      },
      {
        type: "number",
        param: "sparkRadius",
        label: "Spark Radius",
        defaultValue: 15,
        min: 5,
        max: 100,
      },
      {
        type: "number",
        param: "sparkCount",
        label: "Spark Count",
        defaultValue: 8,
        min: 3,
        max: 20,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration (ms)",
        defaultValue: 400,
        min: 100,
        max: 2000,
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
  if (
    slug.includes("variable-proximity") ||
    title.includes("variable proximity")
  ) {
    return [
      {
        type: "text",
        param: "label",
        label: "Text",
        defaultValue:
          "Hover me! And then star React Bits on GitHub, or else...",
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

  if (
    slug.includes("count-up") ||
    title.includes("count up") ||
    title.includes("counter")
  ) {
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

  if (slug.includes("sticker-peel") || title.includes("sticker peel")) {
    return [
      {
        type: "text",
        param: "imageSrc",
        label: "Image Source",
        defaultValue:
          "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60",
      },
      {
        type: "number",
        param: "width",
        label: "Width (px)",
        defaultValue: 300,
        min: 100,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "rotate",
        label: "Rotate",
        defaultValue: 15,
        min: -180,
        max: 180,
        step: 1,
      },
      {
        type: "number",
        param: "peelBackHoverPct",
        label: "Hover Peel %",
        defaultValue: 30,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "peelBackActivePct",
        label: "Active Peel %",
        defaultValue: 40,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "peelDirection",
        label: "Direction",
        defaultValue: 0,
        min: 0,
        max: 360,
        step: 1,
      },
      {
        type: "number",
        param: "shadowIntensity",
        label: "Shadow",
        defaultValue: 0.6,
        min: 0,
        max: 1,
        step: 0.1,
      },
      {
        type: "number",
        param: "lightingIntensity",
        label: "Lighting",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("splash-cursor") || title.includes("splash cursor")) {
    return [
      {
        type: "number",
        param: "SIM_RESOLUTION",
        label: "Sim Res",
        defaultValue: 128,
      },
      {
        type: "number",
        param: "DYE_RESOLUTION",
        label: "Dye Res",
        defaultValue: 1024,
      },
      {
        type: "number",
        param: "DENSITY_DISSIPATION",
        label: "Density Dissipation",
        defaultValue: 1,
        step: 0.1,
      },
      {
        type: "number",
        param: "VELOCITY_DISSIPATION",
        label: "Velocity Dissipation",
        defaultValue: 0.2,
        step: 0.1,
      },
      {
        type: "number",
        param: "PRESSURE",
        label: "Pressure",
        defaultValue: 0.8,
        step: 0.1,
      },
      { type: "number", param: "CURL", label: "Curl", defaultValue: 30 },
      {
        type: "number",
        param: "SPLAT_RADIUS",
        label: "Splat Radius",
        defaultValue: 0.25,
        step: 0.01,
      },
      {
        type: "number",
        param: "SPLAT_FORCE",
        label: "Splat Force",
        defaultValue: 6000,
      },
      {
        type: "boolean",
        param: "SHADING",
        label: "Shading",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("star-border") || title.includes("star border")) {
    return [
      { type: "color", param: "color", label: "Color", defaultValue: "cyan" },
      { type: "text", param: "speed", label: "Speed", defaultValue: "6s" },
      {
        type: "number",
        param: "thickness",
        label: "Thickness",
        defaultValue: 1,
      },
    ];
  }

  if (slug.includes("animated-list") || title.includes("animated list")) {
    return [
      {
        type: "boolean",
        param: "showGradients",
        label: "Show Gradients",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableArrowNavigation",
        label: "Arrow Nav",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "displayScrollbar",
        label: "Scrollbar",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("scroll-stack") || title.includes("scroll stack")) {
    return [
      {
        type: "number",
        param: "itemDistance",
        label: "Distance",
        defaultValue: 50,
      },
      {
        type: "number",
        param: "itemScale",
        label: "Scale Step",
        defaultValue: 0.05,
        step: 0.01,
      },
      {
        type: "number",
        param: "itemStackDistance",
        label: "Stack Dist",
        defaultValue: 20,
      },
      {
        type: "text",
        param: "stackPosition",
        label: "Stack Pos",
        defaultValue: "20%",
      },
      {
        type: "number",
        param: "rotationAmount",
        label: "Rotation",
        defaultValue: 0,
      },
      { type: "number", param: "blurAmount", label: "Blur", defaultValue: 0 },
    ];
  }

  if (slug.includes("magic-bento") || title.includes("magic bento")) {
    return [
      {
        type: "boolean",
        param: "textAutoHide",
        label: "Text Auto Hide",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableStars",
        label: "Stars",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableSpotlight",
        label: "Spotlight",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableBorderGlow",
        label: "Border Glow",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableTilt",
        label: "Tilt",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "enableMagnetism",
        label: "Magnetism",
        defaultValue: true,
      },
      {
        type: "color",
        param: "glowColor",
        label: "Glow Color",
        defaultValue: "132, 0, 255",
      },
    ];
  }

  if (slug.includes("liquid-ether") || title.includes("liquid ether")) {
    return [
      {
        type: "number",
        param: "resolution",
        label: "Resolution Scale",
        defaultValue: 1,
        min: 0.25,
        max: 2,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("prism") || title.includes("prism")) {
    return [
      {
        type: "select",
        param: "animationType",
        label: "Animation",
        defaultValue: "rotate",
        options: ["rotate", "hover", "3drotate"],
      },
      {
        type: "number",
        param: "glow",
        label: "Glow",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "noise",
        label: "Noise",
        defaultValue: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "hueShift",
        label: "Hue Shift",
        defaultValue: 0,
        min: -3.14,
        max: 3.14,
        step: 0.05,
      },
      {
        type: "number",
        param: "bloom",
        label: "Bloom",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "suspendWhenOffscreen",
        label: "Suspend Offscreen",
        defaultValue: false,
      },
    ];
  }

  if (slug.includes("dark-veil") || title.includes("dark veil")) {
    return [
      {
        type: "number",
        param: "hueShift",
        label: "Hue Shift",
        defaultValue: 0,
        min: -180,
        max: 180,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "noiseIntensity",
        label: "Noise",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.02,
      },
      {
        type: "number",
        param: "scanlineIntensity",
        label: "Scanlines",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.02,
      },
      {
        type: "number",
        param: "warpAmount",
        label: "Warp",
        defaultValue: 0,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "resolutionScale",
        label: "Resolution Scale",
        defaultValue: 1,
        min: 0.25,
        max: 2,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("light-pillar") || title.includes("light pillar")) {
    return [
      {
        type: "color",
        param: "topColor",
        label: "Top Color",
        defaultValue: "#5227FF",
      },
      {
        type: "color",
        param: "bottomColor",
        label: "Bottom Color",
        defaultValue: "#FF9FFC",
      },
      {
        type: "number",
        param: "intensity",
        label: "Intensity",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "rotationSpeed",
        label: "Rotation Speed",
        defaultValue: 0.3,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: false,
      },
      {
        type: "select",
        param: "quality",
        label: "Quality",
        defaultValue: "high",
        options: ["low", "medium", "high"],
      },
    ];
  }

  if (slug.includes("floating-lines") || title.includes("floating lines")) {
    return [
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: true,
      },
      {
        type: "number",
        param: "animationSpeed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.05,
      },
      {
        type: "number",
        param: "bendRadius",
        label: "Bend Radius",
        defaultValue: 5,
        min: 0,
        max: 20,
        step: 0.1,
      },
      {
        type: "number",
        param: "bendStrength",
        label: "Bend Strength",
        defaultValue: -0.5,
        min: -2,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "parallax",
        label: "Parallax",
        defaultValue: true,
      },
      {
        type: "number",
        param: "parallaxStrength",
        label: "Parallax Strength",
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.02,
      },
    ];
  }

  if (slug.includes("light-rays") || title.includes("light rays")) {
    return [
      {
        type: "select",
        param: "raysOrigin",
        label: "Origin",
        defaultValue: "top-center",
        options: [
          "top-center",
          "top-left",
          "top-right",
          "left",
          "right",
          "bottom-center",
          "bottom-left",
          "bottom-right",
        ],
      },
      {
        type: "color",
        param: "raysColor",
        label: "Color",
        defaultValue: "#ffffff",
      },
      {
        type: "number",
        param: "raysSpeed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.05,
      },
      {
        type: "number",
        param: "lightSpread",
        label: "Spread",
        defaultValue: 1,
        min: 0.1,
        max: 3,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "pulsating",
        label: "Pulsating",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "followMouse",
        label: "Follow Mouse",
        defaultValue: true,
      },
      {
        type: "number",
        param: "mouseInfluence",
        label: "Mouse Influence",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.02,
      },
    ];
  }

  if (slug.includes("color-bends") || title.includes("color bends")) {
    return [
      {
        type: "number",
        param: "rotation",
        label: "Rotation (deg)",
        defaultValue: 45,
        min: -180,
        max: 180,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 0.2,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "transparent",
        label: "Transparent",
        defaultValue: true,
      },
      {
        type: "number",
        param: "warpStrength",
        label: "Warp",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "noise",
        label: "Noise",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.02,
      },
    ];
  }

  if (slug.includes("particles") || title.includes("particles")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 70,
        min: 10,
        max: 220,
        step: 5,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 0.6,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "linkDistance",
        label: "Link Distance",
        defaultValue: 120,
        min: 40,
        max: 240,
        step: 5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("grid-scan") || title.includes("grid scan")) {
    return [
      {
        type: "number",
        param: "size",
        label: "Grid Size",
        defaultValue: 44,
        min: 12,
        max: 120,
        step: 2,
      },
      {
        type: "number",
        param: "opacity",
        label: "Grid Opacity",
        defaultValue: 0.12,
        min: 0,
        max: 0.6,
        step: 0.01,
      },
      {
        type: "number",
        param: "scanSpeed",
        label: "Scan Speed",
        defaultValue: 2.2,
        min: 0.4,
        max: 8,
        step: 0.1,
      },
      {
        type: "color",
        param: "gridColor",
        label: "Grid Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("lightning") || title.includes("lightning")) {
    return [
      {
        type: "number",
        param: "frequency",
        label: "Frequency",
        defaultValue: 1.1,
        min: 0.1,
        max: 6,
        step: 0.1,
      },
      {
        type: "number",
        param: "glow",
        label: "Glow",
        defaultValue: 10,
        min: 0,
        max: 30,
        step: 1,
      },
      {
        type: "number",
        param: "thickness",
        label: "Thickness",
        defaultValue: 2,
        min: 1,
        max: 8,
        step: 1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("galaxy") || title.includes("galaxy")) {
    return [
      {
        type: "number",
        param: "stars",
        label: "Stars",
        defaultValue: 900,
        min: 200,
        max: 2200,
        step: 50,
      },
      {
        type: "number",
        param: "rotationSpeed",
        label: "Rotation Speed",
        defaultValue: 0.25,
        min: 0,
        max: 2,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("dot-grid") || title.includes("dot grid")) {
    return [
      {
        type: "number",
        param: "spacing",
        label: "Spacing",
        defaultValue: 22,
        min: 8,
        max: 80,
        step: 1,
      },
      {
        type: "number",
        param: "dotSize",
        label: "Dot Size",
        defaultValue: 2,
        min: 1,
        max: 8,
        step: 1,
      },
      {
        type: "number",
        param: "opacity",
        label: "Opacity",
        defaultValue: 0.18,
        min: 0,
        max: 0.8,
        step: 0.01,
      },
      {
        type: "color",
        param: "dotColor",
        label: "Dot Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("hyperspeed") || title.includes("hyperspeed")) {
    return [
      {
        type: "number",
        param: "streaks",
        label: "Streaks",
        defaultValue: 260,
        min: 60,
        max: 900,
        step: 20,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0.2,
        max: 4,
        step: 0.1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
    ];
  }

  if (slug.includes("ballpit") || title.includes("ballpit")) {
    return [
      {
        type: "number",
        param: "balls",
        label: "Balls",
        defaultValue: 18,
        min: 6,
        max: 60,
        step: 1,
      },
      {
        type: "number",
        param: "gravity",
        label: "Gravity",
        defaultValue: 0.45,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "bounce",
        label: "Bounce",
        defaultValue: 0.86,
        min: 0.2,
        max: 0.98,
        step: 0.01,
      },
    ];
  }

  if (slug.includes("orb") || title.includes("orb")) {
    return [
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 4,
        step: 0.05,
      },
      {
        type: "number",
        param: "glow",
        label: "Glow",
        defaultValue: 0.85,
        min: 0,
        max: 1,
        step: 0.01,
      },
    ];
  }

  if (slug.includes("letter-glitch") || title.includes("letter glitch")) {
    return [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "LETTER GLITCH",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 22,
        min: 1,
        max: 60,
        step: 1,
      },
      {
        type: "number",
        param: "glitchChance",
        label: "Glitch Chance",
        defaultValue: 0.18,
        min: 0,
        max: 1,
        step: 0.01,
      },
    ];
  }

  if (slug.includes("grid-motion") || title.includes("grid motion")) {
    return [
      {
        type: "number",
        param: "gridSize",
        label: "Grid Size",
        defaultValue: 28,
        min: 10,
        max: 80,
        step: 1,
      },
      {
        type: "number",
        param: "amplitude",
        label: "Amplitude",
        defaultValue: 8,
        min: 0,
        max: 30,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 4,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("rainbow-button") || title.includes("rainbow button")) {
    return [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Rainbow Button",
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 2,
        min: 0.5,
        max: 8,
        step: 0.1,
      },
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 2,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "boolean",
        param: "animated",
        label: "Animated",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("gooey-text-morphing") || title.includes("gooey")) {
    return [
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 1.2,
        min: 0.4,
        max: 3,
        step: 0.1,
      },
      {
        type: "number",
        param: "pauseDuration",
        label: "Pause",
        defaultValue: 1.2,
        min: 0,
        max: 3,
        step: 0.1,
      },
    ];
  }

  if (slug.includes("highlight-text") || title.includes("highlight text")) {
    return [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Highlight me",
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "delay",
        label: "Delay",
        defaultValue: 0.1,
        min: 0,
        max: 2,
        step: 0.05,
      },
    ];
  }

  if (slug.includes("number-counter") || title.includes("number counter")) {
    return [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 1235,
        min: -5000,
        max: 5000,
        step: 1,
      },
      {
        type: "number",
        param: "precision",
        label: "Precision",
        defaultValue: 0,
        min: 0,
        max: 4,
        step: 1,
      },
      {
        type: "number",
        param: "durationMs",
        label: "Duration (ms)",
        defaultValue: 700,
        min: 150,
        max: 2000,
        step: 50,
      },
    ];
  }

  if (slug.includes("rotate-text") || title.includes("rotate text")) {
    return [
      {
        type: "number",
        param: "duration",
        label: "Anim Duration",
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "pauseDuration",
        label: "Pause",
        defaultValue: 1.2,
        min: 0,
        max: 3,
        step: 0.1,
      },
    ];
  }

  if (slug.includes("typewriter-text") || title.includes("typewriter text")) {
    return [
      {
        type: "number",
        param: "typingSpeed",
        label: "Typing (ms)",
        defaultValue: 90,
        min: 20,
        max: 250,
        step: 5,
      },
      {
        type: "number",
        param: "deletingSpeed",
        label: "Deleting (ms)",
        defaultValue: 50,
        min: 20,
        max: 250,
        step: 5,
      },
      {
        type: "number",
        param: "pauseDuration",
        label: "Pause (ms)",
        defaultValue: 1200,
        min: 0,
        max: 3000,
        step: 50,
      },
    ];
  }

  if (slug.includes("ai-prompt-box") || title.includes("ai prompt")) {
    return [
      {
        type: "text",
        param: "placeholder",
        label: "Placeholder",
        defaultValue: "Ask me anything…",
      },
      {
        type: "boolean",
        param: "isLoading",
        label: "Loading",
        defaultValue: false,
      },
    ];
  }

  if (
    slug.includes("animated-theme-toggle") ||
    title.includes("theme toggle")
  ) {
    return [];
  }

  if (slug.includes("date-wheel-picker") || title.includes("date wheel")) {
    return [
      {
        type: "select",
        param: "size",
        label: "Size",
        defaultValue: "md",
        options: ["sm", "md", "lg"],
      },
      {
        type: "boolean",
        param: "disabled",
        label: "Disabled",
        defaultValue: false,
      },
    ];
  }

  if (slug.includes("feedback-widget") || title.includes("feedback")) {
    return [
      {
        type: "text",
        param: "title",
        label: "Title",
        defaultValue: "How was this demo?",
      },
    ];
  }

  if (slug.includes("file-tree") || title.includes("file tree")) {
    return [];
  }

  if (slug.includes("animated-beam") || title.includes("animated beam")) {
    return [
      {
        type: "number",
        param: "curvature",
        label: "Curvature",
        defaultValue: 0.2,
        min: -0.8,
        max: 0.8,
        step: 0.05,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 2,
        min: 0.5,
        max: 8,
        step: 0.1,
      },
      {
        type: "boolean",
        param: "reverse",
        label: "Reverse",
        defaultValue: false,
      },
    ];
  }

  if (slug.includes("expanded-map") || title.includes("expanded map")) {
    return [
      {
        type: "select",
        param: "tileProvider",
        label: "Tiles",
        defaultValue: "carto-light",
        options: ["carto-light", "carto-dark", "openstreetmap"],
      },
    ];
  }

  if (slug.includes("github-star") || title.includes("github star")) {
    return [
      {
        type: "text",
        param: "owner",
        label: "Owner",
        defaultValue: "vercel",
      },
      {
        type: "text",
        param: "repo",
        label: "Repo",
        defaultValue: "next.js",
      },
      {
        type: "number",
        param: "stars",
        label: "Stars override (0=fetch)",
        defaultValue: 0,
        min: 0,
        max: 200000,
        step: 1000,
      },
    ];
  }

  if (slug.includes("hover-preview") || title.includes("hover preview")) {
    return [];
  }

  if (slug.includes("image-sphere") || title.includes("image sphere")) {
    return [
      {
        type: "boolean",
        param: "autoRotate",
        label: "Auto rotate",
        defaultValue: true,
      },
      {
        type: "number",
        param: "sphereRadius",
        label: "Radius",
        defaultValue: 160,
        min: 80,
        max: 240,
        step: 5,
      },
      {
        type: "number",
        param: "containerSize",
        label: "Size",
        defaultValue: 360,
        min: 260,
        max: 520,
        step: 10,
      },
    ];
  }

  if (slug === "calendar") {
    return [];
  }

  if (slug.includes("circular-gallery") || title.includes("circular gallery")) {
    return [
      {
        type: "number",
        param: "bend",
        label: "Bend",
        defaultValue: 3,
        step: 0.1,
      },
      {
        type: "color",
        param: "textColor",
        label: "Text Color",
        defaultValue: "#ffffff",
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 0.05,
        step: 0.01,
      },
    ];
  }

  if (slug === "copy-button" || title.includes("copy button")) {
    return [
      {
        type: "text",
        param: "text",
        label: "Text to copy",
        defaultValue: "npm install one-for-all",
      },
    ];
  }

  if (slug === "flip-button" || title.includes("flip button")) {
    return [
      {
        type: "text",
        param: "frontText",
        label: "Front text",
        defaultValue: "Hover me",
      },
      {
        type: "text",
        param: "backText",
        label: "Back text",
        defaultValue: "Nice",
      },
    ];
  }

  if (slug === "ripple-button" || title.includes("ripple button")) {
    return [
      {
        type: "color",
        param: "rippleColor",
        label: "Ripple color",
        defaultValue: "rgba(255,255,255,0.35)",
      },
    ];
  }

  if (slug === "progress" || title === "progress") {
    return [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 64,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "max",
        label: "Max",
        defaultValue: 100,
        min: 1,
        max: 200,
        step: 1,
      },
    ];
  }

  if (slug === "popover" || title.includes("popover")) {
    return [
      {
        type: "select",
        param: "side",
        label: "Side",
        defaultValue: "bottom",
        options: ["top", "bottom"],
      },
      {
        type: "select",
        param: "align",
        label: "Align",
        defaultValue: "center",
        options: ["start", "center", "end"],
      },
    ];
  }

  if (slug === "sheet" || title.includes("sheet")) {
    return [
      {
        type: "select",
        param: "side",
        label: "Side",
        defaultValue: "right",
        options: ["left", "right"],
      },
    ];
  }

  if (slug === "motion-carousel" || title.includes("motion carousel")) {
    return [
      {
        type: "boolean",
        param: "autoplay",
        label: "Autoplay",
        defaultValue: false,
      },
      {
        type: "number",
        param: "autoplayDelay",
        label: "Autoplay delay (ms)",
        defaultValue: 2800,
        min: 800,
        max: 8000,
        step: 100,
      },
    ];
  }

  if (slug === "radial-menu" || title.includes("radial menu")) {
    return [
      {
        type: "number",
        param: "radius",
        label: "Radius",
        defaultValue: 90,
        min: 50,
        max: 140,
        step: 5,
      },
    ];
  }

  if (slug === "hole-background" || title.includes("hole background")) {
    return [
      {
        type: "number",
        param: "holeSize",
        label: "Hole size",
        defaultValue: 220,
        min: 120,
        max: 360,
        step: 10,
      },
    ];
  }

  if (slug === "magnet" || title.includes("magnet")) {
    return [
      {
        type: "number",
        param: "strength",
        label: "Strength",
        defaultValue: 0.25,
        min: 0,
        max: 1,
        step: 0.05,
      },
      {
        type: "number",
        param: "radius",
        label: "Radius",
        defaultValue: 160,
        min: 80,
        max: 360,
        step: 10,
      },
    ];
  }

  if (slug === "crosshair" || title.includes("crosshair")) {
    return [
      {
        type: "number",
        param: "size",
        label: "Size",
        defaultValue: 22,
        min: 10,
        max: 60,
        step: 1,
      },
    ];
  }

  if (slug === "true-focus" || title.includes("true focus")) {
    return [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Focus moves across words",
      },
      {
        type: "number",
        param: "intervalMs",
        label: "Interval (ms)",
        defaultValue: 1400,
        min: 400,
        max: 4000,
        step: 100,
      },
    ];
  }

  if (slug.includes("confetti") || title.includes("confetti")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Particle Count",
        defaultValue: 25,
        min: 10,
        max: 100,
        step: 5,
      },
      {
        type: "number",
        param: "gravity",
        label: "Gravity",
        defaultValue: 0.03,
        min: 0.01,
        max: 0.1,
        step: 0.01,
      },
      {
        type: "number",
        param: "wind",
        label: "Wind",
        defaultValue: 0.005,
        min: 0,
        max: 0.05,
        step: 0.001,
      },
    ];
  }

  if (slug.includes("fireworks") || title.includes("fireworks")) {
    return [
      {
        type: "number",
        param: "autoLaunchInterval",
        label: "Launch Interval (ms)",
        defaultValue: 600,
        min: 100,
        max: 2000,
        step: 100,
      },
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 80,
        min: 20,
        max: 200,
        step: 10,
      },
    ];
  }

  if (slug.includes("meteors") || title.includes("meteors")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 20,
        min: 5,
        max: 100,
        step: 5,
      },
      {
        type: "number",
        param: "angle",
        label: "Angle",
        defaultValue: 215,
        min: 0,
        max: 360,
        step: 5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#64748b",
      },
    ];
  }

  if (slug.includes("orbits") || title.includes("orbits")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 5,
        min: 1,
        max: 10,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0.1,
        max: 3,
        step: 0.1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#06b6d4",
      },
    ];
  }

  if (slug.includes("rain") || title.includes("rain")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 150,
        min: 50,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "intensity",
        label: "Intensity",
        defaultValue: 1,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      {
        type: "boolean",
        param: "lightning",
        label: "Lightning",
        defaultValue: true,
      },
    ];
  }

  if (slug.includes("snow") || title.includes("snow")) {
    return [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 150,
        min: 50,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "intensity",
        label: "Intensity",
        defaultValue: 1,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      {
        type: "number",
        param: "wind",
        label: "Wind",
        defaultValue: 0.3,
        min: -1,
        max: 1,
        step: 0.1,
      },
    ];
  }

  if (slug.includes("vortex") || title.includes("vortex")) {
    return [
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 700,
        min: 100,
        max: 1500,
        step: 50,
      },
      {
        type: "number",
        param: "baseSpeed",
        label: "Base Speed",
        defaultValue: 0,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "rangeSpeed",
        label: "Range Speed",
        defaultValue: 1.5,
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    ];
  }

  return null;
}

export function getDemoCode(component: ComponentItem) {
  const title = component.title.toLowerCase();
  const slug = component.slug.toLowerCase();
  const url = component.url;

  if (slug.includes("split-text") || title.includes("split text"))
    return splitTextCode;
  if (slug.includes("circular-text") || title.includes("circular text"))
    return circularTextCode;
  if (slug.includes("dock") || title.includes("dock")) return dockCode;
  if (slug.includes("carousel") || title.includes("carousel"))
    return carouselCode;
  if (slug.includes("spotlight-card") || title.includes("spotlight"))
    return spotlightCardCode;
  if (slug.includes("flowing-menu") || title.includes("flowing menu"))
    return flowingMenuCode;
  if (slug.includes("elastic-slider") || title.includes("elastic slider"))
    return elasticSliderCode;
  if (slug.includes("counter") || title.includes("counter")) return counterCode;
  if (slug.includes("infinite-menu") || title.includes("infinite menu"))
    return infiniteMenuCode;
  if (slug.includes("stepper") || title.includes("stepper")) return stepperCode;
  if (slug.includes("shiny-text") || title.includes("shiny text"))
    return shinyTextCode;
  if (slug.includes("curved-marquee") || title.includes("curved marquee"))
    return curvedLoopCode;
  if (slug.includes("fuzzy-text") || title.includes("fuzzy text"))
    return fuzzyTextCode;
  if (slug.includes("gradient-text") || title.includes("gradient text"))
    return gradientTextCode;
  if (slug.includes("falling-text") || title.includes("falling text"))
    return fallingTextCode;
  if (slug.includes("text-cursor") || title.includes("text cursor"))
    return textCursorCode;
  if (
    slug.includes("decrypted-text") ||
    title.includes("decrypted text") ||
    title.includes("decrypted")
  )
    return decryptedTextCode;
  if (slug.includes("scroll-float") || title.includes("scroll float"))
    return scrollFloatCode;
  if (slug.includes("scroll-reveal") || title.includes("scroll reveal"))
    return scrollRevealCode;
  if (slug.includes("rotating-text") || title.includes("rotating text"))
    return rotatingTextCode;
  if (slug.includes("glitch-text") || title.includes("glitch text"))
    return glitchTextCode;
  if (slug.includes("scroll-velocity") || title.includes("scroll velocity"))
    return scrollVelocityCode;
  if (
    slug.includes("variable-proximity") ||
    title.includes("variable proximity")
  )
    return variableProximityCode;
  if (
    slug.includes("count-up") ||
    title.includes("count up") ||
    title.includes("counter") ||
    title.includes("number counter")
  )
    return countUpCode;

  if (slug.includes("liquid-ether") || title.includes("liquid ether"))
    return liquidEtherCode;
  if (slug.includes("prism") || title.includes("prism")) return prismCode;
  if (slug.includes("dark-veil") || title.includes("dark veil"))
    return darkVeilCode;
  if (slug.includes("light-pillar") || title.includes("light pillar"))
    return lightPillarCode;
  if (slug.includes("floating-lines") || title.includes("floating lines"))
    return floatingLinesCode;
  if (slug.includes("light-rays") || title.includes("light rays"))
    return lightRaysCode;
  if (slug.includes("color-bends") || title.includes("color bends"))
    return colorBendsCode;

  if (slug.includes("particles") || title.includes("particles"))
    return particlesCode;
  if (slug.includes("grid-scan") || title.includes("grid scan"))
    return gridScanCode;
  if (slug.includes("lightning") || title.includes("lightning"))
    return lightningCode;
  if (slug.includes("galaxy") || title.includes("galaxy")) return galaxyCode;
  if (slug.includes("dot-grid") || title.includes("dot grid"))
    return dotGridCode;
  if (slug.includes("hyperspeed") || title.includes("hyperspeed"))
    return hyperspeedCode;
  if (slug.includes("ballpit") || title.includes("ballpit")) return ballpitCode;
  if (slug.includes("orb") || title.includes("orb")) return orbCode;
  if (slug.includes("letter-glitch") || title.includes("letter glitch"))
    return letterGlitchCode;
  if (slug.includes("grid-motion") || title.includes("grid motion"))
    return gridMotionCode;

  if (slug.includes("rainbow-button") || title.includes("rainbow button"))
    return rainbowButtonCode;
  if (slug.includes("gooey-text-morphing") || title.includes("gooey"))
    return gooeyTextMorphingCode;
  if (slug.includes("highlight-text") || title.includes("highlight text"))
    return highlightTextCode;
  if (slug.includes("number-counter") || title.includes("number counter"))
    return numberCounterCode;
  if (slug.includes("rotate-text") || title.includes("rotate text"))
    return rotateTextCode;
  if (slug.includes("typewriter-text") || title.includes("typewriter text"))
    return typewriterTextJolyCode;
  if (slug.includes("ai-prompt-box") || title.includes("ai prompt"))
    return aiPromptBoxCode;
  if (slug.includes("animated-theme-toggle") || title.includes("theme toggle"))
    return animatedThemeToggleCode;
  if (slug.includes("date-wheel-picker") || title.includes("date wheel"))
    return dateWheelPickerCode;
  if (slug.includes("feedback-widget") || title.includes("feedback"))
    return feedbackWidgetCode;
  if (slug.includes("file-tree") || title.includes("file tree"))
    return fileTreeCode;
  if (slug.includes("animated-beam") || title.includes("animated beam"))
    return animatedBeamCode;
  if (slug.includes("expanded-map") || title.includes("expanded map"))
    return expandedMapCode;
  if (slug.includes("github-star") || title.includes("github star"))
    return githubStarCode;
  if (slug.includes("hover-preview") || title.includes("hover preview"))
    return hoverPreviewCode;
  if (slug.includes("image-sphere") || title.includes("image sphere"))
    return imageSphereCode;
  if (slug === "border-beam" || title.includes("border beam"))
    return borderBeamCode;
  if (slug === "shine-border" || title.includes("shine border"))
    return shineBorderCode;
  if (slug === "magic-card" || title.includes("magic card"))
    return magicCardCode;
  if (slug === "neon-gradient-card" || title.includes("neon gradient"))
    return neonGradientCardCode;
  if (slug === "circular-progress-bar" || title.includes("circular progress"))
    return circularProgressBarCode;
  if (slug === "icon-cloud" || title.includes("icon cloud"))
    return iconCloudCode;
  if (slug === "compact-confetti" || title.includes("compact confetti"))
    return compactConfettiCode;
  if (slug === "video-text" || title.includes("video text"))
    return videoTextCode;
  if (slug === "text-reveal" || title.includes("text reveal"))
    return textRevealCode;
  if (slug === "sparkles-text" || title.includes("sparkles"))
    return sparklesTextCode;
  if (slug === "code-comparison" || title.includes("code comparison"))
    return codeComparisonCode;
  if (slug === "scroll-progress" || title.includes("scroll progress"))
    return scrollProgressCode;
  if (slug === "calendar") return shadcnCalendarCode;

  if (slug === "copy-button" || title.includes("copy button"))
    return copyButtonCode;
  if (slug === "flip-button" || title.includes("flip button"))
    return flipButtonCode;
  if (slug === "ripple-button" || title.includes("ripple button"))
    return rippleButtonCode;
  if (slug === "progress" || title === "progress") return progressCode;
  if (slug === "popover" || title.includes("popover")) return popoverCode;
  if (slug === "sheet" || title.includes("sheet")) return sheetCode;
  if (slug === "flip-card" || title.includes("flip card")) return flipCardCode;
  if (slug === "motion-carousel" || title.includes("motion carousel"))
    return motionCarouselCode;
  if (slug === "radial-intro" || title.includes("radial intro"))
    return radialIntroCode;
  if (slug === "radial-menu" || title.includes("radial menu"))
    return radialMenuCode;
  if (slug === "hole-background" || title.includes("hole background"))
    return holeBackgroundCode;
  if (slug === "management-bar" || title.includes("management bar"))
    return managementBarCode;
  if (
    slug === "playful-todolist" ||
    title.includes("todolist") ||
    title.includes("todo")
  )
    return playfulTodoListCode;
  if (slug === "magnet" || title.includes("magnet")) return magnetCode;
  if (slug === "crosshair" || title.includes("crosshair")) return crosshairCode;
  if (slug === "decay-card" || title.includes("decay")) return decayCardCode;
  if (slug === "fade-content" || title.includes("fade content"))
    return fadeContentCode;
  if (slug === "pixel-card" || title.includes("pixel card"))
    return pixelCardCode;
  if (slug === "true-focus" || title.includes("true focus"))
    return trueFocusCode;

  if (slug.includes("electric-border") || title.includes("electric border"))
    return electricBorderCode;
  if (slug.includes("antigravity") || title.includes("antigravity"))
    return antigravityCode;
  if (slug.includes("logo-loop") || title.includes("logo loop"))
    return logoLoopCode;
  if (slug.includes("target-cursor") || title.includes("target cursor"))
    return targetCursorCode;
  if (slug.includes("laser-flow") || title.includes("laser flow"))
    return laserFlowCode;
  if (slug.includes("magnet-lines") || title.includes("magnet lines"))
    return magnetLinesCode;
  if (slug.includes("ghost-cursor") || title.includes("ghost cursor"))
    return ghostCursorCode;
  if (slug.includes("click-spark") || title.includes("click spark"))
    return clickSparkCode;
  if (slug.includes("sticker-peel") || title.includes("sticker peel"))
    return stickerPeelCode;

  if (slug.includes("splash-cursor") || title.includes("splash cursor"))
    return splashCursorCode;
  if (slug.includes("star-border") || title.includes("star border"))
    return starBorderCode;
  if (slug.includes("animated-list") || title.includes("animated list"))
    return animatedListCode;
  if (slug.includes("scroll-stack") || title.includes("scroll stack"))
    return scrollStackCode;
  if (slug.includes("magic-bento") || title.includes("magic bento"))
    return magicBentoCode;
  if (slug.includes("circular-gallery") || title.includes("circular gallery"))
    return circularGalleryCode;
  if (slug.includes("image-trail") || title.includes("image trail"))
    return imageTrailCode;
  if (slug.includes("stack") || title.includes("stack")) return stackCode;
  if (slug.includes("fluid-glass") || title.includes("fluid glass"))
    return fluidGlassCode;
  if (slug.includes("masonry") || title.includes("masonry")) return masonryCode;
  if (slug.includes("model-viewer") || title.includes("model viewer"))
    return modelViewerCode;

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

  if (
    component.url.toLowerCase().includes("/background") ||
    component.url.toLowerCase().includes("/backgrounds")
  ) {
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

  if (slug.includes("carousel") || title.includes("carousel")) {
    return [
      {
        prop: "items",
        type: "CarouselItem[]",
        default: "DEFAULT_ITEMS",
        description: "Items to render (title, description, id, icon)",
      },
      {
        prop: "baseWidth",
        type: "number",
        default: "300",
        description: "Overall component width (px)",
      },
      {
        prop: "autoplay",
        type: "boolean",
        default: "false",
        description: "Auto-advance slides",
      },
      {
        prop: "autoplayDelay",
        type: "number",
        default: "3000",
        description: "Autoplay delay (ms)",
      },
      {
        prop: "pauseOnHover",
        type: "boolean",
        default: "false",
        description: "Pause autoplay when hovered",
      },
      {
        prop: "loop",
        type: "boolean",
        default: "false",
        description: "Enable looping via cloned items",
      },
      {
        prop: "round",
        type: "boolean",
        default: "false",
        description: "Render the carousel as a circular layout",
      },
    ];
  }

  if (slug.includes("liquid-ether") || title.includes("liquid ether")) {
    return [
      {
        prop: "resolution",
        type: "number",
        default: "1",
        description: "Resolution scale (higher = sharper, more GPU)",
      },
      {
        prop: "mouseForce",
        type: "number",
        default: "(unused in this build)",
        description: "Pointer force (upstream fluid sim prop)",
      },
      {
        prop: "cursorSize",
        type: "number",
        default: "(unused in this build)",
        description: "Pointer radius (upstream fluid sim prop)",
      },
      {
        prop: "colors",
        type: "{ red; green; blue; whi; yel }",
        default: "(unused in this build)",
        description: "Color palette (upstream fluid sim prop)",
      },
    ];
  }

  if (slug.includes("prism") || title.includes("prism")) {
    return [
      {
        prop: "height",
        type: "number",
        default: "3.5",
        description: "Pyramid height scalar",
      },
      {
        prop: "baseWidth",
        type: "number",
        default: "5.5",
        description: "Pyramid base width scalar",
      },
      {
        prop: "animationType",
        type: "'rotate' | 'hover' | '3drotate'",
        default: "'rotate'",
        description: "Animation mode",
      },
      {
        prop: "glow",
        type: "number",
        default: "1",
        description: "Glow strength",
      },
      {
        prop: "noise",
        type: "number",
        default: "0.5",
        description: "Dither/noise amount",
      },
      {
        prop: "transparent",
        type: "boolean",
        default: "true",
        description: "Transparent canvas",
      },
      {
        prop: "scale",
        type: "number",
        default: "3.6",
        description: "Scene scale",
      },
      {
        prop: "hueShift",
        type: "number",
        default: "0",
        description: "Hue rotation (radians)",
      },
      {
        prop: "bloom",
        type: "number",
        default: "1",
        description: "Bloom multiplier",
      },
      {
        prop: "suspendWhenOffscreen",
        type: "boolean",
        default: "false",
        description: "Pause RAF when not visible",
      },
      {
        prop: "timeScale",
        type: "number",
        default: "0.5",
        description: "Time multiplier",
      },
    ];
  }

  if (slug.includes("dark-veil") || title.includes("dark veil")) {
    return [
      {
        prop: "hueShift",
        type: "number",
        default: "0",
        description: "Hue shift (degrees)",
      },
      {
        prop: "noiseIntensity",
        type: "number",
        default: "0",
        description: "Noise amount",
      },
      {
        prop: "scanlineIntensity",
        type: "number",
        default: "0",
        description: "Scanlines amount",
      },
      {
        prop: "speed",
        type: "number",
        default: "0.5",
        description: "Animation speed",
      },
      {
        prop: "scanlineFrequency",
        type: "number",
        default: "0",
        description: "Scanline frequency",
      },
      {
        prop: "warpAmount",
        type: "number",
        default: "0",
        description: "Warp amount",
      },
      {
        prop: "resolutionScale",
        type: "number",
        default: "1",
        description: "Internal render resolution scale",
      },
    ];
  }

  if (slug.includes("light-pillar") || title.includes("light pillar")) {
    return [
      {
        prop: "topColor",
        type: "string",
        default: "'#5227FF'",
        description: "Top gradient color",
      },
      {
        prop: "bottomColor",
        type: "string",
        default: "'#FF9FFC'",
        description: "Bottom gradient color",
      },
      {
        prop: "intensity",
        type: "number",
        default: "1",
        description: "Brightness multiplier",
      },
      {
        prop: "rotationSpeed",
        type: "number",
        default: "0.3",
        description: "Animation speed",
      },
      {
        prop: "interactive",
        type: "boolean",
        default: "false",
        description: "Mouse-driven rotation",
      },
      {
        prop: "quality",
        type: "'low' | 'medium' | 'high'",
        default: "'high'",
        description: "Quality tier (affects iterations & DPR)",
      },
    ];
  }

  if (slug.includes("floating-lines") || title.includes("floating lines")) {
    return [
      {
        prop: "linesGradient",
        type: "string[]",
        default: "undefined",
        description: "Optional gradient stops (hex) for lines",
      },
      {
        prop: "enabledWaves",
        type: "Array<'top' | 'middle' | 'bottom'>",
        default: "['top','middle','bottom']",
        description: "Which wave groups are enabled",
      },
      {
        prop: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed multiplier",
      },
      {
        prop: "interactive",
        type: "boolean",
        default: "true",
        description: "Bend lines near pointer",
      },
      {
        prop: "parallax",
        type: "boolean",
        default: "true",
        description: "Apply subtle parallax offset",
      },
    ];
  }

  if (slug.includes("light-rays") || title.includes("light rays")) {
    return [
      {
        prop: "raysOrigin",
        type: "RaysOrigin",
        default: "'top-center'",
        description: "Ray emitter position",
      },
      {
        prop: "raysColor",
        type: "string",
        default: "'#ffffff'",
        description: "Ray tint",
      },
      {
        prop: "raysSpeed",
        type: "number",
        default: "1",
        description: "Animation speed",
      },
      {
        prop: "lightSpread",
        type: "number",
        default: "1",
        description: "Beam spread",
      },
      {
        prop: "rayLength",
        type: "number",
        default: "2",
        description: "Beam length",
      },
      {
        prop: "followMouse",
        type: "boolean",
        default: "true",
        description: "Blend ray direction toward mouse",
      },
      {
        prop: "mouseInfluence",
        type: "number",
        default: "0.1",
        description: "How much rays follow the mouse",
      },
    ];
  }

  if (slug.includes("color-bends") || title.includes("color bends")) {
    return [
      {
        prop: "rotation",
        type: "number",
        default: "45",
        description: "Rotation angle (degrees)",
      },
      {
        prop: "speed",
        type: "number",
        default: "0.2",
        description: "Animation speed",
      },
      {
        prop: "colors",
        type: "string[]",
        default: "[]",
        description: "Optional palette (hex)",
      },
      {
        prop: "transparent",
        type: "boolean",
        default: "true",
        description: "Transparent background",
      },
      {
        prop: "warpStrength",
        type: "number",
        default: "1",
        description: "Warp amount",
      },
      {
        prop: "noise",
        type: "number",
        default: "0.1",
        description: "Noise amount",
      },
    ];
  }

  if (slug.includes("spotlight-card") || title.includes("spotlight")) {
    return [
      {
        prop: "children",
        type: "React.ReactNode",
        default: "required",
        description: "Card contents",
      },
      {
        prop: "className",
        type: "string",
        default: "''",
        description: "Additional class names",
      },
      {
        prop: "spotlightColor",
        type: "string",
        default: "rgba(255,255,255,0.25)",
        description: "Spotlight color for the radial gradient",
      },
    ];
  }

  if (slug.includes("flowing-menu") || title.includes("flowing menu")) {
    return [
      {
        prop: "items",
        type: "{ link: string; text: string; image: string }[]",
        default: "[]",
        description: "Menu items",
      },
      {
        prop: "speed",
        type: "number",
        default: "15",
        description: "Marquee speed (lower is faster travel distance per time)",
      },
      {
        prop: "textColor",
        type: "string",
        default: "#fff",
        description: "Base text color",
      },
      {
        prop: "bgColor",
        type: "string",
        default: "#060010",
        description: "Background color",
      },
      {
        prop: "marqueeBgColor",
        type: "string",
        default: "#fff",
        description: "Marquee background color",
      },
      {
        prop: "marqueeTextColor",
        type: "string",
        default: "#060010",
        description: "Marquee text color",
      },
      {
        prop: "borderColor",
        type: "string",
        default: "#fff",
        description: "Divider border color",
      },
    ];
  }

  if (slug.includes("elastic-slider") || title.includes("elastic slider")) {
    return [
      {
        prop: "defaultValue",
        type: "number",
        default: "50",
        description: "Initial value",
      },
      {
        prop: "startingValue",
        type: "number",
        default: "0",
        description: "Minimum value",
      },
      {
        prop: "maxValue",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "isStepped",
        type: "boolean",
        default: "false",
        description: "Enable discrete steps",
      },
      {
        prop: "stepSize",
        type: "number",
        default: "1",
        description: "Step size when stepped",
      },
      {
        prop: "leftIcon",
        type: "React.ReactNode",
        default: "<RiVolumeDownFill />",
        description: "Left icon",
      },
      {
        prop: "rightIcon",
        type: "React.ReactNode",
        default: "<RiVolumeUpFill />",
        description: "Right icon",
      },
    ];
  }

  if (slug.includes("counter") || title.includes("counter")) {
    return [
      {
        prop: "value",
        type: "number",
        default: "required",
        description: "Numeric value to display",
      },
      {
        prop: "fontSize",
        type: "number",
        default: "100",
        description: "Digit font size (px)",
      },
      {
        prop: "padding",
        type: "number",
        default: "0",
        description: "Extra height padding (px)",
      },
      {
        prop: "places",
        type: "(number | '.')[]",
        default: "auto",
        description: "Place values to show (auto-detected by default)",
      },
      {
        prop: "gap",
        type: "number",
        default: "8",
        description: "Gap between digits (px)",
      },
    ];
  }

  if (slug.includes("infinite-menu") || title.includes("infinite menu")) {
    return [
      {
        prop: "items",
        type: "any[]",
        default: "[]",
        description:
          "Placeholder items (full upstream implementation not embedded)",
      },
      {
        prop: "scale",
        type: "number",
        default: "1.0",
        description: "Placeholder scale",
      },
    ];
  }

  if (slug.includes("stepper") || title.includes("stepper")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "required",
        description: "Steps (use <Step> child helper)",
      },
      {
        prop: "initialStep",
        type: "number",
        default: "1",
        description: "Initial step index (1-based)",
      },
      {
        prop: "onStepChange",
        type: "(step: number) => void",
        default: "() => {}",
        description: "Called when step changes",
      },
      {
        prop: "onFinalStepCompleted",
        type: "() => void",
        default: "() => {}",
        description: "Called when completed",
      },
      {
        prop: "disableStepIndicators",
        type: "boolean",
        default: "false",
        description: "Disable clicking the step indicators",
      },
      {
        prop: "renderStepIndicator",
        type: "(props) => ReactNode",
        default: "undefined",
        description: "Custom indicator renderer",
      },
    ];
  }

  if (slug.includes("dock") || title.includes("dock")) {
    return [
      {
        prop: "items",
        type: "DockItemData[]",
        default: "required",
        description:
          "Items to display (icon, label, onClick, optional className)",
      },
      {
        prop: "className",
        type: "string",
        default: "''",
        description: "Additional class for the dock panel",
      },
      {
        prop: "distance",
        type: "number",
        default: "200",
        description: "Mouse influence distance (px) for magnification",
      },
      {
        prop: "panelHeight",
        type: "number",
        default: "68",
        description: "Collapsed panel height (px)",
      },
      {
        prop: "baseItemSize",
        type: "number",
        default: "50",
        description: "Base icon size (px)",
      },
      {
        prop: "dockHeight",
        type: "number",
        default: "256",
        description: "Minimum expanded dock height (px)",
      },
      {
        prop: "magnification",
        type: "number",
        default: "70",
        description: "Max item size (px) at the cursor",
      },
      {
        prop: "spring",
        type: "SpringOptions",
        default: "{ mass: 0.1, stiffness: 150, damping: 12 }",
        description: "Motion spring options for the magnification animation",
      },
    ];
  }

  if (slug.includes("splash-cursor") || title.includes("splash cursor")) {
    return [
      {
        prop: "SIM_RESOLUTION",
        type: "number",
        default: "128",
        description: "Simulation resolution",
      },
      {
        prop: "DYE_RESOLUTION",
        type: "number",
        default: "1024",
        description: "Dye resolution",
      },
      {
        prop: "DENSITY_DISSIPATION",
        type: "number",
        default: "1",
        description: "Density dissipation rate",
      },
      {
        prop: "VELOCITY_DISSIPATION",
        type: "number",
        default: "0.2",
        description: "Velocity dissipation rate",
      },
      {
        prop: "PRESSURE",
        type: "number",
        default: "0.8",
        description: "Pressure",
      },
      {
        prop: "CURL",
        type: "number",
        default: "30",
        description: "Curl amount",
      },
      {
        prop: "SPLAT_RADIUS",
        type: "number",
        default: "0.25",
        description: "Splat radius",
      },
      {
        prop: "SPLAT_FORCE",
        type: "number",
        default: "6000",
        description: "Splat force",
      },
      {
        prop: "SHADING",
        type: "boolean",
        default: "true",
        description: "Enable shading",
      },
    ];
  }

  if (slug.includes("star-border") || title.includes("star border")) {
    return [
      {
        prop: "as",
        type: "React.ElementType",
        default: '"button"',
        description: "The element to render as.",
      },
      {
        prop: "color",
        type: "string",
        default: '"white"',
        description: "Border gradient color.",
      },
      {
        prop: "speed",
        type: "string",
        default: '"6s"',
        description: "Animation speed.",
      },
      {
        prop: "thickness",
        type: "number",
        default: "1",
        description: "Padding/Thickness of the border.",
      },
    ];
  }

  if (slug.includes("animated-list") || title.includes("animated list")) {
    return [
      {
        prop: "items",
        type: "string[]",
        default: "[]",
        description: "List of items to display.",
      },
      {
        prop: "onItemSelect",
        type: "(item, index) => void",
        default: "undefined",
        description: "Callback when item is selected.",
      },
      {
        prop: "showGradients",
        type: "boolean",
        default: "true",
        description: "Show top/bottom gradients.",
      },
      {
        prop: "enableArrowNavigation",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation.",
      },
      {
        prop: "displayScrollbar",
        type: "boolean",
        default: "true",
        description: "Show scrollbar.",
      },
    ];
  }

  if (slug.includes("scroll-stack") || title.includes("scroll stack")) {
    return [
      {
        prop: "itemDistance",
        type: "number",
        default: "100",
        description: "Distance between items.",
      },
      {
        prop: "itemScale",
        type: "number",
        default: "0.03",
        description: "Scale difference between items.",
      },
      {
        prop: "itemStackDistance",
        type: "number",
        default: "30",
        description: "Stack distance.",
      },
      {
        prop: "stackPosition",
        type: "string",
        default: '"20%"',
        description: "Stack position.",
      },
      {
        prop: "scaleEndPosition",
        type: "string",
        default: '"10%"',
        description: "Scale end position.",
      },
      {
        prop: "baseScale",
        type: "number",
        default: "0.85",
        description: "Base scale.",
      },
      {
        prop: "scaleDuration",
        type: "number",
        default: "0.5",
        description: "Scale duration.",
      },
      {
        prop: "rotationAmount",
        type: "number",
        default: "0",
        description: "Rotation amount.",
      },
      {
        prop: "blurAmount",
        type: "number",
        default: "0",
        description: "Blur amount.",
      },
    ];
  }

  if (slug.includes("magic-bento") || title.includes("magic bento")) {
    return [
      {
        prop: "textAutoHide",
        type: "boolean",
        default: "true",
        description: "Auto hide text.",
      },
      {
        prop: "enableStars",
        type: "boolean",
        default: "true",
        description: "Enable star particles.",
      },
      {
        prop: "enableSpotlight",
        type: "boolean",
        default: "true",
        description: "Enable spotlight.",
      },
      {
        prop: "enableBorderGlow",
        type: "boolean",
        default: "true",
        description: "Enable border glow.",
      },
      {
        prop: "disableAnimations",
        type: "boolean",
        default: "false",
        description: "Disable animations.",
      },
      {
        prop: "spotlightRadius",
        type: "number",
        default: "300",
        description: "Spotlight radius.",
      },
      {
        prop: "particleCount",
        type: "number",
        default: "12",
        description: "Particle count.",
      },
      {
        prop: "enableTilt",
        type: "boolean",
        default: "true",
        description: "Enable tilt effect.",
      },
      {
        prop: "glowColor",
        type: "string",
        default: '"132, 0, 255"',
        description: "Glow color.",
      },
    ];
  }

  if (slug.includes("circular-gallery") || title.includes("circular gallery")) {
    return [
      {
        prop: "items",
        type: "{ image: string; text: string }[]",
        default: "[]",
        description: "Gallery items.",
      },
      {
        prop: "bend",
        type: "number",
        default: "3",
        description: "Bend amount.",
      },
      {
        prop: "textColor",
        type: "string",
        default: '"#ffffff"',
        description: "Text color.",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "0.05",
        description: "Border radius.",
      },
      {
        prop: "font",
        type: "string",
        default: '"bold 30px Figtree"',
        description: "Font string.",
      },
      {
        prop: "scrollSpeed",
        type: "number",
        default: "2",
        description: "Scroll speed.",
      },
      {
        prop: "scrollEase",
        type: "number",
        default: "0.05",
        description: "Scroll easing.",
      },
    ];
  }

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
        description:
          "Optional additional CSS classes to apply to the component.",
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
        description:
          "If true, the animation reverses direction instead of looping.",
      },
      {
        prop: "pauseOnHover",
        type: "boolean",
        default: "false",
        description: "Pauses the animation when the user hovers over the text.",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the shine effect.",
      },
    ];
  }

  if (slug.includes("electric-border") || title.includes("electric border")) {
    return [
      {
        prop: "color",
        type: "string",
        default: '"#5227FF"',
        description: "Stroke/glow color (hex, rgb, hsl).",
      },
      {
        prop: "speed",
        type: "number",
        default: "1",
        description: "Animation speed multiplier (higher = faster).",
      },
      {
        prop: "chaos",
        type: "number",
        default: "0.12",
        description: "Distortion intensity (higher = more chaotic).",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "24",
        description: "Border radius in pixels.",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "null",
        description: "Content rendered inside the border.",
      },
    ];
  }

  if (slug.includes("antigravity") || title.includes("antigravity")) {
    return [
      {
        prop: "count",
        type: "number",
        default: "300",
        description: "Number of particles in the field.",
      },
      {
        prop: "color",
        type: "string",
        default: '"#FF9FFC"',
        description: "Color of the particles.",
      },
      {
        prop: "magnetRadius",
        type: "number",
        default: "10",
        description: "Radius of the magnetic attraction zone.",
      },
      {
        prop: "ringRadius",
        type: "number",
        default: "10",
        description: "Radius of the particle ring around the mouse.",
      },
      {
        prop: "particleSize",
        type: "number",
        default: "2",
        description: "Base size of the particles.",
      },
      {
        prop: "autoAnimate",
        type: "boolean",
        default: "false",
        description: "Whether the center point moves automatically.",
      },
    ];
  }

  if (slug.includes("logo-loop") || title.includes("logo loop")) {
    return [
      {
        prop: "logos",
        type: "LogoItem[]",
        default: "[]",
        description: "Array of logo items (node or src).",
      },
      {
        prop: "speed",
        type: "number",
        default: "120",
        description: "Animation speed in pixels/second.",
      },
      {
        prop: "direction",
        type: "'left' | 'right' | 'up' | 'down'",
        default: "'left'",
        description: "Loop direction.",
      },
      {
        prop: "logoHeight",
        type: "number",
        default: "28",
        description: "Height of logos in pixels.",
      },
      {
        prop: "gap",
        type: "number",
        default: "32",
        description: "Gap between logos in pixels.",
      },
      {
        prop: "hoverSpeed",
        type: "number",
        default: "0",
        description: "Speed on hover (0 to pause).",
      },
      {
        prop: "fadeOut",
        type: "boolean",
        default: "false",
        description: "Apply edge fade effect.",
      },
    ];
  }

  if (slug.includes("target-cursor") || title.includes("target cursor")) {
    return [
      {
        prop: "targetSelector",
        type: "string",
        default: '".cursor-target"',
        description: "CSS selector for elements to target.",
      },
      {
        prop: "spinDuration",
        type: "number",
        default: "2",
        description: "Duration of the spin animation in seconds.",
      },
      {
        prop: "hideDefaultCursor",
        type: "boolean",
        default: "true",
        description: "Whether to hide the browser cursor.",
      },
      {
        prop: "hoverDuration",
        type: "number",
        default: "0.2",
        description: "Duration of the snap animation in seconds.",
      },
      {
        prop: "parallaxOn",
        type: "boolean",
        default: "true",
        description: "Enable parallax effect on corners.",
      },
    ];
  }

  if (slug.includes("laser-flow") || title.includes("laser flow")) {
    return [
      {
        prop: "color",
        type: "string",
        default: '"#FF79C6"',
        description: "Hex color of the laser beam.",
      },
      {
        prop: "wispDensity",
        type: "number",
        default: "1",
        description: "Density of the animated wisps.",
      },
      {
        prop: "fogIntensity",
        type: "number",
        default: "0.45",
        description: "Strength of the volumetric fog.",
      },
      {
        prop: "horizontalSizing",
        type: "number",
        default: "0.5",
        description: "Horizontal footprint scale.",
      },
      {
        prop: "verticalSizing",
        type: "number",
        default: "2.0",
        description: "Vertical footprint scale.",
      },
      {
        prop: "wispSpeed",
        type: "number",
        default: "15.0",
        description: "Speed of the animated wisps.",
      },
    ];
  }

  if (slug.includes("magnet-lines") || title.includes("magnet lines")) {
    return [
      {
        prop: "rows",
        type: "number",
        default: "9",
        description: "Number of grid rows.",
      },
      {
        prop: "columns",
        type: "number",
        default: "9",
        description: "Number of grid columns.",
      },
      {
        prop: "containerSize",
        type: "string",
        default: '"80vmin"',
        description: "Width and height of the entire grid container.",
      },
      {
        prop: "lineColor",
        type: "string",
        default: '"#efefef"',
        description: "Color for each line.",
      },
      {
        prop: "lineWidth",
        type: "string",
        default: '"1vmin"',
        description: "Thickness of each line.",
      },
      {
        prop: "lineHeight",
        type: "string",
        default: '"6vmin"',
        description: "Length of each line.",
      },
      {
        prop: "baseAngle",
        type: "number",
        default: "-10",
        description: "Initial rotation angle (in degrees).",
      },
    ];
  }

  if (slug.includes("ghost-cursor") || title.includes("ghost cursor")) {
    return [
      {
        prop: "trailLength",
        type: "number",
        default: "50",
        description: "Number of points stored for the cursor trail.",
      },
      {
        prop: "inertia",
        type: "number",
        default: "0.5",
        description: "Velocity retention when the pointer stops.",
      },
      {
        prop: "grainIntensity",
        type: "number",
        default: "0.05",
        description: "Strength of the film grain post-processing pass.",
      },
      {
        prop: "bloomStrength",
        type: "number",
        default: "0.1",
        description: "UnrealBloom effect strength.",
      },
      {
        prop: "bloomRadius",
        type: "number",
        default: "1.0",
        description: "UnrealBloom radius controlling spread of glow.",
      },
      {
        prop: "color",
        type: "string",
        default: '"#B19EEF"',
        description: "Base color of the ghost cursor effect.",
      },
      {
        prop: "brightness",
        type: "number",
        default: "1",
        description: "Final brightness multiplier.",
      },
    ];
  }

  if (slug.includes("click-spark") || title.includes("click spark")) {
    return [
      {
        prop: "sparkColor",
        type: "string",
        default: '"#fff"',
        description: "Color of each spark line.",
      },
      {
        prop: "sparkSize",
        type: "number",
        default: "10",
        description: "Size (length) of each spark line.",
      },
      {
        prop: "sparkRadius",
        type: "number",
        default: "15",
        description: "Radius of the spark explosion.",
      },
      {
        prop: "sparkCount",
        type: "number",
        default: "8",
        description: "Number of spark lines.",
      },
      {
        prop: "duration",
        type: "number",
        default: "400",
        description: "Duration of the spark animation (ms).",
      },
    ];
  }

  if (slug.includes("split-text") || title.includes("split text")) {
    return [
      {
        prop: "tag",
        type: "string",
        default: '"p"',
        description:
          'HTML tag to render: "h1", "h2", "h3", "h4", "h5", "h6", "p"',
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
        description:
          'Split type: "chars", "words", "lines", or "words, chars".',
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
        description:
          "The sentence or phrase; each word becomes a physics body.",
      },
      {
        prop: "highlightWords",
        type: "string[]",
        default: "[]",
        description:
          "Words that start with these strings get the highlight class.",
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
        description:
          "If true, each text rotates to follow the mouse direction.",
      },
      {
        prop: "randomFloat",
        type: "boolean",
        default: "true",
        description:
          "If true, enables random floating offsets in position and rotation for a dynamic effect.",
      },
      {
        prop: "exitDuration",
        type: "number",
        default: "0.5",
        description:
          "The duration in seconds for the exit animation of each trail item.",
      },
      {
        prop: "removalInterval",
        type: "number",
        default: "30",
        description:
          "The interval in milliseconds between removing trail items when the mouse stops moving.",
      },
      {
        prop: "maxPoints",
        type: "number",
        default: "5",
        description: "The maximum number of trail points to display.",
      },
    ];
  }

  if (
    slug.includes("decrypted-text") ||
    title.includes("decrypted text") ||
    title.includes("decrypted")
  ) {
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
        description:
          "Number of times each character scrambles before revealing the correct one.",
      },
      {
        prop: "sequential",
        type: "boolean",
        default: "false",
        description:
          "If true, characters reveal one after another instead of all at once.",
      },
      {
        prop: "revealDirection",
        type: "'start' | 'end' | 'center'",
        default: '"start"',
        description:
          "The direction in which characters are revealed when sequential is true.",
      },
      {
        prop: "useOriginalCharsOnly",
        type: "boolean",
        default: "false",
        description:
          "If true, only characters present in the text prop will be used for scrambling.",
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
        description:
          "Triggers the animation either on mouse hover or when the component enters the viewport.",
      },
    ];
  }

  if (slug.includes("scroll-float") || title.includes("scroll float")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "null",
        description:
          "The content to animate. Strings are split into characters.",
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

  if (slug.includes("sticker-peel") || title.includes("sticker peel")) {
    return [
      {
        prop: "imageSrc",
        type: "string",
        default: '""',
        description: "The source URL for the sticker image.",
      },
      {
        prop: "width",
        type: "number",
        default: "200",
        description: "Width of the sticker in pixels.",
      },
      {
        prop: "rotate",
        type: "number",
        default: "30",
        description: "Initial rotation angle in degrees.",
      },
      {
        prop: "peelBackHoverPct",
        type: "number",
        default: "30",
        description: "Percentage of peel effect on hover.",
      },
      {
        prop: "peelBackActivePct",
        type: "number",
        default: "40",
        description: "Percentage of peel effect when active/clicked.",
      },
      {
        prop: "peelDirection",
        type: "number",
        default: "0",
        description: "Direction of the peel effect in degrees.",
      },
      {
        prop: "shadowIntensity",
        type: "number",
        default: "0.6",
        description: "Intensity of the shadow effect (0-1).",
      },
      {
        prop: "lightingIntensity",
        type: "number",
        default: "0.1",
        description: "Intensity of the lighting effect (0-1).",
      },
    ];
  }

  if (slug.includes("lanyard") || title.includes("lanyard")) {
    return [
      {
        prop: "position",
        type: "[number, number, number]",
        default: "[0, 0, 30]",
        description: "Camera position.",
      },
      {
        prop: "gravity",
        type: "[number, number, number]",
        default: "[0, -40, 0]",
        description: "Physics gravity vector.",
      },
      {
        prop: "fov",
        type: "number",
        default: "20",
        description: "Field of view.",
      },
      {
        prop: "bandColor",
        type: "string",
        default: '"white"',
        description: "Color of the lanyard band.",
      },
      {
        prop: "cardColor",
        type: "string",
        default: '"white"',
        description: "Color of the card fallback.",
      },
      {
        prop: "cardGLB",
        type: "string",
        default: '""',
        description: "URL to custom GLB model for the card.",
      },
      {
        prop: "cardTexture",
        type: "string",
        default: '""',
        description: "URL to texture for the card.",
      },
      {
        prop: "maxSpeed",
        type: "number",
        default: "50",
        description: "Max simulation speed.",
      },
      {
        prop: "minSpeed",
        type: "number",
        default: "0",
        description: "Min simulation speed.",
      },
      {
        prop: "transparent",
        type: "boolean",
        default: "true",
        description: "Whether the canvas background is transparent.",
      },
    ];
  }

  if (slug.includes("rainbow-button") || title.includes("rainbow button")) {
    return [
      {
        prop: "colors",
        type: "string[]",
        default: "(preset)",
        description: "Conic-gradient color stops",
      },
      {
        prop: "duration",
        type: "number",
        default: "2",
        description: "Rotation duration (seconds)",
      },
      {
        prop: "borderWidth",
        type: "number",
        default: "2",
        description: "Border thickness (px)",
      },
      {
        prop: "animated",
        type: "boolean",
        default: "true",
        description: "Enable gradient rotation",
      },
      {
        prop: "...buttonProps",
        type: "ButtonHTMLAttributes",
        default: "",
        description: "Standard button props",
      },
    ];
  }

  if (slug.includes("gooey-text-morphing") || title.includes("gooey")) {
    return [
      {
        prop: "texts",
        type: "string[]",
        default: "[]",
        description: "Text items to morph between",
      },
      {
        prop: "duration",
        type: "number",
        default: "1.5",
        description: "Animation duration (seconds)",
      },
      {
        prop: "pauseDuration",
        type: "number",
        default: "2",
        description: "Pause between words (seconds)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("highlight-text") || title.includes("highlight text")) {
    return [
      {
        prop: "children",
        type: "string",
        default: "",
        description: "Text content",
      },
      {
        prop: "duration",
        type: "number",
        default: "0.5",
        description: "Highlight expand duration",
      },
      {
        prop: "delay",
        type: "number",
        default: "0.2",
        description: "Delay before highlight animates",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
      {
        prop: "highlightClassName",
        type: "string",
        default: "",
        description: "Highlight span className",
      },
    ];
  }

  if (slug.includes("number-counter") || title.includes("number counter")) {
    return [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Target number",
      },
      {
        prop: "precision",
        type: "number",
        default: "0",
        description: "Digits after decimal",
      },
      {
        prop: "durationMs",
        type: "number",
        default: "700",
        description: "Animation duration (ms)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Text className",
      },
    ];
  }

  if (slug.includes("rotate-text") || title.includes("rotate text")) {
    return [
      {
        prop: "words",
        type: "string[]",
        default: "[]",
        description: "Words to rotate",
      },
      {
        prop: "duration",
        type: "number",
        default: "0.5",
        description: "Transition duration (seconds)",
      },
      {
        prop: "pauseDuration",
        type: "number",
        default: "2",
        description: "Pause between words (seconds)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("typewriter-text") || title.includes("typewriter text")) {
    return [
      {
        prop: "words",
        type: "string[]",
        default: "[]",
        description: "Words to type/delete",
      },
      {
        prop: "typingSpeed",
        type: "number",
        default: "100",
        description: "Typing speed (ms/char)",
      },
      {
        prop: "deletingSpeed",
        type: "number",
        default: "50",
        description: "Deleting speed (ms/char)",
      },
      {
        prop: "pauseDuration",
        type: "number",
        default: "1500",
        description: "Pause when word completes (ms)",
      },
      {
        prop: "cursorClassName",
        type: "string",
        default: "",
        description: "Cursor className",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("ai-prompt-box") || title.includes("ai prompt")) {
    return [
      {
        prop: "placeholder",
        type: "string",
        default: "Ask something…",
        description: "Textarea placeholder",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable input",
      },
      {
        prop: "isLoading",
        type: "boolean",
        default: "false",
        description: "Show loading state",
      },
      {
        prop: "onSubmit",
        type: "(value: string) => void",
        default: "",
        description: "Called when submitting",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (
    slug.includes("animated-theme-toggle") ||
    title.includes("theme toggle")
  ) {
    return [
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Button className",
      },
    ];
  }

  if (slug.includes("date-wheel-picker") || title.includes("date wheel")) {
    return [
      {
        prop: "value",
        type: "Date",
        default: "new Date()",
        description: "Current value",
      },
      {
        prop: "onChange",
        type: "(date: Date) => void",
        default: "",
        description: "Called when date changes",
      },
      {
        prop: "minYear",
        type: "number",
        default: "1970",
        description: "Minimum year",
      },
      {
        prop: "maxYear",
        type: "number",
        default: "(current+10)",
        description: "Maximum year",
      },
      {
        prop: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "md",
        description: "Control size",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable all selects",
      },
      {
        prop: "locale",
        type: "string",
        default: "",
        description: "Intl locale for month names",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("feedback-widget") || title.includes("feedback")) {
    return [
      {
        prop: "title",
        type: "string",
        default: "How was this demo?",
        description: "Widget title",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("file-tree") || title.includes("file tree")) {
    return [
      {
        prop: "tree",
        type: "FileTreeNode[]",
        default: "[]",
        description: "Tree data",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug.includes("animated-beam") || title.includes("animated beam")) {
    return [
      {
        prop: "containerRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "Common parent container",
      },
      {
        prop: "fromRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "Start node ref",
      },
      {
        prop: "toRef",
        type: "RefObject<HTMLElement>",
        default: "",
        description: "End node ref",
      },
      {
        prop: "curvature",
        type: "number",
        default: "0",
        description: "Path curvature",
      },
      {
        prop: "duration",
        type: "number",
        default: "2",
        description: "Dash animation duration (seconds)",
      },
      {
        prop: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse dash direction",
      },
    ];
  }

  if (slug.includes("expanded-map") || title.includes("expanded map")) {
    return [
      {
        prop: "location",
        type: "string",
        default: "San Francisco, CA",
        description: "Label shown in the card",
      },
      {
        prop: "latitude",
        type: "number",
        default: "37.7749",
        description: "Latitude",
      },
      {
        prop: "longitude",
        type: "number",
        default: "-122.4194",
        description: "Longitude",
      },
      {
        prop: "zoom",
        type: "number",
        default: "14",
        description: "Tile zoom level",
      },
      {
        prop: "tileProvider",
        type: "'openstreetmap' | 'carto-light' | 'carto-dark'",
        default: "carto-light",
        description: "Map tile provider",
      },
    ];
  }

  if (slug.includes("github-star") || title.includes("github star")) {
    return [
      {
        prop: "owner",
        type: "string",
        default: "",
        description: "GitHub repo owner",
      },
      {
        prop: "repo",
        type: "string",
        default: "",
        description: "GitHub repo name",
      },
      {
        prop: "stars",
        type: "number",
        default: "(fetch if undefined)",
        description: "Override stars count",
      },
    ];
  }

  if (slug.includes("hover-preview") || title.includes("hover preview")) {
    return [
      {
        prop: "data",
        type: "Record<string, PreviewData>",
        default: "{}",
        description: "Preview content per key",
      },
      {
        prop: "cursorOffset",
        type: "number",
        default: "18",
        description: "Distance from cursor",
      },
      {
        prop: "preloadImages",
        type: "boolean",
        default: "true",
        description: "Preload preview images",
      },
    ];
  }

  if (slug.includes("image-sphere") || title.includes("image sphere")) {
    return [
      {
        prop: "images",
        type: "{id,src,alt}[]",
        default: "[]",
        description: "Images on the sphere",
      },
      {
        prop: "containerSize",
        type: "number",
        default: "360",
        description: "Container size (px)",
      },
      {
        prop: "sphereRadius",
        type: "number",
        default: "160",
        description: "TranslateZ radius (px)",
      },
      {
        prop: "autoRotate",
        type: "boolean",
        default: "true",
        description: "Auto rotate",
      },
      {
        prop: "autoRotateSpeed",
        type: "number",
        default: "0.25",
        description: "Degrees per frame",
      },
    ];
  }

  if (slug === "border-beam" || title.includes("border beam")) {
    return [
      {
        prop: "size",
        type: "number",
        default: "50",
        description: "Beam square size (px)",
      },
      {
        prop: "duration",
        type: "number",
        default: "6",
        description: "Animation duration (seconds)",
      },
      {
        prop: "delay",
        type: "number",
        default: "0",
        description: "Phase offset (seconds)",
      },
      {
        prop: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse animation direction",
      },
      {
        prop: "initialOffset",
        type: "number",
        default: "0",
        description: "Initial offsetDistance (%)",
      },
      {
        prop: "borderWidth",
        type: "number",
        default: "1",
        description: "Overlay border width (px)",
      },
      {
        prop: "colorFrom",
        type: "string",
        default: "#ffaa40",
        description: "Gradient start color",
      },
      {
        prop: "colorTo",
        type: "string",
        default: "#9c40ff",
        description: "Gradient end color",
      },
      {
        prop: "transition",
        type: "Transition",
        default: "{ repeat: Infinity, ease: 'linear' }",
        description: "Motion transition override",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Additional classes for the beam",
      },
    ];
  }

  if (slug === "shine-border" || title.includes("shine border")) {
    return [
      {
        prop: "borderWidth",
        type: "number",
        default: "1",
        description: "Border thickness (px)",
      },
      {
        prop: "duration",
        type: "number",
        default: "14",
        description: "Animation duration (seconds)",
      },
      {
        prop: "shineColor",
        type: "string | string[]",
        default: "#000000",
        description: "Shine color(s) used in the radial gradient",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Additional classes for the overlay",
      },
    ];
  }

  if (slug === "magic-card" || title.includes("magic card")) {
    return [
      {
        prop: "gradientSize",
        type: "number",
        default: "200",
        description: "Radial gradient size (px)",
      },
      {
        prop: "gradientOpacity",
        type: "number",
        default: "0.8",
        description: "Overlay opacity",
      },
      {
        prop: "gradientFrom",
        type: "string",
        default: "#9E7AFF",
        description: "Gradient start color",
      },
      {
        prop: "gradientTo",
        type: "string",
        default: "#FE8BBB",
        description: "Gradient end color",
      },
      {
        prop: "gradientColor",
        type: "string",
        default: "#262626",
        description: "Dark inner gradient color",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Card content",
      },
    ];
  }

  if (slug === "neon-gradient-card" || title.includes("neon gradient")) {
    return [
      {
        prop: "borderSize",
        type: "number",
        default: "2",
        description: "Border size (px)",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "20",
        description: "Border radius (px)",
      },
      {
        prop: "neonColors",
        type: "{ firstColor: string; secondColor: string }",
        default: "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }",
        description: "Neon gradient colors",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Card content",
      },
    ];
  }

  if (slug === "circular-progress-bar" || title.includes("circular progress")) {
    return [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Current value",
      },
      {
        prop: "min",
        type: "number",
        default: "0",
        description: "Minimum value",
      },
      {
        prop: "max",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "gaugePrimaryColor",
        type: "string",
        default: "",
        description: "Progress stroke color",
      },
      {
        prop: "gaugeSecondaryColor",
        type: "string",
        default: "",
        description: "Remaining stroke color",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "icon-cloud" || title.includes("icon cloud")) {
    return [
      {
        prop: "images",
        type: "string[]",
        default: "[]",
        description: "Image URLs used as icons",
      },
      {
        prop: "icons",
        type: "ReactNode[]",
        default: "[]",
        description: "Optional icon nodes (placeholder-rendered in this port)",
      },
      {
        prop: "size",
        type: "number",
        default: "400",
        description: "Canvas size (px)",
      },
    ];
  }

  if (slug === "compact-confetti" || title.includes("compact confetti")) {
    return [
      {
        prop: "options",
        type: "ConfettiOptions",
        default: "{}",
        description: "Default fire options",
      },
      {
        prop: "globalOptions",
        type: "ConfettiGlobalOptions",
        default: "{ resize: true, useWorker: true }",
        description: "Canvas confetti global options",
      },
      {
        prop: "manualStart",
        type: "boolean",
        default: "false",
        description: "If false, fires once on mount",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Canvas className",
      },
    ];
  }

  if (slug === "video-text" || title.includes("video text")) {
    return [
      {
        prop: "src",
        type: "string",
        default: "",
        description: "Video source URL",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Text rendered as the mask",
      },
      {
        prop: "fontSize",
        type: "string | number",
        default: "20",
        description: "Mask text size (vw when number)",
      },
      {
        prop: "fontWeight",
        type: "string | number",
        default: "bold",
        description: "Mask font weight",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "text-reveal" || title.includes("text reveal")) {
    return [
      {
        prop: "children",
        type: "string",
        default: "",
        description: "Text content to reveal on scroll",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "sparkles-text" || title.includes("sparkles")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Text content",
      },
      {
        prop: "sparklesCount",
        type: "number",
        default: "10",
        description: "Number of sparkles",
      },
      {
        prop: "colors",
        type: "{ first: string; second: string }",
        default: "{ first: '#9E7AFF', second: '#FE8BBB' }",
        description: "Sparkle colors",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "code-comparison" || title.includes("code comparison")) {
    return [
      {
        prop: "beforeCode",
        type: "string",
        default: "",
        description: "Before code contents",
      },
      {
        prop: "afterCode",
        type: "string",
        default: "",
        description: "After code contents",
      },
      {
        prop: "filename",
        type: "string",
        default: "example.ts",
        description: "Filename label",
      },
      {
        prop: "highlightColor",
        type: "string",
        default: "#ff3333",
        description: "Highlight color for changes",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "scroll-progress" || title.includes("scroll progress")) {
    return [
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Additional classes for the bar",
      },
    ];
  }

  if (slug === "calendar") {
    return [
      {
        prop: "value",
        type: "Date",
        default: "new Date()",
        description: "Selected date",
      },
      {
        prop: "onChange",
        type: "(value: Date) => void",
        default: "",
        description: "Called on selection",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];
  }

  if (slug === "copy-button" || title.includes("copy button")) {
    return [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text written to clipboard on click",
      },
      {
        prop: "label",
        type: "string",
        default: "Copy",
        description: "Button label",
      },
      {
        prop: "copiedLabel",
        type: "string",
        default: "Copied",
        description: "Label shown briefly after copying",
      },
      {
        prop: "onCopiedChange",
        type: "(copied: boolean) => void",
        default: "",
        description: "Fires when copy status changes",
      },
    ];
  }

  if (slug === "flip-button" || title.includes("flip button")) {
    return [
      {
        prop: "frontText",
        type: "string",
        default: "",
        description: "Text shown normally",
      },
      {
        prop: "backText",
        type: "string",
        default: "frontText",
        description: "Text shown on hover flip",
      },
    ];
  }

  if (slug === "ripple-button" || title.includes("ripple button")) {
    return [
      {
        prop: "rippleColor",
        type: "string",
        default: "rgba(255,255,255,0.35)",
        description: "Ripple overlay color",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Button contents",
      },
    ];
  }

  if (slug === "progress" || title === "progress") {
    return [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Current value",
      },
      {
        prop: "max",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "popover" || title.includes("popover")) {
    return [
      {
        prop: "trigger",
        type: "ReactNode",
        default: "",
        description: "Trigger element",
      },
      {
        prop: "content",
        type: "ReactNode",
        default: "",
        description: "Popover content",
      },
      {
        prop: "open",
        type: "boolean",
        default: "(uncontrolled)",
        description: "Controlled open state",
      },
      {
        prop: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Uncontrolled initial state",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        default: "",
        description: "Open state change callback",
      },
      {
        prop: "side",
        type: "'top' | 'bottom'",
        default: "bottom",
        description: "Panel side",
      },
      {
        prop: "align",
        type: "'start' | 'center' | 'end'",
        default: "center",
        description: "Panel alignment",
      },
    ];
  }

  if (slug === "sheet" || title.includes("sheet")) {
    return [
      {
        prop: "open",
        type: "boolean",
        default: "false",
        description: "Whether the sheet is open",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        default: "",
        description: "Called when open state changes",
      },
      {
        prop: "side",
        type: "'left' | 'right'",
        default: "right",
        description: "Slide-in side",
      },
      {
        prop: "title",
        type: "string",
        default: "Sheet",
        description: "Header title",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Sheet content",
      },
    ];
  }

  if (slug === "flip-card" || title.includes("flip card")) {
    return [
      {
        prop: "front",
        type: "ReactNode",
        default: "",
        description: "Front side content",
      },
      {
        prop: "back",
        type: "ReactNode",
        default: "",
        description: "Back side content",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "motion-carousel" || title.includes("motion carousel")) {
    return [
      {
        prop: "items",
        type: "{ id: string; title: string; description?: string; image?: string }[]",
        default: "[]",
        description: "Carousel slides",
      },
      {
        prop: "autoplay",
        type: "boolean",
        default: "false",
        description: "Auto-advance slides",
      },
      {
        prop: "autoplayDelay",
        type: "number",
        default: "2800",
        description: "Autoplay delay (ms)",
      },
    ];
  }

  if (slug === "radial-intro" || title.includes("radial intro")) {
    return [
      {
        prop: "title",
        type: "string",
        default: "",
        description: "Heading",
      },
      {
        prop: "subtitle",
        type: "string",
        default: "",
        description: "Optional subheading",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "radial-menu" || title.includes("radial menu")) {
    return [
      {
        prop: "items",
        type: "{ label: string; onSelect?: () => void }[]",
        default: "[]",
        description: "Menu items",
      },
      {
        prop: "radius",
        type: "number",
        default: "90",
        description: "Distance from center (px)",
      },
    ];
  }

  if (slug === "hole-background" || title.includes("hole background")) {
    return [
      {
        prop: "holeSize",
        type: "number",
        default: "220",
        description: "Hole radius (px)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "management-bar" || title.includes("management bar")) {
    return [
      {
        prop: "title",
        type: "string",
        default: "Management",
        description: "Header label",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (
    slug === "playful-todolist" ||
    title.includes("todolist") ||
    title.includes("todo")
  ) {
    return [
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "magnet" || title.includes("magnet")) {
    return [
      {
        prop: "strength",
        type: "number",
        default: "0.25",
        description: "How much the element moves",
      },
      {
        prop: "radius",
        type: "number",
        default: "160",
        description: "Effect radius (px)",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Wrapped content",
      },
    ];
  }

  if (slug === "crosshair" || title.includes("crosshair")) {
    return [
      {
        prop: "size",
        type: "number",
        default: "22",
        description: "Crosshair arm size (px)",
      },
      {
        prop: "color",
        type: "string",
        default: "rgba(255,255,255,0.7)",
        description: "Line color",
      },
    ];
  }

  if (slug === "decay-card" || title.includes("decay")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Card content",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "fade-content" || title.includes("fade content")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Content to fade in",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "pixel-card" || title.includes("pixel card")) {
    return [
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Card content",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  if (slug === "true-focus" || title.includes("true focus")) {
    return [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text split into words",
      },
      {
        prop: "intervalMs",
        type: "number",
        default: "1400",
        description: "Advance interval (ms)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];
  }

  return null;
}
