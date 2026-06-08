"use client";

import { ContactSection } from "@/components/ContactSection";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Page() {
  const mainRef = useRef(null);
  const serviceContainer = useRef(null);
  const aboutContainer = useRef(null);
  
  useGSAP(
    () => {
      const aboutSplit = new SplitText(".about_text", {
        type: "lines",
      });

      gsap.from(aboutSplit.lines, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: aboutContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const serviceSplit = new SplitText(".animated-text", {
        type: "lines, words",
      });

      gsap.from(serviceSplit.words, {
        y: 40,
        opacity: 0,
        rotateX: -20,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: serviceContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        serviceSplit.revert();
        aboutSplit.revert();
      };
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef}>
      {/* Hero Section */}
      <section className="flex items-center lg:flex-row flex-col gap-y-8 lg:gap-y-0 lg:gap-x-10 xl:gap-x-20">
        <div className="lg:w-1/2 xl:w-1/3 w-full">
          <img
            src="/img/about_v2.jpg"
            alt="About Brand Art"
            data-cursor="VIEW"
            className="lg:h-screen object-cover object-right p-4 md:p-6 lg:p-0 animate-slide-in-left w-full"
          />
        </div>

        <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:w-1/2 xl:w-1/2 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl/24 font-semibold tracking-tighter pb-4 sm:pb-5">
            We craft the true essence of{" "}
            <span className="inline-block bg-teal-900 text-yellow-400 px-2 sm:px-3 py-0.5 sm:py-1 rotate-[-6deg] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-normal font-bold">
              Art
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl/10 font-light">
            Our commitment to authenticity and strength lies in our ability
            to deeply understand and translate cultural expression into
            powerful brand narratives
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-teal-900 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40 font-light">
        <div className="space-y-4 lg:space-y-6 xl:space-y-8 text-white text-center md:text-left" ref={aboutContainer}>
          <h1 className="text-2xl sm:text-3xl text-yellow-500 font-bold tracking-wide">
            ABOUT US
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl/20 leading-relaxed lg:tracking-tight about_text max-w-6xl mx-auto md:mx-0">
            We're an independent, insight-led creative design agency obsessed
            with the power of culture and emotion. Every brand has a truth —
            we help you find it, shape it, and express it beautifully.
            Our work is designed to move people and spark conversations. To
            us, branding isn't just what you say, it's how you show up —
            everywhere. With experience across industries, from tech to lifestyle, FMCG
            to fashion, our team brings world-class thinking with local
            insight. We're daring. We're human. We're always a little
            unexpected.
          </h3>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-30 items-center">
          <div className="w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl/24 font-semibold tracking-tighter pb-3 sm:pb-4 md:pb-5">
              We speak the language of{" "}
              <span className="inline-block bg-teal-900 text-yellow-400 px-2 sm:px-3 py-0.5 sm:py-1 rotate-[-6deg] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
                Culture
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl/10 font-light">
              We craft ingenious creative solutions that resonate with your
              target community through cultural authenticity and emotional
              depth.
            </p>
          </div>

          <div className="w-full">
            <img 
              src="/img/about_v3.jpg" 
              alt="Cultural authenticity" 
              className="w-full h-auto rounded-lg animate-slide-in-right" 
            />
          </div>
        </div>
      </section>

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
            At Brand Art, we don't separate branding from campaigns or
            strategy from culture. We see the full picture. We build systems
            that speak with consistency, and ideas that burst through the
            noise. Whether you're starting out, scaling up, or breaking
            through, our services are built to adapt to your ambition.
          </h3>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-30 items-start">
          <div className="w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="text-xl sm:text-2xl tracking-wide">WHAT WE DO</h3>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl/20 font-semibold tracking-tighter leading-tight">
              Everything From Strategy to Storytelling to{" "}
              <span className="inline-block bg-teal-900 text-yellow-400 px-2 sm:px-3 py-0.5 sm:py-1 rotate-[-4deg] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Creative
              </span>{" "}
              Development to Standout Execution
            </p>
          </div>

          <div className="w-full space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:text-xl/10 text-base sm:text-lg md:text-xl font-light">
            <p>
              We help brands clarify their voice, sharpen their image, and
              connect with the people that matter through work that is
              creatively daring and culturally grounded.
            </p>
            <p>
              From positioning to activation, we design brand journeys that
              are cohesive, human, and memorable. Whether we're building a
              brand from scratch or evolving a legacy, we always begin with
              intention and end with impact.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}