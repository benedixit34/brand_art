"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  y?: number;
  duration?: number;
  stagger?: number;
};

export function useScrollReveal(
  sectionRefs: RefObject<(HTMLElement | null)[]>,
  options?: Options
) {
  const {
    y = 50,
    duration = 0.8,
    stagger = 0.2,
  } = options || {};

  useEffect(() => {
    const sections = sectionRefs.current;

    sections.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay: index * stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionRefs, y, duration, stagger]);
}