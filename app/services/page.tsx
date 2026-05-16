"use client"



import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Page() {
  const boxRef = useRef<HTMLDivElement | null>(null);




useEffect(() => {
  if (!boxRef.current) return;

  const box = boxRef.current;

  let lastX = 0;

  const onMove = (e: MouseEvent) => {
    const deltaX = e.clientX - lastX;
    lastX = e.clientX;

    // ignore tiny noise
    if (Math.abs(deltaX) < 2) return;

    gsap.to(box, {
      x: deltaX > 0 ? 40 : -40,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(box, {
      x: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const boxEl = box;

  boxEl.addEventListener("mousemove", onMove);
  boxEl.addEventListener("mouseleave", onLeave);

  return () => {
    boxEl.removeEventListener("mousemove", onMove);
    boxEl.removeEventListener("mouseleave", onLeave);
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

        

        <div className="relative z-10 lg:p-40 px-4 py-10 flex">
          <div className="space-y-3 2xl:space-y-6 2xl:w-1/2 w-full bg-teal-900 text-white p-12" ref={boxRef}>
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

      <main className="">
       

        <ServiceSection />

      </main>
      <ContactSection />
    </>
  );
}
