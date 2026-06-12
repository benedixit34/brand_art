"use client";

import { ReactNode, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/loader.json";

type LoaderState = "loading" | "exiting" | "done";

type Props = { children: ReactNode };

export default function LoaderWrapper({ children }: Props) {
  const [state, setState] = useState<LoaderState>("loading");

  useEffect(() => {
    let siteReady = false;
    let timerDone = false;

    function tryExit() {
      if (siteReady && timerDone) {
        setState("exiting");
        setTimeout(() => setState("done"), 1800);
      }
    }

    const timer = setTimeout(() => {
      timerDone = true;
      tryExit();
    }, 3000);

    if (document.readyState === "complete") {
      siteReady = true;
      tryExit();
    } else {
      const handleLoad = () => {
        siteReady = true;
        tryExit();
      };
      window.addEventListener("load", handleLoad);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", handleLoad);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  const isVisible = state === "loading";
  const isRendered = state !== "done";

  return (
    <>
      {/* Loader */}
      {isRendered && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white
            transition-all duration-[1200ms]
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className={`
            relative flex flex-col items-center justify-center
            transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isVisible ? "scale-100" : "scale-[0.85]"}
          `}>
            <div className={`
              relative border-4 border-black rounded-2xl p-8 sm:p-10 md:p-12
              transition-all duration-[1200ms]
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-4 bg-black rounded-t-lg" />
              <div className="absolute -top-6 right-6 sm:right-8 w-8 sm:w-10 h-5 sm:h-6 bg-black rounded-t-md flex items-start justify-center pt-1">
                <div className="w-4 sm:w-5 h-3 sm:h-3.5 bg-red-500 rounded-sm" />
              </div>

              <div className={`
                absolute -top-6 left-6 sm:left-8 w-8 sm:w-10 h-4 sm:h-5 bg-black rounded-t-md
                transition-all duration-1000
                ${!isVisible ? "brightness-[3]" : "brightness-100"}
              `}>
                <div className={`
                  w-full h-full bg-yellow-300 rounded-t-md transition-all duration-[800ms]
                  ${!isVisible ? "opacity-100 scale-110" : "opacity-0 scale-100"}
                `} />
              </div>

              <div className={`
                relative rounded-full border-[6px] sm:border-8 border-black p-3 sm:p-4
                transition-all duration-[1200ms]
                ${isVisible ? "scale-100 rotate-0" : "scale-[0.7] rotate-12"}
              `}>
                <div className={`absolute inset-1 rounded-full border-2 border-gray-300 transition-all duration-[1200ms] ${isVisible ? "opacity-100" : "opacity-0"}`} />
                <div className={`absolute inset-3 rounded-full border border-gray-400 transition-all duration-[1200ms] ${isVisible ? "opacity-100" : "opacity-0"}`} />

                <div className={`
                  relative rounded-full overflow-hidden
                  w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] xl:w-[400px] xl:h-[400px]
                  transition-all duration-[1200ms]
                  ${isVisible ? "bg-black" : "bg-white"}
                `}>
                  <div className={`absolute top-3 left-3 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/20 to-transparent transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} />
                  <div className={`absolute bottom-4 right-4 w-1/4 h-1/4 rounded-full bg-gradient-to-tl from-white/10 to-transparent transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} />

                  <div className={`w-full h-full flex items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-150"}`}>
                    <Lottie
                      animationData={animationData}
                      loop
                      className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px] xl:w-[320px]"
                    />
                  </div>

                  <div className={`absolute top-3 right-3 flex items-center gap-1.5 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white text-[10px] sm:text-xs font-mono tracking-wider">REC</span>
                  </div>

                  <div
                    className={`absolute inset-0 bg-black transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? "scale-y-0" : "scale-y-100"}`}
                    style={{ transformOrigin: "center" }}
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-2 sm:h-3 bg-black rounded-b-lg" />
            </div>

            <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-16 sm:h-20 bg-gray-900 rounded-full transition-all duration-[1200ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`} />

            <p className={`mt-8 text-black font-light uppercase tracking-[0.25em] text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              LOADING BRAND ART
            </p>
          </div>
        </div>
      )}

      {/* Scene reveal */}
      {state === "done" ? children : (
        <div
          className={`will-change-transform transition-all duration-[1500ms]
            ${state === "exiting"
              ? "opacity-100 translate-y-0 scale-100 blur-0 brightness-100 saturate-100"
              : "opacity-0 -translate-y-6 scale-[0.97] blur-sm brightness-75 saturate-0"
            }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "400ms",
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}