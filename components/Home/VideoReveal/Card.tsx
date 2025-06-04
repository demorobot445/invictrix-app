import { useMultilineText } from "@/hooks/useMultilineText";
import { Essence } from "@/types/invictrix";
import Link from "next/link";

type Props = Essence & { index: number };

const Card: React.FC<Props> = ({ index, leftSide, rightSide }) => {
  const [leftSideTagline, rightSideDesc] = useMultilineText([
    leftSide.tagline,
    rightSide.description,
  ]);

  return (
    <div
      className={`card-${index} absolute top-1/2 left-1/2 flex h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center px-3 pt-[126px] lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-52 lg:px-10 lg:pt-0`}
    >
      <div className="order-2 mb-2 flex w-full flex-col lg:order-1 lg:mb-0">
        <div className="flex flex-col">
          <h2 className="font-display text-dark-primary mt-2 text-center text-8xl lg:text-left lg:text-[10rem] lg:leading-[10rem]">
            {leftSide.romanNumber}
          </h2>
          <p className="font-display mx-auto -mt-4 text-center text-2xl text-black lg:mx-0 lg:mt-0 lg:text-left lg:text-4xl">
            {leftSideTagline}
          </p>
          <p className="font-display text-center text-xl lg:text-left">
            {leftSide.subTagline}
          </p>
        </div>
      </div>
      <div className="order-1 h-[250px] lg:order-2 lg:h-auto" />
      <div className="order-3 flex h-1/3 w-full flex-col lg:h-auto">
        <div className="flex flex-col justify-center gap-4 lg:min-h-[272px] lg:justify-end">
          <p className="text-center text-sm text-black lg:text-left lg:text-xl">
            {rightSideDesc}
          </p>
          {rightSide.buttonActive ? (
            <Link
              href={rightSide.href ? rightSide.href : "/"}
              target="_blank"
              className="text-dark-primary border-dark-primary font-display mx-auto w-fit border-b text-lg uppercase lg:mx-0 lg:text-2xl"
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
