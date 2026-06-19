"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-zinc-800 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-40 py-12 sm:py-16 md:py-20">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
          
          {/* Brand Section */}
          <div className="lg:w-1/3 xl:w-1/4 space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-yellow-500">
              BrandArt
            </h1>
            
            <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
              We are Art. We are Culture.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl text-white justify-center lg:justify-start">
              <a 
                href="#" 
                className="hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="#" 
                className="hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="Pinterest"
              >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>

   
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-6 xl:gap-10">
              
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-yellow-500 relative inline-block sm:inline-block">
                  About
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500 hidden sm:block"></span>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      What We Do
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Our Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-yellow-500 relative inline-block sm:inline-block">
                  Services
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500 hidden sm:block"></span>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Creative Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Branding/Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Advertising Production
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>

      
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-yellow-500 relative inline-block sm:inline-block">
                  Let's Talk
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500 hidden sm:block"></span>
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Hire Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      General Inquiry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-40 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-sm sm:text-base text-gray-400">
              © Brand Art Communications {new Date().getFullYear()}. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};