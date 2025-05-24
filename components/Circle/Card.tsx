import { CircleCard } from "@/types/invictrix";
import { useRef } from "react";

type Props = CircleCard & {
  index: number;
  handleContent: (index: number) => void;
};

const Card: React.FC<Props> = ({
  closeLine,
  description,
  heading,
  id,
  index,
  romanNumber,
  subHeading,
  video,
  handleContent,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      onClick={() => {
        handleContent(index);
        videoRef.current!.play();
      }}
      className={`absolute inset-0 cursor-pointer flex-col items-center justify-center px-3 lg:px-0 scroll-card-${index} flex h-full min-w-screen items-center justify-center perspective-midrange`}
      key={id}
    >
      <div
        className={`scroll-card-img-${index} flex flex-col items-center justify-center`}
      >
        <h1
          className={`scroll-content-${index} text-dark-primary font-display text-6xl uppercase opacity-0`}
        >
          {heading}
        </h1>
        <p
          className={`scroll-content-${index} font-display -mt-2 mb-4 text-xs text-black opacity-0 lg:text-base`}
        >
          {subHeading}
        </p>
        <div className="relative flex items-center justify-center">
          <p
            className={`scroll-roman-${index} font-display absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-9xl text-white`}
          >
            {romanNumber}
          </p>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className={`aspect-video w-full object-cover lg:w-[40%]`}
            src={video.url}
          />
        </div>
        <p
          className={`scroll-content-${index} mt-4 min-h-[100px] text-center text-sm text-black opacity-0 lg:max-w-1/2 lg:text-base`}
        >
          {description}
        </p>
        <p
          className={`scroll-content-${index} text-dark-primary font-display mt-4 opacity-0 lg:text-2xl`}
        >
          {closeLine}
        </p>
      </div>
    </div>
  );
};

export default Card;
