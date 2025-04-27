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
    gsap.to(".text-1", { yPercent: 100, ease: "power2.inOut" });
    gsap.to(".text-2", { yPercent: 100, ease: "power2.inOut" });
  });
  const handleLeave = contextSafe(() => {
    gsap.to(".text-1", { yPercent: 0, ease: "power2.inOut" });
    gsap.to(".text-2", { yPercent: 0, ease: "power2.inOut" });
  });

  return (
    <Link
      ref={container}
      className="font-display relative flex max-h-10 flex-col items-center justify-end overflow-hidden"
      href={href}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <span className="text-1 text-dark text-3xl">{children}</span>
      <span className="text-2 text-dark text-3xl">{children}</span>
    </Link>
  );
};

export default CustomLink;
