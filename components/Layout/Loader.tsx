import Image from "next/image";
import { BlurHeroThree } from "../Background/Svgs";

const Loader = () => {
  return (
    <div className="loader fixed z-50 flex h-full w-full items-center justify-center bg-black">
      <div className="lights absolute top-1/2 left-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 opacity-0">
        <BlurHeroThree />
      </div>
      <div className="overflow-hidden">
        <Image
          className="logo w-[30vw] translate-y-full object-contain"
          src="/dark-logo.png"
          alt="logo"
          height={1080}
          width={1080}
        />
      </div>
    </div>
  );
};

export default Loader;
