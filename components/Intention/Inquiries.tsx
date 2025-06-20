import { IntentionContactSection } from "@/types/invictrix";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = IntentionContactSection & {};

const Inquiries: React.FC<Props> = ({ heading, email }) => {
  const container = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const handlePointerEnter = contextSafe(() => {
    gsap.to(".reveal-text", { opacity: 1 });
  });
  const handlePointerLeave = contextSafe(() => {
    gsap.to(".reveal-text", { opacity: 0 });
  });

  return (
    <section
      ref={container}
      className="container mx-auto flex min-h-screen flex-col px-3 lg:flex-row lg:px-0"
    >
      <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:gap-6">
        <h1
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
          className="z-40 max-w-[300px] cursor-pointer text-center text-white lg:text-2xl"
        >
          {heading}
        </h1>
        <p className="reveal-text font-display text-primary z-40 text-center opacity-100 lg:text-4xl lg:opacity-0">
          {email}
        </p>
      </div>
      <div className="lg:w-1/2"></div>
    </section>
  );
};

export default Inquiries;
