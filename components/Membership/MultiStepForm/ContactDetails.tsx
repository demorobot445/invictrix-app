import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import ProfileUpload from "./ProfileUpload";

type Props = {
  setIsSecondStep: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactDetails: React.FC<Props> = ({ setIsSecondStep }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col gap-10">
      <ProfileUpload />
      <div className="flex gap-4">
        <input
          className="border-dark w-1/2 border-b-2 p-2 text-lg focus:outline-none"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="border-dark w-1/2 border-b-2 p-2 text-lg focus:outline-none"
          type="text"
          placeholder="Second Name"
        />
      </div>
      <input
        className="border-dark border-b-2 p-2 text-lg focus:outline-none"
        type="email"
        placeholder="Email*"
      />
      <input
        className="border-dark border-b-2 p-2 text-lg focus:outline-none"
        type="text"
        placeholder="Address*"
      />
      <div className="flex gap-4">
        <input
          className="border-dark w-1/2 border-b-2 p-2 text-lg focus:outline-none"
          type="text"
          placeholder="Appartment, suit, etc"
        />
        <input
          className="border-dark w-1/2 border-b-2 p-2 text-lg focus:outline-none"
          type="text"
          placeholder="ZIP / Postal Code"
        />
      </div>
      <input
        className="border-dark border-b-2 p-2 text-lg focus:outline-none"
        type="text"
        placeholder="Country*"
      />
      <input
        className="border-dark border-b-2 p-2 text-lg focus:outline-none"
        type="text"
        placeholder="How did you hear about us"
      />
      <textarea
        className="border-dark border-b-2 p-2 text-lg focus:outline-none"
        name="message"
        rows={5}
        placeholder="Let us know how we help you..."
      ></textarea>
      <CustomCheckbox
        label="I confirm that I have read and agree with Terms & Conditions and Privacy Policy*"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <button
        onClick={() => setIsSecondStep(true)}
        className="bg-dark ml-auto h-12 w-40 cursor-pointer rounded-full text-xl text-white uppercase"
      >
        Next
      </button>
    </div>
  );
};

export default ContactDetails;
