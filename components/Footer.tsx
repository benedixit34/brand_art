import Image from "next/image";



export const Footer = () => {
  return (
    <>
 


    <footer className="bg-zinc-800 px-10 md:px-16 2xl:p-40 py-20 flex flex-col md:flex-row md:justify-between gap-12">

       
        <div className="space-y-8 md:w-1/4">
            <Image src="/img/brand_art_logo.png" alt="Brand Art Logo" width="500" height="500" className="w-40" />

            <div className="flex gap-5 text-2xl text-white">
                <i className="fa-brands fa-facebook hover:text-zinc-400 cursor-pointer transition"></i>
                <i className="fa-brands fa-instagram hover:text-zinc-400 cursor-pointer transition"></i>
                <i className="fa-brands fa-x-twitter hover:text-zinc-400 cursor-pointer transition"></i>
                <i className="fa-brands fa-linkedin hover:text-zinc-400 cursor-pointer transition"></i>
                <i className="fa-brands fa-pinterest hover:text-zinc-400 cursor-pointer transition"></i>
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

    </footer>
    </>
  );
};
