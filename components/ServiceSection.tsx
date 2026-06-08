"use client";

import { useEffect, useRef } from "react";
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

export const ServiceSection = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sentinelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeIndex = useRef(0);

  const transitionTo = (nextIndex: number) => {
    if (nextIndex === activeIndex.current) return;

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
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        gsap.to(inCard, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        });
      },
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play();

    // Use GSAP matchMedia to handle responsive animation setups smoothly
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop setup: Apply initial opacity styling required for transitions
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0 });
      });

      // Desktop setup: Initialize ScrollTriggers
      sentinelsRef.current.forEach((sentinel, i) => {
        if (!sentinel || i === 0) return;

        ScrollTrigger.create({
          trigger: sentinel,
          start: "top center",
          onEnter: () => transitionTo(i),
          onLeaveBack: () => transitionTo(i - 1),
        });
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile fallback: Clear inline GSAP opacity/transform properties so everything stacks naturally
      itemsRef.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { clearProps: "all" });
      });
    });

    return () => {
      mm.revert(); // Automatically clears matchMedia listeners and internal ScrollTriggers
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      // Mobile: height handles content length naturally. Desktop: height acts as scroll track.
      className="relative w-full h-auto lg:h-[500vh]"
    >
      {/* Invisible sentinels — Only used / rendered on Desktop */}
      <div className="absolute inset-0 hidden lg:flex flex-col pointer-events-none">
        {services.map((_, i) => (
          <div
            key={i}
            ref={(el) => { sentinelsRef.current[i] = el; }}
            className="h-screen w-full"
          />
        ))}
      </div>

      {/* Main layout frame — Sticky on desktop, standard grid layout on mobile */}
      <div className="relative lg:sticky top-0 h-auto lg:h-screen grid grid-cols-1 lg:grid-cols-2 2xl:px-20 lg:py-20 p-6 gap-10 lg:gap-x-40">
        
        {/* Left column: Cards container */}
        <div className="relative flex flex-col gap-12 lg:gap-0 lg:py-20">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              // Mobile: Static positioning for dynamic stacking. Desktop: Layered absolutely.
              className="relative lg:absolute inset-auto lg:inset-0 lg:py-20 grid grid-rows-[auto_auto] gap-4 lg:gap-0"
            >
              {/* Header Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div className="flex items-center md:items-end bg-teal-900 text-white min-h-[120px] md:h-full w-full p-6 rounded-sm">
                  {/* Small screens show number inline */}
                  <h1 className="block md:hidden text-white text-5xl mr-4 font-bold">
                    {service.number}.
                  </h1>
                  <h1 className="lg:text-4xl text-2xl tracking-tight font-bold">
                    {service.title}
                  </h1>
                </div>
                {/* Desktop/Tablet number view */}
                <div className="hidden md:flex items-center justify-center">
                  <h1 className="2xl:text-[12em] text-8xl text-teal-900 text-center font-bold">
                    {service.number}
                  </h1>
                </div>
              </div>

              {/* Description Box */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block" />
                <div className="flex text-sm md:text-md/8 xl:text-xl/8 border-[0.2px] border-teal-900 rounded-sm p-6 justify-self-stretch md:justify-self-center font-light items-end">
                  <p className="text-teal-900">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column: Sticky Media/Video Container */}
        <div className="lg:flex hidden items-center justify-center sticky top-6 lg:relative lg:top-auto self-start lg:self-auto order-first lg:order-last">
          <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[700px] overflow-hidden rounded-sm">
            <div className="absolute inset-0 scale-[1.1] lg:scale-[1.8]">
              <video
                ref={videoRef}
                muted
                playsInline
                loop
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src="/videos/BrandArt.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};