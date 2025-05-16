import Image from "next/image";
import Input from "./Input";
import Close from "./Close";
import { useState } from "react";

type Props = {
  handleClose: () => void;
};

const Form: React.FC<Props> = ({ handleClose }) => {
  const [status, setStatus] = useState<string>("");

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Send");
  };

  return (
    <div className="popup-cover pointer-events-none fixed top-1/2 left-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/60 opacity-0">
      <div className="border-primary popup scrollbar relative flex h-[95vh] w-[60%] max-w-[794px] scale-0 flex-col items-center overflow-auto border bg-black p-6">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 h-10 w-10 cursor-pointer"
        >
          <Close />
        </button>
        <Image src="/monogram.png" height={200} width={200} alt="monogram" />
        <div>
          <h1 className="font-display text-center text-2xl font-bold text-white">
            BEGIN WITH INTENTION
          </h1>
          <p className="text-primary font-display text-center font-bold italic">
            This is the beginning of a considered connection
          </p>
        </div>
        <p className="font-display mt-5 text-center font-bold text-white">
          We invite you to respond. If your vision aligns. you will hear from us
          directly.
        </p>
        <form
          onSubmit={handleSumbit}
          className="mt-15 grid w-full grid-cols-2 gap-x-14 gap-y-5"
        >
          <Input
            label="Salutation"
            name="salutation"
            placeholder="Choose how you'd like to be addressed."
          />
          <Input
            label="Current Memberships or Affiliations"
            name="membership-or-affiliations"
            placeholder="Clubs, concierge programs, or/and networks…"
          />
          <Input
            label="Preferred Name"
            name="name"
            placeholder="The name you carry forward. "
          />
          <Input
            label="Family Name"
            name="family-name"
            placeholder="Your inherited or chosen surname."
          />
          <Input
            label="City of Residence"
            name="city-of-residence"
            placeholder="Where does your current chapter unfold? "
          />
          <Input
            label="Your Profession"
            name="your-profession"
            placeholder="How you currently shape the world."
          />
          <Input
            type="email"
            label="Email Address"
            name="email"
            placeholder="For direct correspondence- used only with intention. "
          />
          <div className="row-span-2 flex flex-col">
            <label
              className="font-display font-bold text-white"
              htmlFor={`circle-discover-invictrix`}
            >
              How Did You Discover Invictrix?
            </label>
            <textarea
              rows={4}
              className="border-primary border p-1 placeholder:text-[#7f7f7f]"
              placeholder={"Referral, events, or article mention…"}
              id={`circle-discover-invictrix`}
            />
          </div>
          <Input
            label="Phone Number"
            name="phone-number"
            placeholder="Should we need to connect by voice"
          />

          <div className="col-span-2 flex flex-col">
            <label
              className="font-display font-bold text-white"
              htmlFor={`circle-about`}
            >
              Tell Us About Yourself
            </label>
            <textarea
              rows={6}
              className="border-primary border p-1 placeholder:text-[#7f7f7f]"
              placeholder={
                "Share what brings you here and how Invictrix may support your journey…."
              }
              id={`circle-about`}
            />
          </div>
          {status === "Send" && (
            <p className="text-primary col-span-2 text-center">
              Your responses are held in confidence. We do not share or disclose
              information under any circumstance.
            </p>
          )}
          <button
            type="submit"
            className="font-display col-span-2 mx-auto mt-10 min-h-40 w-56 cursor-pointer rounded-full text-2xl text-white"
          >
            <Image
              className="h-full w-full object-contain"
              src="/buttons/send-for-connection.png"
              height={160}
              width={226}
              alt="button"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
