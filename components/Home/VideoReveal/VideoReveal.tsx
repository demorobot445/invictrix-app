import Card from "./Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { data } from "./data";

const VideoReveal = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".card-1", { y: innerHeight, opacity: 0 });
      gsap.set(".card-2", { y: innerHeight, opacity: 0 });
      gsap.set(".card-3", { y: innerHeight, opacity: 0 });
      gsap.set(".media-1", { opacity: 0 });
      gsap.set(".media-2", { opacity: 0 });
      gsap.set(".media-3", { opacity: 0 });

      const animation = gsap
        .timeline()
        .addLabel("start")
        .to(".card-0", { y: -innerHeight, opacity: 0 })
        .to(".media-0", { opacity: 0 }, "<")
        .to(".head-0", { y: -40 }, "<")
        .to(".card-1", { y: 0, opacity: 1 })
        .to(".media-1", { opacity: 1 }, "<")
        .to(".head-1", { y: -40 }, "<")
        .addLabel("second")
        .to(".card-1", { y: -innerHeight, opacity: 0 })
        .to(".media-1", { opacity: 0 }, "<")
        .to(".head-1", { y: -80 }, "<")
        .to(".card-2", { y: 0, opacity: 1 })
        .to(".media-2", { opacity: 1 }, "<")
        .to(".head-2", { y: -80 }, "<")
        .addLabel("third")
        .to(".card-2", { y: -innerHeight, opacity: 0 })
        .to(".media-2", { opacity: 0 }, "<")
        .to(".head-2", { y: -120 }, "<")
        .to(".card-3", { y: 0, opacity: 1 })
        .to(".media-3", { opacity: 1 }, "<")
        .to(".head-3", { y: -120 }, "<")
        .addLabel("fouth");

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
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="body-care-section relative container mx-auto mb-24 flex min-h-screen flex-col items-center justify-center py-24"
    >
      <h1 className="font-display absolute top-12 left-1/2 z-20 -translate-x-1/2 text-center text-4xl font-bold text-black uppercase lg:top-[18%] 2xl:top-[25%]">
        it begins with{" "}
        <span className="text-dark-primary inline-flex h-[40px] flex-col overflow-hidden">
          <span className="head-0 inline-block">truth</span>
          <span className="head-1 inline-block">feeling</span>
          <span className="head-2 inline-block">trust</span>
          <span className="head-3 inline-block">sense</span>
        </span>
        <br />
        and becomes everything
      </h1>
      <div className="absolute aspect-video lg:w-[420px] 2xl:w-[500px]">
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
              <source src={elem.mediaUrl} type="video/mp4" />
            </video>
          );
        })}
      </div>
      {data.map((elem, index) => {
        return <Card key={index} id={index} {...elem} />;
      })}
    </section>
  );
};

export default VideoReveal;
