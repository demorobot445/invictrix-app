import EnterCircle from "@/components/Intention/EnterCircle";
import Inquiries from "@/components/Intention/Inquiries";
import Present from "@/components/Intention/Present";
import ReceiveIntention from "@/components/Intention/ReceiveIntention";
import { useLenis } from "lenis/react";
import Head from "next/head";
import { useEffect } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { IntentionPageData } from "@/types/invictrix";
import { fetchGraphQL } from "@/libs/api";
import { INTENTIONPAGE_QUERY } from "@/libs/queries";

export const getStaticProps = (async () => {
  const data: { intention: IntentionPageData } =
    await fetchGraphQL(INTENTIONPAGE_QUERY);

  return {
    props: {
      data: data.intention,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: IntentionPageData;
}>;

export default function TheIntention({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.start();
  }, [lenis]);

  return (
    <>
      <Head>
        <title>Invictrix - The Intention</title>
      </Head>
      <main className="w-full bg-black">
        <ReceiveIntention {...data.heroSection} />
        <EnterCircle {...data.sectionTwo} />
        <Inquiries {...data.contactSection} />
        <Present {...data.contactSection} />
      </main>
    </>
  );
}
