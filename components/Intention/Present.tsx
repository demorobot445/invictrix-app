import { IntentionContactSection } from "@/types/invictrix";
import Image from "next/image";
import Link from "next/link";

type Props = IntentionContactSection & {};

const Present: React.FC<Props> = ({ locations, subHeading }) => {
  return (
    <section className="container mx-auto flex h-screen w-full flex-col items-center justify-center px-3 lg:px-0">
      <div className="z-[70] flex h-fit w-fit flex-col items-center justify-center gap-8 bg-black p-5 lg:p-10">
        <Image
          className="aspect-square object-contain lg:w-[300px]"
          src="/dark-logo.png"
          alt="logo"
          height={500}
          width={500}
        />
        <div className="flex flex-col">
          <p className="mb-2 text-center text-white lg:text-2xl">
            Present in cities that never wait.
          </p>
          <h2 className="font-display text-dark-primary z-40 text-center italic lg:text-2xl">
            {locations}
          </h2>
          <h3 className="font-display z-40 text-center text-white lg:text-2xl">
            {subHeading}
          </h3>
          <div className="flex w-full items-center justify-center py-2">
            <Link
              className="font-display z-40 text-center text-white uppercase underline underline-offset-2"
              href="/"
            >
              begin again
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Present;
