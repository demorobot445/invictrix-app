import { useState } from "react";
import ContactDetails from "./ContactDetails";
import Steps from "./Steps";
import Payments from "./Payments";

const MultiStepForm = () => {
  const [isSecondStep, setIsSecondStep] = useState<boolean>(false);

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-10 py-24">
      <h1 className="font-display text-dark text-center text-6xl">
        Apply for Membership
      </h1>
      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full">
          <Steps isSecondStep={isSecondStep} />
        </div>
        {isSecondStep ? (
          <Payments setIsSecondStep={setIsSecondStep} />
        ) : (
          <ContactDetails setIsSecondStep={setIsSecondStep} />
        )}
      </div>
    </section>
  );
};

export default MultiStepForm;
