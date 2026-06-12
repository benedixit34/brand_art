"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`w-full border-b border-gray-100 transition-all duration-300 sticky top-0 z-50 tracking-tighter
          ${isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm" 
            : "bg-white/80 backdrop-blur-md"
          }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img
                src="./img/brand_art_logo.png"
                alt="Brand Logo"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain logo hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-base lg:text-lg font-medium text-gray-700">
              <li>
                <a
                  href="/about"
                  className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  className="hover:text-black transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Insights
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="inline-block bg-teal-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-sm font-medium text-base sm:text-lg transition-all duration-300 hover:bg-teal-800 hover:scale-105 shadow-md"
            >
              Get in Touch 
              <FontAwesomeIcon icon={faEnvelope} className="text-md ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-black" />
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <img
            src="./img/brand_art_logo.png"
            alt="Brand Logo"
            className="h-8 w-auto object-contain"
          />
          <button 
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-6">
          <a
            href="/about"
            onClick={closeMobileMenu}
            className="text-xl font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2 border-b border-gray-50"
          >
            About
          </a>
          <a
            href="/services"
            onClick={closeMobileMenu}
            className="text-xl font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2 border-b border-gray-50"
          >
            Services
          </a>
          <a
            href="/work"
            onClick={closeMobileMenu}
            className="text-xl font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2 border-b border-gray-50"
          >
            Work
          </a>
          <a
            href="/insights"
            onClick={closeMobileMenu}
            className="text-xl font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2 border-b border-gray-50"
          >
            Insights
          </a>
        </nav>

        {/* Mobile CTA Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
          <a
            href="/contact"
            onClick={closeMobileMenu}
            className="w-full px-5 py-4 rounded-sm bg-teal-900 text-white text-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center gap-2 text-center"
          >
            Get in Touch 
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </>
  );
};