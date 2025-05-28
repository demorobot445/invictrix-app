import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Inquiries = () => {
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
      <div className="flex flex-col justify-center gap-7 lg:w-1/2">
        <h1
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
          className="z-40 cursor-pointer text-center text-2xl text-white lg:text-4xl"
        >
          if you already hold a mark,
          <br />
          you may contact us directly.
        </h1>
        <p className="reveal-text font-display text-primary z-40 text-center text-2xl opacity-0 lg:text-4xl">
          inquiries@invictrixventures.com
        </p>
      </div>
      <div className="lg:w-1/2"></div>
    </section>
  );
};

export default Inquiries;
