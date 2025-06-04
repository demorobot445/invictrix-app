import { IntentionContactSection } from "@/types/invictrix";
import Image from "next/image";
import Link from "next/link";
import { BlurLoader } from "../Background/Svgs";

type Props = IntentionContactSection & {};

const Present: React.FC<Props> = ({ locations, subHeading }) => {
  return (
    <section className="relative container mx-auto flex h-screen w-full flex-col items-center justify-center px-3 lg:px-0">
      <div className="z-[70] flex h-fit w-fit flex-col items-center justify-center gap-8 bg-black p-5 lg:p-10">
        <div className="relative h-fit w-fit">
          <div className="absolute -bottom-18 left-[10%] w-full scale-150 opacity-50">
            <BlurLoader />
          </div>
          <Image
            className="relative z-20 aspect-square object-contain lg:w-[300px]"
            src="/dark-logo.png"
            alt="logo"
            height={500}
            width={500}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-dark-primary font-display mb-2 text-center lg:text-4xl">
            Present in cities that never wait.
          </p>
          <h2 className="z-40 mb-2 text-center text-white lg:text-2xl">
            {locations}
          </h2>
          <h3 className="font-display z-40 text-center text-white lg:text-2xl">
            {subHeading}
          </h3>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center py-2">
        <Link
          className="font-display z-40 text-center text-white uppercase underline underline-offset-2"
          href="/"
        >
          begin again
        </Link>
      </div>
    </section>
  );
};

export default Present;
