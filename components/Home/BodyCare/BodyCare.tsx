import Image from "next/image";
import Card from "./Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
// import BodyCareBackground from "@/components/Background/BodyCareBackground";

const BodyCare = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".card-2", { y: innerHeight, opacity: 0 });
      gsap.set(".card-3", { y: innerHeight, opacity: 0 });
      gsap.set(".card-4", { y: innerHeight, opacity: 0 });
      gsap.set(".img-2", { opacity: 0 });
      gsap.set(".img-3", { opacity: 0 });
      gsap.set(".img-4", { opacity: 0 });

      const animation = gsap
        .timeline()
        .addLabel("start")
        .to(".card-1", { y: -innerHeight, opacity: 0 })
        .to(".img-1", { opacity: 0 }, "<")
        .to(".head-1", { y: -48 }, "<")
        .to(".card-2", { y: 0, opacity: 1 })
        .to(".img-2", { opacity: 1 }, "<")
        .to(".head-2", { y: -48 }, "<")
        .addLabel("second")
        .to(".card-2", { y: -innerHeight, opacity: 0 })
        .to(".img-2", { opacity: 0 }, "<")
        .to(".head-2", { y: -96 }, "<")
        .to(".card-3", { y: 0, opacity: 1 })
        .to(".img-3", { opacity: 1 }, "<")
        .to(".head-3", { y: -96 }, "<")
        .addLabel("third")
        .to(".card-3", { y: -innerHeight, opacity: 0 })
        .to(".img-3", { opacity: 0 }, "<")
        .to(".head-3", { y: -144 }, "<")
        .to(".card-4", { y: 0, opacity: 1 })
        .to(".img-4", { opacity: 1 }, "<")
        .to(".head-4", { y: -144 }, "<")
        .addLabel("fouth");

      ScrollTrigger.create({
        trigger: container.current!,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        snap: {
          snapTo: "labelsDirectional",
          delay: 0,
          duration: 1,
        },
        animation,
        end: "+=1500",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="body-care-section relative container mx-auto mb-24 flex min-h-screen flex-col items-center justify-center py-24"
    >
      {/* <BodyCareBackground /> */}
      <h1 className="text-dark font-display absolute top-12 left-1/2 z-20 -translate-x-1/2 text-center text-5xl uppercase 2xl:top-24">
        it begins with{" "}
        <span className="inline-flex h-[48px] flex-col overflow-hidden">
          <span className="head-1 inline-block">
            tr<span className="text-primary">u</span>th
          </span>
          <span className="head-2 inline-block">feeling</span>
          <span className="head-3 inline-block">trust</span>
          <span className="head-4 inline-block">sense</span>
        </span>
        <br />
        and becomes everything
      </h1>
      <div className="absolute top-48 h-[490px] w-[350px] 2xl:top-auto 2xl:h-[590px] 2xl:w-[450px]">
        <Image
          className="img-1 absolute top-0 z-10 h-full w-full object-cover"
          src="/body-care/0.jpg"
          alt="hero-img"
          height={590}
          width={450}
        />
        <Image
          className="img-2 absolute top-0 z-10 h-full w-full object-cover"
          src="/body-care/1.jpg"
          alt="hero-img"
          height={590}
          width={450}
        />
        <Image
          className="img-3 absolute top-0 z-10 h-full w-full object-cover"
          src="/body-care/2.jpg"
          alt="hero-img"
          height={590}
          width={450}
        />
        <Image
          className="img-4 absolute top-0 z-10 h-full w-full object-cover"
          src="/body-care/3.jpg"
          alt="hero-img"
          height={590}
          width={450}
        />
      </div>
      <Card
        id={1}
        romanNumber="I"
        tag="Timeless, Endrance"
        description="Formulated with Pure Epsom Salt, Natural Essential Oils and Minerals to gently exfoliate skin and soothe the senses."
      />
      <Card
        id={2}
        romanNumber="II"
        tag="Emotions Dreams"
        description="Purifying that restore and smooth skin, leaving you with a radiant glow throughout the day to night."
      />
      <Card
        id={3}
        romanNumber="III"
        tag="Safe passage, profession"
        description="A Secret Ingredient from the Asian Tropics that will reach new lengths literally, promoting natural hair growth."
      />
      <Card
        id={4}
        romanNumber="IV"
        tag="Precision, Deep listening"
        description="A Secret Ingredient from the Asian Tropics that will reach new lengths literally, promoting natural hair growth."
      />
    </section>
  );
};

export default BodyCare;
