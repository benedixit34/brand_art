"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ContactSection = () => {
  const iconRef = useRef<SVGSVGElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const onEnter = () => {
    gsap.to(iconRef.current, {
      x: 20,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(iconRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section className="2xl:p-40 xl:px-20 px-10 py-20 bg-yellow-400 space-y-4">
      <p className="text-2xl">CONTACT</p>

      <Link
      href="/contact"
        ref={linkRef}
        className="2xl:text-8xl xl:text-6xl text-5xl font-bold tracking-tighter flex items-center contact-link cursor-pointer"
        data-cursor="CLICK"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        Let's Talk Art

        <ArrowDownRightIcon
          ref={iconRef}
          className="w-20 ml-4"
        />
      </Link>
    </section>
  );
};