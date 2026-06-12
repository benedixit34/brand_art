"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Scattered = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    const text = container.current.querySelector(".target-text") as HTMLElement;
    const split = new SplitText(text, { type: "words" });

    const stayElements = gsap.utils.toArray<HTMLElement>(".stay");
    const movingWords = split.words.filter(
      (word) => !stayElements.some((stay) => stay.contains(word))
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(movingWords, {
      x: () => gsap.utils.random([-120, 120]) + "vw",
      y: () => gsap.utils.random([-120, 120]) + "vh",
      opacity: 0,
      rotation: () => gsap.utils.random(-180, 180),
      stagger: 0.03,
      ease: "power4.in",
    });

    tl.from(movingWords, {
      x: () => gsap.utils.random([-120, 120]) + "vw",
      y: () => gsap.utils.random([-120, 120]) + "vh",
      opacity: 0,
      rotation: () => gsap.utils.random(-180, 180),
      stagger: 0.03,
      ease: "power4.out",
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <>
    <div
      ref={container}
      className="h-screen hidden lg:flex items-center justify-center relative"
    >
      <h1 className="target-text 2xl:text-[60px]/22 text-[45px]/18 lg:text-center text-left tracking-tighter font-bold max-w-4/5">
        <span className="text-teal-900 font-bold">
          <span className="stay inline-block">Brand Art</span> & Communications
        </span>{" "}
        specializes in <span className="stay inline-block">cultural</span>{" "}
        craftsmanship and emotion-driven{" "}
        <span className="stay inline-block">design</span>, offering a unique
        blend of <span className="stay inline-block">creative</span> services
        tailored to elevate brands through authentic and engaging{" "}
        <span className="stay inline-block">experiences.</span>
      </h1>
    </div>

    <div
      className="h-full lg:hidden flex items-center justify-center relative py-20 px-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-left tracking-tighter font-bold 2xl:max-w-4/5">
        <span className="text-teal-900 font-bold">
         Brand Art & Communications
        </span> specializes in cultural
        craftsmanship and emotion-driven
       design, offering a unique
        blend of creative services
        tailored to elevate brands through authentic and engaging
       experiences.
      </h1>
    </div>
    </>
  );
};