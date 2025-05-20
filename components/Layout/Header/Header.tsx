import Link from "next/link";
import CustomLink from "./CustomLink";
import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef } from "react";

const Header = forwardRef<HTMLElement>((props, ref) => {
  const { pathname } = useRouter();

  return (
    <header
      ref={ref}
      className="fixed inset-0 z-20 flex h-fit w-full items-center justify-center bg-black"
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 py-8`}
      >
        <Link
          style={{
            filter: "invert(1)",
          }}
          href="/"
        >
          <Image
            className="monogram object-contain"
            src="/logo.png"
            alt="logo"
            height={40}
            width={150}
          />
        </Link>
        <div className="hidden items-center justify-center gap-2 lg:flex">
          <div className="flex items-center justify-center gap-12">
            <CustomLink pathname={pathname} href="/">
              The Essence
            </CustomLink>
            <CustomLink pathname={pathname} href="/the-circle">
              The Circle
            </CustomLink>
            <CustomLink pathname={pathname} href="/the-intention">
              The Intention
            </CustomLink>
          </div>
          <Image
            className="min-w-10 object-contain"
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
