"use client";

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
// import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  // const textBoxRef = useRef(null);
  // const headingRef = useRef(null);
  // const paragraphRef = useRef(null);

  // useEffect(() => {
  //   // Set initial states
  //   gsap.set(textBoxRef.current, { opacity: 0, x: -50 });
  //   gsap.set(headingRef.current, { opacity: 0, y: 30 });
  //   gsap.set(paragraphRef.current, { opacity: 0, y: 30 });

  //   // Create animation timeline
  //   const tl = gsap.timeline({
  //     defaults: { ease: "power3.out" },
  //     scrollTrigger: {
  //       trigger: textBoxRef.current,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   tl.to(textBoxRef.current, {
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.8,
  //   })
  //     .to(
  //       headingRef.current,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //       },
  //       "-=0.4",
  //     )
  //     .to(
  //       paragraphRef.current,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //       },
  //       "-=0.3",
  //     );

  //   // Parallax effect on background
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY;
  //     const section = document.querySelector(".parallax-section");
  //     if (section) {
  //       gsap.to(section, {
  //         backgroundPosition: `50% ${scrolled * 0.3}px`,
  //         duration: 0.1,
  //         ease: "none",
  //       });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (ScrollTrigger) {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     }
  //   };
  // }, []);

  return (
    <>
      {/* <section
        className="parallax-section relative h-screen 2xl:h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/bg_new.jpg')" }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div
            ref={textBoxRef}
            className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 
            2xl:max-w-[50%] bg-teal-900 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm shadow-2xl"
          >
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-yellow-300 mb-4 sm:mb-6"
            >
              Branding At Brand Art
            </h1>

            <p
              ref={paragraphRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed sm:leading-loose"
            >
              This is the origin story. The core. The blueprint. The starting
              point of everything we do. We define your why, shape your voice,
              craft your look, and help you show up with clarity, character, and
              conviction. Because in a world full of noise, your brand should
              sound like a truth.
            </p>
          </div>
        </div>
      </section> */}

      <main>

        <section>
          <div></div>
          <div><img src="" alt="" /></div>
        </section>
        
        <ServiceSection />
        <ContactSection />
      </main>
      
    </>
  );
}
