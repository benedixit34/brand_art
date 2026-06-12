"use client";

import { ContactSection } from "@/components/ContactSection";
import gsap from "gsap";
import { useRef } from "react";

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useSplitTextAnimation } from "@/hooks/useSplitTextAnimation";
import { useInView } from "@/hooks/useInView";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Page() {
  const mainRef = useRef(null);
  const serviceContainer = useRef(null);

  useSplitTextAnimation(mainRef, [
    { selector: ".animated-text", trigger: serviceContainer },
  ]);

  const aboutSection = useInView(0.2);
  const cultureSection = useInView(0.2);

  return (
    <main ref={mainRef}>
      {/* Hero Section */}
      <section className="flex items-center lg:flex-row flex-col gap-y-8 lg:gap-y-0 lg:gap-x-10 xl:gap-x-20">
        <div className="lg:w-1/2 xl:w-1/3 w-full opacity-0 animate-fade-in-left [animation-delay:200ms]">
         <Image
  src="/img/brand-art.png"
  width={500}
  height={500}
  alt="Picture of the author"
  priority
  className="lg:h-screen object-cover object-right p-4 md:p-6 lg:p-0 animate-slide-in-left w-full"
/>
        </div>

        <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:w-1/2 xl:w-1/2 w-full opacity-0 animate-fade-in-right [animation-delay:400ms]">
          <div className="flex flex-col space-y-6 text-lg md:text-xl tracking-tight font-light">
            <h4 className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-sm inline-block w-fit">
              about us
            </h4>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              We Are Brand Art
            </h1>
            <p>
              We're an independent, insight-led creative design agency obsessed
              with the power of culture and emotion. Every brand has a truth —
              we help you find it, shape it, and express it beautifully.
            </p>
            <p>
              Our work is designed to move people and spark conversations. To
              us, branding isn't just what you say — it's how you show up.
              Everywhere.
            </p>
            <p>
              With experience across industries — from tech to lifestyle, FMCG
              to fashion — our team brings world-class thinking with local
              insight. We're daring. We're human. We're always a little
              unexpected.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section
  ref={aboutSection.ref}
  className="bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-80"
>
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
    
    {/* Left: Text Content */}
    <div
      className={`w-full space-y-6 sm:space-y-8 transition-all duration-700 ${
        aboutSection.inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8"
      }`}
    >
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
          We speak the language of <span className="text-teal-700">Culture</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          We craft ingenious creative solutions that resonate with your target community — through cultural authenticity and emotional depth.
        </p>
      </div>

      <div className="pt-2 sm:pt-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
          We craft the true essence of <span className="text-teal-700">Art</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          Our commitment to authenticity and strength lies in our ability to deeply understand and translate cultural expression into powerful brand narratives.
        </p>
      </div>
    </div>

    {/* Right: Image */}
    <div
      className={`w-full transition-all duration-700 delay-100 ${
        aboutSection.inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8"
      }`}
    >
      <div className="relative rounded-lg shadow-xl overflow-hidden">
        <img
          src="/img/brand_art_v2.png"
          alt="Cultural authenticity in brand art"
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Optional subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </div>
  </div>
</section>

      {/* Culture Section */}
     

      {/* Our Services Section */}
      <section
        className="relative z-10 bg-teal-900 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40"
        ref={serviceContainer}
      >
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl text-center text-yellow-500 font-bold tracking-wide">
            OUR SERVICES
          </h1>
          <h3
            id="highlight-text"
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl/20 text-center tracking-tight animated-text text-white font-light max-w-6xl mx-auto leading-relaxed"
          >
            Everything We Do is Filtered Through the Lens of Brand Experience.
            At Brand Art, we don't separate branding from campaigns or strategy
            from culture. We see the full picture. We build systems that speak
            with consistency, and ideas that burst through the noise. Whether
            you're starting out, scaling up, or breaking through, our services
            are built to adapt to your ambition.
          </h3>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
          {/* Left column */}
          <div className="w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h4 className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-sm inline-block w-fit">
              What we do
            </h4>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.2]">
              Everything From Strategy to Storytelling to Creative Development
              to Standout Execution
            </p>
          </div>

          {/* Right column */}
          <div className="w-full space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 text-base sm:text-lg md:text-xl leading-relaxed self-center">
            <p>
              We help brands clarify their voice, sharpen their image, and
              connect with the people that matter — through work that is
              creatively daring and culturally grounded.
            </p>
            <p>
              From positioning to activation, we design brand journeys that are
              cohesive, human, and memorable. Whether we're building a brand
              from scratch or evolving a legacy, we always begin with intention
              and end with impact.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
