import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export function useEaseAnimation(
  reference: RefObject<HTMLElement | HTMLDivElement | null>,
  
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reference.current) {
        gsap.fromTo(
          reference.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: reference.current,
              start: "top 80%",
            },
          }
        );
      }


    });

    return () => ctx.revert();
  }, []);
}