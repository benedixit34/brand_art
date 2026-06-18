"use client";

import ReactPlayer from "react-player";

type HeroVideoProps = {
  className?: string;
};

export default function HeroVideo({ className = "" }: HeroVideoProps) {
  return (
    <div className={`${className}`}>
      <div className="absolute inset-0">
        <ReactPlayer
          src="https://vimeo.com/1190493402"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            transform: "scale(1.15)",
          }}
          config={{
            vimeo: {
              background: true,
            },
          }}
        />
      </div>
    </div>
  );
}