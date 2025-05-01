import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  children: string;
  href: string;
};

const CustomLink: React.FC<Props> = ({ children, href }) => {
  const container = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const handleEnter = contextSafe(() => {
    gsap.to(".text-1", { yPercent: -100, ease: "power2.inOut" });
    gsap.to(".text-2", { yPercent: -100, ease: "power2.inOut" });
  });
  const handleLeave = contextSafe(() => {
    gsap.to(".text-1", { yPercent: 0, ease: "power2.inOut" });
    gsap.to(".text-2", { yPercent: 0, ease: "power2.inOut" });
  });

  return (
    <Link
      ref={container}
      className="font-display relative flex max-h-8 flex-col items-center justify-start overflow-hidden"
      href={href}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <span className="header-link text-1 text-3xl text-white">{children}</span>
      <span className="header-link text-2 text-3xl text-white">{children}</span>
    </Link>
  );
};

export default CustomLink;
