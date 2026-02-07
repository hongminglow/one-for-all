"use client";

import * as React from "react";
import confetti, {
  type GlobalOptions as ConfettiGlobalOptions,
  type CreateTypes as ConfettiInstance,
  type Options as ConfettiOptions,
} from "canvas-confetti";

import { Button } from "@/components/ui/button";

export type ConfettiApi = {
  fire: (options?: ConfettiOptions) => void;
};

export type ConfettiRef = ConfettiApi | null;

export type CompactConfettiProps = React.ComponentPropsWithRef<"canvas"> & {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualStart?: boolean;
  manualstart?: boolean;
  children?: React.ReactNode;
};

const CompactConfetti = React.forwardRef<ConfettiRef, CompactConfettiProps>(
  (props, ref) => {
    const {
      options,
      globalOptions = { resize: true, useWorker: true },
      manualStart,
      manualstart,
      children,
      ...rest
    } = props;

    const instanceRef = React.useRef<ConfettiInstance | null>(null);

    const canvasRef = React.useCallback(
      (node: HTMLCanvasElement | null) => {
        if (node) {
          if (instanceRef.current) return;
          instanceRef.current = confetti.create(node, {
            ...globalOptions,
            resize: true,
          });
        } else {
          instanceRef.current?.reset();
          instanceRef.current = null;
        }
      },
      [globalOptions],
    );

    const fire = React.useCallback(
      async (opts: ConfettiOptions = {}) => {
        try {
          await instanceRef.current?.({ ...options, ...opts });
        } catch (error) {
          console.error("Confetti error:", error);
        }
      },
      [options],
    );

    const api = React.useMemo(() => ({ fire }), [fire]);

    React.useImperativeHandle(ref, () => api, [api]);

    React.useEffect(() => {
      const shouldManualStart = manualStart ?? manualstart ?? false;
      if (shouldManualStart) return;
      void fire();
    }, [fire, manualStart, manualstart]);

    return (
      <>
        <canvas ref={canvasRef} {...rest} />
        {children}
      </>
    );
  },
);

CompactConfetti.displayName = "CompactConfetti";

export default CompactConfetti;

export interface ConfettiButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  "onClick"
> {
  options?: ConfettiOptions & ConfettiGlobalOptions;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ConfettiButton({
  options,
  children,
  onClick,
  ...props
}: ConfettiButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    onClick?.(event);
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
