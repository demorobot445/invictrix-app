import EnterCircle from "@/components/Intention/EnterCircle";
import Inquiries from "@/components/Intention/Inquiries";
import ReceiveIntention from "@/components/Intention/ReceiveIntention";
import Head from "next/head";

export default function TheIntention() {
  return (
    <>
      <Head>
        <title>Invictrix - The Intention</title>
      </Head>
      <main className="w-full bg-black">
        <ReceiveIntention />
        <EnterCircle />
        <Inquiries />
      </main>
    </>
  );
}
