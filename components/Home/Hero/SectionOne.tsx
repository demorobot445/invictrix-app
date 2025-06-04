import { useMultilineText } from "@/hooks/useMultilineText";
import type { HomeHeroSection } from "@/types/invictrix";

type Props = HomeHeroSection & {};

const SectionOne: React.FC<Props> = (props) => {
  const [heading, paragraphOne, paragraphTwo] = useMultilineText([
    props.heading,
    props.paragraphOne,
    props.paragraphTwo,
  ]);

  return (
    <div className="section-1 mt-[70px] flex h-full min-h-[calc(100vh-70px)] w-full flex-col px-3 lg:mt-[114px] lg:min-h-[calc(100vh-114px)] lg:flex-row lg:p-0">
      <div className="lg:min-h-none min-h-[45vh] lg:w-1/2"></div>
      <div className="flex flex-col items-center justify-center gap-4 lg:w-1/2 lg:items-start lg:gap-8">
        <h1 className="section-1-heading-1 text-dark-primary font-display z-50 text-center text-4xl font-black lg:text-left lg:text-6xl">
          {heading}
        </h1>
        <p className="section-1-para-1 hero-text z-40 text-center text-white lg:max-w-none lg:text-left lg:text-2xl">
          {paragraphOne}
        </p>
        <p className="section-1-para-2 hero-text z-40 text-center text-white lg:max-w-none lg:text-left lg:text-2xl">
          {paragraphTwo}
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
