"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoFiveParts() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    let duration = 0;

    const onLoaded = () => {
      duration = video.duration;

      // Split into 5 equal parts
      const segment = duration / 5;

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress; // 0 → 1

            // map scroll progress to video time
            video.currentTime = progress * duration;
          },
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <section ref={containerRef} className="h-[500vh] relative">
      {/* sticky video */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/showreel.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}