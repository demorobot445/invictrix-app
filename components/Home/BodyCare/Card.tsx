import Image from "next/image";
import RoundText from "./RoundText";
import Star from "../Choosing/Star";

type Props = {
  id: number;
  heading: string;
  description: string;
  tag: string;
};

const Card: React.FC<Props> = ({ description, heading, id, tag }) => {
  return (
    <div
      className={`card-${id} absolute top-1/2 left-1/2 grid w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-52 px-10`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-display text-dark text-[5.5rem] leading-[calc(5.5rem*1.2)]">
            №{id}
          </h2>
          <p className="text-dark max-w-40 text-3xl">{tag}</p>
        </div>
        <div className="relative mt-24 h-40 w-40">
          <div
            style={{ animationDuration: "20s" }}
            className="absolute h-full w-full animate-spin"
          >
            <RoundText />
          </div>
          <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
            <Star />
          </div>
        </div>
      </div>
      <div />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="text-dark max-w-52 text-3xl">{heading}</h2>
          <p className="text-dark text-xl">{description}</p>
        </div>
        <div className="mt-12 flex flex-col">
          <Image
            className="rounded-full"
            src="/founder.jpg"
            alt="founder-img"
            height={80}
            width={80}
          />
          <h2 className="text-dark mt-2 text-[1.625rem] leading-[calc(1.625rem*1.2)]">
            Emma Fens
          </h2>
          <p className="text-dark text-xl">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
