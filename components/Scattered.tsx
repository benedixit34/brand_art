"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Scattered = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const text = container.current.querySelector(
        ".target-text"
      ) as HTMLElement;

      const split = new SplitText(text, { type: "words" });

      const stayElements = gsap.utils.toArray<HTMLElement>(".stay");

      const words = split.words.filter(
        (word) => !stayElements.some((stay) => stay.contains(word))
      );

      // 🔥 SAFE RANGE (prevents overflow)
      const getSafeX = () => gsap.utils.random([-120, 120]);
      const getSafeY = () => gsap.utils.random([-80, 80]);

      // 🔥 INITIAL STATE: scattered but STILL inside screen bounds
      gsap.set(words, {
        opacity: 0,
        xPercent: 0,
        yPercent: 0,
        x: () => `${getSafeX()}%`,
        y: () => `${getSafeY()}%`,
        rotation: () => gsap.utils.random(-90, 90),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=60%",
          scrub: 0.2,
          pin: true,
        },
      });

      // 🔥 ARRIVAL: words come into place
      tl.to(words, {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.02,
        ease: "power3.out",
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <>
      <div
        ref={container}
        className="h-screen hidden lg:flex items-center justify-center relative overflow-hidden"
      >
        <h1 className="target-text 2xl:text-[60px]/22 text-[45px]/18 lg:text-center text-left tracking-tighter font-bold max-w-4/5">
          <span className="text-yellow-400 font-bold">
            <span className="stay inline-block">Brand Art</span> & Communications
          </span>{" "}
          specializes in <span className="stay inline-block">cultural</span>{" "}
          craftsmanship and emotion-driven design, offering a unique blend of{" "}
          <span className="stay inline-block">creative</span> services tailored
          to elevate brands through authentic and engaging{" "}
          <span className="stay inline-block">experiences.</span>
        </h1>
      </div>

      <div className="h-full lg:hidden flex items-center justify-center relative py-20 px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-left tracking-tighter font-bold">
          <span className="text-teal-900 font-bold">
            Brand Art & Communications
          </span>{" "}
          specializes in cultural craftsmanship and emotion-driven design,
          offering a unique blend of creative services tailored to elevate
          brands through authentic and engaging experiences.
        </h1>
      </div>
    </>
  );
};