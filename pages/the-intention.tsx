import EnterCircle from "@/components/Intention/EnterCircle";
import Inquiries from "@/components/Intention/Inquiries";
import Present from "@/components/Intention/Present";
import ReceiveIntention from "@/components/Intention/ReceiveIntention";
import { useLenis } from "lenis/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function TheIntention() {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.start();
  }, []);

  return (
    <>
      <Head>
        <title>Invictrix - The Intention</title>
      </Head>
      <main className="w-full bg-black">
        <ReceiveIntention />
        <EnterCircle />
        <Inquiries />
        <Present />
      </main>
    </>
  );
}
