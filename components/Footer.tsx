import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <>
 


    <footer className="bg-zinc-800 px-10 md:px-16 2xl:px-40 py-20 flex flex-col gap-y-20 text-white">

       <section className="flex flex-col md:flex-row md:justify-between gap-12 ">
        <div className="space-y-8 md:w-1/4">
            <Image src="/img/brand_art_logo.png" alt="Brand Art Logo" width="500" height="500" className="w-40 logo" />

            <div className="flex gap-5 text-2xl text-white">
               <FontAwesomeIcon icon={faFacebook} />
               <FontAwesomeIcon icon={faInstagram} />
               <FontAwesomeIcon icon={faXTwitter} />
               <FontAwesomeIcon icon={faLinkedin} />
               <FontAwesomeIcon icon={faPinterest} />
            </div>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 xl:gap-6 gap-10 w-full md:w-2/3 font-light">

         
            <ul className="space-y-4 md:block hidden">
                <li className="torn-paper font-bold text-lg text-center">Home</li>
            </ul>

     
            <ul className="space-y-4">
                <li className="torn-paper font-bold text-lg text-center">About</li>
                <li><a href="#" className="footer-link">Who We Are</a></li>
                <li><a href="#" className="footer-link">What We Do</a></li>
                <li><a href="#" className="footer-link">Our Service</a></li>
            </ul>

            
            <ul className="space-y-4">
                <li className="torn-paper font-bold text-lg text-center">Services</li>
                <li><a href="#" className="footer-link">Creative Development</a></li>
                <li><a href="#" className="footer-link">Branding/Strategy</a></li>
                <li><a href="#" className="footer-link">Advertising Print Production</a></li>
            </ul>

        
            <ul className="space-y-4">
                <li className="torn-paper font-bold text-lg text-center">Let's Talk</li>
                <li><a href="#" className="footer-link">Hire Us</a></li>
                <li><a href="#" className="footer-link">Partner With Us</a></li>
                <li><a href="#" className="footer-link">General Inquiry</a></li>
            </ul>

        </div>

       </section>
       <section className="flex place-content-between border-t-[0.5px] border-white pt-10 font-light">
        <div>
            <p className="text-lg">Copyright. Brand Art Communications 2026</p>
        </div>

       </section>
        

    </footer>
    </>
  );
};
