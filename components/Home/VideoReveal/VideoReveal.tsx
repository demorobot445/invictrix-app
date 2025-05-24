import Card from "./Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { Essence, EssenceHeading } from "@/types/invictrix";

type Props = { data: Essence[]; heading: EssenceHeading };

const VideoReveal: React.FC<Props> = ({ data, heading }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const breakPoint = 800;

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

          data.forEach((_elem, index) => {
            if (index !== 0) {
              gsap.set(`.card-${index}`, { y: innerHeight, opacity: 0 });
              gsap.set(`.media-${index}`, { opacity: 0 });
            }
          });

          const animation = gsap.timeline().addLabel("start");

          data.slice(0, data.length - 1).forEach((elem, index) => {
            animation
              .to(`.card-${index}`, { y: -innerHeight, opacity: 0 })
              .to(`.media-${index}`, { opacity: 0 }, "<")
              .to(
                `.head-${index}`,
                { y: isMobile ? -28 * (index + 1) : -40 * (index + 1) },
                "<",
              )
              .to(`.card-${index + 1}`, { y: 0, opacity: 1 })
              .to(`.media-${index + 1}`, { opacity: 1 }, "<")
              .to(
                `.head-${index + 1}`,
                { y: isMobile ? -28 * (index + 1) : -40 * (index + 1) },
                "<",
              )
              .addLabel(`${elem.hightlightText}`);
          });

          ScrollTrigger.create({
            trigger: container.current!,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            snap: {
              snapTo: "labelsDirectional",
              delay: 0,
              duration: 1,
            },
            animation,
            end: `+=${innerHeight * data.length}`,
          });
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="body-care-section relative container mx-auto flex max-h-screen min-h-screen flex-col items-center justify-center"
    >
      <h1 className="font-display absolute top-[75px] left-1/2 z-20 w-full -translate-x-1/2 text-center text-xl font-bold text-black uppercase lg:top-[18%] lg:text-4xl 2xl:top-[25%]">
        {heading.headingFirstPart}{" "}
        <span className="text-dark-primary inline-flex h-[20px] flex-col overflow-hidden lg:h-[40px]">
          {data.map(({ hightlightText }, index) => {
            return (
              <span key={index} className={`head-${index} inline-block`}>
                {hightlightText}
              </span>
            );
          })}
        </span>
        <br />
        {heading.headingSecondPart}
      </h1>
      <div className="absolute top-1/2 left-0 mt-[75px] aspect-video w-[calc(100%-24px)] -translate-y-1/2 px-3 lg:top-auto lg:left-auto lg:mt-0 lg:w-[420px] lg:translate-y-0 lg:px-0 2xl:w-[500px]">
        {data.map((elem, index) => {
          return (
            <video
              key={index}
              className={`media-${index} absolute top-0 z-10 h-full w-full object-cover`}
              muted
              autoPlay
              playsInline
              loop
            >
              <source src={elem.video.url} type="video/mp4" />
            </video>
          );
        })}
      </div>
      {data.map((elem, index) => {
        return <Card key={index} index={index} {...elem} />;
      })}
    </section>
  );
};

export default VideoReveal;
