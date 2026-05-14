"use client";

import { ContactSection } from "@/components/ContactSection";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Page() {
  const mainRef = useRef(null);
  const serviceContainer = useRef(null);
  const aboutContainer = useRef(null);
  useGSAP(
    () => {
      const aboutSplit = new SplitText(".about_text", {
        type: "lines",
      });

      gsap.from(aboutSplit.lines, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.25,
          scrollTrigger: {
          trigger: aboutContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      
      });


      const serviceSplit = new SplitText(".animated-text", {
        type: "lines, words",
      });


      gsap.from(serviceSplit.words, {
        y: 40,
        opacity: 0,
        rotateX: -20,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: serviceContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        serviceSplit.revert();
        aboutSplit.revert();
      };
    },
    { scope: mainRef },
  );
  return (
    <div ref={mainRef}>
      <main className="relative bg-white">
        <div className="absolute inset-0 bg-[url('/img/BACK.png')] z-0 bg-cover bg-center opacity-20 pointer-events-none"></div>
        <section className="relative z-10">
          <div className="flex items-center lg:flex-row flex-col gap-x-20">
            <div className="xl:w-1/3 w-full">
              <img
                src="/img/about_v2.jpg"
                alt=""
                className="xl:h-screen object-cover object-right p-4 md:p-0 animate-slide-in-left"
              />
            </div>

            <div className="2xl:p-40 py-10 px-4 xl:w-1/2 w-full">
              <h1 className="2xl:text-7xl/18 xl:text-6xl/18 text-4xl/12 font-semibold tracking-tighter text-teal-900 pb-5">
                We craft the true essence of Art
              </h1>
              <p className="text-xl/10 font-light">
                Our commitment to authenticity and strength lies in our ability
                to deeply understand and translate cultural expression into
                powerful brand narratives
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 about-gradient xl:py-30 xl:px-40 py-20 px-10 font-light md:text-center text">
          <div className="space-y-4 lg:space-y-8 text-white" ref={aboutContainer}>
            <h1 className="text-3xl text-yellow-500 font-bold">ABOUT US</h1>
            <h3 className="2xl:text-6xl/20 text-xl/10 lg:tracking-tight about_text">
              We’re an independent, insight-led creative design agency obsessed
              with the power of culture and emotion. Every brand has a truth —
              we help you find it, shape it, and express it beautifully.
            </h3>
            <h3 className="2xl:text-6xl/20 text-xl/10 lg:tracking-tight about_text">
              Our work is designed to move people and spark conversations. To
              us, branding isn’t just what you say , it’s how you show up —
              everywhere.
            </h3>
            <h3 className="2xl:text-6xl/20 text-xl/10 px-0 lg:tracking-tight about_text">
              With experience across industries , from tech to lifestyle , FMCG
              to fashion , our team brings world-class thinking with local
              insight. We’re daring. We’re human. We’re always a little
              unexpected.
            </h3>
          </div>
        </section>

        <section className="relative z-10 2xl:p-40 xl:p-20 py-20 px-4">
          <div className="grid xl:grid-cols-2 gap-x-30 space-y-10 items-center">
            <div className="w-full">
              <h1 className="2xl:text-6xl/18 xl:text-6xl/18 text-4xl/12 font-semibold tracking-tighter pb-5 text-teal-900">
                We speak the language of Culture
              </h1>
              <p className="text-xl/10 font-light">
                We craft ingenious creative solutions that resonate with your
                target community through cultural authenticity and emotional
                depth.
              </p>
            </div>

            <div className="w-full">
              <img src="/img/about_v3.jpg" alt="" className="w-screen animate-slide-in-right" />
            </div>
          </div>
        </section>
        <section
          className="relative z-10 bg-teal-800 xl:p-40 py-20 px-4"
          ref={serviceContainer}
        >
          <div className="space-y-8">
            <h1 className="text-3xl text-center text-yellow-500 font-bold">
              OUR SERVICES
            </h1>
            <h3
              id="highlight-text"
              className="2xl:text-6xl/20 text-xl/10 text-center tracking-tight animated-text text-white font-light"
            >
              Everything We Do is Filtered Through the Lens of Brand Experience
              At Brand Art, we don’t separate branding from campaigns or
              strategy from culture. We see the full picture. We build systems
              that speak with consistency, and ideas that burst through the
              noise. Whether you're starting out, scaling up, or breaking
              through, our services are built to adapt to your ambition.
            </h3>
          </div>
        </section>

        <section className="relative z-10 2xl:p-40 xl:px-20 py-20 px-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     0">
          <div className="grid xl:grid-cols-2 2xl:gap-x-30 lg:gap-10 gap-4 items-center">
            <div className="w-full space-y-4">
              <h3 className="text-2xl text-teal-500">WHAT WE DO</h3>
              <p className="2xl:text-6xl/20 xl:text-5xl/16 text-3xl/12 font-semibold tracking-tighter">
                Everything From Strategy to Storytelling to Creative Development
                to Standout Execution
              </p>
            </div>

            <div className="w-full lg:space-y-8 space-y-4">
              <p className="text-xl/10 font-light">
                We help brands clarify their voice, sharpen their image, and
                connect with the people that matter through work that is
                creatively daring and culturally grounded.
              </p>
              <p className="text-xl/10 font-light">
                From positioning to activation, we design brand journeys that
                are cohesive, human, and memorable. Whether we’re building a
                brand from scratch or evolving a legacy, we always begin with
                intention and end with impact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ContactSection />
    </div>
  );
}
