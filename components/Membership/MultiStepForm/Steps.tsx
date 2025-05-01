type Props = {
  isSecondStep: boolean;
};

const Steps: React.FC<Props> = ({ isSecondStep }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="border-dark bg-primary flex h-24 w-24 min-w-24 items-center justify-center rounded-full border-2">
          <h1 className="text-dark text-4xl font-bold">01</h1>
        </div>
        <p className="text-center text-sm">Contact Detail</p>
      </div>
      <div className="bg-dark mb-8 h-0.5 w-24"></div>
      <div className="flex flex-col gap-2">
        <div
          className={`border-dark ${isSecondStep ? "bg-primary" : "bg-transparent"} flex h-24 w-24 min-w-24 items-center justify-center rounded-full border-2`}
        >
          <h1 className="text-dark text-4xl font-bold">02</h1>
        </div>
        <p className="text-center text-sm">Payments</p>
      </div>
    </div>
  );
};

export default Steps;
