"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface PreviewData {
  image: string;
  title: string;
  subtitle?: string;
}

export interface HoverPreviewLinkProps {
  previewKey: string;
  children: React.ReactNode;
  className?: string;
}

export interface HoverPreviewCardProps {
  width?: number;
  borderRadius?: number;
  className?: string;
}

export interface HoverPreviewProviderProps {
  data: Record<string, PreviewData>;
  children: React.ReactNode;
  cardProps?: HoverPreviewCardProps;
  cursorOffset?: number;
  preloadImages?: boolean;
  className?: string;
}

type Ctx = {
  data: Record<string, PreviewData>;
  active: PreviewData | null;
  pos: { x: number; y: number };
  visible: boolean;
  cardProps: HoverPreviewCardProps;
  hoverStart: (key: string, e: React.MouseEvent) => void;
  hoverMove: (e: React.MouseEvent) => void;
  hoverEnd: () => void;
};

const HoverPreviewContext = React.createContext<Ctx | null>(null);

function useHoverPreview() {
  const ctx = React.useContext(HoverPreviewContext);
  if (!ctx)
    throw new Error(
      "HoverPreviewLink must be used within HoverPreviewProvider",
    );
  return ctx;
}

export function HoverPreviewProvider({
  data,
  children,
  cardProps = {},
  cursorOffset = 18,
  preloadImages = true,
  className,
}: HoverPreviewProviderProps) {
  const [active, setActive] = React.useState<PreviewData | null>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);

  const width = cardProps.width ?? 320;
  const height = 250;

  React.useEffect(() => {
    if (!preloadImages) return;
    Object.values(data).forEach((item) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = item.image;
    });
  }, [data, preloadImages]);

  const update = React.useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      let x = e.clientX - width / 2;
      let y = e.clientY - height - cursorOffset;

      if (x + width > window.innerWidth - 20)
        x = window.innerWidth - width - 20;
      if (x < 20) x = 20;
      if (y < 20) y = e.clientY + cursorOffset;

      setPos({ x, y });
    },
    [width, cursorOffset],
  );

  const hoverStart = React.useCallback(
    (key: string, e: React.MouseEvent) => {
      const item = data[key];
      if (!item) return;
      setActive(item);
      setVisible(true);
      update(e);
    },
    [data, update],
  );

  const hoverMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (!visible) return;
      update(e);
    },
    [visible, update],
  );

  const hoverEnd = React.useCallback(() => setVisible(false), []);

  const ctx: Ctx = {
    data,
    active,
    pos,
    visible,
    cardProps: { width, ...cardProps },
    hoverStart,
    hoverMove,
    hoverEnd,
  };

  return (
    <HoverPreviewContext.Provider value={ctx}>
      <div className={cn("relative", className)}>
        {children}
        <HoverPreviewCard />
      </div>
    </HoverPreviewContext.Provider>
  );
}

export function HoverPreviewLink({
  previewKey,
  children,
  className,
}: HoverPreviewLinkProps) {
  const { hoverStart, hoverMove, hoverEnd } = useHoverPreview();

  return (
    <span
      role="button"
      tabIndex={0}
      className={cn(
        "relative inline-block cursor-pointer font-black text-[var(--sb-text-strong)]",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--sb-accent)] after:transition-all after:duration-300",
        "hover:after:w-full",
        className,
      )}
      onMouseEnter={(e) => hoverStart(previewKey, e)}
      onMouseMove={hoverMove}
      onMouseLeave={hoverEnd}
      onFocus={(e) => hoverStart(previewKey, e as unknown as React.MouseEvent)}
      onBlur={hoverEnd}
    >
      {children}
    </span>
  );
}

function HoverPreviewCard() {
  const { active, pos, visible, cardProps } = useHoverPreview();
  if (!active) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-50 transition-all duration-150",
        visible ? "scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0",
      )}
      style={{ left: pos.x, top: pos.y, width: cardProps.width }}
    >
      <div
        className={cn(
          "overflow-hidden border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-2 shadow-2xl",
          cardProps.className,
        )}
        style={{ borderRadius: cardProps.borderRadius ?? 16 }}
      >
        <img
          src={active.image}
          alt={active.title}
          className="aspect-video w-full rounded-xl object-cover"
          crossOrigin="anonymous"
        />
        <div className="px-2 pb-1 pt-3">
          <div className="text-[12px] font-black text-[var(--sb-text-strong)]">
            {active.title}
          </div>
          {active.subtitle ? (
            <div className="mt-1 text-[11px] font-semibold text-[var(--sb-text-muted)]">
              {active.subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { HoverPreviewContext };
