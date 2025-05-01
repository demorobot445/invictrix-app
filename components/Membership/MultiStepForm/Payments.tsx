import CreditCardForm from "./CreditCardForm";

type Props = {
  setIsSecondStep: React.Dispatch<React.SetStateAction<boolean>>;
};

const Payments: React.FC<Props> = ({ setIsSecondStep }) => {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-10">
      <CreditCardForm />
      <div className="flex w-full justify-end gap-2">
        <button
          onClick={() => setIsSecondStep(false)}
          className="border-dark text-dark h-12 w-40 cursor-pointer rounded-full border-2 text-xl uppercase"
        >
          Back
        </button>
        <button
          onClick={() => setIsSecondStep(true)}
          className="bg-dark h-12 w-40 cursor-pointer rounded-full text-xl text-white uppercase"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payments;
