import MultiStepForm from "@/components/Membership/MultiStepForm/MultiStepForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Invictrix - Membership</title>
      </Head>
      <MultiStepForm />
    </>
  );
}
