import Image from "next/image";



export const ContactSection = () => {
  return (
    <>
       <section className="2xl:p-40 xl:px-20 px-10 py-20 bg-yellow-400 space-y-4">
        <p className="text-2xl">CONTACT</p>

        <a className="2xl:text-8xl xl:text-6xl text-5xl font-bold tracking-tighter flex">Let's Talk Art
            <span className="place-self-end"><Image src="/img/arrow.svg" alt="arrow_icon" width="500"
            height="500" className="xl:w-20 w-10" /></span></a>
    </section>




    </>
  );
};
