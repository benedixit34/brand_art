"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

export const ContactSection = () => {
  const iconRef = useRef<SVGSVGElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const onEnter = () => {
    gsap.to(iconRef.current, {
      x: 20,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(iconRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  useEffect(() => {
 
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }


    if (textRef.current && linkRef.current) {
      gsap.fromTo([textRef.current, linkRef.current],
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      if (gsap.getTweensOf(iconRef.current).length) {
        gsap.killTweensOf(iconRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-yellow-400 overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 space-y-3 sm:space-y-4 md:space-y-6">
        
        {/* CONTACT Label */}
        <p 
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wider"
        >
          CONTACT
        </p>

        {/* Main CTA Link */}
        <Link
          href="/contact"
          ref={linkRef}
          className="group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 font-bold tracking-tighter cursor-pointer w-full"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          data-cursor="CLICK"
        >
          {/* Text with responsive font sizes */}
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
            Let's Talk Art
          </span>

          {/* Icon with responsive sizing */}
          <ArrowDownRightIcon
            ref={iconRef}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12"
          />
        </Link>

        {/* Optional: Decorative line */}
        <div className="w-full h-px bg-black/20 mt-4 sm:mt-6 md:mt-8"></div>
        
        {/* Optional: Supporting text */}
        <p className="text-sm sm:text-base md:text-lg text-black/60 max-w-2xl mt-4 sm:mt-6">
          Ready to bring your brand vision to life? Let's collaborate and create something extraordinary together.
        </p>
      </div>
    </section>
  );
};