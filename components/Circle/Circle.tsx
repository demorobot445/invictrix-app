import { useRef } from "react";
import { getRandomTransform } from "./getRandomTransform";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "lenis/react";
import Link from "next/link";
import {
  CircleCard,
  CircleContent,
  Partners as PartnersType,
  PartnerContents,
} from "@/types/invictrix";
import Partners from "./Partners";
import Card from "./Card";

type Props = {
  cards: CircleCard[];
  contents: CircleContent[];
  partners: PartnersType[];
  partnerContents: PartnerContents[];
} & {};

const Circle: React.FC<Props> = ({
  cards,
  contents,
  partnerContents,
  partners,
}) => {
  const container = useRef<HTMLElement>(null);

  const lenis = useLenis();

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia(),
        breakPoint = 800;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isMobile: boolean;
            isDesktop: boolean;
          };

          gsap
            .timeline()
            .call(() => lenis?.stop())
            .from(".main", { scale: 0, duration: 6 })
            .from(
              ".card",
              { opacity: 0, stagger: { each: 0.3, from: "center", amount: 1 } },
              "<1.5",
            )
            .from(".content", { opacity: 0, duration: 1 });

          gsap.set(".scroll-card-1", {
            xPercent: isMobile ? 100 : 45,
            scale: 0.5,
            opacity: 0.5,
          });
          gsap.set(".scroll-card-img-1", { rotateY: 20 });

          cards.slice(0, cards.length - 2).forEach((_elem, index) => {
            gsap.set(`.scroll-card-${index + 2}`, {
              xPercent: 100,
              scale: 0.5,
              opacity: 0.5,
            });
            gsap.set(`.scroll-card-img-${index + 2}`, { rotateY: 20 });
          });

          const animation = gsap.timeline().addLabel("start");

          cards.slice(0, cards.length - 1).forEach((elem, index) => {
            animation
              .to(`.scroll-card-${index}`, { xPercent: -100, opacity: 0.5 })
              .to(
                `.scroll-card-${index + 1}`,
                { xPercent: 0, scale: 1, opacity: 1 },
                "<",
              )
              .to(`.scroll-card-img-${index + 1}`, { rotateY: 0 }, "<")
              .to(
                `.scroll-card-${index + 2}`,
                { xPercent: isMobile ? 100 : 45 },
                "<",
              )
              .addLabel(`${elem.heading}`);
          });

          animation
            .to(".partners", { top: 0 })
            .addLabel("partners")
            .to(".show-next", { opacity: 1 })
            .addLabel("end");

          ScrollTrigger.create({
            trigger: container.current,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            snap: {
              duration: 0,
              snapTo: "labelsDirectional",
            },
            end: isMobile
              ? `+=${(innerHeight / 0.5) * cards.length}`
              : `+=${(innerHeight / 1) * cards.length}`,
            animation,
          });
        },
      );
    },
    { scope: container },
  );

  const handlePathBegin = contextSafe(() => {
    gsap
      .timeline()
      .to(".content", { opacity: 0 })
      .to(".card", {
        opacity: 0,
        stagger: { each: 0.3, from: "center", amount: 0.5 },
      })
      .to(".main", { scale: 2.5, duration: 0.8 }, "<")
      .call(() => lenis?.start())
      .to(".image-scroller", { scale: 1, opacity: 1, x: 0, duration: 3 });
  });

  const handleContent = contextSafe((id: number) => {
    gsap
      .timeline()
      .to(`.scroll-roman-${id}`, { opacity: 0 })
      .to(`.scroll-content-${id}`, { opacity: 1 }, "<");
  });

  return (
    <section
      ref={container}
      className="relative h-lvh w-full overflow-hidden bg-white perspective-dramatic"
    >
      <div className="content absolute top-1/2 left-1/2 z-20 flex h-full w-full -translate-1/2 flex-col items-center justify-center gap-4 bg-black/30 p-3 lg:h-fit lg:w-fit lg:min-w-[1000px] lg:bg-black/80 lg:p-20">
        <h1 className="font-display text-center text-4xl text-white lg:text-6xl">
          {contents[0].heading}
        </h1>
        <h2 className="text-dark-primary font-display text-center text-xl lg:text-2xl">
          {contents[0].paragraphOne}
        </h2>
        <p className="text-center text-xl text-white lg:text-2xl">
          {contents[0].paragraphTwo}
        </p>
        <h3 className="font-display text-xl text-white lg:text-2xl">
          {contents[0].paragraphThree}
        </h3>
        <button
          onClick={handlePathBegin}
          className="cursor-pointer text-xl text-white lg:text-2xl"
        >
          {contents[0].button}
        </button>
      </div>
      <div
        style={{ transform: "rotate3d(0,1,0,3deg)" }}
        className="main absolute inset-0 mt-[70px] grid h-[calc(100%-70px)] w-[100vh] -translate-x-48 scale-110 grid-cols-3 gap-x-0 gap-y-6 bg-white lg:mt-[114px] lg:h-[calc(100%-114px)] lg:w-full lg:translate-x-48 lg:scale-150 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6"
      >
        {[...Array(12)].map((_, i) => {
          return (
            <div
              key={i}
              className="card"
              style={{
                transform: getRandomTransform(),
              }}
            >
              <Image
                className="h-full w-full object-cover"
                src={`/the-circle/${i}.jpg`}
                alt="placeholder-img"
                width={1366}
                height={689}
              />
            </div>
          );
        })}
      </div>
      <div className="image-scroller absolute inset-0 z-30 h-full w-full translate-x-full scale-0 overflow-hidden bg-white pt-[70px] opacity-0 lg:pt-[114px]">
        <div className="scroll-card-grid relative flex h-full w-fit">
          {cards.map((elem, index) => {
            return (
              <Card
                key={index}
                {...elem}
                index={index}
                handleContent={handleContent}
              />
            );
          })}
        </div>
      </div>
      <Partners {...partnerContents[0]} partners={partners} />
      <div className="show-next absolute bottom-0 z-30 flex w-screen items-center justify-center py-2 opacity-0">
        <Link
          className="font-display text-center text-black uppercase underline underline-offset-2"
          href="/the-intention"
        >
          continue to the intention
        </Link>
      </div>
    </section>
  );
};

export default Circle;
