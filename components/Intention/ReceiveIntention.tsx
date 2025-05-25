import { IntentionHeroSection } from "@/types/invictrix";

type Props = IntentionHeroSection & {};

const ReceiveIntention: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-2 px-3 lg:gap-4 lg:px-0">
      <h1 className="text-center text-2xl text-white lg:text-4xl">
        {subHeading}
      </h1>
      <h2 className="font-display text-primary text-center text-2xl font-bold uppercase lg:text-5xl">
        {heading}
      </h2>
    </section>
  );
};

export default ReceiveIntention;
