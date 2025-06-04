import { useMultilineText } from "@/hooks/useMultilineText";
import type { HomeSectionThree } from "@/types/invictrix";

type Props = HomeSectionThree & {};

const SectionThree: React.FC<Props> = (props) => {
  const [heading, paragraph] = useMultilineText([
    props.heading,
    props.paragraph,
  ]);

  return (
    <div className="section-3 mb-20 flex h-full min-h-screen w-full flex-col items-end justify-center px-3 lg:mb-36 lg:px-0">
      <div className="flex max-w-[550px] flex-col items-center justify-center gap-8">
        <h1 className="section-3-heading-1 text-dark-primary font-display z-40 max-w-[230px] text-center text-2xl font-bold lg:max-w-none lg:text-left lg:text-5xl">
          {heading}
        </h1>
        <p className="section-3-para-1 hero-text z-40 max-w-[800px] text-center text-white lg:text-left lg:text-2xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
