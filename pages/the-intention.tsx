import EnterCircle from "@/components/Intention/EnterCircle";
import Inquiries from "@/components/Intention/Inquiries";
import Present from "@/components/Intention/Present";
import ReceiveIntention from "@/components/Intention/ReceiveIntention";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Points, ShaderMaterial, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Scene from "./particles/components/Scene";

export default function TheIntention() {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.start();
  }, [lenis]);

  const container = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const [particles, setParticles] = useState<Points | null>(null);
  const [dimensions, setDimensions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    setDimensions({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  useGSAP(
    () => {
      if (!particles) return;

      const scrub = true;

      const material = particles.material as ShaderMaterial;
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          scrub,
          // markers: true,
          end: "top 20%",
          invalidateOnRefresh: true,
        },
      });

      t1.to(particles.position, {
        x: -200,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t1.to(
        particles.rotation,
        {
          y: -Math.PI,
          ease: "power1.inOut",
          immediateRender: false,
        },
        "<",
      );

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ref2.current,
          scrub,
          // markers: true,
          end: "top 20%",
          invalidateOnRefresh: true,
        },
      });

      t2.to(particles.position, {
        x: 200,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t2.to(
        particles.rotation,
        {
          y: 0,
          ease: "power1.inOut",
          immediateRender: false,
        },
        "<",
      );

      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ref3.current,
          scrub,
          // markers: true,
          invalidateOnRefresh: true,
        },
      });

      t3.to(particles.position, {
        x: 0,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t3.to(
        material.uniforms.uDisperse,
        {
          value: 1,
          ease: "power1.inOut",
          immediateRender: false,
          onUpdate: () => {
            if (material) material.uniformsNeedUpdate = true;
          },
        },
        "<",
      );
    },

    { scope: container, dependencies: [particles] },
  );

  return (
    <>
      <Head>
        <title>Invictrix - The Intention</title>
      </Head>
      <main ref={container} className="w-full bg-black">
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
        <div>
          <ReceiveIntention />
        </div>
        <div ref={ref1}>
          <EnterCircle />
        </div>
        <div ref={ref2}>
          <Inquiries />
        </div>
        <div ref={ref3}>
          <Present />
        </div>
      </main>
    </>
  );
}
