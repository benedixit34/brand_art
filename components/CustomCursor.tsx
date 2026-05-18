"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type MousePos = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef<MousePos>({ x: 0, y: 0 });
  const active = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const textEl = textRef.current;

    if (!dot || !ring || !textEl) return;

    gsap.set([dot, ring], { opacity: 0, scale: 0 });

    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", onMove);

    const getTargetType = (target: HTMLElement) => {
      const img = target.closest("img");

      if (img && !img.classList.contains("logo")) {
        return "image";
      }

      const link = target.closest(".contact-link");
      if (link) return "link";

      return null;
    };

    // ENTER
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const type = getTargetType(target);

      if (!type) return;

      active.current = true;
      document.body.style.cursor = "none";

      const label = type === "image" ? "VIEW" : "CLICK";

      gsap.to(textEl, {
        opacity: 0,
        scale: 0.7,
        duration: 0,
        onComplete: () => {
          textEl.textContent = label;

          gsap.to(textEl, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
          });
        },
      });

      gsap.to([dot, ring], {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
    };

   
    const onOut = (e: Event) => {
     
      active.current = false;
      document.body.style.cursor = "auto";

      gsap.to([dot, ring], {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);


    const ticker = () => {
      if (!active.current) return;

      gsap.to([dot, ring], {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.12,
        ease: "power3.out",
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      {/* CURSOR DOT */}
      <div ref={dotRef} className="cursor-dot">
        <div ref={textRef} className="cursor-text">
          VIEW
        </div>
      </div>

      {/* OUTER RING */}
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
        }

        .cursor-dot {
          width: 64px;
          height: 64px;
          border-radius: 9999px;
          background: #14b8a6;

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
          border-radius: 9999px;
          background: transparent;
        }
      `}</style>
    </>
  );
}
