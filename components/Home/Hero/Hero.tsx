import type {
  HomeHeroSection,
  HomeSectionThree,
  HomeSectionTwo,
} from "@/types/invictrix";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

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
        .from(".section-3-heading-1", { opacity: 0 })
        .from(".section-3-para-1", { opacity: 0 });

      ScrollTrigger.create({
        trigger: ".section-3",
        start: "center bottom",
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
      <SectionOne {...heroSection} />
      <SectionTwo {...sectionTwo} />
      <SectionThree {...sectionThree} />
    </section>
  );
};

export default Hero;
