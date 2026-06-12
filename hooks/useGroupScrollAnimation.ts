import { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGroupScrollAnimation(activeTab: string = "default"): {
  refs: RefObject<(HTMLDivElement | null)[]>;
  setRef: (index: number) => (el: HTMLDivElement | null) => void;
} {
  const refs = useRef<(HTMLDivElement | null)[]>([]);


  refs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = refs.current.filter(
        (card): card is HTMLDivElement =>
          !!card && document.body.contains(card)
      );

      validCards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });

        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [activeTab]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };

  return { refs, setRef };
}