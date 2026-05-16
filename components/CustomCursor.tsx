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

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;

    if (!dot || !ring || !text) return;

    const mouse: MousePos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const ticker = () => {
      gsap.to([dot, ring], {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(text, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    gsap.ticker.add(ticker);

    const hoverTargets = document.querySelectorAll("a, button");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ring, {
          width: 90,
          height: 90,
          backgroundColor: "#14b8a6",
          borderColor: "#14b8a6",
          scale: 1.2,
          duration: 0.25,
        });

        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
        });

        gsap.to(text, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(ring, {
          width: 80,
          height: 80,
          backgroundColor: "transparent",
          borderColor: "#14b8a6",
          scale: 1,
          duration: 0.25,
        });

        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
        });

        gsap.to(text, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
   
      <div ref={dotRef} className="cursor-dot">
        <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
      </div>

   
      <div ref={ringRef} className="cursor-ring" />

     
      <div ref={textRef} className="cursor-text">
        CLICK
      </div>

      <style jsx>{`
        .cursor-dot,
        .cursor-ring,
        .cursor-text {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }

        .cursor-ring {
          width: 80px;
          height: 80px;
          border: 2px solid #14b8a6;
          border-radius: 9999px;
          background: transparent;
        }

        .cursor-text {
          color: #000;
          font-size: 17px;
          font-weight: 600;
          opacity: 0;
          scale: 0.8;
          z-index: 10000;
        }

        :global(body) {
          cursor: none;
        }
      `}</style>
    </>
  );
}