import { useRef } from "react";
import Form from "./Form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { IntentionSectionTwo } from "@/types/invictrix";

type Props = IntentionSectionTwo & {};

const EnterCircle: React.FC<Props> = ({
  heading,
  paragraphOne,
  paragraphThree,
  paragraphTwo,
}) => {
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
      <div className="container mx-auto flex min-h-screen flex-col px-3 lg:flex-row lg:px-0">
        <div className="lg:w-[60%]"></div>
        <div className="flex flex-col justify-center gap-2 lg:w-[40%] lg:gap-6">
          <h1 className="text-primary font-display text-2xl font-bold lg:text-4xl">
            {heading}
          </h1>

          <p className="text-white lg:text-2xl">{paragraphOne}</p>

          <p className="text-white lg:text-2xl">{paragraphTwo}</p>

          <p className="text-white lg:text-2xl">{paragraphThree}</p>
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
