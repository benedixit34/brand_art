import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(

  reference: RefObject<HTMLElement | null>,
  itemsSelector: string
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      

      if (reference.current) {
        gsap.fromTo(
          reference.current,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(0.4)",
            scrollTrigger: {
              trigger: reference.current,
              start: "top 85%",
            },
          }
        );
      }

      const refElements = document.querySelectorAll(itemsSelector);
      if (refElements.length) {
        gsap.fromTo(
          refElements,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);
}