import { useMultilineText } from "@/hooks/useMultilineText";
import type { HomeSectionTwo } from "@/types/invictrix";

type Props = HomeSectionTwo & {};

const SectionTwo: React.FC<Props> = (props) => {
  const [heading, paragraphOne, paragraphTwo] = useMultilineText([
    props.heading,
    props.paragraphOne,
    props.paragraphTwo,
  ]);

  return (
    <div className="section-2 flex h-full min-h-screen w-full flex-col-reverse items-center px-3 lg:flex-row lg:px-0">
      <div className="flex h-full max-w-[550px] flex-col justify-center gap-4 lg:w-1/2 lg:gap-8">
        <h1 className="section-2-heading-1 text-dark-primary font-display z-40 max-w-[400px] text-center text-4xl font-bold lg:text-left lg:text-5xl">
          {heading}
        </h1>
        <p className="section-2-para-1 hero-text z-40 text-center text-white lg:text-left lg:text-2xl">
          {paragraphOne}
        </p>
        <p className="section-2-para-2 hero-text z-40 text-center text-white lg:text-left lg:text-2xl">
          {paragraphTwo}
        </p>
      </div>
      <div className="min-h-[50vh] w-full lg:w-1/2"></div>
    </div>
  );
};

export default SectionTwo;
