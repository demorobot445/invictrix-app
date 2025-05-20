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
      className={`card-${id} absolute top-1/2 left-1/2 grid w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-cols-3 items-center gap-52 px-10`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-display text-dark-primary text-[10rem] leading-[10rem]">
            {romanNumber}
          </h2>
          <p className="font-display max-w-40 text-4xl text-black">{tag}</p>
          <p className="font-display text-xl">{tagDescription}</p>
        </div>
      </div>
      <div />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-xl text-black">{description}</p>
          <button className="text-dark-primary border-dark-primary font-display border-b text-2xl uppercase">
            UNCOVER THE SOURCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
