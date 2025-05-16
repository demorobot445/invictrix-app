import { useRef } from "react";
import Form from "./Form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useLenis } from "lenis/react";

const EnterCircle = () => {
  const lenis = useLenis();
  const container = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const handleClick = contextSafe(() => {
    gsap
      .timeline()
      .call(() => lenis?.stop())
      .to(".popup-cover", { opacity: 1, pointerEvents: "auto" })
      .to(".popup", { scale: 1 });
  });

  const handleClose = contextSafe(() => {
    gsap
      .timeline()
      .call(() => lenis?.start())
      .to(".popup", { scale: 0 })
      .to(".popup-cover", { opacity: 0, pointerEvents: "none" });
  });

  return (
    <section ref={container}>
      <Form handleClose={handleClose} />
      <div className="container mx-auto flex min-h-screen flex-col px-4 lg:flex-row lg:px-0">
        <div className="lg:w-1/3"></div>
        <div className="flex flex-col justify-center gap-7 lg:w-2/3">
          <h1 className="text-primary font-display text-2xl lg:text-4xl">
            Not all who visit are meant 10 stay.
            <br />
            But clarity of purpose whispers louder than status.
          </h1>

          <p className="text-2xl text-white lg:text-4xl">
            Invictrix exists for those navigating their legacy with elegance,
            emotions, and precision.
          </p>

          <p className="text-2xl text-white lg:text-4xl">
            If you believe you belong within this circle, begin here with
            intention.
          </p>

          <p className="text-2xl text-white lg:text-4xl">
            Speak not of who you are, but of what you seek to become
          </p>
          <button
            onClick={handleClick}
            className="font-display mx-auto h-36 w-36 min-w-36 cursor-pointer rounded-full text-2xl text-white"
          >
            <Image
              className="h-full w-full object-contain"
              src="/buttons/enter-the-circle.png"
              height={144}
              width={144}
              alt="button"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterCircle;
