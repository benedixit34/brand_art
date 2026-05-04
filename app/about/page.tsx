"use client"

import { ContactSection } from "@/components/ContactSection";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(SplitText, ScrollTrigger)




export default function Page() {
    const textContainer = useRef(null);
    useGSAP(()=>{

        const split = new SplitText(".animated-text", {
            type: "words, chars",
           
        })


        const total = split.chars.length
        

       const trigger = ScrollTrigger.create({
        trigger: textContainer.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        onUpdate: (self)=>{
            const progress = self.progress;
            const activeIndex = Math.floor(progress*total)

            split.chars.forEach((char, i) => {
                if (i < activeIndex) {
                    gsap.set(char, { color: "yellow"} )
                    
                } else {
                    gsap.set(char, {color: "#000000"})
                }
            })

        }
       })

        return () => {
            trigger.kill()
            split.revert()}

    }, {scope: textContainer})
    


  return (
    <>
        <main className="relative bg-white">
        <div className="absolute inset-0 bg-[url('/img/BACK.png')] z-0 bg-cover bg-center opacity-20 pointer-events-none">
        </div>
        <section className="relative z-10">
            <div className="flex items-center lg:flex-row flex-col gap-x-20">
                <div className="xl:w-1/3 w-full">
                    <img src="/img/about_v2.jpg" alt=""
                        className="xl:h-screen object-cover object-right p-4 md:p-0 animate-slide-in" />
                </div>

                <div className="2xl:p-40 py-10 px-4 xl:w-1/2 w-full">
                    <h1
                        className="2xl:text-7xl/18 xl:text-6xl/18 text-5xl/16 font-semibold tracking-tighter text-teal-500 pb-5">
                        We craft the true essence of Art
                    </h1>
                    <p className="text-xl/10 font-light">
                        Our commitment to authenticity and strength lies in our ability to
                        deeply understand and translate cultural expression into powerful
                        brand narratives
                    </p>
                </div>
            </div>
        </section>


        <section className="relative z-10 bg-teal-400 xl:py-30 xl:px-40 py-10 px-4">
            <div className="space-y-8" ref={textContainer}>
                <h3 className="2xl:text-4xl/16 text-3xl/12 text-center 2xl:px-60 px-0 animated-text">
                  We’re an independent, insight-led creative design agency obsessed with the power of culture 🌍 and emotion ❤️. Every brand has a truth — we help you find it 🔍, shape it 🧩, and express it beautifully 🎨.</h3>
                <h3 className="2xl:text-4xl/16 text-3xl/12 text-center 2xl:px-60 px-0 animated-text">Our work is designed to move people 🚀 and spark conversations 💬. To us, branding isn’t just what you say 🗣️, it’s how you show up 👀 — everywhere.</h3>
                <h3 className="2xl:text-4xl/16 text-3xl/12 text-center 2xl:px-60 px-0 animated-text">With experience across industries 🏢, from tech 💻 to lifestyle ✨, FMCG 🛒 to fashion 👗, our team brings world-class thinking 🌟 with local insight 🇳🇬. We’re daring ⚡. We’re human 🤝. We’re always a little unexpected 🎭.
                </h3>

            </div>


        </section>

        <section className="relative z-10 2xl:p-40 xl:p-20 py-10 px-4">
            <div className="grid xl:grid-cols-2 gap-x-30 space-y-10 items-center">
                <div className="w-full">
                    <h1 className="2xl:text-7xl/18 xl:text-6xl/18 text-5xl/16 font-semibold tracking-tighter pb-5">
                        We speak the
                        language of Culture
                    </h1>
                    <p className="text-xl/10 font-light">
                        We craft ingenious creative solutions
                        that resonate with your target community
                        through cultural authenticity and
                        emotional depth.
                    </p>
                </div>

                <div className="w-full">
                    <img src="/img/about_v3.jpg" alt="" className="w-screen" />
                </div>

            </div>



        </section>
        <section className="relative z-10 bg-teal-500 xl:p-40 py-10 px-4">
            <div className="space-y-8">
                <h1 className="text-3xl text-center text-yellow-300">OUR SERVICES</h1>
                <h3 id="highlight-text" className="2xl:text-5xl/16 text-3xl/12 text-center 2xl:px-60 px-0">
                    Everything We Do is Filtered
                    Through the Lens of Brand Experience
                    At Brand Art, we don’t separate branding from campaigns
                    or strategy from culture. We see the full picture.
                    We build systems that speak with consistency,
                    and ideas that burst through the noise.
                    Whether you're starting out, scaling up, or breaking through,
                    our services are built to adapt to your ambition.
                </h3>


            </div>


        </section>

        <section
            className="relative z-10 2xl:p-40 xl:px-20 py-10 px-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     0">
            <div className="grid xl:grid-cols-2 2xl:gap-x-30 gap-10 items-center">
                <div className="w-full space-y-4">
                    <h3 className="text-3xl pb-5 text-teal-500">
                        WHAT WE DO
                    </h3>
                    <p className="2xl:text-6xl/20 xl:text-5xl/16 text-4xl/12 font-semibold tracking-tighter pb-4">
                        Everything
                        From Strategy
                        to Storytelling
                        to Creative Development
                        to Standout Execution
                    </p>
                </div>

                <div className="w-full space-y-8">
                    <p className="text-xl/10 font-light">We help brands clarify their voice, sharpen
                        their image, and connect with the people
                        that matter through work that is creatively
                        daring and culturally grounded.</p>
                    <p className="text-xl/10 font-light">From positioning to activation, we design
                        brand journeys that are cohesive, human,
                        and memorable. Whether we’re building a
                        brand from scratch or evolving a legacy,
                        we always begin with intention and end
                        with impact.</p>
                </div>

            </div>



        </section>

    </main>
    <ContactSection />
    
    
    
    </>

   
  
  );
}
