"use client";

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Page() {
  const brandingSection = useInView(0.2);

  return (
    <>
      <main>
        <section
          ref={brandingSection.ref}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-0"
        >
          <div
            className={`bg-yellow-500 px-6 py-20 sm:p-16 md:p-24 lg:p-40 space-y-6 font-light text-lg sm:text-xl leading-loose flex flex-col justify-center transition-all duration-700 ${
              brandingSection.inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold leading-tight">
              Branding At Brand Art
            </h1>
            <p>
              This is the origin story. The core. The blueprint. The starting
              point of everything we do.
            </p>
            <p>
              We define your why, shape your voice, craft your look, and help
              you show up with clarity, character, and conviction. Whether
              you're rebranding or just getting started, we make sure your brand
              isn't just functional but it's unforgettable.
            </p>
            <p>
              Because in a world full of noise, your brand should sound like a
              truth.
            </p>
            <a
              href="/about"
              className="w-fit bg-teal-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-medium text-base sm:text-lg transition-all duration-300 hover:bg-teal-800 hover:scale-105 shadow-md"
            >
              Learn More
            </a>
          </div>

          <div
            className={`w-full h-72 sm:h-96 lg:h-auto lg:min-h-screen bg-yellow-100 flex items-center justify-center overflow-hidden transition-all duration-700 delay-150 ${
              brandingSection.inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/img/brand_services.png"
              alt="Service Section"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        <ServiceSection />
        <ContactSection />
      </main>
    </>
  );
}