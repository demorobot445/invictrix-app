import Link from "next/link";
import CustomLink from "./CustomLink";
import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = forwardRef<HTMLElement>((props, ref) => {
  const { pathname } = useRouter();

  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 800px)", () => {
        tl.current! = gsap.timeline({ reversed: true }).to(".menu", {
          clipPath: "inset(0% 0% 0% 0%)",
          pointerEvents: "auto",
          duration: 0.8,
        });
      });
    },
    { scope: container },
  );

  const handleClick = () => {
    if (innerWidth < 800) tl.current?.reversed(!tl.current?.reversed());
  };

  return (
    <header
      ref={ref}
      className={`fixed inset-0 z-40 flex h-fit w-full items-center justify-center ${pathname === "/the-circle" ? "bg-white lg:bg-transparent" : "bg-black"}`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 py-4 lg:py-8`}
      >
        <Link
          style={{
            filter: pathname === "/the-circle" ? "invert(0)" : "invert(1)",
          }}
          href="/"
          className="relative z-20"
        >
          <Image
            className="monogram object-contain"
            src="/logo.png"
            alt="logo"
            height={40}
            width={150}
          />
        </Link>
        <div ref={container} className="flex items-center justify-center gap-2">
          <div
            className={`menu clip-menu fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-12 lg:relative lg:flex-row ${pathname === "/the-circle" ? "bg-white lg:bg-transparent" : "bg-black lg:bg-transparent"} `}
          >
            <CustomLink handleClick={handleClick} pathname={pathname} href="/">
              The Essence
            </CustomLink>
            <CustomLink
              handleClick={handleClick}
              pathname={pathname}
              href="/the-circle"
            >
              The Circle
            </CustomLink>
            <CustomLink
              handleClick={handleClick}
              pathname={pathname}
              href="/the-intention"
            >
              The Intention
            </CustomLink>
          </div>
          <Image
            onClick={handleClick}
            className="z-20 w-9 object-contain lg:w-[50px]"
            src="/black-monogram.png"
            alt="monogram"
            height={50}
            width={50}
          />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Main Header";

export default Header;
