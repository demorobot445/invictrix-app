import { useRef } from "react";
import Header from "./Header/Header";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./Loader";

const lonear = localFont({ src: "fonts/Lonear.otf", variable: "--lonear" });
const proximaNova = localFont({
  src: "fonts/ProximaNova.woff2",
  variable: "--proxima-nova",
});

type Props = {
  children: React.ReactNode;
  headerRef: React.RefObject<HTMLElement | null>;
};

const Layout: React.FC<Props> = ({ children, headerRef }) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".logo", { opacity: 1, delay: 0.5 })
        .to(".lights", { opacity: 0.5, duration: 1.5 })
        .to(".logo", { opacity: 0, delay: 3 }, "<0.5")
        .to(".lights", { opacity: 0, duration: 1.5 }, "<")
        .to(".loader", { opacity: 0, duration: 0.5, pointerEvents: "none" });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className={`${lonear.variable} ${proximaNova.variable} overflow-x-hidden bg-[#f4f4f4] font-sans`}
    >
      <Loader />
      <Header ref={headerRef} />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
