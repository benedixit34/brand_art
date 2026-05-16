"use client"

import { ContactSection } from "@/components/ContactSection"
import HeroVideo from "@/components/HeroPlayer";
import { Scattered } from "@/components/Scattered";


export default function Page() {
  return (
    <>
    <HeroVideo />
    <Scattered />


      <main className=" bg-white">
   

          
     
        <section className="flex flex-col space-y-10 p-10">
            <div className="flex relative isolate group h-180">

                <div
                    className="bg-red-700 w-1/3 text-white pl-10 pr-30 py-10 flex flex-col gap-y-50 absolute h-full z-10 animate-slide-in">
                    <p className="text-3xl self-start">01/03</p>
                    <div className="space-y-4">
                        <h1 className="text-8xl font-bold">AVIS</h1>
                        <p className="text-2xl font-light">See Case</p>

                    </div>

                </div>

                <div className="overflow-hidden">
                    <img src="https://www.starfishco.com/wp-content/uploads/2022/12/Avis-logo.png" alt=""
                        className="transition duration-300 ease-in-out hover:scale-110" />
                </div>
            </div>
            <div className="flex relative isolate group h-180">

                <div
                    className="bg-green-800 text-white w-1/3 pl-10 pr-30 py-10 flex flex-col gap-y-50 absolute h-full z-10 animate-slide-in">
                    <p className="text-3xl self-start">02/03</p>
                    <div className="space-y-4">
                        <h1 className="text-8xl font-bold">Gallup</h1>
                        <p className="text-2xl font-light">See Case</p>

                    </div>

                </div>

                <div className="overflow-hidden">
                    <img src="https://www.starfishco.com/wp-content/uploads/2022/12/gallup-1920x800-1.jpg" alt=""
                        className="transition duration-300 ease-in-out hover:scale-110" />
                </div>
            </div>


            <div className="flex relative isolate group h-180">

                <div
                    className="bg-blue-700 text-white w-1/3 pl-10 pr-30 py-10 flex flex-col gap-y-50 absolute h-full z-10 animate-slide-in">
                    <p className="text-3xl self-start">03/03</p>
                    <div className="space-y-4">
                        <h1 className="text-8xl font-bold">ADL</h1>
                        <p className="text-2xl font-light">See Case</p>

                    </div>

                </div>

                <div className="overflow-hidden">
                    <img src="https://www.starfishco.com/wp-content/uploads/2022/12/Main.jpg" alt=""
                        className="transition duration-300 ease-in-out hover:scale-110" />
                </div>
            </div>



        </section>


        <section className="p-40">
            <p className="text-2xl/12 px-50 text-center font-light">Welcome to <span className="text-green-700">Brand Art and
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