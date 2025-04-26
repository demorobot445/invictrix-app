import Head from "next/head";

export default function TermAndCondition() {
  return (
    <>
      <Head>
        <title>Invictrix - Term And Condition</title>
      </Head>
      <section className="container mx-auto flex w-full flex-col py-24">
        <div className="max-w-[75%]">
          <h1 className="text-dark font-display mb-16 text-8xl uppercase">
            Term And Condition
          </h1>
          <div className="flex flex-col">
            <p className="text-dark mt-4 text-lg">Welcome to Invictrix!</p>
            <p className="text-dark mt-4 text-lg">
              These terms and conditions outline the rules and regulations for
              the use of Company Name&apos;s Website, located at Website.com.
            </p>
            <p className="text-dark mt-4 text-lg">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Invictrix if you do not agree
              to take all of the terms and conditions stated on this page.
            </p>
            <p className="text-dark mt-4 text-lg">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              “Client”, “You” and “Your” refers to you, the person log on this
              website and compliant to the Company&apos;s terms and conditions.
              “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
              Company. “Party”, “Parties”, or “Us”, refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client&apos;s needs in respect of
              provision of the Company&apos;s stated services, in accordance
              with and subject to, prevailing law of Netherlands. Any use of the
              above terminology or other words in the singular, plural,
              capitalization and/or he/she or they, are taken as interchangeable
              and therefore as referring to same.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
