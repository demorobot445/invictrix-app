import Head from "next/head";

export default function Press() {
  return (
    <>
      <Head>
        <title>Invictrix - Press</title>
      </Head>
      <section className="container mx-auto flex w-full flex-col py-24">
        <div className="max-w-[75%]">
          <h1 className="text-dark font-display mb-16 text-8xl uppercase">
            Press
          </h1>
          <div className="text-dark flex flex-col text-lg">
            <p className="mt-4">
              At Invictrix, we&apos;re not just building cutting-edge
              technology—we&apos;re shaping the future. Here&apos;s a look at
              our latest press coverage, milestones, and media highlights.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Latest News</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  April 18, 2025 - Invictrix Raises $20M Series A to Scale AI
                  Infrastructure
                </h3>
                <p className="mt-2">
                  Led by Aurora Capital, this new round will help us expand our
                  decentralized compute network across North America and Europe.
                  The funding will also support product development and team
                  growth in AI and edge computing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  March 10, 2025 - Invictrix Joins Forces with NeoCompute
                </h3>
                <p className="mt-2">
                  We&apos;re excited to announce our strategic partnership with
                  NeoCompute to enhance secure, scalable data solutions for
                  enterprise AI workloads.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  February 1, 2025 - Featured in Forbes: &quot;Top 20 Startups
                  to Watch in 2025&quot;
                </h3>
                <p className="mt-2">
                  Forbes highlights Invictrix as a leading innovator in the
                  infrastructure-as-a-service space, pointing to our mission to
                  democratize access to high-performance compute.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  January 15, 2025 - New Headquarters in San Francisco
                </h3>
                <p className="mt-2">
                  We&apos;ve officially opened our new HQ in San Francisco,
                  designed to foster innovation and collaboration among our
                  growing team.
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold">In the Media</h2>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                “Invictrix is rewriting the rules of cloud infrastructure.” —{" "}
                <em>TechCrunch</em>, April 2025
              </li>
              <li>
                “With its distributed compute model, Invictrix is poised to
                disrupt the centralized cloud.” — <em>WIRED</em>, March 2025
              </li>
              <li>
                “A startup that truly understands the future of AI
                infrastructure.” — <em>The Verge</em>, February 2025
              </li>
              <li>
                “Invictrix brings enterprise-grade performance to the edge.” —{" "}
                <em>Bloomberg Tech</em>, January 2025
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Media Kit</h2>
            <p className="mt-4">
              Need logos, leadership bios, product screenshots, or fact sheets?
              Download our full media kit for everything you need.
            </p>
            <p className="mt-2">
              <a href="#" className="text-primary underline">
                Download Media Kit (ZIP)
              </a>
            </p>

            <h2 className="mt-12 text-2xl font-bold">Contact Our Press Team</h2>
            <p className="mt-4">
              For interviews, media requests, or speaking opportunities, reach
              out to our communications team.
            </p>
            <p className="mt-2">Email: press@invictrix.com</p>
            <p className="mt-1">Phone: (123) 456-7890</p>
            <p className="mt-1">
              Address: 1234 Mission St, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
