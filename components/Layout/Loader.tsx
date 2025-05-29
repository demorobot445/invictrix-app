import Image from "next/image";
import { BlurLoader } from "../Background/Svgs";

const Loader = () => {
  return (
    <div className="loader fixed z-[999] flex h-full w-full items-center justify-center bg-black">
      <div className="lights absolute bottom-[16%] left-[7%] w-full opacity-0 lg:-bottom-[44%] lg:left-[24%] lg:h-[60vw] lg:w-[60vw]">
        <BlurLoader />
      </div>
      <div className="relative z-10 overflow-hidden">
        <Image
          className="logo w-[50vw] object-contain opacity-0 lg:w-[30vw]"
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
