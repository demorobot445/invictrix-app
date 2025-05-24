import Circle from "@/components/Circle/Circle";
import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type {
  CircleCard,
  CircleContent,
  PartnerContents,
  Partners,
} from "@/types/invictrix";
import { fetchGraphQL } from "@/libs/api";
import {
  CIRCLECARDS_QUERY,
  CIRCLECONTENT_QUERY,
  PARTNERS_QUERY,
  PARTNERCONTENTS_QUERY,
} from "@/libs/queries";

export const getStaticProps = (async () => {
  const cards: { circleCards: CircleCard[] } =
    await fetchGraphQL(CIRCLECARDS_QUERY);

  const contents: { circleContents: CircleContent[] } =
    await fetchGraphQL(CIRCLECONTENT_QUERY);

  const partners: { partners: Partners[] } = await fetchGraphQL(PARTNERS_QUERY);
  const partnerContents: { partnerContents: PartnerContents[] } =
    await fetchGraphQL(PARTNERCONTENTS_QUERY);

  return {
    props: {
      data: {
        cards: cards.circleCards,
        contents: contents.circleContents,
        partners: partners.partners,
        partnerContents: partnerContents.partnerContents,
      },
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: {
    cards: CircleCard[];
    contents: CircleContent[];
    partners: Partners[];
    partnerContents: PartnerContents[];
  };
}>;

export default function TheCircle({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Invictrix - The Circle</title>
      </Head>
      <Circle {...data} />
    </>
  );
}
