"use client";

import { ContactSection } from "@/components/ContactSection";
import HeroVideo from "@/components/HeroPlayer";
import { Scattered } from "@/components/Scattered";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    num: "01 / 03",
    title: "Lagos Arts",
    color: "bg-rose-500",
    img: "https://i.imgur.com/mbDeYut.jpeg",
    alt: "Lagos Arts case study",
  },
  {
    num: "02 / 03",
    title: "Original Coffee",
    color: "bg-amber-900",
    img: "https://i.imgur.com/AwIR43N.jpeg",
    alt: "Original Coffee case study",
  },
  {
    num: "03 / 03",
    title: "Streetsouk",
    color: "bg-yellow-600",
    img: "https://i.imgur.com/DpSrMd0.jpeg",
    alt: "Streetsouk case study",
  },
];

export default function Page() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // Animate case study sections
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate text section
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <>
      <HeroVideo />
      <Scattered />

      <main className="bg-white overflow-hidden">
        {/* Case Studies Section */}
        <section className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 p-4 sm:p-6 md:p-8 lg:p-10">
          {cases.map(({ num, title, color, img, alt }, i) => (
            <div 
              key={i} 
              ref={setSectionRef(i)}
              className="relative group cursor-pointer"
            >
              {/* Overlay Content */}
              <div 
                className={`
                  ${color} 
                  absolute inset-0 md:inset-auto 
                  md:w-1/2 lg:w-2/5 xl:w-1/3 
                  flex flex-col justify-between 
                  p-4 sm:p-6 md:p-8 lg:p-10 
                  z-10 
                  transition-all duration-500 
                  group-hover:md:w-2/3 lg:group-hover:w-1/2
                `}
              >
                {/* Number */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl self-start font-light">
                  {num}
                </p>
                
                {/* Title and CTA */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                    {title}
                  </h1>
                  <div className="flex items-center gap-2 group/cta">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90">
                      See Case Study
                    </p>
                    <span className="text-white text-xl md:text-2xl transition-transform duration-300 group-hover/cta:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[60vh] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={img} 
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Welcome Text Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40">
          <div ref={textRef}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl/14 text-center font-light leading-relaxed max-w-6xl mx-auto">
              Welcome to{" "}
              <span className="text-teal-900 font-bold inline-block">
                Brand Art and Communications
              </span>
              , where our creative thinkers work closely with innovative strategy to
              create meaningful designs that capture the cultural nuances of
              your audience and evoke the emotions that inspire action.
            </p>
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  );
}