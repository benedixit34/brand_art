"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "1",
    title: "Brand Strategy",
    description:
      "Defining your brand's soul; its truth, tone, values, and position in the world.",
  },
  {
    number: "2",
    title: "Creative Concept Development",
    description:
      "Big, bold, beautiful ideas. We craft campaignable concepts rooted in insight and driven by emotion, built to work across platforms, screens, and spaces.",
  },
  {
    number: "3",
    title: "Logo & Visual Identity",
    description:
      "More than just a logo, this is how your brand looks, feels, and flexes. We design distinctive visual systems that set the tone and leave a mark.",
  },
  {
    number: "4",
    title: "Brand Communications",
    description:
      "From voice and messaging to campaign storytelling, we help you speak in a way that connects consistently and powerfully.",
  },
  {
    number: "5",
    title: "Experience Design",
    description:
      "We create meaningful brand interactions online, offline, and in real life. Because great branding isn't just what people see; it's what they experience.",
  },
];

const TRANSITION_DURATION = {
  out: 0.4,
  in: 0.55,
};

export const ServiceSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sentinelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useRef(0);
  const isAnimating = useRef(false);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  const transitionTo = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex.current || isAnimating.current) return;

    isAnimating.current = true;

    const outCard = itemsRef.current[activeIndex.current];
    const inCard = itemsRef.current[nextIndex];
    const goingForward = nextIndex > activeIndex.current;

    activeIndex.current = nextIndex;

    if (outCard) gsap.killTweensOf(outCard);
    if (inCard) gsap.killTweensOf(inCard);

    gsap.set(inCard, { opacity: 0, y: goingForward ? 60 : -60 });

    gsap.to(outCard, {
      opacity: 0,
      y: goingForward ? -60 : 60,
      duration: TRANSITION_DURATION.out,
      ease: "power3.in",
    });

    gsap.to(inCard, {
      opacity: 1,
      y: 0,
      duration: TRANSITION_DURATION.in,
      ease: "power3.out",
      delay: TRANSITION_DURATION.out * 0.5,
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, []);

  const setSentinelRef = useCallback((el: HTMLDivElement | null, i: number) => {
    sentinelsRef.current[i] = el;
  }, []);

  const setItemRef = useCallback((el: HTMLDivElement | null, i: number) => {
    itemsRef.current[i] = el;
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0 });
      });

      sentinelsRef.current.forEach((sentinel, i) => {
        if (!sentinel || i === 0) return;

        const trigger = ScrollTrigger.create({
          trigger: sentinel,
          start: "top center",
          onEnter: () => transitionTo(i),
          onLeaveBack: () => transitionTo(i - 1),
        });

        scrollTriggersRef.current.push(trigger);
      });
    });

    mm.add("(max-width: 1023px)", () => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { clearProps: "all" });
      });
    });

    return () => {
      mm.revert();
      scrollTriggersRef.current.forEach((t) => t.kill());
      scrollTriggersRef.current = [];
    };
  }, [transitionTo]);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full h-auto lg:h-[500vh]"
      aria-label="Our Services"
    >
      {/* SCROLL SENTINELS */}
      <div
        className="absolute inset-0 hidden lg:flex flex-col pointer-events-none"
        aria-hidden="true"
      >
        {services.map((_, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => setSentinelRef(el, i)}
            className="h-screen w-full"
          />
        ))}
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative lg:sticky top-0 h-auto lg:h-screen grid grid-cols-1 lg:grid-cols-2 2xl:px-20 lg:py-20 p-6 gap-10 lg:gap-x-40">

        {/* SERVICES */}
        <div className="relative flex flex-col gap-12 lg:gap-0 lg:py-20" role="list">
          {services.map((service, i) => (
            <article
              key={service.title}
              ref={(el: HTMLDivElement | null) => setItemRef(el, i)}
              className="relative lg:absolute inset-auto lg:inset-0 lg:py-20 grid grid-rows-[auto_auto] gap-4 lg:gap-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div className="flex items-center md:items-end bg-black text-yellow-400 min-h-[120px] md:h-full w-full p-6 rounded-sm">
                  <h2 className="block md:hidden text-5xl mr-4 font-bold">
                    {service.number}.
                  </h2>
                  <h2 className="lg:text-4xl text-2xl tracking-tight font-bold">
                    {service.title}
                  </h2>
                </div>

                <div className="hidden md:flex items-center justify-center text-black">
                  <span className="2xl:text-[12em] text-8xl text-center font-bold">
                    {service.number}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block" />
                <div className="flex text-sm md:text-md/8 xl:text-xl/8 bg-yellow-400 border-teal-900 rounded-sm p-6 font-light items-end">
                  <p className="text-black">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* IMAGE (REPLACED VIDEO) */}
        <aside className="lg:flex hidden items-center justify-center sticky top-6 lg:relative lg:top-auto self-start lg:self-auto order-first lg:order-last">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <img
              src="/img/brand_services.png"
              alt="Brand Art visual representation"
              className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
              loading="lazy"
            />
          </div>
        </aside>

      </div>
    </section>
  );
};