import { BlurHeroOne, BlurHeroThree, BlurHeroTwo } from "./Svgs";

const Background = () => {
  return (
    <div>
      <div className="blur-cover absolute -top-24 -left-24">
        <div className="blur-hero-0 absolute top-0 -left-1/4 h-[794px] w-[990px] opacity-0 2xl:left-0">
          <BlurHeroOne />
        </div>
        <div className="blur-hero-1 absolute top-0 -left-1/4 h-[558px] w-[486px] opacity-0 2xl:left-0">
          <BlurHeroTwo />
        </div>
        <div className="blur-hero-2 absolute top-0 -left-1/4 h-[486px] w-[486px] opacity-0 2xl:left-0">
          <BlurHeroThree />
        </div>
      </div>
    </div>
  );
};

export default Background;
