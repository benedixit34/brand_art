
import ReactPlayer from "react-player";

export const ServiceSection= () => {
  return (
    <>
         <div className="grid lg:grid-cols-2 2xl:px-20 lg:py-40 p-4 2xl:gap-x-40 gap-10">
        <div className="grid grid-cols-1 gap-y-40">
            <div className="grid grid-rows-2 min-h-[70vh]">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                        <h1 className="block md:hidden text-white text-9xl font-bold">1</h1>
                        <h1 className="lg:text-4xl text-3xl p-6 tracking-tight font-bold">Brand Strategy</h1>
                    </div>
                    <div className="flex items-center justify-center md:block hidden">
                        <h1 className="2xl:text-[12em] text-9xl text-teal-900 font-bold text-center">1</h1>
                    </div>


                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:block">

                    </div>
                    <div
                        className="flex 2xl:text-xl/10 text-md/8 border-[0.2px] border-teal-900 p-6 justify-self-center text-black font-light items-end">
                        <p className="text-teal-900">Defining your brand’s soul; its truth, tone, values, and position in the world.</p>

                    </div>
                </div>

            </div>

            <div className="grid grid-rows-2 min-h-[70vh]">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                        <h1 className="block md:hidden text-white text-9xl">2</h1>
                        <h1 className="2xl:text-4xl text-3xl p-6 tracking-tighter">Creative Concept Development</h1>
                    </div>

                    <div className="flex items-center justify-center md:block hidden">
                        <h1 className="2xl:text-[12em] text-9xl text-black text-center">2</h1>
                    </div>


                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="md:block hidden">

                    </div>
                    <div
                        className="flex 2xl:text-xl/10 text-lg/8 border-[0.2px] border-black p-6 justify-self-center text-black font-light items-end">
                        <p>Big, bold, beautiful ideas. We craft campaignable concepts rooted in insight and driven by
                            emotion, built to work across platforms, screens, and spaces.</p>

                    </div>
                </div>

            </div>


            <div className="grid grid-rows-2 min-h-[70vh]">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                        <h1 className="block md:hidden text-white text-9xl">3</h1>
                        <h1 className="2xl:text-4xl text-3xl p-6 tracking-tighter">Logo & Visual Identity</h1>
                    </div>

                    <div className="flex items-center justify-center md:block hidden">
                        <h1 className="2xl:text-[12em] text-9xl text-black text-center">3</h1>
                    </div>


                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:block">

                    </div>
                    <div
                        className="flex items-end 2xl:text-xl/10 text-lg/8 border-[0.2px] border-black p-6 justify-self-center text-black font-light">
                        <p>More than just a logo, this is how your brand looks, feels, and flexes. We design distinctive
                            visual systems that set the tone and leave a mark.</p>

                    </div>
                </div>

            </div>

            <div className="grid grid-rows-2 min-h-[70vh]">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                        <h1 className="block md:hidden text-white text-9xl">4</h1>
                        <h1 className="2xl:text-4xl text-3xl p-6 tracking-tighter">Brand Communications</h1>
                    </div>

                    <div className="flex items-center justify-center md:block hidden">
                        <h1 className="2xl:text-[12em] text-9xl text-black text-center">4</h1>
                    </div>


                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:block">

                    </div>
                    <div
                        className="flex items-end 2xl:text-xl/10 text-lg/8 border-[0.2px] border-black p-6 justify-self-center text-black font-light">
                        <p>From voice and messaging to campaign storytelling, we help you speak in a way that connects
                            consistently and powerfully.</p>

                    </div>
                </div>

            </div>

            <div className="grid grid-rows-2 min-h-[70vh]">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex items-end bg-teal-900 text-white h-full w-full p-6">
                        <h1 className="block md:hidden text-white text-9xl">5</h1>
                        <h1 className="2xl:text-4xl text-3xl p-6 tracking-tighter">Experience Design</h1>
                    </div>

                    <div className="flex items-center justify-center md:block hidden">
                        <h1 className="2xl:text-[12em] text-9xl text-black text-center">5</h1>
                    </div>


                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="hidden md:block">

                    </div>
                    <div
                        className="flex items-end 2xl:text-xl/10 text-lg/8 border-[0.2px] border-black p-6 justify-self-center text-black font-light">
                        <p>We create meaningful brand interactions online, offline, and in real life. Because great
                            branding isn’t just what people see; it’s what they experience.</p>

                    </div>
                </div>

            </div>

        </div>



            <div className="sticky top-20 h-screen">
      <div className="relative aspect-square w-full max-w-[700px] overflow-hidden">
        <div className="absolute inset-0 scale-[1.8]">
        <ReactPlayer
          src="https://vimeo.com/1190493402"
          playing
          muted
          loop
          playsInline
          width="100%"
          height="100%"
          className="!w-full !h-full [&_video]:object-cover"
        />
        </div>
      </div>
    </div>
    </div>


    </>
  );
};
