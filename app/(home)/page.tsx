"use client";

import { ContactSection } from "@/components/ContactSection";
import HeroVideo from "@/components/HeroPlayer";
import { Scattered } from "@/components/Scattered";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitTextAnimation } from "@/hooks/useSplitTextAnimation";
import { useGroupScrollAnimation } from "@/hooks/useGroupScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    num: "01 / 03",
    title: "Lagos Arts",
    color: "bg-rose-500",
    img: "https://i.imgur.com/mbDeYut.jpeg",
    alt: "Lagos Arts case study",
  },
  {
    num: "02 / 03",
    title: "Original Coffee",
    color: "bg-amber-900",
    img: "https://i.imgur.com/AwIR43N.jpeg",
    alt: "Original Coffee case study",
  },
  {
    num: "03 / 03",
    title: "Streetsouk",
    color: "bg-yellow-600",
    img: "https://i.imgur.com/DpSrMd0.jpeg",
    alt: "Streetsouk case study",
  },
];

export default function Page() {
  const welcomeTextRef = useRef<HTMLParagraphElement | null>(null);
  const welcomeContainer = useRef(null);
  const mainRef = useRef(null);

  useSplitTextAnimation(mainRef, [
    { selector: ".animated-text", trigger: welcomeContainer },
  ]);

  const { setRef: setSectionRef } = useGroupScrollAnimation();

  return (
    <>
      <HeroVideo />
      <Scattered />

      <main className="bg-white overflow-hidden" ref={mainRef}>
        {/* Case Studies Section */}
        <section className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 p-4 sm:p-6 md:p-8 lg:p-10">
{cases.map(({ num, title, color, img, alt }, i) => (
  <div
    key={i}
    ref={setSectionRef(i)}
    className="relative group cursor-pointer"
  >
    {/* Color Panel — stacks on mobile, overlays on md+ */}
    <div
      className={`
        ${color}
        relative md:absolute md:top-0 md:left-0 md:bottom-0
        md:w-1/2 lg:w-2/5 xl:w-1/3
        flex flex-col justify-between
        p-4 sm:p-6 md:p-8 lg:p-10
        z-10
        transition-all duration-500
        md:group-hover:w-2/3
      `}
    >
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl self-start font-light text-white">
        {num}
      </p>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
          {title}
        </h1>
        <div className="flex items-center gap-2 group/cta">
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90">
            See Case Study
          </p>
          <span className="text-white text-xl md:text-2xl transition-transform duration-300 group-hover/cta:translate-x-2">
            →
          </span>
        </div>
      </div>
    </div>

    {/* Image — always visible */}
    <div className="relative h-[220px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[60vh] overflow-hidden rounded-b-lg md:rounded-lg shadow-lg">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
    </div>
  </div>
))}
        </section>

        {/* Welcome Text Section */}
        <section
          ref={welcomeContainer}
          className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40"
        >
          <div className="bg-teal-100 rounded-sm py-16 xl:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-6">
              <p
                ref={welcomeTextRef}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl/20 text-center tracking-tight animated-text font-light max-w-6xl mx-auto leading-relaxed"
              >
                Welcome to{" "}
                <span className="text-teal-900 font-bold whitespace-nowrap">
                  Brand Art and Communications
                </span>
                , where our creative thinkers work closely with innovative
                strategy to create meaningful designs that capture the cultural
                nuances of your audience and evoke the emotions that inspire
                action.
              </p>

              <a
                href="/about"
                className="inline-block bg-teal-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-medium text-base sm:text-lg transition-all duration-300 hover:bg-teal-800 hover:scale-105 shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  );
}
