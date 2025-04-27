import Card from "./Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import BodyCareBackground from "@/components/Background/BodyCareBackground";

const AboutSlider = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".card-2", { y: innerHeight, opacity: 0 });
      gsap.set(".card-3", { y: innerHeight, opacity: 0 });
      gsap.set(".img-2", { opacity: 0 });
      gsap.set(".img-3", { opacity: 0 });

      const animation = gsap
        .timeline()
        .addLabel("start")
        .to(".card-1", { y: -innerHeight, opacity: 0 })
        .to(".img-1", { opacity: 0 }, "<")
        .to(".head-1", { y: -60 }, "<")
        .to(".card-2", { y: 0, opacity: 1 })
        .to(".img-2", { opacity: 1 }, "<")
        .to(".head-2", { y: -60 }, "<")
        .addLabel("second")
        .to(".card-2", { y: -innerHeight, opacity: 0 })
        .to(".img-2", { opacity: 0 }, "<")
        .to(".head-2", { y: -120 }, "<")
        .to(".card-3", { y: 0, opacity: 1 })
        .to(".img-3", { opacity: 1 }, "<")
        .to(".head-3", { y: -120 }, "<")
        .addLabel("third");

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
      className="body-care-section relative container mx-auto flex min-h-screen flex-col items-center justify-center py-24"
    >
      <BodyCareBackground />
      <h1 className="text-dark font-display absolute top-12 left-1/2 z-20 -translate-x-1/2 text-center text-6xl uppercase 2xl:top-24">
        it begins with{" "}
        <span className="inline-flex h-[60px] flex-col overflow-hidden">
          <span className="head-1 inline-block">truth</span>
          <span className="head-2 inline-block">feeling</span>
          <span className="head-3 inline-block">trust</span>
        </span>
        <br />
        and becomes everything
      </h1>
      <div className="absolute top-48 h-[490px] w-[350px] 2xl:top-auto 2xl:h-[590px] 2xl:w-[450px]">
        <div className="img-1 absolute top-0 z-10 flex aspect-[5/3.5] w-full items-center justify-center bg-[#231a12] object-cover">
          <h3 className="font-display text-7xl text-white uppercase">
            imperium
          </h3>
        </div>
        <div className="img-2 absolute top-0 z-10 flex aspect-[5/3.5] w-full items-center justify-center bg-[#97845a] object-cover">
          <h3 className="font-display text-7xl text-white uppercase">
            insignia
          </h3>
        </div>
        <div className="img-3 absolute top-0 z-10 flex aspect-[5/3.5] w-full items-center justify-center bg-[#d7c9a9] object-cover">
          <h3 className="font-display text-7xl text-white uppercase">
            illumine
          </h3>
        </div>
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
    </section>
  );
};

export default AboutSlider;
