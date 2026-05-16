"use client"

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Page() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!boxRef.current) return;

  const box = boxRef.current;
  const PADDING = 50;

  const xTo = gsap.quickTo(box, "x", {
    duration: 0.4,
    ease: "power3.out",
  });

  const onMove = (e: MouseEvent) => {
    const boxRect = box.getBoundingClientRect();
    const parent = box.parentElement!;
    const parentRect = parent.getBoundingClientRect();

    // box's natural left offset from parent
    const boxOriginLeft = boxRect.left - parentRect.left - parseFloat(gsap.getProperty(box, "x") as string);

    const minX = PADDING - boxOriginLeft;
    const maxX = parentRect.width - boxOriginLeft - box.offsetWidth - PADDING;

    const rawX = e.clientX - parentRect.left - boxOriginLeft - box.offsetWidth / 2;
    const clampedX = Math.min(Math.max(rawX, minX), maxX);

    xTo(clampedX);
  };

  window.addEventListener("mousemove", onMove);

  return () => {
    window.removeEventListener("mousemove", onMove);
  };
}, []);

  return (
    <>
      <section className="relative 2xl:h-screen h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/creative-concept.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 lg:py-40 lg:mx-20 px-4 py-10 flex">
          <div ref={boxRef} className="space-y-3 2xl:space-y-6 2xl:w-1/2 w-full bg-teal-900 text-white p-12">
            <h1 className="2xl:text-8xl/25 xl:text-6xl/20 text-4xl/12 tracking-tighter font-bold">
              Branding At <span className="text-yellow-400">Brand Art</span>
            </h1>
            <p className="font-light text-md/10 xl:text-xl/12">
              This is the origin story. The core. The blueprint. The starting
              point of everything we do. We define your why, shape your voice,
              craft your look, and help you show up with clarity, character,
              and conviction. Because in a world full of noise, your brand
              should sound like a truth.
            </p>
          </div>
        </div>
      </section>

      <main>
        <ServiceSection />
      </main>
      <ContactSection />
    </>
  );
}