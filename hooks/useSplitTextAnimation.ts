import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitConfig = {
  selector: string;
  trigger: RefObject<HTMLElement | null>;
};

export function useSplitTextAnimation(
  scopeRef: RefObject<HTMLElement | null>,
  configs: SplitConfig[]
) {
  useGSAP(
    () => {
      const splits: SplitText[] = [];

      configs.forEach(({ selector, trigger }) => {
        const split = new SplitText(selector, { type: "lines, words" });
        splits.push(split);

        gsap.from(split.words, {
          y: 40,
          opacity: 0,
          rotateX: -20,
          stagger: 0.02,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: trigger.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => splits.forEach((s) => s.revert());
    },
    { scope: scopeRef }
  );
}