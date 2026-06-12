"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type TargetType = "image" | "link" | null;

export default function CustomCursor() {
  const [isReady, setIsReady] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isTouchDevice = useRef(false);
  const isActive = useRef(false);
  const currentLabel = useRef("");

  useEffect(() => {
    // Wait for full page load
    const handleLoad = () => {
      // Check for touch device only after load
      isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;
      if (isTouchDevice.current) {
        setIsReady(false);
        return;
      }

      setIsReady(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const textEl = textRef.current;
    if (!dot || !ring || !textEl) return;

    // Initial state
    gsap.set([dot, ring], { opacity: 0, scale: 0, x: -100, y: -100 });

    let mouseX = -100;
    let mouseY = -100;

    const updateCursorPosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to([dot, ring], {
        x: mouseX,
        y: mouseY,
        duration: isActive.current ? 0.12 : 0,
        ease: "power3.out",
      });
    };

    const getTargetType = (target: HTMLElement): TargetType => {
      if (target.closest("img") && !target.closest(".logo")) return "image";
      if (target.closest(".contact-link")) return "link";
      return null;
    };

    const updateLabel = (label: string) => {
      if (currentLabel.current === label) return;
      currentLabel.current = label;

      gsap.to(textEl, {
        opacity: 0,
        scale: 0.7,
        duration: 0.1,
        onComplete: () => {
          textEl.textContent = label;
          gsap.to(textEl, { opacity: 1, scale: 1, duration: 0.15 });
        },
      });
    };

    const showCursor = (type: TargetType) => {
      if (!type) return;

      isActive.current = true;
      document.body.style.cursor = "none";
      updateLabel(type === "image" ? "VIEW" : "CLICK");

      gsap.to([dot, ring], {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "back.out(1.7)",
      });
    };

    const hideCursor = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement | null;

      const fromType = getTargetType(target);
      const toType = relatedTarget ? getTargetType(relatedTarget) : null;

      if (fromType && !toType) {
        isActive.current = false;
        currentLabel.current = "";
        document.body.style.cursor = "auto";

        gsap.to([dot, ring], {
          opacity: 0,
          scale: 0,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("pointerover", (e) => showCursor(getTargetType(e.target as HTMLElement)));
    document.addEventListener("pointerout", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("pointerover", (e) => showCursor(getTargetType(e.target as HTMLElement)));
      document.removeEventListener("pointerout", hideCursor);
      document.body.style.cursor = "auto";
    };
  }, [isReady]);

  // Don't render anything until page is fully loaded and not a touch device
  if (!isReady) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot">
        <div ref={textRef} className="cursor-text">VIEW</div>
      </div>
      <div ref={ringRef} className="cursor-ring" />

      <style jsx>{`
        .cursor-dot,
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          will-change: transform;
        }

        .cursor-dot {
          width: 64px;
          height: 64px;
          background: #14b8a6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.35);
        }

        .cursor-text {
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cursor-ring {
          width: 80px;
          height: 80px;
          border: 2px solid #14b8a6;
          border-radius: 50%;
          background: transparent;
        }

        @media (max-width: 768px) {
          .cursor-dot,
          .cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
}