import Background from "@/components/Background/Background";
import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import VideoReveal from "@/components/Home/VideoReveal/VideoReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "lenis/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home({
  headerRef,
}: {
  headerRef: React.RefObject<HTMLDivElement>;
}) {
  const container = useRef<HTMLElement>(null);

  const lenis = useLenis();

  useEffect(() => {
    lenis?.start();
  }, [lenis]);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      const children = Array.from(
        headerRef.current.children[0].children[1].children[0].children,
      );

      const matchingElements = children.filter((child) =>
        child.classList.contains("text-white"),
      );

      if (matchingElements.length > 1) {
        const animation = gsap
          .timeline({ defaults: { duration: 0.3 } })
          .to(container.current, { backgroundColor: "#f4f4f4" })
          .to(headerRef.current, { backgroundColor: "#f4f4f4" }, "<")
          .to(
            headerRef.current.children[0].children[1].children[0],
            { backgroundColor: "#f4f4f4" },
            "<",
          )
          .to(
            headerRef.current.children[0].children[0],
            { filter: "invert(0)" },
            "<",
          )
          .to(matchingElements[0], { color: "#000000" }, "<")
          .to(matchingElements[1], { color: "#000000" }, "<")
          .to(".hero-text", { color: "#000000" }, "<");

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
      <main ref={container} className="relative w-full bg-black">
        <Background />
        <Hero />
        <About />
        <VideoReveal />
        <div className="my-2 flex w-full items-center justify-center">
          <Link
            className="font-display text-center text-2xl uppercase underline underline-offset-2"
            href="/the-circle"
          >
            continue to the circle
          </Link>
        </div>
      </main>
    </>
  );
}
