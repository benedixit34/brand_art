"use client";

import { ContactSection } from "@/components/ContactSection";
import { ServiceSection } from "@/components/ServiceSection";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import HeroVideo from "@/components/HeroPlayer";


export default function Page() {
  const brandingSection = useInView(0.2);

  return (
    <>
      <main>
<section
  ref={brandingSection.ref}
  className="relative grid lg:grid-cols-2 min-h-screen items-stretch overflow-hidden bg-black text-white"
>
  {/* BACKGROUND LAYER */}
  <Image
    src="/img/bg-top.svg"
    alt="Brand Arts & Communication"
    fill
    priority
    className="object-cover opacity-30 pointer-events-none select-none"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* LEFT: TEXT */}
  <div
    className={`relative z-10 flex items-center justify-center px-6 py-10 sm:py-12 lg:py-16
      transition-all duration-700 ease-out
      ${
        brandingSection.inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
  >
    <div className="w-full max-w-xl space-y-8 lg:space-y-10">
      <header className="space-y-4">
        <p className="text-yellow-400 uppercase tracking-[0.25em] text-xs sm:text-sm">
          Brand Strategy
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Branding at Brand Art
        </h1>
      </header>

      <div className="space-y-5 text-base sm:text-lg leading-relaxed text-white/80">
        <p>
          This is the origin story — the core, the blueprint, the starting point
          of everything we do.
        </p>

        <p>
          We define your{" "}
          <span className="text-white font-medium">why</span>, shape your voice,
          and craft a visual identity that gives your brand clarity, character,
          and conviction.
        </p>

        <p>
          Whether you're building from scratch or evolving, we ensure your brand
          doesn't just function — it resonates.
        </p>

        <p className="text-white font-medium">
          Because in a world full of noise, your brand should sound like truth.
        </p>
      </div>

      <Link
        href="/about"
        className="inline-flex items-center gap-2 text-yellow-400 font-medium
        border-b border-yellow-400/40 hover:border-yellow-400
        transition-all duration-300 pb-1"
      >
        Learn More →
      </Link>
    </div>
  </div>

{/* RIGHT: VIDEO */}
<div
  className={`relative z-10 flex items-center justify-center h-full px-6 py-10 sm:py-12 lg:py-16
    transition-all duration-700 ease-out
    ${
      brandingSection.inView
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-10"
    }`}
>
  {/* 16:9 FRAME CENTERED */}
  <div className="relative w-full max-w-2xl aspect-[4/3] rounded-sm overflow-hidden">
<div className="absolute inset-0">
    <HeroVideo className="w-full h-full" />
</div>


    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
  </div>
</div>
</section>

        <ServiceSection />
        <ContactSection />
    
      </main>
    </>
  );
}