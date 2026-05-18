"use client"

import { ContactSection } from "@/components/ContactSection"
import HeroVideo from "@/components/HeroPlayer";
import { Scattered } from "@/components/Scattered";



const cases = [
  {
    num: "01 / 03",
    title: "Lagos Arts",
    color: "bg-rose-500",
    img: "https://i.imgur.com/mbDeYut.jpeg",
    alt: "Avis case study",
  },
  {
    num: "02 / 03",
    title: "Original Coffee",
    color: "bg-amber-900",
    img: "https://i.imgur.com/AwIR43N.jpeg",
    alt: "Gallup case study",
  },
  {
    num: "03 / 03",
    title: "Streetsouk",
    color: "bg-yellow-600",
    img: "https://i.imgur.com/DpSrMd0.jpeg",
    alt: "ADL case study",
  },
]


export default function Page() {
  return (
    <>
    <HeroVideo />
    <Scattered />


      <main className=" bg-white">
   

          
     
        <section className="flex flex-col space-y-10 p-10">
            {cases.map(({ num, title, color, img, alt }, i) => (
                 <div key={i} className="flex relative isolate group h-[60vh]">

                <div
                    className={`${color} animate-slide-in-left w-1/3 text-white pl-10 pr-30 py-10 flex flex-col gap-y-50 absolute h-full z-10 animate-slide-in`}>
                    <p className="text-3xl self-start">{num}</p>
                    <div className="space-y-4">
                        <h1 className="text-6xl font-bold tracking-tight">{title}</h1>
                        <p className="text-2xl font-light">See Case</p>

                    </div>

                </div>

                <div className="overflow-hidden">
                    <img src={img} alt={alt}
                        className="transition duration-300 ease-in-out hover:scale-110 w-screen object-cover" />
                </div>
            </div>


            ))}
           
           

          



        </section>


        <section className="2xl:p-40 p-10">
            <p className="2xl:text-3xl/14 text-lg/10 text-center font-light">Welcome to <span className="text-teal-900 font-bold">Brand Art and
                    Communications</span>, where
                our creative thinkers works closely with innovative strategy to
                create meaningful designs that capture the cultural nuances of
                your audience and evoke the emotions that inspire action.</p>
        </section>






    </main>
 

      <ContactSection />
    </>
  );
}