"use client"



import { ContactSection } from "@/components/ContactSection";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Page() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable | null>(null);



  useEffect(()=>{
    if (!boxRef.current) return


    draggableRef.current = Draggable.create(boxRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        inertia: true,
    })[0]

    draggableRef.current.disable()
    const handleMouseEnter = () => {
        draggableRef.current?.enable()
    }


    const handleMouseLeave = () => {
        draggableRef.current?.disable()
    }



    boxRef.current.addEventListener("mouseenter", handleMouseEnter)
    boxRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        boxRef.current?.removeEventListener("mouseenter", handleMouseEnter)
        boxRef.current?.removeEventListener("mouseleave", handleMouseLeave)

        draggableRef.current?.kill()
    }
  }, [])
  return (
    <>
      <section className="relative 2xl:h-screen h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Service_Background_Video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 lg:p-40 px-4 py-10 flex">
          <div className="space-y-6 2xl:w-1/2 w-full bg-yellow-300 p-12" ref={boxRef}>
            <h1 className="2xl:text-8xl/25 xl:text-6xl/20 text-5xl/14 tracking-tighter font-bold">
              Branding At <span className="text-teal-700">Brand Art</span>
            </h1>
            <div className="space-y-4 font-light text-xl/12">
              <p>
                This is the origin story. The core. The blueprint. The starting
                point of everything we do. We define your why, shape your voice,
                craft your look, and help you show up with clarity, character,
                and conviction. Because in a world full of noise, your brand
                should sound like a truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative bg-white">
        <div className="absolute inset-0 bg-[url('/img/BACK.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

        <section className="relative z-10 2xl:p-40 xl:px-10 px-4 py-20">
          <div className="xl:w-1/2 w-full pb-20 pb-20">
            <h1 className="2xl:text-8xl xl:text-6xl text-5xl font-bold tracking-tighter flex ">
              Our Services
            </h1>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-10 gap-6">
            <div className="space-y-4 p-10 bg-teal-300">
              <img src="/img/icons/visibility.png" alt="" className="w-30" />
              <h2 className="text-2xl/12 font-bold">Brand Strategy</h2>
              <p className="text-xl/10 font-light">
                Defining your brand’s soul; its truth, tone, values, and
                position in the world.
              </p>
              <a href="" className="text-xl">
                Explore
              </a>
            </div>

            <div className="space-y-4 p-10 bg-yellow-300">
              <img src="/img/icons/prototype.png" alt="" className="w-30" />
              <h2 className="text-2xl/12 font-bold">
                Creative Concept Development
              </h2>
              <p className="text-xl/10 font-light">
                Big, bold, beautiful ideas. We craft campaignable concepts
                rooted in insight and driven by emotion, built to work across
                platforms, screens, and spaces..
              </p>
              <a href="" className="text-xl">
                Explore
              </a>
            </div>

            <div className="space-y-4 p-10 bg-blue-300">
              <img src="/img/icons/logo-design.png" alt="" className="w-30" />
              <h2 className="text-2xl/12 font-bold">Logo & Visual Identity</h2>
              <p className="text-xl/10 font-light">
                More than just a logo, this is how your brand looks, feels, and
                flexes. We design distinctive visual systems that set the tone
                and leave a mark.
              </p>
              <a href="" className="text-xl hover:underline hover:bg-white">
                Explore
              </a>
            </div>

            <div className="space-y-4 p-10 bg-rose-300 box">
              <img
                src="/img/icons/brand-ambassador.png"
                alt=""
                className="w-30"
              />
              <h2 className="text-2xl/12 font-bold">Brand Communication</h2>
              <p className="text-xl/10 font-light">
                From voice and messaging to campaign storytelling, we help you
                speak in a way that connects consistently and powerfully.
              </p>
              <a href="" className="text-xl">
                Explore
              </a>
            </div>

            <div className="space-y-4 p-10 bg-purple-300">
              <img
                src="/img/icons/user-experience.png"
                alt=""
                className="w-30"
              />
              <h2 className="text-2xl/12 font-bold">Experience Design</h2>
              <p className="text-xl/10 font-light">
                We create meaningful brand interactions online, offline, and in
                real life. Because great branding isn’t just what people see;
                it’s what they experience.
              </p>
              <a href="" className="text-xl">
                Explore
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactSection />
    </>
  );
}
