"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollVideoFiveParts() {
  return (
    <>
      <main className="p-40">
        <section className="grid grid-cols-2 gap-x-40">
          <div>
              <img src="/img/brand-art.png" alt="" />
          </div>
          <div className="space-y-6 text-2xl/10 tracking-tight">
          <h4>about us</h4>
          <h1 className="text-7xl font-bold tracking-tighter">We Are Brand Art</h1>
          <p>
            We’re an independent, insight-led creative design agency obsessed
            with the power of culture and emotion. Every brand has a truth, we
            help you find it, shape it, and express it beautifully.
          </p>

          <p>
            Our work is designed to move people and spark conversations. To us,
            branding isn’t just what you say, it’s how you show up. Everywhere.
          </p>

          <p className="">
            With experience across industries, from tech to lifestyle, FMCG to
            fashion, our team brings world-class thinking with local insight.
            We’re daring. We’re human. We’re always a little unexpected.
          </p>
        </div>

        </section>
        
      </main>
    </>
  );
}
