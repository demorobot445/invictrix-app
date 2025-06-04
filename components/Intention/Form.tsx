import Image from "next/image";
import Input from "./Input";
import Close from "./Close";
import { useState } from "react";
import { useFormik } from "formik";
import Status from "./Status";

type Props = {
  handleClose: () => void;
  setStatus: React.Dispatch<
    React.SetStateAction<"Loading" | "Success" | "Error" | undefined>
  >;
  status: "Loading" | "Success" | "Error" | undefined;
};

const Form: React.FC<Props> = ({ handleClose, setStatus, status }) => {
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      salutation: "",
      membershipOrAffiliations: "",
      name: "",
      familyName: "",
      cityOfResidence: "",
      yourProfession: "",
      email: "",
      discoverInvictrix: "",
      number: "",
      about: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        setStatus("Loading");
        setIsButtonDisable(true);
        const response = await fetch("/api/godaddy-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        console.log(response);
        if (response.ok) {
          setStatus("Success");
          setTimeout(() => {
            handleClose();
            resetForm();
            setIsButtonDisable(false);
          }, 2000);
        } else {
          setStatus("Error");
          console.log(response);
        }
      } catch (err) {
        console.error(err);
        setStatus("Error");
      }
    },
  });

  return (
    <div
      data-lenis-prevent
      className="popup-cover pointer-events-none fixed top-1/2 left-1/2 z-[999] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/60 opacity-0"
    >
      <div className="border-primary popup scrollbar relative flex h-[95vh] w-[95%] max-w-[794px] scale-0 flex-col items-center overflow-auto border bg-black p-4 lg:w-[60%] lg:p-6">
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
          onSubmit={formik.handleSubmit}
          className="mt-15 flex w-full flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:gap-y-5"
        >
          <Input
            onChange={formik.handleChange}
            value={formik.values.salutation}
            label="Salutation"
            name="salutation"
            placeholder="Choose how you'd like to be addressed."
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.membershipOrAffiliations}
            label="Current Memberships or Affiliations"
            name="membershipOrAffiliations"
            placeholder="Clubs, concierge programs, or/and networks…"
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            label="Preferred Name"
            name="name"
            placeholder="The name you carry forward. "
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.familyName}
            label="Family Name"
            name="familyName"
            placeholder="Your inherited or chosen surname."
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.cityOfResidence}
            label="City of Residence"
            name="cityOfResidence"
            placeholder="Where does your current chapter unfold? "
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.yourProfession}
            label="Your Profession"
            name="yourProfession"
            placeholder="How you currently shape the world."
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
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
              name="discoverInvictrix"
              onChange={formik.handleChange}
              value={formik.values.discoverInvictrix}
              className="border-primary border p-1 text-white placeholder:text-[#7f7f7f] focus:outline-none"
              placeholder={"Referral, events, or article mention…"}
              id={`circle-discover-invictrix`}
            />
          </div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.number}
            label="Phone Number"
            name="number"
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
              onChange={formik.handleChange}
              value={formik.values.about}
              name="about"
              className="border-primary border p-1 text-white placeholder:text-[#7f7f7f] focus:outline-none"
              placeholder={
                "Share what brings you here and how Invictrix may support your journey…."
              }
              id={`circle-about`}
            />
          </div>
          <Status status={status} />
          <button
            disabled={isButtonDisable}
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
