"use client";

import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "1",
    title: "Brand Strategy",
    description: "Defining your brand's soul; its truth, tone, values, and position in the world.",
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
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-2 2xl:px-20 lg:py-40 p-4 2xl:gap-x-40 gap-10">
      <div className="grid grid-cols-1 gap-y-40">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="grid grid-rows-2 min-h-[70vh] opacity-0"
          >
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                <h1 className="block md:hidden text-white text-9xl">{service.number}</h1>
                <h1 className="lg:text-4xl text-3xl p-6 tracking-tight">{service.title}</h1>
              </div>
              <div className="flex items-center justify-center md:block hidden">
                <h1 className="2xl:text-[12em] text-9xl text-teal-900 text-center">{service.number}</h1>
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

      <div className="sticky top-20 h-screen">
        <div className="relative aspect-square w-full max-w-[700px] overflow-hidden">
          <div className="absolute inset-0 scale-[1.8]">
            <ReactPlayer
              src="https://vimeo.com/1190493402"
              playing
              muted
              loop
              playsInline
              width="100%"
              height="100%"
              className="!w-full !h-full [&_video]:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};