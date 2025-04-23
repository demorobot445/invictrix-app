import { BlurHeroOne, BlurHeroThree, BlurHeroTwo } from "./Svgs";

const BodyCareBackground = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="blur-hero-0 absolute top-1/2 left-1/2 h-[794px] w-[990px] -translate-x-1/2 -translate-y-1/2">
        <BlurHeroOne />
      </div>
      <div className="blur-hero-1 absolute top-1/2 left-1/2 h-[558px] w-[486px] -translate-x-1/2 -translate-y-1/2">
        <BlurHeroTwo />
      </div>
      <div className="blur-hero-2 absolute top-1/2 left-0 h-[486px] w-[486px] -translate-x-[100%] -translate-y-1/2">
        <BlurHeroThree />
      </div>
    </div>
  );
};

export default BodyCareBackground;
