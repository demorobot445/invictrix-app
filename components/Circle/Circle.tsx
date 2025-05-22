import { useRef } from "react";
import { getRandomTransform } from "./getRandomTransform";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "lenis/react";
import Link from "next/link";

const Circle = () => {
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
          gsap.set(".scroll-card-2", {
            xPercent: 100,
            scale: 0.5,
            opacity: 0.5,
          });
          gsap.set(".scroll-card-img-2", { rotateY: 20 });

          const animation = gsap
            .timeline()
            .addLabel("card-0")
            .to(".scroll-card-0", { xPercent: -100, opacity: 0.5 })
            .to(".scroll-card-1", { xPercent: 0, scale: 1, opacity: 1 }, "<")
            .to(".scroll-card-img-1", { rotateY: 0 }, "<")
            .to(".scroll-card-2", { xPercent: isMobile ? 100 : 45 }, "<")
            .addLabel("card-1")
            .to(".scroll-card-1", { xPercent: -100, opacity: 0.5 })
            .to(".scroll-card-2", { xPercent: 0, scale: 1, opacity: 1 }, "<")
            .to(".scroll-card-img-2", { rotateY: 0 }, "<")
            .addLabel("card-3")
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
            end: isMobile ? "+=2000" : "+=3000",
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
      className="relative h-lvh w-full overflow-hidden bg-black perspective-dramatic"
    >
      <div className="content absolute top-[70px] left-0 z-20 flex h-[calc(100%-70px)] w-full flex-col items-center justify-center gap-4 bg-black/60 px-3 lg:top-[114px] lg:h-[calc(100%-114px)] lg:px-0">
        <h1 className="font-display text-center text-4xl text-white lg:text-6xl">
          Enter The Circle
        </h1>
        <h2 className="text-dark-primary font-display text-center text-xl lg:text-2xl">
          Three tiers. One philosophy. Timeless access, intentionally scaled.
        </h2>
        <p className="text-center text-xl text-white lg:text-2xl">
          Explore the levels of membership that reflect not just access— but
          essence.
        </p>
        <h3 className="font-display text-xl text-white lg:text-2xl">
          Imperium. Illumine. Insignia.
        </h3>
        <button
          onClick={handlePathBegin}
          className="cursor-pointer text-xl text-white lg:text-2xl"
        >
          Your path begins here
        </button>
      </div>
      <div
        style={{ transform: "rotate3d(0,1,0,3deg)" }}
        className="main absolute inset-0 mt-[70px] grid h-[calc(100%-70px)] w-[100vh] -translate-x-48 scale-110 grid-cols-3 gap-x-0 gap-y-6 bg-black lg:mt-[114px] lg:h-[calc(100%-114px)] lg:w-full lg:translate-x-48 lg:scale-150 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6"
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
      <div className="image-scroller absolute inset-0 z-30 h-full w-full translate-x-full scale-0 overflow-hidden bg-black pt-[114px] opacity-0">
        <div className="scroll-card-grid relative flex h-full w-fit">
          <div className="show-next absolute bottom-0 z-30 flex w-screen items-center justify-center bg-black py-2 opacity-0">
            <Link
              className="font-display text-center text-2xl text-white uppercase underline underline-offset-2"
              href="/the-intention"
            >
              continue to the intention
            </Link>
          </div>
          {["I", "II", "III"].map((e, i) => {
            return (
              <div
                onClick={() => handleContent(i)}
                className={`absolute inset-0 cursor-pointer flex-col items-center justify-center px-3 lg:px-0 scroll-card-${i} flex h-full min-w-screen items-center justify-center perspective-midrange`}
                key={i}
              >
                <div
                  className={`scroll-card-img-${i} flex flex-col items-center justify-center`}
                >
                  <h1
                    className={`scroll-content-${i} text-dark-primary font-display text-6xl uppercase opacity-0`}
                  >
                    imperium
                  </h1>
                  <p
                    className={`scroll-content-${i} font-display -mt-2 mb-4 text-white opacity-0`}
                  >
                    for those who command legacy
                  </p>
                  <div className="relative flex items-center justify-center">
                    <p
                      className={`scroll-roman-${i} font-display absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-9xl text-white`}
                    >
                      {e}
                    </p>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`aspect-video w-full object-cover lg:w-[40%]`}
                      src={`/the-circle-video/${i}.mp4`}
                    />
                  </div>
                  <p
                    className={`scroll-content-${i} mt-4 text-center text-white opacity-0 lg:max-w-1/2`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam nemo labore a vel, consequatur magnam molestias
                    recusandae ipsa sit dolorem cumque dolorum omnis officiis
                    unde at commodi illum error nihil?
                  </p>
                  <p
                    className={`scroll-content-${i} text-dark-primary font-display mt-4 text-2xl opacity-0`}
                  >
                    Time bends for the architect
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Circle;
