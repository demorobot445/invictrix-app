import { HomeSectionThree } from "@/types/invictrix";
import { useEffect, useRef } from "react";

type Props = HomeSectionThree & {};

const About: React.FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.play();

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen().catch((err) => {
        console.error("Fullscreen request failed:", err);
      });
    } else if ((videoElement as any).webkitEnterFullscreen) {
      (videoElement as any).webkitEnterFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) {
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).mozRequestFullScreen) {
      (videoElement as any).mozRequestFullScreen();
    } else if ((videoElement as any).msRequestFullscreen) {
      (videoElement as any).msRequestFullscreen();
    } else {
      console.warn("Fullscreen API not supported on this device.");
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      if (!isFullscreen && videoElement) {
        videoElement.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange,
      );
    };
  }, []);

  return (
    <section className="about-section relative z-30 container mx-auto mt-24 flex flex-col px-3 pb-24 lg:px-0">
      <div className="relative mb-12">
        <video
          ref={videoRef}
          className="about-video h-[580px] w-full object-cover"
          poster="/video-poster.png"
        >
          <source src={video.url} />
        </video>
        <button
          onClick={handleClick}
          className="text-dark absolute top-1/2 left-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[url('/about/valvet.jpg')] bg-cover bg-center bg-no-repeat text-sm uppercase invert-100"
        >
          watch!
        </button>
      </div>
      <div className="flex w-full"></div>
    </section>
  );
};

export default About;
