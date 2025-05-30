import { Essence } from "@/types/invictrix";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = Essence & { index: number };

const Card: React.FC<Props> = ({ index, leftSide, rightSide }) => {
  return (
    <div
      className={`card-${index} absolute top-1/2 left-1/2 grid h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-rows-3 items-center px-3 pt-[126px] lg:grid-cols-3 lg:grid-rows-1 lg:gap-52 lg:px-10 lg:pt-0`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-display text-dark-primary mt-2 text-8xl lg:text-[10rem] lg:leading-[10rem]">
            {leftSide.romanNumber}
          </h2>
          <p className="font-display -mt-4 max-w-[142px] text-2xl text-black lg:mt-0 lg:max-w-[213px] lg:text-4xl">
            {leftSide.tagline}
          </p>
          <p className="font-display text-xl">{leftSide.subTagline}</p>
        </div>
      </div>
      <div />
      <div className="flex flex-col">
        <div className="flex flex-col justify-center gap-4 lg:min-h-[272px] lg:justify-end">
          <p className="text-sm text-black lg:text-xl">
            {rightSide.description}
          </p>
          {rightSide.buttonActive ? (
            <Link
              href={rightSide.href ? rightSide.href : "/"}
              target="_blank"
              className="text-dark-primary border-dark-primary font-display w-fit border-b text-lg uppercase lg:text-2xl"
            >
              {rightSide.button}
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
