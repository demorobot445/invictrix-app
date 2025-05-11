import Link from "next/link";
import CustomLink from "./CustomLink";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="fixed left-1/2 z-20 container mx-auto flex -translate-x-1/2 items-center justify-between px-4 py-8 lg:px-0">
      <Link href="/">
        <Image
          style={{
            filter: pathname === "/the-intention" ? "invert(1)" : "invert(0)",
          }}
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
    </header>
  );
};

export default Header;
