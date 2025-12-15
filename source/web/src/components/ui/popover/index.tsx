"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./popover.module.css";

export type PopoverPosition = "top" | "bottom" | "left" | "right";

export type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  position?: PopoverPosition;
  sideOffset?: number;
  className?: string;
  contentClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function Popover({
  trigger,
  children,
  position = "bottom",
  sideOffset = 8,
  className,
  contentClassName,
  open: controlledOpen,
  onOpenChange,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newState = !isOpen;
    if (!isControlled) {
      setInternalOpen(newState);
    }
    onOpenChange?.(newState);
  };

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose, isOpen]);

  return (
    <div className={`${styles.popover} ${className || ""}`} ref={popoverRef}>
      <div className={styles.trigger} onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`${styles.content} ${styles[position]} ${contentClassName || ""}`}
          ref={contentRef}
          style={{
            marginLeft: -sideOffset,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
