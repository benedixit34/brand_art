"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full border-b border-gray-100 transition-all duration-300 sticky top-0 z-50 tracking-tighter
          ${
            isScrolled
              ? "bg-zinc-800/80 backdrop-blur-md shadow-sm"
              : "bg-zinc-800 backdrop-blur-md"
          }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-34 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <Image
                src="/img/brand_art_logo.png"
                alt="Brand Logo"
                width={500}
                height={500}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain logo hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            className="flex flex-row gap-x-2 items-center justify-center h-10 px-2 rounded-lg transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
          >
            <div className="flex flex-col gap-[10px] justify-center items-end">
              <span
                className={`h-[3px] bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen
                    ? "w-8 rotate-45 translate-y-[6.5px]"
                    : "w-12 group-hover:w-8"
                }`}
              ></span>
              <span
                className={`w-12 h-[3px] bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-[3px] bg-yellow-500 transition-all duration-300 ${
                  isMenuOpen
                    ? "w-8 -rotate-45 -translate-y-[6.5px]"
                    : "w-8 group-hover:w-6"
                }`}
              ></span>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-yellow-500 group-hover:text-neutral-400 transition-colors duration-200">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Slide-out panel */}
      <div
        id="mobile-nav-panel"
    className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
           <Image
                src="/img/brand_art_logo.png"
                alt="Brand Logo"
                width={500}
                height={500}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain logo hover:opacity-80 transition-opacity duration-200"
              />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex flex-col justify-center items-center w-5 h-5 relative">
              <span className="absolute w-5 h-[2px] bg-black rotate-45"></span>
              <span className="absolute w-5 h-[2px] bg-black -rotate-45"></span>
            </div>
          </button>
        </div>

        <nav className="flex flex-col items-center h-full pt-30 gap-4 sm:gap-5 px-6 py-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-6 space-y-6 text-7xl uppercase font-bold tracking-tighter text-gray-700">
          <a
            href="/about"
            onClick={closeMenu}
            className="transition-colors duration-200 py-2 border-b border-gray-50 hover:text-black"
          >
            About
          </a>
          <a
            href="/services"
            onClick={closeMenu}
            className="transition-colors duration-200 py-2 border-b border-gray-50 hover:text-black"
          >
            Services
          </a>
          <a
            href="/work"
            onClick={closeMenu}
            className="transition-colors duration-200 py-2 border-b border-gray-50 hover:text-black"
          >
            Work
          </a>
          <a
            href="/insights"
            onClick={closeMenu}
            className="transition-colors duration-200 py-2 border-b border-gray-50 hover:text-black"
          >
            Insights
          </a>

            <a
            href="/contact"
            onClick={closeMenu}
            className="transition-colors duration-200 py-2 border-b border-gray-50 hover:text-black"
          >
            Contact
          </a>
        </nav>

     
      </div>
    </>
  );
};