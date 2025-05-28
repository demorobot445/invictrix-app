import { IntentionContactSection } from "@/types/invictrix";
import Link from "next/link";

type Props = IntentionContactSection & {};

const Present: React.FC<Props> = ({ locations, subHeading }) => {
  return (
    <section className="container mx-auto flex h-screen w-full flex-col px-3 lg:px-0">
      <div className="mt-auto flex flex-col">
        <h2 className="font-display text-dark-primary z-40 text-center lg:text-2xl">
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
    </section>
  );
};

export default Present;
