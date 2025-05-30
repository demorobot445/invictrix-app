import { HomeSectionThree } from "@/types/invictrix";
import { useRef } from "react";

type Props = HomeSectionThree & {};

const About: React.FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <section className="about-section relative z-30 container mx-auto mt-24 flex flex-col px-3 pb-24 lg:px-0">
      <div className="relative mb-12">
        <video
          ref={videoRef}
          className="about-video h-[580px] w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={video.url} />
        </video>
        <button
          onClick={handleClick}
          className="text-dark absolute top-1/2 left-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[url('/about/valvet.jpg')] bg-cover bg-center bg-no-repeat text-sm uppercase"
        >
          watch !
        </button>
      </div>
      <div className="flex w-full"></div>
    </section>
  );
};

export default About;
