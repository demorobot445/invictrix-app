type Props = {
  id: number;
  description: string;
  tag: string;
  romanNumber: string;
};

const Card: React.FC<Props> = ({ description, id, tag, romanNumber }) => {
  return (
    <div
      className={`card-${id} absolute top-1/2 left-1/2 grid w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-52 px-10`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-display text-primary text-[6rem] leading-[6rem]">
            {romanNumber}
          </h2>
          <p className="text-dark font-display max-w-40 text-3xl">{tag}</p>
        </div>
      </div>
      <div />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-dark text-xl">{description}</p>
          <button className="text-primary border-primary font-display border-b text-2xl uppercase">
            Discover the process
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
