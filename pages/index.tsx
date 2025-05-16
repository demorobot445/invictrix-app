import Background from "@/components/Background/Background";
import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import VideoReveal from "@/components/Home/VideoReveal/VideoReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useRef } from "react";

export default function Home({
  headerRef,
}: {
  headerRef: React.RefObject<HTMLDivElement>;
}) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      const children = Array.from(
        headerRef.current.children[1].children[0].children,
      );

      const matchingElements = children.filter((child) =>
        child.classList.contains("text-white"),
      );

      if (matchingElements.length > 1) {
        const animation = gsap
          .timeline({ defaults: { duration: 0.3 } })
          .to(container.current, { backgroundColor: "#f4f4f4" })
          .to(headerRef.current, { backgroundColor: "#f4f4f4" }, "<")
          .to(headerRef.current.children[0], { filter: "invert(0)" }, "<")
          .to(matchingElements[0], { color: "#000000" }, "<")
          .to(matchingElements[1], { color: "#000000" }, "<")
          .to(".hero-heading", { color: "#000000" }, "<");

        ScrollTrigger.create({
          toggleActions: "play none none reverse",
          animation,
        });
      }
    },
    { scope: container, dependencies: [headerRef] },
  );

  return (
    <>
      <Head>
        <title>Invictrix</title>
      </Head>
      <main ref={container} className="relative bg-black">
        <Background />
        <Hero />
        <About />
        <VideoReveal />
      </main>
    </>
  );
}
