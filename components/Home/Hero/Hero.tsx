import {
  HomeHeroSection,
  HomeSectionThree,
  HomeSectionTwo,
} from "@/types/invictrix";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

type Props = {
  heroSection: HomeHeroSection;
  sectionTwo: HomeSectionTwo;
  sectionThree: HomeSectionThree;
};

const Hero: React.FC<Props> = ({ heroSection, sectionThree, sectionTwo }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(".section-1-heading-1", { opacity: 0, delay: 0.5 })
        .from(".section-1-para-1", { opacity: 0 })
        .from(".section-1-para-2", { opacity: 0 });

      const sectionTwoAnimation = gsap
        .timeline()
        .from(".section-2-heading-1", { opacity: 0 })
        .from(".section-2-para-1", { opacity: 0 })
        .from(".section-2-para-2", { opacity: 0 });

      ScrollTrigger.create({
        trigger: ".section-2",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        animation: sectionTwoAnimation,
      });

      const sectionThreeAnimation = gsap
        .timeline()
        .from(".section-3-para-1", { opacity: 0 })
        .from(".section-3-heading-1", { opacity: 0 });

      ScrollTrigger.create({
        trigger: ".section-3",
        start: "80% bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        animation: sectionThreeAnimation,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative container mx-auto flex w-full flex-col items-center"
    >
      <div className="section-1 mt-[70px] flex h-full min-h-[calc(100vh-70px)] w-full flex-col px-3 lg:mt-[114px] lg:min-h-[calc(100vh-114px)] lg:flex-row lg:p-0">
        <div className="lg:min-h-none min-h-[45vh] lg:w-1/2"></div>
        <div className="flex max-w-[550px] flex-col items-center justify-center gap-4 lg:w-1/2 lg:items-start lg:gap-8">
          <h1 className="section-1-heading-1 text-dark-primary font-display z-50 max-w-[500px] text-center text-4xl font-black lg:text-left lg:text-6xl">
            {heroSection.heading}
          </h1>
          <p className="section-1-para-1 hero-text z-40 max-w-[280px] text-center text-white lg:max-w-none lg:text-left lg:text-2xl">
            {heroSection.paragraphOne}
          </p>
          <p className="section-1-para-2 hero-text z-40 max-w-[280px] text-center text-white lg:max-w-none lg:text-left lg:text-2xl">
            {heroSection.paragraphTwo}
          </p>
        </div>
      </div>
      <div className="section-2 flex h-full min-h-screen w-full flex-col-reverse items-center px-3 lg:flex-row lg:px-0">
        <div className="flex h-full max-w-[550px] flex-col justify-center gap-4 lg:w-1/2 lg:gap-8">
          <h1 className="section-2-heading-1 text-dark-primary font-display z-40 max-w-[400px] text-center text-4xl font-bold lg:text-left lg:text-5xl">
            {sectionTwo.heading}
          </h1>
          <p className="section-2-para-1 hero-text z-40 text-center text-white lg:text-left lg:text-2xl">
            {sectionTwo.paragraphOne}
          </p>
          <p className="section-2-para-2 hero-text z-40 text-center text-white lg:text-left lg:text-2xl">
            {sectionTwo.paragraphTwo}
          </p>
        </div>
        <div className="min-h-[50vh] w-full lg:w-1/2"></div>
      </div>
      <div className="section-3 flex h-full min-h-screen w-full flex-col items-end justify-center px-3 lg:px-0">
        <div className="flex max-w-[550px] flex-col items-center justify-center gap-8">
          <p className="section-3-para-1 hero-text z-40 max-w-[800px] text-center text-white lg:text-left lg:text-2xl">
            {sectionThree.paragraph}
          </p>
          <h1 className="section-3-heading-1 text-dark-primary font-display z-40 text-center text-2xl font-bold lg:text-left lg:text-5xl">
            {sectionThree.heading}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
