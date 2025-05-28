import { IntentionHeroSection } from "@/types/invictrix";

type Props = IntentionHeroSection & {};

const ReceiveIntention: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <section className="z-40 container mx-auto flex min-h-screen flex-col items-center justify-center gap-2 px-3 lg:gap-4 lg:px-0">
      <h1 className="z-40 text-center text-2xl text-white lg:text-5xl">
        {subHeading}
      </h1>
      <h2 className="font-display text-primary z-40 text-center text-2xl font-bold uppercase lg:text-5xl">
        {heading}
      </h2>
    </section>
  );
};

export default ReceiveIntention;
