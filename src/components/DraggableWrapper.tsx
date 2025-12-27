import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  RefCallback,
} from "react";
import { FaTerminal, FaX } from "react-icons/fa6";

/// throttle.ts
export const throttle = <T extends unknown[]>(f: (...args: T) => void) => {
  let token: number | null = null;
  let lastArgs: T | [] = [];
  const invoke = () => {
    f(...(lastArgs as T));
    token = null;
  };
  const result = (...args: T) => {
    lastArgs = args;
    if (!token) {
      token = requestAnimationFrame(invoke);
    }
  };
  result.cancel = () => {
    if (token) {
      cancelAnimationFrame(token);
      token = null;
    }
  };
  return result;
};

type Position = { x: number; y: number };
type OnDragHandler = (pos: Position) => Position;

const id: OnDragHandler = (x) => x; // identity function

const useDraggable = ({
  onDrag = id,
  dragHandleRef,
}: {
  onDrag?: OnDragHandler;
  dragHandleRef?: React.RefObject<HTMLElement | null>;
} = {}): [RefCallback<HTMLDivElement>, boolean] => {
  const [pressed, setPressed] = useState(false);

  const position = useRef<Position>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const unsubscribe = useRef<() => void>(null);

  const legacyRef = useCallback((elem: HTMLDivElement | null) => {
    ref.current = elem;
  }, []);

  // Attach mousedown listener to drag handle or parent
  useEffect(() => {
    // Clean up previous listener
    if (unsubscribe.current) {
      unsubscribe.current();
      unsubscribe.current = null;
    }

    const handleElement = dragHandleRef?.current || ref.current;
    if (!handleElement) return;

    const handleMouseDown = (e: MouseEvent) => {
      // Only handle if clicking on the handle element or its children
      if (dragHandleRef?.current) {
        const target = e.target as HTMLElement | null;
        if (!target || !dragHandleRef.current.contains(target)) {
          return; // Ignore clicks outside the drag handle
        }
      }

      // Safely cast e.target to HTMLElement before setting style
      const target = e.target as HTMLElement | null;
      if (target && target.style) {
        target.style.userSelect = "none";
      }
      setPressed(true);
    };

    handleElement.addEventListener("mousedown", handleMouseDown);
    unsubscribe.current = () => {
      handleElement.removeEventListener("mousedown", handleMouseDown);
    };

    return () => {
      if (unsubscribe.current) {
        unsubscribe.current();
        unsubscribe.current = null;
      }
    };
  }, [dragHandleRef]);

  useEffect(() => {
    if (!pressed) return;

    const handleMouseMove = throttle((event: MouseEvent) => {
      if (!ref.current || !position.current) return;
      const elem = ref.current as HTMLDivElement;
      // Calculate new position using `onDrag`
      const newPos = onDrag({
        x: position.current.x + event.movementX,
        y: position.current.y + event.movementY,
      });
      position.current = newPos;
      elem.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;
    });

    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.style) {
        target.style.userSelect = "auto";
      }
      setPressed(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      handleMouseMove.cancel();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, onDrag]);

  return [legacyRef, pressed];
};

export default function DraggableWrapper({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const dragHandleRef = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback(
    ({ x, y }: { x: number; y: number }) => ({
      x: x, // Allow movement in all directions
      y: y,
    }),
    []
  );

  const [ref] = useDraggable({
    onDrag: handleDrag,
    dragHandleRef: dragHandleRef,
  });

  if (disabled) {
    return (
      <div ref={ref} className={`w-fit ${className || ""} pixel-corners`}>
        <div className="w-auto h-8 flex items-center gap-2 bg-white/90 text-tertiary px-4 cursor-grab">
          <FaTerminal />
          <span className="text-sm font-medium">terminal</span>
        </div>
        <div className="w-auto min-h-[200px] bg-white/90 p-1">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`w-fit ${
        className || ""
      } pixel-corners !shadow-lg shadow-tertiary/70`}
    >
      <div
        ref={dragHandleRef}
        className="w-240 h-8 flex items-center gap-2 bg-white/90 text-tertiary px-4 cursor-grab justify-between"
      >
        <div className="flex items-center gap-2">
          <FaTerminal />
          <span>Record</span>
        </div>
        <FaX className="text-red-500 ml-2" />
      </div>
      <div className="w-auto min-h-[200px] bg-white/90 p-1">{children}</div>
    </div>
  );
}
