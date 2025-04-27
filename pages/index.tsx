import Background from "@/components/Background/Background";
import About from "@/components/Home/About/About";
import AboutSlider from "@/components/Home/AboutImageSlider/AboutSlider";
import BodyCare from "@/components/Home/BodyCare/BodyCare";
import Choosing from "@/components/Home/Choosing/Choosing";
import Contact from "@/components/Home/Contact/Contact";
import Hero from "@/components/Home/Hero/Hero";
import Shop from "@/components/Home/Shop/Shop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1, defaults: { duration: 4 } })
        .to(".blur-hero-0", { opacity: 1 })
        .to(".blur-hero-0", { opacity: 0 })
        .to(".blur-hero-1", { opacity: 1 }, "<")
        .to(".blur-hero-1", { opacity: 0 })
        .to(".blur-hero-2", { opacity: 1 }, "<")
        .to(".blur-hero-2", { opacity: 0 })
        .to(".blur-hero-0", { opacity: 1 }, "<")
        .to(".blur-hero-0", { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".choosing-section",

            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(".blur-cover", {
          top: "10%",
          left: "42%",
          duration: 1,
          ease: "power2.out",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-care-section",

            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(".blur-cover", {
          top: "22%",
          left: "14%",
          duration: 1,
          ease: "power2.out",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about-section",

            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(".blur-cover", {
          top: "57%",
          left: "52%",
          duration: 1,
          ease: "power2.out",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shop-section",

            start: "top center",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(".blur-cover", {
          top: "75%",
          left: "13%",
          duration: 1,
          ease: "power2.out",
        });
    },
    { scope: container },
  );

  return (
    <>
      <Head>
        <title>Invictrix</title>
      </Head>
      <main ref={container} className="relative">
        <Background />
        <Hero />
        <Choosing />
        <BodyCare />
        <About />
        <AboutSlider />
        <Shop />
        <Contact />
      </main>
    </>
  );
}
