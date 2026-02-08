"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface PreviewData {
  image: string;
  title: string;
  subtitle?: string;
}

interface HoverPreviewContextValue {
  activePreview: PreviewData | null;
  position: { x: number; y: number };
  isVisible: boolean;
  cardProps: { width?: number; borderRadius?: number };
  handleHoverStart: (key: string, e: React.MouseEvent) => void;
  handleHoverMove: (e: React.MouseEvent) => void;
  handleHoverEnd: () => void;
}

const HoverPreviewContext =
  React.createContext<HoverPreviewContextValue | null>(null);

export function HoverPreviewProvider({
  data,
  children,
  cardProps = {},
  cursorOffset = 20,
}: {
  data: Record<string, PreviewData>;
  children: React.ReactNode;
  cardProps?: { width?: number; borderRadius?: number };
  cursorOffset?: number;
}) {
  const [activePreview, setActivePreview] = React.useState<PreviewData | null>(
    null,
  );
  const [isVisible, setIsVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const cardWidth = cardProps.width ?? 280;

  const updatePosition = React.useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX - cardWidth / 2);
      mouseY.set(e.clientY - 200 - cursorOffset);
    },
    [cardWidth, cursorOffset, mouseX, mouseY],
  );

  const handleHoverStart = (key: string, e: React.MouseEvent) => {
    if (data[key]) {
      setActivePreview(data[key]);
      setIsVisible(true);
      updatePosition(e);
    }
  };

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const unsubscribeX = springX.on("change", (x) =>
      setPosition((prev) => ({ ...prev, x })),
    );
    const unsubscribeY = springY.on("change", (y) =>
      setPosition((prev) => ({ ...prev, y })),
    );
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY]);

  return (
    <HoverPreviewContext.Provider
      value={{
        activePreview,
        position,
        isVisible,
        cardProps,
        handleHoverStart,
        handleHoverMove: updatePosition,
        handleHoverEnd: () => setIsVisible(false),
      }}
    >
      <div className="relative">
        {children}
        <HoverPreviewCard />
      </div>
    </HoverPreviewContext.Provider>
  );
}

function HoverPreviewCard() {
  const context = React.useContext(HoverPreviewContext);
  if (!context || !context.activePreview) return null;

  const { activePreview, position, isVisible, cardProps } = context;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            width: cardProps.width ?? 280,
            pointerEvents: "none",
            zIndex: 50,
          }}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={activePreview.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2">
              <div className="text-sm font-bold text-foreground">
                {activePreview.title}
              </div>
              {activePreview.subtitle && (
                <div className="text-xs text-muted-foreground mt-0.5">
                  {activePreview.subtitle}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function HoverPreviewLink({
  previewKey,
  children,
  className,
}: {
  previewKey: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(HoverPreviewContext);
  if (!context) return <>{children}</>;

  return (
    <span
      onMouseEnter={(e) => context.handleHoverStart(previewKey, e)}
      onMouseMove={context.handleHoverMove}
      onMouseLeave={context.handleHoverEnd}
      className={cn(
        "cursor-pointer font-bold underline decoration-primary/40 decoration-2 underline-offset-4 hover:decoration-primary transition-all",
        className,
      )}
    >
      {children}
    </span>
  );
}
