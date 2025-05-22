type Props = {
  id: number;
  description: string;
  tag: React.JSX.Element;
  tagDescription: string;
  romanNumber: string;
};

const Card: React.FC<Props> = ({
  description,
  id,
  tag,
  romanNumber,
  tagDescription,
}) => {
  return (
    <div
      className={`card-${id} absolute top-1/2 left-1/2 grid h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-rows-3 items-center px-3 pt-[126px] lg:grid-cols-3 lg:grid-rows-1 lg:gap-52 lg:px-10 lg:pt-0`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-display text-dark-primary mt-2 text-8xl lg:text-[10rem] lg:leading-[10rem]">
            {romanNumber}
          </h2>
          <p className="font-display -mt-4 max-w-40 text-2xl text-black lg:mt-0 lg:text-4xl">
            {tag}
          </p>
          <p className="font-display text-xl">{tagDescription}</p>
        </div>
      </div>
      <div />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black lg:text-xl">{description}</p>
          <button className="text-dark-primary border-dark-primary font-display w-fit border-b text-lg uppercase lg:text-2xl">
            UNCOVER THE SOURCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
