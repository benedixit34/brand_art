"use client";

import ReactPlayer from "react-player";

export default function HeroVideo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
       <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[177.78vh] h-[56.25vw]
          min-w-full min-h-full
        "
      >
      <ReactPlayer
        src="https://vimeo.com/1190493402"
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
        config={{
          vimeo: {
            background: true,
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />
      </div>
    </div>
  );
}