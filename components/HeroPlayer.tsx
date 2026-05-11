import ReactPlayer from "react-player";

export default function HeroVideo() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <ReactPlayer
        src="https://vimeo.com/1190493402"
        playing
        muted
        loop
        controls={false}
        width="100vw"
        height="56.25vw"
        config={{
          vimeo: {
            background: true,
          },
        }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover"
          }}
      />
    </div>
  );
}
