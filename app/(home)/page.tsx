"use client";

import { ContactSection } from "@/components/ContactSection";
import HeroVideo from "@/components/HeroPlayer";
import { Scattered } from "@/components/Scattered";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitTextAnimation } from "@/hooks/useSplitTextAnimation";
import { useGroupScrollAnimation } from "@/hooks/useGroupScrollAnimation";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    num: "01 / 03",
    title: "Lagos Arts",
    color: "bg-teal-500",
    img: "https://i.imgur.com/mbDeYut.jpeg",
    alt: "Lagos Arts case study",
  },
  {
    num: "02 / 03",
    title: "Original Coffee",
    color: "bg-yellow-500",
    img: "https://i.imgur.com/AwIR43N.jpeg",
    alt: "Original Coffee case study",
  },
  {
    num: "03 / 03",
    title: "Streetsouk",
    color: "bg-teal-500",
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
      <HeroVideo className="relative w-full h-screen overflow-hidden bg-black" />
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
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl self-start font-light">
        {num}
      </p>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <div className="flex items-center gap-2 group/cta">
          <p className="text-base sm:text-lg md:text-xl font-light">
            See Case Study
          </p>
          <span className="text-white text-xl md:text-2xl transition-transform duration-300 group-hover/cta:translate-x-2">
           
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
          className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-40 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40"
        >
         
          <div className="relative bg-teal-500 rounded-sm py-16 xl:py-20 px-6 sm:px-8 md:px-12 lg:px-20">
              <div className="absolute inset-0 w-full h-full pointer-events-none select-none bg-0 ">
                              <Image src="/img/bg_vector.png" alt="Brand Art and Communications" width={500} height={500}
                              className="w-full h-full object-cover opacity-50" />
                              
                       
                       
                      </div>
            <div className="relative z-10 mx-auto text-center space-y-10 sm:space-y-6">
              <p
                ref={welcomeTextRef}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl/20 text-center tracking-tight animated-text  
                mx-auto leading-relaxed"
              >
                Welcome to 
                  Brand Art and Communications
  
                , where our creative thinkers work closely with innovative
                strategy to create meaningful designs that capture the cultural
                nuances of your audience and evoke the emotions that inspire
                action.
              </p>

             <div className="mt-10">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-yellow-400 font-medium
          border-b border-yellow-400/40 hover:border-yellow-400
          transition-all duration-300 pb-1"
        >
          Learn More →
        </Link>
      </div>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  );
}
