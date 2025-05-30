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
import { useEffect, useRef, useState } from "react";
import { Points, ShaderMaterial, Vector3 } from "three";
import Scene from "../src/particles/components/Scene";
import useMobile from "@/hooks/useMobile";
import { Canvas } from "@react-three/fiber";
import { fetchGraphQL } from "@/libs/api";
import { HOMEPAGE_QUERY } from "@/libs/queries";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { HomePageData } from "@/types/invictrix";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

export const getStaticProps = (async () => {
  const data: { home: HomePageData } = await fetchGraphQL(HOMEPAGE_QUERY);

  return {
    props: {
      data: data.home,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: HomePageData;
}>;

export default function Home({
  data,
  headerRef,
}: InferGetStaticPropsType<typeof getStaticProps> & {
  headerRef: React.RefObject<HTMLDivElement>;
}) {
  const container = useRef<HTMLElement>(null);

  const lenis = useLenis();

  const [dimensions, setDimensions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    setDimensions({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  const { isMobile } = useMobile();
  const [particles, setParticles] = useState<Points | null>(null);
  const refHero = useRef<HTMLDivElement>(null);
  const refAbout = useRef<HTMLDivElement>(null);
  const refVideo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lenis?.start();
  }, [lenis]);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      const children = Array.from(
        headerRef.current.children[0].children[1].children[0].children,
      );

      const lines = headerRef.current.querySelectorAll(".ham-line");

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
          .to(lines, { backgroundColor: "#000000" }, "<")
          .to(".hero-text", { color: "#000000" }, "<")
          .to(".scroll-text", { opacity: 0 }, "<");

        ScrollTrigger.create({
          toggleActions: "play none none reverse",
          animation,
          start: "center bottom",
          trigger: ".about-video",
        });
      }

      if (!particles) return;

      const x = isMobile ? 0 : -300;
      const y = isMobile ? 600 : -50;

      particles.position.set(x, y, 0);

      const rotationY = isMobile ? -Math.PI * 5.5 : -Math.PI;
      particles.rotation.set(0, rotationY, 0);

      const scale = isMobile ? 0.3 : 0.8;
      particles.scale.set(scale, scale, scale);

      const material = particles.material as ShaderMaterial;
      const particlesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: refHero.current,
          scrub: true,
          invalidateOnRefresh: true,
          start: () => (isMobile ? "top bottom" : "top top"),
          end: () => (isMobile ? "center bottom" : "center bottom"),
        },
      });

      const localScale = isMobile ? 0.4 : 0.8;
      particlesTimeline.to(
        particles.scale,
        {
          x: localScale,
          y: localScale,
          z: localScale,
          ease: "power1.inOut",
        },
        // "<",
      );

      particlesTimeline.to(
        particles.rotation,
        {
          y: () => (isMobile ? -Math.PI * 1.0 : -Math.PI * 2),
          ease: "power1.inOut",
        },
        "<",
      );

      particlesTimeline.to(
        particles.position,
        {
          x: () => (isMobile ? 0 : 300),
          y: () => (isMobile ? 0 : -50),
          ease: "power1.inOut",
          onUpdate: () => {
            if (material) material.uniformsNeedUpdate = true;
          },
        },
        "<",
      );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: refHero.current,
          scrub: true,
          invalidateOnRefresh: true,
          start: () => (isMobile ? "center 70%" : "center bottom"),
          end: () => (isMobile ? "70% top" : "center top"),
        },
      });

      tl2.to(particles.position, {
        x: () => (isMobile ? 600 : 0),
        ease: "power1.inOut",
      });

      if (isMobile) {
        tl2.to(
          particles.rotation,
          {
            y: -2 * Math.PI * 1.0,
            ease: "power1.inOut",
          },
          "<",
        );

        tl2.to(
          particles.position,
          {
            x: () => (isMobile ? 0 : -150),
            ease: "power1.inOut",
          },
          // "-=40%",
        );

        tl2.to(
          particles.rotation,
          {
            y: -Math.PI * 1.0,
            ease: "power1.inOut",
          },
          "<",
        );
      }

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: refAbout.current,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl3.to(material.uniforms.uDisperse, {
        value: 1,
        ease: "power1.inOut",
        onUpdate: () => {
          if (material) material.uniformsNeedUpdate = true;
        },
      });

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: refAbout.current,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl4.to(material.uniforms.uOpacity, {
        value: 0,
        ease: "power1.inOut",
        onUpdate: () => {
          if (material) material.uniformsNeedUpdate = true;
        },
      });
    },

    { scope: container, dependencies: [headerRef, particles] },
  );

  return (
    <>
      <Head>
        <title>Invictrix</title>
      </Head>
      <main ref={container} className="relative w-full bg-black">
        <div className="scroll-text pointer-events-none fixed bottom-2 -left-4 z-40 -translate-y-[40px] rotate-90 lg:right-2 lg:left-auto">
          <p className="text-white">Scroll Down</p>
        </div>
        <Background />{" "}
        <div className="pointer-events-auto fixed inset-0 z-20 h-screen bg-transparent">
          <Canvas
            gl={{ antialias: true }}
            orthographic
            camera={{
              left: -dimensions.x / 2,
              right: dimensions.x / 2,
              top: dimensions.y / 2,
              bottom: -dimensions.y / 2,
              near: 0.1,
              far: 2000,
              position: new Vector3(0, 0, 800),
              zoom: 1,
            }}
          >
            <Scene ref={setParticles} />
          </Canvas>
        </div>
        <div ref={refHero}>
          <Hero
            heroSection={data.heroSection}
            sectionTwo={data.sectionTwo}
            sectionThree={data.sectionThree}
          />
        </div>
        <div ref={refAbout}>
          <About {...data.sectionThree} />
        </div>
        <div ref={refVideo}>
          <VideoReveal data={data.essences} heading={data.essenceHeading} />
        </div>
        <div className="my-2 flex w-full items-center justify-center">
          <Link
            className="font-display z-40 text-center uppercase underline underline-offset-2"
            href="/the-circle"
          >
            continue to the circle
          </Link>
        </div>
      </main>
    </>
  );
}
