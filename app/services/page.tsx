"use client"

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Page() {
 


  return (
    <>
      <section className="relative 2xl:h-[70vh] h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/creative-concept.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 lg:py-40 lg:mx-20 px-4 py-10 grid grid-cols-2 gap-40">
          <div className="space-y-3 2xl:space-y-6 w-full bg-teal-900 text-white p-12 rounded-sm">
            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold tracking-tighter font-bold">
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
          <div></div>
        </div>
      </section>

      <main>
        <ServiceSection />
      </main>
      <ContactSection />
    </>
  );
}