"use client";

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export default function Page() {
  const brandingSection = useInView(0.2);

  return (
    <>
      <main>
    <section
  ref={brandingSection.ref}
  className="flex flex-col lg:grid lg:grid-cols-2 gap-0 bg-[url('/img/bg-services.png')] bg-cover bg-top-left relative text-white"
>
  {/* Text column */}
  <div
    className={`relative z-10 px-6 py-16 sm:p-16 bg-black/70 md:p-24 flex flex-col justify-center space-y-6 font-light text-lg sm:text-xl leading-loose
      transition-all duration-700 ${
      brandingSection.inView
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-8"
    }`}
  >
    <h1 className="text-3xl lg:text-5xl tracking-tighter font-bold leading-tight">
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

    <div className="pt-2">
      <Link
        href="/about"
        className="font-semibold text-base sm:text-lg border-b border-yellow-400/40
          pb-0.5 hover:border-yellow-400 transition-all duration-300 text-yellow-500"
      >
        Learn More
      </Link>
    </div>
  </div>


  <div
    className={`relative overflow-hidden transition-all duration-700 delay-150 ${
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
      className="w-full h-auto block transition-transform duration-500 hover:scale-105"
    />
  </div>
</section>

        <ServiceSection />
        <ContactSection />
      </main>
    </>
  );
}