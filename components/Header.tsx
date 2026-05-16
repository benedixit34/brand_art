import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


export const Header = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 tracking-tighter">
      <div className="mx-auto flex items-center place-content-between px-6 md:px-12 py-4">

     
        <div className="flex items-center">
          <img
            src="./img/brand_art_logo.png"
            alt="Brand Logo"
            className="lg:h-20 h-10 w-auto object--contain"
          />
        </div>

   
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-lg font-medium text-gray-700">
      
            <li>
              <a
                href="/about"
                className="hover:text-black transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-black transition-colors duration-200"
              >
                Services
              </a>
            </li>


              <li>
              <a
                href="/services"
                className="hover:text-black transition-colors duration-200"
              >
                Work
              </a>
            </li>

               <li>
              <a
                href="/services"
                className="hover:text-black transition-colors duration-200"
              >
                Insights
              </a>
            </li>
          </ul>
        </nav>


        <div className="hidden md:block">
          <a
            href="/contact"
            className="px-5 py-4 rounded-sm bg-black text-white text-lg hover:bg-gray-800 transition"
          >
            Get in Touch <span className="pl-2"><FontAwesomeIcon icon={faEnvelope} /></span>
          </a>
        </div>

        {/* Mobile Menu Button (placeholder) */}
        <button className="md:hidden flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

      </div>
    </header>
  );
};