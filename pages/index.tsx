"use client";
import Background from "@/components/Background/Background";
import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import VideoReveal from "@/components/Home/VideoReveal/VideoReveal";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "lenis/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Points, ShaderMaterial, Vector3 } from "three";
import Scene from "./particles/components/Scene";

export default function Home({
  headerRef,
}: {
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

  const [particles, setParticles] = useState<Points | null>(null);
  const refHero = useRef<HTMLDivElement>(null);
  const refAbout = useRef<HTMLDivElement>(null);

  // Function to manipulate the particles
  // const testParticleManipulation = () => {
  //   if (particlesRef.current) {
  //     // Rotate the particles
  //     particlesRef.current.rotation.y += Math.PI / 4;

  //     // Access the material if needed
  //     // const material = particlesRef.current.material as ShaderMaterial;
  //     // if (material && material.uniforms) {
  //     //   // Example: change a uniform value if it exists
  //     //   if (material.uniforms.uDisperse) {
  //     //     material.uniforms.uDisperse.value = 0.5;
  //     //     material.uniformsNeedUpdate = true;
  //     //   }
  //     // }
  //   } else {
  //     console.log("Particles ref not available yet");
  //   }
  // };

  // Try multiple times to manipulate the particles to ensure the ref is available
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

      if (!particles) return;

      particles.position.set(900, 0, 0);
      particles.rotation.set(0, -Math.PI * 2.2, 0);

      const material = particles.material as ShaderMaterial;
      const particlesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: refHero.current,
          scrub: true,
        },
      });

      particlesTimeline.to(particles.position, {
        x: -350,
        ease: "power1.inOut",
      });

      particlesTimeline.to(
        particles.rotation,
        {
          y: 0,
          ease: "power1.inOut",
        },
        "<",
      );

      particlesTimeline.to(particles.position, {
        x: 0,
        ease: "power1.inOut",
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: refAbout.current,
          scrub: true,
        },
      });

      tl2.to(material.uniforms.uDisperse, {
        value: 1,
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
        <Background />
        <div className="fixed inset-0 h-screen bg-transparent">
          <Canvas
            camera={{
              fov: 50,
              far: 6000,
              near: 0.0001,
              aspect: dimensions.x / dimensions.y,
              position: new Vector3(0, 0, 800),
            }}
          >
            <Scene ref={setParticles} />
          </Canvas>
        </div>
        <div ref={refHero}>
          <Hero />
        </div>
        <div ref={refAbout}>
          <About />
        </div>
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
