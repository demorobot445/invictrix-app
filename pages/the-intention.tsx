import EnterCircle from "@/components/Intention/EnterCircle";
import Inquiries from "@/components/Intention/Inquiries";
import Present from "@/components/Intention/Present";
import ReceiveIntention from "@/components/Intention/ReceiveIntention";
import { useLenis } from "lenis/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Points, ShaderMaterial, Vector3 } from "three";
import useMobile from "@/hooks/useMobile";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { IntentionPageData } from "@/types/invictrix";
import { fetchGraphQL } from "@/libs/api";
import { INTENTIONPAGE_QUERY } from "@/libs/queries";
import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Scene from "@/src/particles/components/Scene";

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

  const container = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const { isMobile, screenWidth } = useMobile();
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
      const material = particles.material as ShaderMaterial;

      particles.position.set(-1500, -50, 0);
      material.uniforms.uOpacity.value = 0;

      if (isMobile) {
        const scale = 0.7;
        particles.scale.set(scale, scale, scale);
      }

      const scrub = true;

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          scrub,
          start: () => (isMobile ? "60% 80%" : "top bottom"),
          end: () => (isMobile ? "bottom bottom" : "bottom bottom"),
          invalidateOnRefresh: true,
        },
      });

      const getWidth = () => {
        if (screenWidth <= 768) return 0;
        if (screenWidth <= 1440) return -250;
        return -200;
      };

      t1.to(particles.position, {
        x: getWidth,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t1.to(
        material.uniforms.uOpacity,
        {
          value: 1,
          ease: "power1.inOut",
          immediateRender: false,
        },
        "<",
      );

      t1.to(
        particles.rotation,
        {
          y: -Math.PI * 1,
          ease: "power1.inOut",
          immediateRender: false,
        },
        "<",
      );

      const scale = isMobile ? 0.45 : 0.8;
      t1.to(
        particles.scale,
        {
          // y: -Math.PI,
          x: scale,
          y: scale,
          z: scale,
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

      const getX = () => {
        if (screenWidth <= 768) return 0;
        if (screenWidth <= 1440) return 250;
        return 200;
      };

      t2.to(particles.position, {
        x: getX,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t2.to(
        particles.rotation,
        {
          y: -Math.PI * 0.01,
          ease: "power1.inOut",
          immediateRender: false,
        },
        "<",
      );

      const t2Scale = isMobile ? 0.45 : 0.8;
      t2.to(
        particles.scale,
        {
          x: t2Scale,
          y: t2Scale,
          z: t2Scale,
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

      t3.to(material.uniforms.uDisperse, {
        value: 0,
        ease: "power1.inOut",
        immediateRender: false,
        onUpdate: () => {
          if (material) material.uniformsNeedUpdate = true;
        },
      });

      t3.to(particles.position, {
        x: 0,
        ease: "power1.inOut",
        immediateRender: false,
      });

      t3.to(particles.position, {
        x: 0,
        ease: "power1.inOut",
        immediateRender: false,
      });
    },

    { scope: container, dependencies: [particles] },
  );

  return (
    <>
      <Head>
        <title>Invictrix - The Intention</title>
      </Head>
      <main className="w-full bg-black">
        <div className="fixed inset-0 h-screen bg-transparent">
          <Canvas
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
            <Scene ref={setParticles} disableHover={true} />
          </Canvas>
        </div>
        <div className="z-50">
          <ReceiveIntention {...data.heroSection} />
        </div>
        <div ref={ref1}>
          <EnterCircle {...data.sectionTwo} />
        </div>
        <div ref={ref2}>
          <Inquiries {...data.contactSection} />
        </div>
        <div ref={ref3}>
          <Present {...data.contactSection} />
        </div>
      </main>
    </>
  );
}
