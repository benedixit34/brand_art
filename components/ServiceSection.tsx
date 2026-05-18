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

    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0 });
    });

    sentinelsRef.current.forEach((sentinel, i) => {
      if (!sentinel || i === 0) return;

      ScrollTrigger.create({
        trigger: sentinel,
        start: "top center",
        onEnter: () => transitionTo(i),
        onLeaveBack: () => transitionTo(i - 1),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${services.length * 100}vh` }}
      className="relative w-full"
    >
      {/* Invisible sentinels */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        {services.map((_, i) => (
          <div
            key={i}
            ref={(el) => { sentinelsRef.current[i] = el; }}
            className="h-screen w-full"
          />
        ))}
      </div>

      {/* Sticky two-column layout */}
      <div className="sticky top-0 h-screen grid lg:grid-cols-2 2xl:px-20 lg:py-20 p-4 2xl:gap-x-40 gap-10">

        {/* Left: stacked cards — py-16 gives top/bottom breathing room */}
        <div className="relative py-16 lg:py-20">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 py-16 lg:py-20 grid grid-rows-2"
            >
              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                  <h1 className="block md:hidden text-white text-9xl">
                    {service.number}
                  </h1>
                  <h1 className="lg:text-4xl text-3xl p-6 tracking-tight">
                    {service.title}
                  </h1>
                </div>
                <div className="flex items-center justify-center md:block hidden">
                  <h1 className="2xl:text-[12em] text-9xl text-teal-900 text-center">
                    {service.number}
                  </h1>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="hidden md:block" />
                <div className="flex 2xl:text-xl/10 text-md/8 border-[0.2px] border-teal-900 p-6 justify-self-center font-light items-end">
                  <p className="text-teal-900">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: video */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[700px] overflow-hidden">
            <div className="absolute inset-0 scale-[1.8]">
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