import { useRef } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./Loader";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const lonear = localFont({ src: "fonts/Lonear.otf", variable: "--lonear" });
const proximaNova = localFont({
  src: "fonts/ProximaNova.woff2",
  variable: "--proxima-nova",
});

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".logo", { yPercent: -100, delay: 0.5 })
        .to(".lights", { opacity: 1, duration: 1.5 })
        .to(".logo", { yPercent: -220, delay: 1.5 }, "<0.5")
        .to(".lights", { opacity: 0, duration: 1.5 }, "<")
        .to(".loader", { opacity: 0, duration: 0.5, pointerEvents: "none" });

      const animation = gsap
        .timeline()
        .to(".header-link", { color: "#3d3d3d" })
        .to(".monogram", { filter: "invert(0)" }, "<");

      ScrollTrigger.create({
        trigger: ".about-section",
        toggleActions: "play none none reverse",
        animation,
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className={`${lonear.variable} ${proximaNova.variable} overflow-x-hidden bg-[#f4f4f4] font-sans`}
    >
      <Loader />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
